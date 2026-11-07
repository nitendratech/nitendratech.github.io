---
title: "Top and Essential Apache Spark Interview Questions"
description: "Essential Apache Spark interview questions and answers — what Spark is, RDDs, transformations and actions, Spark Core and Spark SQL, cluster managers, persistence storage levels, shuffle, lazy evaluation, broadcast variables, and accumulators."
pubDate: 2022-01-13
category: "Data Engineering"
subcategory: "Interview Questions"
draft: false
---

In this blog post, we will go through the important Apache Spark Interview questions and answers that will help you prepare for the next Spark Interview.

## What is Apache Spark?

Apache Spark is a distributed, in-memory, and disk-based optimized, open-source framework that does real-time analytics using [Resilient Distributed Data (RDD)](https://www.nitendratech.com/spark/spark-rdd/) sets. It includes a streaming library, and a rich set of programming interfaces to make data processing and transformation easier. It is not a database like an RDBMS (Relational Database Management Systems) or NoSQL (Non-Relational) database, but a data processing engine. Apache Spark is 100% open-source software as part of **Apache** Software Foundation, which is a vendor-independent platform. That’s why it is free to use for personal or commercial purposes.

The Spark engine runs in a variety of environments, from cloud services to [Hadoop](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) as a standalone instance or Mesos clusters. It is used to perform ETL (Extract, Transform, and Load), interactive queries (SQL), advanced analytics (e.g. machine learning), and streaming over large datasets in a wide range of data stores like [HDFS (Hadoop Distributed File System)](https://www.nitendratech.com/hadoop/hadoop-hdfs/), Cassandra, HBase,  and Amazon S3. It supports a variety of popular development languages including Java, Python, Scala, and R.

It was originally developed in the MPLab at the University of California, Berkeley. This project was donated to Apache Software Foundation later which maintains this project today.

## What are the real-world companies where Spark is used?

Apache Spark is one of the most popular in-memory data processing engines worldwide. Some of the important customers of Apache Spark are listed below.

- Social Media (Facebook/LinkedIn/Instagram/Snapchat/TikTok)
- Auto Insurance (Geico/Liberty mutual)
- Media( HBO/Comcast/Disney/Hulu)
- Banks and Financial Institutions (Wells Fargo/Bank of America/Citi/ Fidelity Investment)
- Telecomunication ( At&T, Verizon/ T-Mobile)
- Product (Apple/Samsung/LG/Toyota)
- Software (Uber/Lyft)

## What are the different use cases of Apache Spark?

The following are some of the common use cases of Apache Spark.

- Batch Data Analytics
- Streaming Analytics
- Machine Learning-based Analysis
- Interactive Analysis

## What are the key features of Apache Spark?

Spark allows Integration with Hadoop and files included in HDFS.

- It has an independent language (Scala) interpreter and hence comes with an interactive language shell.
- Spark consists of RDDs (Resilient Distributed Datasets), which can be cached across computing nodes in a cluster.
- It supports multiple analytic tools that are used for interactive query analysis, real-time analysis, and graph processing.
- Allows integration with Hadoop and files included in [HDFS](https://www.nitendratech.com/hadoop/hadoop-hdfs/).
- It provides lightning-fast processing speed for certain Use cases

When it comes to Big Data processing, speed always matters, and Spark runs Hadoop clusters way faster than others. Spark makes this possible by reducing the number of reading/writing operations on the disc. It stores this intermediate processing data in memory.

- **Support for real-time querying**

In addition to simple “map” and “reduce” operations, Spark supports SQL queries, streaming data, and complex analytics such as machine learning and graph algorithms. This allows users to combine all these capabilities in a single workflow. Spark supports multiple analytic tools that are used for interactive query analysis, real-time analysis, and graph processing.

- **Real-time stream processing**

Spark can handle real-time streaming data. [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) primarily handles and processes previously stored data even though there are other frameworks to obtain real-time streaming. Spark does this in the best way possible.

## Explain how Apache Spark runs its job.

The Apache Spark application has an object called Spark Session on the driver program. This object coordinates with Apache spark Dameon to make the application run as an independent process. The driver program coordinates with the resource manager or cluster manager to get the required resources to run the application. If a spark application is data-intensive, it asks for more memory from the resource manager.

The job of the resource manager is to allocate the required resources and assign tasks to the worker nodes. Worked nodes get one task per partition from the cluster manager. A task in Spark is a unit of work that is done to the dataset per partition. Once a task is finished, it generates a new partitioned dataset as output. This output dataset is stored on the disk or sent back to the driver application.

Apache Spark provides an API for caching the data for any iterative applications like machine learning applications where we need to perform the same operations iteratively. This caching of data can be either in the memory or in the disk as defined by the persistence storage level provided by a spark.

## What are the main Libraries of Apache Spark?

The following are the main libraries of Apache Spark.

- **Spark SQL**: It is used for processing SQL queries on the Spark platform.
- **Structured Streaming:**This library is used for processing stream data in Apache Spark. It is built on top of the Apache Spark SQL engine is fault-tolerant and processes streams.
- **MLib:**This is a Machine Learning library that has various ML algorithms and features like pipelining. It is mainly used to create ML-based applications in the model data platform.
- **GraphX**: It is a library in Apache Spark that is used for the computation of Graphs. it helps to create an abstraction of data based on graph operators like Subgraph, Join Vertices, and Etch
- **SparkR:**This is R language-based package in Spark that uses data frames, dplyr library based on R. This package is used TO Write R language-based applications while using Spark cluster computing.

## What is SparkCore?

SparkCore is the main component in Spark that is used for large-scale, distributed, and parallel data processing. Various libraries in Spark are written on top of Spark core like Spark SQL, Spark Streaming, and Spark ML. These various libraries are used for processing diverse workloads. Spark core provides various APIs in different programming languages like Scala, Java, Python, and R that can be used for creating ETL or ELT-based applications.

## What are the main functions of the Spark Core Component?

Spark core is the central piece of the Apache Spark framework.

The following are its main functions.

- Scheduling/Monitoring/Distributing various Jobs
- Input/Output based functions
- Dispatching of Tasks in a Distributed Way.
- Fault Recovery
- Storage and Memory Management

## Why do we need Spark SQL?

Spark SQL is used for interacting with Dataset API using SQL language. Spark SQL can be used to read structured data using JDBC/ODBC/Command line as well as Apache Hive. It provides integration between the SQL and the Python/Java/Scala code. It also provides the ability to join RDDs and SQL-based tables that can be manipulated using custom functions in SQL.

## What are the different Libraries of Spark SQL?

The following are the four libraries of Spark SQL.

- Data Source API
- DataFrame API
- Interpreter & Optimizer
- SQL Service

## Which are some of the Internal daemons used in Apache Spark?

The following are some of the internal daemons used in Apache Spark.

- Block manager
- Memestore
- DAG scheduler
- Driver
- Worker
- Executor
- Tasks

## What are the Languages Supported by Apache Spark?

Apache Spark supports multiple languages given below.

- Java
- Scala
- Python
- R Langauge
- SQL

## What are the different Cluster Manager Spark Provides?

Apache Spark currently supports the below cluster manager

- Local
- Standalone mode
- Apache Mesos
- Hadoop YARN
- Kubernetes

## What is Local Cluster Manager in Apache Spark?

It’s the local mode that is used for testing and development. We can use this mode from IDE(Integrated Development Environment) itself.

## What is Standalone Cluster Manager in Apache Spark?

It is a simple cluster manager included with Spark that makes it easy to set up a cluster. This mode can be started manually when needed.

## What is Apache Mesos Cluster Manager in Apache Spark?

Apache Mesos is a general cluster manager that can run Hadoop MapReduce and service applications. In this mode, Mesos replaces the spark master as the cluster manager. When a Job is created, Apache Mesos will determine the machine that will handle the submitted job.

## What is Hadoop YARN(Yet Another Resource Negotiator) cluster Manager in Apache Spark?

In this setup, Hadoop YARN is used to manage the spark cluster. We mainly have two modes client and cluster modes when YARN is used.

In client-based YARN mode, the Spark driver runs from the same edge node where the job was submitted. It means the Spark driver runs in the client process and the application master is used when needed to request resources from YARN.

In cluster-based YARN mode, the Spark driver runs from the data node separate from the edge node where the job was submitted. It means the Spark driver runs inside the master process that is managed by YARN.

## What is  Kubernetes Cluster Manager in Apache Spark?

In this mode, Kubernetes is used to use for automating the deployment, scaling, and management of containerized applications.

## Can we run Apache Spark using Apache Mesos?

Yes, Apache Mesos is one of the ways through which we can submit the Spark Jobs.

## What are Apache Spark Persistence Storage Levels?

In the Spark job, we use the storage level to maintain the right combination of CPU and memory usage. If our data from the RDD object fits in memory, we can fit these objects in memory to increase job performance. If the objects cannot fit in memory, we can store the objects in memory as well as on disk.  There are mainly five combinations of the persistence storage levels of RDD provided by a spark. They are given below.

- **MEMORY_ONLY**

In this persistence level, the RDD object is stored as a de-serialized Java object in JVM(Java Virtual Machine). If this object doesn’t fit in the memory, it will be recomputed.

- **MEMORY_AND_DISK**

At this level, the RDD object is stored as a de-serialized Java object in JVM. If this object doesn’t fit in the memory, it will be stored on the Disk.

- **MEMORY_ONLY_SER**

In this persistence level, the RDD object is stored as a serialized Java object in JVM. It is more efficient than a de-serialized object.

- **MEMORY_AND_DISK_SER**

In this persistence level, the RDD object is stored as a serialized Java object in JVM. If an RDD doesn’t fit in the memory, it will be stored on the Disk.

- **DISK_ONLY**

In this persistence level, the RDD object is stored only on Disk.

## What are the File systems and Data sources supported by Apache Spark?

Apache Spark supports several file systems and data sources. It can be used to process data that is stored in a file or data from SQL OR NoSQL data store.

Below are the popular file systems and Data Sources.

- Local File System
- Flatfiles like CSV/TSV
- JSON
- Parquet/ORC/Avro
- NoSQL database (Hbase/Cassandra/Druid)
- Hive Tables.
- SQL Database( MySQL/ PostgreSQL/ DB2/ Oracle/ MS SQL Server)
- Any relational database that provides JDBC connectivity
- Hadoop Distributed File System (HDFS)
- Amazon S3
- Microsoft Azure

This list keeps on growing with each version of Apache Spark.

## What is RDD (Resilient Distributed Datasets) in Apache Spark?

Resilient Distributed Dataset (RDD)  is the fault-tolerant primary data structure/abstraction in [Apache Spark](https://www.nitendratech.com/spark/apache-spark/) which is an immutable distributed collection of objects. The term ‘resilient’ in ‘Resilient Distributed Dataset’ refers to the fact that a lost partition can be reconstructed automatically by Spark by recomputing it from the RDDs that it was computed from.

It is a read-only collection of objects that is partitioned across multiple machines in a cluster. Datasets in RDD are divided into logical partitions across the nodes of the cluster that can be operated in parallel with a low-level API that offers transformations and actions. As it is immutable, we cannot change the original RDD, but can only transform the existing RDDs into new ones using different transformations.

## What are the Features of RDDs in Spark?

RDDs have the below features.

**Resilient**

RDD is fault-tolerant with the help of the RDD lineage graph and so able to recompute missing or damaged partitions due to node failures.

**Distributed**

RDDs are distributed with data residing on multiple nodes in a cluster.

**Immutable**

RDDs cannot be changed after they are created. Immutability rules out a significant set of potential problems due to change from multiple threads at once.

## What are the different types of RDD in Spark?

There are primarily two types of RDD – parallelized collection and Hadoop datasets.

- **Parallelized Collections:** The existing RDDs run parallel with one another.
- **Hadoop datasets**: perform a function on each file record in HDFS or another storage system

## What are the methods of creating RDDs in Apache Spark?

There are two methods of creating RDDs in Spark

- By parallelizing a collection in your Driver program.
- By loading an external dataset from external storage like HDFS, HBase, and shared file systems.

## What are the different operations supported by  “RDD” or Resilient Distributed Datasets?

There are two operations supported by RDD.

- Transformations
- Actions

## What is RDD Transformation in Spark?

Transformation is a function in the spark that generates an RDD from preexisting RDDs. It takes existing RDDs as input and produces one or more RDDs as output. Even though transformation is applied to the input datasets, it remains immutable and remains the same. As transformations are lazy operations in spark, it is not executed immediately. When we create a certain data pipeline using certain actions, transformation is executed.

## What are RDD Actions in Spark?

RDD actions are operations that return the raw values by operating on the actual datasets by performing various actions. When an action is triggered, a new RDD is not generated.

## What is a Shuffle operation in Spark?

Shuffle is an operation in Spark that re-distributes the data in multiple partitions. It is considered a costly operation in Spark as data is sent across multiple partitions that use a lot of processing power. If a Spark operation is invoked in Spark, it triggers the shuffle operations. Shuffle operation in Spark leads to data movement across the executors.

Shuffling in Spark has two important compression-related parameters.

- `spark.shuffle.compress`: It checks if the Spark compute engine compresses the shuffle output or not.
- `spark.shuffle.spill.compress`: It decides whether to compress the intermediate shuffle spill files or not

## What are different Spark operations that trigger Shuffle?

The following are some of the different common Spark operations in Spark that trigger Shuffle operations.

- Join
- Cogroup
- ReduceByKey
- GroupByKey
- Coalesce
- Repartition

## What is Lazy Evaluation in Spark?

Lazy evaluation in Spark means that execution will not start until an action is triggered. When we give instructions to Spark, it takes a note and creates DAG (Directed Acrylic Graph) for it without doing anything, unless we ask for the final dataset. A transformation like `map()` on a given operation is not performed immediately as Transformation in Spark is not evaluated till we act. This helps optimize the data flow graph as data is not loaded until necessary. This evaluation of transformation lazily is called lazy evaluation.

## What are the benefits of lazy evaluation in Spark?

The use of Lazy Evaluation has the following benefits.

- Helps to manage the Spark applications easily
- Saves Computation/memory overhead while increasing the speed of the system.
- Reduces the space and time complexity of the applications

## What is SparkContext in Spark?

SparkContext is the main entry point in Spark applications. It is used in the Spark Application to connect to the Spark cluster, create RDDs, record accumulators, and broadcast variables in that cluster.

## What is partition in Apache Spark?

Partitions are smaller and logical divisions of large distributed datasets. In Spark, data is partitioned to derive logical units of data that are processed in a parallel fashion. Spark manages the data using partitions that help to process the data in a distributed manner with less traffic overhead to send data between executors.

## What is the difference between Spark and MapReduce?

Although Spark and MapReduce are used for big data processing, they have a lot of differences.

|  | Apache Spark | MapReduce |
| --- | --- | --- |
| Definition | Unified multi-language engine and framework for processing a large amount of data | Big Data processing algorithm/framework as part of Apache Hadoop |
| Read/Storage Pattern | Stores data in memory as well as disk. It has a faster read. | Stores data in Disk only. It has a slow read |
| Data Processing | Handles data in real-time and in batches | Can handle data in batches only |
| Speed | Runs 100 times faster than Hadoop Mapreduce | Slower when processing huge data |
| Memory usage | Provides Caching and In-memory data usage based on API | Mostly Reads data from disk |

## Why do organizations choose Apache Spark for Graph processing and Machine learning-based applications?

Graph-based algorithms need to traverse through all the nodes and edges to generate a graph. Since Apache Spark can store the data in memory and process the data in parallel, it provides a faster processing speed compared with others. It can generate a graph quickly by traversing through the nodes and edges quickly with low latency.

Machine learning requires multiple iterations of running a model to generate results. In an iterative algorithm, we apply a set of calculations to a given dataset until a defined criterion is met. As Apache Spark can store the input datasets in memory, machine learning-based models can be executed iteratively on top of these datasets in a parallel fashion.

## What is a broadcast variable in Spark?

The broadcast variable in Spark is used to keep read-only data in the cache so that this data does not have to be copied to every node. Spark application driver uses an efficient broadcasting algorithm to distribute this read-only data to each of the worker nodes, thus reducing the networking cost.

We need to use a function called `.broadcast(object)` in the code to broadcast it.

```scala
scala> val brdCstVar = sparkContext.broadcast(Array(6,9,1,9,2))
```

Not we can use the `value`  function to retrieve the value.

```scala
scala>brdCstVar.value
```

## What are Security Options available in Apache Spark?

Apache Spark provides two security options, Encryption, and Authentication.

Encryption: Apache Spark uses HTTPS protocol for secure data transfer. So, Data is transferred by a spark in encrypted mode using SSL. It provides `spark.ssl` parameters to set the SSL configuration.

Authentication: Spark provides `spark.authenticate` to configure authentication. It is done by using a shared secret in Spark.

## How can we monitor Apache Spark?

Apache Spark provides a Web UI at port 4040 that gives various important information such as executors information, scheduler tasks, and spark metrics information. Apache Spark gets and monitors all of this information through Spark Context.

## What is an accumulator in Apache Spark?

Accumulators are various variables that are used for aggregating different information across the executors.

## What is the difference between Spark Session and Spark Context?

SparkContext is an entry point to Spark and is defined in `org.apache.spark` package since 1.x version. It can be used to programmatically create Spark RDD, accumulators, and broadcast variables in the Spark cluster.  It can be programmatically created using the Spark context class and is available as an object sc in spark-shell.  When we write spark applications in Java, Sparkcontexr becomes JavaSparkContext.

Sparksession is an entry point to the Spark application and creating a Sparksession Instance. It was introduced in version 2.0 to programmatically create Spark RDD, DataFrame, and DataSet. It is a combined class for all different contexts that was introduced before Spark 2.0.  Object for SparkSession known as spark is available by default in Sparkshell.

Spark session can be created using SparkSession.builder() patterns that have access to the below contexts.

- Spark context
- SQL context
- Streaming context
- Hive context

## Conclusion

In this blog post, we read the most important Apache Spark questions we might face in an interview. This list of Spark interview questions keeps on expanding in terms of its usage and its complexity. But going through these Spark interview questions will help you in your next data engineering interview focussing on Apache Spark.
---

*Originally published on nitendratech.com on 2022-01-13, updated 2024-02-18.*
