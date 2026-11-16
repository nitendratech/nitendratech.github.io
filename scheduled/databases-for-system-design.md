---
title: "Databases for System Design: SQL vs NoSQL, Replication, Partitioning"
description: "How to choose a database by access pattern, how replication and partitioning actually work, and the consistency trade-offs interviewers probe — explained with data engineering examples."
pubDate: 2026-11-19
category: data-engineering
subcategory: System Design
draft: false
---

*Focus keyword: databases for system design. Research basis: system design study guide from the knowledge base (Glassdoor system design guide) and the foundations post on this site. Goes one level deeper than the foundations overview on storage, replication, and consistency.*

## What Does "Pick a Database" Mean in System Design?

In a system design interview, "pick a database" is never a brand question. It is an access-pattern question. The interviewer wants to hear you reason from how the data will be read and written — point lookups or full scans, single rows or billions, strong consistency or stale-is-fine — to the storage engine that fits, and then explain what you give up.

The foundations post introduced the storage families and the CAP theorem. This post goes deeper into each decision: the database families, the replication models, the partitioning strategies, and the consistency models that connect them.

## SQL vs NoSQL, and OLTP vs OLAP

**Definition:** A relational (SQL) database stores data in tables with a fixed schema, enforces constraints, and answers queries with joins. A NoSQL database drops one or more of those properties in exchange for scale or flexibility. The OLTP vs OLAP split is a different axis: OLTP systems handle many small transactional reads and writes, OLAP systems handle few large analytical scans.

The NoSQL families each solve a different problem:

- **Key-value stores** (DynamoDB, Redis, Cassandra's wide-column model) are for lookups by a single key at massive scale. One key, one value, microseconds.
- **Document stores** (MongoDB) are for flexible, nested records whose shape changes — a user profile with optional fields, an event payload with varying attributes.
- **Wide-column stores** (Cassandra, HBase, Bigtable) are for huge write volumes partitioned by a key, where reads are usually by that key or a key range.
- **Columnar stores** (Snowflake, BigQuery, Redshift) are for analytics: they read a few columns across billions of rows, compress aggressively, and scan fast.
- **Graph databases** are for traversing relationships — recommendations, fraud rings, lineage.
- **Time-series databases** (InfluxDB, Prometheus) are for timestamped measurements with retention policies.

**Data engineering example:** A lakehouse pipeline touches three families in one day. Raw events land in object storage (the cheapest store for data at rest). The serving layer answers point lookups from a key-value store. Analysts query the same data from a columnar warehouse. None of these is "the database" — each is the right store for one access pattern, and the pipeline's job is to move data between them.

**The trade-off to say out loud:** "A relational database buys you joins and strong consistency and costs you horizontal scale. A columnar store buys you scan speed and costs you single-row writes. I pick by the query pattern, not by fashion."

## Replication: Leader-Follower, Multi-Leader, and Quorums

**Definition:** Replication is keeping copies of the same data on multiple machines. It serves two purposes: availability (a replica answers when the leader dies) and scale (reads spread across replicas).

**Leader-follower (single-leader)** is the most common model. All writes go to the leader, which streams them to followers. Reads can go to any replica. It is simple and gives you a single ordering of writes, but the leader is a bottleneck for writes and a failover target.

**Synchronous replication** waits for followers to acknowledge before confirming a write: durable, slow. **Asynchronous replication** confirms the write first and replicates after: fast, with a window where a leader crash loses acknowledged writes. Most production systems offer both, per table or per operation.

**Multi-leader replication** lets several nodes accept writes — useful for geographically distributed writes — but creates conflicts when two leaders write the same record. Conflict resolution (last-write-wins, vector clocks, application-level merge) becomes part of the design.

**Quorums** are the tunable middle ground. With N replicas, a write succeeds on W of them and a read consults R of them. If R + W > N, the read and write sets overlap, so the read sees the latest write. Cassandra exposes this directly: write with `QUORUM`, read with `QUORUM`, and you get strong consistency on a tunable budget. Lower W and raise R for read-heavy workloads; do the opposite for write-heavy ones.

**Data engineering example:** Kafka's in-sync replica (ISR) set is a quorum in disguise. A partition's leader only commits a message once all in-sync replicas have it. If a follower falls behind, it drops out of the ISR, and the producer's `acks=all` guarantee weakens to "all in-sync replicas" rather than "all replicas." When you tune `min.insync.replicas`, you are choosing where on the durability-vs-availability line the topic sits.

**The trade-off to say out loud:** "Synchronous replication buys durability and costs latency. Quorums let me buy exactly as much consistency as the workload needs, and no more."

## Partitioning Strategies

**Definition:** Partitioning splits a dataset across machines so no one machine holds everything. The partition key decides which records live together, and therefore which queries are fast and which are expensive.

**Hash partitioning** hashes the key and assigns the record to a partition. Distribution is even, but range queries are expensive because consecutive keys scatter across partitions. This is the default in Kafka and Cassandra.

**Range partitioning** splits by key ranges: all keys from A–M on one node, N–Z on another. Ordered scans are fast, but a hot range can overload one partition — the classic problem when the key is a timestamp and all current writes hit the newest range.

**Consistent hashing** places partitions on a ring so that adding or removing a node moves only a small fraction of the keys. It is the standard answer for "how do I scale without rebalancing everything," and it is how Dynamo-style systems and many caches grow.

**Geo partitioning** places data near its users. A user's data lives in the region they live in, which cuts latency but makes cross-region queries expensive.

**The problems to name:** a **hot partition** (one key or range gets most of the traffic — one celebrity user, one huge customer) and **resharding** (redistributing data when partitions grow unevenly, which is disruptive). Mitigation is a better key: composite keys, salting a hot key with a random suffix, or splitting the hot partition.

**Data engineering example:** A Spark job that reads a Delta Lake table partitioned by `event_date` scans only the partitions a query needs — partition pruning. The same job partitioned by `user_id` with one dominant user creates a straggler task: one executor processes half the data while the rest idle. The partition key is a design decision with a direct, measurable effect on runtime, and interviewers love asking about it.

**The trade-off to say out loud:** "Hash partitioning buys even distribution and costs range queries. Range partitioning buys ordered scans and risks hot ranges. The key choice is the design."

## Consistency Models

**Definition:** A consistency model is the guarantee a database makes about what readers see after a write. Strong and eventual are the two ends; the useful models live in between.

- **Strong consistency:** every read sees the latest write. Required for money movement and inventory.
- **Eventual consistency:** reads converge to the latest write after some delay, with no bound on how long. Fine for feeds, recommendations, and analytics.
- **Read-your-writes:** a user always sees their own writes, even if other users see stale data. The minimum for a sane user experience.
- **Monotonic reads:** once you have seen a value, you never see an older one. Prevents the confusing case where a page refresh shows yesterday's data.
- **Causal consistency:** writes that are causally related are seen in order. The strongest model that still allows low-latency reads.

**Data engineering example:** A dashboard that reads from a gold table rebuilt hourly is eventually consistent by construction — the data is up to an hour stale, and that is a documented property, not a bug. But the same platform's data-quality checks must be read-your-writes consistent: after a validation job writes a "failed" result, the next step must see it, or bad data gets published.

**The trade-off to say out loud:** "Strong consistency is a latency and availability cost I pay only where the business requires it. Everywhere else, I name the weaker guarantee I am actually providing."

## How to Pick: A Worked Example

**The prompt:** design storage for a ride-sharing platform's trip history — 100 million trips a day, drivers and riders look up individual trips, analysts run monthly aggregates, and finance needs exact totals.

**The reasoning:** individual trip lookups by trip ID are point reads — a key-value or wide-column store partitioned by trip ID. Monthly aggregates scan billions of rows by date — a columnar store partitioned by month. Finance totals need strong consistency — a relational database for the ledger, or an append-only log with a reconciliation job. One system cannot do all three well, so the design uses three stores and a pipeline that keeps them in sync. That is the answer: not a brand, but a mapping from access pattern to store, with the sync mechanism named.

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

## Common Mistakes

- **Naming a brand instead of an access pattern.** "Use Cassandra" is not an answer. "Point lookups by ID at high write volume, so a wide-column store partitioned by ID" is.
- **Claiming a database is "eventually consistent" without saying what that means for the user.** Name the staleness window and who it affects.
- **Forgetting replication lag.** Reads from followers are stale by the replication delay. If a feature depends on reading your own write, say so and design for it.
- **Designing one store for every access pattern.** A system with point lookups, range scans, and heavy analytics needs more than one store — and a named sync mechanism between them.

## Key Takeaways

- Pick a database by access pattern: point lookups, scans, writes, and consistency needs — in that order.
- Replication trades latency for durability; quorums let you buy exactly as much consistency as the workload needs.
- The partition key decides both your parallelism and your hot spots; hash for even distribution, range for ordered scans, consistent hashing for growth.
- Strong consistency is a cost paid only where the business requires it; name the weaker guarantee everywhere else.
- One system rarely serves every access pattern — design the stores and the pipeline that keeps them in sync.

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
