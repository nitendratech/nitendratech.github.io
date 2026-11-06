---
title: "Essential Hive Query Language (HQL) Interview Questions"
description: "Interview questions focused on Hive Query Language (HQL) — running scripts, managing tables and partitions, strict mode, CAST, GROUP BY, and more."
pubDate: 2022-03-07
category: "Data Engineering"
subcategory: "Hive"
---

In an earlier blog post, we looked into various interview questions that can come with Hive and its architecture. In this blog post, we will mainly focus on the interview questions related to the Hive Query Language (HQL).

## Is Hive Query Language (HQL) case-sensitive?

HQL is not a case-sensitive language.

## How can we run the Hive query script file from CLI?

We can run the Hive query script file from CLI using the SOURCE command. Let's take a look at the below example.

```sql
hive> source /path/to/file/query_script_file.hql
```

## How do you list all Databases whose name starts with A in Hive?

We can use the LIKE operator with a combination of wildcard expressions similar to SQL for this task.

```sql
SHOW DATABASES LIKE a.*;
```

## How can we drop the table in Hive?

We can drop the table in Hive using the DROP table statement.

```sql
DROP TABLE <TABLE_NAME>;
```

## How can we Drop Hive Table Partitions?

We can drop the Hive table partition using the DROP PARTITION statement.

```sql
ALTER TABLE <TABLE_NAME> DROP PARTITION(<partition_column>=<partition_value>)
```

We can also use the logical operators in the query and drop multiple partitions at once.

```sql
ALTER TABLE <Table_Name> DROP PARTITION (dt < '20171014');
```

## How can you rename a table in Hive?

We can use the `ALTER TABLE` statement in the hive to rename a table. Below is the syntax of this statement.

```sql
ALTER TABLE <Old_Table_Name> RENAME TO <New_Table_Name>
```

## How can we change the data type of column in Hive?

We can use the `ALTER` statement to change the data type of column in the hive. Following is the syntax of this command.

```sql
ALTER TABLE TABLE_NAME REPLACE COLUMN_NAME(COLUMN_NAME dataType);
```

## How can set Hive Jobs to Strict Mode?

We can use the below settings to set the Hive job to strict mode.

```sql
set hive.mapred.mode = strict;
```

Once this setting is enabled, we cannot query the partition table without using the WHERE clause. This prevents a user from submitting a long-running job and avoids performing a full scan of a table in a query.

## How can we convert the String data type to float in Hive?

We can use the `CAST` operator in Hive to convert the String data type to float.

```sql
SELECT CAST(<hive_column_name> as FLOAT);
```

## How can we check to see if a particular partition exists in Hive?

We can check the partitions of a particular hive table using the `SHOW PARTITIONS` statement.

```sql
SHOW PARTITIONS hive_table_name PARTITION(hive_partitioned_column = 'partition_value')
```

## What is the significance of the 'IF EXISTS' clause while dropping a table in Hive?

We use the `IF EXISTS` clause when dropping the table in the hive. When we try to drop the table in the hive by using the DROP TABLE statement, we need to make sure that the table exists. Otherwise, the Hive DROP statement will throw an error. To prevent this error, we use the DROP TABLE IF EXISTS table name as we are not sure if the table exists.

```sql
DROP TABLE IF EXISTS hive_table_name ;
```

## How can we see the index on the hive Table?

We can see the index in the hive table using `SHOW INDEX` command as shown below.

```sql
SHOW [FORMATTED] (INDEX|INDEXES) ON hive_table_name_with_index [(FROM|IN) db_name];
```

This will list all indexes that are created in this table. It will show information such as index name, table name, column names used for keys, index table name, index type, and comment. Here `FORMATTED` is an optional keyword that prints the column title for each column.

## When do we use the USE command in Hive?

When we want to run several hive queries for the same database-based tables, we can use the `USE` command to fix the database. This command sets the database to a default database.

```sql
USE database_name;
```

## How can you Count Distinct Values from Hive Table?

We can count the distinct values using distinct keywords.

```sql
hive> SELECT COUNT(DISTINCT(<column_name>)) FROM <Table_Name> WHERE <partition_column>;
```

## How can you calculate the Sum of a particular Column in Hive?

We can use the `SUM` function in Hive to calculate the sum for certain columns. Let's take the below example.

```sql
SELECT SUM(employee_salary) as total_salary
FROM employee_table WHERE quarter_column='second';
```

Here we are calculating the sum of employee salaries for the second quarter. We are storing the result of the sum as the total_salary alias.

## When do we use the LOCAL clause in the hive?

When we want to load the data from the local file system, we use the `LOCAL` clause in the LOAD DATA statement.

## What is NOT IN clause in Hive?

We use the NOT IN clause in the hive when we want to select data, except for certain columns.

## When do we use Not Equals to clause in Hive?

`Not Equals` to a clause is used in the hive, when we want to select data from a hive table where the column value is not equal to a certain value. For example, we are trying to select all the column values from a table where a column value is not equal to 0.

```sql
SELECT * from <Table_name> WHERE <column_value> <> 0;
```

## How can we concatenate the input Strings in Hive?

Hive provides a function called `CONCAT` that can be used to concatenate the given input strings. These inputs can be given in the comma-separated list.

## What is the syntax to create a bucketed table in Apache Hive?

```sql
CREATE TABLE table_name
(var1 datatype1,var2 datatype2,var3 datatype3)
PARTITIONED BY (var4 datatype4,var5 datatype5)
CLUSTERED BY (VAR1)
INTO 5 BUCKETS
ROW FORMAT DELIMITED
FIELDS TERMINATED BY 'delimiter' LINES
TERMINATED BY '\n'
TBLPROPERTIES ("SKIP.HEADER.LINE.COUNT"="1")
```

## What is the Syntax to create a hive table with partition columns?

Following is the syntax to create the hive table with partition columns.

```sql
CREATE TABLE table_name
(col1 datatype1,col2 datatype2,variable3 col3)
PARTITIONED BY (col4 datatype4)
ROW FORMAT DELIMITED
FIELDS TERMINATED
BY 'delimiter'
LINES TERMINATED BY '\n'
TBLPROPERTIES ("SKIP.HEADER.LINE.COUNT"="1")
```

## How can we check if certain columns do not have null values in Hive?

We can use the `<>` operator to check for null value in the Hive as shown below.

```sql
SELECT employee_name from [HIVE Table] WHERE employee_name <> '';
```

## What is the use of GROUP BY in Hive?

Group by is used to perform an aggregate operation on top of a hive table. Some common uses of GROUP BY are given below.

```sql
SELECT count(*) as count,col1,col2
     from <table_name>
     GROUP BY col1,col2;
SELECT count(*) as count,col1,col2
   from <table_name>
   GROUP BY col1,col2 HAVING count>1;
```

## What is the use of the WHERE In clause in HIVE?

`WHERE IN` clause allows checking multiple values of a column at once from Hive Table.

```sql
SELECT * FROM <table_name> WHERE column_name IN('va1','val2')
```

## How can we get the Hive table data in CSV format with headers?

We can use the below generic command to get the hive data or hive query in CSV format. You can run the below.

```sql
hive -e 'set hive.cli.print.header=true;
USE hive_database_name;
 select * from <hive_table_name> WHERE <partition_column>=<partition_value> LIMIT 20' | sed 's/[\t]/,/g'' > /home/<username>/hive_table_name_table_results.csv
```

## How can you get a detailed description of a table in Hive?

We can use below hive command below to get a detailed description of a hive table.

```sql
hive> describe extended <tablename>;
```

## What is the use of the `REPEAT` function in Hive?

`REPEAT` function in hive repeats the input string `n` times specified in the command.

```sql
--Command
SELECT REPEAT('Hello',3) FROM HIVE_TABLE;
-- Output: HelloHelloHello
```

## What is the use of the `REVERSE` function in Apache Hive?

The REVERSE function in the hive will reverse the characters in a string.

```sql
SELECT REVERSE('Earth') FROM HIVE_table;
```

Above Hive Query Language (HQL) returns the output `htraE`

## How can hive tables In the Hive be repaired when new partitions are added?

We can use the `msck` repair table command to repair the table in the hive.

```sql
hive> msck repair table <hive_table_name>;
```

## How can someone access the Hive Subdirectory recursively?

We need to enable certain settings in the hive to true so that we can access subdirectories recursively.

```sql
hive> set mapred.input.dir.recursive=true;
hive> set hive.mapred.supports.subdirectories=true
```

These settings work well for the below directory structure.

```
/date/month/day
```

---

*Originally published on nitendratech.com on 2022-03-07, updated 2024-01-07. Migrated to nitendratech.github.io as the first WordPress import, in GA4 view order.*
