---
title: "What is Metadata For Big Data Applications and Why it is important?"
description: "What metadata is in big data platforms like Hadoop — covering logical data sets, HDFS files, HBase and Hive tables, data ingestion and transformations, and dataset statistics — and why it is important."
pubDate: 2018-07-28
category: "Data Engineering"
subcategory: "Metadata"
draft: false
---

## What is Metadata in Big Data Platforms?

Metadata is the information that describes other [data](/blog/data-explained/), or, simply speaking, it is data about the data. It is the descriptive, administrative, and structural data that defines a firm’s data assets. It can streamline and enhance the process of collecting, integrating, and analyzing big data sources.

Metadata plays an important role in [Big data](/blog/big-data/) platforms like [Apache Hadoop](/blog/apache-hadoop/), where it helps to maintain lineage and provides the map and linkage between source and target systems It also provides valuable information regarding that data. Some important metadata related to big data applications can be the type of asset, author, date originated, workflow state, and usage within the Enterprise, among numerous others.

When we discuss metadata from the perspective of the Hadoop ecosystem, it can fall into one of the below categories.

### Metadata about Logical Data Sets

This metadata is stored in a separate metadata repository and can include the following information:

- Location of a data set (e.g., directory in [HDFS](/blog/hadoop-hdfs/) or the HBase table name)
- Schema associated with the data set
- Information about the Column name, Column Data type (String, Long, Float)
- Information related to the partition and sorting properties of the data sets
- [Format of the data sets](/blog/big-data-storage-formats/) (CSV(Comma Separated Values), TSV (Tab Separated Values), Sequence, Parquet, Avro, etc.)

### Metadata about files on HDFS

This includes information like permissions and ownership of such files, and the location of various blocks of that file on data nodes. Such information is usually stored and managed by the Hadoop Name Node.

### Metadata about tables in HBase and Hive

This includes the following information.

- Table Names and associated Namespace/Database
- Associated Attributes (e.g. MAX_FILESIZE, READONLY, WRITE ONLY, etc.)
- Name of Columns

### Metadata about Data Ingestion and transformations

This includes information like which user generated a given data set, where the data set came from, time and date of creation; how long it took to generate it; where the data is going to be stored (HDFS, S3, and Azure), and how many records there are or the size of the data loaded.

### Metadata about Dataset/Table statistics

This includes information about the Dataset/Table, like below.

- Table/dataset rows count for each partition or Unique column
- Number of unique values in each column in data sets
- Histogram of the distribution of the data sets
- Maximum and minimum values in the data sets

Such metadata is useful for various tools that can leverage it for optimizing their execution plans but also for data analysts, who can do quick analyses based on it.

## Conclusion

In this blog post, we learned about what metadata is and how it’s related to Big data platforms like Hadoop.

Please share this blog post on social media and leave a comment with any questions or suggestions.

## Reference

[big-data-vs-metadata-whats-difference-toby-martin](https://www.linkedin.com/pulse/big-data-vs-metadata-whats-difference-toby-martin/)

[case-open-metadata](http://www.ibmbigdatahub.com/blog/case-open-metadata)

---

*Originally published on nitendratech.com on 2018-07-28, updated 2024-02-18.*
