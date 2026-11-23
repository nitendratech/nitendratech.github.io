---
title: "Databases for System Design Interview Questions and Answers"
description: "Interview questions and answers on databases for system design — NoSQL vs relational, replication, quorums, hot partitions, dual stores, and eventual consistency."
pubDate: 2026-11-22
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the database choices from the companion post, "Databases for System Design: SQL vs NoSQL, Replication, Partitioning" — the trade-offs interviewers probe when they ask how you would pick and run a database.

## Interview Questions

**1. "When would you choose a NoSQL database over a relational database?"**
When the access pattern is a single-key lookup at massive scale, when the schema changes constantly, or when write volume exceeds what one leader can handle. If the workload needs joins, ad-hoc queries, or multi-row transactions, the relational database is still the right answer — NoSQL is not a default.

**2. "Explain the difference between synchronous and asynchronous replication."**
Synchronous replication waits for follower acknowledgement before confirming a write, so an acknowledged write survives a leader crash — at the cost of latency on every write. Asynchronous replication confirms first and replicates after, so it is fast but has a window where a crash loses acknowledged writes. Most systems let you choose per operation.

**3. "What is a quorum, and why does R + W > N matter?"**
With N replicas, a write that succeeds on W replicas and a read that consults R replicas overlap when R + W > N, so the read is guaranteed to see the latest write. It is how you buy strong consistency without waiting for every replica.

**4. "Your database has a hot partition. What do you do?"**
First, confirm it is a key problem, not a capacity problem. Then change the key: use a composite key, salt the hot key with a suffix to spread it, or split the partition. For a timestamp key where all writes hit the newest range, add a bucketing component to the key so writes spread across partitions.

**5. "How would you store data for a system that needs both point lookups and heavy analytics?"**
Two stores, not one. A key-value or wide-column store for point lookups by ID, and a columnar store for analytics, kept in sync by a pipeline. The alternative — one store doing both badly — is the answer to avoid.

**6. "What is eventual consistency, and when is it acceptable?"**
Reads converge to the latest write after a delay. It is acceptable when staleness has no business consequence: feeds, recommendations, dashboards, search indexes. It is not acceptable for money, inventory, or anything where two readers must agree right now.

## Key Takeaways

- Choose by access pattern: single-key lookups at scale point to NoSQL; joins, ad-hoc queries, and multi-row transactions point to relational.
- A quorum (R + W > N) buys strong consistency without waiting for every replica.
- Eventual consistency is fine for feeds and dashboards, never for money or inventory.

## Resources


- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- PostgreSQL documentation — https://www.postgresql.org/docs/
- Apache Cassandra documentation — https://cassandra.apache.org/doc/latest/
- Snowflake documentation — https://docs.snowflake.com/
- Google BigQuery documentation — https://cloud.google.com/bigquery/docs
- Delta Lake documentation — https://docs.delta.io/latest/delta-intro.html
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
