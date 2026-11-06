---
title: "Difference between SQL GROUP By and HAVING Clause"
description: "The major difference between the SQL GROUP BY and HAVING clauses — grouping rows for aggregate calculations versus filtering grouped results — explained with examples."
pubDate: 2024-01-15
category: "Data Engineering"
subcategory: "SQL"
---

In [RDBMS](https://www.nitendratech.com/database/relational-database/), both the `GROUP BY` and `HAVING` clauses are used in combination with aggregate functions to perform operations on grouped data. However, they are used for different purposes in a query.

In this blog post, we will go through the major difference between SQL Group BY and HAVING Clause. We will also look at some examples while going over the differences.

## GROUP BY Clause:

The `GROUP BY` clause is used to group rows that have the same values in specified columns into summary rows, like a summary report. It is typically used with aggregate functions (e.g., SUM, AVG, COUNT) to perform calculations on each group of rows. The `GROUP BY` clause comes before the `HAVING` clause in a [Structured Query Language(SQL) query](https://www.nitendratech.com/database/learn-sql/).

### Example of GROUP BY Clause

```sql
SELECT department, AVG (salary) as average_salary FROM employees GROUP BY department;
```

In this example, We are trying to find out the average salary from the `employees` table. Here, rows are grouped by the `department` column, and the average salary is calculated for each department.

## HAVING CLAUSE

The `HAVING` clause is used to filter the results of a `GROUP BY` query based on a specified condition. It is similar to the `WHERE` clause but is specifically used with aggregate functions on grouped data. The HAVING clause comes after the GROUP BY clause in a SQL query.

### Example of HAVING Clause

```sql
SELECT department, AVG (salary) as average_salary FROM employees GROUP BY department HAVING AVG(salary) > 75000;
```

In this example, the results are filtered from the `employees` table to include only those groups where the average salary is greater than 75000 USD.

In summary, `GROUP BY` clause is used to group rows based on specified columns and apply aggregate functions to those groups, while `HAVING` clause is used to filter the results of a `GROUP BY` query based on aggregate function conditions. When developers write the query, the order of these clauses in an SQL query is important: `GROUP BY` comes first, followed by `HAVING`.

## Conclusion

In this blog post, we went through the major difference between GROUP BY and HAVING Clause in a [database](https://www.nitendratech.com/database/learn-database/) while going through examples.

---

*Originally published on nitendratech.com on 2024-01-15, updated 2024-02-19.*
