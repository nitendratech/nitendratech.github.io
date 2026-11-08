---
title: "What are Database Constraints?"
description: "What database constraints are and the common types — NOT NULL, DEFAULT, PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and INDEX — and how they enforce business rules and data accuracy in a table."
pubDate: 2019-08-10
category: "Data Engineering"
subcategory: "Databases"
---

Database Constraints are rules/restrictions that are applied to the [database](/blog/learn-database/) table columns to limit the type of data that can be persisted in a table. It provides a way to implement business logic and rules in the database. It also prevents errors and can improve the accuracy and reliability of the database as a whole.

Database Constraints can be applied for single or multiple fields in an [SQL](/blog/learn-sql/) table during the creation of a table or after creating using the `ALTER TABLE` command.

## Common constraints

Various types of constraints are used to do different checks on the data. Some constraints check null values in the data, whereas some check the integrity of the data. Integrity constraints are used to ensure the accuracy and consistency of data in a relational database.

| Constrains | Definition |
| --- | --- |
| NOT NULL | Prevents/Restricts NULL value from being inserted into a column |
| DEFAULT | Automatically assigns a default value for a column when none is specified |
| PRIMARY KEY | Uniquely identifies rows/records within a database table |
| FOREIGN KEY | Uniquely identifies rows/records from external database tables |
| UNIQUE | Ensures Unique values are inserted into the field |
| CHECK | Check values within a column against certain conditions |
| INDEX | Indexes a field providing faster retrieval of records. |

## Conclusion

In this blog post, we learned about database constraints and how they can be used while creating a table.

---

*Originally published on nitendratech.com on 2019-08-10, updated 2024-02-19.*
