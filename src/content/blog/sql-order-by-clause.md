---
title: "SQL ORDER BY Clause"
description: "How to use the SQL ORDER BY clause in a SELECT statement to sort results in ascending or descending order — syntax plus single-column, multiple-column, and date-column examples."
pubDate: 2022-03-21
category: "Data Engineering"
subcategory: "SQL"
---

We use the `ORDER BY` clause in [SQL](https://www.nitendratech.com/database/learn-sql/)-based SELECT statement. We use this clause when we want to sort the rows returned by a SELECT statement in either ascending or descending order in the table.

ORDER by clause in SQL sorts the data in ascending order by default if we don't mention ASC or DESC in the clause. If we use DESC in the order by clause, we get the resulting rows in descending order.

We can use the SORT by cause in single or multiple columns. But we need to make sure that the column used in `ORDER BY` exists in the table.

## Syntax of ORDER BY clause

Let's take a look at the Syntax of ORDER BY the clause.

```sql
SELECT 
    col1, col2...
FROM
    table_name
ORDER BY 
     col1, col2,...  [ASC | DESC];


Here col1,col2 is the name of the columns that need to be sorted.
table_name:  Name of the SQL table
ASC: It sorts the data in ascending order.
DESC: It sorts the data in descending order.
|: It is the bitwise OR operator that uses either ASC or DESC to order records in Ascending or Descending Order. 
```

Examples used in this tutorial are based on this SQL [file](https://github.com/nitendragautam/blog_tutorials/blob/master/database/oracle_Sample_data.sql) that you can find on my GitHub page.

## SQL ORDER BY clause to sort values in Single columns

Let's see how we can use the `ORDER` by clause for single columns.

```sql
SELECT  *  FROM OT.CUSTOMERS_DATA ORDER BY NAME DESC
```

The above query sorts the customer data table in descending order.

```
CUS_ID	NAME	ADDRESS	WEBSITE	CRDT_LMT
102	Unum Group	1608 Amadeus St, Bangalore, Kar	http://www.unum.com	3,500
101	State Street Corp.	1607 Abwdrts St, Bangalore, Kar	http://www.statestreet.com	3,500
103	Reynolds American	1610 Betrayal Crt, Bangalore, Kar	http://www.reynoldsamerican.com	5,000
107	Reinsurance Group of America	1619 Footloose Rd, Bangalore - India, Kar	http://www.rgare.com	900
108	Public Service Enterprise Group	1621 Gargon! Blvd, Bangalore - India, Kar	http://www.pseg.com	600
106	Norfolk Southern	1618 Footloose St, Bangalore - India, Kar	http://www.nscorp.com	900
105	Henry Schein	1615 Crackers Crt, Bangalore - India, Kar	http://www.henryschein.com	5,000
104	Group 1 Automotive	1614 Crackers Rd, Bangalore - India, Kar	http://www.group1auto.com	2,300
109	DTE Energy	8110 Jackson Rd, Ann Arbor, MI	http://www.dteenergy.com	200
110	Assurant	101 N Falahee Rd, Jackson, MI	http://www.assurant.com	300
```

## SQL ORDER BY clause to sort values in multiple columns

Let's take an example where we will use the ORDER BY clause for sorting the Name and credit limit in Ascending order.

```sql
SELECT * FROM OT.CUSTOMERS_DATA ORDER BY NAME,CRDT_LMT ASC 
```

```
CUS_ID	NAME	ADDRESS	WEBSITE	CRDT_LMT
110	Assurant	101 N Falahee Rd, Jackson, MI	http://www.assurant.com	300
109	DTE Energy	8110 Jackson Rd, Ann Arbor, MI	http://www.dteenergy.com	200
104	Group 1 Automotive	1614 Crackers Rd, Bangalore - India, Kar	http://www.group1auto.com	2,300
105	Henry Schein	1615 Crackers Crt, Bangalore - India, Kar	http://www.henryschein.com	5,000
106	Norfolk Southern	1618 Footloose St, Bangalore - India, Kar	http://www.nscorp.com	900
108	Public Service Enterprise Group	1621 Gargon! Blvd, Bangalore - India, Kar	http://www.pseg.com	600
107	Reinsurance Group of America	1619 Footloose Rd, Bangalore - India, Kar	http://www.rgare.com	900
103	Reynolds American	1610 Betrayal Crt, Bangalore, Kar	http://www.reynoldsamerican.com	5,000
101	State Street Corp.	1607 Abwdrts St, Bangalore, Kar	http://www.statestreet.com	3,500
102	Unum Group	1608 Amadeus St, Bangalore, Kar	http://www.unum.com	3,500
```

## SQL ORDER BY clause to sort Date Columns

Let's see how we can use the Order by clause in the SQL select clause to sort the date column in descending order.

```sql
SELECT * FROM OT.ORDERS_DATA OD ORDER BY ORDER_DATE DESC;
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

---

*Originally published on nitendratech.com on 2022-03-21, updated 2024-01-23.*
