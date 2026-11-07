---
title: "Starting Apache Spark Application"
description: "How to start an Apache Spark application by creating a SparkContext with SparkConf and creating parallelized collections from local data."
pubDate: 2023-11-26
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

To start an Apache Spark application, we need to create an entry point using a Spark session, configure Spark application properties, and then define the data processing logic.

## Spark Context

Spark Context is the main entry point for [Apache Spark](https://www.nitendratech.com/spark/apache-spark/) before Spark 2.0, which represents the connection to a Spark cluster. It can be used to create RDDs, accumulators, and broadcast variables on that cluster.

We can only have one SparkContext active per JVM (Java Virtual Machine). We need to stop the active SparkContext before creating a new one.

**Spark Context Creation Example**

```scala
import org.apache.spark.{SparkConf ,SparkContext}

//Create Spark Configuration

val conf = new SparkConf()
   .setAppName("Spark Notes")
   .setMaster("local[*]") // Local Mode execution
   
   //Create Spark Context
   val sparkContext = new SparkContext(sc)
```

## Parallellized Collections

Parallelized collections are created by calling Spark Context's parallelize method on an existing collection in your driver program (a Scala Seq). The elements of the collection are copied to form a distributed dataset that can be operated on in parallel.

**Example:**

```scala
val arrayData = Array(4,6,9,11)
val parallellizedData = sparkContext.parallelize(arrayData)  //sparkContext is Spark Context Object
```

---

*Originally published on nitendratech.com on 2023-11-26, updated 2024-02-19.*
