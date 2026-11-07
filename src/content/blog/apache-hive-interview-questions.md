---
title: "Top 60 + Apache Hive Interview Questions"
description: "Answers to 60+ Apache Hive interview questions covering the Hive data model, metastore, managed and external tables, partitions and buckets, SerDe, execution engines, JDBC clients, vectorization, and Hive variables."
pubDate: 2022-01-03
category: "Data Engineering"
subcategory: "Interview Questions"
draft: false
---

In this blog post, we will look at some of the most frequent and important Apache Hive interview questions and answers that come up during an interview. If you are looking for interview questions related to Hive query language(HQL), you can check my other [blog post](https://www.nitendratech.com/interview/hql-interview-questions/).

## What is Apache Hive?

Apache Hive is a [Data Warehousing](https://www.nitendratech.com/database/enterprise-data-warehouse/) Infrastructure built on top of Hadoop and provides table abstraction on top of data resident in [HDFS(Hadoop Distributed File System)](https://www.nitendratech.com/hadoop/hadoop-hdfs/)as explained on their official page. It is used for providing data summarization, query, and analysis for[Big data](https://www.nitendratech.com/bigdata/big-data/) sets.

You can check this blog post on [Apache hive](https://www.nitendratech.com/hive/apache-hive/)for more information.

## Why do we use Hive?

Hive is used for summarization, ad-hoc analysis and data mining, spam detection, and ad optimization. One of the main advantages of the hive is that it is [SQL](https://www.nitendratech.com/database/learn-sql/) in nature. Hive stores its database metadata in Hive metastore.

It is best used for batch jobs over large sets of immutable data (like [server logs](https://www.nitendratech.com/technology/log-file/)or [Access Logs](https://www.nitendratech.com/technology/access-logs/)). Hive is schema on read rather than schema on write. It means that it doesn’t check data during loading, but does check data when a query is issued.

## What is the use of Hive in the Apache Hadoop ecosystem?

Apache Hive provides an SQL (Structured Query Language) like interface called Hive Query Language (HQL) to interact with the data that is stored in HDFS. Using this interface, we can organize and query the data in a database-like fashion and write SQL-like queries. We can create tables on top of HDFS and store data in the Hadoop ecosystem. Even though Hive internally covers all the queries to MapReduce jobs, it does a pretty good job of hiding the complexity. An Apache Hive query can also be used to interact with Apache Hbase tables seamlessly.

## What are the main Apache Hive components?

There are six main Hive components.

- Hive Driver
- MetaStore
- Hive Compiler
- Execution Engine
- Hive User Interface(UI)
- Hive Client

## What do you comprehend by Schema on Read in Apache Hive?

`Schema on Read` means that schema with the corresponding data is validated during read operation rather than enforcing it while writing data.

## What are the components of the Hive Data Model?

The Apache Hive Data model has many components.

- Databases
- Tables
- Partitions
- Buckets.

## What is a database in Apache Hive?

They are the namespaces that separate tables and other data units from naming conflicts.

## What is a table in Apache Hive?

Hive tables are homogeneous data units with the same schema. These tables are similar to Relational Databases (RDBMS) that can be joined, unioned, and can be applied to filters. Hive tables also have rows and columns similar to RDBMS tables. Tables in the hive are stored in the Hadoop Distributed File System(HDFS) or on top of a file system like Amazon S3 or Alluxio.

An example of a table could be the views table, where each row could comprise the following columns (schema):

```yaml
{timestamp: INT, userid: BIGINT, page_url: STRINGTYPE, referer_ur: STRINGTYPE, IP address: STRINGTYPE
```

## What is a partition in Apache Hive?

Partitions in the hive are how we can divide the table by certain criteria. We can use a hive table column such as the date and divide the data accordingly.

The below table shows an employee hive table which is partitioned according to the column employee_start_date. As we can see, we can use this column to apply some filters on top of the employee table. In this example, we are selecting all the records from the employee hive table as part of `school_db` database who started working on the job on January 1st, 2023.

```
SELECT * FROM school_db.employee where employee_start_date='20230101';
```

## What is a Bucket in an Apache Hive?

In Hive tables, we can further divide the partition into intervals known as buckets. Each bucket is calculated based on the hash of the column that is being used as a bucket criterion. Hive creates a separate file for each bucket of a partition.

## What is an Apache Hive Driver?

The Hive Driver is responsible for handling sessions and providing commands to execute. These commands are received from the user in the form of queries. It uses an interface like the JDBC/ODBC interface to fetch API.

## What is a Metastore in Hive?

Hive metastore holds all the information about tables, partitions, column names, and column data types. It also keeps track of serializers and deserializers used while reading and writing data to the HDFS files or other file systems.

## What is Hive Compiler?

It is responsible for parsing queries and performing semantic analysis on the queries and expressions. It checks the Hive metastore for the related metadata and generates an execution plan.

## What is a Hive Execution Engine?

This component executes the plan created by the compiler. It also manages the dependencies between the different stages of the execution plan.

## What is a Hive User Interface (UI)?

This is a user interface provided by Hive through which users can submit queries and execute other operations. In addition to the command line interface provided by the hive, it also provides a graphical interface that can be used to submit queries.

## What is a Hive Client?

We can use various programming languages like Java, and Python, C++ to write applications and run them in Hive. For those applications to run in the hive, we need to use clients like JDBC, ODBC, and Thrift drivers. The choice of Hive clients varies by the programming language used.

## What are the different modes in which we can run Hive?

There are three modes in which Hive can run.

**Local Mode**

In this mode, Hive runs locally on the user machine. This is the default mode that Hadoop provides.

**Pseudo Distributed Mode**

In this mode, developers generally test the code before deploying it to production. Here all the Hadoop daemon runs in the same virtual machine. If we want to quickly write a script and test the code on limited datasets, we can use this mode.

**Distributed Mode**

This is the production-grade mode in which Hive runs in a distributed model. All the Hadoop demeans like NameNode, Datanode, Jobtracker, and TaskTracker run on a separate machine.

## What are the different types of Tables available in Hive?

There are mainly two types of tables in Hive. They are as follows.

- Managed Table
- External tables.

## What is an External Table in Hive?

In this table type, data is stored in HDFS whereas schema is only managed by Hive. It means that if we drop the external hive table, we only lose the table, not the data itself. Hive does not create the external directory (or directories for partitioned tables), nor are the directory and data files deleted when an external table is dropped.

## What is a Managed table or internal Table in Hive?

Managed or Internal tables in the hive are tables in which the data, metadata, and schema are managed by the internal Hive process. If we drop the Hive-managed Table, it deletes the table as well as the data in it.

Hive creates the managed table by default. When we drop a managed table or partition, all the metadata and associated data are also deleted. The managed table in the hive is used when users want Hive to manage the table life cycle.

## How can we know if a table is a managed or external table in Hive?

We can below the command. To know whether a table is managed or an external table,

```sql
DESCRIBE FORMATTED <Table_Name>
```

## What do you mean by Metastore in Hive?

Metastore is a storage system in the hive that contains hive table definitions, mappings, and other metadata. It is the central repository for Hive metadata. This store can be in any Relational Database Management System(RDBMS) like MySQL, MS SQL Server, or Oracle supported by JPOX(Java Persistent Object).

## What are the parts of Hive metastore?

Hive Metastore has two parts as given below.

**Metastore service:**It provides an interface through which the processes or the user can interact with the hive.

**Metastore Database**: This database stores the data mappings, table definitions, and other metadata related to the Hive tables. In a production environment, Hive metadata is persisted in external databases like MySQL.

## What are the different types of metastore in Hive?

Following are three different types of metastore in Hive.

- Embedded Metastore
- Local Metastore
- Remote Metastore

## How can we print the column names of a table while executing a Hive Query?

We need to use the below settings before running any hive query. This setting will enable the printing of table columns when we get the results in Standard Out or STDOUT.

```sql
set  hive.cli.print.header=true
```

## What are the Binary Storage formats supported in Hive?

Hive also supports below binary formats.

- Sequence Files
- Avro Data files
- RC Files,
- ORC files
- Parquet files

## What are different Hive Execution Engines?

There are 3 available options for Hive Execution Engine.

- MR (Map Reduce, default)
- Tez (Tez execution for Hadoop 2 only)
- Spark (Spark execution for Hive 1.10 onward)

## What is SerDe or Serializer/Deserializer in Hive?

SerDe or Serializer/Deserializer in Hive is used as an input/output interface to read and write data from the table. For any communication, we have to Serialize and Deserialize the data.

We can use SerDe in Hive to read data from the table and write data back to HDFS using a custom format. There are some SerDe that are already defined in addition to the custom SerDe that we can write to handle custom data format.

## What are the different SerDe in Hive?

There are many types of SerDe in Hive. Some of the popular implementations are given below.

- ByteStreamTypedSerDe
- RegexSerDe
- OpenCSVSerde
- DelimitedJSONSerDe

## What do we need Custom Serde in Hive?

If there are any data types in HDFS for which inbuilt Serde cannot be read, we need to write out our own code to read it.

## What is Serialization?

It is the process of converting an object in memory into bytes that can be stored in a file or transmitted over a network.

## What is Deserialization in Hive?

It is the process of converting the bytes back into an object in memory.

## Do you know about the Data Type in Hive?

There is a date data type called `TIMESTAMP in the hive. It is based on Java java.sql.timestamp` format.

## What is dynamic partition in Hive?

Dynamic partitions in hive means that we are splitting the data into separate directories based on a particular column’s unique values. A dynamic partition can be a date column, a String-based column, or anything depending upon the user’s requirement.

## What are the types of Partitions in Hive?

There are two types of partitions in Hive

- Dynamic
- Static(default)

## How do you enable dynamic partition in Hive?

Use the below properties in Hive to enable dynamic partition.

```bash
set hive.exec.partition=true;
set hive.exec.dynamic.partition.mode=nonstrict;
```

## How can we display the header rows with the results using Hive?

We can use the below settings to display the header row when the hive query is executed. This setting works in both the CLI and hive SQL scripts. This setting will configure the hive engine such that header rows get printed.

```bash
set hive.cli.print.header=true;
```

## How Can we load the data into a VIEW in Hive?

We cannot directly use VIEW in Hive INSERT or LOAD statement. In Hive, we can only load data into a table instead of below. Once the table is loaded, then we can create the view on the top of the table.

## What is the Default Location of Hive Table data storage?

Following is the default location in which Hive table data is stored.

```bash
hdfs://namenode_server/user/hive/warehouse
```

## What does `.hivehistory` file mean in Hive?

This file contains the history of all the hive queries that were executed at that cluster using this edge node. This file is located in the home directory. We can read it using the cat command.

```bash
cat ~/.hivehistory
```

## Is there any JDBC driver that Hive provides?

Apache Hive proves the `org.apache.hadoop.hive.jdbc.HiveDriver` JDBC driver.

## What are the different JDBC Driver modes in Hive?

Apache Hive has mainly two JDBC driver modes in Hive.

- Local mode

In local mode, Hive is embedded and doesn’t connect to the cluster. In the local model-based applications, the JDBC URL should be in the format `jdbc:hive://` which does not have any hostname.

- Remote one

In remote mode, JDBC-based application connects to the hive server through Thrift API. In this JDBC-based application, the JDBC URL should be of the form `jdbc:hive://hostname:port/databasename`.

## What is a Skewed table in Hive?

A skewed table is such a table in which some values of a column appear more than other values. This causes the table to be skewed. In Hive, we can create a separate table for skewed data so that these skewed values are written in separate files. This use of skewed tables gives better performance than another table.

## Is there a way to create multiple tables in Hive for the same data file?

In Hive, there is a concept of an external table using which we can create multiple tables based on the same file. Once we create an external table, Hive will save the schema details in the Metastore whereas data will reside in the original location where it was placed.

## What is Vectorization in Hive?

Vectorization is the optimization technique in Hive that is used for improving the performance of scans, aggregations, filters, and joins. In this technique, Hive processes 1024 rows at once instead of processing a single row each time. Doing this, the query execution of Hive increases drastically. This feature was introduced in Hive 0.13 and can be enabled by using the below settings.

```sql
set hive.vectorized.execution.enabled = true;

set hive.vectorized.execution.reduce.enabled = true;
```

## What are the different Hive Clients?

There are three types of clients provided by Hive. They are as follows.

- Thrift Client
- JDBC Client
- OJDbc Client

## What is Thrift Client in Hive?

The thrift client in Hive is used to connect the Apache thrift client to Apache Hive and run queries on top of it.

## What is JDBC Client in Hive?

We can write Java applications to connect to the hive by using the JDBC driver. This driver uses the Thrift to communicate with the Hive server. Hive allows for the Java applications to connect to it using the JDBC driver. JDBC driver uses Thrift to communicate with the Hive Server.

## What is ODBC Client in Hive?

Those applications that have ODBC protocol can also connect to the hive. This driver also uses Apache Thrift to connect to Hive.

## Can the same name be used for Table and View in Hive?

We cannot use the same name for the table and view in the hive. So, if we want to create a view in Hive, we need to give a unique name for it.

## Where is `.hiverc` file used in Hive?

In Hive, .hiverc is the initialization file that is loaded when the command line interface is started in Hive. If there are any initial parameters or configuration settings in this file, it is loaded when the hive starts. For example: setting the strict mode to be true can be done when hive CLI(command Line Starts). We can read it using the cat command.

```bash
cat ~/.hiverc
```

## What are the different complex and Collection Data Types available in Hive?

There are Four complex data types in Apache Hive.

- Map
- Struct
- Array
- Union

## When do we use PURGE in the DROP statement of Hive?

We use the PURGE option with the drop table statement when we want to delete the data of a table permanently. If we just use the DROP table statement to drop the table, data will go to the trash folder and stay there for a while. so we can retrieve the data in case of an accidental DROP table statement.

## Where does Hive store its Data?

When a hive table is used, it stores the data by default in `/user/hive/warehouse`. If we want to change its default setting, we can do that by changing a parameter in the configuration file hive-file.xml. We have to to find the setting called `hive.metastore.warehouse.dir` and change it to the directory we want.

## Why doesn’t Hive uses HDFS to store the metadata information?

Hadoop HDFS is based on writing once and reading many times architecture. This limits the HDFS on its latency as opposed to RDBMS which has low latency. As the hive needs quick access to its metadata, it does not store the metadata information in HDFS. Instead, its preferred metastore is a relational database like MYSQL or a similar database.

## What are the differences between Local and Remote metastore in Hive?



Metastore when configured with local configuration, runs in the same JVM as hive services are running. The Local Metastore connects to the metadata database on the separate JVM instance either in the same node or in different ones.

Metastore when configured remotely, runs on a separate JVM different from the hive service one. Other hive processes communicate with the remote metastore by using Thrit Network APIs.

Production servers can have redundant metastore configured to provide high availability.

## Can there be multiple processes using the default “Hive Metastore” at the same time?

Derby database is the default metastore in Hive when using it in embedded mode. When we run hive in embedded mode, only one user can access it at a single time.

## Can we change the default location of the Hive managed table?

We can change the default location of the managed table by using `LOCATION ` clause while creating the table.

## Why do we use partitions in Apache hive?

Partition means diving into the data in a certain way. In Apache Hive, tables are partitioned such that data of similar types are grouped together based on columns or certain partition keys.

When data is partitioned in the hive, a physical subdirectory is created for every partition. A table in Apache hive can have one or more partition columns to identify a partition.

Example: If we have a partition based on the year column formatted `yyyy` format, we will have each subdirectory for that table by year like 2021, 2022, 2026, etc.

## Why do you need to Perform Partitioning in Hive?

With Partitioning in Hive, we can only query the data we need, instead of scanning whole data sets. This reduces the latency in the query while Hive is reading the data.

Example: Let’s say we have a hive table with a partitioned dated column month. If we query only January data, we can use that filter that query. This additional filter in addition to the partition makes the hive only scan that month’s subdirectory instead of whole data sets.

## How can we disable variable substitution in Apache Hive?

Hive substitutes all variables by default by enabling this setting `hive.variable.substitute=true`.

We can disable Hive substitution by using this setting.

```bash
jdbc:hive2> SET hive.variable.substitute=false;
```

## What is a hive variable?

Hive variables are key-value pairs that can be referenced by Apache Hive in the hive query language(hql). The value of this variable is substituted in the hive scripts when the query gets constructed and runs. The value of each hive query variable is local to that active hive session.

Hive variables are similar to the variables we use in scripting languages like Bash. We can set this hive variable in different forms.

- Hive CLI
- Hive Beeline
- Hive Scripts

## What are the different hive namespaces in which hive variables are stored?

Hive mainly has four namespaces, in which Hive variables can be used

- hive-conf
- hivervar
- system
- env

## Conclusion

In this blog post, we read answers to different Hive interview questions. If you want to see what type of interview questions are being asked about Hive query language, you can visit [this](https://www.nitendratech.com/interview/hql-interview-questions/)blog post on HQL interview questions.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2022-01-03, updated 2024-01-07.*
