---
title: "Observability Interview Questions and Answers"
description: "Interview questions and answers on observability — monitoring at scale, metrics vs logs vs traces, alert fatigue, Spark logging, error budgets, and trace sampling."
pubDate: 2026-12-10
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the observability designs from the companion post, "Observability: Distributed Monitoring, Logging, and Error Tracking" — what to measure, what to alert on, and how to debug a distributed system.

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

## Key Takeaways

- Metrics say something is wrong, logs say what happened, traces say where the time went.
- Alert on user-facing symptoms and burn rate, not every internal signal — or the alerts stop being read.
- An error budget turns alerting from guesswork into arithmetic.

## Resources


- Prometheus documentation — https://prometheus.io/docs/introduction/overview/
- OpenTelemetry documentation — https://opentelemetry.io/docs/
- Grafana documentation — https://grafana.com/docs/
- Jaeger distributed tracing documentation — https://www.jaegertracing.io/docs/
- Google Site Reliability Engineering books — https://sre.google/books/
- Apache Kafka documentation — https://kafka.apache.org/documentation/
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
