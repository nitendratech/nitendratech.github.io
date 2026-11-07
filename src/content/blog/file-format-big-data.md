---
title: "How do we Choose File Format in Big Data Framework?"
description: "How to choose a file format in a big data framework like Hadoop by weighing write, partial read, and full read performance along with environmental factors such as schema evolution, processing tools, and query requirements."
pubDate: 2018-07-05
category: "Data Engineering"
subcategory: "File Formats"
draft: false
---

It is important to calculate the storage requirement along with the file formats when designing a data lake, data platform, or big data-based solution. The performance of applications and processes in that data platform depends upon the storage formats in which the files are stored. In an earlier blog post, I talked about the storage format used in Hadoop. Many factors determine the file formats. We need to ask questions like the one below to choose the file format.

- Does the application process batch or real-time data?
- Is there ad-hoc processing needed on top of data?
- Is the data transaction or time series-based data?
- Will there be any reporting developed on top of this data?
- Does the data need to be archived?
- How often does the schema of the data change? Or does the schema remain consistent for a long time?

In this post, we will see the performance factor when considering these file formats while working in a Big data framework like Hadoop.

There are mainly three types of performance to consider when choosing a file format in the Hadoop framework.

- **Write performance**

  We need to check how fast the data will be written in [Hadoop](https://www.nitendratech.com/hadoop/hadoop-tutorials/) Cluster.

- **Partial read performance**

  We need to see how fast you need to read the individual columns within a file.

- **Partial Read Performance**

  It deals with how fast every data element in a file can be read.

A columnar, compressed file format like Parquet or ORC may optimize partial and full read performance, but they do so at the expense of write performance. Conversely, uncompressed CSV files are fast to write but due to the lack of compression and column-orientation are slow for reading. You may end up with multiple copies of your data, each formatted for a different performance profile.

## Environmental factors for choosing the file format

As discussed, each file format is optimized for a different purpose. Your choice of format is driven by your use case and environment. Here are the key factors to consider:

**Hadoop Distribution**: Cloudera/Hortonworks and MapR distribution support/favor different formats.

**Schema Evolution**: Will the structure of your data evolve?

**Processing Requirements:** Will you be crunching the data and with what tools?

**Read/Query Requirements**: Will you be using SQL on Hadoop? Which engine? How often the Query will be executed?

**Extract Requirements:** Will you be extracting the data from Hadoop for import into an external database engine or another platform?

**Storage Requirement:** Is data volume a significant factor? Will you get significantly more bang for your storage buck through compression?

## Conclusion

So, do we see any standard file format for storage with all the options and considerations?

If you are storing intermediate data between MapReduce jobs, then Sequence files are preferred. If query performance against the data is most important, ORC (HortonWorks/Hive) or Parquet (Cloudera/Impala) is optimal — but these files will take longer to write.

We have also seen the order of magnitude query performance improvements when using Parquet with Spark SQL. Avro is great if your schema is going to change over time, but query performance will be slower than ORC or Parquet. CSV files are excellent if you are going to extract data from Hadoop to bulk load into a database.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2018-07-05, updated 2024-02-18.*
