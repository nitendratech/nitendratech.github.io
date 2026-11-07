---
title: "Introduction to Apache Hive"
description: "An introduction to Apache Hive, the data warehouse framework on top of Hadoop — its architecture, components, data units, managed and external tables, and the ways to connect to Hive Server."
pubDate: 2017-12-28
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

Apache hive is an open-source, distributed, fault-tolerant [data warehouse](https://www.nitendratech.com/database/enterprise-data-warehouse/) framework that is used to efficiently store and process large datasets. Using a data warehouse, data can be stored in a central location that allows organizations to make informed and data-driven decisions. It is used to read, write and manage large data sets that are directly on top of the [Hadoop Distributed File System(HDFS)](https://www.nitendratech.com/hadoop/hadoop-hdfs/) or any other data storage system such as HBase, S3, or Azure.

Hive allows developers to write queries in Hive Query Language (HQL) that are similar to SQL. Using HQL, one can write statements to read and write petabytes scale of data for query and analysis. It is used for providing data summarization, query, and analysis for [Big data](https://www.nitendratech.com/bigdata/big-data/) sets.

Hive was designed by Facebook initially so that developers don't have to write low-level map-reduce cod to do analysis. Instead, they can bypass Java and use SQL-like queries for any batch or ad-hoc analysis. This is a cost-effective and scalable solution, as Hive can be used both on-premise and in the cloud.

Currently, Hive is being provided by various cloud providers like AWS and Azure. It is used by many organizations to run their batch through ETL to ELT jobs. Hive is mainly targeted toward those developers who are more comfortable writing SQL queries, as it abstracts the complexity of Hadoop underneath it.

Hive is not a relational database, but is mainly used for [ETL (Extract, Transform, and Load)](https://www.nitendratech.com/database/etl-process/) tools and is best suited for batch jobs like OLAP workloads. In Hive, we first create the table and database and load data on these tables.

It is best used for batch jobs over large sets of immutable data (like [server logs](https://www.nitendratech.com/technology/log-file/) or [Access Logs](https://www.nitendratech.com/technology/access-logs/)). Hive is schema on reading rather than schema on write. It means that it doesn't check data during loading, but does check when a query is issued.

Hive is used for summarization, ad-hoc analysis and data mining, spam detection, and ad optimization. One of the main advantages of the hive is that it is [SQL](https://www.nitendratech.com/database/learn-sql/) in nature. Hive stores its database metadata in Hive metastore.

## Hive Architecture

Because of Hadoop's "schema on reading" architecture, a Hadoop cluster is a perfect reservoir of heterogeneous data—structured and unstructured—from a multitude of sources.

The tables in Apache Hive are similar to tables in a relational database, and data units are organized in taxonomy from larger to more granular units. Databases are comprised of tables, which are made up of partitions. Data can be accessed via a simple query language, and Hive supports overwriting or appending data.

Within a particular database, data in the tables is serialized, and each table has a corresponding HDFS directory. Each table can be subdivided into partitions that determine how data is distributed within subdirectories of the table directory. Data within partitions can be further broken down into buckets.

Hive supports all the common primitive data formats such as BIGINT, BINARY, BOOLEAN, CHAR, DECIMAL, DOUBLE, FLOAT, INT, SMALLINT, STRING, TIMESTAMP, and TINYINT. In addition, analysts can combine primitive data types to form complex data types, such as structs, maps, and arrays.

![Hive Architecture](https://www.nitendratech.com/wp-content/uploads/2019/04/hive-architecture.png)

Figure: Hive Architecture

## Data Units in Hive

Apache Hive data can be organized into data units.

**Databases:** Namespaces that -separate tables and other data units from naming conflict.

**Tables:** Homogeneous units of data that have the same schema.

An example of a table could be the views table, where each row could consist of the following columns (schema):

```
{timestamp: INT, userid: BIGINT, page_url: STRINGTYPE, referer_ur: STRINGTYPE, IP address: STRINGTYPE
```

## Components of Hive Architecture

The following are the main components of Hive.

**Hive Driver:** Hive Driver is responsible for handling sessions and providing commands to execute. These commands are received from the user in the form of queries. It uses the interface like JDBC/ODBC interface to fetch API

**Metastore:** Hive metastore has all the information about tables, partitions, column names, and column data types. It also keeps track of serializers and deserializers used while reading and writing data to the HDFS files. The location in which the description of the structure of the large data set is kept. The important point is that a standard database is used to store the metadata, and it does not store the large data set itself.

**Hive Compiler:** It is responsible for parsing queries and performing semantic analysis on the queries and expressions. It checks the Hive metastore for the related metadata and generates an execution plan.

**Execution Engine:** This component executes the plan created by the compiler. It also manages the dependencies between the different stages of the execution plan.

**Hive User Interface (UI):** This is a user interface provided by Hive through which users can submit queries and execute other operations. In addition to the command line interface provided by the hive, it also provides a graphical interface that can be used to submit queries.

**Hive Client:** We can use various programming languages like Java, and Python, C++ to write applications and run them in Hive. For those applications to run in the hive, we need to use clients like JDBC, ODBC, and Thrift drivers. The choice of the Hive clients varies by the programming language used.

**Warehouse Directory**

This is a type of location called scratch-pad storage location that Hive permits to store/cache working files. It includes,

- Newly created tables
- Temporary results from user queries.

For processing/communication efficiency, it is typically located on a Hadoop Distributed File System (HDFS) located in the Hadoop Cluster.

**Hadoop Cluster**

The cluster of inexpensive commodity computers on which the large data set is stored and all processing is performed.

## Types of Hive tables

There are mainly two types of tables in Hive; managed and external tables.

**Managed Table:** A managed or internal table is managed by a hive, where the Hive manages both the data and schema. If we drop the Hive-managed Table, it deletes the table as well as the data in it. This table stores the data inside the

Managed tables store their data inside the warehouse directory

External Table: In this table type, data is stored in HDFS whereas schema is only managed by Hive. It means that if we drop the external hive table, we only lose the table, not the data itself. Hive does not create the external directory (or directories for partitioned tables), nor are the directory and data files deleted when an external table is dropped.

## Ways to Connect to Hive Server

Below are how we can connect to Hive Server.

- **Thrift Client:** Using thrift you can call hive commands from various programming languages e.g. C++, Java, PHP, Python, and Ruby. This client uses the Apache thrift to connect to the hive and run queries.
- **JDBC Driver:** It supports the Type 4 (pure Java) JDBC Driver. We can write Java applications to connect to the hive by using the JDBC driver. This driver uses the Thrift to communicate with the Hive server. Hive allows for the Java applications to connect to it using the JDBC driver. JDBC driver uses Thrift to communicate with the Hive Server.
- **ODBC Driver:** It supports the ODBC protocol. We can write Java applications to connect to the hive by using the JDBC driver. This driver uses the Thrift to communicate with the Hive server. Hive allows for the Java applications to connect to it using the JDBC driver. JDBC driver uses Thrift to communicate with the Hive Server.

## Reference

[1] [Apache Hive](https://hive.apache.org/)

[2] [Hadoop Definitive Guide](https://www.amazon.com/_/dp/1491901632?tag=oreilly20-20)

---

*Originally published on nitendratech.com on 2017-12-28, updated 2024-02-18.*
