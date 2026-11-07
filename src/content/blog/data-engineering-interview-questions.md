---
title: "Most Important Data Engineering Interview Questions"
description: "A compiled set of frequently asked data engineering interview questions with answers, covering the basics, big data and analytics, databases and SQL, and the key tools and technologies."
pubDate: 2022-10-12
category: "Data Engineering"
subcategory: "Interview Questions"
draft: false
---

In this blog post, we have compiled important data engineering interview questions that are frequently asked in interviews and help them find their dream job. We have divided these questions into several sections.

## Basic Data Engineering Questions

**Question: What is Data engineering?**

**Answer:** Data engineering is a field where [data](https://www.nitendratech.com/datascience/data-explained/) is formatted by designing and building data pipelines and transported to end-users or downstream.

**Question: What is a Data Engineer?**

**Answer:** Data Engineers are the ones who design and build data pipelines to transport data from the source to end-users or downstream. This data pipeline takes data from various sources and collects them into a single repository that is represented as a single source of truth or System of Record(SOR).

**Question: What do you mean by end-user or downstream user in Data Engineering Projects?**

**Answer:** End-user or downstream users in data engineering projects can be any one of the below.

- Application
- Process
- Team of data scientists
- Business Stakeholder

**Question: What are the Roles of a Data Engineer?**

**Answer:** Different organizations have various roles for Data engineers. Following are some generic tasks data engineers do in their day-to-day jobs.

- Building and managing data pipelines to store the data efficiently in a [Data lake](https://www.nitendratech.com/bigdata/learn-datalake/) or similar repository
- Analyzing the data based on organization data governance rules and regulations
- Curating BRD (Business Ready Data) for reporting and analytics needs
- Ingest, Store, Aggregate, and Validate the data
- Perform [Extract, Transform, and Load(ETL)](https://www.nitendratech.com/database/etl-process/) Operations on top of data
- Makes sure the ingested data is compliant in terms of data governance and security policies

**Question: What are different Programming Languages used by Data Engineers?**

**Answer:** Data Engineers use programming languages like Java, Scala, Python, and R to develop data pipelines to handle data.

They also use query language like [SQL (Structured Query Language)](https://www.nitendratech.com/database/learn-sql/) to extract the data from the [RDBMS](https://www.nitendratech.com/database/relational-database/) like Oracle Database, MySQL, MS SQL Server, etc

**Question: What are the different Data storage and formats Data engineers work with?**

**Answer:** The nature of the data engineering projects determines the data storage type and the format to be used. They can store data in different file systems depending on whether our target system is a database or data warehouse or data lake. Data engineers should understand the scenario in which they should store the data in various file formats. Some of these file formats are given below.

- Flat files like CSV or TSV format.
- Parquet
- Avro
- ORC

**Question: What is an ETL Process?**

**Answer:** [ETL](https://www.nitendratech.com/database/etl-process/) stands for Extract, Transform, and Load. It is a process through which data can be moved from one system to another system, like a single repository or a data warehouse. Various transformations are applied to the data during the movement so that data in the target system is standardized.

**Question: What are different ETL tools used by Data Engineers?** 

**Answer: Many ETL tools can** be used to perform this task. Some of these tools are given below.

- Talend
- Abi Initio
- Teradata
- Snowflake
- Apache spark when used with HDFS and S3
- AWS Glue
- Google Data Flow
- Vertica
- Informatica Power Center
- Pentaho Data Integration
- Oracle Data Integrator

**Question: What do you understand by Data modeling?**

**Answer:**  Data modeling is the process of creating a visual representation of different data points and structure connections to illustrate the relationship between the data types, the way the data is grouped and organized, and to know about the types of data being used. It helps the business and technologist to understand the data being used and its importance from a business point of view. It allows the modeling of the data according to the needs and business requirements provided by the stakeholders.

**Question: What are the different types of Data Modelling Techniques?**

**Answer:** There are mainly three types of Data Modelling Techniques.

- Conceptual Data Modelling
- Logical Data Modelling
- Physical Data Modelling

**Question: What are various design schemas available in Data Modelling?**

**Answer:** There are two design schemas available in the data modeling process.

- Snowflake schema
- Star Schema

**Question: What are the different cloud platforms Data Engineers need to be familiar with?**

**Answer:** Data engineers need to know about various cloud platforms, their services, and the differences between them.

Some popular cloud platforms are given below.

- Amazon Web Services(AWS)
- Google Cloud
- Microsoft Azure
- IBM Cloud
- Oracle Cloud
- Alibaba Cloud

**Question: Explain the Data Pipeline.**

**Answer:** A data pipeline is a process for transporting data from one location (source) to another (the destination). In this process, data is processed and optimized along the way so that businesses can evaluate the data and produce some business insights from it. Data pipeline helps automate many manual tasks such as aggregating, organizing, and transporting data.

**Question: What is Data Pipeline Orchestration?**

**Answer:** Orchestration is a process of automating the data pipeline and data flows so that it can maintain consistent data quality, process, speed, and data governance across the organization.

**Question: What is the importance of a Data Pipeline?**

**Answer:** Data Pipeline brings the below values to the companies.

- Regulation Complaint
- Data Governance
- Easily Scalable Pipelines
- Faster Time to market

**Question: What are different data validation techniques used in Data engineering?**

**Answer:** Data validation is the process of confirming the accuracy and quality of the data between the source and target systems. Below are the common types of data validation approaches.

- Uniqueness or Duplicate Check
- Data Type check
- Data Formats Check
- Consistency check

**Question: What are different Data Quality Issues an organization faces?**

**Answer:** Below are some frequent and important issues related to [data quality](https://www.nitendratech.com/database/data-quality/) that the organization faces.

- Duplicate Data
- Incomplete Data
- Inconsistent data
- Incorrect Data
- Poorly Defined Data
- Poorly Organized data
- Poorly Secured data with exposed confidential data

**Question: What is Data Ingestion?**

**Answer:** Data ingestion is a process in which we collect the data from the upstream sources and ingest it into the data platform. Upstream sources can be within an organization or from outside the organization like social media platforms, business applications, log files, Data warehouses, etc.

**Question: What is Data Storage?**

**Answer:** Once the data is collected and ingested in the Data Ingestion Phase, it is stored in the data platform. We can store the data using a distributed storage platform like Hadoop Distributed File System (HDFS).

**Question: What is Data Processing?**

**Answer:** Once the data is ingested and stored, it needs to be processed to do the analysis and perform visualization on top of it. For users to do this, we can use Big data tools like Hadoop MapReduce, Apache Spark, Apache Hive Apache Pig, etc.

## Big Data and Analytics Questions

**Question: What is Big Data?**

**Answer:** “Big data” refers to datasets whose size is beyond the ability of traditional database software tools to capture, store, manage, and analyze. This property and the nature of the data define if it’s big data or not. Here the size of the data is subjective as it increases over time.

**Question: What are the Different Vs of Big Data?**

**Answer:** There are five V’s of Big Data V’s.

- Volume
- Variety
- Velocity
- Veracity
- Value

**Question: What are the Types of Big Data?**

**Answer:** We can broadly categorize big data into three categories

- Structured
- Semi-structured
- Unstructured data.

**Question: What is structured data?**

**Answer:** It has a predefined schema and represents data in row and column file format.

**Question: What is Semi-structured Data?**

**Answer:** It is a type of self-describing structured data that has both the characteristics of structured and unstructured data.

**Question: What is Unstructured data?**

**Answer:** These are data types that do not have a predefined schema or data model.

**Question: What are the components of the Big Data Platform or Big Data Solution?**

**Answer:** A typical Big Data Platform has three components using which we can deploy a big data solution. They are given below.

- Data Ingestion
- Data Storage
- Data Processing

**Question: How is Apache Hadoop related to Big Data?**

**Answer:** Big data are certain data that cannot be analyzed using traditional tools and technologies. Apache Hadoop is one of those tools that can be used for Big data analysis.

Apache Hadoop is an open-source framework for storing, processing, and analyzing complex unstructured data sets to derive insights and intelligence from them.

**Question: Explain the features of Apache Hadoop.**

**Answer:** Apache Hadoop is used to store as well as process big data. There are other features that Hadoop provides. Below are some of the salient features.

- **Open Source:** Apache Hadoop is maintained under Apache Software Foundation licenses through Apache License 2.0. Users can make changes according to their requirements and create pull requests for that feature.
- **Distributed Processing:** Apache Hadoop is used for processing and storing data in a distributed way. Hadoop Distributed File System or HDFS is used to collect and store data in a distributed manner, whereas MapReduce is used for processing the data in a parallel way.
- **Scalability:**  As Apache Hadoop runs on commodity-based hardware, it can be scaled up by adding more hardware.
- **Fault-Tolerant:** Apache Hadoop is Highly fault-tolerant as it keeps 3 copies of data by default at distinct nodes. Data can be retrieved from any of the nodes if any one of them fails. This retrieval of failed nodes and data is done automatically.
- **Reliable:** Data stored in the Hadoop cluster is safe even though the machine in Hadoop breaks to stop working.

**Question: What is Hadoop Distributed File System(HDFS)?**

**Answer:** HDFS or Hadoop Distributed File System is a distributed file system for Apache Hadoop that is designed for storing very large files with streaming/batch data access patterns running on clusters of commodity hardware in a distributed environment.

There are mainly two components in HDFS that are given below

**NameNode:** This is the main or the master node that has all the relevant metadata information for all the data blocks that reside in HDFS.

**DataNode:** These are the nodes that are the secondary or the slave nodes and store all the data within Hadoop.

**Question: What are the Hadoop execution Modes??**

**Answer:** [Apache Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/) can be used in multiple modes to achieve a different set of tasks. There are three modes in which a [Hadoop Mapreduce ](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/)application can be executed.

- Local or Standalone Mode
- Pseudo Distributed Mode
- Fully Distributed Cluster Mode

**Question: What is Local or Standalone Mode in Apache Hadoop?**

**Answer:** In this mode, Hadoop is configured such that it does not run in distributed mode. In this process, Hadoop runs as a single file system and uses a local file system instead of HDFS. This is mainly used for debugging purposes and is generally the quickest mode to set up in Hadoop.

**Question: What is Pseudo Distributed mode in Apache Hadoop?**

**Answer:** In this mode, each Hadoop daemon runs as a separate Java process. This mode of deploying Hadoop is mainly useful for testing and debugging purposes.

**Question: What do you mean by MapReduce in Hadoop?**

**Answer: The** Hadoop MapReduce framework is the parallel programming model for processing an enormous amount of data that splits the input dataset into independent chunks, which are processed by the map tasks in a completely parallel manner. The Hadoop framework sorts the outputs of the maps, which are then inputted into the reduced tasks. Typically, both the input and the output of the job are stored in a file system. The framework takes care of scheduling tasks, monitoring them, and re-executing the failed tasks.

**Question: What is Block in Hadoop?**

**Answer:** Block is defined as the smallest site/location on the hard drive that is available to read and write data. Data in [HDFS(Hadoop Distributed File System](https://www.nitendratech.com/hadoop/introduction-hadoop-hdfs/)) is split into blocks distributed across cluster nodes. The whole file is divided into small blocks and then stored as separate units.

**Question: What is Yet Another Resource Negotiator(YARN)?**

**Answer:** YARN stands for Yet Another Resource Negotiator, which is a Hadoop Cluster resource management and job scheduling component. It was introduced in Hadoop 2 to help [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) and is the next-generation computation and resource management framework. It allows multiple data processing engines such as [SQL (Structured Query Language)](https://www.nitendratech.com/database/learn-sql/), real-time streaming, data science, and batch processing to handle data stored on a single platform. It helps to manage resources and provides an execution environment for all the jobs that get executed in Hadoop.

There are mainly two components in YARN. They are ResourseManager and NodeManager.

**Question: What is a Resource Manager in Apache Hadoop?**

**Answer:** It is mainly responsible for allocating the needed resources to the respective node manager based on the requirement. Some jobs might need a lot of resources, whereas some jobs need fewer resources.

**Question: What is Node Manager in Hadoop?** 

**Answer:** It is mainly responsible for executing the tasks at all the DataNodes.

**Question: What is Heartbeat in the Hadoop Framework?**

**Answer:** In the Hadoop framework `[heartbeat](https://www.nitendratech.com/hadoop/heartbeat-hadoop-hdfs/)` is a signal that is sent by DataNode to NameNode and also by Task Tracker to the Job tracker. DataNode sends the signal to NameNode, periodically, indicating that it is alive. This signal is taken as a sign of vitality by NameNode. If there is no response to the signal, there might be some issue with the DataNode or the Task Tracker.

**Question: What are two messages that NameNode gets from DataNode?**

**Answer:** Below are the two messages that NameNode gets from DataNode.

- Block Report
- Heartbeat

**Question: What do you understand by the term FSCK in Hadoop Ecosystem?**

**Answer**: FSCK stands for File system check. It is a command in Hadoop that checks the state of HDFS and provides a summary report. The purpose of this command is to check for errors, but not correct them. We can run this FSCK command either on the whole system or the subset of the files.

**Question:**  **What is the Replication factor in the Hadoop Distributed File System(HDFS)?**

**Answer:** The replication factor in HDFS is the number of copies of the actual data that exists in the file system. A Hadoop application can give the number of replicas of the input file it wants HDFS to maintain. This specific information is stored in the Namenode.

**Question: What is Input Block in Hadoop?**

**Answer**: Input blocks in Hadoop are chunks of input files that are split into a mapper for further processing. This splitting of the Input files is done by the Hadoop Framework.

**Question: What is Rack in Hadoop?**

**Answer:** A rack is an area where all the data nodes are put together in the data center. These nodes are located physically located in the data center that would be part of the Hadoop cluster. We can have multiple racks in a single physical location.

**Question: What are the main methods of Reducer?**

**Answer:** There are three main methods of Reducer in the Hadoop Framework.

- `setup()` : Configures various parameters such as input data size and distributed cached
- `cleanup()`: Used for cleaning any temporary files
- `reduce()`: Associates reduce tasks to a specific reducer per given key

**Question: What is the full form of COSHH?**

**Answer:** COSHH stands for classification and Optimization based Schedule for Heterogeneous Hadoop Systems.

**Question: What are the commercial vendors that provide the Hadoop platform?**

**Answer:** There are many vendors in the market that provide commercial platforms for Hadoop. Following are some of them which are popular in the market.

- Cloudera/Hortonworks Hadoop Distribution
- AWS Elastic MapReduce(EMR)
- Microsoft Azure HDInsight
- IBM Open Platform
- Pivotal Big Data Suite

**Question: What are the different configuration files available in Hadoop?**

**Answer:** Apache Hadoop has two types of configuration files.

**Read Only Default configuration:** 

- core-default.xml
- hdfs-default.xml
- yarn-default.xml
- Mapred-default.xml.

**Site-Specific Configuration Files:** 

- core-site.xml
- hdfs-site.xml
- yarn-site.xml
- mapred-site.xml.

**Question: What is Apache Spark?**

**Answer:** [Apache Spark](https://www.nitendratech.com/spark/apache-spark/) is a distributed, in-memory, and disk-based optimized, open-source framework that does real-time analytics using [Resilient Distributed Data (RDD)](https://www.nitendratech.com/spark/spark-rdd/) sets. It includes a streaming library, and a rich set of programming interfaces to make data processing and transformation easier.

It is not a database like an [RDBMS (Relational Database Management Systems)](https://www.nitendratech.com/database/relational-database/) or [NoSQL (Non-Relational) ](https://www.nitendratech.com/database/nosql-databases/)database, but a data processing engine. Apache Spark is 100% open-source software as part of **Apache** Software Foundation, which is a vendor-independent platform. That’s why it is free to use for personal or commercial purposes.

**Question: What are the key features of Apache Spark?**

**Answer:** [Apache Spark ](https://www.nitendratech.com/spark/apache-spark/)allows Integration with Hadoop and files included in HDFS.

- It has an independent language (Scala) interpreter and hence comes with an interactive language shell.
- Spark consists of [RDDs (Resilient Distributed Datasets)](https://www.nitendratech.com/spark/spark-rdd/), which can be cached across computing nodes in a cluster.
- It supports multiple analytic tools that are used for interactive query analysis, real-time analysis, and graph processing.
- Allows integration with Hadoop and files included in [HDFS](https://www.nitendratech.com/hadoop/hadoop-hdfs/).
- It provides lightning-fast processing speed for certain Use cases

When it comes to Big Data processing, speed always matters, and Spark runs Hadoop clusters way faster than others. Spark makes this possible by reducing the number of reading/writing operations on the disc. It stores this intermediate processing data in memory.

- **Support for real-time querying**

In addition to simple “map” and “reduce” operations, Spark supports SQL queries, streaming data, and complex analytics such as machine learning and graph algorithms. This allows users to combine all these capabilities in a single workflow. Spark supports multiple analytic tools that are used for interactive query analysis, real-time analysis, and graph processing.

- **Real-time stream processing**

Spark can handle real-time streaming data. [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) primarily handles and processes previously stored data, even though there are other frameworks to obtain real-time streaming. Spark does this in the best way possible.

**Question: What are the different use cases of Apache Spark?**

**Answer:** Following are some of the common use cases of Apache Spark.

- Batch Data Analytics
- Streaming Analytics
- Machine Learning-based Analysis
- Interactive Analysis

**Question: What is Apache Hive?**

**Answer:** Apache Hive is a [Data Warehousing](https://www.nitendratech.com/database/enterprise-data-warehouse/) Infrastructure built on top of Hadoop and provides table abstraction on top of data resident in [HDFS(Hadoop Distributed File System) ](https://www.nitendratech.com/hadoop/hadoop-hdfs/)as explained on their official page. It is used for providing data summarization, query, and analysis for[ Big data](https://www.nitendratech.com/bigdata/big-data/) sets.

You can check this blog post on [Apache Hive ](https://www.nitendratech.com/hive/apache-hive/)for more information.

**Question: Why do we use Hive?**

**Answer:** Hive is used for summarization, ad-hoc analysis and data mining, spam detection, and ad optimization. One of the main advantages of the hive is that it is [SQL](https://www.nitendratech.com/database/learn-sql/) in nature. Hive stores its database metadata in Hive metastore.

It is best used for batch jobs over large sets of immutable data (like [server logs ](https://www.nitendratech.com/technology/log-file/)or [Access Logs](https://www.nitendratech.com/technology/access-logs/)). Hive is schema on reading rather than schema on writing. It means that it doesn’t check data during loading, but does check when a query is issued.

**Question: What is the benefit when a Distributed Cache is used?**

**Answer:** We get the following benefits when the distributed cache is used.

- Helps to distribute simple read-only text/data files as well as complex data types like jars and archives.
- Helps to provide small reference files in memory so that the job does not have to read them from the disk every time it is needed.

**Question: What is Hadoop Streaming?**

**Answer:** Hadoop Streaming is a utility provided by Hadoop Distribution that allows developers and engineers to create and run Map/Reduce jobs alongside any executable scrips as mapper and reducer. Example: We want to process the data coming from Apache Hive using Python or shell script. We can use Hadoop Streaming to read the data coming from Apache Hive line by line and process it.

## Database and SQL

**Question: What is a Database?**

**Answer:**  A [Database](https://www.nitendratech.com/database/learn-database/) is a collection of instruction information or data that are organized and stored in a computer-based system. The main purpose of the database is to store, collect, and retrieve information to be used by database-related applications. As data in the database is stored in a specific format, different client software can access the data at the same time.

**Question: What do you understand by Relational Data Management System(RDBMS)?**

**Answer:** RDBMS stands for Relational Data Management System. A [database](https://www.nitendratech.com/database/learn-database/) is called a relational data model, as it represents the relationship between one or more databases. The relationship is known as the relational database model. It provides flexibility and allows one database to be about another database. This database uses a particular structure such as rows and columns to store, identify, access data, and relate to other data. We can use [Structured Query Language or SQL](https://www.nitendratech.com/database/learn-sql/) to access the data from Relational Databases easily.

**Question: What is SQL?**

**Answer:** SQL stands for Structured Query Language. [SQL](https://www.nitendratech.com/database/learn-sql/) is a programming language used to retrieve, manipulate, and store data from[ relational database management systems (RDBMS)](https://www.nitendratech.com/database/relational-database/).

SQL is ANSI (American National Standards Institute) and International Organization for Standardization (ISO) standard-certified language that can be used for interacting with a variety of databases. It is a declarative language where we give certain instructions or operations without giving specific details about how to complete that task.

**Question: What are the Types of Language in SQL?**

**Answer:** SQL consists of various types of Language. They are given below.

- DDL (Data Definition Language)
- DML (Data Manipulation Language)
- DCL (Data Control Language)
- DQL (Data Query Language)
- TCL (Transaction Control Language)

**Question: How can we handle duplicate data in SQL queries?**

**Answer:** In SQL, there are different ways to handle duplicate records depending upon which platform one uses. Some of them are listed below.

- Using DISTINCT keyword
- Using Unique Keyword
- Using GROUP BY, COUNT(*) and HAVING keyword

**Question: What is the difference between `DELETE` and `TRUNCATE` statements in SQL?**

**Answer:** In SQL, `DELETE` is a Data Manipulation Language (DML) statement, whereas `TRUNCATE` is a Data Definition Language (DDL) statement.

`DELETE` statement is used to delete a few rows or all the table records, whereas `TRUNCATE` statement deletes all the table rows.

`DELETE` command provides support for `WHERE `clause that can be used to filter the data that we want to delete. But `TRUNCATE` statement does not provide support for `WHERE` clause.

**Question: What does the Aggregate function do in SQL?**

**Answer:** Aggregate function in SQL is used to calculate values from multiple columns and return a single value in a given table.

**Question: What is the difference between WHERE and HAVING clause?**

**Answer:** We use `WHERE` clause to filter data based on individual records of a table.

Example: We select the students with the first name “Harry” from the student table.

```sql
SELECT Id, name from student where firstName ="Harry";
```

We use `HAVING` clause to filter the groups based on the value of aggregate functions.

Example: We select those students whose department ID Count is greater than 10.

```sql
SELECT deptId, count(*) from student GROUP BY deptId HAVING COUNT (*)> 10.
```

**Question: What is an index in a Database?**

**Answer:** An index is a structure in a database that is used to speed up the performance of queries and is used for faster retrieval of data from the table. It is created from a column or group of columns.

**Question: What do you understand by Schema Evolution?**

**Answer:** Schema evolution is the process of managing changes in the schemas of the data as it changes over time. This change can happen because of a change in business requirements or the software surrounding the data.

## Technologies

**Question: What is DevOps?**

**Answer:** DevOps is a new practice in the IT (Information Technology) field that involves the collaboration and communication of software developers and operations. Its main objective is to deliver software products faster while lowering the failure rates of releases at the same time.

**Question: What are DevOps Principles?**

**Answers:** Below are the principles on which DevOps is based.

- Continuous Integration(CI)
- Continuous Deployment (CD)
- Infrastructure as a Code (IaaC)
- Automation
- Monitoring Security

**Question: What is Git?**

**Answer**: Git is an open-source distributed version control system that is designed to handle small and larger projects with great efficiency. It is mainly used for managing the source code of various projects.

**Question: What is Kubernetes?**

**Answer**: Kubernetes is an open-source container orchestration platform that was developed by Google. Google donated the Kubernetes project to the Cloud Native Computing Foundation(CNCF)in 2015. It is used to automate the management monitoring, scaling, and deployment of containerized applications. It helps to manage those containers as individual units. Furthermore, it helps the DevOps and developers team to manage those containers easily.

**Question: What is a container in terms of Software?**

**Answer:** Containers are executable logical components that are standardized so that application code can run in any environment. It contains the application source code along with operating system libraries and any dependency that is needed to run that application.

**Question: What is Docker?**

**Answer:** Docker is an open-source containerization platform that provides services to facilitate the deployment of applications/software in a container. It allows developers to package/manage their applications through the use of containers. Once the applications are packaged in a container, docker can be used to deploy these containers as one block. These containerized applications can work seamlessly in any environment, be it development, testing, or production. This concept of managing dependency by the developer has helped to reduce errors in the deployment and execution process.

**Question: What is the advantage of using Docker?**

**Answer:** There are many advantages that docker provides. Below are the important ones.

- Development, Deployment, and Execution of applications are quick
- Deployment of Docker containers can be done on any physical machine, virtual machine, or on the cloud as a hybrid architecture.
- A common operating system kernel can be used for all containers.
- A Docker container is light-weight in terms of resources and space compared to the virtual machine

**Question: What do you understand by Backfilling?**

**Answer:** Backfilling is a process that involves modifying existing data or adding new data to existing records in a dataset or a table. This is one of the common use cases in data engineering. Below are some of the scenarios where backfilling is needed.

- Rerun the data pipeline or SQL query after finding an issue with the current codebase
- Management or Business asks to change existing logic and rerun the data pipeline
- Add column to an existing dataset and repopulate the data

**Question: What is Google Cloud Dataflow?**

**Answer:** It is a fully managed service provided by Google for developing and executing data processing pipelines. It provides a unified programming model that can support batch and stream processing.

**Question: Are you aware of a tool called Talend?**

**Answer:**  It is an open-source data integration platform that is used for [ETL](https://www.nitendratech.com/database/etl-process/), checking the quality of the data and managing the data. It provides a wide range of connectors that can connect various data sources and destinations such as databases, and S3 through the JDBC data connector.

**Question: What do you understand by Informatica PowerCenter?**

**Answer:** It is a data platform that can perform ETL tasks, check data quality, and manage the data. It also provides various connectors that can connect to multiple data sources and destinations.

---

*Originally published on nitendratech.com on 2022-10-12, updated 2024-04-07.*
