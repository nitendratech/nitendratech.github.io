---
title: "What is a Relational Database Management System(RDBMS)? Definitions and Types"
description: "What a relational database and RDBMS are — the properties of the relational data model, key terms like relations, tuples, and tables, the types of operations, and examples like Oracle, MySQL, and SQL Server."
pubDate: 2017-10-18
category: "Data Engineering"
subcategory: "Databases"
---

A [database](https://www.nitendratech.com/database/learn-database/) is called a relational data model, as it represents the relationship between one or more databases. The relationship is known as the relational database model. It provides flexibility and allows one database to have a relation to another database. It can access the data from many databases at one time over the network.

## Properties of Relational Data Model

The relational model has the following major characteristics.

- The Relational Model has **Well-defined objects** to store or access the data of a database.
- The Relational Database has **clearly defined actions** to manipulate the data and structure of the database
- **Strict integrity** rules govern the operations of the data and structure of a database.
- **Entity integrity:** this is used to maintain the integrity at the entity level
- **Referential integrity:** it is used to maintain integrity on all the values that have been referenced.

Entity integrity tells that in a database, every entity should have a unique key; on the other hand, referential integrity tells that in the database every table value for all foreign keys will remain valid.

## Relational Database important terms

This database stores the data in a set of simple relations.

- **Relations:** Relations are a set of tuples.
- **Tuples:** It is an unordered set of attribute values. Ex: (2,3). ("Cat", "Dog")
- **Table:** It is a two-dimensional representation of relations in the form of rows(tuples) and columns (attributes).
- **Columns** in a table are vertical and are called fields
- **Rows** in the tables are horizontal and referred to as records.
- **Relational database:** It is a database that stores data in relations (tables)

Every row in a table has the same set of columns.

### Why is called a Relational Database Management System(RDBMS)

A Relational Database Management System(RDBMS) is a computer software application that interacts with end-users, other applications, and the database itself to capture and analyze data. It is a collection of programs that enables users to create and maintain a database. The DBMS is a general-purpose software system that facilitates the processes of defining, constructing, manipulating, and sharing databases among various users and applications.

## Types of Operations in RDBMS

There are mainly two types of operations in RDBMS.

- **Logical Operation**

In logical operation, the application will specify what content is required. Example: A query request to add an employee name to an existing table. This will add a new employee record to that table

- **Physical Operation**

In this case, RDBMS determines the steps for the operation. For Example, the Application executes the query to get the latest record from the table. RDBMS will determine how to get that record. It might use an index to find the requested rows, read the data into memory, and perform many other steps before returning the record to the application.

## Example of Relational Data Management System

Most modern Relational database management systems include any one of the below software

- Oracle Database
- MySQL database
- Microsoft SQL Server Database
- IBM DB2

## Conclusion

In this blog post, we read about the Relational Data Management System(RDBMS), the characteristics of the Relational Data model, and the types of operation in the Relational Data Model. We also saw some examples of existing RDBMS in the current market.

Please share this blog post on social media and leave a comment with any questions or suggestions.

## References

Fundamentals Of Database Systems Sixth, Edition

*Originally published on nitendratech.com on 2017-10-18, updated 2024-02-18.*
