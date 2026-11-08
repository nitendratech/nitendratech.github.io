---
title: "Important Data Warehouse Interview Questions"
description: "Important data warehouse interview questions and answers covering what a data warehouse is, its three-tier architecture, metadata, schemas, tables and views, integrity constraints, indexes, surrogate keys, and data modeling techniques."
pubDate: 2023-11-15
category: "Data Engineering"
subcategory: "Interview Questions"
draft: false
---

In this blog post, we will go over the Important data warehouse interview questions that are asked during interviews.

**Question: What is a Data Warehouse?**

**Answer:** A [data warehouse](/blog/enterprise-data-warehouse/) is a repository of integrating data that are extracted from different data sources.

**Question: What are the different tiers in Data Warehouse architecture?**

**Answer:** The three tiers in the Data warehouse are as follows.

- Upper Tier
- Middle Tier
- Bottom Tier

**Question: What is Metadata or Data Dictionary?**

**Answer:** Metadata or Data Dictionary contains information about the data. It contains information about the graphs, their related files, and other information such as project-related information.

**Question: What is Schema?**

**Answer:** A Schema is a collection of database objects. One database can have multiple schemas depending upon the user accessing the database.

**Question: What is a Table Space?**

**Answer:** A Table Space is a logical storage unit within the database

**Question: What is a Table?**

**Answer:** A table is a basic unit of data storage in a database. The table stores the data in the form of rows and columns, which are also accessible by users using the database.

**Question: What is a View in a Data warehouse?**

**Answer:** A view is a virtual table within a database that is created from a select query. This SELECT query identifies the columns and table rows for the view,

**Question: What are Clusters?**

**Answer:** Clusters are groups of one or more tables physically stored together to share common columns and are often used together.

**Question: What is integrity Constraint?**

**Answer:** Integrity constraints are the protocols that define a business rule for a column of a table.

**Question:** What are the different types of Integrity Constraints in a Data warehouse?

**Answer:** In a Data warehouse, there are five types of Integrity Constraints. They are listed below.

- Null
- Primary Key
- Foreign Key
- Check

**Question: What is an Index?**

**Answer:** An index is a data structure associated with a table that is created to increase the performance of data retrieval from a Table. It can be created from one or more columns of a table.

**Question: What are the different Types of Data Warehousing?**

**Answer:** There are three types of data warehousing which are listed below.

- Enterprise Data warehousing
- ODS (Operational Data Store)
- Data Mart

**Question: What is the Surrogate key in Data Warehousing?**

**Answer:** A surrogate key is a unique identifier generated and assigned to each row in a data warehousing table. They are generally used to link dimension tables to fact tables.

**Question: What do you understand by Data modeling?**

**Answer:** Data modeling is the process of creating a visual representation of different data points and structure connections to illustrate the relationship between the data types, the way the data is grouped and organized, and to know about the types of data being used. It helps the business and technologist to understand the data being used and its importance from a business point of view. It allows the modeling of the data according to the needs and business requirements provided by the stakeholders.

**Question: What are the different types of Data Modelling Techniques?**

**Answer:** There are mainly three types of Data Modelling Techniques.

- Conceptual Data Modelling
- Logical Data Modelling
- Physical Data Modelling

**Question: What are various design schemas available in Data Modelling?**

**Answer:** There are two design schemas available in the data modeling process.

- Snowflake schema
- Star Schema

**Question: What is a conceptual data model?**

**Answer:** A conceptual data model is a high-level representation of data that focuses on the relationships between entities and their attributes.

**Question: What is a logical data model?**

**Answer:** A logical data model is a detailed representation of data that includes entities, attributes, and relationships, but is independent of any specific database management system or technology.

**Question: What is a physical data model?**

**Answer:** A physical data model is a detailed representation of data that includes specific details about how the data will be stored in a particular database management system or technology. This physical modeling can vary from one database system to another database system.

---

*Originally published on nitendratech.com on 2023-11-15, updated 2024-02-19.*
