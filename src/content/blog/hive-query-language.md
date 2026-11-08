---
title: "Introduction to Hive Query Language(HQL)"
description: "An introduction to Hive Query Language (HQL) with hands-on examples — changing the default metastore, creating databases and tables, loading CSV data into HDFS-backed tables, and querying, joining, and aggregating data."
pubDate: 2018-01-28
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

[Apache Hive](/blog/apache-hive/) is a data warehouse infrastructure project built on top of Apache Hadoop for providing data summarization, ad-hoc queries, data aggregation, and analysis of datasets. The Hive Query Language (HiveQL) is a query language for Hive to process and analyze structured data stored in Apache Hadoop and perform analysis on top of it.

## Changing the default Metastore in Hive

Even though the Derby database is the default metastore in the hive, we can change it by editing hive-site.xml in the hive installation directory.

```xml
<configuration>
<property>
<name>hive.metastore.local</name>
<value>true</value></property>
<property><name>javax.jdo.option.ConnectionURL</name>
<value>jdbc:mysql://<ip address of mysqlmachine>/hive?createDatabaseIfNotExist=true</value>
</property>
<property><name>javax.jdo.option.ConnectionDriverName</name>
<value>com.mysql.jdbc.Driver</value></property>
<property><name>javax.jdo.option.ConnectionUserName</name>
<value>username</value></property>
<property><name>javax.jdo.option.ConnectionPassword</name>
<value>password</value>
</property>
</configuration>
```

## Hive Queries

## Create Database

First, create the database `testdb` if does not exist and list the databases.

```sql
-- Create Database if does not exists
CREATE DATABASE IF NOT EXISTS testdb;

-- Use the newly create Database
USE testdb;

-- List all the databases
SHOW DATABASES;
```

![Create Database](/images/2019-04-create_database.jpg)

### SELECT Unique Records in Hive

Given below Sample Table

```sql
 hive> SELECT * FROM employees LIMIT 10;
+--------+------------+------------+-----------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date  |
+--------+------------+------------+-----------+--------+------------+
|  10001 | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |
|  10002 | 1964-06-02 | Bezalel    | Simmel    | F      | 1985-11-21 |
|  10003 | 1959-12-03 | Parto      | Bamford   | M      | 1986-08-28 |
|  10004 | 1954-05-01 | Chirstian  | Koblick   | M      | 1986-12-01 |
|  10005 | 1955-01-21 | Kyoichi    | Maliniak  | M      | 1989-09-12 |
|  10006 | 1953-04-20 | Anneke     | Preusig   | F      | 1989-06-02 |
|  10007 | 1957-05-23 | Tzvetan    | Zielinski | F      | 1989-02-10 |
|  10008 | 1958-02-19 | Saniya     | Kalloufi  | M      | 1994-09-15 |
|  10009 | 1952-04-19 | Sumant     | Peac      | F      | 1985-02-18 |
|  10010 | 1963-06-01 | Duangkaew  | Piveteau  | F      | 1989-08-24 |
+--------+------------+------------+-----------+--------+------------+
```

```sql
SELECT DISTINCT birth_date,first_name,last_name,gender,hire_date
FROM employees
GROUP BY last_name;
```

## Upload Data in HDFS

Upload the `drivers.csv` and timesheet data into HDFS(/user/maria-dev/) from the below data source

[Data Source](https://raw.githubusercontent.com/nitendragautam/samp_data_sets/master/driver_data/drivers.csv)

Now Upload the Files

![Upload File First Step](/images/upload_files_1st_step.png)

![Upload File Second Step](/images/upload_files_2nd_step.png)

## Create an Internal Table for the Driver's Data

As the database is recently created, no tables exist in the new database. The following query will result in an empty result.

```sql
-- Show all the Tables
SHOW TABLES;
```

![Show tables](/images/show_tables.png)

Now create a Table using the Hive DDL statement.

```sql
-- Create Table drivers if does not exists

CREATE TABLE IF NOT EXISTS drivers_int(driverId INT ,name STRING ,ssn BIGINT, location STRING ,certified STRING ,wageplan STRING)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS TEXTFILE
TBLPROPERTIES('skip.header.line.count' = '1');

SHOW TABLES;
```

In this DDL statement notice the following things

- `FIELDS TERMINATED BY ','`
  It means that the data for this table will be separated by a comma or the data will be in CSV format
- `STORED AS TEXTFILE`
- `ROW FORMAT DELIMITED`
- `TBLPROPERTIES`

![](/images/create_table.png)

### Table Definition in Hive

```sql
describe <table name>;
```

## Describe table schema in detail

```sql
describe extended <tablename>;
```

```sql
-- Describes Table
-- describe extended <tablename>;
DESCRIBE EXTENDED drivers_int;
```

![Describe Table](/images/describe_table.png)

## Load the data by overwriting the existing data

```sql
-- Insert the drivers_int table with the drivers.csv data by overwriting existing data
LOAD DATA INPATH '/user/maria_dev/drivers.csv' OVERWRITE INTO TABLE drivers_int;

--List the data from Tables
SELECT * FROM temp_drivers LIMIT 10;
```

![Load Data](/images/load_data.png)

After executing `LOAD DATA` we can see the table `drivers_int` was populated with data from `drivers.csv`.

Note that Hive consumed the data file `drivers.csv` during this step. If you look in the File Browser, you will see `drivers.csv` is no longer there.

As we are creating an internal table, data from HDFS will be moved to the Hive warehouse.

## Create a table for the driver timesheet

```sql
-- Create Table TimeSheet
CREATE TABLE IF NOT EXISTS timesheet_int( driverId INT ,week INT ,hours_logged INT ,miles_loggged INT)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS TEXTFILE
TBLPROPERTIES('skip.header.line.count' = '1');

SHOW TABLES;
```

![Create Table TimeSheet](/images/create_table_timesheet.png)

## Load CSV data into the Table timesheet

```sql
-- Load data into Time Sheet Table
LOAD DATA INPATH '/user/maria_dev/timesheet.csv' OVERWRITE INTO TABLE timesheet_int;

-- List the data from TimeSheet Table
SELECT * FROM timesheet_int LIMIT 10;
```

![Load Data TimeSheet](/images/load_data_timesheets.png)

## Find the sum of hours and miles logged score for a year for each driver

```sql
SELECT driverId ,sum(hours_logged) ,sum(miles_loggged) FROM timesheet_int GROUP BY driverId LIMIT 10;
```

![Drivers hourly mile run](/images/drivers_yearly_miles_hours_sum.png)

## Join the two tables to get the driver Name for aggregated data

```sql
-- Join the two tables to get the aggregated hours and miles data along with the respective driver name

SELECT d.driverId, d.name ,t.total_hours ,t.total_miles
FROM drivers_int d
JOIN
(SELECT driverId ,sum(hours_logged) total_hours ,sum(miles_loggged) total_miles
 FROM timesheet_int
 GROUP BY driverId) t

 ON (d.driverId = t.driverId)
 LIMIT 10;
```

![Join two tables](/images/join_two_tables.png)

### Change Column Data Type in Hive

```sql
ALTER TABLE <Table Name> CHANGE <column name> <column name> <New Data Type>;

//Example
ALTER TABLE Employee CHANGE salary salary BIGINT;
```

### Rename a Table in Hive

```sql
ALTER TABLE hive_table_name RENAME TO new_table_name;
```

### Retrieve Maximum Salary in Hive Table

Let us suppose we have a table employee consisting of name and salary

- Second-Highest Salary `SELECT *  FROM (SELECT salary ,ROW_NUMBER() over (ORDER BY salary) as row_no FROM employee GROUP BY SALARY) res  WHERE res.row_no = 2 ;`
- Third-Highest Salary

```sql
SELECT * FROM
(SELECT salary ,ROW_NUMBER() over (ORDER BY salary) as row_num FROM
employee GROUP BY SALARY) res
WHERE res.row_num = 3;
```

### Reference

[1] [Data Processing with Hive](https://hortonworks.com/tutorial/how-to-process-data-with-apache-hive/)

---

*Originally published on nitendratech.com on 2018-01-28, updated 2024-02-18.*
