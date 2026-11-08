---
title: "What is Big Data and Why it is important to understand? Introduction and Properties"
description: "An introduction to big data — what data is, how the field grew out of Google's MapReduce papers and Apache Hadoop, the three types of data, and the five V's: Volume, Variety, Velocity, Veracity, and Value."
pubDate: 2017-06-08
category: "Data Engineering"
subcategory: "Big Data Fundamentals"
draft: false
---

Before we dive into Big data, we need to understand what is data

## What is Data?

Data is a collection of facts or figures that is gathered for analysis or storage purposes. This collection can be numbers, words, measurements, observations, or just descriptions of various things. Data when stored in a computing device can be easily moved for processing and storage purposes. When data provides a certain meaning, it becomes information.

In terms of computers, there can be multiple types of data. Some common types are listed below.

- Text or String
- Boolean Value (True/False)
- Number (Integer or Floating Point Number)
- Picture and Images
- Audio and Video Files

## What is Big Data?

"Big data" refers to datasets whose size is beyond the ability of typical database software tools to capture, store, manage, and analyze. Here the size of the data is subjective as it increases over time.

According to the [Institute of Electrical and Electronics Engineers (IEEE) Big Data](https://bigdata.ieee.org/), big data entails a process of collecting storing, processing, and analyzing immense quantities of data that is different in structure to produce insights that are actionable and value-added.

We assume that, as technology advances over time, the size of data sets that qualify as big data will also increase. Also note that the definition can vary by sector, depending on what kinds of software tools are commonly available and what sizes of data sets are common in a particular industry. With those caveats, big data in many sectors today will range from a few dozen terabytes to multiple petabytes (thousands of terabytes).

Big data is a problem of dealing with structured, semi-structured, and unstructured data sets so large that they cannot be processed by using conventional relational database management systems. It includes different challenges such as below.

- Storage
- Search
- Analysis
- Visualization of the data
- Finding business trends
- Determining the quality of scientific research
- Combatting crime
- Other use cases that would be difficult to derive from smaller datasets.

In other words, Big data refers to the problem of having data so big that one single node/computer cannot handle it. With billions of people in the world with millions of devices and businesses connected by the internet, you can imagine how much would be produced on a second, minute, hourly, monthly, or yearly basis.

Data that constitutes Big data has five characteristics namely Velocity, Variety, Volume, Veracity, and Value.

![Big Data](/images/big_data-3406108_1920.jpg)

Figure: Big Data

## History of Big Data Framework

Google was the first organization that dealt with the massive scale of data when it decided to index internet data to support its search queries. To solve this problem, Google built a framework for large-scale data processing using the map and reduce model of the functional programming paradigm. Based on technological advancements that Google made related to this problem, they released two academic papers in 2003 and 2004. Based on the readings of these papers, Doug Cutting started implementing the Google MapReduce platform as an Apache Project. Yahoo hired him in 2006 where he supported the Hadoop Project.

Apache Hadoop is an open-source framework that is used for processing large data sets across clusters of low-cost servers using simple MapReduce programming models. It is designed to scale up from one server to multiple servers, each of them offering computation and storage at the local level. Hadoop's library is designed in such a way that high availability is obtained without solely relying on the hardware. Failures are detected at the application layer using Hadoop and handled well.

Hadoop mainly consists of two components.

- A distributed file system is known as [HDFS](/blog/hadoop-hdfs/) (Hadoop Distributed File System)
- [MapReduce](/blog/hadoop-mapreduce-framework/) programming model to process that data.

For details on this framework and related components, refer to my other blog post on the Hadoop MapReduce framework.

## Types of Data

We can broadly categorize the data into three categories.

### **Structured Data**

It has a predefined schema and represents data in row and column file formats. Below are some important examples of sources of structured data.

- Data Warehousing
- Database data
- Enterprise Resource Planning (ERP)
- Customer relationship management (CRM)

### **Semi-Structured**

It is a type of self-describing structured data that does not conform with the data types as in relational data. It contains some tags or related information that separate it from unstructured data. Some examples of semi-structured data are Extensible Markup Language (XML) and JSON data formats.

### **Unstructured Data**

These are data types that do not have a predefined schema or data model. With the ambiguity in a formal pre-defined schema, traditional applications have a hard time reading and analyzing unstructured data. Some examples of unstructured data are video, audio, and, binary files.

## Five V's of Big Data

Big data can be categorized based on five properties. There are five V's of Big Data V's namely Volume, Variety, Velocity, Veracity, and Value that are important to understand.

![Five_V_Big_Data](/images/five_Vs_Big_Data.png)

**Fig: Big Data Five V's**

**Volume:** Data have grown at exponential growth in the last decade as web evolution has brought more devices and users into the internet grid. The storage capacity of the disk has increased from megabytes to terabytes and petabytes scale as enterprise-level applications started producing data in large volumes.

**Variety:** The explosion of data has caused a revolution in data format types. Most of the data formats such as Excel, database, Comma Separated Values (CSV), and Tab Separated Values (TSV) files can be stored in a simple text file. There is no predefined data structure for big data because of which it can be in either structured, unstructured, or semi-structured format.

Unlike the previous storage mediums like spreadsheets and databases, data currently comes in a variety of formats like emails, photos, Portable Document Format (PDF), audio, videos, monitoring devices, etc. Real-world problems include data in various formats that pose a big challenge for technology companies.

**Velocity:** The explosion of social media platforms over the internet caused an explosion in the growth of data in comparison to data coming from traditional sources. There has been a massive and continuous flow of big data from the sources like one below within the last decade.

- Social media websites
- Mobile devices
- Various businesses or Trade
- Machines data
- Sensors data
- Web servers
- Human interaction.

Modern people are hooked to their mobile devices all the time updating the latest happenings in their social media profiles, leaving a huge electronic footprint. These electronic footprints are collected every second at high speed on a petabytes scale.

**Veracity:** It is not always guaranteed that all the data that gets produced and ingested into the big data platform contains clean data. Veracity deals with the biases, noise, and abnormality that might arrive with data. It reflects one of the biggest challenges among the analysts and engineers to clean the data. As the velocity and speed of data keep on increasing, the big data team must prevent the accumulation of dirty data in the systems.

**Value:** It takes a lot of time and resources to get data in your big data cluster. We need to be sure that organizations are getting value from the data collected.

## Conclusion

In this blog post, we read about what big data is, and the history of Big data. We also read about the five properties Big data possesses and the types of data that are part of big data.

Please share the article on social media and leave a comment with any questions or suggestions.

## References:

Gautam, N. "Analyzing Access Logs Data using Stream Based Architecture." Masters, North Dakota State University, 2018. [Available](https://library.ndsu.edu/ir/handle/10365/28001)

---

*Originally published on nitendratech.com on 2017-06-08, updated 2024-02-18.*
