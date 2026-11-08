---
title: "What is ETL (Extract, Transform and Load) Process?"
description: "What ETL is and how it works — the extract, transform, and load steps explained, common data sources and transformations, and popular ETL tools like Informatica, Talend, AWS Glue, and Apache Spark."
pubDate: 2021-08-18
category: "Data Engineering"
subcategory: "ETL"
---

## Understanding ETL (Extract, Transform, and Load)

ETL is an abbreviation of the Extract, transform, and load. It is a process that is used to extract data from various sources and then transform the data into a consolidated data warehouse format.

In the ETL process, data is collected from multiple operating systems and then cleansed, transformed, and stored in a data warehouse. But in today's modern architecture, it is a universal process, not only to be used in the data warehouse. But, It can be used to share data between two different systems and transform data from one format to another.

In general, ETL is used by most organizations to do the below task.

- Extract data from Source System
- Cleanse the data to improve data quality and improve consistency in data
- Load the data in the target system

These tasks are called Extract, Transform, and Load. These processes might or might not be run in sequential order. The ETL process is the backbone of the data warehouse, which happens in the background. Although it is not visible to business users, it uses more than 75 percent of the resources needed for maintaining the data warehouse.

## How does ETL Work?

There are mainly three steps in ETL that complete it. We will go over each of them one by one.

### Extraction

Extraction is the first part of the ETL process involves extracting the data from various sources. This is the most challenging and time-consuming aspect of ETL as data needs to be extracted correctly which would be used by the downstream process (Transform and Load). In this step, we need to obtain the data efficiently, making sure that we have minimal impact on the source system as much as possible.

When creating a data warehouse in an organization, data is consolidated from different sources, It might be possible that these data sources might keep data in different formats. Some important data sources are given below.

- [Relational database (SQL)](/blog/learn-sql/)
- [Non-Relational Database (NoSQL)](/blog/nosql-databases/)
- API (Application Programming Interface) Call
- Flat files like CSV (Comma Separated Values) and TSV (Tab Separated Values)
- Semi-Structured files like JSON and XML
- Files having Parquet, ORC, Protocol Buffer, and binary format

### Transformation

Once the data is extracted, it undergoes various transformations depending on the business requirement. This step involves various transformations to ensure that the quality and integrity of data are maintained. Some data sources might not need any transformation at all, whereas some might need simple or complex transformation.

Some common transformations are listed below.

- Data cleansing/validating data to check data quality
- Sorting the data into columns or rows to improve usability and searchability.
- Selecting the needed columns and applying business rules to data.
- Create data validation rules that can be automated to check data for quality and accuracy.
- Translating the coded Values.
- Encoding the Free-form Values if needed
- Rounding off an existing decimal number into a whole number
- Derive column values from existing values
- Sorting and removing duplicates
- Join data from multiple sources and apply to the Merge operation
- Aggregation (roll up/Summarize/Calculate Sum)
- Generate Unique or Surrogate-Key values
- Transpose/Pivot operations to improve usability and searchability.
- Splitting Columns into multiple columns.
- Lookup/ Data Validation.
- Concatenating two columns.

### Load

In the Load step of the ETL process, previously extracted and transformed data is loaded into the target platform. This target platform can be a database, a Hadoop Distributed File System (HDFS), an Amazon S3 bucket, or any other platform. This loading of data is done every day on a batch basis for certain dates.

## Available ETL tools

The choice of ETL tool depends upon the requirement and the organization policies, data size, regulatory and privacy reasons; use of on-premise or cloud-based cluster, and availability of talent in that organization. I have tried to list down some popular tools by market size and popularity.

- Teradata
- Vertica
- Informatica Power Center
- Talend
- Pentaho Data Integration
- Oracle Data Integrator
- AWS Glue
- Apache Spark when used with HDFS/Hive
- Xplenty
- Google Data Flow
- SnowFlake
- Apache spark when used with HDFS and S3

---

*Originally published on nitendratech.com on 2021-08-18, updated 2023-06-25.*
