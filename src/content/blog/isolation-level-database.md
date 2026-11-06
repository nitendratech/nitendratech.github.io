---
title: "Transaction Isolation Level in Database"
description: "How transaction isolation levels work in relational databases — dirty reads, non-repeatable reads, phantom reads, the four ANSI/ISO isolation levels, and the default level in SQL Server, MySQL, Oracle, and PostgreSQL."
pubDate: 2021-11-16
category: "Data Engineering"
subcategory: "Databases"
---

Relational databases are one of the actively used applications in current Information technology-based companies. They are mainly used to retrieve, store, update and delete information for many verticals like financial systems, banks, airlines systems, travel, and tourism-based applications. The relational database follows certain properties known as an [ACID](https://www.nitendratech.com/database/acid-property-database/) when performing any transactions.

## What is Transaction in Database?

A transaction is a logical unit of work. To complete a logical unit of work, several actions may need to be taken against a database. It provides data integrity, correct application semantics, and a consistent view of data during concurrent access. Here, the transaction means a group of operations that are used to read, update, delete or store a database application.

An important part of the transaction-based database management system is concurrency control. Concurrency control is the ability to provide concurrent access to the same database by different users. It's similar to how a traffic light is used to control the flow of the vehicle. If the traffic light does not work properly, it causes deadlocks or traffic jams in the traffic system. Similarly, if concurrency does not work properly, the database cannot be used effectively.

The original versions of the concurrency control were designed to provide complete isolation to an application at a time. But the real-world application has multiple processes accessing the same database at the same time. Because of this reason, the database provides different isolation levels for the applications when they access the database.

An isolation level determines the behavior of the database transactions with the data. They define the different levels which determine if we can or cannot read the data.

## Read Phenomena

Standard SQL defines three read phenomenon that happens in the database, which can happen when multiple applications read and write to the same rows.

- Dirty Reads
- Phantom Reads
- Non-Repeatable Reads

### Dirty Read

Dirty read is a type of read phenomenon in a database system in which we see rows that were inserted or updated by another transaction. There is a chance that the first transaction might roll back the changes that can cause the second transaction to read invalid data. If this happens

We need to use the transaction level `TRANSACTION_READ_COMMITTED` in JDBC connection class to prevent dirty read phenomena.

### Non-Repeatable Reads

Non-repeatable reads happen, a transaction reads committed updates from another transaction. The row that we are trying to read will have different values since the transaction began.

## Phantom Reads

A phantom read happens during a transaction when new rows are added or removed by another transaction for the same records being read. There might be new rows or rows that have disappeared or added by the time that transaction is finished. This might cause the application to get stale data that affect the business operation.

## Transaction Isolation Levels

According to the ANSI/ISO SQL standard, we have four isolation levels.

- READ_COMMITTED
- READ_UNCOMMITTED
- REPEATABLE_READ
- SERIALIZABLE

## Default Isolation Level in Relational Database Management Systems

Most relational database management systems have a default isolation level. Below is the isolation level of some common databases.

| Database | Default Transaction Level |
| --- | --- |
| MS SQL Server | READ_COMMITTED |
| MySQL | REPEATABLE_READ |
| Oracle | READ_COMMITTED |
| PostgreSQL | READ_COMMITTED |

---

*Originally published on nitendratech.com on 2021-11-16, updated 2023-07-26.*
