---
title: "What are Joins in SQL?"
description: "SQL joins explained — how a join combines data from two or more tables based on a common field, covering INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN with examples."
pubDate: 2018-09-16
category: "Data Engineering"
subcategory: "SQL"
---

[SQL](https://www.nitendratech.com/database/learn-sql/) Join is to combine data from two or more tables based on a common field among them. Joins indicate how SQL should use data from one table to select the rows in another table. By using joins, you can retrieve data from two or more tables based on logical relationships between the tables in a [database](https://www.nitendratech.com/database/learn-database/). In this blog post, we will give an introduction to SQL Joins.

```sql
SELECT a.Column1, b.Column2 FROM TableA a INNER JOIN TableB b ON a.Id = b.AFKId
```

## Types of Join

Below are the most common joins.

- Inner Join
- Left Join or Left Outer Join
- Right Join or Right Outer Join
- Full Join

### INNER JOIN

This join selects the matching data from the tables based on a common key. It will create the result set by combining all rows from the tables where the value of the common field will be the same.

```sql
// Joining two tables on common emp_no
 SELECT * FROM employees e JOIN salaries s ON (e.emp_no = s.emp_no) LIMIT 5;

+--------+------------+------------+-----------+--------+------------+--------+--------+------------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date  | emp_no | salary | from_date  | to_date    |
+--------+------------+------------+-----------+--------+------------+--------+--------+------------+------------+
|  10001 | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |  10001 |  60117 | 1986-06-26 | 1987-06-26 |
|  10001 | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |  10001 |  62102 | 1987-06-26 | 1988-06-25 |
|  10001 | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |  10001 |  66074 | 1988-06-25 | 1989-06-25 |
|  10001 | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |  10001 |  66596 | 1989-06-25 | 1990-06-25 |
|  10001 | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |  10001 |  66961 | 1990-06-25 | 1991-06-25 |
+--------+------------+------------+-----------+--------+------------+--------+--------+------------+------------+
```

### LEFT JOIN or LEFT OUTER JOIN

This join returns all the records of the table on the left side of the join and matching rows for the table on the right side of the join. If there is no matching row on the right-hand side of the join, the result set will contain null.

```sql
 SELECT * FROM employees e LEFT OUTER JOIN salaries s ON (e.emp_no = s.emp_no) LIMIT 5;
```

### RIGHT JOIN or RIGHT OUTER JOIN

This join returns all the records of the table on the right side of the join and matching rows for the table on the left side of join.

If there is no matching row on the left side of the join, the result set will contain null values.

### FULL JOIN

This join creates the result set by combining the result of both the LEFT and RIGHT Joins. The result set will contain all the rows from both tables. If there is no match found for any rows, the result set will contain NULL values.

![SQL Joins](https://www.nitendratech.com/wp-content/uploads/2019/04/joins.jpg)

Figure: [Join](https://stackoverflow.com/questions/905379/what-is-the-difference-between-join-and-union)

---

*Originally published on nitendratech.com on 2018-09-16, updated 2023-07-03.*
