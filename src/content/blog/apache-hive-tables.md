---
title: "Types of Table in Apache Hive"
description: "The two types of tables in Apache Hive — managed (internal) tables and external tables — how each one treats the data and schema when the table is dropped, and when to use each type."
pubDate: 2021-06-15
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

[Apache Hive](https://www.nitendratech.com/hive/apache-hive/) has mainly two types of tables: Managed and External tables.

## Managed Table:

When hive creates managed (default) tables, it follows the “schema on read” principle and loads the complete file as it is, without any parsing or modification to the Hive data warehouse directory. And its schema information would be saved in a hive metastore for later operational use. When we drop an internal or managed hive table, both the data file from the data warehouse and the schema from the meta store is dropped.

Hive Internal or Managed tables are used when data is temporary, and we want Hive to completely manage the lifecycle of the table and data.

```sql
CREATE TABLE test_table(firstName String, lastName String);
```

## External Table:

When we create hive external tables, it does not load source files in the hive data warehouse; it only adds schema information in the metastore. When an external table is dropped, the hive does not remove the data from the source file but drops only the schema from the Hive meta store. We use it when data needs to remain in the underlying location even after a DROP TABLE.

```sql
CREATE EXTERNAL TABLE test_table(firstName String, lastName String);
```

## When to use external and internal tables in Hive

Use external tables when you have the below reasons.

- The data is also used outside of Hive. For example, data files are read and processed by an existing program that doesn’t lock the files.
- Data needs to remain in the underlying location even after a DROP TABLE. This can apply if you are pointing multiple schemas (tables or views) at a single data set, or if you are iterating through various possible schemas.
- The hive should not own data and control settings, directories, etc., you may have another program or process that will do those things.
- You are not creating a table based on an existing table (AS SELECT).

Use internal tables when you have the below reasons.

- The data is temporary
- You want Hive to completely manage the lifecycle of the table and data

---

*Originally published on nitendratech.com on 2021-06-15, updated 2024-08-03.*
