---
title: "What is  Apache Spark? The Unified engine for large-scale data analytics."
description: "An introduction to Apache Spark, the unified engine for large-scale data analytics — its types of applications, components (Spark Core, Spark SQL, Spark Streaming, GraphX, and ML lib), key features, supported languages, and real-world use."
pubDate: 2017-05-10
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

Apache Spark is a distributed, in-memory, and disk-based optimized open-source framework that does real-time analytics using [Resilient Distributed Data (RDD)](/blog/spark-rdd/) sets. It includes a streaming library, and a rich set of programming interfaces to make data processing and transformation easier. It is not a database like an RDBMS or NoSQL database, but a data processing engine. Apache Spark is 100% open-source software as part of **Apache** Software Foundation, which is a vendor-independent platform. That's why it is free to use for personal or commercial purposes.

The Spark engine runs in a variety of environments, from cloud services to [Hadoop](/blog/hadoop-mapreduce-framework/) as a standalone instance or Mesos clusters. It is used to perform ETL (Extract, Transform, and Load), interactive queries (SQL), advanced analytics (e.g. machine learning), and streaming over large datasets in a wide range of data stores like [HDFS (Hadoop Distributed File System)](/blog/hadoop-hdfs/), Cassandra, HBase, and Amazon S3. It supports a variety of popular development languages including Java, Python, Scala, and R.

Furthermore, it has an advanced execution engine supporting cyclic data flow with in-memory computing functionalities. It is capable of accessing diverse data sources including HDFS, HBase, and Cassandra among others.

## Types of Applications in Apache Spark

Two styles of application benefit significantly from the Spark processing model.

- **Iterative Algorithms**

Here, a function is applied to the dataset repeatedly until an exit condition is met.

- **Interactive analysis**

Here, a user issues a series of ad hoc exploratory queries to Spark datasets.

## Components of Spark

- **General Execution: Spark Core**

It is the general execution for the Spark framework, which sits at the base of the Spark stack. It is responsible for managing the memory, monitoring the jobs, maintaining the Spark, scheduling the job, and interacting with the Storage system.

- **Streaming Analytics: Spark Streaming**

This layer of Spark enables powerful interactive and analytical applications across both streaming and historical data while inheriting Spark's ease of use and fault tolerance characteristics. It readily integrates with a wide variety of popular data sources, including [HDFS](/blog/hadoop-hdfs/), Flume, [Kafka](/blog/apache-kafka/), and Twitter.

- **Graph Computation: GraphX**

GraphX is a graph computation engine built on top of Spark that enables users to interactively build, transform, and reason about graph-structured data at scale.

- **Structured Data: Spark SQL (Structured Query Language)**

Many data scientists, analysts, and general business intelligence users rely on interactive SQL queries for exploring data. Spark SQL is an engine for Hive data that enables unmodified Hadoop Hive queries to run up to 100x faster on existing deployments and data. It also provides powerful integration with the rest of the Spark ecosystem (e.g., integrating SQL query processing with machine learning).

- **Machine Learning: ML lib**

Machine learning has quickly emerged as a critical piece in mining Big Data for actionable insights. Built on top of Spark, ML lib is a scalable machine learning library that delivers both high-quality algorithms (e.g., multiple iterations to increase accuracy) and blazing speed (up to 100x faster than MapReduce). The library is usable in Java, Scala, and Python as part of Spark applications, so that you can include it in complete workflows.

![Spark Stack](/images/spark-stack.png)

## Key features of Spark

Spark allows Integration with Hadoop and files included in HDFS.

- It has an independent language (Scala) interpreter and hence comes with an interactive language shell.
- Spark consists of RDDs (Resilient Distributed Datasets), which can be cached across computing nodes in a cluster.
- It supports multiple analytic tools that are used for interactive query analysis, real-time analysis, and graph processing.
- Allows integration with Hadoop and files included in [HDFS](/blog/hadoop-hdfs/).
- It provides lightning-fast processing speed for certain Use cases

When it comes to Big Data processing, speed always matters, and Spark runs on Hadoop clusters way faster than others. Spark makes this possible by reducing the number of reading/write operations to the disc. It stores this intermediate processing data in memory.

- **Support for real-time querying**

In addition to simple "map" and "reduce" operations, Spark supports SQL queries, streaming data, and complex analytics such as machine learning and graph algorithms. This allows users to combine all these capabilities into a single workflow. Spark supports multiple analytic tools that are used for interactive query analysis, real-time analysis, and graph processing.

- **Real-time stream processing**

Spark can handle real-time streaming data. [MapReduce](/blog/hadoop-mapreduce-framework/) primarily handles and processes previously stored data. Spark does this in the best way possible.

## Language Supported by Apache Spark

Apache Spark supports multiple programming languages. Some native languages are supported below.

- Java
- Scala
- Python
- R Language

## Apache Spark in the real world

Apache Spark is one of the most popular in-memory data processing engines worldwide. Some important customers of Apache Spark are listed below:

- Software Companies (Uber/Lyft/Snapchat/Facebook/TikTok)
- Product-based companies (Apple/Samsung/LG)
- Telecommunication (AT&T, Verizon, T-Mobile)
- Media (Disney/HBO/Comcast)
- Insurance (Geico/Liberty Mutual)
- Banks (Wells Fargo/Bank of America)
- Healthcare (United Health Care, Aetna, Cigna)

## Conclusion

In this blog post, we read about Apache Spark, the types of applications that can run on it, and the key features of Apache Spark. We also read about the components of Spark, the programming language supported by Apache Spark, and where Apache Spark is used in the real world.

Please share the article on social media and leave a comment with any questions or suggestions.

## References

[1] [Apache Spark official Documentation](http://spark.apache.org/)

---

*Originally published on nitendratech.com on 2017-05-10, updated 2024-01-17.*
