---
title: "What is Structured Query Language(SQL)? Definitions of SQL"
description: "What SQL (Structured Query Language) is and its types — DDL, DQL, DML, DCL, and TCL — with the commands in each category and the features of database languages."
pubDate: 2018-04-18
category: "Data Engineering"
subcategory: "SQL"
---

SQL or Structured Query Language is a special-purpose programming language designed for managing data held in a [relational database management system (RDBMS)](https://www.nitendratech.com/database/relational-database/). It provides various ways of manipulating and creating databases using SQL queries. Here, the query is defined as a request for data or information from database tables or combination tables.

## Types of Language in SQL

SQL consists of various types of Language. They are given below.

- DDL (Data Definition Language)
- DML (Data Manipulation Language)
- DCL (Data Control Language)
- Transaction Control Language(TCL)

### Data Definition Language(DDL)

Data Definition Language or DDL statement defines structurally changes and drops schema objects. It defines data types and the relationships among them.

An implicit COMMIT occurs immediately before the database executes a DDL statement. When that statement is executed, a COMMIT or ROLLBACK occurs immediately afterward. These DDL statements enable one to change the structure of the database. For Example: `ALTER TABLE` changes the structure of a table.

**DDL commands**

Below are SQL-based Data Definition Language commands.

- CREATE
- ALTER
- DROP
- COMMENT
- TRUNCATE
- RENAME

### Data Query Language(DQL)

DQL command is used to query the data or retrieve certain records from the database tables.

**DQL Commands**

- SELECT

### Data manipulation language(DML)

Data Manipulation Language or DML has a set of SQL commands that deals with the manipulation of the data in an existing schema object. It is mainly used to insert/update/delete/query the data from the existing table.

**DML command**

Below are the three Data manipulation languages that SQL provides.

- INSERT
- UPDATE
- DELETE

### Data Control Language(DCL)

Data Control Language, or DCL, is the SQL command that deals with the rights and permissions over the database.

**DCL commands**

- GRANT
- REVOKE

### Transaction Control Language(TCL)

Transaction Control Language or TCL deals with the transaction within the [database](https://www.nitendratech.com/database/learn-database/).

**TCL Commands**

Below are the Transaction Control Languages that SQL provides.

- SET TRANSACTION
- COMMIT
- ROLLBACK

## Features of Database Languages

A database language can incorporate features like the below, depending upon which database you use.

- DBMS (Database Management System) specific configuration and storage engine management
- Computations to modify query results, like counting, summing, averaging, sorting, grouping, and cross-referencing
- Constraint enforcement (e.g. in an automotive database, only allowing one engine type per car)
- Application programming interface(API) version of the query language, for programmer convenience

## Conclusion

In this blog post, we read about SQL or Structured Query Language Definition and its types. We also read about the types of DDL along with its features.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2018-04-18, updated 2024-02-18.*
