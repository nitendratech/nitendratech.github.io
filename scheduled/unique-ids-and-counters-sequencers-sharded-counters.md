---
title: "Unique IDs and Counters: Sequencers and Sharded Counters"
description: "How distributed systems generate unique IDs and count things at scale: UUIDs, Snowflake-style time-ordered IDs, causality and clock skew, and sharded counters."
pubDate: 2026-11-30
category: "Data Engineering"
subcategory: System Design
draft: false
---

*Focus keyword: unique ID generator sharded counter sequencer. Research basis: system design foundations draft (NitendraTech, Nov 2026) and the knowledge-base system design guide; topics follow the Grokking foundations and building-blocks structure, written in original words.*

## Trivial Until It Isn't

Generating a unique ID sounds like the easiest problem in system design — until ten thousand machines need to do it at the same time, without talking to each other, and the IDs still have to sort in the order they were created. Counting sounds even easier — until a single counter has to absorb a million increments a second. Both problems look trivial at small scale and both have the same root cause at large scale: coordination is expensive, so the design has to minimize it.

This post covers three linked topics: how to generate unique IDs without a central bottleneck, what "ordered" and "causal" actually promise, and how to count things when one counter cannot keep up.

## 1. Unique ID Generation

**Definition:** A unique ID generator produces identifiers that never repeat, across machines, processes, and time — ideally without any coordination between the machines doing the generating.

**What you are actually choosing between:** uniqueness, ordering, size, and coordination. Every scheme trades among these four. The interview question is never "which ID is best" — it is "which trade-off fits these requirements."

**The options:**

- **UUID v4 (random):** 128 random bits. No coordination, no central service, effectively never collides. The costs: the IDs are not sortable, so they make poor database keys for range scans, and their randomness scatters writes across an index — every insert lands on a random page. Fine as an opaque identifier; poor as a clustered primary key.
- **UUID v7 (time-ordered):** the same 128 bits, but the leading bits are a Unix timestamp in milliseconds, followed by random bits. IDs sort in creation order and index well, while still needing no coordination. The newer standard (RFC 9562) and usually the right default when you want random UUIDs with ordering.
- **Database auto-increment / sequence:** a single counter in a database hands out 1, 2, 3. Dead simple, perfectly ordered, and a single point of failure and contention. It also leaks information — ID 1042 tells the world you have 1,042 of something — and it does not survive sharding: two shards will both hand out 7. Workable for one database; unworkable for a distributed system.
- **Snowflake-style IDs (time-ordered, 64-bit):** the classic Twitter design. Each ID packs a timestamp (milliseconds since an epoch), a worker/machine ID, and a per-millisecond sequence number into 64 bits. IDs are roughly time-ordered, compact enough to fit in a database bigint, and generated locally with no coordination — the worker ID is the only thing that must be unique per machine, assigned at startup. The cost is the clock: if a machine's clock moves backwards, IDs can repeat or go out of order, so the generator must refuse to generate (or wait) when the clock regresses.
- **ULID:** a 128-bit, lexicographically sortable ID with a timestamp prefix and random suffix, encoded in Crockford base32 so it sorts as a string. Similar properties to UUID v7 with a friendlier text form.

**How big is "unique enough":** A 64-bit random ID space has about 1.8 × 10^19 values; collisions become likely only after billions of IDs (the birthday bound sits around 5 billion for 64 bits). A 128-bit space is effectively collision-free for any real workload. Say this in an interview instead of asserting "it will never collide" — the math is the answer.

**Data engineering example:** Every event in a Kafka stream needs an ID, and the ID choice decides two things: deduplication and ordering. A random UUID works as a dedup key in a lookup table but tells you nothing about order. A Snowflake-style ID gives you both — dedup by ID and approximate ordering by timestamp — which is why event platforms usually generate time-ordered IDs at the producer. Delta Lake file names take the same idea further: a UUID in the file name means two writers never collide on the same path.

**The trade-off to say out loud:** "Random UUIDs are free and unordered. Snowflake-style IDs cost me worker-ID assignment and clock discipline, and buy me ordering and compactness. I pick by whether anyone needs to sort or range-scan the IDs."

## 2. Causality and Consistency: What "Ordered" Really Promises

**Definition:** Ordering is not one property — it is three, and confusing them is the classic failure in this topic. **Uniqueness** means no two IDs repeat. **Time-ordering** means IDs sort in the order they were created, by wall-clock time. **Causal ordering** means if event A caused event B, A's ID sorts before B's — a stronger promise that wall-clock time cannot deliver.

**Why wall clocks lie:** Two machines' clocks disagree by milliseconds even with NTP, and clocks jump — NTP corrections, leap seconds, a VM being paused and resumed. A Snowflake ID generated on a machine whose clock is 50 ms behind another machine's will sort earlier even if it was created later. For most uses that is fine ("roughly ordered" is the honest description). For anything that depends on exact order — an event log, a ledger — it is not.

**Lamport timestamps:** The classic fix for causal ordering. Each process keeps a counter; it increments the counter on every local event and, when it sends a message, attaches the counter; when it receives a message, it sets its counter to the max of its own and the received value, plus one. The resulting timestamps respect causality: if A caused B, A's timestamp is smaller. They say nothing about real time — two unrelated events get an arbitrary order — which is why Lamport timestamps answer "what caused what," not "when did it happen."

**Vector clocks** extend the idea: each process keeps a counter per process, so the timestamps can also detect concurrency — two events whose vector clocks are incomparable happened independently. They are the versioning mechanism behind Dynamo-style stores, and the reason a KV store can return two conflicting versions instead of silently picking one.

**Monotonicity and clock skew:** A generator that promises "IDs always increase" must survive the clock moving backwards. The standard responses: wait until the clock catches up, refuse to generate and fail loudly, or keep a logical counter that continues from the last issued value. Each has a cost — waiting stalls the generator, failing drops requests, a logical counter breaks the timestamp's meaning. Name the choice and its cost; that is the interview answer.

**Data engineering example:** Event time versus ingestion time in a streaming pipeline is this section in practice. A watermark says "I have seen all events up to time T" — a claim about event timestamps, not about when events arrived. If producers' clocks skew, or IDs are not monotonic, the watermark is wrong and late data is silently dropped or double-counted. Exactly-once processing depends on the same foundation: an idempotent consumer keys its dedup on an ID whose uniqueness and ordering it can trust.

**The trade-off to say out loud:** "Wall-clock ordering is cheap and approximate. Causal ordering costs a logical clock and still tells you nothing about real time. I use wall clocks for sorting and Lamport-style reasoning for correctness."

## 3. Sharded Counters

**Definition:** A counter is a single number that many writers increment — view counts, like counts, total events processed. A naive counter is one row in one database, and it fails at scale for a mechanical reason: every increment is a write to the same row, on the same machine, under a lock. Throughput caps at that one row's write rate, and a hot key makes it worse.

**Why one row fails:** Take a video going viral. A million viewers an hour each increment the same counter row. The database serializes those writes — lock, update, unlock — and the row becomes the system's bottleneck. Adding read replicas does not help; the problem is write contention on a single key. This is the same hot-partition problem from the partitioning section, concentrated into one row.

**The sharded counter design:** Split the counter into N shards, each its own row on (ideally) different partitions. A writer picks a shard at random and increments it. A reader sums all N shards to get the total. Writes spread across N rows, so throughput scales with N. The costs are real and worth naming:

- **Reads get more expensive.** A read now touches N rows instead of one. If N is large and reads are frequent, the read path pays for the write path's scalability.
- **The total is eventually consistent.** Between a write landing on one shard and the reader summing, the sum lags the truth. For a view count, nobody cares. For a bank balance, everyone does.
- **Choosing N is a trade-off.** More shards mean more write throughput and more expensive reads. Some designs grow N with traffic — start with one shard, split when contention appears.

**Alternatives worth knowing:** **Approximate counters** accept a small error for much higher throughput (probabilistic counting, HyperLogLog for distinct counts). **Periodic aggregation** writes raw increments to a log or queue and rolls them up in batch — the counter is a derived value, recomputed on a schedule, which is how most analytics counts actually work. **Redis INCR with batch flush** absorbs bursts in memory and persists periodically, trading durability for speed.

**Data engineering example:** Counting events per key in a streaming job is a sharded counter wearing a different name: the state store holds one counter per key, partitioned by the key itself, so increments for different keys never contend. The naive version — one global counter for "total events processed" updated by every task — is the single-row problem again, and it shows up as a straggler task in the Spark UI. And exactly-once counting needs the same idempotency thinking as exactly-once delivery: an increment applied twice after a retry is a wrong count, so increments must carry IDs and be deduplicated.

**The trade-off to say out loud:** "Sharding a counter trades read cost and freshness for write throughput. If the count must be exact and current, I don't shard — I change the requirement or the architecture."

## 4. Putting It Together: A Like Counter for a Viral Post

Design the like count for a post that might get a million likes in an hour. A single database row fails on write contention. A sharded counter with, say, 100 shards spreads the writes; a read sums 100 rows, which is cheap enough to cache for a few seconds. Likes need IDs too — a Snowflake-style ID per like gives ordering for the "recent likers" list and a dedup key so a retried tap does not double-count. The total shown to users is a cached, slightly stale sum; the exact count lives in the shards and is recomputed on read. Three concepts, one design, each chosen for what it is good at.

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

## Common Mistakes

- **Confusing uniqueness with ordering.** A random UUID is unique and tells you nothing about order. If the design needs sorting or range scans, the ID scheme must carry a timestamp.
- **Assuming wall clocks are reliable.** NTP corrects clocks by jumping them, VMs pause, and leap seconds exist. Any design whose correctness depends on monotonic wall time needs a stated plan for regression.
- **A single-row counter at scale.** It is the hot-partition problem in miniature, and it caps throughput at one row's write rate no matter how much hardware you add.
- **Random UUIDs as clustered primary keys.** Random insertion order scatters writes across index pages and fragments the index. Use time-ordered IDs (UUID v7, ULID, Snowflake) when the key is also the sort order.

## Key Takeaways

- ID generation trades uniqueness, ordering, size, and coordination — name which one you are giving up.
- Random UUIDs are free and unordered; Snowflake-style IDs buy ordering with worker assignment and clock discipline.
- Wall-clock order is approximate; causal order needs a logical clock and still says nothing about real time.
- A counter is a hot partition waiting to happen — shard it, accept a stale total, and cache the read.
- Exactly-once counting is an idempotency problem: dedup by event ID or count transactionally with offsets.

## Resources

- UUID specification (RFC 9562) — https://www.rfc-editor.org/rfc/rfc9562
- ULID specification — https://github.com/ulid/spec
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- Apache Kafka documentation — https://kafka.apache.org/documentation/
- Delta Lake documentation — https://docs.delta.io/latest/delta-intro.html
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
