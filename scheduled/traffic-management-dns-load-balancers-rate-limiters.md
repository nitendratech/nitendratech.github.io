---
title: "Traffic Management: DNS, Load Balancers, and Rate Limiters"
description: "How requests reach your system and stay under control: DNS resolution and routing, load balancer tiers and algorithms, and rate limiter design with token bucket and leaky bucket."
pubDate: 2026-11-25
category: "Data Engineering"
subcategory: System Design
draft: false
---

## Why Traffic Management Comes First

Every request your system ever serves passes through the same front door: DNS resolves a name to an address, a load balancer picks a server, and a rate limiter decides whether the request is allowed in at all. Get this layer wrong and nothing behind it matters — the best pipeline in the world is useless if clients cannot reach it, or if one abusive client can starve everyone else.

This post goes one level deeper than the foundations overview. For each component, it covers how it actually works, the algorithms interviewers ask about, and the data engineering version of the problem.

## 1. DNS: The Phone Book That Is Also a Load Balancer

**Definition:** The Domain Name System (DNS) translates human-readable names like `api.nitendratech.io` into IP addresses. It is a globally distributed, hierarchical database — and, used deliberately, the first load balancer a request ever meets.

**How resolution works:** A client asks a recursive resolver (usually run by its ISP or a public provider). The resolver walks the hierarchy: root servers point to the top-level domain servers (`.io`), which point to the authoritative name servers for the domain, which return the record. The answer is cached at every step, so most lookups never leave the resolver's cache.

**The records that matter in system design:** `A` and `AAAA` records map a name to IPv4 and IPv6 addresses. `CNAME` maps a name to another name. `NS` records delegate a zone to name servers. `MX` routes mail. Each record carries a **TTL (time to live)** — how long resolvers may cache it.

**DNS as a traffic control layer:** Return multiple `A` records for one name and clients spread across them — the simplest form of load balancing, called round-robin DNS. Return different answers based on where the client is, and you have geo-DNS: a user in Frankfurt gets the Frankfurt endpoint, a user in Virginia gets the Virginia one. Route traffic by measured latency and you have latency-based routing. Add health checks, and the name server stops returning addresses of dead endpoints — DNS failover.

**The limits interviewers want you to name:** DNS is a blunt instrument. TTLs mean changes propagate slowly — a 5-minute TTL still leaves 5 minutes of clients going to a dead address, and some resolvers ignore low TTLs entirely. The client, not you, picks which address to use; there is no weighting, no awareness of server load, and no feedback loop. DNS can steer traffic between regions, but it cannot balance load between individual servers. That is the load balancer's job.

**Data engineering example:** A data-serving layer deployed in two regions can use latency-based DNS routing so analysts hit the nearest region. But DNS alone cannot protect a region that is overloaded — for that you need health checks plus a load balancer that sees actual server load.

**The trade-off to say out loud:** "DNS is cheap, global, and dumb. I use it for region-level steering and failover, and I never rely on it for server-level balancing or fast changes."

## 2. Load Balancers: Tiers and Algorithms

**Definition:** A load balancer sits in front of a group of servers and spreads incoming traffic across them, while removing servers that stop responding. There are two scopes: a **global load balancer** spreads traffic across regions or data centers, and a **local load balancer** spreads it across servers inside one region.

**L4 vs L7, one level deeper:** An L4 balancer forwards packets based on IP and port — it never looks inside the request, so it is fast and works for any TCP protocol. An L7 balancer terminates the connection, reads the HTTP request, and can route by path, header, host, or cookie.

**The algorithms:**

- **Round-robin:** requests go to servers in turn, 1-2-3-1-2-3. Simple and fair when servers and requests are uniform. Useless when they are not.
- **Weighted round-robin:** the same idea, but a bigger server gets a bigger share of turns. The standard fix for a mixed fleet.
- **Least connections:** send the request to the server with the fewest active connections. The right default when requests vary in cost — a server holding ten cheap requests is less loaded than one holding two expensive ones.
- **Least response time:** pick the server that has been answering fastest. Adapts to real conditions, but can herd traffic onto one server until it slows down.
- **IP hash:** hash the client's IP to pick a server, so the same client always lands on the same server. Gives you session affinity without cookies — and creates hot spots when one client dominates.
- **Consistent hashing:** arrange servers on a ring and map requests to the nearest server. Adding or removing a server moves only a small fraction of requests. This is the algorithm behind cache and storage routing, and the reason a server can be replaced without reshuffling everything.
- **Random / power of two choices:** pick two servers at random and send to the less loaded one. Surprisingly effective and simple — the math says two random choices are nearly as good as checking all of them.

**Health checks and session affinity:** A load balancer must know which servers are alive. Active health checks probe an endpoint on a schedule; passive checks watch real traffic for failures. A server that fails checks is pulled from rotation until it recovers. **Sticky sessions** pin a client to one server — sometimes necessary for in-memory session state, but a crutch: it breaks even balancing and turns a server failure into a user-visible logout. The better fix is to make the service stateless and push session state into a shared store.

**Connection draining:** when a server is removed for deployment, the balancer stops sending new requests but lets existing ones finish. Without draining, every deploy drops in-flight requests.

**Data engineering example:** A data-serving API with two traffic classes — cheap metadata lookups and expensive query endpoints — is a textbook L7 case: route the heavy queries to a dedicated pool so a burst of analytical queries cannot starve the lightweight ones. In front of Kafka brokers, an L4 balancer is enough, because the routing question is only "which broker is alive." And an Airflow web UI or a Trino gateway behind an L7 balancer gets TLS termination and path-based routing for free.

**The trade-off to say out loud:** "Round-robin is fine when everything is uniform. The moment requests or servers differ, I move to least connections or weighted routing — and I treat sticky sessions as a smell, not a solution."

## 3. Rate Limiters: Protecting the System From Its Own Clients

**Definition:** A rate limiter caps how many requests a client may make in a window of time. Its job is not to punish users — it is to keep one client from taking down a shared system, to keep costs predictable, and to give the system a graceful degradation path instead of a cliff.

**Where it sits:** Usually at the API gateway or edge, before the request reaches the service. It can be enforced per client, per API key, per IP address, or per endpoint — and the right granularity depends on who you are protecting against. A per-IP limit stops a single abusive machine; a per-key limit stops a single abusive tenant; a global limit protects the downstream database.

**The algorithms:**

- **Token bucket:** a bucket holds tokens up to a capacity; each request costs one token, and tokens refill at a fixed rate. The bucket can be full, so a client may burst — spend accumulated tokens at once — up to the bucket size. This is the most common algorithm in practice because it allows bursts while enforcing an average rate. Amazon's API Gateway and most cloud providers use it.
- **Leaky bucket:** requests queue up and drain out at a fixed rate, like water leaking from a bucket. Unlike token bucket, it smooths bursts instead of allowing them — the output rate never exceeds the leak rate. Use it when the downstream system cannot tolerate bursts at all.
- **Fixed window:** count requests in a fixed window (e.g., per minute) and reject anything over the limit. Simple, but a client can send a full window's worth of requests at 00:59 and another full window's worth at 01:00 — twice the intended rate across the boundary.
- **Sliding window log:** store a timestamp for every request and count how many fall inside the rolling window. Exact, but memory-heavy at high volume.
- **Sliding window counter:** a hybrid — keep per-window counts and weight the previous window by how much of it still overlaps. Nearly as accurate as the log, with a fraction of the memory.

**Distributed rate limiting:** one server can count locally; a fleet cannot. The usual design keeps counters in a shared store like Redis, with a key per client and a TTL per window. That introduces two subtleties interviewers love: the counter increments are a race (use atomic increments, not read-modify-write), and the store itself becomes a dependency — if Redis is down, do you fail open (let traffic through, risking overload) or fail closed (reject everything, causing an outage)? There is no universally right answer; state your choice and why.

**Response contract:** a well-behaved limiter returns HTTP 429 with a `Retry-After` header telling the client when to try again. The client's job is to respect it with backoff, not to hammer harder.

**Data engineering example:** An ingestion API that accepts events from partner systems is the classic case: one partner's retry storm after an outage can flood the pipeline with duplicates and starve everyone else. A per-partner token bucket at the gateway caps the damage. Inside the platform, the same idea protects a feature-serving endpoint from a runaway model, and throttles how many Airflow DAG runs can trigger a heavy Spark job at once.

**The trade-off to say out loud:** "Token bucket when bursts are acceptable, leaky bucket when the downstream cannot take them. And I decide up front whether a limiter outage fails open or closed — that choice is part of the design."

## 4. Putting It Together: One Request's Journey

Trace a single request and the three components line up: the client resolves the name through DNS, which steers it to the nearest healthy region. At the region edge, the rate limiter checks the client's token bucket. The global load balancer hands the request to a regional L7 balancer, which routes by path — metadata lookups to the light pool, heavy queries to the dedicated pool — using least connections. If a server fails its health check, it leaves rotation; if a region fails, DNS stops returning it.

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

## Common Mistakes

- **Treating DNS as instant configuration.** A DNS change with a one-hour TTL takes an hour to reach most clients. Lower the TTL before a migration, not during it.
- **Forgetting health checks.** A balancer that does not probe its backends will keep sending traffic to a dead server. Active health checks on a real endpoint are part of the design, not an afterthought.
- **Rate limiting at the wrong layer.** A limit on the API gateway does not protect a shared database if another path reaches it. Limit where the scarce resource is, or at every entry point to it.
- **Sticky sessions as a scaling strategy.** Pinning clients to servers papers over stateful services and breaks when a server dies. Make the service stateless instead.

## Key Takeaways

- DNS steers traffic between regions and handles failover; it cannot balance load between servers or react quickly.
- Load balancer algorithms exist because servers and requests are not uniform — least connections and weighted routing beat round-robin the moment they differ.
- Consistent hashing is the answer whenever adding or removing a node must not reshuffle everything.
- Token bucket allows bursts, leaky bucket smooths them; pick by what the downstream can tolerate.
- A rate limiter needs a stated policy for its own outage: fail open or fail closed, decided in advance.
- Each traffic layer has one job: DNS steers, the limiter protects, the balancer spreads. Don't make one do another's work.

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
