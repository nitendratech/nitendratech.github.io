---
title: "What are User Defined Functions(UDF) in Apache Hive?"
description: "What User Defined Functions (UDFs) are in Apache Hive, the three types — UDF, UDAF, and UDTF — how to develop and deploy a UDF as a JAR file, and the Simple and Complex APIs used to write them."
pubDate: 2022-07-05
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

[Apache hive](/blog/apache-hive/) is a data warehousing tool in which we use a [Structured Query Language(SQL)](/blog/learn-sql/) like language called Hive Query Language(HQL) to perform various [ETL](/blog/etl-process/) tasks on given data. Hive is one of the [Apache Hadoop](/blog/apache-hadoop/) stacks that allows users to manage and process huge amounts of data. As many developers are familiar with SQL, they can easily write complex queries using HQL to perform certain analysis tasks.

Apache Hive provides two types of function, namely built-in functions and UDF (User Defined Function). It has a [comprehensive library](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+UDF) of built-in functions that have different functions. There are times when a given requirement needs functionality for which no in-build function exists in the hive. In this scenario, we have to write a User-defined function

## What is UDF in Hive?

User-Defined Functions or UDF is custom defined functions that are used to process a single record or combination of records. In Hive, users have the capability to write their own UDF to meet client requirements.

Even though older versions of hive support, the writing of UDF using java, newer versions support Java, Python, and other programming languages. During the query execution phase, the user-defined function will return the output which can be used directly in the HQL. When we want to use the created UDF in the query, we need to use the hive `TRANSFORM` clause. This clause in hive allows adding own mappers and reducers to process the given input data.

## Types of UDF in Hive

There are three types of UDF in Hive.

- User Designed Function(UDF)
- User-Defined Aggregate Functions(UDAF)
- User-Defined Table Function(UDTF)

## Developing and Deploying the UDF (User Defined Function)

There are many steps involved in writing or creating Hive UDF.

1. Create the Java class extending `org.apache.hadoop.hive.ql.exec.UDF` class containing the logic or code of UDF. It will have one or more `evaluate()` functions or methods in it.
2. Package the java class as a jar file named customUDF.jar using Maven or a similar build tool
3. Add the new created JAR to Hive classpath using Hive CLI (Command Line Interface)

First build a Jar file named `customUDF.jar` containing UDF and add it to the Hive instance to be used later.

```sql
hive> add jar customUDF.jar;
hive> create temporary function customUDF
as 'com.nitendragautam.udf.GenericUDF';
hive> select customUDF(col1, col2, col3) from partitioned_user limit 5;
```

## Hive Interface for UDF?

There are two interfaces for writing the User Defined function in the hive.

- Simple API
- Complex API

Here, a simple API `org.apache.hadoop.hive.ql.exec.UDF` reads and returns primitive data types. It uses the basic Hadoop and Hive writable types such as Text, `IntWritable`, `LongWritable`, DoubleWritable etc. It will accept and produce a different number of inputs based on the UDF function we wrote. When this UDF is used in the query, it will be called once for each row in the result data set, unless we change the default settings.

## Conclusion

In this blogs post, we read about the hive User Defined Function(UDF) and types of Hive User Defined Function(UDF)

---

*Originally published on nitendratech.com on 2022-07-05, updated 2024-08-03.*
