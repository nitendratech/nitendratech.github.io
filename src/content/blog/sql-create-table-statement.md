---
title: "SQL CREATE Table Statement"
description: "CREATE TABLE statement is used to create a new table in a database. This statement is applicable in many databases like Oracle, Microsoft SQL Server, and MySQL. There are two ways of creating a table using SQL."
pubDate: 2022-11-10
category: "Data Engineering"
subcategory: "SQL"
---

`CREATE TABLE` statement is used to create a new table in a database. This statement is applicable in many databases like Oracle, Microsoft SQL Server, and MySQL.

There are two ways of creating a table using SQL.

- Creation of New Table
- Creation of Table from existing Table

## Syntax of creating new Table

Let's look at the syntax of creating a new table.

```sql
CREATE TABLE TABLE_NAME (
    colm1 datatype,
    colm2 datatype,
    colm3 datatype,
    colm4
   ....
);
```

Here, colm1, colm2,.. col3 are the column names in the table. Datatype parameters are the types of data the table column can hold. Some examples of a datatype are varchar, integer, data, etc.

Examples used in this tutorial are based on this SQL [file](https://github.com/nitendragautam/blog_tutorials/blob/master/database/oracle_Sample_data.sql) that you can find on my GitHub page.

## SQL CREATE TABLE Example

Let's look at the flow example where we create a table called `CUSTOMERS_DATA_EXAMPLE` using below SQL statement

```sql
CREATE TABLE "OT"."CUSTOMERS_DATA_EXAMPLE" 
   ("CUSTOMER_ID" NUMBER  NOT NULL , 
	"NAME" VARCHAR2(255) NOT NULL , 
	"ADDRESS" VARCHAR2(255), 
	"WEBSITE" VARCHAR2(255), 
	"CREDIT_LIMIT" NUMBER(8,2), 
	 PRIMARY KEY ("CUSTOMER_ID"))
;
```

The `CUSTOMER_ID` and `CREDIT_LIMIT` columns are of type int and will hold an Integer data type.

Other columns such as `NAME`, `ADDRESS` and `WEBSITE` are of type varchar and hold characters. The maximum length for these fields is 255 characters.

Once we create a table, it looks like the one below.

![](/images/image-1.png)

## Create a Table from another table

`CREATE TABLE` statement can also be used to copy an existing table and create a new one out of it. When we create a new table based on an existing table, it will get the same column definitions and existing values from an old table. There is also an option of selecting all columns or certain columns while using this statement.

## SQL CREATE TABLE from existing table Syntax

```sql
CREATE TABLE new_table_name AS
    SELECT colm1, colm2,colm3,colm4, ...
    FROM existing_table_name
    WHERE ....;
```

## SQL CREATE TABLE from existing table Example

Let's take an example where we would be creating a new table called `OT.CUSTOMERS_DATA_NEW_TABLE` from an existing table.

```sql
CREATE TABLE OT.CUSTOMERS_DATA_NEW_TABLE AS 
SELECT CUS_ID, NAME, ADDRESS,WEBSITE,CRDT_LMT 
	FROM OT.CUSTOMERS_DATA;
```

![](/images/image-2.png)

---

*Originally published on nitendratech.com on 2022-11-10, updated 2024-01-23.*
