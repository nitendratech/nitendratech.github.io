---
title: "Apache Kafka Important Components"
description: "The important components of Apache Kafka — Zookeeper, brokers, topics and logs, partitions, offsets, leaders and followers, producers, consumers, and geo-replication with MirrorMaker."
pubDate: 2020-06-01
category: "Data Engineering"
subcategory: "Kafka"
draft: false
---

In the earlier blog, we read about [Apache Kafka](https://www.nitendratech.com/kafka/apache-kafka/) and its architecture. In this blog post, we will learn about Apache Kafka’s Important components.

## Zookeeper

It is the coordination interface between the Kafka broker and consumers. Kafka uses Zookeeper to store offsets of messages consumed for a specific topic and partitioned by a specific Consumer Group. It is not possible to bypass Zookeeper and connect directly to the Kafka server. If for some reason, ZooKeeper is down, you cannot service any client request.

## Broker

It is the actual Kafka process. It is just like a Kafka instance. A Kafka cluster can have one or more brokers.

## Topics and Logs

A topic is a category or feed name to which records are published. Topics in Kafka are always multi-subscriber; that is, a topic can have zero, one, or many consumers that subscribe to the data written to it.

For each topic, the Kafka cluster maintains a partitioned log that looks like below.

![Log Anatomy](/images/log_anatomy.png)

Figure: [Log Anatomy](https://kafka.apache.org/intro#intro_topics)

## Partition

Partitions are the basic building block of the Kafka cluster, which is an ordered, immutable sequence of records that is continually appended to—a structured commit log. The partitions of the log are distributed over the servers in the Kafka cluster, with each server handling data and requests for a share of the partitions. Each partition is replicated across a configurable number of servers for fault tolerance.

![Log Consumer](/images/log_consumer.png)

Figure: [Kafka Partition](https://kafka.apache.org/intro#intro_topics)

Kafka only provides a total order over records within a partition, not between different partitions in a topic. Per-partition ordering combined with the ability to partition data by key is sufficient for most applications. However, if you require a total order over records this can be achieved with a topic that has only one partition, though this will mean only one consumer process per consumer group.

## Offset

Kafka maintains a numerical offset for each record in a partition. This offset acts as a kind of unique identifier of a record within that partition and also denotes the position of the consumer in the partition.

The messages in the partitions are each assigned a sequential ID number called offset that uniquely identifies each message within the partition. The Kafka cluster retains all published records—whether or not they have been consumed—using a configurable retention period. For example, if the retention policy is set to two days, then for the two days after a record is published, it is available for consumption, after which it will be discarded to free up space. Kafka’s performance is effectively constant with respect to data size, so storing data for a long time is not a problem.

## Leaders and Followers

Each partition has one server which acts as the “leader” and zero or more servers that act as “followers”. The leader handles all read and write requests for the partition, while the followers passively replicate the leader. If the leader fails, one of the followers will automatically become the new leader. Each server acts as a leader for some of its partitions and a follower for others, so the load is well-balanced within the cluster.

## Producer

Producers publish data on the topics of their choice. The producer is responsible for choosing which record to assign to which partition within the topic. This can be done in a round-robin fashion simply to balance load, or it can be done according to some semantic partition function (say based on some key in the record).

The publisher sends data directly to the broker that is the leader for the specific partition. The publisher publishes the messages in the mentioned partition. If the partition to which the data has to be published is not mentioned, then the data is published in a single partition only

## Consumer

Consumers label themselves with a consumer group name, and each record published to a topic is delivered to one consumer instance within each subscribing consumer group. Consumer instances can be in separate processes or on separate machines.

The processes that subscribe to topics and process the feed of published messages are consumers. Messaging traditionally has two models:

- Queuing
- Publish-Subscribe

In a queue, a pool of consumers may read from a server and each message goes to one of them; in Publish-Subscribe, the message is broadcast to all consumers. Kafka offers a single consumer abstraction that generalizes both of these—the consumer group.

If all the consumer instances have the same consumer group, then the records will effectively be load-balanced over the consumer instances.

If all the consumer instances have different consumer groups, then each record will be broadcast to all the consumer processes.

## Geo-Replication

Kafka MirrorMaker provides geo-replication support for your clusters. With MirrorMaker, messages are replicated across multiple data centers or cloud regions. You can use these inactive/passive scenarios for backup and recovery, or inactive/active scenarios to place data closer to your users, or support data locality requirements.

- Distribution Kafka uses the concept of consumer groups to allow a pool of processes to divide the work of consuming and processing records. These processes can either be running on the same machine or, as is more likely, they can be distributed over many machines to provide scalability and fault tolerance for processing.

---

*Originally published on nitendratech.com on 2020-06-01, updated 2022-06-05.*
