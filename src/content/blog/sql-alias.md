---
title: "What is SQL Alias?"
description: "SQL aliases give a temporary name to a column or a table in a query — what they are, how they work, and the syntax for creating column and table aliases, with and without the AS keyword."
pubDate: 2021-07-25
category: "Data Engineering"
subcategory: "SQL"
---

## What does alias mean in SQL?

[SQL (Structured Query Language)](https://www.nitendratech.com/database/learn-sql/) aliases are used for giving a temporary name to a column or a table for the purpose of a particular SQL query. They are mainly used to make SQL queries more readable. They are created explicitly using an AS keyword and exist during only the duration of that query. During that period when SQL query runs, a table name or column name can be renamed by using an alias. This renaming using SQL is temporary and does not reflect any change in the original table or databases.

SQL alias is supported by most [RDBMS (Relational Database Management Systems).](https://www.nitendratech.com/database/relational-database/)

## How does an alias work in SQL?

In SQL, we can have an alias for tables and columns. Internally, the alias correlates the table or column name to the alias that was used. We can use an alias to assign a name to a table or column temporarily during the time when SELECT or other works. They are preferred when we have more than a table involved in a query. The best practice for creating an alias is the use of `AS` keyword.

## The syntax for creating Column Alias

```sql
SELECT column_name AS alias_name
FROM table_name;
```

- column_name: Name of the column Name in the table
- alias_name: Temporary alias name that is used as a replacement of original column name.
- table_name: Table name in which the alias will be created.

## The syntax for creating Table Alias

We can create a table alias with and without using `AS` keywords.

### With `AS` Keyword

```sql
SELECT column_name(s)
FROM table_name AS alias_name;
```

### Without `AS` keyword

```sql
SELECT column_name(s)
FROM table_name alias_name;
```

- column_name: It is the fields/columns in the table.
- table_name: It is the table name in which the alias will be created.
- alias_name: It is the temporary alias name that is used as a replacement for the original table name.

Let's say we have the below table that has some information related to customers' orders.

```
ORDER_ID	CUS_ID	STATUS	SLSMAN_ID	ORDER_DATE
105	101	Pending	54	2016-11-17 00:00:00.000
44	102	Pending	55	2017-02-20 00:00:00.000
```

We want to apply an upper case transformation while selecting the columns and give an alias for the transformed column.

```sql
SELECT ORDER_ID, UPPER(STATUS) AS ORDER_STATUS FROM OT.ORDERS_DATA;
```

The above query will create an alias called ORDER_STATUS that will have all the values coming in from `UPPER(STATUS)` transformation.

```
ORDER_ID	UPPER(STATUS)
105	PENDING
44	PENDING
101	PENDING
1	PENDING
5	CANCELED
28	CANCELED
87	CANCELED
4	SHIPPED
41	SHIPPED
82	SHIPPED
```

---

*Originally published on nitendratech.com on 2021-07-25, updated 2023-07-04.*
