---
title: "Back-of-the-Envelope Calculations for Data Engineers"
description: "How to estimate servers, storage, bandwidth, and latency with rough numbers — the powers of ten, latency figures, and worked examples interviewers expect you to do on the spot."
pubDate: 2026-11-18
category: "Data Engineering"
subcategory: System Design
draft: false
---

*Focus keyword: back-of-the-envelope calculations system design. Research basis: system design foundations draft and the Grokking course structure (Educative) — topics covered in my own words, not copied from the course.*

## Why Estimates Matter in an Interview

Every system design interview has a moment where the interviewer expects you to do rough math out loud. "Design a pipeline for 20 TB a day" is not a complete requirement until you convert it: 20 TB a day is about 230 MB/s on average, or about 1.4 GB/s if it all lands in a four-hour nightly window. That one conversion decides whether you need a single machine or a cluster, a 1 Gbps link or a 25 Gbps one.

Back-of-the-envelope calculation is not about precision. It is about showing that your design is sized to the problem instead of guessed. An interviewer who hears "we need roughly 30 cores and 60 TB of raw storage a day" knows you can reason about scale. An interviewer who hears "we'll use a big cluster" learns nothing.

The skill has three parts: knowing the powers of ten, knowing the latency numbers, and doing clean arithmetic with stated assumptions. This post covers all three, then works through three data engineering examples end to end.

## Powers of Ten and Units

All estimation starts with units. Use decimal powers — the numbers are round and the error is small at interview scale.

| Unit | Size | Rough meaning |
|---|---|---|
| 1 KB | 10^3 bytes | A small JSON record |
| 1 MB | 10^6 bytes | A photo, a small file |
| 1 GB | 10^9 bytes | A short video, a large file |
| 1 TB | 10^12 bytes | A day of logs for a mid-size service |
| 1 PB | 10^15 bytes | A year of data for a large platform |

Two time conversions do most of the work: one day is 86,400 seconds, which you round to 10^5, and one year is about 3 × 10^7 seconds. And one conversion that causes more errors than any other: **bytes vs bits**. Network speeds are quoted in bits per second. 1 Gbps is 125 MB/s, not 1 GB/s. Forgetting the factor of eight is the most common arithmetic mistake in these interviews.

The other essential conversion is users to requests. A standard shape: 10 million daily active users, each making 10 requests a day, is 100 million requests a day. Divide by 10^5 seconds and you get about 1,000 requests per second on average. Peak traffic is typically 3–5x the average, so design for roughly 5,000 requests per second. Say the assumptions out loud — the interviewer can correct them, and that correction is part of the conversation.

## Latency Numbers Every Engineer Should Know

These are the classic approximate figures (popularized by Jeff Dean) for operations on one machine and across a network. Memorize the orders of magnitude, not the exact digits.

| Operation | Approximate latency |
|---|---|
| L1 cache reference | 0.5 ns |
| L2 cache reference | 7 ns |
| Main memory reference | 100 ns |
| Read 1 MB sequentially from memory | 250 µs |
| Read 1 MB sequentially from SSD | 1 ms |
| Disk seek | 10 ms |
| Read 1 MB sequentially from disk | 20 ms |
| Round trip within the same datacenter | 0.5 ms |
| Packet from California to Europe and back | 150 ms |

Three conclusions follow from this table, and interviewers want to hear them.

First, **memory is about 100,000x faster than disk for random access**. That is why caches exist and why a design that reads from disk on every request will never be fast.

Second, **the network dominates everything**. A single round trip inside a datacenter costs about the same as reading 1 MB from memory. A cross-continent round trip costs about the same as reading 7 MB from disk. Every network hop you add is a latency decision, which is why designs minimize hops and batch requests.

Third, **sequential beats random by orders of magnitude**. Reading 1 MB sequentially from disk takes 20 ms; seeking to a random location takes 10 ms before you read anything. Columnar formats and partitioned files exist to turn random access into sequential scans.

**Data engineering example:** A Spark job that reads 1 TB of Parquet from object storage is a sequential-read problem — the format is designed for it. A job that does a million small random lookups against the same storage is a latency disaster. The same 1 TB, two access patterns, two completely different designs.

## Throughput and Bandwidth Math

Two formulas cover most throughput questions.

**Little's Law:** concurrent requests = arrival rate × response time. If an API receives 10,000 requests per second and each takes 10 ms to serve, there are about 100 requests in flight at any moment (10,000 × 0.01). That tells you how many connections, threads, or workers you need — not the total capacity, the concurrency.

**Bandwidth:** bytes per second = requests per second × bytes per request. A serving API at 10,000 requests per second with 1 KB responses needs 10 MB/s of outbound bandwidth — trivial. The same API with 1 MB responses needs 10 GB/s — a design problem. Always multiply by the payload size; requests per second alone says nothing about bandwidth.

And one rule for storage: **state your replication and compression assumptions**. Raw data at 3x replication is three times the size you computed. Parquet at roughly 5x compression is one-fifth. A storage estimate without either assumption is not an estimate.

## Worked Example 1: Sizing 20 TB/Day Ingestion

Problem: design ingestion for 20 TB of files arriving every day.

**Step 1 — the average rate.** 20 TB is 20 × 10^12 bytes. A day is about 10^5 seconds. 20 × 10^12 / 10^5 = 2 × 10^8 bytes per second, about 200 MB/s on average. (Using the exact 86,400 seconds gives about 230 MB/s — same order of magnitude, which is all that matters.)

**Step 2 — the peak rate.** The files do not arrive evenly. If most of them land in a four-hour nightly window, the rate is 20 × 10^12 / 14,400 seconds ≈ 1.4 GB/s. Design for the window, not the average — the average is a trap.

**Step 3 — the network.** 1.4 GB/s is about 11 Gbps. A single 10 GbE link cannot carry it. You need 25 GbE links, or several machines each with 10 GbE. Saying this out loud shows you converted bytes to bits.

**Step 4 — the compute.** Suppose one Spark core sustains roughly 50 MB/s of transformation throughput. 1.4 GB/s needs about 28 cores — call it 32, plus headroom for skew and retries. That is a modest cluster, and the arithmetic says so. If the answer had been 3,000 cores, the design conversation would be very different.

**Step 5 — the storage.** 20 TB a day raw, at 3x replication, is 60 TB a day. Over a year that is about 22 PB before compression — which is why retention policy is part of the design, not an afterthought. Curated data in Parquet at roughly 5x compression is a fifth of that, but the raw zone still needs a lifecycle rule: hot for 30 days, cold after that, deleted or archived on a schedule.

## Worked Example 2: QPS for a Feature-Serving API

Problem: a model-serving API must answer 10,000 requests per second, each reading 20 features, with p99 latency under 10 ms.

**Step 1 — the read volume.** Each feature value is about 200 bytes. 10,000 requests × 20 features × 200 bytes = 40 MB/s of reads. That is small for bandwidth and large for latency: the constraint is speed, not volume.

**Step 2 — the latency budget.** p99 under 10 ms rules out disk on the request path. The features must live in memory. A disk-backed store with a 10 ms seek cannot meet a 10 ms budget even before network time.

**Step 3 — the data size.** 100 million users × 20 features × 200 bytes = 400 GB. That does not fit on one machine's memory, so the feature store must be sharded across machines by user, with each shard holding part of the key space.

**Step 4 — the concurrency.** By Little's Law, 10,000 requests per second × 10 ms service time = 100 requests in flight at any moment. The serving tier needs at least that many workers, and the connection pool must support it.

**The conclusion in one sentence:** a sharded in-memory store, about 400 GB across machines, serving 40 MB/s of reads with 100 concurrent requests — and the 10 ms budget is what forced every one of those choices.

## Worked Example 3: Storage Growth Over a Year

Problem: a platform adds 2 TB of new curated data per day. How much storage does it need in a year, and what changes if volume grows?

**Step 1 — the daily stored size.** 2 TB a day in Parquet at roughly 5x compression stores as about 400 GB a day.

**Step 2 — the year total.** 400 GB × 365 days = 146 TB. With 3x replication that is about 438 TB. One line of arithmetic, and the design now has a number to plan capacity around.

**Step 3 — growth.** If daily volume grows 5% a month, a year from now the daily volume is about 1.8x today's — roughly 3.6 TB a day, or 260 TB stored in that year. The design must handle not just the current total but the growth rate, which is why the estimate should always include a growth assumption.

**Step 4 — the raw zone.** The curated 146 TB is the small number. The raw zone at 20 TB a day uncompressed is 7.3 PB a year — fifty times the curated size. That is why raw retention is a business decision: keep 90 days hot, tier the rest to cold storage, and delete on a schedule. A design that keeps everything forever is a design that never did this calculation.

## Interview Questions

**Q: How many servers do I need to handle 10,000 requests per second?**
A: It depends on what each request costs. Use Little's Law: concurrent requests = arrival rate × response time. At 10,000 requests per second with 10 ms service time, about 100 requests are in flight. If one server handles 50 concurrent requests, you need at least 2 servers — plus redundancy, so 3 or 4. The honest answer always starts with the per-request cost, not the request count.

**Q: How much storage do I need for 1 TB a day over a year?**
A: 1 TB × 365 = 365 TB before anything else. Then state the assumptions: 3x replication makes it about 1.1 PB; Parquet at roughly 5x compression brings the curated copy to about 73 TB. The interviewer wants the multiplication and the stated assumptions, not a single number.

**Q: What is the difference between throughput and latency?**
A: Latency is how long one request takes; throughput is how many requests complete per second. A system can have low latency and low throughput (one fast worker), or high latency and high throughput (many slow workers in parallel). In an interview, p99 latency matters more than the average, because the average hides the slow requests your users actually feel.

**Q: Why does p99 matter more than average latency?**
A: Because averages hide tails. An API with 100 ms average latency and 5-second p99 is fine for most requests and unusable for 1 in 100 — and at 10,000 requests per second, 1 in 100 is 100 angry users a second. Design and capacity decisions should be made against a high percentile, usually p99, not the mean.

**Q: How do you estimate bandwidth for a file upload service?**
A: Multiply requests by payload size, and design for peak, not average. One million uploads a day at 10 MB each is 10 TB a day, about 115 MB/s on average — but if uploads cluster in a few peak hours, the peak rate is several times that. Then convert bytes to bits: 115 MB/s is roughly 1 Gbps. State the peak assumption explicitly.

**Q: What is Little's Law, and when do you use it?**
A: Concurrent requests = arrival rate × response time. Use it whenever you need to size concurrency: connection pools, thread pools, worker counts. It tells you how many requests are in flight at once, which is what your servers, queues, and pools actually have to hold.

## Common Mistakes

- **Confusing bits and bytes.** Network speeds are in bits per second: 1 Gbps is 125 MB/s. Quoting 1 GB/s for a 1 Gbps link overstates capacity by 8x and invalidates the whole estimate.
- **Designing for the average instead of the peak.** Traffic clusters. A pipeline sized for the daily average fails every night when the files arrive in a four-hour window. Always ask about the peak window.
- **Forgetting replication and compression.** A storage number without replication is understated 3x; without compression it is overstated 5x. State both assumptions before giving a total.
- **False precision.** Giving an answer to three significant figures from inputs you invented ("we need exactly 47.3 servers") signals that you do not understand estimation. Round numbers, state assumptions, and show the arithmetic.

## Key Takeaways

- Estimation is about showing your design is sized to the problem — rough numbers with stated assumptions beat precise guesses.
- One day is ~10^5 seconds; one year is ~3 × 10^7 seconds; 1 Gbps is 125 MB/s.
- Memory is ~100,000x faster than disk for random access, and the network dominates everything.
- Design for peak load, not average load — and say which peak you assumed.
- Little's Law (concurrency = rate × response time) sizes pools, workers, and connections.
- Storage estimates must state replication and compression assumptions.
- p99 latency matters more than the average — averages hide the requests users actually feel.

## Resources

- The System Design Primer — https://github.com/donnemartin/system-design-primer
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- Google Site Reliability Engineering books — https://sre.google/books/
- Educative, Grokking the System Design Interview — https://www.educative.io/courses/grokking-the-system-design-interview
- System Design Interview, Alex Xu (Vol. 1 & 2) — https://www.bytebytego.com/
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
