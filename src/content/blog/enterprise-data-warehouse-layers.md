---
title: "Enterprise Data Warehouse Layers"
description: "The layers of an Enterprise Data Warehouse (EDW) explained — the Integration Layer in near 3NF, the Semantic Layer of views for BI access, and the Performance Layer for faster response times."
pubDate: 2019-06-15
category: "Data Engineering"
subcategory: "Data Warehouse"
---

There are many layers in [Enterprise Data warehouse(EDW)](https://www.nitendratech.com/database/enterprise-data-warehouse/) such as Integration/Semantic/Performance which serve their own purpose. In this blog post, we would go into detail about each of these layers.

## Integration Layer

The Integration Layer is the heart of the Integrated Data Warehouse. This layer contains the lowest possible granularity available from an authoritative source, in near Third Normal Form (3NF). The term 'near 3NF' is used because there may be requirements for slight denormalization of the base data. This is done on an exception basis. All 3NF tables will be defined using the natural (or business) keys of the data. Surrogate keys will not be used in 3NF tables.

Data in the higher layers of the architecture are derived from data in this layer. This layer includes all base business or corporate data that possesses business value to more than one business area, meaning that it has corporate value.

The source of the data in this layer is a combination of the operational systems, base data, master data, and possible applications that are resident on the EDW (e.g., Marketing Applications, Supply Chain applications). This layer can also have aggregation or summary tables that have broad business values.

## Semantic Layer

This layer consists of views that access the tables contained in the Integration Layer. Views are used to define a 'virtual' dimensional star schema model to hide the complexity associated with normalized data in the Integration layer.

A semantic data access layer provides ease of use for BI(Business Intelligence) developers and ad-hoc users. This layer presents data in a simple format that eliminates the most common joins of the physical tables. All applications and users consume/use the data via views.

### Semantic Views Benefits

- Simplification and Usability – It provides a business-specific view that reduces attributes and combines tables to simplify usability for applications and for Ad-hoc access. Views can be used to create dimensional structures that are easier for BI tools to access and use.
- Enables and implements security by limiting the data returned based on the user's access rights.
- It manages database locking.
- Provides a logical, more straightforward view of data for business users and applications; reduces the learning curve to use the data.
- Protects/isolate application code and user queries from changes to physical table structures.
- Allow joins to be done in the [database](https://www.nitendratech.com/database/learn-database/) in parallel instead of in the application to improve performance. This layer is intended to improve the usability of the data and make access to the data easy for both ad hoc users and BI Tools. All access to Integration Layer tables and Performance Layer tables will be through views. This is the external view of the Data Warehouse.

### Types of Semantic Views

#### Enterprise Views

This view is the One-to-One view on the base table and includes the below views.

- Views with write permissions for [ETL (Extract Transform Load)](https://www.nitendratech.com/database/etl-process/) and ELT (Extract Load Transform) applications
- Views that provide read access to base tables.
- Views that define corporate metrics and logical structures that are used across business areas.

#### Business Intelligence Reporting Views

This view is used by the reporting front end and most ad-hoc queries. It may be a combination of Enterprise and Performance Layer access. It may include views to create star Schemas or dimensional models to simplify data usage.

#### Security Views

Used to limit access to any sensitive data based on access rights

## Performance Layer

If performance requirements dictate better response time from these normalized tables in the Integration Layer, denormalization of these tables can be created in the Performance Layer as either physical tables or other performance structures such as aggregate join indexes (AGIs).

---

*Originally published on nitendratech.com on 2019-06-15, updated 2024-08-03.*
