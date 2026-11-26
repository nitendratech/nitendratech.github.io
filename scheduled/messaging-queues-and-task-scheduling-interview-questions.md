---
title: "Messaging, Queues, and Task Scheduling Interview Questions and Answers"
description: "Interview questions and answers on messaging, queues, and task scheduling — queue vs pub-sub, effectively-once processing, dead-letter queues, lag, and ordering."
pubDate: 2026-11-27
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the messaging designs from the companion post, "Messaging, Queues, and Task Scheduling" — delivery guarantees, dead-letter queues, lag, and ordering.

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

## Key Takeaways

- A queue delivers each message to one consumer; pub-sub delivers it to every subscriber.
- Effectively-once processing is at-least-once delivery plus an idempotent consumer — there is no exactly-once delivery.
- A dead-letter queue quarantines poison messages so one bad message cannot block the stream.

## Resources


- Apache Kafka documentation — https://kafka.apache.org/documentation/
- Apache Airflow documentation — https://airflow.apache.org/docs/
- Spark Structured Streaming programming guide — https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html
- RabbitMQ documentation — https://www.rabbitmq.com/docs
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
