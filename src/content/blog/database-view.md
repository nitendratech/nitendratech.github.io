---
title: "What is Database View?"
description: "A database view is a virtual table based on a query — what views are, the benefits of using them (restricting access, hiding complexity, data independence), and the CREATE VIEW syntax."
pubDate: 2021-03-31
category: "Data Engineering"
subcategory: "Databases"
---

[A database](/blog/learn-database/) view is like a subset/snapshot of tables that are stored logically in a database. It is a virtual table that contains rows and columns similar to a real table. It contains a query that reads the data from the underlying table when the view is accessed. Database views do not contain data of their own but derive data from base tables. Base tables can be either tables or other views. All operations performed on a view actually affect the base tables.

Views are mainly used to implement table and field-level security and hide complicated queries.

![Database View](/images/database_views.png)

## What is the use of Database View?

When working with a relational database, you will face many complex issues or challenges which are solved by views. Some of those benefits or advantages of views are given below.

### Restricting access to data

Users have the right to access the view, but not to access the source table from which the view is created. This will restrict users to all the data that the source table has.

Let's say you have twenty columns in a table and want to give access only to 10 columns to a user because of security reasons. You can just create views instead of creating another table.

### Hide Data Complexity

When we need to populate data from multiple tables, we need to use join. This becomes complex and can be difficult to navigate as we have to deal with multiple joins. When we use this Database view, it will hide these details from the user. So, users can query the view without knowing the details about how that view is generated.

### Data Independence

We can change the Column names of the views without changing the original base tables on which the view is based.

### Creation of different views from the Same Table data

We can create different views from the same table with different column names without affecting the original table.

### Storage

Database Views is not allocated storage space as it does not contain any data. These views take up little space as data is stored only in the source table. If you create an index on top of the view, it might take up more space than usual.

## How do You create a Database View?

We can create views using `CREATE VIEW` statement in our [SQL](/blog/learn-sql/) query. We can give a virtual table name to the view, a list of column names, and the query to specify the contents of the view.

Below is the syntax for creating views.

```sql
CREATE VIEW <view-name> AS
SELECT <column_name1,column_name2>
FROM <table_name>
WHERE <condition>
```

## Conclusion

In this blog post, you have learned what views are, the benefits of using views, and the syntax to create the view.

---

*Originally published on nitendratech.com on 2021-03-31, updated 2022-06-05.*
