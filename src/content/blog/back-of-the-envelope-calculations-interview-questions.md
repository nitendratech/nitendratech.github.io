---
title: "Back-of-the-Envelope Calculations Interview Questions and Answers"
description: "Interview questions and answers on back-of-the-envelope calculations — sizing servers, storage, throughput vs latency, p99, bandwidth, and Little's Law."
pubDate: 2026-11-22
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the estimation techniques from the companion post, "Back-of-the-Envelope Calculations for Data Engineers" — the sizing math interviewers expect you to do on the spot, with the assumptions stated out loud.

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

## Key Takeaways

- Every estimate starts with the per-request cost and the assumptions stated out loud — the number matters less than the reasoning.
- Latency is how long one request takes; throughput is how many complete per second — and p99 matters more than the average.
- Little's Law (concurrency = arrival rate × response time) sizes pools, workers, and servers.

## Resources


- The System Design Primer — https://github.com/donnemartin/system-design-primer
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- Google Site Reliability Engineering books — https://sre.google/books/
- Educative, Grokking the System Design Interview — https://www.educative.io/courses/grokking-the-system-design-interview
- System Design Interview, Alex Xu (Vol. 1 & 2) — https://www.bytebytego.com/
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
