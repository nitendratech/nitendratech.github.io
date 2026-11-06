---
title: "What is Data Modelling? Overview and Concepts"
description: "What data modelling is and why it matters — the three techniques (conceptual, logical, and physical data modelling) and the advantages of data modelling."
pubDate: 2022-02-09
category: "Data Engineering"
subcategory: "Databases"
---

Data Modelling techniques have been around in the IT (Information Technology) sector for many decades. It is creating a visual representation of different data points and structure connections. The main goal of data modelling is to illustrate the relationship between the data types, the way the data is grouped and organized, and to know about the types of data being used. It helps the business and technologist to understand the data being used and its importance from a business point of view.

Data modelling mainly uses standardized schemas and formal techniques. They provide a consistent means to define and manage the data across the organization or that particular line of business(LOB). They are the living document that changes and evolves whenever business requirements change. Many IT-based organizations have a unified data platform where they catalog all the data models across all LOBs. These unified versions of data models can be shared with different vendors, and partners across other LOBs within that organization.

## Types of Data Modelling Techniques

There are mainly three types of Data Modelling Techniques.

- Conceptual Data Modelling
- Logical Data Modelling
- Physical Data Modelling

### Conceptual Data Modelling

This data model is at the initial phase of the project, where we need a simple and abstract model. It has the basic business rules, entity details, and the data that we plan to cover.

### Logical Data Modelling

In this data model, we have more information in comparison to the conceptual model. It has more relational factors, data attribute details, and other details. Data attributes are generally given the business name and description. This is useful in data warehousing or ETL (Extract, Transform, and Load) projects where the underlying database or the system might change. Example: A logical data model designed for Oracle SQL (Structured Query Language) should also work for Teradata or a SQL Server database.

### Physical Data Modelling

In this phase, we define the basic column-level details like column name, data type, description, and security details. We need details such as if the column has any confidential information or a particular method to generate it. It constitutes the database management system properties and rules. At this point, we model the exact DDL we are planning for deployment to our target system. This physical model depends upon the target system, such as an SQL Server or an Oracle SQL.

## What are the Advantages of Data Modelling?

There are many advantages of Data Modelling. Below are some of them.

- It helps organizations to manage their data properly.
- It helps to visualize the data and its flow. This helps others to understand what's happening with the data from a management perspective.
- It helps to properly communicate the data and its usage across the different LOBs.
- It helps maintain the data quality as we define the data attribute and other properties beforehand.
- Data Models help to organize the data even before we build the database.

## Conclusion

In this blog post, we learned about what data modelling is and its types. We also learned about the advantages of Data modelling.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2022-02-09, updated 2023-05-28.*
