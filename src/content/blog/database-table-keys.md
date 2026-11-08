---
title: "What are Database Keys?"
description: "What database keys are and the main types — primary key, foreign key, natural/business key, and surrogate key — with SQL examples for defining primary and foreign keys."
pubDate: 2022-05-10
category: "Data Engineering"
subcategory: "Databases"
---

Each [database](/blog/learn-database/) has one or more tables having rows and columns. Keys in the Database are columns or groups of columns that are used to identify rows in tables. These keys might or might not be unique.

## Types of Keys in Database

There are numerous types of keys in a table depending upon how you model the database. Some common keys are explained below.

- Primary Key
- Foreign Key
- Natural/Business Key
- Surrogate Key

## Primary Key

The primary key in a database table is a unique identifier for a row. This key contains a unique value and does not have a null value. This key can be created from a single or multiple columns.

Let's create a database table with a single column as the primary key.

```sql
CREATE TABLE employer
(
EMPLOYER_ID INT NOT NULL,
NAME VARCHAR,
PRIMARY KEY(EMPLOYER_ID))
;
```

We can also create a table with two columns as primary key.

```sql
CREATE TABLE employer
(
EMPLOYER_ID INT NOT NULL,
NAME VARCHAR,
CONSTRAINT PK_employer PRIMARY KEY(EMPLOYER_ID,NAME)
)
```

## Foreign Key

The foreign key consists of a single or group of columns in a table that refers to the primary key in another table. The foreign key makes sure that the relationship between the two tables is maintained. The table having the foreign key is labeled as a child table, whereas the table having the primary key is the reference or parent table. Foreign keys are not always unique in the table where it is stored, but are unique in the reference table.

```sql
CREATE TABLE employer_stat
(
ID INT NOT NULL,
EMPLOYER_ID INT,
NAME VARCHAR,
PRIMARY KEY(ID),
FOREIGN KEY(EMPLOYER_ID) REFERENCES employer(EMPLOYER_ID)
);
```

### Natural/Business Key

A Natural (Business) Key is the column or column(s) in the source data that identify a unique row. It can be exposed on a business report and have business value in the company.

### Surrogate Key

A Surrogate Key is an artificially produced value, most often a system-managed, increment counter whose values can range from one to n. It has no business meaning and should not be exposed in reports.

## Conclusion

In this blog post, we learned about what the database key is and its types.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2022-05-10, updated 2022-07-04.*
