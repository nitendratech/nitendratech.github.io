---
title: "What are Big Data File Storage Formats?"
description: "An overview of the file storage formats used in Hadoop, Spark, and Hive — text and sequence files, serialization formats such as Avro, Thrift, and Protocol Buffers, columnar formats like ORC and Parquet, and compression."
pubDate: 2018-05-30
category: "Data Engineering"
subcategory: "File Formats"
draft: false
---

One of the most important aspects of architecting a Big Data solution is choosing proper Data Storage options in Hadoop/Spark. [Apache Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/) does not have a standard data storage format. So, users using Hadoop have complete control and numerous options for how data can be stored in [HDFS(Hadoop Distributed File System)](https://www.nitendratech.com/hadoop/hadoop-hdfs/).

Since Apache Hadoop is a standard file system, it allows storing the data in any format, whether it's text, binary, image, or other. We can apply these options for both the raw data/ processed data and the intermediate data generated. So, users using Hadoop have complete control and numerous options for how data can be stored in HDFS.

This blog will summarize different data/file formats that are used by different Big data stacks including Spark, Hadoop, Hive, and others.

## Standard File Formats

Some standard file formats in Hadoop are text files (CSV, XML) or binary file types (images).

**(a) Text Data**

[Apache Hadoop](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) framework is commonly used for the storage and analysis of text files. Text files are ordinary files that can be structured in file formats like Comma comma-separated values (CSV), Tab Separated Values (TSV), weblogs, access logs, and server logs. Comma-separated values (CSVs) and Tab-separated values (TSVs) are common flat files that can be used with different data processing platforms like Hadoop, Spark, Pig, and Hive.

CSV files are still quite common and often used for exchanging data between Hadoop and external systems. They are readable and ubiquitously parsable, and are commonly used to dump data from a database or bulk load data from Hadoop into an analytic database. However, CSV files do not support block compression. So compressing a CSV file in Hadoop often comes at a significant read performance cost.

When working with Text/CSV files in Hadoop, it might or might not have header or footer lines. Each line of the file contains a record, excluding the header/footer. This, of course, means that there is no metadata stored with the CSV file. Since the file structure is dependent on field order, new fields can only be appended at the end of records, while existing fields can never be deleted. As such, CSV files have limited support for schema evolution.

**(b) Structured Text Data**

This is a more specialized form of text files, such as XML (Extensible Markup Language) or JSON(JavaScript Object Notation). These formats bring a special challenge to Hadoop, as splitting XML and JSON files is very tricky and Hadoop does not provide a built-in Input Format for either of them. Processing JSON is more challenging than XML since there are no tokens to mark the beginning or end of the record in JSON

JSON records are different from JSON Files in that each line is its own JSON data – making the files splittable. Unlike CSV files, JSON stores metadata with the data, fully enabling schema evolution. However, like CSV files, JSON files do not support block compression. Additionally, JSON support was a relative latecomer to the Hadoop framework and many of the native serdes contain significant bugs. Fortunately, third-party serdes are frequently available and often solve these challenges.

**(c) Sequence Files**

Sequence files store data in a binary format with a similar structure to CSV. Like CSV, sequence files do not store metadata with the data, so the only schema evolution option is appending new fields. However, unlike CSV, sequence files do support block compression. Due to the complexity of reading sequence files, they are often only used for in-flight data, such as intermediate data storage used within a sequence of [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) jobs.

Mainly, the text files are the most common source data format stored in [Hadoop HDFS](https://www.nitendratech.com/hadoop/hadoop-hdfs/). But Hadoop can also be used to process binary files such as images. Sequence File is preferred to store and process binary files.

## Serialization Formats

Serialization refers to the process of turning data structures into byte streams, either for storage or transmission over a network. Conversely, deserialization is the process of converting a byte stream back into data structures. Because of serialization, data can be converted into a format that can be efficiently stored as well as transferred across a network connection.

Hadoop uses the `Writables` as the main serialization format. Writable is compact and fast, but is difficult to extend or use from languages other than Java. However, other serialization frameworks are being used within the Hadoop ecosystem, as described below.

**(a)Thrift**

Thrift format was developed at Facebook as a framework for implementing cross-language interfaces to services. It uses an Interface Definition Language (IDL) to define interfaces and uses an IDL file to generate stub code to be used in implementing RPC clients and servers that can be used across languages. Thrift, although used for data serialization with Hadoop, has several drawbacks, as it is not splittable and compressible and further lacks native support in Hadoop.

**(b) Protocol Buffers (protobuf)**

It was developed at Google to facilitate data exchange between services written in different languages. It is defined via an IDL like Thrift, which is used to generate stub code for multiple languages. Furthermore, it is neither compressible nor splittable and also has no MapReduce Support like Thrift.

**(c) Avro Files**

Avro is a language-neutral data serialization system designed to address the major downside of Hadoop Writable: the lack of language portability. It is described through a language-independent schema, similar to Thrift and Protocol Buffers. Avro stores the schema in the header of each file, which means it stores the metadata with the data. If you use one language to write an Avro file, you can use any other language to read the files later.

In addition to better native support for MapReduce, Avro data files are splittable and block compressible. An important point that makes Avro better than Sequence Files for Hadoop-based applications is the support of schema evolution. It means that the schema that is used to read the Avro file does not need to match the schema used to write the file. This makes Avro the epitome of schema evolution support since you can rename, add, delete, and change the data types of fields by defining a new independent schema. This makes it possible to add new fields to a schema as requirements change. Avro schemas are usually written in JSON, but may also be written in Avro IDL, which is a C-like language. As just noted, the schema is stored as part of the file metadata in the file header.

## Columnar Format

In recent modern Big Data applications, numerous databases (NoSQL) have introduced columnar storage, which provides several benefits over traditional row-oriented databases. There are three types of columnar data formats. Many Hadoop vendors like Cloudera, Hortonworks, and MapR are utilizing columnar file formats in their own Hadoop products

- Record Columnar(RC) Files
- Optimized Record Columnar(ORC) Files
- Parquet Files

**4. Compression**

Modern data and solution architects of Big Data applications are always concerned about reducing the storage requirements and improving the data processing performance. Compression is another important consideration for storing data in Hadoop, which will help to solve this problem.

## Conclusion

In this blog post, we learned about different Big Data storage formats along with their features.

Please share this blog post on social media and leave a comment with any questions or suggestions.

### Reference

[Hadoop Storage Formats](https://blog.matthewrathbone.com/2016/09/01/a-beginners-guide-to-hadoop-storage-formats.html)

[Hadoop Application Architectures](https://www.amazon.com/_/dp/1491900083?tag=oreilly20-20)

---

*Originally published on nitendratech.com on 2018-05-30, updated 2024-02-18.*
