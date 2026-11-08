---
title: "What is Apache Pig? Architecture and Components"
description: "An introduction to Apache Pig — what it is, its architecture and processing phases, its two main components (Pig Latin and the Pig engine), its limitations, its advantages over raw MapReduce, and its common use cases."
pubDate: 2018-09-23
category: "Data Engineering"
subcategory: "Apache Pig"
draft: false
---

Apache Pig is a platform for analyzing [Big data sets](https://www.nitendratech.com/bigdata/big-data/) that consists of a high-level language for expressing data analysis programs, coupled with infrastructure for evaluating these programs. The data flow in a pipeline step by step and data can be stored at any point in the pipeline, It allows users to analyze large unstructured data sets by transforming and applying functions on the data set.

It can be used to process complex data flows and extend them with custom code. A job can be written to collect web server logs, use external programs to fetch geolocation data for the users' IP addresses, and join the new set of Geo-located web traffic to click maps stored as JSON, web analytic data in CSV (comma-separated values) format, and spreadsheets from the advertising department to build a rich view of user behavior overlaid with advertising effectiveness.

## Apache Pig Architecture and Phases

Apache Pig mainly has an intermediate layer that converts the Pig Latin Scripts into the MapReduce Jobs. The main Phases in the intermediate layer are

**(a)Query Parsing:** In this phase, the pig command is parsed as a query.

**(b)Semantic Checking:** In this phase, the syntax of the pig script is checked.

**(c)Optimization:** In this phase, Pig tries the easiest and fastest way to get the data.

**(d)Physical Planning:** In this phase, pig script is translated

**(e)Map Reduce Processing:** In this phase, the script is converted into MapReduce code and processed.

**(f)Logical validation:** It is not possible in pig, but semantic checking is possible in Pig

![Pig Architecture](/images/pig-architecture.jpg)

Figure: Pig Architecture

## Components of Pig

Apache Pig is a scripting language that can explore huge data sets with the help of an engine that executes data flows in parallel for Hadoop.

There are two main components in Apache Pig

- **Pig Latin**: Language for expressing data flows
- **Pig Engine:** It converts Pig Latin operators or transformations into a series of MapReduce jobs and executes. It supports various execution modes, as explained in the subsequent section.

## Limitations of Pig

Below are some limitations Apache pig has when its architecture and working mechanism are compared.

- Apache Pig does not support random reads or queries that give low latency on the order of tens of milliseconds.
- As low-latency queries are not supported in Pig, it is not suitable for OLAP and OLTP applications.
- Apache Pig does not support random writes to update a small portion/delta amount of data. All writes are bulk and Streaming writes as like MapReduce.

## Advantage of Apache Pig over MapReduce

Apache Pig provides a scripting language for describing operations like reading, filtering, transforming, joining, and writing data – exactly the operations that [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) was originally designed for.

Rather than expressing these operations in thousands of lines of Java code that uses MapReduce directly, Apache Pig lets users express them in a language, not unlike a bash or Perl script.

Pig is excellent for prototyping and rapidly developing [MapReduce-based](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) jobs, as opposed to coding MapReduce jobs in Java itself.

## Use cases of Apache Pig

- Data processing for web search platforms.
- Ad hoc queries across large data sets.
- Rapid prototyping of algorithms for processing large data sets.
- Complex data flows to process [web server logs](https://www.nitendratech.com/technology/log-file/), web analytic data in CSV format, and spreadsheets from the advertising department

## Conclusion

In this blog post, we learned about Apache Pig, its architecture, and its components.

Please share this blog post on social media and leave a comment with any questions or suggestions.

### Reference:

[Apache Pig Documentation](https://pig.apache.org/)

[Hadoop Definitive Guide](https://www.amazon.com/_/dp/1491901632?tag=oreilly20-20)

[Hadoop Tutorial Info](http://hadooptutorial.info/apache-pig-overview/)

---

*Originally published on nitendratech.com on 2018-09-23, updated 2024-02-18.*
