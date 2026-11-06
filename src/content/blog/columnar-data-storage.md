---
title: "What is Columnar Data Storage and its Types?"
description: "How column-oriented databases store data, and the three columnar file formats — RC files, ORC files, and Parquet — with their benefits, limitations, and how ORC improves on RC."
pubDate: 2021-05-21
category: "Data Engineering"
subcategory: "Data Formats"
---

In recent modern [Big Data](https://www.nitendratech.com/bigdata/big-data/) applications, numerous databases ([NoSQL](https://www.nitendratech.com/database/nosql-databases/)) have introduced columnar data storage, which provides several benefits over traditional row-oriented databases. Many Hadoop vendors like Cloudera, Hortonworks, and MapR are utilizing columnar file formats in their own Hadoop products.

## What is a Column Oriented Database?

With the use of a column-oriented database, Input/Output and decompression can be skipped on columns that are not part of the query. It works in use cases where we need to access only small subsets of columns. If the use case requires accessing many columns at a single query, row-oriented databases in preferable As data within the same columns are the same in comparison to data in a block of rows, it is very efficient in terms of compression It is also useful for [ETL (Extract Transform Load)](https://www.nitendratech.com/database/etl-process/) or data warehousing use cases where the client wants to aggregate column values over a large collection of records.

## Types of Columnar Files

There are three kinds of columnar file formats

- Record Columnar Files
- Optimized Record Columnar(ORC) File
- Parquet File

### Record Columnar(RC) Files

RC-Files or Record Columnar Files were the first columnar file format adopted in the [Hadoop MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) framework. Like columnar databases, the RC file enjoys significant compression and query performance benefits. The RC File format was developed specifically to provide efficient processing for MapReduce applications, although in practice it's only seen used as a Hive storage format. The RC File format was developed to provide fast data loading, fast query processing, and highly efficient storage space utilization. The RC File format breaks files into row splits, then within each split uses column-oriented storage.

However, the current serdes for RC files in Hive and other tools do not support schema evolution. To add a column to your data, you must rewrite every preexisting RC file. Also, although RC files are good for queries, writing an RC file requires more memory and computation than non-columnar file formats. They are generally slower to write.

It is a data storage structure that determines how to minimize the space required for relational data in HDFS (Hadoop Distributed File System). It does this by changing the format of the data using the MapReduce framework.

RC files, short for Record Columnar File, are flat files consisting of binary key/value pairs, which share many similarities with Sequence File. RC file stores columns of a table in a record columnar way. It first partitions rows horizontally into row split, and then it vertically partitions each row split in a columnar way.

### ORC (Optimized Record Columnar) Files

Optimized Record Columnar or ORC Files were invented to optimize performance in the hive and are primarily backed by HortonWorks. ORC files enjoy the same benefits and limitations as RC files, just done better for Hadoop. This means ORC files compress better than RC files, enabling faster queries. However, they still don't support schema evolution. Some benchmarks indicate that ORC files compress to be the smallest of all file formats in Hadoop. It is also a split-able storage format which the Hive type model, including new primitives such as decimal and complex types.

A drawback of ORC as of this writing is that it was designed specifically for [Hive](https://www.nitendratech.com/hive/apache-hive/), and so is not a general-purpose storage format that can be used with non-Hive [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) interfaces such as Pig or [Java](https://www.nitendratech.com/java/java-programming-language/), or other query engines such as Impala. It is worthwhile to note that, at the time of this writing, Cloudera Impala does not support ORC files.

An ORC file contains groups of row data called stripes, along with auxiliary information in a file footer. At the end of the file, a postscript holds compression parameters and the size of the compressed footer. The default stripe size is 250 MB. Large stripe sizes enable large, efficient reads from [Hadoop Distributed File System(HDFS).](https://www.nitendratech.com/hadoop/hadoop-hdfs/) The file footer contains a list of stripes in the file, the number of rows per stripe, and each column's data type. It also contains column-level aggregates count, min, max, and sum.

### Parquet Files

Parquet files are a columnar data format that is suitable for different MapReduce interfaces such as Java, Hive, and Pig, and also suitable for other processing engines such as Impala and Spark.

The performance of Parquet is pretty good as RC and ORC, but is generally slower to write than other column formats. Unlike RC and ORC files, Parquet serdes supports schema evolution. If any new columns have to be added to the parquet file format, it has to be added at the end of the structure.

At present, Hive and Impala can query newly added columns, but other tools in the ecosystem such as Hadoop Pig may face challenges. The parquet is supported by Cloudera and optimized for Cloudera Impala.

## RC vs ORC File format

The ORC file format provides a highly efficient way to store Hive data. It was designed to overcome the limitations of the other Hive file formats. Using ORC files improves performance when the hive is reading, writing, and processing data.

- Compared with RC-File format, for example, ORC file format has many advantages such as:
- A single file as the output of each task, which reduces the Name Node's load
- Hive type support includes Date Time, decimal, and complex types (struct, list, map, and union)
- Light-weight indexes stored within the file
- Block-mode compression based on the data type
- Concurrent reads of the same file using separate Record Readers
- Ability to split files without scanning for markers
- bound to the amount of memory needed for reading or writing
- metadata stored using Protocol Buffers, which allows the addition and removal of fields

## Conclusion

In this blog post, we learned about different columnar file formats and ways to differentiate them.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2021-05-21, updated 2024-02-18.*
