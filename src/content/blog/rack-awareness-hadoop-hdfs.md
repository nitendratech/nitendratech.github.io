---
title: "Rack Awareness in Hadoop HDFS"
description: "What a rack is in Hadoop, how rack awareness places HDFS data blocks and replicas across racks, and its advantages for bandwidth, rack-failure protection, and data availability."
pubDate: 2021-06-10
category: "Data Engineering"
subcategory: "HDFS"
draft: false
---

## What is Rack?

Before looking into the Rack awareness in [Hadoop](/blog/apache-hadoop/) HDFS, let us understand the rack itself. A rack is a storage area where all the data nodes are put together. In other words, a rack is a physical collection of Data Nodes that are stored at a single location. Data Nodes can be physically located at different places, where we can have multiple racks in a single location.

## What is Rack Awareness?

Rack awareness is an algorithm that is defined in the Hadoop framework that decides how to place data blocks and their replicas on cluster racks. This is done through rack definitions, which will minimize traffic between data nodes while reading/writing [HDFS](/blog/hadoop-hdfs/) files in large clusters of Hadoop. NameNode chooses data nodes based on the same or nearby rack to read/write requests. HDFS NameNode makes it possible by maintaining the rack IDs of each data node.

Let us take an example. As the default replication factor in the Hadoop cluster is 3, a policy called Replica Placement Policy” makes two copies of replicas for each block of data. These two copies will be stored in a single rack, whereas the third copy is stored in a different rack.

## Advantages of Rack Awareness in Hadoop

There are many advantages of Having Rack Awareness in the Hadoop Cluster.

- Improves network bandwidth while distributing big data
- Provides data protection against Rack failure
- Improves the availability/reliability of the data stored in Hadoop HDFS

---

*Originally published on nitendratech.com on 2021-06-10, updated 2023-07-22.*
