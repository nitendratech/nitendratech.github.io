---
title: "What are Database Indexes?"
description: "What a database index is in SQL, how indexes are stored, how to create indexes in MySQL with a worked example, and the types of indexes — unique, clustered, and non-clustered."
pubDate: 2021-03-10
category: "Data Engineering"
subcategory: "Databases"
---

## What is a Database Index in SQL?

An index in the [database](https://www.nitendratech.com/database/learn-database/) is a data structure that has content that can point to the location of the data in the table. We can create an index using one or more columns of a table. It optimizes retrieval, searches, insertion, and deletion in the database. The main goal of the index is to make it faster to search through table records and find the row or group of rows as needed. An index can be applied to a column or a view. We can also have a table with single or multiple indexes.

The database can use available indexes to locate the requested rows efficiently. Indexes are useful when [SQL (Structured Query Language)](https://www.nitendratech.com/database/learn-sql/) query needs to find a specific row or range of rows. They do not have any logical or physical relation to the data in the table. It means that we can create and drop indexes with no effect on the tables or other indexes. Applications will function normally when we drop an index.

## How is the Index stored in the Database?

A database index is related to a specific table and might consist of one or more keys. These keys are based on table columns, which are the table's primary keys or keys of search columns. These key values are stored in sorted order so that read operations happen quickly.

When an index is created, it reads the columns and develops a relevant data structure so that it minimizes the number of data comparisons. Although the creation of an index makes the read operation fast, it will create an overhead on the data modification operation such as `create`, `delete` and `modify` as an index has to be created every time the data is inserted.

## How do I create an Index query in SQL?

Let's take an example in the MySQL database and see how indexes are created. I would be creating a table called, `Countrydetails` which has the country name and continent to which it belongs. You are free to create your own table.

First, create a database and table.

```sql
CREATE DATABASE IF NOT EXISTS testIndexDB;

USE testIndexDB;

-- CREATE a NEW TABLE
CREATE TABLE IF NOT EXISTS COUNTRYDETAILS(
id INTEGER,
COUNTRY VARCHAR(20),
CONTINENT VARCHAR(20),
INDEX (COUNTRY, CONTINENT),
INDEX(COUNTRY),
Index (CONTINENT)
);
```

Let's use the describe command to see the table schema.

```text
mysql> DESCRIBE COUNTRYDETAILS;

Field    |Type       |Null|Key|Default|Extra|
---------|-----------|----|---|-------|-----|
id       |int(11)    |YES |   |       |     |
COUNTRY  |varchar(20)|YES |MUL|       |     |
CONTINENT|varchar(20)|YES |MUL|       |     |
```

Insert some records once the table is created.

```sql
-- Insert Data Into Index Table

INSERT INTO COUNTRYDETAILS (id, COUNTRY, CONTINENT) VALUES (1,'Nepal', 'Asia');
INSERT INTO COUNTRYDETAILS (id, COUNTRY, CONTINENT) VALUES (2,'China', 'Asia');
INSERT INTO COUNTRYDETAILS (id, COUNTRY, CONTINENT) VALUES (3,'USA', 'North America');
INSERT INTO COUNTRYDETAILS (id, COUNTRY, CONTINENT) VALUES (4,'Mexico', 'North America');
INSERT INTO COUNTRYDETAILS (id, COUNTRY, CONTINENT) VALUES (5,'Canada', 'North America');
INSERT INTO COUNTRYDETAILS (id, COUNTRY, CONTINENT) VALUES (6,'Sri Lanka', 'Asia');
```

Let's Select some records from that table, You should see records like below.

```text
mysql>SELECT * FROM COUNTRYDETAILS;

id|COUNTRY  |CONTINENT    |
--|---------|-------------|
 1|Nepal    |Asia         |
 2|China    |Asia         |
 3|USA      |North America|
 4|Mexico   |North America|
 5|Canada   |North America|
 6|Sri Lanka|Asia         |
```

Use the `SHOW INDEX` command to see the table index from this table.

```sql
mysql> SHOW INDEX FROM COUNTRYDETAILS;
```

```text
Table         |Non_unique|Key_name |Seq_in_index|Column_name|Collation|Cardinality|Sub_part|Packed|Null|Index_type|Comment|Index_comment|Visible|
--------------|----------|---------|------------|-----------|---------|-----------|--------|------|----|----------|-------|-------------|-------|
COUNTRYDETAILS|         1|COUNTRY  |           1|COUNTRY    |A        |          6|        |      |YES |BTREE     |       |             |YES    |
COUNTRYDETAILS|         1|COUNTRY  |           2|CONTINENT  |A        |          6|        |      |YES |BTREE     |       |             |YES    |
COUNTRYDETAILS|         1|COUNTRY_2|           1|COUNTRY    |A        |          6|        |      |YES |BTREE     |       |             |YES    |
COUNTRYDETAILS|         1|CONTINENT|           1|CONTINENT  |A        |          2|        |      |YES |BTREE     |       |             |YES    |
```

As you can see above, an `BTREE` index type was created on these columns. The full version of this `SQL` query is available on my [GitHub repo](https://github.com/nitendragautam/blog_tutorials/blob/master/database/mysql_index.sql).

## Types of Indexes

There are three types of Indexes in the Database

- **Unique and Non-Unique Index**

A unique Index makes sure that no two rows of a table have duplicate values in the indexed column or columns. When we create a unique index for an existing table with data, the values of those table columns are checked for uniqueness.

Non-unique indexes don't enforce constraints on the tables with which they are associated. They are used in improving query performance by maintaining a sorted order of data values that are used frequently.

- **Clustered Index**

A clustered index is a special type of index that reorders the way records in the table are physically stored. Therefore, a table can have only one clustered index. The leaf nodes of a clustered index contain the data pages.

- **Non-Clustered Index**

A non-clustered index is a special type of index in which the logical order of the index does not match the physical stored order of the rows on the disk.

In SQL, a table can have a single clustered index, whereas it can have multiple non-clustered indexes.

---

*Originally published on nitendratech.com on 2021-03-10, updated 2024-01-23.*
