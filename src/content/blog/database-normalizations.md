---
title: "What is Database Normalization?"
description: "Database normalization explained — organizing data into smaller, well-structured relations to remove redundancy and anomalies, the common normal forms from 1NF to 6NF and DKNF, and the advantages and disadvantages."
pubDate: 2018-11-15
category: "Data Engineering"
subcategory: "Databases"
---

Most modern-day organizations consist of multiple data sources, which consist of multiple [databases](https://www.nitendratech.com/database/learn-database/) with complex data structures. It is very essential for an organization to break their table complexities and maintain a proper relationship between them.

Normalization is the process of successively reducing relations with anomalies to produce smaller, well-structured relations between the data in the tables. It uses the logical data modeling technique for tables to organize the data in the database to avoid data redundancy, insertion anomaly, update anomaly & deletion anomaly. It makes no assumptions about how data will be used in displays, queries, or reports. Furthermore, it places no constraints on how data can or should be physically stored or, therefore, on processing performance.

## Types of Database normalization

There are 9 normalizations that can be used inside the database. The most commonly used normal forms among these are given below.

- First normal form (1NF)
- Second normal form (2NF)
- Third normal form (3NF)
- Boyce & Codd normal form (BCNF)

These are shown in the table below:

| Normalization Level | Description |
| --- | --- |
| First normal form | This table represents a relation/entities with no repeating groups of attributes |
| Second normal form | Non-prime attributes are not functionally dependent on a subset of any candidate key |
| Third normal form | In a table, every non-prime attribute is non-transitively dependent on every candidate's key |
| Elementary key normal form | Super key dependency or elementary key dependency affects the functional dependency in a table |
| Boyce codd normal form | Every non-trivial functional dependency in the table is dependent on a Super key |
| Fourth normal form | Every non-trivial multivalued dependency in the table is dependent on a Super key |
| Fifth normal form (5NF) | Every non-trivial join dependency in the table is implied by the Super key of the table |
| Domain/key normal form (DKNF) | Every constraint on the table is a logical consequence of the table's domain constraints and key constraints |
| Sixth normal form (6NF) | The table features no non-trivial join dependencies at all |

## Advantage of Normalization

- The size of the database is decreased as duplicate data is eliminated by normalization.
- Performance is improved because of the fine-tuned tables with small size.
- The decrease in column size will lead to fewer indexes in a table, which makes it easier for maintenance tasks such as index rebuilding.
- Joins are needed when data is needed across the tables

## Disadvantage of Normalization

- As data is spread out throughout the database, there are more tables to join
- As tables do not contain duplicate data, joins are required to get the data across the tables. This increases the complexity of the [Structured Query Language(SQL)](https://www.nitendratech.com/database/learn-sql/) queries, making them slower to read from the database.

## References

[Database Normalization](https://en.wikipedia.org/wiki/Database_normalization)

Jeffrey A. Hoffer, Ramesh Venkataraman, and Heikki Topi. 2010. Modern Database Management (10th ed.). Prentice-Hall Press, Upper Saddle River, NJ, USA.

---

*Originally published on nitendratech.com on 2018-11-15, updated 2024-08-03.*
