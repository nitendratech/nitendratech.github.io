---
title: "Top Big Data Interview Questions"
description: "Common big data interview questions and answers for Data Engineer and Software Engineer roles — what big data is, its sources, the five Vs, types, platform components, ingestion, storage, processing, commodity hardware, and clusters."
pubDate: 2021-12-23
category: "Data Engineering"
subcategory: "Interview Questions"
draft: false
---

In this blog post, we will see some common and repeated big data interview questions that are asked when searching for a job as a Data Engineer or Software engineer.

**Question: What is Big Data?**

**Answer:** “Big data” refers to datasets whose size is beyond the ability of traditional database software tools to capture, store, manage, and analyze. It is also the voluminous amount of structured, unstructured, or semi-structured data, that has a huge potential for knowledge extraction. It is characterized by different properties such as volume, Variety, Velocity, Veracity, and Value that play an important role in classifying data as big data. This property and the nature of the data define if it’s big data or not. Here the size of the data is subjective as it increases over time.

**Question: What are the different sources of Big Data? Where does Big Data come from?**

**Answer:** Although Big data originates from multiple sources, below are the most common ones.

- IoT (Internet of Things) based sensors
- Social Media posts and profiles
- Financial Data such as credit card numbers, Bank Accounts, and Credit Score
- E-Commerce Website
- Clickstream Data/Website Interactions
- Online Purchases and transaction data
- Smartphones and Smartwatches
- GPS based data
- Telecommunication Company CDR (Call Detail Record) data
- Internet cookies
- Email-based Tracking

**Question: What are the Different Vs of Big Data?**

**Answer:** There are five V’s of Big Data that play an important role in classifying data as big data. The explosion of data has caused a revolution in the data format types.

- **Volume:** Data have grown at exponential growth in the last decade as web evolution has brought more devices and users into the internet grid. It is related to the volume or the size of data that organizations collect every day.
- **Variety:** The explosion of data has caused a revolution in data format types. It is related to different types of data that are collected by the organization. Ex: CSV (Comma Separated Values), TSV (Tab Separated Values), XML (Extensible Markup Language), etc.
- **Velocity:** The explosion of social media platforms over the internet, caused an explosion in the growth of data in comparison to data coming from traditional sources. There has been a massive and continuous flow of big data from sources like social media websites, mobile devices, businesses, machine data, sensor data, web servers, and human interaction within the last decade. It is related to the speed by which we get the data.
- **Veracity:** There is no guarantee that all the data getting produced and ingested into the big data platform comprises clean data. Veracity deals with the biases, noise, and abnormalities that might arrive with data. It is related to how clean the data is when it’s ingested into the various data platforms of an organization.
- **Value:** It takes a lot of time and resources to get data in your big data cluster. We need to be sure that organizations are getting value from the data collected.

**Question: How is Apache Hadoop related to Big Data?**

**Answer:** Apache Hadoop is an open-source framework for storing, processing, and analyzing complex unstructured data sets that are classified as big data. It is also used to derive insights and intelligence from them.

**Question: What is Big Data Categorization?**

**Answer:** All of these sources of Big data can be categorized into three main sections.

- Machines
- People
- Organizations

**Question: How much Data exists out there?**

**Answer:** It is estimated that by 2025, there will be more than 150 Zettabytes of data collected worldwide.

**Question: What are the types of Big Data?**

**Answer:** We can broadly categorize big data into three categories, namely structured, Semi-structured, and unstructured data.

- **Structured data:** It has a predefined schema and represents data in row and column file format.
- **Semi-structured:** It is a type of self-describing structured data with both structured and unstructured data characteristics.
- **Unstructured data:** These are data types that do not have a predefined schema or data model.

**Question: What are the various steps or components of the Big Data Platform or Big Data Solution?**

**Answer:** A typical Big Data Platform has three components using which we can deploy a big data solution.

- Data Ingestion
- Data Storage
- Data Processing

A development team related to a big data platform needs to follow the above steps to deploy a big data model.

**Question: What is Data Ingestion?**

**Answer:** In a data ingestion process, we collect the data from the upstream sources and ingest it into the data platform. Upstream sources can be within an organization or from outside the organization like social media platforms, business applications, log files, Call Detail Records (CDR), Data warehouses, etc.

**Question: What is Data Storage?**

**Answer:** Once the data is collected and ingested in the Data Ingestion Phase, it is stored in the data platform. We can store the data using a distributed storage platform like Hadoop Distributed File System (HDFS) or Amazon Simple Storage Service(S3).

**Question: What is Data Processing?**

**Answer:** Once the data is ingested and stored, it needs to be processed to do the analysis and perform visualization on top of it. For users to do this, we can use Big data tools like Hadoop MapReduce, Apache Spark, Apache Hive, Apache Pig, etc.

**Question: What are Different data processing techniques as part of Big Data?**

**Answer:** With the help of big data processing methods, we can analyze big data sets at a massive scale. In reality, data is collected in different modes, as given below.

- **Batch Processing**

This is offline-based processing, which is mainly useful for Business Intelligence-based reporting.

- **Real-Time Stream Processing**

This type of processing is done on the most recent slice of data. It is mainly done for data profiling, real-time threat monitoring, and detecting fraud from financial transaction data.

These two use cases are the most popular in the big data domain.

**Question: What do you mean by Commodity Hardware in the context of Big Data?**

**Answer:** Commodity hardware refers to a hardware resource that needs the minimum resources and components needed to run Apache Hadoop and related tools. This hardware is not vendor-specific hardware, which makes it easier to buy hardware for their Hadoop cluster.

**Question: What do you mean by Cluster?**

**Answer:** In the Computing world, a cluster is a group of computers that are interconnected to work together to support software or applications. If we want to process datasets that have a large amount of volume, we need to process them in a cluster.

---

*Originally published on nitendratech.com on 2021-12-23, updated 2024-04-07.*
