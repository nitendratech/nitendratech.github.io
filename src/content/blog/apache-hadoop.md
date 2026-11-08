---
title: "What is Apache Hadoop? An In-depth Look at This Big Data Tool"
description: "What Apache Hadoop is — its history, its four core components (HDFS, MapReduce, Hadoop Common, and YARN), how it works, the ecosystem applications around it, the languages it supports, and the companies using it in real life."
pubDate: 2017-07-01
category: "Data Engineering"
subcategory: "Hadoop"
draft: false
---

## What exactly is Apache Hadoop?

Apache Hadoop is an open-source distributed processing framework that is used to store and process large datasets whose size ranges from gigabytes to petabytes of data. This framework uses multiple commodity hardware to analyze a large amount of data quickly in comparison to traditional software. Hadoop is not an ETL (Extract, Transform, and Load) or an ELT (Extract, Load, and Transform) by itself. But it supports certain tools like Apache Hive, Apache NiFi, and Apache Spark which can be architected such that Hadoop can be a part of an ETL workflow.

Apache Hadoop is a build-up to scale up from one server to multiple servers, each of them offering computation and storage at the local level. It provides high availability even though the hardware used is low-end or high-end. It detects failures at the application level and handles them before the job itself fails.

## History of Hadoop

Google LLC was the first organization that dealt with massive data when they worked on indexing internet-based search results while supporting their search queries. To solve this problem, they built a framework for large-scale data processing using the map and reduced models of the functional programming paradigm. Google released two academic papers in 2003 and 2004 based on the advancement they have done with this framework. Based on the reading of this paper, the Google MapReduce model was implemented by Doug Cutting while working at Yahoo. This Hadoop project developed at Yahoo was later donated to the Apache Foundation.

Apache Hadoop is distributed based on the license provided by the Apache Foundation, which provides a free license. With the Apache License, one can use Apache software for personal and commercial use for free. It is maintained by the commenters as part of the Apache software foundation project. [This](https://github.com/apache/hadoop) is the link to the Apache Hadoop GitHub project that is being maintained by the Apache Foundation.

## Components of Hadoop

There are mainly four main components that comprise Apache Hadoop.

- **Hadoop Distributed File System(HDFS)**

[Hadoop Distributed File System or HDFS](/blog/hadoop-hdfs/) is a distributed file system that is designed for storing very large files with streaming data access patterns, running on clusters of commodity hardware.

- **MapReduce Framework**

[MapReduce Framework](/blog/hadoop-mapreduce-framework/) is the parallel programming model for processing an enormous amount of data that splits the input dataset into independent chunks, which are processed by the map tasks in a completely parallel manner. The Hadoop framework sorts the outputs of the maps, which are then inputted into the reduced tasks. Typically, both the input and the output of the job are stored in a file system. The framework takes care of scheduling tasks, monitoring them, and re-executing the failed tasks.

- **Hadoop Common Library**

These are the common Java-based libraries that can be used across all the Hadoop-based modules.

- **Yet Another Resource Negotiator (YARN)**

[YARN stands for Yet Another Resource Negotiator](/blog/hadoop-yarn/), which is a Hadoop Cluster resource management and job scheduling component. It was introduced in Hadoop 2 to help [MapReduce](/blog/hadoop-mapreduce-framework/) and is the next-generation computation and resource management framework. It allows multiple data processing engines such as [SQL (Structured Query Language)](/blog/learn-sql/), real-time streaming, data science, and batch processing to handle data stored in a single platform.

## How Does Hadoop Work?

Apache Hadoop makes it easier to process huge amounts of data in a distributed way by using all the storage capacity and cluster servers. It provides various components upon which the services and applications can be built.

Applications that run in the Hadoop cluster connect to NameNode using a set of APIs (Application Programming Interfaces). The job of a NameNode is to track the file directory structure and placement of the block of each file that is replicated across DataNodes. For a job to run in Hadoop, it is divided into Map and Reduce tasks that run against the data which is stored in the data nodes. Map tasks run against each input file in HDFS reduce tasks aggregates and prepare the final output.

## What are Apache Hadoop Ecosystem applications?

Today's Apache Hadoop Ecosystem is quite bigger than what it was back in 2011. There are many tools available in the Hadoop ecosystem as part of the Apache Foundation Big Data category that help to ingest, process, extract, store, and analyze massive data. Below are some popular applications.

- Apache Spark
- Apache Hive
- Apache HBase
- Apache Sqoop
- Apache Zeppelin
- Apache Oozie
- Apache Pig
- Apache Zookeeper
- Apache Flume

## Is Apache Hadoop a Database?

Apache Hadoop is not a database, but a framework that is used to process massive amounts of data through parallel computing. NoSQL databases like Apache HBase and Apache Cassandra can sit on top of HDFS in the Hadoop framework.

Apache HBase is an open-source, non-relational, distributed database modeled after Google's BigTable. It sits on top of [HDFS (Hadoop Distributed File System)](/blog/hadoop-hdfs/), providing BigTable-like capabilities for Hadoop. It is a column-oriented key-value data store and has been idolized widely because of its lineage with Hadoop and [HDFS](/blog/hadoop-hdfs/).

The Hadoop ecosystem uses a computing framework called MapReduce that takes the intensive data processes and spreads the computation across commodity hardware known as the Hadoop cluster. With the arrival of Hadoop, big data processing time has been reduced from 20 hours in an RDBMS (Relational Database Management System) to 5 minutes across the Hadoop cluster made from commodity Hardware.

## Language Supported and written by Hadoop

Although the Apache Hadoop framework is written in Java, it supports multiple languages in which one can write MapReduce code. These Languages are listed below.

- Java
- Python
- C++
- Ruby

## Companies using Apache Hadoop in Real life

Some many originations and enterprises use the Hadoop framework. It is not possible to list them all. Most organizations customize the vanilla Hadoop framework and adjust it accordingly. But below are some of the organizations that utilize Big Data by its vertical.

### E-Commerce

- Amazon
- E-Bay
- Home Depot
- Ali Baba
- Kroger

### Telecommunications

- T-Mobile
- AT&T
- Verizon
- Ericsson

## Travel/Tourism

- Expedia
- Hotwire

## Finance/Banking

- Bank of America
- Citibank
- Fidelity Investment
- Charles Schwab

## Social Media Websites

- Facebook
- Instagram
- Snapchat
- TikTok
- LinkedIn
- Twitter

## Conclusion

In this blog post, we learned about Apache Hadoop, its use of Apache Hadoop, and its relation to Big Data concepts. We also learned about the programming language supported by Apache Hadoop and companies using Apache Hadoop in real life.

Please share this blog post on social media and leave a comment with any questions or suggestions.

## Reference

Gautam, N. "Analyzing Access Logs Data using Stream Based Architecture." Masters, North Dakota State University,2018. [Available](https://library.ndsu.edu/ir/handle/10365/28001)

---

*Originally published on nitendratech.com on 2017-07-01, updated 2024-02-18.*
