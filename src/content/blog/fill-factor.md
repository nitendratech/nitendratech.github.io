---
title: "What is the Fill factor in SQL Server?"
description: "The fill factor in SQL Server specifies the percentage of space on each leaf-level page to be filled with data when an index is created or rebuilt, controlling free space to reduce fragmentation and improve performance."
pubDate: 2024-01-02
category: "Data Engineering"
subcategory: "SQL"
---

The fill factor in the Microsoft SQL server is the setting that specifies the percentage of space on each leaf-level page to be filled with [data](/blog/data-explained/) when the index is created or rebuilt. It controls the amount of free space left on the pages to reduce fragmentation and improve performance in the [database](/blog/learn-database/).

## Important Points of Fill Factor in Database

- **Default Fill Factor:** The default fill factor is 0 or 100% In SQL Server. It means the leaf-level pages are filled to their maximum capacity during index creation.
- **Custom Fill Factor:** The SQL server allows us to choose a custom fill factor (between 1 and 100) when creating or rebuilding the index.
- **Performance Impact:** We can have a variety of performance impacts depending upon what value of fill factor was used. A lower fill factor reduces fragmentation but increases the size of the index, leading to improved read performance in the database. In Contrast, a higher fill factor reduces the size of the index but may increase the likelihood of fragmentation, particularly when data is frequently inserted or updated.
- **Fragmentation Problem:** Fragmentation is the condition where the data within an index is not stored contiguously on the disk, leading to inefficient use of storage and potentially impacting query performance. The fill factor can be adjusted during index creation or rebuilding to reduce the fragmentation problem.

## Changing the Fill Factor

We can adjust the fill factor using the `ALTER` Index statement.

```sql
ALTER INDEX [IndexName] ON [TableName] REBUILD WITH (FILLFACTOR = 70);
```

This statement rebuilds the index with a fill factor of 70%.

---

*Originally published on nitendratech.com on 2024-01-02, updated 2024-02-19.*
