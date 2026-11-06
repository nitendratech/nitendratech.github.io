---
title: "SQL SELECT Operator"
description: "The SQL SELECT statement explained — basic syntax, selecting all or specific columns, transforming columns with functions and aliases, and the common WHERE, ORDER BY, GROUP BY, and HAVING clauses used with it."
pubDate: 2020-10-20
category: "Data Engineering"
subcategory: "SQL"
---

An SQL Select statement or operator is used to select data from one or more tables. When the SELECT query gets executed, a resulting dataset that is returned is called the result-set. We can select a single column or multiple columns at once when executing this statement.

Below is the syntax of the basic SELECT statement.

```sql
SELECT
    column1, column2 ..
FROM
    table_name;
```

Here `column1,column2` are the column names that we want to select from a given table. If we want to select all the columns from the given table, we can use the below syntax.

```sql
SELECT * FROM table_name;
```

Here is, the wildcard expression `*` means that we want to select all the columns from the table.

The examples used in this tutorial are based on this SQL [file](https://raw.githubusercontent.com/nitendragautam/database/master/Oracle/oracle_Sample_data.sql) that you can find on my GitHub page.

## Using SELECT to query all the columns from the table

Let's take the example of the Customer table and select all the columns.

```sql
SELECT * FROM OT.CUSTOMERS_DATA ;
```

This query will return the below output.

```
CUS_ID	NAME	ADDRESS	WEBSITE	CRDT_LMT
101	State Street Corp.	1607 Abwdrts St, Bangalore, Kar	http://www.statestreet.com	3,500
102	Unum Group	1608 Amadeus St, Bangalore, Kar	http://www.unum.com	3,500
103	Reynolds American	1610 Betrayal Crt, Bangalore, Kar	http://www.reynoldsamerican.com	5,000
104	Group 1 Automotive	1614 Crackers Rd, Bangalore - India, Kar	http://www.group1auto.com	2,300
105	Henry Schein	1615 Crackers Crt, Bangalore - India, Kar	http://www.henryschein.com	5,000
106	Norfolk Southern	1618 Footloose St, Bangalore - India, Kar	http://www.nscorp.com	900
107	Reinsurance Group of America	1619 Footloose Rd, Bangalore - India, Kar	http://www.rgare.com	900
108	Public Service Enterprise Group	1621 Gargon! Blvd, Bangalore - India, Kar	http://www.pseg.com	600
109	DTE Energy	8110 Jackson Rd, Ann Arbor, MI	http://www.dteenergy.com	200
110	Assurant	101 N Falahee Rd, Jackson, MI	http://www.assurant.com	300
```

## Using SELECT to query specific columns from the table

Now, let's see how we can select only certain columns from a table. In the below query, we are selecting three columns called Customer Identification, Customer Name, and Credit Limit identified by `CUS_ID, NAME, CRDT_LMT` columns from the Customer data table.

```sql
SELECT CUS_ID, NAME, CRDT_LMT FROM OT.CUSTOMERS_DATA;
```

Below is the output of the above query, which only returns three columns as part of the result set.

```
CUS_ID	NAME	CRDT_LMT
101	State Street Corp.	3,500
102	Unum Group	3,500
103	Reynolds American	5,000
104	Group 1 Automotive	2,300
105	Henry Schein	5,000
106	Norfolk Southern	900
107	Reinsurance Group of America	900
108	Public Service Enterprise Group	600
109	DTE Energy	200
110	Assurant	300
```

## Perform Transformation on Columns while Selecting the data

When we use `SELECT` statement in SQL, we can also do some transformation on certain columns while selecting the data. In the below query, we will make the `NAME` column values to the upper case while selecting and using an alias to denote the newly selected column.

```sql
SELECT CUS_ID, UPPER(NAME) AS NAME FROM OT.CUSTOMERS_DATA;
```

```
CUS_ID	NAME
101	STATE STREET CORP.
102	UNUM GROUP
103	REYNOLDS AMERICAN
104	GROUP 1 AUTOMOTIVE
105	HENRY SCHEIN
106	NORFOLK SOUTHERN
107	REINSURANCE GROUP OF AMERICA
108	PUBLIC SERVICE ENTERPRISE GROUP
109	DTE ENERGY
110	ASSURANT
```

If we don't use the alias `AS NAME`, as mentioned in the above query, the transformed column name will be UPPER (NAME). This will create problems when you are transforming some data while selecting and inserting it into another column, as the SQL engine will complain, saying no valid column is found.

The below result is returned when we don't use an alias.

```
CUS_ID	UPPER(NAME)
101	STATE STREET CORP.
102	UNUM GROUP
```

## Common clauses used with SELECT query in SQL

Below are the common SQL clauses that are most commonly used with the Select Statement.

- **WHERE:** It filters table records that are needed to be based on certain conditions. This clause cannot be used to filter aggregated records.
- **ORDER BY:** It sorts the table records based on some field(s) in ascending (ASC) or descending order (DESC).
- **GROUP BY:** It groups table records with identical data and can be used in conjunction with some aggregation functions to produce summarized results from the database.
- **HAVING:** It is used to filter table records in combination with the GROUP BY clause. It is mainly used to filter aggregated records, like finding duplicates.

---

*Originally published on nitendratech.com on 2020-10-20, updated 2023-07-04.*
