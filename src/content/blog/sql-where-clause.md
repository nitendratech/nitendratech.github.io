---
title: "SQL WHERE clause"
description: "The SQL WHERE clause explained with examples — basic syntax, single and multiple conditions using AND and OR, text vs. numeric fields, and numeric comparisons."
pubDate: 2022-02-22
category: "Data Engineering"
subcategory: "SQL"
---

`WHERE` a clause in SQL (Structured Query Language) is a keyword that is used to specify a condition when fetching the data from a single or multiple tables. If the given condition in `WHERE` the clause is satisfied, the query returns specific rows from the table that we are interested in. We can use `WHERE` conditions while doing SELECT, INSERT, UPDATE, or DELETE operations.

A `WHERE` condition in SQL returns either true or false. Also, we can use only one WHERE clause with SQL. But we can have multiple conditions associated with the WHERE clause by using AND, OR, and NOT logical operators. Also, we can have a `WHERE` clause within the sub-query as well.

## Syntax of WHERE Clause

Below is the basic syntax of `WHERE` clause.

```sql
SELECT col, col1, ...colN
FROM table_name
WHERE
[condition]
```

In the above syntax, WHERE is the keyword that filters the data from the table based on the condition provided. Various types of filters like single value/sub query or range can be used. We can also specify conditions using comparison or logical operators.

Examples used in this tutorial are based on this SQL [file](https://github.com/nitendragautam/blog_tutorials/blob/master/database/oracle_Sample_data.sql) that you can find on my GitHub page.

## WHERE Clause using one Condition

Let's take an example of a customer's table in which WHERE the condition will be applied on one column.

```sql
SELECT * FROM OT.ORDERS_DATA WHERE ORDER_ID=105;
```

```
ORDER_ID	CUS_ID	STATUS	SLSMAN_ID	ORDER_DATE
105	101	Pending	54	2016-11-17 00:00:00.000
```

As we see, we are getting only a row back for Order id 105.

## WHERE Clause using Multiple conditions(AND Condition)

We can use the AND condition the WHERE clause and add filters for more than one table. In this case, as `AND` the logical operator is used, both the conditions need to be satisfied for the query to return the records.

```sql
SELECT * FROM OT.ORDERS_DATA WHERE ORDER_ID=105 AND STATUS='Pending';
```

```
ORDER_ID	CUS_ID	STATUS	SLSMAN_ID	ORDER_DATE
105	101	Pending	54	2016-11-17 00:00:00.000
```

## WHERE Clause using Multiple conditions(OR Condition)

We can use the OR condition in the WHERE clause to test multiple conditions in which the record is returned when any one of the conditions are met

```sql
SELECT * FROM OT.ORDERS_DATA WHERE ORDER_ID=105 OR STATUS='Pending';
```

Below is the result that we got from the above query that uses the OR conditional operator.

```
ORDER_ID	CUS_ID	STATUS	SLSMAN_ID	ORDER_DATE
105	101	Pending	54	2016-11-17 00:00:00.000
44	102	Pending	55	2017-02-20 00:00:00.000
101	103	Pending	55	2017-01-03 00:00:00.000
1	104	Pending	56	2017-10-15 00:00:00.000
```

## WHERE Clause for Text Fields vs. Numeric Fields

Use of `WHERE` clause is different when the filter operation has Text fields and Numerical fields. When the table column has a text field as values, it needs to be enclosed in single or double quotes. But when the column has a numerical value, it does not need to be enclosed in quotes.

```sql
SELECT *  FROM OT.CUSTOMERS_DATA WHERE CUS_ID =107;
```

```sql
SELECT *  FROM OT.CUSTOMERS_DATA WHERE NAME='Norfolk Southern';
```

## WHERE Clause for Numeric comparison

To use `WHERE` clause for comparing numerical values, we can use the SQL comparator operator less than `<`, greater than `>`, greater than or equal to `>=` and less than or equal to `<=`.

Let's take an example where we will check the value of the Credit Limit column in the customer table. We will check all the records for which the Credit Limit is greater than or equal to 1000.

```sql
/*
 * WHERE Clause with Greater than Clause to check Credit Limit Greater than 1000
 */

SELECT * FROM OT.CUSTOMERS_DATA WHERE CRDT_LMT >=1000;
```

```
CUS_ID	NAME	ADDRESS	WEBSITE	CRDT_LMT
101	State Street Corp.	1607 Abwdrts St, Bangalore, Kar	http://www.statestreet.com	3,500
102	Unum Group	1608 Amadeus St, Bangalore, Kar	http://www.unum.com	3,500
103	Reynolds American	1610 Betrayal Crt, Bangalore, Kar	http://www.reynoldsamerican.com	5,000
104	Group 1 Automotive	1614 Crackers Rd, Bangalore - India, Kar	http://www.group1auto.com	2,300
105	Henry Schein	1615 Crackers Crt, Bangalore - India, Kar	http://www.henryschein.com	5,000
```

The above results show all the rows for which the credit limit is greater than or equal to 1000.

Let's look at the condition where we will filter all the records for which the credit limit is less than or equal to 1000.

```sql
/*
 * WHERE Clause with Smaller than Clause to check Credit Limit Less than 1000
 */
SELECT * FROM OT.CUSTOMERS_DATA WHERE CRDT_LMT <=1000;
```

```
CUS_ID	NAME	ADDRESS	WEBSITE	CRDT_LMT
106	Norfolk Southern	1618 Footloose St, Bangalore - India, Kar	http://www.nscorp.com	900
107	Reinsurance Group of America	1619 Footloose Rd, Bangalore - India, Kar	http://www.rgare.com	900
108	Public Service Enterprise Group	1621 Gargon! Blvd, Bangalore - India, Kar	http://www.pseg.com	600
109	DTE Energy	8110 Jackson Rd, Ann Arbor, MI	http://www.dteenergy.com	200
110	Assurant	101 N Falahee Rd, Jackson, MI	http://www.assurant.com	300
```

---

*Originally published on nitendratech.com on 2022-02-22, updated 2024-01-23.*
