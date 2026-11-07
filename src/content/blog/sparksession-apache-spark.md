---
title: "SparkSession in Apache Spark"
description: "What SparkSession is in Apache Spark, how to create it in Scala and Java using the builder pattern, and its important commonly used methods."
pubDate: 2020-05-24
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

SparkSession has been the main entry point to [Spark applications](https://www.nitendratech.com/spark/apache-spark/) since Spark 2.0. Before Spark 2.0 Spark Context was the main entry point for any Spark applications. We see how to start a SparkSession in a Spark application, along with some important properties.

SparkSession provides a single point of entry to interact with the underlying Spark APIs and functions. It allows the Spark application to interact with the DataFrame and Dataset API. It also contains all the functionalities that are available as part of SparkContext. Furthermore, it is being created using `SparkSession.builder()` builder patterns.

If we want to use APIs of SQL, [Hive](https://www.nitendratech.com/hive/apache-hive/), and Streaming, we don't need to create separate Spark contexts. Instead, we can use SparkSession and access all of this API.

We can also add Spark's various config properties while invoking SparkSession using the `config` method.

## SparkSession through Scala and Java Program

If we want to create a SparkSession using Scala/Java or Python, we need to use the `builder()` method and set the master, Application name along with other properties and use `getOrCreate()` method. This `getOrCreate()` the method will return the already existing SparkSession. If the SparkSession does not already exist, it will create a new SparkSession.

### Using Scala

Let's see an example of SparkSession using [Scala](https://www.nitendratech.com/scala/scala-programming-language/).

```scala
val sparkSession = SparkSession.builder()
                .config("spark.executor.memory", "2g")
                  .appName("SparkExample")
                  .master("local[2]")
                  .getOrCreate()
```

### Using Java

Let's see an example of SparkSession using [Java](https://www.nitendratech.com/java/java-programming-language/).

```java
SparkSession sparkSession = SparkSession.config("spark.executor.memory", "2g")
                      .appName("SparkExample")
                      .master("local[2]")
                      .getOrCreate();
```

## Important SparkSession methods

Let's see some important and commonly used SparkSession methods.

| Method | Description |
| --- | --- |
| `version` | It returns a Spark Version of the application is running. Example: 2.4.0 |
| `createDataFrame()` | It Creates a Daraframe from the collection and an RDD. |
| `emptyDataFrame()` | It creates an empty DataFrame. |
| `emptyDataset()` | It creates a Dataset from the collection. |
| `createDataset()` | It creates a Dataset from the collection, DataFrame, and RDD. |
| `readStream()` | It Returns an instance of `DataStreamReader` the class which is used for reading streaming Data |
| `getActiveSession()` | `getActiveSession: Option[SparkSession]` Returns an active SparkSession |
| `read()` | Ir returns an instance of `DataFrameReader` a class that is used to read records from external data sources like CSV/Parquet/Avro. |
| `udf()` | Registers a UDF (User Defined Function) |
| `sql()` | `sql(sqlText: String): DataFrame` It executes a SQL query and returns a DataFrame |
| `sqlContext()` | `sqlContext: SQLContext` It accesses the underlying SQLContext |
| `sparkContext()` | It returns a `SparkContext` |
| `implicits()` | `import spark.implicits._` It allows implicit conversions for converting Scala objects into a Dataset, DataFrame, Columns, etc |

---

*Originally published on nitendratech.com on 2020-05-24, updated 2024-01-02.*
