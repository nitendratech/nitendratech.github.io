---
title: "Apache Hive 3 Architecture"
description: "The architectural changes in Apache Hive 3 — the move from MapReduce to Apache Tez as the default execution engine, security and ACID transaction improvements, the Beeline-only client, metastore and Spark catalog changes, query caching, and the interfaces deprecated in Hive 3."
pubDate: 2019-05-21
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

With the introduction of Apache Hive 3, Apache Hadoop has introduced different new features to address the growing needs of enterprise data warehouse systems. This blog post talks about several architectural changes occurring in Apache Hive 3 which will change how applications and users interact with Apache Hive.

## Execution Engine changes

The previous version of Hadoop 1 and 2 had [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) as one of the engines in Apache Hive. Apache Tez is the default Hive execution engine in Apache Hive 3. MapReduce is not supported in the new version of Hive. It supports directed acyclic graphs (DAGs) and data transfer primitives which improve [SQL(Structured Query Language)](https://www.nitendratech.com/database/learn-sql/) queries using Hive.

Hive query gets executed in the below steps.

1. Hive compiles the given query written in [HQL (Hive Query Language)](https://www.nitendratech.com/hive/hive-query-language/)
2. Apache Tez executes the query
3. [YARN](https://www.nitendratech.com/hadoop/hadoop-yarn-commands/) (Yet Another Resource Negotiator) allocates the required resources for applications across the Hadoop cluster and enables authorization for Hive jobs in YARN queues
4. Apache Hive updates the data in [HDFS](https://www.nitendratech.com/hadoop/hadoop-hdfs/) or the Hive warehouse depending upon whether the table type is Internal or external table
5. Hive returns the results over the [JDBC (Java Database Connectivity)](https://www.nitendratech.com/programming/LEARN-jdbc/) connection once all of these steps are executed,

### Design changes that affect security

Hive 3 has done several architectural changes to improve security.

- It has tightly controlled file system and computer memory resources, replacing the flexible boundaries that existed in the earlier system
- Hive 3 provides optimized workloads in shared files and YARN containers.

Hive 3 meets customer demands for concurrency improvements, ACID support for GDPR (General Data Protection Regulation), render security, and other features by tightly controlling the file system, and computer memory resources, and using Apache Ranger as a security layer.

### Transaction processing changes and Improvements

Hive 3 has mature versions of [ACID (Atomicity, Consistency, Isolation, and Durability)](https://www.nitendratech.com/database/acid-property-database/) transaction processing and LLAP(Live Long and Process) capability. [ACID](https://www.nitendratech.com/database/acid-property-database/)-based tables facilitate compliance with the right to be forgotten requirement of the GDPR (General Data Protection Regulation). Maintenance becomes easier in Hive 3 since we do not need to bucket ACID tables.

### Hive client changes

Hive 3 only supports the thin client Beeline for running Hive queries and administrative commands from the command line.

Beeline uses a JDBC connection to Hive Server to execute all commands. Hive Server is responsible for Parsing, compiling, and executing operations. Beeline supports the same command-line options as the Hive CLI, with one exception. It does not support the Hive Metastore configuration changes.

If we want to enter supported Hive CLI commands, we have to enter Beeline using the `hive` keyword, command option, and command. For example, `hive -e set`.

There are several advantages of using Beeline instead of thick client CLI (Command Line Interface) including the following.

- We now have to maintain only the JDBC client instead of maintaining the entire Hive code base.
- Now Hive takes less time to start as the entire hive code base is not involved in using Beeline.

A thin client architecture also helps to secure data in these ways:

- In the Hive 3 Session state, internal data structures, and passwords, reside on the client instead of the server.
- As there are a few daemons required for executing queries, it simplifies monitoring and debugging.

In Hive 3, Hive Server enforces whitelist and blacklist settings that we can change using SET commands. Blacklist settings help to restrict memory configurations that will prevent any Hive Server instability. We can configure multiple Hive Server instances with different whitelists and blacklists to establish different levels of stability.

### Apache Hive Metastore changes

Hive Server now uses a remote instead of an embedded metastore because of which Ambari no longer starts the metastore using `hive.metastore.uris=' '.`

We can no longer set `key=value` commands on the command line to configure Hive Metastore. If we need to configure any properties, we need to configure that in hive-site.xml. The Hive catalog resides in the RDBMS based Hive Metastore. Hive can take advantage of RDBMS resources in cloud deployments using this new architecture.

### Spark catalog changes

Apache Spark and Hive now use independent catalogs for accessing Spark SQL or Hive tables on the same or different platforms. A table created by Spark resides in the Spark catalog, whereas a table created by Hive resides in the Hive catalog. These tables are interoperable, although they are independent.

You cannot directly access the ACID and external tables using Spark. In order to access these tables from Hive, we need to use the Hive Warehouse Connector.

### Query execution of batch and interactive workloads

Hive filters and cache similar or identical queries and does not recompute the data that has not changed. This caching of repetitive queries can reduce the load substantially when a hundred or thousands of users of BI tools and web services query Hive.

### Deprecated, unavailable, or unsupported interfaces

Following are the deprecated, unavailable, or unsupported interfaces in Hive 3

- Hive CLI (replaced by Beeline)
- WebHCat
- Hcat CLI
- SQL Standard Authorization
- MapReduce execution engine (replaced by Tez)

---

*Originally published on nitendratech.com on 2019-05-21, updated 2022-06-05.*
