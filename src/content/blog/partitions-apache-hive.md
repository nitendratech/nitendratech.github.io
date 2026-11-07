---
title: "Partitions in Apache Hive"
description: "What Hive partitions are and how they segment table data into directories, how to create a partitioned table, set the maximum number of partitions, and enable dynamic partitioning in Hive."
pubDate: 2018-02-10
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

Partitions are fundamentally horizontal slices of data that allow large sets of data to be segmented into more manageable chunks. They are virtual columns acting as storage units but, not part of the data itself, and are derived on load. Partition keys in each Table will determine how the data is stored. It also allows the user to efficiently identify the rows that satisfy certain criteria. When the table with partitions is defined, the underlying structure is changed such that subdirectories are created for each slicer or partitioning column.

The partitions are a physical segmenting of the data, where the partition is maintained in the directory system. [Hive](https://www.nitendratech.com/hive/apache-hive/) queries use the metadata to determine where the partition is located. So, if you can make the directory structure match the query, it should find the data you want.

In this example, we create a hive table named partitioned_user, which has a partition column named date. Since the date of the column is String format, it can have any values, such as `20200201` or `03232020`.

```sql
CREATE TABLE IF NOT EXISTS partitioned_user(
  firstname VARCHAR(64),
  lastname VARCHAR(64),
  address STRING,
  email STRING)
COMMENT 'User Details Detals'
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LINES TERMINATED BY
PARTITIONED BY (date STRING)
STORED AS TEXTFILE;
```

## Setting Maximum Number of Partitions in Hive

To set a limit on the Maximum number of Partitions in Hive, use the below properties.

```sql
hive.exec.max.dynamic.partitions
```

## Dynamic Partitioning in Hive

A dynamic partition is created in a hive when data is divided in both the file system and meta store.

There are two components to a partition:

- it’s a directory on the file system
- an entry in Hive’s metastore.

This entry is essentially just the pair (partition values, partition location).

Each partition of data in the hive will be automatically split out into different folders as data is written to disk. It is necessary to include the partition columns as the last columns in the query to create a dynamic Partition when inserting data into a partition. They are more useful when there is a large amount of data, and you don’t know how many unique values exist for that column.

## Hive properties that enable Dynamic Partition

We need to set the following two properties to use Dynamic Partition.

```sql
hive>SET hive.exec.dynamic.partition=true;
hive>SET hive.exec.dynamic.partition.mode=nonstrict;
```

---

*Originally published on nitendratech.com on 2018-02-10, updated 2022-06-05.*
