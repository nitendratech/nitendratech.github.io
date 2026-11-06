---
title: "What is an ACID property in the Database?"
description: "The ACID properties of a relational database transaction explained — atomicity, consistency, isolation, and durability — with use case examples and popular ACID-compliant databases."
pubDate: 2018-06-11
category: "Data Engineering"
subcategory: "Databases"
---

In a relational database, multiple transactions are used in [SQL (Structured Query Language)](https://www.nitendratech.com/database/learn-sql/) which can be one or multiple statements. A transaction is a single logical unit in which database content is either retrieved or modified. Transaction happens in reading or writing operations in a database. For a transaction to happen in a relational database, it needs to flow through a set of properties known as ACID. It stands for Atomicity, Consistency, Isolation, and Durability. It guarantees that [database](https://www.nitendratech.com/database/learn-database/) transactions are processed reliably in an application.

In this blog post, we will discuss these ACID properties in detail.

## Atomicity

Atomicity requires that each transaction be "all or nothing". It means that if one part of the transaction fails, the entire transaction fails to leave the database state unchanged. An atomic system must guarantee atomicity in every situation, including power failures, errors, and crashes. It follows a rule known as the "All or nothing rule".

## Consistency

Consistency ensures that data written to the database must be valid or consistent throughout the database. It also makes sure that this data is written according to all defined rules, including constraints, cascades, primary, foreign keys, and triggers. It makes sure that the database is consistent before and after any transaction.

## Isolation

Isolation ensures that the concurrent execution of transactions results in a system state that would not impact other sessions and users querying the database. Concurrent transactions can be executed in enterprise-based applications because of this isolation feature.

This property ensures that transactions in the database happen independently without any interference.

## Durability

This property ensures that once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors. In a relational database, once a group of SQL statements executes, the results need to be stored and permanently recorded in non-volatile memory to defend against power loss.

## ACID Use Case Examples

Most of the monetary-based transactions that one does daily are ACID-based transactions. Some examples can be paying for groceries, buying items online using a credit card or bank account, and transferring money between different banks.

Most of the financial-based transactions are ACID-based transactions, where money is transferred based on the atomic property of ACID. If there are any issues in a financial transaction, it can cause a financial loss to the organization facilitating the transaction.

Let's say we want to transfer some money from one bank account to another. When this transaction goes through, one bank account is credited whereas the other is credited. But if it fails halfway, the first bank account will be debited but not credited to the second account. This will cause a financial burden on the first bank.

## ACID Compliance Popular Database

In general, all the relational database management systems are compliant with ACID properties. Recently, some databases like Apache CouchDB have started providing ACID-based transactions even though they are NoSQL databases.

Some common and popular databases that are ACID complaints are given below.

- Oracle
- MySQL
- PostgreSQL
- SQLite
- Microsoft SQL Server

---

*Originally published on nitendratech.com on 2018-06-11, updated 2024-02-18.*
