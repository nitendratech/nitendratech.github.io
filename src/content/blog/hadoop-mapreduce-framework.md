---
title: "Introduction to Hadoop Mapreduce framework"
description: "An introduction to the Hadoop MapReduce framework — its components, the split, map, combiner, shuffle and sort, and reduce phases, reducer core methods, and the configuration parameters needed to run a job."
pubDate: 2017-08-03
category: "Data Engineering"
subcategory: "MapReduce"
draft: false
---

Hadoop MapReduce is a [Big data](https://www.nitendratech.com/bigdata/big-data/) processing/programming framework that consists of the MapReduce programming model and [Hadoop Distributed File System(HDFS)](https://www.nitendratech.com/hadoop/hadoop-hdfs/). It is mainly used for executing highly parallel and distributable algorithms across large data sets using many commodity hardware.

The Hadoop MapReduce framework is the parallel programming model for processing an enormous amount of data that splits the input dataset into independent chunks, which are processed by the map tasks in a completely parallel manner. The Hadoop framework sorts the outputs of the maps, which are then inputted into the reduced tasks. Typically, both the input and the output of the job are stored in a file system. The framework takes care of scheduling tasks, monitoring them, and re-executes the failed tasks.

MapReduce applications specify the input/output locations and supply map and reduce functions via implementations of appropriate Hadoop interfaces, such as Mapper and Reducer. These and other job parameters comprise the job configuration. The Hadoop job client then submits the job (jar/executable, etc.) and configuration to the Job Tracker. After that, JobTracker assumes the responsibility of distributing the software/configuration to the slaves, scheduling tasks and monitoring them, and providing status and diagnostic information to the job client.

The Map/Reduce framework operates exclusively on `<key, value>` pairs. So this framework views the input to the job as a set of `<key, value>` pairs and produces a set of `<key, value>` pairs as the output of the job, conceivably of different types. This model originates from the map and reduces combinations' concepts in functional programming languages such as Lisp. A combination of Mapper and reducer together make a single Hadoop job. A Mapper is a mandatory part that can produce zero or more key/value pairs, whereas a reducer is an optional part. But the reducer can also produce zero or more combinations of key/value pairs.

The underlying system takes care of the partitioning of the input data, scheduling the program's execution across several machines, managing several machine failures, and managing inter-machine communication. Computation processing occurs on both the structured data stored in the files system and structured data in the database.

## MapReduce Components

Following are the MapReduce Components.

**Job:**

A job contains a compiled binary, that contains our mapper and reduces functions, implementation to those functions, and some configuration information that will drive the job.

**Input Format:**

This component determines how files are parsed into the MapReduce pipeline. Different inputs have different formats. Example: Image has a binary format, database format, record based input format.

## MapReduce Phases

**Split Phase (Input Splits):**

Input data are divided into input splits based on the InputFormat map task, which runs in parallel. In this phase, data stored in [HDFS](https://www.nitendratech.com/hadoop/hadoop-hdfs/) are split and sent to the mappers. The default input format is the text format, which is broken up into line by line.

**Map Phase**

Transforms the input, and splits it into key/value pairs based on user-defined code. The mapper gets all the data based on the keys and performs the user-defined work of the first phase of the MapReduce Program.

A new instance of the mapper is spawned in a separate Java Virtual Machine or JVM instance for each map task that is allocated for that job. Individual mappers do not communicate with each other.

**Intermediate Key/Value Pair**

Intermediate Key/Value Pairs are the output of the mapper, which gets stored in the local file system instead of the HDFS. As the output of the mapper is intermediate output, it's processed by the reducer to give the final output. Once the map task is completed, this intermediate output is deleted. It would be overkill to store the intermediate data in HDFS with replication.

**Combiner Phase**

It is the local reducer that runs after the mapper phase but before the shuffle and sort phase. It is optimization as it saves network optimization by running the local reducer. Generally, it is the same reduce code that runs after the map phase but before the shuffle and sort phase.

A combiner is like a mini reducer function that allows us to perform local aggregation of map output before it is transferred to the reducer phase. Basically, it is used to optimize the network bandwidth usage during a MapReduce task by cutting down the amount of data that is transferred from a mapper to the reducer.

**Shuffle and Sort Phase**

Moves map outputs to the reducers and sort them by key. It is carried out by the data node.

**Shuffle:** Once the Map tasks are completed, data nodes perform several map tasks and exchange the intermediate outputs with the reducers as needed. This process in which intermediate outputs of map tasks are partitioned, grouped, and moved to the reducer is known as shuffling.

**Sort:** It sorts the data and sends it to the reducers. MapReduce sorts the intermediate keys on the single node before sending the data to the reducer.

The shuffle and sort phase takes all the network bandwidth and uses data nodes to shuffle and sort the data.

**Reduce Phase:(Reducers)**

It aggregates the key/value pairs based on user-defined code. It acquires the sorted data and sorts the result. `reduce()` method is called once for each key assigned to a given reducer. A reducer function receives iterate input values from an output list. It combines these values together, returning a single value output.

In this phase, the `reduce(MapOutKeyType, Iterable, Context)` the method is called for each pair in the grouped inputs. The output which results from the reducer is not sorted.

```bash
(input) –>map(K1,V1) –> list(K2,V2) –>Shuffle/Sort–>reduce (k2,list(v2))–>list(k3,v3)–>(Output)
```

![MapReduce Hadoop in Action](/images/mapreduce_hadoop_in_action_book.png)

Figure: Hadoop MapReduce Framework (Hadoop in Action)

## Reducers Core Methods

Hadoop MapReduce reducer has three core methods through which it operates.

- `setup()`

This method configures various parameters like the input data size, heap size, distributed size, etc.

Below is the definition for this function.

```java
public void reduce(Key, Value, context)
```

- `reduce`

This method is called per key with the associated `reduce` tasks.

Below is the definition of this function.

```java
public void reduce (Key,Value,context)
```

- `cleanup`

This method cleans up all the temporary files that were generated during the reduce phase. This only runs once when the `reduce` job is finished.

Below is the definition of this function.

```java
public void cleanup (context)
```

## Configuration parameters required to run a MapReduce job

The main configuration parameters which users need to specify in the "MapReduce" framework are given below.

- Job's input locations in the distributed file system
- Job's output location in the distributed file system
- The input format of data
- The output format of data
- Class containing the map function
- Class containing the reduce function
- JAR file containing the mapper, reducer, and driver classes

Code that is written by the user is packaged into a single jar and is submitted for execution on the MapReduce cluster.

## References

[Apache Hadoop](http://hadoop.apache.org/)

Gautam, N. "Analyzing Access Logs Data using Stream Based Architecture." Masters, North Dakota State University,2018. [Available](https://library.ndsu.edu/ir/handle/10365/28001)

---

*Originally published on nitendratech.com on 2017-08-03, updated 2023-07-19.*
