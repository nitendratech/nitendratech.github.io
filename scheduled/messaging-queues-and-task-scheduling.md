---
title: "Messaging, Queues, and Task Scheduling"
description: "How distributed queues and pub-sub systems work, what delivery guarantees really mean, and how to design a task scheduler that runs reliably every night."
pubDate: 2026-11-24
category: data-engineering
subcategory: System Design
draft: false
---

*Focus keyword: messaging queues and task scheduling design. Research basis: system design study guide from the knowledge base (Glassdoor system design guide) and the foundations post on this site. Goes one level deeper than the foundations overview on messaging and the building-blocks table.*

## What Is a Message Queue?

**Definition:** A message queue decouples producers from consumers. A producer writes a message and moves on; a consumer reads it when it is ready. The queue absorbs the difference in speed between the two sides, which is the entire point: without it, a fast producer either blocks or overwhelms a slow consumer.

The foundations post introduced the queue-vs-log distinction and the delivery guarantees. This post goes deeper into how queues are designed, how Kafka works as a distributed commit log, and how the same ideas apply to scheduling work — because a task scheduler is, at heart, a queue with a clock.

## Queue vs Pub-Sub vs Log

**Definition:** These are three delivery patterns, and confusing them is the most common mistake in this topic.

- **Point-to-point queue:** each message is delivered to exactly one consumer. A work queue for image processing: one worker picks up each image, processes it, and acknowledges it.
- **Pub-sub:** each message is delivered to every subscriber. A price-change event goes to the pricing service, the search indexer, and the notification service, each independently.
- **Commit log:** messages are appended to an ordered, durable, replayable log. Consumers track their own position in the log. Kafka is the canonical example: a topic is a log, and each consumer group reads it independently.

The differences that matter: a queue deletes a message once consumed, so there is no replay; a log keeps messages for a retention period, so a consumer can re-read history. A queue guarantees one consumer per message; pub-sub guarantees one delivery per subscriber. A log gives you both patterns at once, because each consumer group is a subscriber and the group splits work across its members.

**Data engineering example:** A clickstream pipeline is a log, not a queue. The same event stream feeds a real-time dashboard, a fraud-detection job, and a nightly batch load into the lakehouse. If it were a point-to-point queue, the first consumer would eat the events and the other two would starve. The replayability is what makes the log the default backbone of a data platform: when a consumer has a bug, you rewind its offset and reprocess history instead of losing the data.

**The trade-off to say out loud:** "A queue is for distributing work. A log is for distributing facts. I reach for a log when more than one consumer needs the same events, or when I might need to reprocess them later."

## Delivery Guarantees: What They Really Mean

**Definition:** A delivery guarantee describes what happens when something fails mid-delivery. There are three, and only two of them are honest.

- **At-most-once:** a message may be lost, never duplicated. The producer sends and does not retry. Use it only when losing data is acceptable — metrics, best-effort logging.
- **At-least-once:** a message may be delivered twice. The producer retries until it gets an acknowledgement, and a crash between delivery and acknowledgement causes a duplicate. This is the default of most real systems.
- **Exactly-once:** a message is delivered once and only once. True exactly-once delivery is impossible in the presence of failures — the receiver cannot distinguish a retry from a new message. What systems call exactly-once is **effectively-once**: at-least-once delivery plus idempotent processing, so a duplicate has no effect.

**Idempotency** is the mechanism that makes effectively-once real. A consumer that writes with a unique message ID and a conditional write (insert if not exists, or upsert keyed by the message ID) can process the same message ten times and change the result once. Kafka's exactly-once semantics work this way: idempotent producers assign sequence numbers, and transactions let a consumer read, process, and write atomically.

**Dead-letter queues (DLQs)** are where messages go when they cannot be processed after several retries — a poison message, a malformed record, a downstream outage. Without a DLQ, a single bad message blocks the whole consumer. With one, the bad message is quarantined for inspection while the rest of the stream flows.

**Data engineering example:** A streaming ETL job that reads orders from Kafka and writes to Delta Lake must be idempotent, because Structured Streaming will reprocess a micro-batch after a failure. The merge is keyed by order ID, so a reprocessed batch upserts the same rows instead of doubling them. The DLQ catches the order with a null customer ID; the pipeline does not stop for one bad record.

**The trade-off to say out loud:** "I do not promise exactly-once delivery. I promise at-least-once delivery with idempotent consumers, and I can show you the mechanism."

## Kafka as a Distributed Commit Log

**Definition:** Kafka is a distributed, partitioned, replicated commit log. Producers append to topics, consumers read from them, and the log is the system of record.

The pieces that matter for a design interview:

- **Topics and partitions:** a topic is split into partitions, each an ordered log on one broker. Partitions are the unit of parallelism: a topic with 12 partitions can be consumed by up to 12 consumers in a group.
- **Partition key:** records with the same key land in the same partition, in order. Ordering is guaranteed within a partition, never across partitions.
- **Consumer groups:** each group reads every message once, splitting partitions across its members. Adding a consumer rebalances the partitions. A group that grows beyond the partition count leaves consumers idle.
- **Offsets:** each consumer tracks how far it has read. Committing offsets is the consumer's "I have processed this" marker — commit too early and a crash loses data; commit too late and a crash replays it.
- **In-sync replicas (ISR):** each partition has a leader and followers. A message is committed once all in-sync replicas have it. A follower that falls behind drops out of the ISR, and the durability guarantee weakens to the in-sync set.

**Data engineering example:** A topic carrying user events, keyed by user ID, partitioned 24 ways, consumed by a Spark Structured Streaming job with a checkpoint directory. The checkpoint stores offsets and state, so a restart resumes where it left off instead of reprocessing the whole topic. The watermark handles late events. The whole design is four Kafka concepts — partitions, keys, offsets, checkpoints — composed into a pipeline.

**The trade-off to say out loud:** "More partitions means more parallelism and more overhead — more files, more rebalances, more memory. I size partitions from the throughput I need, not from a rule of thumb."

## Backpressure and Replayability

**Definition:** Backpressure is what happens when producers outpace consumers. Replayability is the ability to re-read old messages. A healthy messaging system handles both; an unhealthy one does neither.

When a consumer falls behind, the options are: slow the producer (Kafka consumers pull, so a slow consumer simply reads less — the log buffers the difference), buffer (the log absorbs the backlog on disk, which is why Kafka can hold days of data), or shed load (drop low-priority messages, sample, or degrade gracefully). The option you must never choose by accident is unbounded memory buffering — that is how a slow consumer takes down the broker.

Replayability is the log's superpower and its cost. Keeping messages for days or weeks costs disk, and reprocessing them costs compute, but it is what lets you fix a bug by rewinding instead of apologizing for lost data. Retention policy — how long messages are kept — is a business decision disguised as a configuration value.

**Data engineering example:** A fraud-detection consumer falls behind during a traffic spike. Because the events are in Kafka with a seven-day retention, the consumer catches up overnight with no data loss. If the same events had gone through a point-to-point queue with no retention, the backlog would have been dropped or the queue would have overflowed. The retention policy was the disaster-recovery plan.

**The trade-off to say out loud:** "Backpressure should slow the producer or buffer on disk — never buffer in memory without a bound. Retention is cheap insurance until the day you need to replay."

## Distributed Task Scheduler Design

**Definition:** A task scheduler runs work on a schedule and on dependencies: run this job every night, after that job finishes, retry it if it fails, and never run it twice. Airflow, Dagster, and Kubernetes CronJobs are the standard implementations.

The design questions:

- **Scheduling model:** time-based (cron) or event-driven (run when the file lands) or dependency-based (run when the upstream task succeeds). Most real systems combine all three: a DAG of tasks with dependencies, triggered on a schedule, with sensors that wait for external events.
- **Prioritization:** when the cluster is full, which task runs first? By deadline, by business priority, or by fairness across teams. Without explicit priorities, a long-running backfill starves the nightly pipeline.
- **Idempotency:** a task retried for the same logical date must produce the same output. This is why tasks are parameterized by logical date, never by wall-clock time — a retry on Tuesday for Monday's data must read Monday's partition.
- **Retries and timeouts:** retry with backoff, a maximum attempt count, and a timeout that kills a hung task instead of letting it hold a worker forever.
- **Capacity:** how many workers, and what happens when demand exceeds them? Queue the work, scale workers, or shed low-priority tasks — but never silently skip a task.
- **Exactly-once scheduling:** the scheduler must never run the same task twice for the same logical date. The mechanism is a persistent record of runs — a database of task instances with states — and a lock or lease so two scheduler instances cannot both claim the same run.

**Data engineering example:** An Airflow DAG that extracts from a source, validates, transforms, and publishes — each task idempotent and parameterized by `ds`, the logical date. A task fails at 2 AM; Airflow retries it with backoff; the retry reads the same raw partition and overwrites the same output partition, so the rerun is invisible downstream. A backfill for last week replays the same DAG with different dates. The DAG is the schedule, the dependency graph, and the retry policy in one artifact.

**The trade-off to say out loud:** "A scheduler's job is not to run tasks — it is to guarantee that each task runs exactly once, in order, for the right logical date, and to make failures visible instead of silent."

## Interview Questions

**1. "What is the difference between a queue and a pub-sub system?"**
A queue delivers each message to one consumer; pub-sub delivers each message to every subscriber. Use a queue to distribute work across workers, pub-sub to broadcast an event to independent systems. A commit log like Kafka gives you both: each consumer group is a subscriber, and the group splits work across its members.

**2. "How do you achieve exactly-once processing?"**
You do not achieve exactly-once delivery — you achieve effectively-once processing: at-least-once delivery plus an idempotent consumer. Key writes by message ID, use conditional writes or upserts, and let duplicates collapse into no-ops. Kafka's exactly-once semantics are this pattern, built from idempotent producers and transactions.

**3. "What is a dead-letter queue, and when do you need one?"**
A queue where messages go after failing all retries. Without one, a single poison message blocks the consumer forever. With one, bad messages are quarantined for inspection while the rest of the stream flows.

**4. "How do you handle a consumer that falls behind?"**
First, let the log buffer: a pull-based consumer reads less and the backlog waits on disk. Then scale the consumer — more partitions, more members in the group. If the lag is unbounded, shed low-priority load or sample. Never buffer unbounded data in memory.

**5. "Design a scheduler that runs a nightly ETL pipeline. How do you guarantee each task runs exactly once?"**
Model the pipeline as a DAG of tasks parameterized by logical date, never wall-clock time. Keep a persistent record of task instances with states, and claim each run under a lock or lease so two scheduler instances cannot both start it. Make every task idempotent, so a retry for the same date produces the same output.

**6. "Why does Kafka order messages only within a partition?"**
Because ordering across partitions would require coordination between brokers on every write, which destroys throughput. Ordering within a partition is free — it is just append order in one log. So the design rule is: put everything that must be ordered on the same key, and the same key always lands on the same partition.

## Common Mistakes

- **Promising exactly-once delivery.** It does not exist. Say effectively-once, and show the idempotency mechanism.
- **Ignoring the poison message.** Any design without a DLQ or quarantine path will eventually halt on one bad record.
- **Using wall-clock time inside a task.** A retried task that reads "today" instead of its logical date will process the wrong data — silently.
- **Sizing partitions by guesswork.** Too few partitions caps parallelism; too many wastes resources on rebalances and file handles. Size from the throughput you need and the consumer count you plan to run.

## Key Takeaways

- A queue distributes work; pub-sub broadcasts events; a log does both and adds replayability — pick by how many consumers need the same data.
- Exactly-once is effectively-once: at-least-once delivery plus idempotent consumers, with the mechanism named.
- A DLQ is not optional. One poison message without a quarantine path stops the whole stream.
- Backpressure should slow the producer or buffer on disk, never buffer unbounded data in memory.
- A scheduler guarantees exactly-once execution per logical date: persistent run records, a claim lock, and idempotent tasks parameterized by date, not by wall clock.

## Resources

- Apache Kafka documentation — https://kafka.apache.org/documentation/
- Apache Airflow documentation — https://airflow.apache.org/docs/
- Spark Structured Streaming programming guide — https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html
- RabbitMQ documentation — https://www.rabbitmq.com/docs
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
