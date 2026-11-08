---
title: "What are SQL Unions?"
description: "SQL UNION explained — how it combines the results of two or more queries into a single result set, UNION vs UNION ALL, and how UNION differs from MINUS and INTERSECT."
pubDate: 2020-06-05
category: "Data Engineering"
subcategory: "SQL"
---

SQL Stands for Structured Query Language(SQL). SQL UNION combines the results of two or more queries into a single result set in a [database](https://www.nitendratech.com/database/learn-database/) that includes all the rows that belong to all queries in the union.

```sql
SELECT 1 AS [Column1], 2 AS [Column2] UNION SELECT 3 AS [Column1], 4 AS [Column2]
```

![SQL Union](/images/union.jpg)

Figure: [Union](https://stackoverflow.com/questions/905379/what-is-the-difference-between-join-and-union)

## Union vs Union All

Union combines two tables by removing duplicates, whereas Union All combines two tables by including all data, even if they are duplicates.

## Differences Between UNION, MINUS, and INTERSECT

- UNION combines the results from 2 tables and eliminates duplicate records from the result set.
- The MINUS operator, when used between 2 tables, gives us all the rows from the first table except the rows which are present in the second table.
- INTERSECT operator returns us only the matching or common rows between 2 result sets.

---

*Originally published on nitendratech.com on 2020-06-05, updated 2024-08-03.*
