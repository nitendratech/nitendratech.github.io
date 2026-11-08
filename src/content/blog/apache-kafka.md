---
title: "Introduction to Apache Kafka"
description: "An introduction to Apache Kafka — what it is, how it differs from traditional message broker systems, its communication protocol, and its four core APIs: Producer, Consumer, Streams, and Connector."
pubDate: 2017-11-25
category: "Data Engineering"
subcategory: "Kafka"
draft: false
---

Apache Kafka is an open-source project for a distributed publish-subscribe messaging system rethought as a distributed commit log. It stores messages in topics that are partitioned and replicated across multiple brokers in a cluster. Producers send messages to topics from which consumers read.

Kafka uses Zookeeper to share and save states between brokers. Each broker maintains a set of partitions: primary and/ or secondary, for each topic. A set of Kafka brokers working together will maintain a set of topics. Each topic has its partitions distributed over the participating Kafka brokers and the replication factor determines, intuitively, the number of times a partition is duplicated for fault tolerance.

While many brokered message queue systems have the broker maintain the state of its consumers, Kafka does not. This frees up resources for the broker to ingest data faster. For more information about Kafka’s performance, see the [Kafka’s official documentation](https://kafka.apache.org/)

![Kafka Architecture](/images/kafka_diagram.png)

Figure: [Apache Kafka](https://kafka.apache.org/intro)

## Kafka vs Other Message Broker System

In traditional message processing, you apply simple computations on the messages – in most cases individually per message.

In-stream processing, you apply complex operations on multiple input streams and multiple records (i.e., messages) at the same time (like aggregations and joins).

Furthermore, the traditional messaging systems cannot go “back in time” – ie, they automatically delete messages after they are delivered to all subscribed consumers. In contrast, Kafka keeps the messages as it uses a pull-based model (ie, consumer pull data out of Kafka) for a configurable amount of time. This allows consumers to “rewind” and consume messages multiple times – or if you add a new consumer, it can read the complete history. This makes stream processing possible because it allows for more complex applications. Furthermore, stream processing is not necessarily about real-time processing – it’s about processing an infinite input stream (in contrast to batch processing, which is applied to finite inputs).

And Kafka offers Kafka Connect and Streams API – so it is a stream processing platform and not just a messaging/pub-sub system (even if it uses this in its core).

### A communication protocol in Kafka

In Kafka, communication between the clients and the servers is done with a simple, high-performance, language-agnostic TCP protocol. This protocol is versioned and maintains backward compatibility with the older version. Kafka natively supports Java, although it supports clients in other languages too.

## Kafka API

Apache Kafka provides four core APIs using which applications can be developed using Kafka.

- **The Producer API**: It allows an application to publish a stream of records to one or more Kafka topics.
- **The Consumer API**: It allows an application to subscribe to one or more topics and process the stream of records produced to them.
- **The Streams API**: It allows an application to act as a stream processor, consuming an input stream from one or more topics and producing an output stream to one or more output topics, effectively transforming the input streams into output streams.
- **The Connector API**: It allows the building and running of reusable producers or consumers that connect Kafka topics to existing applications or data systems. For example, a connector to a relational database might capture every change to a table.

## References:

[Kafka Official documentation](https://kafka.apache.org/)

[Choosing number of topic/Partitions](https://www.confluent.io/blog/how-to-choose-the-number-of-topicspartitions-in-a-kafka-cluster/)

---

*Originally published on nitendratech.com on 2017-11-25, updated 2024-02-18.*
