---
title: "Most Useful Database Queries"
description: "A handy collection of commonly used SQL database queries — listing databases and tables, filtering with WHERE, IN, BETWEEN, and LIKE, joins and MIN, and selecting the first N records in MySQL, SQL Server, and Oracle."
pubDate: 2017-12-14
category: "Data Engineering"
subcategory: "SQL"
---

A query is a request for data or information from a [database](https://www.nitendratech.com/database/learn-database/) table or combination of tables. This data may be generated as results returned by Structured Query Language (SQL) or as pictorials, graphs, or complex results, e.g., trend analyses from data-mining tools.

This post shows the commonly used Database Queries.

## List all Database

```sql
SHOW DATABASES;
```

## Use employee Database

```sql
USE employees;
```

## List Tables

```sql
SHOW TABLES;
```

## SELECT only 100 records from the employee Table

```sql
SELECT
	*
FROM
	employees.employees LIMIT 100;
```

## Select all Female Employees

```sql
SELECT
	*
FROM
	employees
WHERE
	gender = 'F';
```

## Checking a list The word IN allows us to check if an item is in a list

```sql
SELECT
	*
FROM
	employees.employees
WHERE
	last_name IN(
		'Reistad',
		'Simmel',
		'Pettey'
	) LIMIT 10;
```

## Describe salaries database

```sql
DESCRIBE salaries;
```

## Describe employee's database to Check Schema

```sql
DESCRIBE employees;

SELECT
	*
FROM
	salaries limit 10;
```

## Display all Employees and Salary data whose Salary is between 40000 and 50000

BETWEEN allows range checking (range specified is inclusive of boundary values)

```sql
SELECT
	*
FROM
	employees e
INNER JOIN salaries s ON
	e.emp_no = s.emp_no
WHERE
	s.salary BETWEEN 40000 AND 50000 LIMIT 500;
```

## SELECT all data from employee table who join the department after 1980

```sql
SELECT * FROM employees WHERE hire_date > 1980 LIMIT 20;
```

## Find Minimum Salaries of Employees

```sql
SELECT e.first_name,e.last_name, MIN(s.salary) FROM employees e INNER JOIN salaries s
ON
	e.emp_no = s.emp_no;
```

## Find all the Employees whose last name starts with "A"

LIKE operator of SQL is used to fetch filtered data by searching for a particular pattern in the where clause.

When '%' symbol is used after A, it means that any character is fine after A.

```sql
SELECT * FROM employees.employees WHERE last_name LIKE 'A%';
```

## Find all the Employees whose last name ends with A

When '%' is used before A, it means that we are only interested in the last_name which ends in character A

```sql
SELECT * FROM employees.employees WHERE last_name LIKE '%A';
```

## Generate row number in SQL Without ROWNUM

```sql
SELECT name ,salary , (SELECT COUNT(*) FROM EMPLOYEE
e WHERE o.name >= e.name) row_num
FROM EMPLOYEE o
ORDER BY row_num
```

## Select the first 5 records from a table

### SQL server (Use TOP Command)

```sql
SELECT TOP 5 * FROM EMPLOYEE;
```

### Oracle (Use ROW NUM Command)

```sql
SELECT * FROM EMPLOYEE WHERE ROWNUM <=5
```

```sql
# Generic Method

SELECT name FROM EMPLOYEE o WHERE
(SELECT COUNT(*) FROM EMPLOYEE i WHERE i.name < o.name)
< 5;
```

---

*Originally published on nitendratech.com on 2017-12-14, updated 2024-02-18.*
