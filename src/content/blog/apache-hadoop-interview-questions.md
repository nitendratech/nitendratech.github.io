---
title: "Important Apache Hadoop Interview Questions"
description: "Important Apache Hadoop interview questions and answers covering HDFS, MapReduce, YARN, execution modes, the distributed cache, rack awareness, and Hadoop ecosystem tools."
pubDate: 2021-12-27
category: "Data Engineering"
subcategory: "Interview Questions"
draft: false
---

There has been a massive growth of data since the birth of the internet. With massive data or big data, there comes the challenge of processing it. Apache Hadoop is one of the popular tools out there that can tackle this massive data in a distributed fashion. We are also seeing a lot of job openings that have Big data and Hadoop as needed skills.

As skills related to Apache Hadoop and big data are in demand right now, let's look at some of the important and popular Apache Hadoop interview questions and answers.

**Question: What exactly is Apache Hadoop?**

**Answer:** [Apache Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/) is an open-source distributed processing framework that is used to store and process large datasets whose size ranges from gigabytes to petabytes of data. This framework uses multiple commodity hardware to process a large amount of data quickly in comparison to traditional software. It is a build-up to scale up from one server to multiple servers, each of them offering computation and storage at the local level. It provides high availability and fault tolerance regardless of the fact whether the hardware used is low-end or high-end. This framework is written in Java and consists of features such as Distributed File System and MapReduce Processing.

**Question: Who created Apache Hadoop?**

**Answer:** Google released two academic papers in 2003 and 2004 AD while trying to solve the problem of indexing internet-based search results while supporting their search queries. When you talk about indexing internet-based search results, you are talking about massive data. Doug Cutting and his team implemented the Google MapReduce model at Yahoo based on the paper that was published by Google. This Hadoop project developed at Yahoo was later donated to the Apache Foundation.

Apache Hadoop is distributed based on the license provided by the Apache Foundation, which provides a free license. [This](https://github.com/apache/hadoop) is the link to the Apache Hadoop GitHub project that is being maintained by the Apache Foundation.

**Question: What are the main components of Apache Hadoop?**

**Answer:** There are four main components of Apache Hadoop.

- [Hadoop Distributed File System(HDFS)](https://www.nitendratech.com/hadoop/hadoop-hdfs/)
- [MapReduce Framework](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/)
- Hadoop Common Library
- [Yet Another Resource Negotiator(YARN)](https://www.nitendratech.com/hadoop/hadoop-yarn/)
- Resource Manager
- Node Manager

**Question: What is Hadoop Distributed File System(HDFS)?**

**Answer:** HDFS or Hadoop Distributed File System is a distributed file system for Apache Hadoop. It is designed for storing very large files with streaming/batch data access patterns running on clusters of commodity hardware in a distributed environment.

**Question: What are the main components of HDFS?**

**Answer:** There are mainly two components in HDFS that are given below.

**NameNode:** This is the main node that has all the relevant metadata information for all the data blocks that reside in HDFS.

**DataNode:** These are the nodes that are the secondary nodes and store all the data within Hadoop.

**Question: What is MapReduce Framework?**

**Answer:** Hadoop MapReduce is a Big data processing/programming framework that consists of the MapReduce programming model and [Hadoop Distributed File System(HDFS)](https://www.nitendratech.com/hadoop/hadoop-hdfs/). It is the parallel programming model for processing an enormous amount of data that splits the input dataset into independent chunks, which are processed by the map tasks in a completely parallel manner. The Hadoop framework sorts the outputs of the maps, which are then input to the reduced tasks. Typically, both the input and the output of the job are stored in a file system. The framework takes care of scheduling tasks, monitoring them, and re-executing the failed tasks.

**Question: What are the features of the Hadoop Framework?**

**Answer:** Apache Hadoop is used to store as well as process big data. There are other features that Hadoop provides. Below are some of the salient features.

- **Open Source:** Apache Hadoop is maintained under Apache Sofware Foundation licenses through Apache License 2.0. Users can make changes according to their requirements and create pull requests for that feature.
- **Distributed Processing:** Apache Hadoop is used for processing and storing data in a distributed way. Hadoop HDFS is used to collect and store data in a distributed manner whereas MapReduce is used for processing the data in a parallel way.
- **Scalability:** As Apache Hadoop runs on commodity-based hardware, it can be scaled up by adding more hardware.
- **Fault-Tolerant:** Apache Hadoop is Highly fault-tolerant as it keeps 3 copies of data by default at distinct nodes. Data can be retrieved from any of the nodes if any one of them fails. This retrieval of failed nodes and data is done automatically.
- **Reliable:** Data stored in the Hadoop cluster is safe even though the machine in Hadoop breaks to stop working.

**Question: What is Hadoop Common Library?**

**Answer:** These are the shared Java-based libraries that can be used across all of the Hadoop-based modules.

**Question: What is Yet Another Resource Negotiator (YARN)**?

**Answer**: YARN stands for Yet Another Resource Negotiator, which is a Hadoop Cluster resource management and job scheduling component. It was introduced in Hadoop 2 to help [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) and is the next-generation computation and resource management framework. It allows multiple data processing engines such as [SQL (Structured Query Language)](https://www.nitendratech.com/database/learn-sql/), real-time streaming, data science, and batch processing to handle data stored on a single platform. It helps to manage resources and provides an execution environment for all the jobs that get executed in Hadoop.

There are mainly two components in YARN. They are ResourseManager and NodeManager.

**Question: What are the different schedulers available in YARN?**

**Answer:** The different schedulers available in YARN are:

- First In First Out (FIFO) Scheduler
- Capacity Scheduler
- Fair Scheduler

**Question: What is a Resource Manager in Apache Hadoop?**

**Answer**: It is mainly responsible for allocating the needed resources to the respective node manager based on the requirement. Some jobs might need a lot of resources, whereas some jobs need fewer resources.

**Question: What is Node Manager in Hadoop?**

**Answer:** It is mainly responsible for executing the tasks at all the DataNodes.

**Question: What are different Hadoop Execution Modes?**

**Answer:** [Apache Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/) can be used in multiple modes to achieve a different set of tasks. There are three modes in which a [Hadoop MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) application can be executed.

- Local or Standalone Mode
- Pseudo Distributed Mode
- Fully Distributed Cluster Mode

**Question: What is Local or Standalone Mode in Apache Hadoop?**

**Answer:** In this mode, Hadoop is configured such that it does not run in distributed mode. In this process, Hadoop runs as a single file system and uses a local file system instead of HDFS. This is mainly used for debugging purposes and is generally the quickest mode to set up in Hadoop.

**Question: What is Pseudo Distributed mode in Apache Hadoop?**

**Answer:** In this mode, each Hadoop daemon runs as a separate Java process. This mode of deploying Hadoop is mainly useful for testing and debugging purposes.

**Question: What is Fully Distributed Cluster Mode in Apache Hadoop?**

**Answer**: It is the production mode, of Apache Hadoop, in which NameNode and Resource Manager are assigned to unique machines. DataNode and Node Manager are assigned to a different machine in a cluster. This mode is used for running production application that gives fully distributed computing capacity, security, scalability, and fault tolerance.

**Question: What do you understand by speculative execution in Hadoop?**

**Answer:** In the Hadoop framework, when a data node is executing any task slowly, the primary node can execute another instance of the same task redundantly on another node. During this process, the result of the task that finishes first will be considered, and another task will be killed. This behavior is known as speculative execution in Hadoop.

**Question: What are Apache Hadoop Ecosystem applications?**

**Answer**: Apache Hadoop Ecosystem has many tools that help to ingest, process, extract, store, and analyze massive data. Below are some popular applications. Following are the common and popular applications that are also part of the Apache Software Foundation.

- Apache HBase
- Apache Hive
- Apache Pig
- Apache Sqoop
- Apache Oozie
- Apache Zookeeper
- Apache Spark
- Apache Ignite
- Apache Beam
- Apache Spark

**Question: What are Programming Languages Supported by Hadoop?**

**Answer**: Even though the Apache Hadoop framework is written in Java, it supports multiple languages in which one can write MapReduce code. They are listed below.

- Java
- Python
- C++
- Ruby

**Question: What is the Replication factor in the Hadoop Distributed File System(HDFS)?**

**Answer:** The replication factor in HDFS is the number of copies of the actual data that exists in the file system. A Hadoop application can give the number of replicas of the input file it wants HDFS to maintain. This specific information is stored in the Namenode.

### Question: What is the difference between Hadoop HDFS `-put`, `-copyToLocal`, and –`copyFromLocal` commands?

**Answer**: The following is the difference between these commands.

`-put`: It is used for copying the file from a source to the destination

-copyToLocal: It is used to copy the file from HDFS to the local file system.

`-copyFromLocal`: It is used for copying the file from the local file system to the Hadoop HDFS.

**Question: What is an Input Block in Hadoop?**

**Answer**: Input blocks in Hadoop are chunks of input files that are split into a mapper for further processing. This splitting of the Input files is done by the Hadoop Framework.

**Question: What are the different input formats ingested and processed in the Hadoop framework?**

**Answer:** The following are the different input formats ingested and processed in the Hadoop framework.

- TextInputFormat
- KeyValueInputFormat
- SequenceFileInputFormat

If we don't define any input formats when using Hadoop, the TextInput format is used by default.

**Question: How can we copy files from the local file system to HDFS?**

**Answer**: We can use the `hdfs dfs -copyFromLocal` command to copy the files from the local Linux-based file system to HDFS. Following is the syntax for that.

```bash
hadoop fs -copyFromLocal localfilepath hdfsfilepath
```

**Question: What do you understand by the term FSCK in Hadoop Ecosystem?**

**Answer**: FSCK stands for File system check. It is a command in Hadoop that checks the state of HDFS and provides a summary report. The purpose of this command is to check for errors, but not correct them. We can run this FSCK command either on the whole system or the subset of the files.

**Question: What is a Distributed Cache in the Hadoop Ecosystem?**

**Answer:** A distributed cache in the Hadoop ecosystem is a service or utility used for caching the files used by applications. This caching is done to improve the performance of the jobs, as jobs don't have to seek the file from HDFS when it's needed.

A Hadoop application can specify the files that need to be cached by using the `JobConf` configuration. Once a file is cached for a specific job, the Hadoop framework makes sure those files are available on the individual Data Nodes, both in memory and on the system where the MapReduce jobs are executing. This copying of the file is done before the execution task starts. We can use this utility to cache read-only files like text files, jars, zips, etc. This allows you to quickly access and read cached files to populate any collection (like arrays, hashmaps, etc.) in a code.

**Question: What is the benefit of a Distributed Cache?**

**Answer:** We get the following benefits when the distributed cache is used.

- Helps to distribute simple read-only text/data files and complex data types like jars and archives.
- It helps to provide small reference files in memory so that the job does not have to read them from the disk every time it is needed.

**Question: How can we provide files or archives to the MapReduce job in a distributed cache mechanism?**

**Answer:** When we want to cache certain files for distributed cache, we can specify this as a list of comma-separated URIs as an argument to the `--files` option in the Hadoop job command. Files can be on HDFS as archived files (tar files, zip files) that are copied to each node by the distributed cache by the usage of `archives` the option.

**Question: Can we change the file cached by Distributed Cache in Hadoop during Job execution?**

**Answer**: We cannot change the files that are cached by the distributed cache mechanism in Hadoop because this process tracks the timestamp of the file and caches it accordingly. If the file's timestamp is changed during job execution, this mechanism will not work.

**Question: How do you perform debugging in Apache Hadoop?**

**Answer**: We can use mainly two methods for debugging in Hadoop.

- Hadoop Web User Interface (Resource Manager, History URL)
- Use of Counters
- Going through the logs by using Yarn commands

**Question: Can we rename the output file in MapReduce Framework?**

**Answer**: Yes, We can rename the output file generated by the MapReduce framework.

**Question: What is the MapReduce framework?**

**Answer**: MapReduce is a framework for processing large data in parallel using a large number of commodity hardware. It helps to process data in the map and reduce phase. It is integrated with HDFS to process the data which is distributed across the various data nodes in the cluster. This framework is scalable across thousands of servers.

**Question: What are the primary phases of Reducer in Apache Hadoop?**

**Answer:** There are three primary phases of Reducer in the Hadoop framework.

**Sort:** In this phase, the Hadoop framework uses the merge sort algorithm to sort the input data based on the same key.

**Shuffle:** In this phase, Reducer copies the sorted output from each mapper.

**Reduce**: In this phase, output values associated with a key are reduced to the resulting output. Since the data is already sorted in the Shuffle and Sort phase, it is not sorted in the reducer.

**Question: What is Rack in Hadoop?**

**Answer**: A rack is an area where all the data nodes are put together in the data center. These nodes are physically located in the data center that would be part of the Hadoop cluster. We can have multiple racks in a single physical location.

**Question: How does rack awareness work in HDFS?**

**Answer**: Rack awareness in HDFS means that the Hadoop framework has knowledge of different data nodes and how it's distributed in the Hadoop cluster.

**Question: Is it Optimal to store many small files in a cluster on HDFS?**

**Answer:** Too many small files in HDFS generate a lot of metadata files. It would be a challenge for the name node to store all of this information related to file, block, and directory in memory, resulting in a name node crash in the long run.

**Question: Why is HDFS considered Fault Tolerant?**

**Answer**: HDFS is considered fault-tolerant, as it copies data to different data nodes by default. As data blocks are stored in different data nodes by default, any crash on the node will not cause loss of data as it can be retrieved from different data nodes.

**Question: What is the relation between job and task in the Apache Hadoop framework?**

**Answer:** In the Hadoop framework, a Job is divided into multiple tasks. So, a task in Hadoop is multiple small parts of a job.

**Question: Can we have multiple inputs to Apache Hadoop?**

**Answer:** We can have multiple inputs provided to Apache Hadoop for the same job. This is possible in the Hadoop job, as the input format class in Hadoop provides methods for inserting multiple directories as input.

**Question What are the default input and output formats in MapReduce jobs?**

**Answer**: Text files are the default file formats in Mapreduce jobs if it is not set.

**Question: What happens if the number of reducers is Zero in Mapreduce Job?**

**Answer:** If a MapReduce job has zero in its reduce, the job will be finished in the mapper phase itself without any reducer.

**Question: Why do we use Hadoop for big data analytics?**

**Answer**: Apache Hadoop is one of the popular tools for analyzing data sets. Hadoop provides various services for exploring, analyzing, and storing structured, unstructured, and semi-structured datasets.

**Question: What are the main methods of Reducer?**

**Answer:** There are three main methods of Reducer in the Hadoop Framework.

- `setup()` : Configures various parameters such as input data size and distributed cache
- `cleanup()`: Used for cleaning any temporary files
- `reduced()`: Associates reduce tasks to a specific reducer per given key

**Question: What is the full form of COSHH?**

**Answer:** COSHH stands for Classification and Optimization-based Schedule for Heterogeneous Hadoop Systems.

**Question: What are the commercial vendors that provide the Hadoop platform?**

**Answer:** There are many vendors in the market that provide commercial platforms for Hadoop. Following are some of the popular ones in the market.

- Cloudera/Hortonworks Hadoop Distribution
- AWS Elastic MapReduce(EMR)
- Microsoft Azure HDInsight
- IBM Open Platform
- Pivotal Big Data Suite

**Question: What are the different configuration files available in Hadoop?**

**Answer:** Apache Hadoop has two types of configuration files.

- Read Only Default Configuration
- Site-Specific Configuration files

These files are core-default.xml, hdfs-default.xml, yarn-default.xml and mapred-default.xml.

**Question: What is Hadoop Streaming?**

**Answer**: Hadoop Streaming is a utility provided by Hadoop Distribution that allows one to create and run Map/Reduce jobs alongside any executable scrips as mapper and reducer. Example: We want to process the data coming from Apache Hive using Python or shell script. We can use Hadoop Streaming to read the data coming from Apache Hive line by line and process it.

**Question: How do we get Incremental updates from the source using Sqoop?**

**Answer**: By using incremental append or incremental last-modified option in Sqoop Import

---

*Originally published on nitendratech.com on 2021-12-27, updated 2024-01-05.*
