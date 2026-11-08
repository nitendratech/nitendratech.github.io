---
title: "Important Database Interview Questions"
description: "Database interview questions and answers covering databases, DBMS and RDBMS, transactions and ACID, normalization, keys, NoSQL, indexes, stored procedures, and data integrity."
pubDate: 2022-01-10
category: "Data Engineering"
subcategory: "Interview Questions"
draft: false
---

Following are the important Database Interview questions and answers that will help you prepare and excel for the next Database Interview.

**Question: What is a Database?**

**Answer:** A Database is a collection of instruction information or data that are organized and stored in a computer-based system. The main purpose of the database is to store, collect, and retrieve information to be used by database-related applications. As data in the database is stored in a specific format, different client software can access the data simultaneously.

**Question: What are the Characteristics of a Database?**

**Answer:** Most of the databases have the below characteristics.

- Insulates data from different applications
- Supports sharing of data by multiple users at once, enabling multiple transactions at the same time
- Supports multiple views of the same data
- Maintains the data secure
- Helps the business to improve their business by helping grow its revenue.

**Question: What is a Database Management System(DBMS)?**

**Answer:** DBMS stands for Database Management System. It is the software responsible for the creation, retrieval, updating, and management of the data. It ensures that the data is consistent, organized, and easily accessible by serving as an interface between the database and its end-users or application software.

**Question: What are the Types of Database Management Systems (DBMS)?**

**Answer:** There are mainly five types of database management systems. They are given below.

- Relational Database management system
- Network Database system
- Hierarchical Database System
- Object-oriented Database System
- NoSQL(Non-Relational) databases

NoSQL has been added recently as a separate type of database.

**Question: What do you understand by Relational Data Management System(RDBMS)?**

**Answer:** RDBMS stands for Relational Data Management System. A [database](/blog/learn-database/) is called a relational data model, as it represents the relationship between one or more databases. The relationship is known as the relational database model. It provides flexibility and allows one database to be about another database. This database uses a particular structure such as rows and columns to store, identify, access data, and relate to other data in the database. We can use the Structured Query Language or SQL to easily access the data from Relational Database.

**Question: What are the Examples of Relational Databases?**

**Answer:** The following are some popular SQL databases that we can find in the market.

- Oracle database
- Microsoft SQL Server
- MySQL database
- PostgreSQL
- Redis
- IBM DB2
- MySQL

**Question: What are the properties of a transaction in a Relational Database?**

**Answer:** Transactions in relational databases follow certain properties known as [ACID](/blog/acid-property-database/). They are given below.

- Atomicity
- Consistency
- Isolation
- Durability.

**Question: What do you understand by CRUD in the database?**

**Answer:** CRUD is an acronym for types of operations that can be executed in the database. They are Create, Read, Update, and Delete.

**Question: What do you understand by the database model?**

**Answer:** Database model means how the data is stored, assessed, and manipulated in the database. If the underlying data is stored in a table format with columns defined, this model is a relational database model.

**Question: What does the term record mean in a Database?**

**Answer:** A record is a collection of values or files in a specific table or entity. In a database, it is known as a row. Example: A subscriber billing amount.

**Question: What does the term Field mean in a Database?**

**Answer:** The term Field refers to a specific area within a record for specific data. It is known as a table in a database. An example could be a student ID on a student table.

**Question: What is the term Table mean in a database?**

**Answer:** The term table is a collection of records of specific types that are stored in rows and columns. It is the basic unit of data storage in DBMS. Example: student table is a collection of records related to all the students.

**Question: What does Schema mean in a database?**

**Answer:** A schema is a collection of database objects of a user in a given database. Databases can have multiple schemas, each of them having multiple tables.

**Question: What is a Cursor in a Database?**

**Answer:** A database cursor is a database object that is used to work on table data row by row. It is a pointer-like structure to a specific row within a query result that allows traversing over records in a database. It helps to retrieve, add, and remove the records from the database table. When we execute a SQL operation, it uses a work area based on memory called the cursor.

**Question: What is a cluster in a Database?**

**Answer:** Clusters in a Database are groups of tables that are physically stored together, as they have common columns in between them.

**Question: What is an ACID property in the Database?**

**Answer:** In a relational database, multiple transactions are used in [SQL (Structured Query Language)](/blog/learn-sql/) which can be one or multiple statements. For a transaction to happen in a relational database, it needs to follow a set of properties known as [ACID](/blog/acid-property-database/). It stands for Atomicity, Consistency, Isolation, and Durability. It guarantees that [database](/blog/learn-database/) transactions are processed reliably in an application. It helps to maintain the integrity and consistency of data in a database.

**Question: What is a transaction in a Database?**

**Answer:** A transaction is a single logical unit in which database content is either retrieved or modified. Transactions are a sequence of tasks that are performed logically in a database to obtain certain results. Database operations like creating, updating, and deleting records are part of the transactions that involve reading or reading operations. They are a combination of SQL queries that perform this task. When a transaction completes, it either fails or succeeds. If it succeeds, we will see the results in the table. Otherwise, we don’t see the results.

**Question: What is an Enterprise Data Warehouse(EDW)?**

**Answer:** A data warehouse or an [Enterprise Data Warehouse(EDW)](/blog/enterprise-data-warehouse/) is a centralized storage platform that contains historical data as well as current data. It is a process for collecting, storing, and delivering decision-support data that is derived from a transaction/relational [database](/blog/relational-database/).

**Question: What is Dimension in the Database?**

**Answer:** A dimension in a database is a structure that differentiates between different sources of data so that similar information can be grouped.

**Question: What is a Slowly Changing Database(SCD)?**

**Answer:** A[Slowly changing Dimension or SCD](/blog/slowly-changing-dimensions/)is a technique as part of the Change Data Capture (CDC) process that is used to track changes for certain columns over time. SCD is a dimension that stores and manages both current and historical data over time in a data warehouse. It is dimensions that change slowly over time, rather than changing on a regular schedule, time-base.

**Question: What is Normalization in a Database?**

**Answer:** Normalization is the process of successively reducing relations with anomalies to produce smaller, well-structured relations between the data in the tables. It uses the logical data modeling technique for tables to organize the data in the database to avoid data redundancy, insertion anomaly, update anomaly & deletion anomaly. It makes no assumptions about how data will be used in displays, queries, or reports. Furthermore, it places no constraints on how data can or should be physically stored or, therefore, on processing performance.

It involves breaking down tables into smaller, more manageable tables, and creating relationships between them. It is important because it helps to ensure that the data is consistent, accurate, and up-to-date.

There are different levels of normalization, known as normal forms. The most commonly used normal forms are the first normal form (1NF), second normal form (2NF), and third normal form (3NF).

Example:

Suppose you have a table called orders, which contains the following columns:

```sql
order_id, customer_name, customer_address, item_name, item_price, quantity, total_price
```

This table violates the first normal form, as it contains multiple values in each row.

We can create two tables `customers` and `order_items` from these columns to normalize this table.

The `customer`‘s table would contain the customer information, while the `order_items` table would contain the item information and the quantity ordered.

Customers table:

```sql
customer_id, customer_name, customer_address
```

Order_items table:

```sql
order_id, item_name, item_price, quantity, total_price
```

This structure is now in the first normal form, as each column contains only atomic values.

**Question: What is denormalization?**

**Answer:** Denormalization is the process of consciously adding redundancy to a database to improve performance. It is used when read performance is more important than write performance. However, it can lead to data inconsistencies and increased complexity in the long run.

**Question: What are the Keys in the Database?**

**Answer:** Keys are certain columns through which we can identify certain rows. There are numerous types of keys in a table depending on how you model the database.

**Question: What is a Primary key in a Database?**

**Answer:** A primary key is a single column or multiple columns in a relational database that is defined to have unique values. This primary key is used for row identification in the table, as it is a non-null/unique value. A table can have only one and only one primary key that comprises single or multiple columns.

Many database engines offer automatic primary generation key services that are useful in many applications.

The below example shows a table with a single primary key.

```sql
CREATE TABLE Employee (
  EMPLOYEE_ID INT NOT NULL,
   NAME VARCHAR(255),
   PRIMARY KEY (EMPLOYEE_ID)
);
```

Now let’s look at an example with multiple columns as the primary keys.

```sql
CREATE TABLE Employee (
  EMPLOYEE_ID INT NOT NULL,
   LAST_NAME VARCHAR(255),
   FIRST_NAME VARCHAR(255) NOT NULL,
   CONSTRAINT PK_Employee
   PRIMARY KEY (EMPLOYEE_ID, FIRST_NAME)
);

ALTER TABLE Employee ADD CONSTRAINT PK_Employee PRIMARY KEY(EMPLOYEE_ID, FIRST_NAME);
```

**Question: What is a Foreign Key in a Database?**

**Answer:** In a Relational database, multiple tables are linked together using a key called the Foreign key. Foreign keys are not always unique in the table where it is stored but are unique in the reference table. It is a constraint that establishes referential integrity by enforcing a relation between data in two tables or relations. The foreign key in the secondary table references the primary key in the primary table.

It is used to establish a relationship between two tables.

**Question: What is a Natural/Business Key in a Database?**

**Answer:** A Natural (Business) Key is the column or column(s) in the source data that identifies a unique row. It can be exposed on a business report and have business value in the company.

**Question: What is a Surrogate Key in a Database?**

**Answer:** A Surrogate Key is an artificially produced value, most often a system-managed, increment counter whose values can range from one to n. It has no business meaning and should not be exposed in reports.

**Question: What is a composite key?**

**Answer:** A composite key is a key that consists of two or more columns that together uniquely identify a record in a table.

**Question: What is a unique key?**

**Answer:** A unique key is a key in a database table that ensures that all values in a column or set of columns are unique.

**Question: What is a candidate key?**

**Answer:** A candidate key is a key that can be used as a primary key but is not currently selected as the primary key.

**Question: What are NoSQL databases?**

**Answer:** NoSQL databases are the kind of databases that do not have any fixed schema. Data in this database can be in JSON or document format, unlike the data stored in a relational database. They are most popular in applications where the transaction is not needed.

**Question: What are the examples of the Non-Relational Database?**

**Answer:** The following are some Popular NoSQL databases that we can find in the market.

- MongoDB
- Apache Cassandra
- Apache CouchDB
- Apache HBase

**Question: What do you understand about Graph databases?**

**Answer:** A graph database is a kind of database that has a graph-based structure for the schema. It uses nodes, edges, and properties to represent and store data. Some popular graph databases include OrientDB, Neo4j, and GraphQL.

**Question: What do you understand by the Time-Series database?**

**Answer:** A time-series database is a database that is mainly used for storing time-series data. In this database, data is indexed using one of the columns that are timestamp data. This database table especially shows the changes in data values over time.

**Question: What do you understand about the In-Memory Database?**

**Answer:** An in-memory database is a non-relational database that stores data in RAM (Random Access Memory) instead of persisting it on permanent storage like a disk. As the data is stored in memory, it provides faster response times to any application querying the data.

**Question: What do you understand by searching the Database?**

**Answer:** A search engine-based database is used for searching data content. This database engine uses indexes to categorize the pattern among the data. They are mainly used for search result rankings, complex expressions, and text-based searches.

**Question: What do you understand by ledger database?**

**Answer:** Ledger databases are mainly used to record a chain of activities or series of transactions from finance-based applications. Different frameworks such as blockchain, Ethereum, and Hyperledger can be used as a ledger database.

**Question: What is an index in a Database?**

**Answer:** An index is a structure in a database that is used to speed up the performance of queries and is used for faster retrieval of data from the table. It is created from a column or group of columns.

**Question: What is the difference between a clustered and a non-clustered index?**

**Answer:** A clustered index determines the physical order of data in a table, while a non-clustered index is a separate structure that maps the values in a specific column to the location of the data in the table.

**Question: What is a stored procedure in a Database?**

**Answer:** A stored procedure is a precompiled SQL code that is stored in a database and can be executed repeatedly, helping to simplify complex queries and improve performance.

**Question: What are the different reasons for using a Stored Procedure?**

**Answer:** There are many reasons for using stored procedures. Some of the important ones are given below.

- Reduces network loads and decreases execution time as they are precompiled
- Secures the database by restricting SQL injection.

**Question: How can we create a stored procedure?**

**Answer:** We can use the `CREATE PROCEDURE` statement followed by `SQL` statement to make the procedure logical. We can also define the input and output parameters that need to be passed to and from the procedure.

**Question: What do you understand by Data Integrity?**

**Answer:** Data Integrity is the measure of how accurate or how consistent data stored on the database is. It helps to measure the constraints that enforce business rules on the data when it is inserted in the table of databases.

**Question: What is an entity relationship diagram (ERD)?**

**Answer:** An entity relationship diagram (ERD) visually represents entities, attributes, and relationships in a data model.

**Question: What are the different components of the Entity Relationship Diagram(ERD)?**

**Answer:** The components of an ERD are given below

- Entities
- Attributes
- Relationships
- Primary and foreign keys.

**Question: What is COMMIT Operation in Database?**

**Answer:** COMMIT Operation in SQL is used to save all the changes made from Data Manipulation Language(DML) statements. let’s say we want to insert some records in a table using the INSERT INTO statement. Once we use the INSERT INTO statement, we can use the COMMIT; statement to make sure the changes are reflected in the database.

**Question: What is a rollback operation in a Database?**

**Answer:** A rollback operation is a transaction operation that undoes all changes made during the transaction and restores the database to its state before the transaction begins.

---

*Originally published on nitendratech.com on 2022-01-10, updated 2024-02-18.*
