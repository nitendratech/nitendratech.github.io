---
title: "Apache Sqoop Tutorial"
description: "A hands-on Apache Sqoop tutorial — checking the version, connecting Sqoop to MySQL, listing databases and tables, importing tables into HDFS, controlling parallelism, and importing tables with no primary key."
pubDate: 2019-11-04
category: "Data Engineering"
subcategory: "Apache Sqoop"
---

Apache Sqoop is a top-level open-source project from Apache Software Foundation. It enables users to transfer bulk data between the Hadoop ecosystem and relational databases. Here Hadoop ecosystem includes [Hadoop Distributed File System (HDFS)](/blog/hadoop-hdfs/), [Hive](/blog/apache-hive/), [HBase](/blog/apache-hbase/), HCatalog, etc. Relational databases supported at this time are MySQL, PostgreSQL, Oracle, SQL Server, Teradata, and DB2.

Apache Sqoop is similar to the DistCP (Distributed Copy) utility that is available in Hadoop. The DistCP utility can be used to transfer data between clusters, whereas Sqoop can be used to transfer data only between Hadoop and [RDBMS](/blog/relational-database/). It supports file systems like flat files(CSV/TSV), binary formats like (Avro and Hadoop Sequence files).

## Check Sqoop Version

```bash
hduser@hmaster:~$ sqoop version

17/11/04 16:35:00 INFO sqoop.Sqoop: Running Sqoop version: 1.4.6
Sqoop 1.4.6
```

## Connect Sqoop to MySQL database

Copy the Database Connector jar{mysql-connector-java-5.1.44.jar} into the $SQOOP_HOME/lib directory

Ref: http://mvnrepository.com/artifact/mysql/mysql-connector-java

In my case, copy the connector jar files to $SQOOP_HOME/lib/

```bash
cp /home/hduser/mysql-connector-java-5.1.44.jar /usr/local/sqoop/lib
```

## List the databases using Sqoop

```bash
sqoop list-databases --connect jdbc:mysql://localhost:3306/ --username root -password admin
```

## List the database of a particular table using Sqoop

```bash
sqoop list-tables --connect jdbc:mysql://localhost:3306/employees --username root -password admin
```

![Sqoop List Tables](/images/list_tables.png)

## Import MySQL table in HDFS directory

Employee database consists of many tables

```bash
mysql> use employees;
Database changed

mysql> show tables;
+----------------------+
| Tables_in_employees  |
+----------------------+
| current_dept_emp     |
| departments          |
| dept_emp             |
| dept_emp_latest_date |
| dept_manager         |
| employees            |
| salaries             |
| titles               |
+----------------------+
8 rows in set (0.00 sec)
```

Import employees Table from employee database

```bash
sqoop import --connect jdbc:mysql://localhost:3306/employees --username root -password admin --table employees --target-dir /database/employees/employees
```

Once the import is completed, you can verify by checking the GUI and `hadoop fs` command.

Using the GUI

![](/images/sqoop_import_hdfs.png)

Using the Hadoop file system command

```bash
hduser@hmaster:~$ hadoop fs -ls /database/employees/employees/
17/11/04 23:22:04 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
Found 5 items
-rw-r--r--   1 hduser supergroup          0 2017-11-04 23:09 /database/employees/employees/_SUCCESS
-rw-r--r--   1 hduser supergroup    4548041 2017-11-04 23:09 /database/employees/employees/part-m-00000
-rw-r--r--   1 hduser supergroup    2550561 2017-11-04 23:09 /database/employees/employees/part-m-00001
-rw-r--r--   1 hduser supergroup    2086360 2017-11-04 23:09 /database/employees/employees/part-m-00002
-rw-r--r--   1 hduser supergroup    4637031 2017-11-04 23:09 /database/employees/employees/part-m-00003
```

Read first 10 lines of the file to check the records

```bash
hduser@hmaster:~$ hadoop fs -cat /database/employees/employees/part-m-00000 | head -n 10


17/11/04 23:27:40 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
10001,1953-09-02,Georgi,Facello,M,1986-06-26
10002,1964-06-02,Bezalel,Simmel,F,1985-11-21
10003,1959-12-03,Parto,Bamford,M,1986-08-28
10004,1954-05-01,Chirstian,Koblick,M,1986-12-01
10005,1955-01-21,Kyoichi,Maliniak,M,1989-09-12
10006,1953-04-20,Anneke,Preusig,F,1989-06-02
10007,1957-05-23,Tzvetan,Zielinski,F,1989-02-10
10008,1958-02-19,Saniya,Kalloufi,M,1994-09-15
10009,1952-04-19,Sumant,Peac,F,1985-02-18
10010,1963-06-01,Duangkaew,Piveteau,F,1989-08-24
cat: Unable to write to output stream.
```

## Controlling Parallelism in Sqoop

Sqoop imports data in parallel from most database sources. You can specify the number of map tasks (parallel processes) to use to perform the import by using the `-m` or `--num-mappers` argument.

```bash
sqoop import --connect jdbc:mysql://localhost:3306/employees --username root -password admin --table salaries -m 2 --target-dir /database/employees/salaries
```

Below are the MapReduce counters and other information when running this Job, which shows that 2 mappers were used to run this job.

```bash
17/11/04 23:19:11 INFO mapreduce.Job: Running job: job_1509849001630_0002
17/11/04 23:19:17 INFO mapreduce.Job: Job job_1509849001630_0002 running in uber mode : false
17/11/04 23:19:17 INFO mapreduce.Job:  map 0% reduce 0%
17/11/04 23:19:27 INFO mapreduce.Job:  map 50% reduce 0%
17/11/04 23:19:28 INFO mapreduce.Job:  map 100% reduce 0%
17/11/04 23:19:28 INFO mapreduce.Job: Job job_1509849001630_0002 completed successfully
17/11/04 23:19:28 INFO mapreduce.Job: Counters: 30
        File System Counters
                FILE: Number of bytes read=0
                FILE: Number of bytes written=311846
                FILE: Number of read operations=0
                FILE: Number of large read operations=0
                FILE: Number of write operations=0
                HDFS: Number of bytes read=232
                HDFS: Number of bytes written=98781181
                HDFS: Number of read operations=8
                HDFS: Number of large read operations=0
                HDFS: Number of write operations=4
        Job Counters
                Launched map tasks=2
                Other local map tasks=2
                Total time spent by all maps in occupied slots (ms)=15309
                Total time spent by all reduces in occupied slots (ms)=0
                Total time spent by all map tasks (ms)=15309
                Total vcore-milliseconds taken by all map tasks=15309
                Total megabyte-milliseconds taken by all map tasks=15676416
        Map-Reduce Framework
                Map input records=2844047
                Map output records=2844047
                Input split bytes=232
                Spilled Records=0
                Failed Shuffles=0
                Merged Map outputs=0
                GC time elapsed (ms)=452
                CPU time spent (ms)=13760
                Physical memory (bytes) snapshot=402960384
                Virtual memory (bytes) snapshot=3858165760
                Total committed heap usage (bytes)=310378496
        File Input Format Counters
                Bytes Read=0
        File Output Format Counters
                Bytes Written=98781181
17/11/04 23:19:28 INFO mapreduce.ImportJobBase: Transferred 94.2051 MB in 19.3542 seconds (4.8674 MB/sec)
17/11/04 23:19:28 INFO mapreduce.ImportJobBase: Retrieved 2844047 records.
```

To verify the output, first, check the files in the Hadoop file system.

```bash
hduser@hmaster:~$ hadoop fs -ls /database/employees/salaries
17/11/04 23:39:20 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
Found 3 items
-rw-r--r--   1 hduser supergroup          0 2017-11-04 23:19 /database/employees/salaries/_SUCCESS
-rw-r--r--   1 hduser supergroup   50698979 2017-11-04 23:19 /database/employees/salaries/part-m-00000
-rw-r--r--   1 hduser supergroup   48082202 2017-11-04 23:19 /database/employees/salaries/part-m-00001
```

Once files are verified in HDFS, we can use the following command to check sample records.

```bash
hduser@hmaster:~$ hadoop fs -cat /database/employees/salaries/part-m-00000 | head -n 10

17/11/04 23:40:09 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
10001,60117,1986-06-26,1987-06-26
10001,62102,1987-06-26,1988-06-25
10001,66074,1988-06-25,1989-06-25
10001,66596,1989-06-25,1990-06-25
10001,66961,1990-06-25,1991-06-25
10001,71046,1991-06-25,1992-06-24
10001,74333,1992-06-24,1993-06-24
10001,75286,1993-06-24,1994-06-24
10001,75994,1994-06-24,1995-06-24
10001,76884,1995-06-24,1996-06-23
cat: Unable to write to output stream.
```

As we can see, that the data from MySQL salaries table was imported into HDFS.

![](/images/sqoop_import_salary_table.png)

## Importing RDBMS table in Hadoop using Sqoop with No primary key column

Usually, we import an RDBMS table in Hadoop using Sqoop Import when it has a primary key column. If it doesn't have the primary key column, it will give you the below error-

```bash
ERROR tool.ImportTool: Error during import: No primary key could be found for table <table_name>. Please specify one with --split-by or perform a sequential import with '-m 1'
```

If your table doesn't have the primary key column, you need to specify `-m 1` option for importing the data, or you have to provide `--split-by` argument with some column name.

Here are the scripts which you can use to import an RDBMS table in Hadoop using Sqoop when you don't have a primary key column.

```bash
sqoop import \
--connect jdbc:mysql://localhost/dbname \
--username root \
--password root \
--table user \
--target-dir /user/root/user_data \
--columns "first_name, last_name, created_date"
-m 1
```

or

```bash
sqoop import \
--connect jdbc:mysql://localhost/dbname \
--username root \
--password root \
--table user \
--target-dir /user/root/user_data \
--columns "first_name, last_name, created_date"
```

## Conclusion

In this blog post, we learned about Apache Sqoop and its usage.

Please share this blog post on social media and leave a comment with any questions or suggestions.

## References

[1] [Employees Database](https://dev.mysql.com/doc/employee/en/employees-installation.html)

[Apache Sqoop](http://sqoop.apache.org/)

---

*Originally published on nitendratech.com on 2019-11-04, updated 2022-06-21.*
