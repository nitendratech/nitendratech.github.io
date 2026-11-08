---
title: "Difference between Apache Hadoop/HDFS and HBase"
description: "How Apache Hadoop/HDFS and Apache HBase differ — HDFS as a distributed storage system for sequential access and HBase as a NoSQL wide-column database on top of HDFS for random real-time read/write access."
pubDate: 2020-02-16
category: "Data Engineering"
subcategory: "Hadoop"
draft: false
---

Apache Hadoop/[HDFS](/blog/hadoop-hdfs/) and HBase are both parts of the [Big data](/blog/big-data/) framework. They both are used to store a massive amount of data. In spite of this similarity, they have a lot of differences.

## Apache Hadoop

It is an open-source Big Data Analytics framework used for processing large data sets across clusters of low-cost servers using simple [MapReduce](/blog/hadoop-mapreduce-framework/) programming models. It is designed to scale up from one server to multiple servers, offering computation and storage at the local level.

Furthermore, it is made up of two components.

- **HDFS (Hadoop Distributed File System)**

[HDFS](/blog/hadoop-hdfs/) is a distributed file system that is designed for storing very large files with streaming data access patterns, running on clusters of commodity hardware. It was originally created and implemented by Google, where it was known as the Google File System (GFS). HDFS is designed such that it can handle large amounts of data and reduces the overall input/output operations on the network. It also increases the scalability and availability of the cluster because of data replication and fault tolerance

- **MapReduce Programming Model**

[MapReduce](/blog/hadoop-mapreduce-framework/) is a parallel programming model that is used for processing large chunks of data. It splits the input datasets from the disk into independent chunks if these data cannot be stored on one single node. It first executes the mapping tasks to process the split input data in a parallel manner and sorts the output of the map function and sends the result to reduce tasks as their input.

HDFS lacks the random read/write capability, as it is a distributed File system. HDFS is good for sequential data access, but does not perform well for random read/write access.

## Apache HBase

[Apache HBase](/blog/apache-hbase/) is a [non-relational (NoSQL)](/blog/nosql-databases/) wide column database that sits on top of HDFS and is part of the Apache Hadoop Big Data Ecosystem. It runs on top of your Hadoop cluster and provides you random real-time read/write access to your data.

Apache Hadoop and HBase support both structured and unstructured data. It stores data as key/value pairs in a columnar fashion, while HDFS can store data in various formats (flat files, compressed format).

## Differences between HDFS & HBase

- HDFS is a storage system and HBase is a non-relational column-oriented database.
- Apache HBase provides low latency access to small amounts of data within large data sets, while HDFS provides high latency operations.
- Apache HBase supports random reads and writes while HDFS supports WORM (write once Read Many times) and does not support real random reads.
- HDFS is primarily accessed through MapReduce jobs while Apache HBase is accessed through shell commands, Java API, REST, Avro, or Thrift API.

---

*Originally published on nitendratech.com on 2020-02-16, updated 2023-07-22.*
