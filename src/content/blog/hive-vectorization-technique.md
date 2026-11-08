---
title: "Hive Vectorization Technique"
description: "How Hive vectorized query execution processes blocks of 1024 rows at a time to reduce CPU usage for scans, filters, aggregates, and joins, and how to enable it using ORC-format tables."
pubDate: 2019-10-17
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

The hive Vectorization technique is a feature (in both [MapReduce](/blog/hadoop-mapreduce-framework/) and Tez Engine) that greatly reduces the CPU usage for typical query operations like scans, filters, aggregates, and joins. A standard query execution system processes one row at a time. This involves long code paths and significant metadata interpretation in the inner loop of execution. Vectorized query execution streamlines operations by processing a block of 1024 rows at a time.

This technique is off by default, so your queries only utilize it if this variable is turned on to true. One must store the data in ORC format, and set the following variable as shown in Hive SQL to use vectorized query execution.

```sql
set hive.vectorized.execution.enabled = true ;
set hive.vectorized.execution.reduce.enabled = true;
```

Use the below query to create a hive table in ORC format.

```sql
CREATE DATABASE IF NOT EXISTS test_database;
CREATE TABLE IF NOT EXISTS test_database.test_table
(first_name String,
last_name String,
address String)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY '\t'
 LINES TERMINATED BY '\n'
STORED AS ORC;
```

## Why use Hive Vectorization?

It is very useful when doing a row-wise transformation to Hive Table or doing any machine learning applications. Sometimes we might need to send data through standard input to Hive Custom Mapper and reducer. Instead of sending one record at a time, we can use Hive containerization and send batches of data at once to custom Mapper and Reducer Scripts.

---

*Originally published on nitendratech.com on 2019-10-17, updated 2022-06-05.*
