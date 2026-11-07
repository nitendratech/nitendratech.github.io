---
title: "Apache Hadoop 3 Changes"
description: "The important enhancements in Apache Hadoop 3 over Hadoop 2 — Java 8, HDFS erasure coding, changed default ports, YARN Timeline Service v.2, opportunistic containers, and support for more than two NameNodes."
pubDate: 2019-05-11
category: "Data Engineering"
subcategory: "Hadoop"
---

Apache Hadoop 3 incorporated a number of enhancements over the Hadoop-2.x. We will talk about the important enhancement that was implemented as part of Hadoop 3 over Hadoop 2 in this blog post.

## Java Version Change

Apache Hadoop 3 needs Java 8 as the minimum version for Java. Java 8 run time version is used to compile all the Hadoop jar files. All the [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) jobs written using Java 7 or below need to be upgraded to Java 8.

## Support for Erasure Coding in HDFS

The default 3x replication provided by the Hadoop platform has 200% overhead in storage space and other resources like network bandwidth, as replication is expensive. Big Data-based applications have both cold and warm data sets, with low Input/Output activities for some of these data sets. If we allocated additional block replicas for these types of data sets, it would be a waste of resources. That's why Hadoop 3 introduced Erasure coding in place of replication of data in [HDFS (Hadoop Distributed File System).](https://www.nitendratech.com/hadoop/hadoop-hdfs/)

Erasure coding is a method for durably storing data with significant space savings compared to replication. It has been traditionally used in storing colder and less frequently accessed data. It would provide the same level of fault tolerance with much less storage space.

## Default Ports changed for Multiple Services

The previous version of the Hadoop service's default ports were in the Linux ephemeral port range(32768-61000). There are many services that would fail because of the port binding issue in the cluster. These conflicting ports affecting the NameNode, Secondary NameNode, DataNode, and Hadoop Key Management Server(KMS) have been removed in the new version.

| Hadoop Apps | Hadoop 2.x | Hadoop 3.x |
| --- | --- | --- |
| HDFS NameNode | 8020 | 9820 |
| HDFS NameNode HTTP UI | 50070 | 9870 |
| HDFS NameNode HTTPS UI | 50470 | 9871 |
| Secondary NameNode HTTP | 50091 | 9869 |
| Secondary NameNode HTTP UI | 50090 | 9868 |
| HDFS DataNode | 50010 | 9866 |
| HDFS DataNode IPC | 50020 | 9867 |
| HDFS DataNode HTTP UI | 50075 | 9864 |
| HDFS DataNode HTTPS UI | 50475 | 9865 |

## Hadoop Shell Script Rewrite

Hadoop Shell scripts are being rewritten in Hadoop 3.0 to enhance the documentation and functionality of the scripts and to address any existing bugs

### YARN Timeline Service v.2

Hadoop 3 introduced a major version of YARN (Yet Another Resource Manager) called YARN Timeline Service v.2. It mainly helps to improve the scalability and reliability of Timeline Service and thus enhances usability by introducing flows and aggregation.

In Hadoop 3.0, YARN came off with multiple enhancements in the following areas.

- Support for long-running services with the need to consolidate infrastructure.
- Better resource isolation for disk and network, resource utilization, user experiences, docker opportunities, and elasticity.
- YARN Timeline Service Re architecture to ATS v2

YARN in Hadoop 3.0 would be able to manage resources and services that run beyond the scope of a Hadoop cluster.

## Support for Opportunistic Containers and Distributed Scheduling

Hadoop 3 introduced a new execution type called Opportunistic containers, which can be dispatched for execution at a Node Manager even if there are no resources available at the moment of scheduling. In these cases, these containers will be queued at the Node Manager, waiting for resources to be available for it to start.

## MapReduce Task-Level Native Optimization

MapReduce has added support for a native implementation of the map output collector in Hadoop 3. This can lead to a performance improvement of 30% or more for shuffle-intensive jobs.

## Provides Support for More than 2 NameNode

The initial implementation of HDFS NameNode high-availability in Hadoop 2 provided for a single active NameNode and a single standby NameNode. This architecture is able to tolerate the failure of anyone NameNode in the system by replicating edits to a quorum of three Journal Nodes.

However, there are some business-critical applications that require higher degrees of fault tolerance. So Hadoop 3 allows users to run multiple standby NameNode. The cluster can tolerate the failure of two nodes by configuring three NameNode (1 active and 2 passive) and five Journal Nodes.

## Increased Support for File system Connector

Hadoop 3 supports integration with Microsoft Azure Data Lake and Aliyun Object Storage System. It can be used as an alternative Hadoop-compatible file system.

---

*Originally published on nitendratech.com on 2019-05-11, updated 2023-07-22.*
