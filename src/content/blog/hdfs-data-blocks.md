---
title: "What are HDFS Data Blocks?"
description: "What HDFS data blocks are, how block size and replication work in Hadoop, the benefits of block transfer, and how HDFS differs from Network Attached Storage (NAS)."
pubDate: 2021-06-22
category: "Data Engineering"
subcategory: "HDFS"
draft: false
---

## Hadoop Block Size Configuration and Components

Block is defined as the smallest site/location on the hard drive that is available to read and write data. Data in [HDFS(Hadoop Distributed File System](https://www.nitendratech.com/hadoop/introduction-hadoop-hdfs/) is split into blocks distributed across cluster nodes. The whole file is divided into small blocks and then stored as separate units.

Each block is replicated multiple times for fault tolerance. The default is to replicate each block three times and are stored on different nodes. HDFS utilizes the local file system to store each HDFS block as a separate file. It is designed to reliably store very large files across machines in large clusters.

## How are the HDFS Blocks replicated?

Block size in HDFS and replication factor are configurable per file. An application can set up the number of replicas programmatically. It can be specified at file creation time and can be changed later if needed. Decisions related to the block size are made by Name Node. HDFS uses a rack-aware replica placement policy to make two copies of the data in the same rack and the third copy in a different rack.

In Unix/Linux-based systems, block size is defined as 8192 bytes. But in HDFS, the default block size is typically defined as 64 MB for Hadoop 1.1x and 128 MB for 2.x and further. This block size can be customized depending on the size of the cluster. HDFS blocks are larger as compared to disk blocks, mainly to minimize the seek costs. In the older version of Hadoop, the default replication size is defined as three, It means each block is replicated three times and stored in different nodes.

For Example: If a particular file is 50 MB, and the HDFS block is 64 MB as the default size, it will create a block of 50 MB for that file. The remaining 14 MB is free to do something else.

![HDFS Block Size Configuration](/images/HDFS_Data_blocks_drawio.png)

## Benefits of Block Transfer

When we talk about big data, the data file can be larger than any single disk on the network. The use of HDFS blocks provides fault tolerance and availability. Each block is replicated to a few physically separate machines to insure against corrupted blocks and disk/machine failure. If a copy of the block is not available, from a location, the same copy of that block can be read from another location, keeping the transparency to the client.

## Difference between HDFS and Network Attached Storage (NAS)?

In the Hadoop framework, HDFS is a distributed file system used for storing data in commodity hardware. But NAS is a file-level server for data storage that is connected to a computer network.

HDFS stores the data by distributing it to a cluster made from commodity hardware, whereas NAS stores data on dedicated hardware.

HDFS works with the MapReduce framework whereas, in NAS, computation and data are stored separately.

---

*Originally published on nitendratech.com on 2021-06-22, updated 2023-07-20.*
