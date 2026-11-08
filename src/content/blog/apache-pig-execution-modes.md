---
title: "What are Apache Pig execution Modes?"
description: "The Apache Pig execution modes explained — local, Tez local, Spark local, MapReduce, Tez, and Spark modes, the command to run each one, and the three ways to run Pig commands: interactive, batch, and embedded."
pubDate: 2020-05-06
category: "Data Engineering"
subcategory: "Apache Pig"
---

When the Big Data developers develop the [Apache Pig](/blog/apache-pig/) scripts and execute them, the code gets compiled through the Pig Latin compiler. Once the code gets compiled, it goes through various stages to get the results. We can run Apache Pig Latin code and Pig statements using various modes. We will go through all the Apache Pig execution modes in detail in this blog post.

| Execution Modes | Interactive | Batch |
| --- | --- | --- |
| **Local Mode** | Yes | Yes |
| Tez Local Mode | Experimental | Experimental |
| **Spark Local Mode** | Yes | Yes |
| **MapReduce Mode** | Yes | Yes |
| Tez Mode | No | Yes |

*Apache Pig Execution Modes*

With the latest version of Apache Pig, it supports six execution modes or executives. As some of these modes are experimental modes, it might be available for all the versions.

## Local Mode

In order for users to run Pig in local mode, we need access to a single machine. All the files are installed and run using the local host and file system.

Use the below command to run pig in local mode.

```bash
pig -x local
```

It is useful to debug and check any syntactical error from pig script using a small subset of data.

## Tez Local Mode

It runs Pig in local mode with Tez as a runtime engine. Use the below command to run pig in local mode with Tez as a runtime engine.

```bash
pig -x tez_local
```

**Note:** As Tez local mode is experimental, there might be some queries that can just error out on bigger data in local mode.

## Spark Local Mode

Spark Local Mode – It runs pig in local mode with Apache Spark as a runtime engine.

```bash
pig -x spark_local
```

Note: Spark local mode is experimental. There are some queries that just error out on bigger data in local mode.

## Map Reduce Mode

We use this mode to run Apache Pig in [MapReduce](/blog/hadoop-mapreduce-framework/) mode. It is the default mode in Pig, which needs a Hadoop cluster and HDFS installation

```bash
#Two ways to invoke pig
pig
pig -x mapreduce
```

## Tez Mode

It is used to run Pig in Tez mode. Apache Hadoop needs to be installed in the cluster and HDFS needs to be configured to use this. Use `pig -x tez` to run Pig in this mode.

```bash
pig -x tez
```

## Spark Mode

It is used to run Pig in [Spark](/blog/apache-spark/) mode. We need access to Spark, Yarn, or Mesos cluster, and HDFS installation to run Pig in Spark mode. We also need to enable Yarn auxiliary service to use this mode.

```bash
pig -x spark
```

## Ways to run Apache Pig Commands

We can run the Pig commands in three ways, as given below.

### Interactive Shell (Grunt Shell)

We can run Apache pig in interactive mode using the grunt shell. It gives the output of a Pig Latin statement in the shell itself using the dump operator.

### Batch Mode using Pig Script

This is the batch mode of Apache Pig by writing Pig Latin scripts in a file ending with `.pig` extension

### Embedded Mode

Apache Pig provides the mechanism of writing your own Program in Java or another language, known as User Defined Mode.

## Conclusion

In this blog post, we learned about Apache Pig, and its different execution modes

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2020-05-06, updated 2022-06-21.*
