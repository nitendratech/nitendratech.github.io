---
title: "SQL DISTINCT Statement"
description: "How to use the SQL DISTINCT statement to return unique values from a table — syntax, single and multiple column examples, and DISTINCT with aggregate functions."
pubDate: 2022-02-23
category: "Data Engineering"
subcategory: "SQL"
---

SQL `DISTINCT` statements are used to return unique values from a table. There can be many occasions in a table where we can have duplicate values for certain columns. So `DISTINCT` statement is used to remove the duplicate values from the result set.

## SQL Distinct Statement Syntax

Following is the Syntax for the `DISTINCT` statement for single columns.

```sql
SELECT DISTINCT column
FROM table_name
```

Following is the syntax for `DISTINCT` statements using multiple columns.

```sql
SELECT DISTINCT col1, col2,.....colN
FROM table_name
```

Examples used in this tutorial are based on this SQL [file](https://github.com/nitendragautam/blog_tutorials/blob/master/database/oracle_Sample_data.sql) that you can find on my GitHub page.

## Using Distinct for Single Column

Let's take an example of the use of a Distinct statement for a single column, where we are trying to find the unique order status from `ORDERS_DATA` Table.

```sql
SELECT DISTINCT(STATUS)  FROM OT.ORDERS_DATA OD;
```

```
STATUS
Shipped
Pending
Canceled
```

As we can see, there are three unique values for column Status, which tells us the current status of customer orders.

## Using Distinct for Multiple Columns

Let's take the example of using the Distinct statement for multiple columns, where we are trying to find the unique combination of Customer ID and Order Status from the Orders Data table.

```sql
SELECT DISTINCT CUS_ID,STATUS   FROM OT.ORDERS_DATA OD;
```

Following is the result set obtained from the above query.

```
CUS_ID	STATUS
108	Shipped
110	Shipped
101	Pending
102	Pending
104	Pending
106	Canceled
109	Shipped
107	Canceled
103	Pending
105	Canceled
```

## Using DISTINCT with Aggregate Functions

Let's try to use an aggregate function while using Distinct in SQL query. In the following query, we are trying to find the total count of the column Status from the `orders` data table. This is one of the common scenarios in any organization where a business or a business analyst tries to find the count of the distinct values from a certain column.

```sql
SELECT COUNT(DISTINCT(STATUS))   FROM OT.ORDERS_DATA OD;
```

```
COUNT(DISTINCT(STATUS))
3
```

As we can see above, there are three unique values for column status in the `orders` data table. These unique column values are Pending, Cancelled, and Shipped.

---

*Originally published on nitendratech.com on 2022-02-23, updated 2024-01-23.*
