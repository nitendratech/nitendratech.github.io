---
title: "Stored Procedure in Database"
description: "What a stored procedure is in a relational database — how to create one, call it from Java using JDBC, the advantages of using stored procedures, and recursive stored procedures."
pubDate: 2020-08-09
category: "Data Engineering"
subcategory: "Databases"
---

A stored procedure is defined as a group of [SQL (Structured Query Language)](https://www.nitendratech.com/database/learn-sql/) statements or subroutines that are stored inside the [relational database management system (RDBMS)](https://www.nitendratech.com/database/relational-database/) that performs a particular task. They are stored in the database data dictionary and are used for operations such as deleting a database or indexing a table. In this blog post, we will read about how Stored Procedures can be used in the [Database](https://www.nitendratech.com/database/learn-database/).

They are stored inside the database and form a logical unit and perform a particular task. For example, operations such as hire, fire, promote, and lookup on an employee database could be coded as stored procedures and executed by application codes (hire, fire, promote, lookup) could be coded as stored procedures executed by application code.

Many commercial-based applications use a stored procedure as an API (Application Programming Interface) for simplicity and security purposes. They don't come by default as part of the relational database model, but can be included in many commercial applications.

## Creating a Stored Procedure

The exact syntax of the stored procedure might be different for different databases. In general, the syntax would look like the below.

```sql
CREATE PROCEDURE <owner>.<procedure name>

   <Param> <datatype>
AS

   <Body>
```

We can take below example below.

```sql
CREATE PROCEDURE SAMPLE_STORED_PROCEDURE
AS
     SELECT name
     FROM SAMPLE_TABLE;
EXEC SAMPLE_STORED_PROCEDURE;
```

## Calling Stored Procedure through Java

We can use `CallableStatement` class in [JDBC (Java Database Connectivity)](https://www.nitendratech.com/programming/learn-jdbc/) API to call store procedure. Let's take an example to demonstrate this approach.

```java
CallableStatement cs = con.prepareCall("{call SAMPLE_STORED_PROCEDURE}");
ResultSet rs = cs.executeQuery();
```

## Advantages of using Stored Procedures

There are many advantages to using Stored Procedures. Some of them are listed below.

- It helps to reduce network traffic, and latency and boost the performance of the application.
- An execution plan based on the stored procedure can be reused, and cached in-database memory, reducing server overhead.
- It encapsulates logic providing better security to the data.
- They run in the same process as the database, which allows for further optimization and high throughput. Example: Truncating table using Stored Procedure
- Provides controlled access to data. End-users can use this to enter or change data, but cannot write procedures themselves.
- Protects against SQL injection: They have a security benefit as DBA's can grant execute rights to a stored procedure, but the user does not have read/write permissions directly on the underlying tables.

## Recursive Stored Procedure

A recursive stored procedure calls itself until a boundary condition is reached. This recursive functionality in the database is advantageous to programmers who want to deploy the same set of code several times when required. Improper use of this stored procedure might've caused slowness in the system's em or infinite loop execution.

---

*Originally published on nitendratech.com on 2020-08-09, updated 2022-06-05.*
