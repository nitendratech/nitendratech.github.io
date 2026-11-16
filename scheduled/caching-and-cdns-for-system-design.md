---
title: "Caching and CDNs: Distributed Cache, Eviction, and Content Delivery"
description: "How distributed caches and CDNs work, when data goes stale, and how to design caching that survives real traffic — with data engineering examples."
pubDate: 2026-11-23
category: data-engineering
subcategory: System Design
draft: false
---

*Focus keyword: distributed cache and CDN design. Research basis: system design study guide from the knowledge base (Glassdoor system design guide) and the foundations post on this site. Goes one level deeper than the foundations overview on caching.*

## What Is a Cache, Really?

**Definition:** A cache is a fast store that keeps copies of frequently used data close to where it is needed, so the slow system behind it is asked less often. Caching is the single highest-leverage performance technique in system design — and the one most likely to cause a subtle, hard-to-diagnose bug.

The foundations post introduced the three decisions: what to evict, how writes flow, and how invalidation works. This post goes deeper into each one, then covers CDN design, because a CDN is a cache with geography.

## Distributed Cache Design

**Definition:** A distributed cache spreads cached data across many machines so the cache itself is not a bottleneck or a single point of failure. Redis Cluster and Memcached are the standard examples.

The design questions are the same as for any distributed store. **How is data placed?** Usually by hashing the key — the same consistent-hashing idea as database partitioning — so adding a cache node moves only a fraction of the keys. **What happens when a node dies?** Its keys are gone (a cache is allowed to lose data; that is the point), and the next read repopulates them from the backing store. That repopulation storm is a failure mode to plan for: after a cache outage, every request hits the database at once.

**Cache-aside (lazy loading)** is the most common pattern: the application checks the cache, and on a miss reads the database and writes the result into the cache. The application owns the logic, and stale data is possible between a database write and the next cache refresh.

**Read-through** moves that logic into the cache: the cache itself loads missing data from the database. Simpler for the application, same staleness properties.

**Write-through** writes to the cache and the backing store together on every write. Consistent, but every write pays the cost of both. **Write-behind (write-back)** writes to the cache and flushes to the store later. Fast, but a cache crash before the flush loses acknowledged writes — acceptable for a session store, unacceptable for anything you cannot reconstruct.

**Data engineering example:** A feature store is a cache with a contract. Online features for a model must be fresh and fast, so they live in a low-latency store like Redis. The same features computed in batch live in the lakehouse. If the online value and the batch value disagree, the model trains on one thing and serves on another — training-serving skew, which is a cache-consistency bug wearing a machine-learning costume.

**The trade-off to say out loud:** "Cache-aside is simple and I accept its staleness window. Write-through is consistent and I pay for it on every write. Write-behind is fast and I only use it where the data is reconstructible."

## Eviction Policies: LRU, LFU, and Friends

**Definition:** When a cache is full, an eviction policy decides what to throw away. The policy is the cache's brain, and the wrong one quietly destroys your hit rate.

- **LRU (least recently used)** evicts the item untouched longest. It is the default almost everywhere and is right for most workloads, because recent access predicts future access.
- **LFU (least frequently used)** evicts the item used least often. It wins when a small set of hot items dominates traffic, because LRU can be polluted by a one-time scan that touches everything once.
- **FIFO** evicts the oldest item regardless of use. Simple, rarely the best choice.
- **TTL-based expiry** is not an eviction policy but works alongside one: entries die after a fixed time, which bounds staleness even if nothing else does.

**The scan problem:** a job that reads every key once — a nightly batch that warms the cache, or a backfill — can evict all the hot data under LRU, because every scanned key counts as "recently used." Real systems defend against this with segmented LRU or by keeping a small probationary segment that scan traffic cannot pollute.

**Data engineering example:** Spark's broadcast variables are an in-memory cache with an eviction policy of "never, until the job ends." A small dimension table broadcast to every executor avoids a shuffle join. The failure mode is the same as any cache: broadcast a table that is too large and executors run out of memory — the cache ate the system it was meant to speed up.

**The trade-off to say out loud:** "LRU is the default. I switch to LFU when a small hot set dominates, and I protect the hot set from scan traffic either way."

## Invalidation, TTLs, and the Thundering Herd

**Definition:** Invalidation is removing or updating cached data when the underlying data changes. It is the hardest part of caching, because a stale cache serves wrong answers confidently.

The practical approaches, in order of strength:

1. **TTLs.** Every entry expires after a fixed time. Simple, robust, and the staleness window is known exactly. The cost is serving stale data for up to the TTL.
2. **Explicit invalidation on write.** When the database changes, delete or update the cached entry. Stronger, but now every write path must know about the cache — and a missed path serves stale data forever.
3. **Versioning.** The cache key includes a version, so a new version is simply a new key. Old versions expire by TTL. This is the most reliable pattern for data that changes rarely but must be correct when it does.

**The thundering herd (cache stampede)** is what happens when a popular entry expires and a thousand requests all miss at once, each one hitting the database to recompute the same value. Mitigations: lock the first requester and let the rest wait, add jitter to TTLs so entries do not expire together, or refresh entries probabilistically before they expire.

**Data engineering example:** A dashboard that caches a daily aggregate is a TTL story: the cache expires at 6 AM, the first user after expiry triggers a recompute against the gold table, and a thousand users hitting the dashboard at 9 AM all miss together. The fix is a scheduled refresh — a pipeline job that warms the cache before users arrive — rather than letting the first user pay the cost.

**The trade-off to say out loud:** "TTLs bound my staleness to a known number. Explicit invalidation is stronger but only as reliable as every write path remembering to invalidate."

## CDN Design and Edge Caching

**Definition:** A content delivery network is a geographically distributed cache. It keeps copies of content at edge locations (points of presence) near users, so a request is answered from a nearby edge instead of traveling to the origin server.

**Pull CDN:** the edge fetches content from the origin on first request and caches it. Simple, and the standard for most content. **Push CDN:** content is uploaded to edges in advance. Better for content you know will be requested, like a software release or a video premiere.

The design decisions mirror the cache decisions, with geography added. **TTL and cache-control headers** decide how long an edge keeps content. **Invalidation** is harder across hundreds of edges: purging a URL must propagate everywhere, and a failed purge serves stale content to one region but not another. **Dynamic content** — anything personalized — is usually not cached at the edge at all; the CDN passes it through to the origin, or caches only the static shell around it.

**Data engineering example:** A data platform's documentation, dashboard assets, and published datasets are CDN content. A 500 MB reference dataset downloaded by hundreds of analysts should come from the edge, not from the lakehouse's front door. And the same TTL thinking applies to published tables: a gold table is a cache of the silver layer, and its refresh schedule is its TTL.

**The trade-off to say out loud:** "A CDN trades freshness and control for latency and origin relief. I cache static content aggressively at the edge and keep anything personalized or freshness-critical at the origin."

## Cache Consistency and Failure Modes

**Definition:** Cache consistency is the guarantee that the cache and the backing store agree. In practice, they never agree perfectly — the question is how much disagreement you tolerate and for how long.

The failure modes worth naming in an interview:

- **Cold start.** A new or restarted cache is empty, so every request hits the database until it warms up. Mitigate with scheduled warming or by accepting degraded latency during warm-up.
- **Hot keys.** One key gets most of the traffic, and the single cache node holding it melts. Mitigate by replicating the hot key across nodes or splitting it.
- **Cache penetration.** Requests for keys that do not exist bypass the cache every time and hammer the database. Mitigate with a bloom filter or by caching negative results briefly.
- **Stale reads after failover.** A replica promoted to primary may be behind the old primary, so recently written data looks missing. This is a consistency problem, not a cache problem — but it shows up as one.

**Data engineering example:** A lookup service that caches customer records in Redis and reads from Postgres on a miss has all four failure modes available. The one that bites data teams most often is stale reads after a pipeline backfill: the backfill rewrites history in Postgres, the cache still holds the old values, and dashboards disagree with the warehouse until the TTL expires. The fix is explicit invalidation keyed to the backfill job, not a shorter TTL.

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

## Common Mistakes

- **Treating the cache as the source of truth.** A cache may lose data at any time. If losing it is a disaster, it belongs in a database, not a cache.
- **Forgetting the thundering herd.** Any design with a TTL on a popular entry needs a stampede mitigation, or the first expiry becomes an outage.
- **Invalidating by hand on some write paths and not others.** Partial invalidation is worse than TTLs alone, because staleness becomes unpredictable instead of bounded.
- **Caching personalized content at the edge.** A CDN that caches a response keyed only by URL will serve one user's dashboard to the next user. Cache keys must include what makes the response unique.

## Key Takeaways

- A distributed cache is a distributed store with permission to lose data — place keys by hash, replicate hot ones, and plan for the repopulation storm.
- LRU is the default eviction policy; switch to LFU when a small hot set dominates, and protect the hot set from scan traffic.
- TTLs bound staleness to a known number; explicit invalidation is stronger but only as reliable as every write path.
- A CDN is a cache with geography: cache static content aggressively at the edge, keep personalized content at the origin.
- Cache keys must capture everything that makes a response unique, or one user's data becomes another user's answer.

## Resources

- Redis documentation — https://redis.io/docs/latest/
- Memcached documentation — https://memcached.org/
- HTTP caching, MDN Web Docs — https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
- Amazon CloudFront documentation — https://docs.aws.amazon.com/cloudfront/
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
