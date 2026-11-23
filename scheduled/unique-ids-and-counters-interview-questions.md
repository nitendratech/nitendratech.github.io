---
title: "Unique IDs and Counters Interview Questions and Answers"
description: "Interview questions and answers on unique IDs and counters — Snowflake-style IDs, auto-increment limits, clock regression, sharded counters, and exactly-once counting."
pubDate: 2026-12-07
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the ID and counter designs from the companion post, "Unique IDs and Counters: Sequencers and Sharded Counters" — generating IDs across data centers and counting under load.

## Interview Questions

**1. Design a unique ID generator for 10,000 IDs per second across multiple data centers.**
Snowflake-style 64-bit IDs: timestamp + data-center/machine ID + per-millisecond sequence. Worker IDs assigned centrally at startup (e.g., from ZooKeeper or a config service). Handles 10k/sec easily — one worker can generate thousands per millisecond from its sequence counter. Clock regression handled by waiting or failing loudly, stated up front.

**2. Why can't you just use a database auto-increment?**
It is a single point of failure and contention, it does not survive sharding (two shards both issue 7), it leaks the total count, and it couples ID generation to database availability. It is the right answer for one database and the wrong one for a distributed system.

**3. What breaks when the clock moves backwards in a Snowflake-style generator?**
IDs can repeat (same timestamp, same sequence) or sort out of order. Mitigations: refuse to generate until the clock catches up, keep a logical sequence that continues from the last issued value, or detect the regression and raise an alert. The choice depends on whether stalling or failing is worse for the caller.

**4. Design a like counter for a viral post — why sharded counters?**
One row cannot absorb a million increments an hour — writes serialize on a lock. Shard into N rows, increment a random shard per like, read by summing. Accept a slightly stale total and cache it. Add idempotency keys so a retried tap does not double-count.

**5. How do you count exactly once in a streaming pipeline?**
Key the count by an idempotent event ID: the consumer records which IDs it has counted (dedup table) and increments only for new ones, or writes counts transactionally with the offsets it has processed. A plain increment on retry double-counts — exactly-once counting is an idempotency problem, not an arithmetic one.

## Key Takeaways

- Snowflake-style IDs combine timestamp, worker ID, and sequence — sortable, distributed, and fast.
- A database auto-increment is a single point of failure that does not survive sharding.
- One row cannot absorb a viral counter — shard it, sum on read, and accept a slightly stale total.

## Resources


- UUID specification (RFC 9562) — https://www.rfc-editor.org/rfc/rfc9562
- ULID specification — https://github.com/ulid/spec
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- Apache Kafka documentation — https://kafka.apache.org/documentation/
- Delta Lake documentation — https://docs.delta.io/latest/delta-intro.html
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
