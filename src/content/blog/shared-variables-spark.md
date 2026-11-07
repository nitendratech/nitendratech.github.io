---
title: "What is  Spark Shared Variables?"
description: "What Spark shared variables are and how broadcast variables and accumulators let tasks share data across nodes in parallel operations."
pubDate: 2017-09-05
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

Shared variables are an abstraction in [Apache Spark](https://www.nitendratech.com/spark/apache-spark/) which is used in parallel operations in different nodes. When Spark runs a function in parallel as a set of tasks on different nodes, it ships a copy of each variable used in the function to each task. Sometimes, a variable needs to be shared across tasks, or between tasks and the driver program.

Spark supports two types of shared variables: broadcast variables and accumulators.

## Accumulator variables

Accumulators are variables that can be added through associative operations. They are variables that are only “added” to, such as counters and sums. It is a shared variable that tasks can only add to, like counters in MapReduce. After a job has been completed, the accumulator’s final value can be retrieved from the driver program.

Spark natively supports two types of accumulators.

- Numeric value types
- Standard mutable collections.

`AggregateByKey()` and `combineByKey()` uses accumulators. They are Spark’s offline debuggers, which are similar to Hadoop Counters.

## Broadcast Variables

A broadcast variable is used to cache a value in memory on all nodes. It is serialized and sent to each executor, where it is cached so that later tasks can access it if needed.

Broadcast variables play a similar role to distributed caches in MapReduce. In Spark, the broadcasted variable is first stored in memory and spilled to disk only when memory is exhausted. It is created by passing the variable to be broadcast to the `broadcast()` method on Spark Context.

[Shared Variables](https://spark.apache.org/docs/latest/rdd-programming-guide.html#shared-variables)

---

*Originally published on nitendratech.com on 2017-09-05, updated 2024-02-18.*
