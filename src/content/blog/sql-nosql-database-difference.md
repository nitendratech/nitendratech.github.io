---
title: "Important difference between SQL and NoSQL Database"
description: "The key differences between SQL (relational) and NoSQL (non-relational) databases — data model, schema, transaction support, joins, scalability, and examples."
pubDate: 2020-10-25
category: "Data Engineering"
subcategory: "Databases"
---

A relational database is a digital database based on the relational model of data and uses [Structured Query Language (SQL)](/blog/learn-sql/) and follows [ACID (Atomicity, Consistency, Isolation, Durability)](/blog/acid-property-database/) property strictly.

SQL databases have been a primary data storage mechanism for more than four decades. Usage exploded in the late 1990s with the rise of web applications and open-source options such as MySQL, PostgreSQL, and SQLite.

[NoSQL](/blog/nosql-databases/) or Non-Relational databases have existed since the 1960s, but have recently been gaining traction with popular options such as MongoDB, CouchDB, Redis, and Apache Cassandra. They are a data storage system that was designed for unstructured data which does not follow an ACID property like a traditional RDBMS but follows a property called [CAP](/blog/cap-theorem/) theorem.

We will explore the difference between SQL and NoSQL in this blog post.

## Non-Relational (NoSQL) database vs Relational Database(SQL)

| Name | Relational Database(SQL) | Non-Relational Database (NoSQL) |
| --- | --- | --- |
| **Database Model** | RDBMS in the form of Tables (row/column) | Graph, Columnar, Key-value pair, Document Wide Column Stores |
| **Data Schema** | Has Predefined and Strict Schema | Unstructured data and supports flexible Schema |
| **Transaction Support** | Yes, supports ACID property | No, based on BASE {CAP Theorem} |
| **Foreign Keys** | Yes | No |
| **Query Language** | Structured Query Language(SQL) | Unstructured Query Language (UnQL) |
| **Data Integrity** | Most SQL databases allow you to enforce data integrity rules using foreign key constraints. The schema forces rules for the database to follow | The same data integrity options are not available in the NoSQL database; you can store what you want regardless of any other documents. |
| **Joins** | SQL queries offer a powerful JOIN clause. We can obtain related data in multiple tables using a single SQL statement. | NoSQL has no equivalent of JOIN |
| **Scalability** | Vertically Scalable | Horizontal Scalable |
| **Examples** | MySQL, Oracle, SQLite, Microsoft SQL Server, PostgreSQL | Cassandra, MongoDB, Redis, HBase, Neo4j, CouchDB, RavenDB |

As a relational database supports the table-based structure, it is a better option for applications that needs multi-row transactions such as accounting system.

## References

[SQL-VS NoSQL](https://www.sitepoint.com/sql-vs-nosql-differences/)

---

*Originally published on nitendratech.com on 2020-10-25, updated 2022-06-05.*
