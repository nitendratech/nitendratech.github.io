---
title: "What is Enterprise Data Warehouse(EDW)?"
description: "What an Enterprise Data Warehouse (EDW) is — its components, the star, snowflake, and fact constellation schemas, and data integration patterns: ETL, ELT, and CDC."
pubDate: 2018-07-07
category: "Data Engineering"
subcategory: "Data Warehouse"
---

A data warehouse or an Enterprise Data Warehouse(EDW) is a centralized storage platform that contains historical data as well as current data. It is a process for collecting, storing, and delivering decision-support data that is derived from a transaction/relational [database](https://www.nitendratech.com/database/relational-database).

As a Data Warehouse includes data from different sources, it helps to separate the analytics workload from the transaction workload. It is designed for query and analysis rather than transaction processing so that businesses can consolidate data from several sources. An ideal ETL-based data warehousing solution uses staging, data integration, and access layers to house its key functions.

In addition to being an [RDBMS (Relational Database Management System)](https://www.nitendratech.com/database/relational-database/), a data warehouse can often consist of an [ETL (Extract, Transform, and Load)](https://www.nitendratech.com/database/etl-process/) solution, an OLAP (Online Analytical Processing) engine, client analysis tools, and can manage the process of gathering data and delivering it to business clients.

## Data Warehouse Components

The data warehouse consists of three tightly integrated components.

- **Data tables:** The data tables store user data in a table.
- **System tables:** The system tables store metadata about the data in the data tables. Both the data and system tables are stored as files using the underlying operating system's file system.
- **SQL query engine:** The SQL query engine provides a SQL interface to store and analyze the data in the data tables.

## Data Warehouse schema and Modeling

### Star Schema

It is called a star schema because the diagram resembles a star, with points radiating from a center. The center of the star consists of a fact table, and the points of the star are the dimension tables. Usually, the fact tables in a star schema are in the third normal form (3NF) whereas dimensional tables are de-normalized. Even though the star schema is the simplest architecture, it is most commonly used nowadays and is recommended by Oracle. It is an important special case of snowflake schema and is more effective in handling simpler queries.

Below is an example of the Star Schema-based model for a Sales Department in a retail-based company.

![Star Schema Data Model](/images/Star_Schema_Data_Model_drawio.png)

### Snowflake Schema

The snowflake schema represents a dimensional model, which is also composed of a central fact table and a set of constituent dimension tables that are further normalized into sub-dimension tables. In a snowflake schema implementation, there is more than one table or view to store the dimension data. Separate database tables or views store data about each level in the dimension.

### Fact constellation schema

For each star schema, it is possible to construct a fact constellation schema (for example, by splitting the original star schema into more star schemas; each of them describing facts on another level of dimension hierarchies). The fact constellation architecture contains multiple fact tables that share many dimension tables.

The main shortcoming of the fact constellation schema is a more complicated design because many variations for particular kinds of aggregation must be considered and selected. Moreover, dimension tables are still large.

### When do you use Snowflake Schema?

Ralph Kimball, the data warehousing guru, proposes three cases where snowflake implementation is not only acceptable but is also the key to a successful design:

- When there is a Large customer dimensions-based table: For example, 80 percent of the fact table measurements involve anonymous visitors about whom you collect little detail and 20 percent involve reliably registered customers about whom you collect much detailed data by tracking many dimensions.
- Financial product dimensions for banks, brokerage houses, and insurance companies, because each of the individual products has a host of special attributes not shared by other products
- Multi-enterprise calendar dimensions because each organization has idiosyncratic fiscal periods, seasons, and holidays

![Data Warehouse](/images/data_Warehouse.png)

## Data Integration in Data Warehouse

#### Extract Transform Load (ETL)

In the ETL pattern of data integration, data is extracted from the data source and then transformed in flight to a staging database. Data is then loaded into the data warehouse. This pattern is strong for batch processing of bulk data.

#### Extract Load Transform (ELT)

In the ELT pattern of data integration, data is extracted from the data source and loaded to staging without transformation. After that, data is transformed within staging and then loaded to the data warehouse.

#### Change Data Capture (CDC)

The CDC pattern of data integration is strong in the processing of events. Database logs that contain a record of database changes are replicated near real-time at staging. This information is then transformed and loaded into the data warehouse. CDC is a great technique for supporting real-time data warehouses.

### References

[Enterprise Data Warehouse](https://en.wikipedia.org/wiki/Data_warehouse)

[Data Warehousing](https://dzone.com/refcardz/data-warehousing)

---

*Originally published on nitendratech.com on 2018-07-07, updated 2024-02-18.*
