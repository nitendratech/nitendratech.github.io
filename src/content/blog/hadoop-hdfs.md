---
title: "Introduction to Hadoop Distributed File System(HDFS)"
description: "An introduction to HDFS, the Hadoop Distributed File System — its purpose, the NameNode and DataNode architecture, rack awareness, failure handling, fault tolerance, and input splits."
pubDate: 2017-07-15
category: "Data Engineering"
subcategory: "HDFS"
draft: false
---

HDFS or Hadoop Distributed File System is a distributed file system that is designed for storing and processing very large files with streaming data access patterns running on clusters of commodity hardware. HFDS is one of the components of the [Apache Hadoop framework](https://www.nitendratech.com/hadoop/apache-hadoop/), whereas the other components are MapReduce and YARN (Yet Another Resource Negotiator)

It was created and implemented by Google; it was known as the Google File System (GFS). It is designed such that it can handle large amounts of data and reduces the overall input/output operations on the network. Likewise, it also increases the scalability and availability of the cluster because of data replication and fault tolerance.

When input files are ingested into the Hadoop framework, they are divided into a block size of 64 MB or 128 MB and are distributed among Hadoop clusters. Block size can be pre-defined in the cluster configuration file or can be passed as a custom parameter while submitting a [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) job. This storage strategy helps Hadoop framework store large files having a bigger size than the disk capacity of each node. It enables HDFS to store data from terabytes to petabytes scale.

## Purpose of HDFS

HDFS was originally designed with several purposes in mind. Some of these goals are listed below.

- **Access to both batch and Streaming Data**

Even though HDFS was originally designed for ingesting data in batch mode, newer versions of HDFS support the ingestion as well as consumption of streaming data. This makes Hadoop a suitable tool when designing or architecting a solution for both batch and streaming data.

- **Accommodates Big Data sets**

This file system supports large datasets ranging from Gigabytes to Zettabytes. It can provide high aggregate bandwidth when dealing with large volumes of data, making it easily scalable to hundreds of nodes in the cluster environment.

- **Faster recovery from Failures**

As we can have thousands of nodes in a Hadoop cluster made from commodity hardware, there are always chances of server failure. The server can fail from both hardware and software or network issues. HDFS has been built from the ground up to deal with these types of failures and recover from them automatically.

## Hadoop Architecture

![](/images/hdfsarchitecture.png)

**Figure: HDFS Architecture**

HDFS is based on master/slave architecture, for which it has two different daemons.

- NameNode
- DataNodes

## NameNode

NameNode is the node that stores the file system metadata, i.e., which file maps to what block locations and which blocks are stored on which DataNode. It keeps a record of all the files in the file system and tracks the file data across the cluster or multiple machines.

The NameNode maintains two in-memory tables.

- One maps the blocks to a DataNode for a replication value
- Another DataNode to block number mapping.

Whenever a DataNode reports a disk corruption of a particular block, the first table gets updated, and whenever a DataNode is detected to be dead (because of a node/network failure) both the tables get updated.

### DataNode

It is the node where the actual data resides and is responsible for reading and writing requests from clients. When any file is stored in a DataNode it is converted to different storage blocks and replicated in different nodes.

All DataNode sends a heartbeat message to the NameNode every 3 seconds to say that they are alive. If the NameNode does not receive a heartbeat from a particular data node for 10 minutes, then it considers that data node to be dead/out of service and initiates replication of blocks that were hosted on that data node to be hosted on some other data node.

The data nodes can talk to each other to rebalance data, move and copy data around and keep replication high. When the DataNode stores a block of information, it maintains a checksum for it as well. The data nodes update the NameNode with the block information periodically, and before updating verify the checksums. If the checksum is incorrect for a particular block, i.e. there is a disk-level corruption for that block; it skips that block while reporting the block information to the NameNode. In this way, NameNode is aware of the disk level corruption on that DataNode and takes steps accordingly.

## Features of HDFS

There are many features provided by HDFS. Some important features are given below.

- **Rack Awareness**
- **Failure handling**
- **Fault Tolerance**
- **Splittable File**

### Rack Awareness in Hadoop

HDFS is designed to be rack aware to maintain a high availability and reduce the data between the networks. It is rack-aware in the sense that the NameNode and the job tracker obtain a list of rack IDs corresponding to each of the slave nodes (data nodes) and create a mapping between the IP address and the rack ID. HDFS uses this knowledge to replicate data across different racks so that data is not lost in the event of a complete rack power outage or switch failure.

### Handling failures by Name Node

DataNode constantly communicates with the NameNode, each DataNode sends a Heartbeat message to the NameNode periodically.

If the signal is not received by the NameNode as intended, the NameNode will consider that DataNode as a failure and doesn’t send any new requests to the dead DataNode. If the Replication Factor is more than 1, the lost Blocks from the dead DataNode can be recovered from other DataNodes where the replica is available, thus providing features like data availability and fault tolerance.

### Fault Tolerance in Hadoop

Fault tolerance in HDFS refers to the working strength of a system in unfavorable conditions and how that system can handle such a situation. HDFS is highly fault-tolerant, as it can handle faults through the process of replica creation. The replica of users’ data is created on different machines in the HDFS cluster. So whenever any machine in the cluster goes down, then data can be accessed from another machine in which the same copy of data was created.

Whenever some data is stored on HDFS, the NameNode replicates that data to multiple DataNode. In Hadoop, the default replication factor is 3, which can be changed as per requirement. If the DataNode goes down, the NameNode takes the data from the replicas and copies it to another node. In this way, data is automatically available, making HDFS fault-tolerant.

### Input Split in Hadoop

Input splits are a logical division of your records, whereas HDFS blocks are a physical division of the input data. It’s extremely efficient when they’re the same, but in practice, it’s never perfectly aligned. Even though records may cross block boundaries, Hadoop guarantees that all records will be processed. A machine processing a particular split may fetch a fragment of a record from a block other than its “main” block, which may reside remotely. The communication cost for fetching a record fragment is inconsequential because it rarely happens.

In HDFS, data is split into blocks and distributed across multiple nodes in the cluster. Each block is typically 64Mb or 128Mb in size. Each block is replicated multiple times. The default number of replication in a typical Hadoop cluster is three. Each of the replicas is stored on different nodes. HDFS utilizes the local file system to store each HDFS block as a separate file. HDFS Block size can not be compared with the traditional file system block size.

This helps to store large files in GB or TB size by splitting them into multiple chunks in the Hadoop platform.

## Reference

Gautam, N. “Analyzing Access Logs Data using Stream Based Architecture.” Masters, North Dakota State University,2018. [Available](https://library.ndsu.edu/ir/handle/10365/28001)

---

*Originally published on nitendratech.com on 2017-07-15, updated 2023-07-19.*
