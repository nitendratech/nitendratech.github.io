---
title: "Introduction to JDBC"
description: "An introduction to JDBC (Java Database Connectivity) — its two-layer architecture, common API components, the four types of JDBC drivers, and the three types of JDBC statements."
pubDate: 2019-07-25
category: "Core Tech & Programming"
subcategory: "JDBC"
draft: false
---

JDBC stands for Java Database Connectivity. It is a standard Java API for interacting with a range of databases. We can access virtually any data source ranging from, [relational databases](/blog/relational-database/) to a spreadsheet using the JDBC API.

There are two layers in JDBC Architecture.

- **JDBC API:** It provides the application-to-JDBC Manager connection.
- **JDBC Driver API:** It supports the JDBC Manager-to-Driver Connection

It follows a bridge design pattern in which the JDBC API provides the abstraction and the JDBC drivers provide the implementation. We can plug the new drivers into the JDBC API without changing the client code.

![JDBC_API](/images/JDBC_API.png)

## Common JDBC API components

JDBC API consists of the following interfaces and classes.

- **Driver Manager**
  It is a class that manages a list of database drivers. This class can be different for different Databases. It matches connection requests from the java application with the proper database driver using the communication sub protocol.

- **Driver**

The JDBC Driver is an interface that enables a Java application to interact with a database. If we want to connect to different databases, we need JDBC drivers for each database. The JDBC driver makes a connection to the database and implements the protocol for transferring the query and result between the client and database.

- **Connection**

Connection Interface consists of different methods for contacting a database.

- **Statement**

The statement encapsulates an SQL statement that is passed to the database to be parsed, compiled, planned, and executed.

- **Result Set**

Result Set objects hold the data retrieved from a database when we execute an SQL (Structured Query Language) query using statement objects. We can iterate through the data using the Result set.

## Types of JDBC Driver

JDBC driver is one of the important components which enables an application to interact with the databases. There are four types of JDBC drivers.

- Type 1 Driver or JDBC-ODBC bridge driver
- Type 2 driver or Native-API driver
- Type-3 driver or Network protocol driver
- Type-4 driver or Thing Driver

### Types of JDBC Statements

**1. Statement** -It is Used for SQL Queries

**2. Prepared Statement**

It is mainly used for repetitive SQL queries. We cannot use the stored procedure in Prepared Statements. Instances of Prepared Statement contain an SQL statement that has already been compiled. This is what makes a statement "prepared"

Because Prepared Statement objects are precompiled, their execution can be faster than that of Statement objects. The prepared statement is used to execute SQL queries

**3. Callable Statement**

A Callable Statement object provides a way to call stored procedures in a standard way for all RDBMSs. A stored procedure is stored in a database; the call to the stored procedure is what a Callable Statement object contains. It is Used for Stored Procedures and functions

---

*Originally published on nitendratech.com on 2019-07-25, updated 2022-06-06.*
