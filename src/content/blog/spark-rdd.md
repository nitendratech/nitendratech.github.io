---
title: "Spark Resilient Distributed Dataset(RDD)"
description: "What a Spark Resilient Distributed Dataset (RDD) is — its resilient, distributed, and immutable features, the three ways to create RDDs, and the types of RDDs available in Spark."
pubDate: 2017-09-30
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

Resilient Distributed Dataset (RDD) is the fault-tolerant and immutable primary data structure/abstraction in [Apache Spark](https://www.nitendratech.com/spark/apache-spark/). It is a distributed collection of objects. The term 'resilient' in 'Resilient Distributed Dataset' refers to the fact that a lost partition can be reconstructed automatically by Spark by recomputing it from the RDDs that it was computed from.

It is a read-only collection of objects that is partitioned across multiple machines in a cluster. Datasets in RDD are divided into logical partitions across the nodes of the cluster that can be operated in parallel with a low-level API that offers transformation and actions.

## Features of RDD

**Resilient**

RDD is fault-tolerant with the help of the RDD lineage graph and so able to recompute missing or damaged partitions due to node failures.

**Distributed**

RDDs are distributed, with data residing on multiple nodes in a cluster.

**Immutable**

RDDs cannot be changed after they are created. Immutability rules out a significant set of potential problems due to change from multiple threads at once.

## Ways of Creating RDD

There are three ways to create RDDs.

### Parallelized Collections:

Parallelizing an existing in-memory collection in your driver program. It is created by using `parallelize` keyword. Your RDD can be either integer, numeric, or other Data Type RDD. RDDs can be created by using Spark Context Object from SparkSession using Scala.

It can be created by using `sparkContext.parallelize()` method. This function has another method signature through which we can pass an integer argument specifying the number of Partitions.
In Spark, partitions are units of parallelism and give RDDs when combined

```scala
val sparkSession: SparkSession = SparkSession
                      .builder().master("local[*]")
                        .appName("RDDParallelize").getOrCreate()

    val numList =List(1,2,3,4,5)
    val numericalRDD:RDD[Int] = sparkSession.sparkContext.parallelize(numList)
      println("Number of RDD Partitions: "+numericalRDD.getNumPartitions)
    println("Print First Element from RDD: "+numericalRDD.first() )
    // Print the Numerical Elements in the RDD
    numericalRDD.collect().foreach(println)
```

- **Referencing a dataset in an external storage system**

This is created by reading data from file systems such as a shared file system, HDFS, HBase, or any data source offering a Hadoop Input Format.

- **Transforming an existing RDD.**

This is created by manipulating an existing RDD. Let's take an existing Fruit RDD and convert that to a new one.

```
//Get the fruits RDD without apple, Creating RDD from RDD
    val noAppleRDD =
      stringRDD.filter( stringRDD => !stringRDD.equals("apple"))
    println(" No Apple RDD\n")

    noAppleRDD.collect().foreach(println)
```

#### Create Empty RDD

We can also use the parallelize method to create empty RDDs like the one below.

```scala
//Create Empty String RDD
    val emptyStringRDD = sparkSession.sparkContext.parallelize(Seq.empty[String])

    //Create Empty Numerical RDD
    val emptyNumericalRDD = sparkSession.sparkContext.parallelize(Seq.empty[Int])
```

## Types of RDD in Spark

Below are some RDD that we can create in Spark.

- HadoopRDD
- JavaPairRDD
- JavaDoubleRDD
- EdgeRDD
- VertexRDD
- RandomRDD
- JdbcRDD

---

*Originally published on nitendratech.com on 2017-09-30, updated 2024-01-17.*
