---
title: "Observability: Distributed Monitoring, Logging, and Error Tracking"
description: "How to design the observability building blocks — metrics and monitoring, distributed logging, tracing, and server-side and client-side error tracking — with data engineering examples."
pubDate: 2026-12-01
category: "Data Engineering"
subcategory: System Design
draft: false
---

*Focus keyword: observability monitoring logging tracing. Research basis: system design study guide from the knowledge base (monitoring, observability, and tracing sections) and the System Design Foundations post on this site. This post goes one level deeper on the observability components; the foundations post covers the overview.*

## What Is Observability?

Observability is the ability to understand what a system is doing from the outside, using the signals it emits. A system is observable when you can answer "what is broken, where, and why" without adding new instrumentation in the middle of an incident.

It rests on three pillars. **Metrics** are numbers over time: request rates, error rates, latencies, queue depths. **Logs** are discrete events: a task started, a record failed validation, a connection timed out. **Traces** follow one request across services: the API call, the query, the cache lookup, each with its own timing. Metrics tell you something is wrong, logs tell you what happened, and traces tell you where it happened.

For a data engineer, observability is not a nice-to-have: a pipeline that runs green while silently dropping 2% of records corrupts decisions, while one that fails loudly pages someone. Interviewers ask about it because it separates engineers who build systems from engineers who build systems that can be operated.

## 1. Metrics: The Four Types and the Cardinality Trap

**Definition:** A metric is a named measurement collected over time, usually stored in a time-series database. There are four types worth knowing.

A **counter** only goes up: total requests served, total records processed, total errors. A **gauge** goes up and down: current queue depth, active Spark executors, memory in use. A **histogram** records the distribution of values: request latency buckets, batch sizes. A **summary** is similar to a histogram but computes quantiles on the client side.

The interview trap is **cardinality**: the number of unique time series a metric creates. Tagged by `pipeline_name` and `status`, a metric creates hundreds of series; tagged by `user_id` or `record_id`, millions — and the monitoring system falls over. Tag by low-cardinality dimensions (pipeline, stage, status, region) and put high-cardinality detail in logs or traces, never in metric labels.

**Data engineering example:** A Spark job should emit counters for records read, records written, and records rejected per stage, plus a histogram of task durations. Tag them by job name and stage — not by partition or file name. When the rejected-records counter spikes, you know which stage to investigate before opening a single log file.

**The trade-off to say out loud:** "Metrics are cheap and fast because they aggregate. The price is detail — so I keep cardinality low and let logs and traces carry the specifics."

## 2. Designing a Distributed Monitoring System

**Definition:** A monitoring system collects signals from many machines and services, stores them, and turns them into dashboards and alerts. Its own design matters: the monitoring system must survive the outage it is supposed to detect.

**Collection** is pull or push. In the pull model (Prometheus), a central server scrapes an HTTP endpoint each service exposes — simple, and only the monitor needs to know the topology. In the push model (StatsD, OpenTelemetry collectors), services send metrics to a collector, which works better behind firewalls and for short-lived jobs: a two-minute Spark task cannot wait to be scraped, it must push its metrics before it exits.

**Storage** is a time-series database: raw data at full resolution for hours or days, then downsampled into coarser aggregates for months. Nobody needs per-second resolution from three months ago.

**Alerting** is where most designs go wrong: threshold alerts ("error rate above 5%") fire too late or too often. The better approach is **burn-rate alerting** — define an error budget from the SLO (99.9% success allows 0.1% errors) and alert on how fast it is consumed. A fast burn pages someone; a slow burn files a ticket. Alerts go to the owning team with a runbook link, and stay rare enough that people react to them.

**Data engineering example:** Monitor a streaming pipeline on four signals: freshness (age of the newest record in gold), completeness (partitions present versus expected), volume (records per minute versus last week), and correctness (failed quality checks). Alert on freshness burn rate — 10 minutes stale at 9 AM is a page; at 3 AM it is a ticket.

**The trade-off to say out loud:** "The monitoring system is a distributed system with its own availability requirement. If it goes down with the system it watches, you are blind exactly when you need sight most."

## 3. Monitoring Server-Side Errors

**Definition:** Server-side error monitoring tracks failures in code you control: 5xx responses, exceptions, failed tasks, and timeouts. Its job is to turn a flood of individual errors into a small number of actionable groups.

The key mechanism is **grouping and deduplication**. A single bad deploy can produce a million identical exceptions. An error-tracking system groups them by stack trace fingerprint, counts occurrences, and shows the first occurrence, the rate, and the affected release. Without grouping, the team drowns in noise and stops looking.

Errors need context — release version, environment, request or task ID, and a sample of the triggering inputs. A stack trace says where the code broke; context says why. But context must be sampled and scrubbed: error reports must never contain credentials, tokens, or raw customer data.

**Data engineering example:** An Airflow DAG failing nightly at the same task is one error group with a rising count, not one incident a night. The grouped error points at the cause: a schema change in the source that validation catches, first seen the morning after the source team's release.

**The trade-off to say out loud:** "I alert on new error groups and burn rate, not on raw counts. A thousand identical errors is one problem, and the system should say so."

## 4. Monitoring Client-Side Errors

**Definition:** Client-side error monitoring tracks failures in code you do not control: a dashboard that fails to load, a JavaScript exception in a user's browser, a mobile app crash. It is also called real user monitoring (RUM), because the signal comes from real users rather than from your servers.

The challenges are different from the server side. First, **volume**: millions of clients generate far more events than your servers do, so client telemetry must be sampled aggressively and aggregated at the edge before it reaches your backend. Second, **unreliability**: the client may be offline, on a bad network, or running an old version, so delivery is best-effort and the data is always a sample, never a census. Third, **privacy**: client reports can contain anything the user typed, so scrubbing PII before the data leaves the device is a requirement, not a courtesy.

What you measure differs too: page load time, time to interactive, JavaScript error rate by release and browser, API failures as the client sees them (including network failures your servers never see), and crash-free session rate.

**Data engineering example:** A BI dashboard querying the gold layer is a client. If its queries fail, server-side monitoring may show nothing — the warehouse is healthy, but the client sends a malformed query after a semantic-layer change. Client-side tracking catches the failure where the user experiences it: which dashboard, which query, which release.

**The trade-off to say out loud:** "Client telemetry is a sample, not a census — so I design for sampling and aggregation from the start, and I never trust it for exact counts."

## 5. Designing a Distributed Logging System

**Definition:** A distributed logging system collects log events from every service and machine, makes them searchable in one place, and keeps them long enough to debug incidents and satisfy retention requirements.

The pipeline has four stages. **Collection:** an agent on each host tails log files or receives structured events. **Shipping:** events move to a central system through a durable buffer such as Kafka, so bursts or brief backend outages lose nothing. **Parsing and indexing:** raw text becomes structured fields (timestamp, service, level, trace ID) with an inverted index for fast queries. **Retention:** old logs move from hot storage (fast, expensive, days) to warm and cold (slow, cheap, months or years), then get deleted.

Two design decisions matter most. First, **structured logging**: emit logs as JSON with consistent field names instead of free-form text. A query like `service=ingest AND level=error AND trace_id=abc` is instant on structured logs and a regex nightmare on plain text. Second, **sampling and level discipline**: log errors and warnings always, info selectively, and debug only when investigating. A service that logs every record it processes will spend more on logging than on its actual work, and the important errors will be buried.

**Cost control** is a first-class concern: per-service quotas, dropping known-noisy messages, and retention by data class — audit logs for years, debug logs for days.

**Data engineering example:** A Spark job's driver and executor logs are the hardest in a data platform: thousands of short-lived executors writing to local disk. The standard design ships them through a collector into a central store, tagged by application ID and stage, driver log retained longest. When a job fails at 3 AM, the on-call engineer searches by application ID and finds the executor that ran out of memory — without SSH-ing into a cluster that has already scaled down.

**The trade-off to say out loud:** "Logs are the most expensive signal per byte and the most useful during an incident. I pay for structure and sampling discipline, and I cut volume before I cut retention."

## 6. Tying It Together: Traces, SLOs, and the Data Platform

**Definition:** A **trace** follows one request across services. Each service adds a **span** — its own timing and metadata — and all spans share a **trace ID**. A trace shows the full path: the API call, the cache lookup, the database query, and where the time actually went.

Traces are expensive, so production systems **sample** them: keep all error traces, a small percentage of successful ones, and traces that breach a latency threshold. **Head-based sampling** decides at the start; **tail-based sampling** decides after seeing the result — better at keeping interesting traces, but it requires buffering.

For a data platform, the useful SLIs are freshness, completeness, volume, and correctness — a fast pipeline that fails its freshness SLO is still failing.

**Data engineering example:** A nightly platform's SLO might be "gold tables complete and validated by 7 AM, 99% of days." Monitoring tracks freshness per table, logging captures validation failures, and a trace of one bad night shows the chain: a late source file delayed bronze, which delayed silver, which pushed gold past the deadline. Without all three pillars, the team would know the deadline was missed but not why.

**The trade-off to say out loud:** "Metrics, logs, and traces answer different questions. I design for all three, and I let the SLO decide which one pages me."

## Interview Questions

**1. How would you design a monitoring system for 10,000 servers?**

Use pull-based collection with sharded scrapers, one per server group, so no single collector is a bottleneck. Store metrics in a time-series database with downsampling for retention. Alert on burn rate against SLOs, and run the monitoring system itself redundantly — it must survive the outage it is supposed to detect.

**2. What is the difference between metrics, logs, and traces — and when would you use each?**

Metrics are aggregated numbers over time: "is something wrong, and how bad." Logs are discrete events: "what exactly happened." Traces follow one request across services: "where did the time go." Alert on metrics, debug with logs, investigate latency with traces.

**3. How do you prevent alert fatigue?**

Alert only on user-facing symptoms (burn rate, new error groups), not every internal signal. Route to the owning team with a runbook link, keep alerts rare, and review every alert that fired — if nobody acted on it, delete or downgrade it.

**4. How would you design logging for a Spark job with thousands of short-lived executors?**

Ship logs through a collector to a central store — executors disappear when the cluster scales down. Emit structured JSON tagged by application ID and stage, retain driver logs longest, sample executor debug logs, and make the application ID the search key.

**5. What is an error budget, and how does it change alerting?**

An error budget is the allowed failure rate from the SLO — 99.9% allows 0.1% errors. Alerting on burn rate replaces fixed thresholds: a fast burn pages immediately, a slow burn files a ticket. It turns alerting from guesswork into arithmetic.

**6. Why sample traces, and what is the difference between head-based and tail-based sampling?**

Traces are too voluminous to keep in full, so systems sample them. Head-based sampling decides at the start of a request and is simple, but it keeps mostly boring traces. Tail-based sampling decides after the request completes, so it can keep all error and slow traces and drop the routine ones — at the cost of buffering spans until the decision is made.

## Common Mistakes

- **Tagging metrics with high-cardinality values** such as user IDs or file names, which explodes the number of time series and can take down the monitoring system itself.
- **Alerting on raw thresholds or on every internal signal**, which produces so many pages that the team starts ignoring them — and then misses the real incident.
- **Logging unstructured free-form text**, which makes the logs unsearchable exactly when an incident demands fast answers; structured JSON with consistent fields is the fix.
- **Treating the monitoring system as an afterthought** with no redundancy of its own, so it fails at the same moment as the system it is supposed to watch.

## Key Takeaways

- Metrics, logs, and traces answer different questions: use metrics to alert, logs to debug, and traces to find where time goes.
- Keep metric cardinality low — tag by pipeline, stage, and status, never by user or file.
- Alert on error-budget burn rate and new error groups, not on raw counts or fixed thresholds.
- Ship logs through a durable buffer into a central store, in structured JSON, with sampling discipline and tiered retention.
- Client-side telemetry is a sample, not a census — design for sampling, aggregation, and PII scrubbing.
- A data platform's SLOs are freshness, completeness, volume, and correctness — a fast pipeline that drops records has still failed.

## Resources

- Prometheus documentation — https://prometheus.io/docs/introduction/overview/
- OpenTelemetry documentation — https://opentelemetry.io/docs/
- Grafana documentation — https://grafana.com/docs/
- Jaeger distributed tracing documentation — https://www.jaegertracing.io/docs/
- Google Site Reliability Engineering books — https://sre.google/books/
- Apache Kafka documentation — https://kafka.apache.org/documentation/
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
