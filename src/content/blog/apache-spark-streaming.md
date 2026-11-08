---
title: "Introduction to Apache Spark Streaming"
description: "An introduction to Apache Spark Streaming — what it is, its use cases, stateless and stateful transformations, and how it differs from Spark batch processing."
pubDate: 2017-10-04
category: "Data Engineering"
subcategory: "Spark Streaming"
draft: false
---

Apache Spark Streaming is an extension of the core API Spark provides that allows developers/data scientists to process data in real time. The source of the data can be Flume. Kafka, streaming files and Amazon Kinesis. Processed data through streaming APIs can be persisted to databases, written to file systems, and published to live dashboards.

[Apache Spark](/blog/apache-spark/) provides a unified engine that natively supports both batch and streaming workloads. Spark Streaming's execution model is advantageous over traditional streaming systems for its fast recovery from failures, dynamic load balancing, streaming and interactive analytics, and native integration.

## Spark Streaming Use Cases

There can be many situations where Spark streaming can be used, which depends upon the overall objective and business case of the company. In general, it can be divided into four broad ways in which spark streaming is being used today.

### Streaming ETL (Extra Transform Load)

Data is continuously obtained from different sources, which are then cleaned and aggregated in real-time before being pushed to a data warehouse or data marts.

### Triggers

When any kind of anomalous behavior is detected in real time, certain downstream actions are triggered automatically. Eg: Anomalous or unusual behavior of sensor devices generating actions.

### Data Enrichment

Live data is enriched with more information by adding or joining it with static content/datasets in real time.

### Complex sessions and continuous learning:

Events related to a live session (e.g. clickstream data) are grouped and analyzed. Some of this session information can be used to continuously update machine learning models.

## Different types of transformations on Spark Streaming

There are mainly two types of transformations available when we use Spark streaming.

### Stateless Transformations

Processing of the batch does not depend on the output of the previous batch. Examples – `map ()`, `reduceByKey ()`, `filter ()`.

### Stateful Transformations

Processing of the batch depends on the intermediary results of the previous batch. Examples –Transformations that depend on sliding windows.

## Spark Streaming vs Spark Batch

Many IT-based companies collect data in real-time from various sources like sensors, IoT devices, social networks, Mobile devices, web applications, and online transactions. This data needs to be monitored constantly and acted upon quickly, which is not possible through batch-based Spark applications. To address this issue, Spark streaming is used through which real-time stream processing is possible.

### References

[1] [Apache Spark Streaming](http://spark.apache.org/docs/latest/streaming-programming-guide.html)

[2] [Spark Streaming on Yarn in Production](https://www.inovex.de/blog/247-spark-streaming-on-yarn-in-production/)

[3] [Spark Streaming on Yarn](http://mkuthan.github.io/blog/2016/09/30/spark-streaming-on-yarn/)

---

*Originally published on nitendratech.com on 2017-10-04, updated 2024-02-18.*
