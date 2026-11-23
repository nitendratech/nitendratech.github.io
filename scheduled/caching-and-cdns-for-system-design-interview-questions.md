---
title: "Caching and CDNs Interview Questions and Answers"
description: "Interview questions and answers on caching and CDNs — distributed cache design, eviction, stampede, consistency, and CDN failure modes."
pubDate: 2026-11-23
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the caching and CDN designs from the companion post, "Caching and CDNs: Distributed Cache, Eviction, and Content Delivery" — the placement, eviction, and failure questions interviewers ask when the cache is part of the design.

## Interview Questions

**1. "Design a distributed cache. How do you place data across nodes?"**
Hash the key to choose a node, ideally with consistent hashing so adding or removing a node moves only a fraction of the keys. Replicate each key to one or two neighbors so a node failure does not lose the entry outright — and remember that losing cache entries is acceptable, because the backing store is the source of truth.

**2. "When would you use LFU instead of LRU?"**
When a small set of hot items dominates traffic. LRU can be polluted by a one-time scan that touches everything once and evicts the hot set; LFU keeps the frequently used items because frequency, not recency, is the signal.

**3. "What is cache stampede, and how do you prevent it?"**
When a popular entry expires and many requests miss at once, all hitting the database to recompute the same value. Prevent it by locking the first requester while others wait, adding jitter to TTLs so entries do not expire together, or refreshing entries probabilistically before expiry.

**4. "How do you keep a cache consistent with the database?"**
TTLs bound staleness to a known window and are the simplest reliable answer. Explicit invalidation on write is stronger but depends on every write path remembering to invalidate. Versioned keys are the most robust: a new version is a new key, and old versions expire by TTL.

**5. "How does a CDN decide what to cache, and what can go wrong?"**
Static, cacheable content with cache-control headers is cached at the edge; personalized or dynamic content passes through to the origin. What goes wrong: a purge that does not propagate leaves one region stale, and caching personalized content by mistake leaks one user's data to another.

**6. "Your cache node dies. What happens?"**
Its entries are gone, and the next reads for those keys hit the backing store and repopulate the cache. The risk is the repopulation storm — every request missing at once — so the design should warm the cache gradually or accept degraded latency during recovery.

## Key Takeaways

- Consistent hashing places keys across nodes so adding or removing a node moves only a fraction of them.
- TTLs bound staleness to a known window; versioned keys are the most robust invalidation.
- Cache stampede happens when a popular entry expires and every request misses at once — stagger TTLs or lock the first requester.

## Resources


- Redis documentation — https://redis.io/docs/latest/
- Memcached documentation — https://memcached.org/
- HTTP caching, MDN Web Docs — https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
- Amazon CloudFront documentation — https://docs.aws.amazon.com/cloudfront/
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
