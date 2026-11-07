---
title: "What are Hadoop Execution Modes?"
description: "The three Hadoop execution modes — standalone (local), pseudo-distributed single-node, and fully distributed multi-node — and how each one runs MapReduce applications."
pubDate: 2017-07-25
category: "Data Engineering"
subcategory: "Hadoop"
draft: false
---

[Apache Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/) can be used in multiple modes to achieve a different set of tasks. There are three modes in which a [Hadoop MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) application can be executed.

- Local (Standalone) mode
- Pseudo-Distributed Mode
- Fully distributed mode

We will go over these execution modes in detail in this blog post.

## Standalone Mode (Local Mode)

It is the default mode of Hadoop and is also called the Local mode. This mode executes all the Hadoop MapReduce components within a single Java process and uses the local file system for the storage and input/output operations.

When we decompress the Hadoop source package, it is unknown of the hardware setup. In this case, Hadoop uses minimal settings from the configuration files- `mapred-site.xml`, `core-site.xml`, `hdfs-site.xml`. We don't need to change any settings from these files.

When configuration files are empty, Hadoop will completely run on the local machine. So, it will not use [HDFS (Hadoop Distributed File System)](https://www.nitendratech.com/hadoop/hadoop-hdfs/) or launch any Hadoop demons. It's mainly used for debugging and testing MapReduce applications without having any additional complexity of interacting with the daemons.

## Pseudo-Distributed Mode (Single Node Cluster)

This mode runs Hadoop in a "cluster of one" with all daemons running on a single machine. It is also known as a single-node cluster, where the NameNode and DataNode will reside on the same machine. It provides additional functionalities in comparison to Local mode that can be used for debugging the code, memory usage analysis, HDFS input/output issues, and other daemon interactions. This mode emulates a Hadoop in a single machine.

In this Hadoop node, each of the Hadoop components spawns its own JVM (Java Virtual Machine) but within a single machine. Each of these Hadoop components could communicate across network sockets, producing a mini-cluster on a single host.

In this case, we need to change the configuration for all three files- `mapred-site.xml`, `core-site.xml`, `hdfs-site.xml`. This mode has the replicated factor of one for all blocks,

## Fully Distributed Mode (Multiple Node Cluster)

This is the production model of Hadoop (what Hadoop is known for) where data is used and distributed across several nodes on a Hadoop cluster. This distributed model is used in most production applications that can span from a few nodes to thousands of nodes.

Masters and Slave daemons run on separate nodes in the fully distributed Hadoop Mode. In this mode, data are distributed across multiple nodes when used in production.

In order to have a fully functional Hadoop cluster mode, we need to change the configuration for all three files- `mapred-site.xml`, `core-site.xml`, `hdfs-site.xml`.

The fully Distributed mode can have the below components,

- **Master Node:** It is the host of the NameNode and Job-Tracker Daemons
- **Back-Up Node:** This hosts the Secondary Name Node daemon
- **Slave Nodes:** These are the Linux boxes in the cluster running both DataNode and Task Tracker Daemons.

With the new generations of the Hadoop framework being evolved, there are more configuration files like `yarn-site.xml` and others being added.

---

*Originally published on nitendratech.com on 2017-07-25, updated 2023-07-19.*
