---
title: "What is Data Lake? Feature and Architecture"
description: "What a data lake is, its schema-on-read architecture, key features, and the types of data it stores — structured, semi-structured, unstructured, and binary."
pubDate: 2019-08-01
category: "Data Engineering"
subcategory: "Data Lake"
draft: false
---

## Introduction to Data Lake

A Data Lake is a centralized data-centric storage architecture that is used for persisting a variety of [data](/blog/data-explained/) in its raw, unfiltered, and untransformed format. It is used as a single point of storage for all the raw and curated enterprise data sets. These data sets can be used for various use cases like reporting, visualization, analytics, and machine learning purposes.

Data Lake stores information from multiple access points. This platform is a distributed, highly scalable data store that can scale horizontally with changing data needs. We can set up Time-to-Live (TTL) for the entries in the Data lake to purge the data after the appropriate time if needed.

## Architecture of Data Lake

Data Lake can store a variety of data from web server logs, databases, social media, data from Customer Relationship Management (CRM), inventory data, sales transaction data, and third-party data in the batch and real-time fashion. We can apply different kinds of transformations to the data to create Business Ready Datasets (BRD) when needed. This type of architecture on Data Lake is known as "Schema on Read" architecture. In this, architecture, this schema is applied only when we want to read or use the data for a certain purpose. This is opposite to the "Schema on Write" approach used in traditional storage systems like Data Warehouse.

![Data Lake Architecture](/images/data_lake_architecture.png)

## Features of Data Lake

It is a cost-effective and prohibitive storage platform that captures and processes a vast amount of multi-structured data. Below are some important features of the Data lake.

- Cross-platform environment
- Geographically distributed across many data centers
- Provides highly scalable with low-latency and high fault tolerance performance
- Provides simultaneous read/write access to the data.

## Types of Data in Data Lake

- **Structured Data**

These data are in the form of rows and columns. It can be either a table in a hive warehouse or a BRD (Business Ready Datasets) of curated data sets.

- **Semi-Structured Data**

These are flat files(CSV, TSV), XML and JSON files.

- **Unstructured Data**

These are emails, documents, and PDF files with `.msg,docx,.xls and .pdf` extension.

**Binary Data**

These are images, audio, and video files coming from a variety of sources.

## Conclusion

In this blog post, we learned about Data Lake, its architecture, and its Features.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2019-08-01, updated 2024-08-04.*
