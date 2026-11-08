---
title: "What is Entity and Table Relationship in Database?"
description: "What an entity is in a relational database and the four types of table relationships — one-to-one, one-to-many, many-to-many, and self-referencing — plus junction tables."
pubDate: 2019-08-26
category: "Data Engineering"
subcategory: "Databases"
---

When we design tables in a [relational database](/blog/relational-database/), different tables can hold different information. This information is held in the form of an entity. So an entity can be defined as a real-world object, either tangible or intangible, that can be easily identifiable.

If you take the example of an educational institute, you can have a separate entity for students, professors, departments, and staff. Each entity has associated properties that provide an identity. If you want to link these entities, you need to have a relationship between them.

Relation in the relational database model is the connection between different tables. The data referenced by the relation come in the same domain and have the same constraints.

## Types of Relationships in Database Tables

There are mainly 4 types of relationships in database tables.

- **One-to-One Relationship**
- **One-to-Many Relationship**
- **Many-to-One Relationship**
- **Self-Referencing Relationship**

### One-to-One Relationships

Each record in one database table is linked to one and only one other row in another table in a one-to-one relationship. In a one-to-one relationship between Table A and Table B, each row in Table A is linked to another row in Table B. The number of rows in Table A must equal the number in Table B.

### One-to-Many Relationships

Each record in one table can be related to many rows in the related table in a one-to-many relationship. This effectively saves storage as the related record does not need to be stored multiple times in the related table. For example, an Employee ID in an employee table can be linked to a Salary and address table.

### Many-to-Many Relationships

One or more rows in a table can be related to 0, 1, or many rows in another table in a many-to-many relationship. A mapping table is required to implement such a relationship.

### Self Referencing Relationships

This is used when a table needs to have a relationship with itself. The primary/foreign key relationships can point to the same table.

### Junction Table

A junction table is a place to store attributes of the relationships between two lists of entities. A junction table allows us to create the many-to-many relationship and prevents us from adding duplicate entries.

---

*Originally published on nitendratech.com on 2019-08-26, updated 2024-02-18.*
