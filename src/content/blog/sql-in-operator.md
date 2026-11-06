---
title: "SQL IN Operator"
description: "How the SQL IN operator works — its syntax, examples with text and numeric values, using it with a subquery, and the NOT IN operator for negative conditions."
pubDate: 2022-03-24
category: "Data Engineering"
subcategory: "SQL"
---

SQL IN operator or IN condition is a logical operator that allows testing if a specified value matches any values in a provided list. It allows users to specify multiple values when using `WHERE` clause. It is equivalent to multiple OR operators in SQL. It helps to reduce the need for multiple OR conditions while writing `SELECT`, `INSERT`, `UPDATE` or `DELETE` condition.

## Syntax for IN Operator

We can use the `SELECT IN` operator in two ways. We can use it directly or using Sub Query.

```sql
SELECT [ col1, col2, | sql_expression ]
FROM [ table_name ]
{WHERE | HAVING {AND | OR }} VALUE
[NOT] IN ({col_val1, col_val2, ... | subquery});
```

Below is the explanation of the parameters.

```
col1, col2 .. : List of Column names in SELECT statement

sql_expression:  It can be expression for a column name, variable, scalar function or arithmetic calculations.

table_name: Name of the table
{WHERE |HAVING {AND |OR }} VALUE : We can use either WHERE or HAVING clause with IN operator. With the WHERE or HAVING clause, there can be AND or OR clause when we have multiple condition that must be satisfied.

NOT: It is used to exclude certain values when used in conjunction with WHERE clause condition.
```

If the value in the column or given expression matches any value given in the list, the result of the IN operator is returned as TRUE.

If we are using the `SQL IN` operator for numerical column values, we don't need to enclose the values with a single quote `'`. Otherwise, we have to enclose the values with a single quote for non-numerical values. This operator is supported in most of the RDBMS like `MySQL`, `SQL Server`, `PostgreSQL` and Oracle.

Examples used in this tutorial are based on this SQL [file](https://github.com/nitendragautam/blog_tutorials/blob/master/database/oracle_Sample_data.sql) that you can find on my GitHub page.

## SQL IN Operator With Text or Character Value

Let's see an example of `SQL IN` Operator with textual columns. In the below query, we are trying to find the data from `orders data` table for which the status is `Pending` or `Shipped`.

```sql
SELECT
	*
FROM
	OT.ORDERS_DATA OD
WHERE
	STATUS = 'Pending'
	OR STATUS = 'Shipped';
```

```
ORDER_ID	CUS_ID	STATUS	SLSMAN_ID	ORDER_DATE
1	104	Pending	56	2017-10-15 00:00:00.000
28	106	Canceled	57	2017-08-15 00:00:00.000
41	109	Shipped	59	2017-05-11 00:00:00.000
5	105	Canceled	56	2017-04-09 00:00:00.000
44	102	Pending	55	2017-02-20 00:00:00.000
101	103	Pending	55	2017-01-03 00:00:00.000
82	110	Shipped	60	2016-12-03 00:00:00.000
87	107	Canceled	57	2016-12-01 00:00:00.000
105	101	Pending	54	2016-11-17 00:00:00.000
4	108	Shipped	59	2015-04-09 00:00:00.000
```

An equivalent version of this query using `OR` operator is given below.

```sql
SELECT
	*
FROM
	OT.ORDERS_DATA OD
WHERE
	STATUS = 'Pending'
	OR STATUS = 'Shipped';
```

When we use `IN` operator for text-based values, we cannot use wildcard characters like `%`, `_`, etc. We have to give the exact values in the `IN` condition.

## SQL IN Operator with Numeric Value

Let's see an example of SQL IN operator with a numerical column value. In the below query, we are querying those data from the customer data table where values of credit limit can be either `3500`, `5000` and `900`.

```sql
SELECT
	*
FROM
	OT.CUSTOMERS_DATA
WHERE
	CRDT_LMT IN(3500, 5000, 900)
```

```
CUS_ID	NAME	ADDRESS	WEBSITE	CRDT_LMT
101	State Street Corp.	1607 Abwdrts St, Bangalore, Kar	http://www.statestreet.com	3,500
102	Unum Group	1608 Amadeus St, Bangalore, Kar	http://www.unum.com	3,500
103	Reynolds American	1610 Betrayal Crt, Bangalore, Kar	http://www.reynoldsamerican.com	5,000
105	Henry Schein	1615 Crackers Crt, Bangalore - India, Kar	http://www.henryschein.com	5,000
106	Norfolk Southern	1618 Footloose St, Bangalore - India, Kar	http://www.nscorp.com	900
107	Reinsurance Group of America	1619 Footloose Rd, Bangalore - India, Kar	http://www.rgare.com	900
```

We can also write the above query using the OR condition like the below that gives the same results. But this way of querying is redundant, as we are repeating a piece of code thrice.

```sql
SELECT
	*
FROM
	OT.CUSTOMERS_DATA
WHERE
	CRDT_LMT = 3500
	OR CRDT_LMT = 5000
	OR CRDT_LMT = 900;
```

## SQL IN Operator with a Sub Query

The below query returns the rows from the Orders' table whose customer id is greater than 105;

```sql
SELECT CUS_ID FROM OT.ORDERS_DATA WHERE CUS_ID >105
```

```
CUS_ID
106
107
108
109
110
```

We will apply the above query as a sub-query so that we can use it with `IN` operator.

```sql
SELECT
	*
FROM
	OT.CUSTOMERS_DATA
WHERE
	CUS_ID IN
(
	SELECT
		CUS_ID
	FROM
		OT.ORDERS_DATA
	WHERE
		CUS_ID >105)
ORDER BY
	CUS_ID DESC;
```

```
CUS_ID	NAME	ADDRESS	WEBSITE	CRDT_LMT
110	Assurant	101 N Falahee Rd, Jackson, MI	http://www.assurant.com	300
109	DTE Energy	8110 Jackson Rd, Ann Arbor, MI	http://www.dteenergy.com	200
108	Public Service Enterprise Group	1621 Gargon! Blvd, Bangalore - India, Kar	http://www.pseg.com	600
107	Reinsurance Group of America	1619 Footloose Rd, Bangalore - India, Kar	http://www.rgare.com	900
106	Norfolk Southern	1618 Footloose St, Bangalore - India, Kar	http://www.nscorp.com	900
```

In the first step, the subquery returned a list of customer IDs. This list of customer IDs is used by the outer query to return all records whose customer ID matches any value returned by the sub-query.

## SQL IN Operator with Boolean NOT Operator

SQL NOT operator is used for negative conditions. We use this operator in the `IN` operator to filter records that do not fall in the given values. Let's take an example and get the records from the customer data table whose Credit Limit does not match to 200 or 300 or 600.

```sql
SELECT
	*
FROM
	OT.CUSTOMERS_DATA
WHERE
	CRDT_LMT NOT IN (200, 300, 600);
```

```
CUS_ID	NAME	ADDRESS	WEBSITE	CRDT_LMT
101	State Street Corp.	1607 Abwdrts St, Bangalore, Kar	http://www.statestreet.com	3,500
102	Unum Group	1608 Amadeus St, Bangalore, Kar	http://www.unum.com	3,500
103	Reynolds American	1610 Betrayal Crt, Bangalore, Kar	http://www.reynoldsamerican.com	5,000
104	Group 1 Automotive	1614 Crackers Rd, Bangalore - India, Kar	http://www.group1auto.com	2,300
105	Henry Schein	1615 Crackers Crt, Bangalore - India, Kar	http://www.henryschein.com	5,000
106	Norfolk Southern	1618 Footloose St, Bangalore - India, Kar	http://www.nscorp.com	900
107	Reinsurance Group of America	1619 Footloose Rd, Bangalore - India, Kar	http://www.rgare.com	900
```

We can also get the same results using multiple AND condition.

```sql
SELECT
	*
FROM
	OT.CUSTOMERS_DATA
WHERE
	CRDT_LMT!=200
	AND CRDT_LMT !=300
	AND CRDT_LMT !=600;
```

---

*Originally published on nitendratech.com on 2022-03-24, updated 2024-01-23.*
