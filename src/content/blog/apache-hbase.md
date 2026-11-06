---
title: "What is Apache HBase? Architecture and Features"
description: "Apache HBase explained — the distributed NoSQL database built on HDFS, its master/RegionServer architecture, key features like scalability and automatic sharding, and core components including HMaster, ZooKeeper, and catalog tables."
pubDate: 2020-06-02
category: "Data Engineering"
subcategory: "HBase"
---

Apache HBase is an open-source, non-relational, distributed database modeled after Google's BigTable. It is developed as part of the Apache Software Foundation and is written in Java. It sits on top of [HDFS (Hadoop Distributed Filesystem)](https://www.nitendratech.com/hadoop/introduction-hadoop-hdfs/), providing BigTable-like capabilities for Hadoop. Furthermore, it is a column-oriented key-value data store and has been idolized widely because of its lineage with Hadoop and [HDFS](https://www.nitendratech.com/hadoop/introduction-hadoop-hdfs/).

HBase is well-suited for faster read and write operations on large datasets with high throughput and low input/output latency. It is indexed by row key, column key, and timestamp. It stores structured, semi-structured, and unstructured data.

HBase features compression, in-memory operation, and Bloom filters on a per-column basis as outlined in the original BigTable paper. Tables in HBase can serve as the input and output for MapReduce jobs run in Hadoop and may be accessed through the Java API but also through REST, Avro, or Thrift gateway APIs.

## HBase Architecture

It is well suited for sparse data sets, which are common in many big data use cases. Unlike relational database systems, HBase does not support a Structured Query Language like SQL; in fact, HBase isn't a relational data store at all. Applications in HBase are written in Java, much like a typical MapReduce application.

Though HBase has a master/Slave architecture, it does not mean that every operation goes through the master. The HBase client goes through the specific Region Server to read and write data. Region servers are responsible for handling the row keys for all the data operations. HBase master is used by the client only for the creation, modification, and deletion of tables.

The HBase client does not completely depend on the HBase master for data operations. The HBase cluster can keep serving data even if the master goes down.

In the parlance of Eric Brewer's CAP Theorem, HBase is a CP-type system.

## HBase Features

HBase provides many features, among which important ones are listed below.

- **Scalability:** It supports scalability in both linear and modular forms.
- **Consistency:** Apache HBase is eventually a consistent data store. As it supports strongly consistent reading and writing operations, it is suitable for tasks such as high-speed counter-aggregation.
- **Hadoop HDFS/Map reduce support:** Apache HBase supports the HDFS/Map reduce and another file system out of the box.
- **API Compatibility:** HBase supports Java-based APIs for accessing it programmatically
- **Optimized Read Query:** The use of block cache and bloom filters helps to optimize high-volume queries and supports real-time processing.
- **Automatic Sharding/ Region server failover:** This feature helps to distribute the data into different regions and prevents any loss of data within those clusters.

## HBase Key Components

### Regions

This component contains memory data store and Hfile.

### Region Server

A Region server monitors the Region. It can serve one or more Regions. Each Region is assigned to a Region Server on startup, and the master can decide to move a Region from one Region Server to another as the result of a load balance operation. The Master also handles Region Server failures by assigning the region to another Region Server. The mapping of Regions and Region Servers is kept in a system table called META. By reading META, you can identify which region is responsible for your key. This means that for reading and writing operations, the master is not involved at all and clients can go directly to the Region Server responsible to serve the requested data.

### HMaster

The HMaster is the Master server responsible for monitoring all RegionServer instances in the cluster, and it is the interface for all metadata changes. In a distributed cluster, it runs on the Name node. It is responsible for administrative operations.

### Zookeeper

It takes care of the coordination between the HBase Master component and the client. In HBase architecture, ZooKeeper is the monitoring server that provides different services like –tracking server failure and network partitions, maintaining the configuration information, establishing communication between the clients and region servers, and the usability of ephemeral nodes to identify the available servers in the cluster.

### Catalog Table

The two important catalog tables are ROOT and META. The ROOT table tracks where the META table is, and the META table stores all the regions in the system.

### HRegionServer

HRegionServer is the Region Server implementation. It is responsible for serving and managing regions. In a distributed cluster, a RegionServer runs on a Data Node. With a single WAL per RegionServer, the RegionServer must write to the WAL serially, because HDFS files must be sequential. This causes the WAL to be a performance bottleneck. That's why we need Multi Write Ahead Log

## Conclusion

In this blog post, we learned about Apache HBase, HBase Architecture, features, and its key components.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2020-06-02, updated 2024-02-18.*
