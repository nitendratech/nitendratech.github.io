---
title: "Non-Functional Requirements: Availability, Reliability, Scalability, Fault Tolerance"
description: "What availability, reliability, scalability, and fault tolerance actually mean, how to measure them with SLIs and SLOs, and how each one shows up in a data platform."
pubDate: 2026-11-17
category: "Data Engineering"
subcategory: System Design
draft: false
---

## What Are Non-Functional Requirements?

Every system has two kinds of requirements. Functional requirements say what the system must do: ingest files, run transformations, serve query results. Non-functional requirements say how well it must do it: how often it must be up, how fast it must respond, how much it must handle, and what happens when something fails.

In an interview, the functional requirements are usually given to you. The non-functional requirements are what you are expected to ask about — and they drive almost every architectural decision. A pipeline that must deliver data by 7 AM every morning is a different system from one that can be an hour late. A serving API that must answer in 100 ms is a different system from one that can take 10 seconds.

This post defines the four non-functional characteristics that appear in nearly every design interview — availability, reliability, scalability, fault tolerance — plus the preliminary concepts underneath them and the measurement discipline (SLIs, SLOs, SLAs) that turns them from adjectives into numbers.

## Availability: How Often the System Is Up

**Definition:** Availability is the fraction of time a system is up and able to serve requests. It is measured in "nines," and each additional nine is roughly ten times harder to achieve.

| Availability | Downtime per year | What it means |
|---|---|---|
| 99% (two nines) | 3.65 days | Acceptable for internal tools and batch jobs with loose deadlines |
| 99.9% (three nines) | 8.76 hours | The usual target for production services |
| 99.99% (four nines) | 52.6 minutes | Requires redundancy everywhere; no single point of failure |
| 99.999% (five nines) | 5.26 minutes | Telecom-grade; planned maintenance itself becomes the problem |

The key insight is that availability is a budget you spend. Every component in the request path multiplies the availabilities: two components at 99.9% in series give 99.8% overall. That is why high availability means redundancy at every layer — and why it is expensive.

Availability is not the uptime of a single machine: a system can be available while individual machines are down, as long as enough replicas remain to serve traffic. That is the whole point of replication and load balancing.

**Data engineering example:** A gold-layer table analysts query all day needs three-nines availability from the serving engine. The nightly batch job building it needs no availability at all — it needs to finish by a deadline. Confusing the two over-engineers the batch job and under-engineers the serving layer.

**The trade-off to say out loud:** "Each nine costs roughly ten times the previous one. I would ask what the business actually loses during an hour of downtime before promising four nines."

## Reliability: How Often the System Is Correct

**Definition:** Reliability is the probability that a system does what it is supposed to do, correctly, over a given period. Availability asks "is it up?" Reliability asks "is it right?"

A pipeline can be 100% available and completely unreliable: it runs on time every night and silently drops 2% of records. A dashboard can load instantly and show wrong numbers. Reliability covers correctness, durability (data is not lost), and consistency (reads see the writes they should).

Reliability is built with mechanisms, not intentions: idempotent writes, checksums, quality gates that quarantine bad data instead of publishing it, reconciliation that catches drift, and testing of the pipeline, schema changes, and failure paths.

**Data engineering example:** A streaming job that processes payment events must be reliable in the strong sense: no event lost, none double-counted. That means at-least-once delivery plus idempotent writes, a dead-letter queue for poison records, and a reconciliation job that compares source counts against sink counts. A clickstream pipeline for a dashboard can tolerate a small loss rate, and saying so explicitly is a reliability decision, not sloppiness.

**The trade-off to say out loud:** "Reliability is a spectrum set by the cost of being wrong. For money movement I pay for strong guarantees; for a dashboard I accept small loss and spend the budget on freshness instead."

## Scalability: How the System Grows

**Definition:** Scalability is the ability to handle growth — more data, more users, more requests — without redesign and without proportional cost growth. It has two dimensions: scaling up (bigger machines) and scaling out (more machines), covered in the foundations post.

But scalability is also about where the bottlenecks move as you grow. A system that handles 1,000 users may be limited by database connections; at 1 million users it may be limited by write throughput; at 100 million it may be limited by cross-region replication lag. Good design names the bottleneck at the target scale, not at the current one.

The practical test is: what breaks first when load grows 10x? If the answer is "we add more of the same component," the design scales. If the answer is "we rewrite the storage layer," it does not.

**Data engineering example:** A Spark job that reads 1 TB a day and a job that reads 20 TB a day are the same job with different partitioning. The scalable version partitions by date, processes incrementally, and keeps the per-partition work roughly constant. The unscalable version re-reads the whole history every night, so its cost grows with total data instead of daily data. That difference — incremental vs full refresh — is the most common scalability decision in data engineering.

**The trade-off to say out loud:** "I design for the bottleneck at the target scale, not the current one. If 10x growth means rewriting storage, the design is wrong at any scale."

## Fault Tolerance: What Happens When Something Fails

**Definition:** Fault tolerance is the ability of a system to keep working — possibly in a degraded way — when components fail. It is not the absence of failure; it is the presence of a plan for failure.

The building blocks are redundancy (more than one of everything critical), isolation (a failure in one part does not cascade), and graceful degradation (the system does something useful instead of nothing) — a load balancer routing around a dead server, a pipeline publishing yesterday's data with a freshness banner, a circuit breaker that stops calling a failing service.

Fault tolerance also needs detection: a failure nobody notices is not tolerated, it is silent. Health checks, heartbeats, and alerting on deadline risk rather than individual failures are part of the design.

**Data engineering example:** A nightly batch platform is fault-tolerant when a failed task retries from its last committed partition, a missing source file triggers an alert before transforms run against empty data, and a schema change quarantines bad records instead of failing the whole DAG — not when one failed task blocks every downstream job until a human intervenes at 3 AM.

**The trade-off to say out loud:** "Fault tolerance is a budget: redundancy costs money and complexity. I spend it where failure hurts most — the serving path and the deadline — and accept manual recovery where it does not."

## Preliminary Concepts: Abstractions, the Network, and Failure Models

Before the four characteristics, three preliminary ideas make the rest of the discussion precise.

**Abstractions.** A distributed system is a stack of abstractions: the network hides machine boundaries, a file system hides disks, a transaction log hides replication. Each abstraction leaks — the network partitions, disks corrupt, replicas lag — and design is the art of choosing abstractions whose leaks you can handle. When an interviewer asks how your design handles a failure, they are asking what happens when an abstraction leaks.

**The network.** The network is unreliable, slow relative to memory, and its failures are ambiguous: a request that times out may or may not have been processed. That ambiguity is why idempotency matters and why distributed systems are hard. Two numbers frame every network decision: latency (how long a round trip takes) and bandwidth (how much data moves per second). Latency is bounded by physics; bandwidth is bought with money and parallelism.

**Failure models.** Systems fail in different ways, and the model you assume decides your design. A crash failure means a machine stops silently; a Byzantine failure means it behaves arbitrarily — wrong answers, not just silence. Most data systems assume crash failures plus the occasional corrupt write, and detect the rest with checksums and reconciliation. Naming your failure model out loud is a senior signal.

## SLIs, SLOs, and SLAs: Turning Adjectives into Numbers

Non-functional requirements stay vague until they are measured. Three definitions do that work:

- **SLI (Service Level Indicator):** what you measure. Example: the fraction of gold-table refreshes completed by 7 AM, or the p99 latency of the serving API.
- **SLO (Service Level Objective):** the target you set for the SLI. Example: 99.9% of refreshes complete by 7 AM; p99 latency under 200 ms.
- **SLA (Service Level Agreement):** the SLO with consequences attached — a contract with a customer, with penalties or credits.

The discipline matters because it converts arguments into numbers: "p99 refresh latency is 47 minutes against a 30-minute SLO" is a fact with a threshold and an owner, and the gap is your error budget — the failure you can tolerate before you stop shipping features and fix reliability.

**Data engineering example:** A data platform's SLOs should cover what users feel: freshness ("gold tables updated within 15 minutes of source arrival"), completeness ("no missing partitions"), and correctness ("zero failed quality checks"). A fast pipeline that silently drops records fails its SLO even with green dashboards.

## How the Four Characteristics Show Up in Data Platforms

| Characteristic | Data platform example | What to design |
|---|---|---|
| Availability | Serving layer for analysts and models | Replicas, load balancing, no single point of failure |
| Reliability | Payment and regulatory pipelines | Idempotency, checksums, quality gates, reconciliation |
| Scalability | Ingesting 20 TB a day, growing to 200 TB | Partitioning, incremental processing, stateless workers |
| Fault tolerance | Nightly batch with failing sources | Retries, quarantine, degraded publication, alerting |

Different parts of the same platform need different levels of each — durability and scale for the raw zone, availability and latency for serving, reliability above all for regulatory pipelines. Assign the characteristics per component instead of declaring the whole system "highly available and reliable."

## Common Mistakes

- **Promising nines without a budget.** Saying "the system will be 99.99% available" without saying what that costs in redundancy, or which components the nines apply to, is a number without a design behind it.
- **Treating the whole system as one availability number.** The landing zone, the serving layer, and the regulatory pipeline need different levels. Assign availability and reliability per component.
- **Confusing availability with reliability.** An up system can still be wrong. If your design has no correctness mechanism — idempotency, checksums, quality gates — it is available, not reliable.
- **Designing for failure-free operation.** Any design that works only when nothing fails is not a design. Name the first three failures explicitly: a dead node, a missing input, a bad schema change — and what happens in each case.

## Key Takeaways

- Functional requirements say what the system does; non-functional requirements say how well — and they drive the architecture.
- Availability is measured in nines; each nine costs roughly ten times the previous one.
- Reliability is about correctness, not uptime — an up system can still be wrong.
- Scalability is about how the system behaves at 10x load, and where the bottleneck moves.
- Fault tolerance means redundancy, isolation, and graceful degradation — plus detection.
- SLIs, SLOs, and SLAs turn adjectives into numbers with owners and budgets.
- Assign each characteristic per component, not to the system as a whole.

The interview questions for this topic are in a separate post: [Non-Functional Requirements Interview Questions and Answers](/blog/non-functional-requirements-interview-questions/).

## Resources

- Google Site Reliability Engineering books — https://sre.google/books/
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- AWS Well-Architected Framework — https://aws.amazon.com/architecture/well-architected/
- Educative, Grokking the System Design Interview — https://www.educative.io/courses/grokking-the-system-design-interview
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
