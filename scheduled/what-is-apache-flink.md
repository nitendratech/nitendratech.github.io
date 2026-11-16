---
title: "What is Apache Flink?"
description: "Apache Flink is a distributed stream processing framework built for stateful, event-time computation over unbounded data. What it is, how it works, its core concepts, and where it fits next to Kafka and Spark."
pubDate: 2026-12-23
category: "Data Engineering"
subcategory: "Flink"
draft: false
---



Most data arrives as a never-ending stream: clicks, payments, sensor readings, application logs, database changes. Batch processing answers questions about that data later, in windows of hours. Apache Flink exists for the questions that cannot wait — it processes data continuously, event by event, as it arrives.

## What is Apache Flink?

Apache Flink is an open-source distributed processing framework designed for **stateful stream processing**. It reads unbounded streams of events, applies computations that can remember what they have seen (state), respects the time events actually happened (event time), and produces results continuously with exactly-once guarantees.

Flink began at a German research project (Stratosphere) and became an Apache top-level project in 2014. Today it is the standard choice for large-scale, low-latency stream processing, and it also supports batch processing as a special case of streaming — a bounded stream is simply a stream that ends.

## Core concepts

### Streams and transformations

A Flink program is a dataflow: sources read streams, transformations (`map`, `filter`, `keyBy`, window aggregations) process them, and sinks write results out. Programs are written in Java, Scala, or Python (PyFlink), or in SQL through Flink SQL / the Table API.

### State

State is what separates real stream processing from simple event passing. Counting events per user, detecting a pattern across events, or maintaining a running total all require remembering the past. Flink manages this state for you — partitioned by key, stored efficiently (commonly in RocksDB or heap), and kept consistent with the stream position. Stateful computation at scale is Flink's defining strength.

### Event time and watermarks

Events often arrive late or out of order. Flink processes data by **event time** (when the event happened) rather than processing time (when it arrived), and uses **watermarks** — markers that say "events up to this timestamp are believed complete" — to decide when a window's result can be emitted. This is how Flink produces correct results over messy real-world streams.

### Checkpoints and exactly-once

Flink periodically snapshots all state and stream positions in a coordinated **checkpoint**. If a machine fails, the job restarts from the last checkpoint and continues — no loss, no duplicates in its state. Combined with transactional or idempotent sinks, this delivers end-to-end exactly-once processing, the guarantee financial and billing workloads require.

### Windows

Aggregations over streams need boundaries. Flink provides tumbling windows (fixed, non-overlapping), sliding windows (overlapping), and session windows (grouped by activity gaps), all evaluable on event time.

## A simple example

Counting orders per customer over 5-minute windows, in Flink SQL:

```sql
SELECT
  customer_id,
  TUMBLE_START(event_time, INTERVAL '5' MINUTE) AS window_start,
  COUNT(*) AS order_count
FROM orders
GROUP BY customer_id, TUMBLE(event_time, INTERVAL '5' MINUTE);
```

Behind this short query, Flink is managing keyed state for every customer, advancing watermarks, checkpointing continuously, and scaling the work across the cluster.

## Where Flink fits

- **Sources and sinks** — Kafka is the most common partner: Kafka stores the event log durably; Flink computes over it. Flink also connects to files, databases (via CDC connectors), and many other systems.
- **Common uses** — real-time fraud detection, live dashboards and metrics, alerting on event patterns, continuous ETL into lakehouses and warehouses, and real-time feature computation for machine learning.
- **Deployment** — Flink runs on Kubernetes or YARN, or as managed services on the major clouds.

## Flink vs Spark Structured Streaming, briefly

Both process streams, with different centers of gravity. Spark began as a batch engine and added streaming (micro-batch by default — very small batches, with a continuous mode available); its strength is unifying batch, SQL, and ML in one engine. Flink was designed streaming-first, with true per-event processing, mature event-time semantics, and large-scale state management. Teams that need the lowest latency and the most sophisticated stateful streaming tend to choose Flink; teams standardized on Spark often stay for batch-streaming unity. Many platforms run both.

## Why Flink keeps growing

The direction of data is toward freshness: decisions in seconds, AI systems fed by current context, fraud stopped during the transaction rather than after. Every one of those workloads needs stateful stream processing, and Flink is the open-source standard for it — which is why it appears in nearly every forward-looking data stack.

## Key takeaways

- Flink is a stream-first processing framework: unbounded data, event time, managed state, exactly-once via checkpoints.
- State, watermarks, and windows are the three concepts that explain most of its power.
- Kafka stores the stream; Flink computes over it; lakehouses and warehouses receive the results.

## Resources

- Apache Flink documentation — https://nightlies.apache.org/flink/flink-docs-stable/
- Apache Flink project — https://flink.apache.org/
