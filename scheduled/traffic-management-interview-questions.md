---
title: "Traffic Management Interview Questions and Answers"
description: "Interview questions and answers on traffic management — DNS balancing, L4 vs L7 load balancers, rate limiting, long-lived connections, and balancer failure."
pubDate: 2026-11-30
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the traffic designs from the companion post, "Traffic Management: DNS, Load Balancers, and Rate Limiters" — how requests get routed, limited, and balanced under load.

## Interview Questions

**1. How does DNS-based load balancing work, and what are its limits?**
Return multiple A records and clients spread across them; use geo-DNS or latency-based routing to steer by location. Its limits: TTLs delay changes, the client picks the address, there is no load awareness, and there is no feedback loop. Use it for region steering, not server balancing.

**2. When would you pick an L4 load balancer over an L7 one, and vice versa?**
L4 when you need speed and protocol independence — TCP traffic like Kafka brokers, or millions of connections where inspecting requests is too expensive. L7 when routing must understand the request — path-based routing, TLS termination, cookie-based affinity, or real application health checks.

**3. Design a rate limiter for 10,000 requests per second per user.**
Token bucket per user, counters in Redis with atomic increments, bucket capacity sized to allow a short burst (e.g., 200 tokens) refilling at 10,000 per second. Enforce at the API gateway, return 429 with Retry-After on rejection, and decide the fail-open vs fail-closed policy for a Redis outage.

**4. How do you load balance long-lived connections, like WebSockets or Kafka clients?**
Round-robin fails here because connections persist — the first servers fill up and stay full. Use least connections, or consistent hashing so a reconnecting client returns to the same server. For Kafka, clients connect to a bootstrap broker and are then directed to the partition leader, so the balancer's job is mostly discovery and health, not per-message routing.

**5. What happens when the load balancer itself fails?**
It becomes the single point of failure, so you run it redundantly: multiple balancer instances behind anycast IPs or DNS failover, across availability zones. Health-check the balancers themselves, and keep the data-plane configuration — backends, weights, rules — in a store that survives a balancer restart.

## Key Takeaways

- DNS balancing steers by region; it has no load awareness and no feedback loop.
- L4 for speed and protocol independence, L7 when routing must understand the request.
- The load balancer is a single point of failure unless it runs redundantly across zones.

## Resources


- AWS Elastic Load Balancing — https://aws.amazon.com/elasticloadbalancing/
- AWS Route 53 — https://aws.amazon.com/route53/
- NGINX documentation — https://nginx.org/en/docs/
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- System Design Interview, Alex Xu (Vol. 1 & 2) — https://www.bytebytego.com/
- Google Site Reliability Engineering books — https://sre.google/books/
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
