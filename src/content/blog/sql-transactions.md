---
title: "What are SQL Transactions?"
description: "What SQL transactions are — a logical atomic unit of database operations satisfying the ACID properties — and the transaction controls: BEGIN TRANSACTION, COMMIT, ROLLBACK, SAVEPOINT, and SET TRANSACTION."
pubDate: 2022-07-27
category: "Data Engineering"
subcategory: "SQL"
---

A transaction is a logical atomic unit of [database](https://www.nitendratech.com/database/learn-database/) operations that is executed as a single unit. It can have a single or multiple statements. [SQL](https://www.nitendratech.com/database/learn-sql/)-based transaction satisfies the [ACID](https://www.nitendratech.com/database/acid-property-database/)-based property which makes the transaction atomic, consistent, isolated, and durable operation. A transaction as a whole can be committed or rolled back from the database.

Each database transaction is isolated from other transactions. When the transaction executes successfully and satisfies all the database constraints, it persists in storage. A transaction can have `insert` or `delete` or `UPDATE` statement that will perform these operations on underlying [data](https://www.nitendratech.com/datascience/data-explained/). The transaction ends when it is either committed or rolled back by using `COMMIT` or `ROLLBACK` statement. If any statement in the transactional block throws an error, the entire transaction is rolled back.

## Transaction Controls

There are four transaction controls in the database.

- BEGIN TRANSACTION: This is a SQL statement that indicates the beginning of each transaction.
- COMMIT: It saves all the changes made through the transaction.
- ROLLBACK: It reverts to the changes made by the transaction.
- SAVEPOINT: It sets the point where the transaction is to be rolled back
- SET TRANSACTION: It is used to give the name of a transaction.

---

*Originally published on nitendratech.com on 2022-07-27, updated 2024-08-03.*
