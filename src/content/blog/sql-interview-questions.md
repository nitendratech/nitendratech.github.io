---
title: "Important SQL Interview Questions"
description: "Important SQL interview questions and answers covering databases and RDBMS, SQL commands (DDL, DML, DCL, TCL), subqueries, views, joins, constraints, and aggregate functions."
pubDate: 2022-01-25
category: "Data Engineering"
subcategory: "Interview Questions"
draft: false
---

In this blog post, we will go through important SQL Interview questions and answers that will help you prepare for the next SQL Interview.

**Question: What is a Database?**

**Answer:** A Database is a collection of instruction information or data that are organized and stored in a computer-based system. The main purpose of the database is to store, collect, and retrieve information to be used by database-related applications. As data in the database is stored in a specific format, different client software can access the data at the same time.

**Question: What do you understand by Relational Data Management System(RDBMS)?**

**Answer:** RDBMS stands for Relational Data Management System. A [database](/blog/learn-database/) is called a relational data model, as it represents the relationship between one or more databases. The relationship is known as the relational database model. It provides flexibility and allows one database to be about another database. This database uses a particular structure such as rows and columns to store, identify, access data, and relate to other data in the database. We can use Structured Query Language or SQL to access the data from Relational Databases easily.

**Question: What is SQL?**

**Answer:** SQL stands for Structured Query Language. [SQL](/blog/learn-sql/) is a programming language used to retrieve, manipulate, and store data from [relational database management systems (RDBMS)](/blog/relational-database/).

SQL is ANSI (American National Standards Institute) and International Organization for Standardization (ISO) standard-certified language that can be used for interacting with a variety of databases. It is a declarative language where we give certain instructions or operations without giving specific details about how to complete that task.

**Question: What are the Types of Language in SQL?**

**Answer:** SQL consists of various types of Language. They are given below.

- DDL (Data Definition Language)
- DML (Data Manipulation Language)
- DCL (Data Control Language)
- DQL – Data Query Language
- TCL- Transaction Control Language

**Question: What are the different DML commands in SQL?**

**Answer:** We use DML commands for managing data present in the database. Below are the different DML commands.

- SELECT: Select specific data from a database
- INSERT: Inserts new records into a table
- UPDATE: Updates existing records to a database table
- DELETE: Deletes existing records from a table

**Question: What are the different DDL commands in SQL?**

**Answer:** We use DDL commands to define or alter the structure of the database.

- CREATE: Create databases and database objects
- ALTER: Alters existing database objects
- DROP: Drops databases and database objects
- TRUNCATE: Removes all records from a table but not its database structure
- RENAME: Renames database objects

**Question: What are the different DCL commands in SQL**

**Answer:** We use DCL commands to create roles, grant permission, and control access to the database objects.

- GRANT: Provides user access
- DENY: Deny permissions to users
- REVOKE: Removes user access

**Question: What are the different TCL commands in SQL?**

**Answer:** We use TCL commands to manage the changes made by DML statements.

- COMMIT: Writes and stores the changes to the database
- ROLLBACK: Restores the database since the last commit

**Question: What are the SQL major commands?**

**Answer:** Below is the list of major SQL commands that the database SQL needs to support to be ANSI standard.

- SELECT
- UPDATE
- INSERT
- DELETE
- WHERE

**Question: What are the actions that SQL can perform?**

**Answer:** There are many actions that SQL can perform. Some of these are listed below.

- Retrieve data from a database
- Delete records from a database
- Create a new database/table
- Insert records data in a database
- Create views in a database
- Set up permissions on tables, procedures, views, and database

**Question: What are the different types of SQL Statements?**

**Answer: The following** are the different Statements supported by SQL.

### DDL (Data Definition Language)

In DDL we define the database structure such as tables and also modify it. There are three main statements in DDL. They are `CREATE`, `ALTER` and `DROP`.

### DML (Data Manipulation Language)

We use the DML statements to manipulate the data in the records. There are mainly four commonly used DML statements namely `SELECT`, `UPDATE`, `INSERT` and `DELETE`.

### DCL (Data Control Language)

We use the DCL statements to set certain privileges such as `GRANT` and `REVOKE` database access permission for certain users.

**Question: What is a Subquery in SQL?**

**Answer:** A subquery is a SQL query that is nested inside the main query. It is mainly added to the `WHERE` clause as part of another SQL statement. In other words, a subquery is also called an inner select or inner query. It is mainly useful in selecting some rows in a table with a condition that depends upon data that is contained in the same table or a different table.

Let's take an example of the below subquery where we want to select employees from the employee table for only those employees whose date of birth is `1982`.

```sql
SELECT * FROM EMPLOYEE WHERE EMPLOYEE_NAME IN (SELECT EMPLOYEE_NAME FROM EMPLOYEE_ADMIN WHERE EMPLOYEE_DOB='1982');
```

We can use comparison operators like >, <, or = in a Sub Query. The inner query executes before the main query such that the result obtained from the inner query is passed to the main query.

**Question: What are the types of sub-query?**

**Answer:** A subquery can be classified into two types based on the output it returns.

- **Single row subquery:** Returns only one row from the inner `SELECT` statement.
- **Multiple row subquery**: Returns more than one row from inner `SELECT` statement.

We can nest the subquery in a `INSERT` `SELECT`, `UPDATE` or `DELETE` statement.

**Question: What is the use of `UPPER` function in SQL?**

**Answer:** `UPPER` the function converts a string in a given column to the upper case. To use in SQL, we need to make sure the values given in the column are of VARCHAR data types.

```sql
SELECT UPPER('hello') FROM DUAL;
```

**Question: How do you find out the count of a given table using SQL?**

**Answer:** We can use the `COUNT` command in SQL to find the total count from a table.

```sql
SELECT COUNT(*) FROM TABLE_NAME;
```

This `COUNT` function returns the number of rows that match a certain condition or criterion.

So we can also use the `COUNT` function with a where clause.

```sql
SELECT COUNT(*) FROM <table_name> WHERE <SQL_CONDITION>;
```

**Question: How do you get the largest or Maximum value from a selected Column?**

**Answer:** We use the `MAX()` function to get the maximum or largest value.

```sql
SELECT MAX(column_name) FROM table_name;
```

```sql
SELECT MAX(<column_name>) FROM table_name WHERE <sql_condition>;
```

**Question: What is View in SQL?**

**Answer:** [A database](/blog/learn-database/) view is like a subset/snapshot of tables that are stored logically in a database. It is a virtual table that contains rows and columns similar to a real table. It is created by using a query that reads the data from the underlying table when the view is accessed.

Let's take an example.

```sql
CREATE VIEW customer_order_view AS SELECT customers.customer_id, customers.customer_name, orders.order_id, orders.order_date FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id
```

This query creates a view called customer_order_view, which combines data from the customers and orders tables.

**Question: How do You create a Database View?**

**Answer:** We can create views using `CREATE VIEW` statement in our [SQL](/blog/learn-sql/) query. We can give a virtual table name to the view, a list of column names, and a query to specify the contents of the view.

Below is the syntax for creating views.

```sql
CREATE VIEW <view-name> AS
SELECT <column_name1,column_name2>
FROM <table_name>
WHERE <condition>
```

**Question: What does the Abbreviation SQL stand for?**

**Answer:** SQL abbreviation stands for Structured Query Language.

**Question: How do we select all the records from the given table using SQL?**

**Answer:** In SQL, the following syntax is used to select all the records from the table.

SELECT * from TABLE_NAME;

**Question: Do you know any SQL operators that perform multiple-row comparisons?**

**Answer: Two SQL operators perform** multiple row-level comparisons.

- IN
- ANY

**Question: Can we have more than one foreign key on a table?**

**Answer:** Yes, We can have many foreign keys but only one primary key.

**Question: What is the difference between Rename and Alias?**

**Answer**: When we use a RENAME in SQL, it is used to give a permanent name to a table or column.
When we use an alias, we are giving a temporary name to a table or column.

**Question: What is the use of the NVL function in SQL?**

**Answer:** The NVL function is used In SQL to replace the null(blank values) with a certain string value.

```sql
SELECT NVL(customer_name, 'Not Available') from customer_table;
```

This will replace the null values of the customer name column with the `Not Available` String.

**Question: Which SQL statement is used to add a new row in the database table?**

**Answer**: We use the INSERT INTO statement to insert/add a new row in a table.

**Question: What does the Aggregate function do in SQL?**

**Answer:** Aggregate function in SQL is used in a table to calculate values from multiple columns and return a single value.

**Question: What are different aggregate functions available in SQL?**

**Answer:** There are different aggregate functions available in SQL, which are given below.

COUNT(): It returns the total number of rows in that table.

MAX(): Returns the largest column value from the given records

MIN(): It returns the smallest column value from the given records.

SUM(): It returns the sum of given column values.

FIRST(): It returns the first column value from a given number of rows.

LAST(): It returns the last column value from a given number of rows

AVG(): It returns the average value from specified columns.

**Question: What is the Difference between VARCHAR2 AND CHAR datatype in SQL?**

**Answer:** When we use the VARCHAR2 data type, it can store data having variable-length characters. When we use CHAR data type, it can store data that has fixed length character

**Question: How can we add, modify, or drop columns in a database table using SQL?**

**Answer:** In SQL, an `ALTER TABLE` statement is used for adding, modifying, or dropping columns in a database table.

**Question: How to update a view using SQL in a Database?**

**Answer:** We can update a view using a `CREATE` or `REPLACE` view statement. The below query will show how to do that.

```sql
CREATE OR REPLACE VIEW table_view AS SELECT col_name(s) FROM table_name WHERE condition
```

**Question: What is DML in SQL?**

**Answer:** DML stands for Data Manipulation Language. It is used to manipulate the existing data in any of the following ways.

Inserting new records —> `INSERT` Statement

Deleting an existing record —> `DELETE` statement

Updating some column values. —> `UPDATE`

Here, `INSERT`, `UPDATE`, and `DELETE` are `DML` statements.

**Question: What is Join in SQL?**

**Answer:** [SQL](/blog/learn-sql/) Join is a query in SQL that is used to combine data from two or more tables based on a common field among them. Joins indicate how SQL should use data from one table to select the rows in another table. By using joins, you can retrieve data from two or more tables based on logical relationships between the tables in a [database](/blog/learn-database/).

**Question: What are the different types of Join in SQL?**

**Answer:** The following are the most common joins.

- Inner Join
- Left Join or Left Outer Join
- Right Join or Right Outer Join
- Full Join

**Question: What is the difference between `DELETE` and `TRUNCATE` statements in SQL?**

Answer: In SQL, `DELETE` is a Data Manipulation Language (DML) command, whereas `TRUNCATE` is a Data Definition Language (DDL) command.

`DELETE` command is used to delete a few rows or all the table records, whereas `TRUNCATE` command deletes all the table rows.

The `DELETE` command provides support for `WHERE` clause that can be used to filter the data that we want to delete. But `TRUNCATE` command does not provide support for `WHERE` clause.

**Question: What is the Datatype of `ROWID`?**

**Answer:** In Oracle `ROWID` is Pseudocolumn that has Sting data type. It represents the address of the row in the database.

**Question: What are SQL Constraints?**

Answer: In SQL, constraints are defined as a set of rules that enforce some restriction when `insert`, `delete` or `update` command in the database runs.

**Question: What are the different types of constraints available in SQL?**

**Answer:** Below are some of the constraints available in SQL.

- Not Null
- Default
- Unique/Primary/Foreign Key
- Index
- Check

**Question: Does SQL have any feature that provides help in writing if/else statements?**

**Answer:** In SQL, we can write `if/else` statement using `CASE` a statement.

**Question: Do SQL Queries support the use of escape characters?**

**Answer:** In SQL, certain special characters are reserved for certain uses. If we want to use any of the special characters in our query and to get the data, we need to use escape characters so that the database engine interprets them as non-reserved characters. Some reserved characters are `[], (),  |,  >, %, ~`.

We can use braces `{}`, or backslash `\\` as escape characters.

**Question: What is the difference between `WHERE` clause and `HAVING` clause?**

**Answer:** We use `WHERE` clause to filter rows based on individual records of a table or a condition.

Example: We select the students with the first name "Harry" from the student table.

```sql
SELECT Id, name from student where firstName ="Harry";
```

We use `HAVING` clause to filter the groups based on the value of aggregate functions.

Example: We select those students whose department ID Count is greater than 10.

```sql
SELECT deptId, count(*) from student GROUP BY deptId HAVING COUNT (*)> 10.
```

**Question: What is the Blob data type in SQL?**

**Answer:** BLOB is a large binary object in which we can store large amounts of binary data. There are four types of Blobs.

- TINYBLOB
- BLOB
- MEDIUMBLOB
- LONGBLOB

**Question: What is the difference between UNION and UNION ALL?**

**Answer:** UNION combines the results of two or more SELECT statements and removes duplicates, while UNION ALL combines the results of two or more SELECT statements without removing duplicates.

**Question: What is a self-join in SQL?**

**Answer:** A self-join is a join operation in which a table is joined with itself. It is useful for comparing rows within the same table or for creating hierarchical queries.

**Example:**

```sql
SELECT e1.employee_name, e2.employee_name FROM employee e1 JOIN employee e2 ON e1.manager_id = e2.employee_id
```

This query returns the names of employees and their respective managers.

**Question: What is a trigger in SQL?**

**Answer:** A trigger is a database object that is associated with a table and automatically executes a set of SQL statements in response to a specific data modification event, such as an INSERT, UPDATE, or DELETE operation.

**Question: What is the difference between a view and a table in SQL?**

**Answer:** A view is a virtual table that is created by a query and from a SELECT statement. It does not store data itself but only retrieves data from one or more tables. A table is a physical structure that stores data in a database. Views have several benefits such as simplified data access, improved security, and reduced data redundancy.

**Question: What is the difference between INNER JOIN and OUTER JOIN?**

**Answer:** INNER JOIN returns only the matching rows from both tables, while OUTER JOIN returns all rows from one table and matching rows from the other table. There are three types of OUTER JOIN: LEFT OUTER JOIN, RIGHT OUTER JOIN, and FULL OUTER JOIN.

Example:

INNER JOIN:

```sql
SELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id
```

This query returns only the rows where there is a match between the customer_id column in the orders table and the customer_id column in the customer's table.

LEFT OUTER JOIN:

```sql
SELECT * FROM orders LEFT OUTER JOIN customers ON orders.customer_id = customers.customer_id
```

This query returns all the rows from the orders table and matching rows from the customer's table. If there is no match, the customer columns will be NULL.

**Question: What is the difference between SQL group vs. having?**

**Answer:** `GROUP BY` clause in SQL is to group rows with the same or shared values while `HAVING` clause restricts the results returned by `GROUP BY` clause.

HAVING Clause in SQL is applied to each set of groups of the grouped table. If we do not use `GROUP BY` clause, `HAVING` clause is applied to the entire result as a single group.

---

*Originally published on nitendratech.com on 2022-01-25, updated 2024-02-18.*
