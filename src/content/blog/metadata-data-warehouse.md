---
title: "What is Metadata in a Data Warehouse?"
description: "What metadata is in a data warehouse — the benefits of using it, the technical, business, and operational types, and the major kinds of metadata collected for business users."
pubDate: 2019-04-28
category: "Data Engineering"
subcategory: "Data Warehouse"
---

Metadata is the information that describes other data or, simply, it is data about the [data](https://www.nitendratech.com/datascience/data-explained/). It is the descriptive, administrative, and structural data that defines a firm's data assets. It specifically identifies the attributes, properties, and tags that will describe and classify information. Furthermore, it represents different data information such as type of asset, author, date originated, workflow state, and usage within the Enterprise, among numerous others. Metadata in the data warehouse is collected to improve the support of the environment and to orient users to the meaning of the data.

## Benefits of Using Metadata

- Provides orientation to new team members on both the technical and business teams.
- Promotes usage by providing context and content information.
- Promotes a common understanding among users.
- Provides documentation on agreements about the usage of the data.

## Types of Metadata

Metadata in a data warehouse system can be divided into three categories, namely technical/business and operational metadata.

### Technical Metadata

Technical metadata essentially includes system technical information such as how data is sourced, defined, loaded, transformed, and managed.

It consists of the following information

- Data Structures for Organization use
- Information about the Partition column in the Database and indexes
- Logical and Physical Data models
- Details related to Database Tables, Column Names/Properties, Database Object properties, and data storage
- Description of the ETL (Extract, Transform, Load) process
- Data Dimensions and measures
- Access policies such as permission/rights/protocols.

### Business Metadata

It includes data that assist users in understanding the business context, meaning, and appropriate utilization of the data. It links technical metadata to business requirements. Furthermore, it mainly includes business terms, definitions, examples of usage, business rule policies, and constraints. Sources for the business data can be internal/external business personal Subject-Matter Experts (SMEs), and data stewards. Business metadata should have the business rules and details that are explained in an austere language, rather than using any complex Jargon.

Business metadata consists of flowing information.

- Business Rules
- Business Requirement
- Data Elements/Entities and Term Definition
- System of Record details
- Business and Project related metrics

### Operational Metadata

It includes data that helps in the data of today's job execution and operation. It consists of the following information

- Data movement
- Source to target systems.
- Batch application execution/service information
- Job Frequency
- Recovery and backup information
- Any abnormality in the schedules
- Data Quality information about the rejected rate of records

## Major types of Metadata collected

We can collect the following major types of Metadata to make them available for business users.

### Source to Target Mappings

This metadata includes the transformation rules that are used to convert and load operational data into the data warehouse.

### Data Load Scheduling dependencies and SLAs (Service Level Agreements)

This document provides information on how the data is loaded and includes load dependencies and Service levels for when data is available.

### Data Security & Usage Guidelines

This metadata is provided by data stewards who own the data and provide the requirements for data security and any usage guidelines for the data. The security requirements are implemented in the database and the usage guidelines are available for all users. Security Views will control access to data by LOB (Line of Business).

### Logical Data Model

This metadata provides the core attributes, entities, and relationships and helps users understand the data that is available for use.

### Physical Data Model (PDM)

This metadata provides the physical constructs that are used to distribute and access the data and provide the physical table structures in the Integration Layer. This model shows the structures that help development teams produce performant code.

### Views

This metadata provides information on what views exist and helps the user find the view that meets their needs. Thus, it improves the maintainability of the Views.

### Corporate Metrics

The business and technical definitions of corporate metrics are defined. These are metrics that have meaning to more than one department. These metrics are available in the Semantic Layer. Whenever users utilize this data, they should make sure they comply with the definitions provided.

## Conclusion

In this blog post, we learned about metadata and how it's handled in data warehouse applications. We also learned about the various types of metadata collected in data warehouse applications.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2019-04-28, updated 2024-02-18.*
