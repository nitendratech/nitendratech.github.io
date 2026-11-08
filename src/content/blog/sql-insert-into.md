---
title: "SQL INSERT INTO STATEMENT"
description: "How to use the SQL INSERT INTO statement to insert one or more records into a table — with column names, without column names, and from an existing table."
pubDate: 2023-08-04
category: "Data Engineering"
subcategory: "SQL"
---

In [RDBMS](https://www.nitendratech.com/database/relational-database/), we can use the `INSERT INTO` statement to insert one or more records into a table.

When the database adds a new row, it checks for all the integrity constraints and data types defined in the table. Some of these constraints can be foreign key constraints, primary key constraints, not null constraints. If there are any issues with satisfying these constraints and data types, the database will throw an error and will not insert any new row into the table.

## Syntax

There are mainly two types of Syntax for `INSERT` statements, depending upon whether we are inserting one or multiple records into a table or from an existing table.

## Insert new Rows into a table

- Using Column name

Here the number of columns and values being inserted should match, as the database system will match them by their relative position.

```sql
INSERT INTO table_name (col1, col2, ...)
VALUES (col1_value, col2_value, ..);
```

- Without using the Column name

If we don't specify any column and lots value in the `INSERT` statement, the database will assign a default value to those columns for that row or rows. These default values can be defined in the table DDL(Data Definition Language) or the database can assign them automatically.

If we are trying to add values for all the columns of the table, we don't need to specify the names of the columns in the query. But the order of the columns in the table and the values should match.

```sql
INSERT INTO table_name
VALUES (col1_val, col2_val2,..);
```

## Insert new Rows into a table from an existing table

```sql
INSERT INTO table_name
(col1, col2, ... )
SELECT expression1, expression2, ...
FROM source_table_name
[WHERE conditions];
```

In this blog post, we will refer to these [tables](https://github.com/nitendragautam/blog_tutorials/blob/master/database/oracle_Sample_data.sql) as an example.

## Examples

Let's take a look at some examples of `INSERT INTO` statements for inserting rows into a table.

### Insert into a table using Column Name

To insert one row into a table, you use the following syntax of the `INSERT` statement.

```sql
INSERT INTO OT.CUSTOMERS_DATA (CUS_ID,NAME,ADDRESS,WEBSITE,CRDT_LMT) VALUES
	 (112,'State Country','700 Hidden Ridge, Irving, TX','http://www.StateCountry.com',800);
```

### Insert Into a table without using the Column name

Below, the `INSERT INTO` statement shows how a single row can be inserted into a table without giving all the column names.

```sql
INSERT INTO OT.CUSTOMERS_DATA  VALUES
	 (113,'State Country','700 Hidden Ridge, Irving, TX','http://www.StateCountry.com',800);
```

## Output

When we execute these statements, the output looks like below.

![Output Insert Into](/images/Insert_Into_Table_output.png)

## Inserting rows into a new table using an existing table

Let's take an example where we are creating a new table called CUSTOMERS_DATA_NEW from an existing table CUSTOMERS_DATA.

```sql
CREATE TABLE "OT"."CUSTOMERS_DATA_NEW"
   ("CUS_ID" NUMBER  NOT NULL , -- Customer ID
	"NAME" VARCHAR2(255) NOT NULL ,
	"ADDRESS" VARCHAR2(255),
	"WEBSITE" VARCHAR2(255),
	"CRDT_LMT" NUMBER(8,2), --  Credit Limit
	 PRIMARY KEY ("CUS_ID"))
;
```

We will insert records into this table from the existing table whose credit limit is greater than 300.

```sql
INSERT INTO OT.CUSTOMERS_DATA_NEW (CUS_ID,NAME,ADDRESS,WEBSITE,CRDT_LMT)
SELECT CUS_ID,NAME,ADDRESS,WEBSITE,CRDT_LMT
FROM OT.CUSTOMERS_DATA cd
WHERE cd.CRDT_LMT >300;
```

The above query inserted 11 records, which will be validated below.

| CUS_ID | NAME | ADDRESS | WEBSITE | CRDT_LMT |
| --- | --- | --- | --- | --- |
| 113 | State Country | 700 Hidden Ridge, Irving, TX | http://www.StateCountry.com | 800 |
| 102 | Unum Group | 1608 Amadeus St, Bangalore, Kar | http://www.unum.com | 3500 |
| 103 | Reynolds American | 1610 Betrayal Crt, Bangalore, Kar | http://www.reynoldsamerican.com | 5000 |
| 104 | Group 1 Automotive | 1614 Crackers Rd, Bangalore – India, Kar | http://www.group1auto.com | 2300 |
| 105 | Henry Schein | 1615 Crackers Crt, Bangalore – India, Kar | http://www.henryschein.com | 5000 |
| 106 | Norfolk Southern | 1618 Footloose St, Bangalore – India, Kar | http://www.nscorp.com | 900 |
| 107 | Reinsurance Group of America | 1619 Footloose Rd, Bangalore – India, Kar | http://www.rgare.com | 900 |
| 108 | Public Service Enterprise Group | 1621 Gargon! Blvd, Bangalore – India, Kar | http://www.pseg.com | 600 |
| 110 | Assurant | 101 N Falahee Rd, Jackson, MI | http://www.assurant.com | 650 |
| 111 | Assurano | 102 N Falahee Rd, Miami, FL | http://www.assurano.com | 800 |
| 112 | State Country | 700 Hidden Ridge, Irving, TX | http://www.StateCountry.com | 800 |

## Conclusion

In this blog post, we learned how to use insert statements to insert new records to an existing or new table using Structured Query Language(SQL) Insert Into statement.

---

*Originally published on nitendratech.com on 2023-08-04, updated 2024-02-19.*
