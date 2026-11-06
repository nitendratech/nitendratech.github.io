---
title: "How to Run SQL Query Using Bash Script and Command-Line?"
description: "How to run MySQL queries from the Linux command line and bash scripts — single and multiple queries, passing variables, suppressing column headings, saving output to a file, and running .sql files."
pubDate: 2019-01-20
category: "Core Tech & Programming"
subcategory: "SQL"
---

While working as a developer, one needs to automate some existing [Structured Query Language (SQL)](https://www.nitendratech.com/database/learn-sql/) queries using bash script without accessing the interactive MySQL prompt. In this blog post, I will show the different ways to run SQL queries using Bash Script or using a command line. I will be using the MySQL database in this blog.

Before following this blog post, please make sure that you have a MySQL client and server installed. Use the below command to check if MySQL is installed on your machine.

```bash
which mysql

mysql --help
```

```bash
[maria_dev@sandbox-hdp root]$ which mysql
/bin/mysql
[maria_dev@sandbox-hdp root]$ mysql --help
mysql  Ver 14.14 Distrib 5.7.22, for Linux (x86_64) using  EditLine wrapper
Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Usage: mysql [OPTIONS] [database]
  -?, --help          Display this help and exit.
  -I, --help          Synonym for -?
  --auto-rehash       Enable automatic rehashing. One doesn't need to use
                      'rehash' to get table and field completion, but startup
                      and reconnecting may take a longer time. Disable with
                      --disable-auto-rehash.
                      (Defaults to on; use --skip-auto-rehash to disable.)
  -A, --no-auto-rehash
                      No automatic rehashing. One has to use 'rehash' to get
                      table and field completion. This gives a quicker start of
                      mysql and disables rehashing on reconnect.
  --auto-vertical-output
                      Automatically switch to vertical output mode if the
                      result is wider than the terminal width.
  -B, --batch         Don't use history file. Disable interactive behavior.
                      (Enables --silent.)
  --bind-address=name IP address to bind to.
```

## Execute SQL query from the Linux command-line

```bash
mysql -u USER_NAME -pPASS_WORD -h hostname -D database -e "<SQL_QUERY>"
```

The below table shows the different options we can have while running Queries.

| Option | Description |
| --- | --- |
| --user, -u | MySQL user name account that is used to connect SQL Database Server. |
| --password, -p | The password that is used to connect to SQL Database. |
| --database, -D | Name of the Database that we need to connect. |
| --host, -h | Name of the host where the Database is Installed. |
| --skip-column-names, -N | It makes sure that Column names are not written in |
| --batch, -B | It is used to print results using a tab as the column separator, with each row on a new line. |

Example To Show all Tables from Customer Tables

```bash
mysql -u root -padmin -e "USE customer;SHOW TABLES"
```

**-pPASS_WORD** When passing the `PASS_WORD` through the command line, we should not have a space between password and `-p`

**Note:** Here I am passing the password in the command Line for demonstration purposes. It is not recommended when running Queries in a Production environment.

## Run SQL query on the explicitly specified host

To run a SQL query on an explicitly specified host, we use the `-h` option and specified hostname as `HOSTNAME`.

```bash
mysql -u USER -pPASSWORD -h HOSTNAME -e "SQL_QUERY"
```

Use the Below Link as an Example to connect to the localhost Host.

```bash
mysql -u retail_dba -phadoop -h localhost -e "USE world;SELECT * FROM CITY LIMIT 20;"
```

## Run SQL query on the specified database:

It will run the SQL query using the hostname defined by the `-h` parameter for specified `HOSTNAME` and database identified by `DATABASE` option with `D` parameter.

```bash
mysql -u USER -pPASSWORD -h <HOSTNAME> -D <DATABASE> -e "SQL_QUERY"
```

**Example:**

```bash
~/tutorials/rdbms$ mysql -u root -padmin -D employees -h localhost -e "SELECT  * FROM dept_emp LIMIT 20; "
+--------+---------+------------+------------+
| emp_no | dept_no | from_date  | to_date    |
+--------+---------+------------+------------+
|  10001 | d005    | 1986-06-26 | 9999-01-01 |
|  10002 | d007    | 1996-08-03 | 9999-01-01 |
|  10003 | d004    | 1995-12-03 | 9999-01-01 |
|  10004 | d004    | 1986-12-01 | 9999-01-01 |
|  10005 | d003    | 1989-09-12 | 9999-01-01 |
|  10006 | d005    | 1990-08-05 | 9999-01-01 |
|  10007 | d008    | 1989-02-10 | 9999-01-01 |
|  10008 | d005    | 1998-03-11 | 2000-07-31 |
|  10009 | d006    | 1985-02-18 | 9999-01-01 |
|  10010 | d004    | 1996-11-24 | 2000-06-26 |
|  10010 | d006    | 2000-06-26 | 9999-01-01 |
|  10011 | d009    | 1990-01-22 | 1996-11-09 |
|  10012 | d005    | 1992-12-18 | 9999-01-01 |
|  10013 | d003    | 1985-10-20 | 9999-01-01 |
|  10014 | d005    | 1993-12-29 | 9999-01-01 |
|  10015 | d008    | 1992-09-19 | 1993-08-22 |
|  10016 | d007    | 1998-02-11 | 9999-01-01 |
|  10017 | d001    | 1993-08-03 | 9999-01-01 |
|  10018 | d004    | 1992-07-29 | 9999-01-01 |
|  10018 | d005    | 1987-04-03 | 1992-07-29 |
+--------+---------+------------+------------+
```

## Suppressing column headings:

We use the `-N` option to Suppress the Column heading.

```bash
mysql -u USER -pPASSWORD -N -e "SQL_QUERY"
```

## Save the output to a file

We can redirect the result to a certain location to save the output of a Query in the File using the `>` sign and the file name.

```bash
mysql -u USER -pPASSWORD -e "SQL_QUERY" > FILE
```

**Example:**

Here we are trying to save the result of the query in the `/home/hduser/tutorials/rdbms/result.txt` location.

```bash
hduser@hmaster:~/tutorials/rdbms$ mysql -u root -padmin -e "USE employees;SELECT * FROM departments LIMIT 200;" >/home/hduser/tutorials/rdbms/result.txt

hduser@hmaster:~/tutorials/rdbms$ cat result.txt
dept_no dept_name
d009    Customer Service
d005    Development
d002    Finance
d003    Human Resources
d001    Marketing
d004    Production
d006    Quality Management
d008    Research
d007    Sales
```

## Run SQL Queries From A Bash Script

**Example:** Create a Shell script named `shell_sql_single_query.sh`

```bash
#!/bin/bash
mysql -u root -padmin -e "USE employees;SELECT * FROM departments LIMIT 200;"
```

Give proper permission to the shell script and run the script.

```bash
~$/tutorials/rdbms$ chmod a+x shell_sql_single_query.sh

~$/tutorials/rdbms$ ./shell_sql_single_query.sh
+---------+--------------------+
| dept_no | dept_name          |
+---------+--------------------+
| d009    | Customer Service   |
| d005    | Development        |
| d002    | Finance            |
| d003    | Human Resources    |
| d001    | Marketing          |
| d004    | Production         |
| d006    | Quality Management |
| d008    | Research           |
| d007    | Sales              |
+---------+--------------------+
```

## Running Multiple SQL Queries using Shell Script

We can use the `<<EOF...EOF` based construction to run multiple SQL queries using Shell Script.

The `<<EOF` part tells the shell that it will be multi-lines SQL Query until the `EOF` tag.

We need to make sure that there are no spaces before the second EOF Tag. If there is any space, it will be considered as part of the SQL Query.

Instead of `EOF` we can use names like `<<BASH_QUERY ... BASH_QUERY`

```bash
mysql -u USER -pPASSWORD <<BASH_QUERY
QUERY 1
QUERY 2
QUERY N
BASH_QUERY
```

## Passing Variable to SQL Query from Bash Script

Here we are passing the Database from the bash script to the SQL query.

```bash
#!/bin/bash
mysql -u root -psecret <<BASH_QUERY
USE $DATABASE;
SHOW tables;
BASH_QUERY
```

Below is an example script that shows how to run multiple SQL scripts with your own variable defined. We are defining two-variable called DATABASE_NAME and TABLE_NAME that are being used in the SQL query.

```bash
#!/bin/bash
#Example Script that shows passing of Variable
DATABASE_NAME=employees
TABLE_NAME=employees
mysql -u root -padmin <<SQL_QUERY
 USE $DATABASE_NAME;
SELECT * FROM departments LIMIT 200;
SELECT COUNT(*) FROM $TABLE_NAME;
SQL_QUERY
```

When we run the above query, we get the below results.

```bash
~$/tutorials/rdbms$ ./shell_sql_multiple_query.sh

dept_no dept_name
d009    Customer Service
d005    Development
d002    Finance
d003    Human Resources
d001    Marketing
d004    Production
d006    Quality Management
d008    Research
d007    Sales
COUNT(*)
300024
```

## Running a .sql file

I created a simple SQL file in this location `/home/hduser/tutorials/rdbms`

```sql
USE employees;
SELECT * FROM salaries LIMIT 20;
```

To run this SQL file through the command line or Bash script, we need to use the below syntax.

```bash
mysql -u <UserName> -p<PassWord> -h <HostName> < <SQL_File_Location>
```

```bash
hduser@hmaster:~/tutorials/rdbms$ mysql -u root -padmin < /home/hduser/tutorials/rdbms/sample_script.sql
emp_no  salary  from_date       to_date
10001   60117   1986-06-26      1987-06-26
10001   62102   1987-06-26      1988-06-25
10001   66074   1988-06-25      1989-06-25
10001   66596   1989-06-25      1990-06-25
10001   66961   1990-06-25      1991-06-25
10001   71046   1991-06-25      1992-06-24
10001   74333   1992-06-24      1993-06-24
10001   75286   1993-06-24      1994-06-24
10001   75994   1994-06-24      1995-06-24
10001   76884   1995-06-24      1996-06-23
10001   80013   1996-06-23      1997-06-23
10001   81025   1997-06-23      1998-06-23
10001   81097   1998-06-23      1999-06-23
10001   84917   1999-06-23      2000-06-22
10001   85112   2000-06-22      2001-06-22
10001   85097   2001-06-22      2002-06-22
10001   88958   2002-06-22      9999-01-01
10002   65828   1996-08-03      1997-08-03
10002   65909   1997-08-03      1998-08-03
10002   67534   1998-08-03      1999-08-03
```

## Conclusion

In this blog post, we have read how to use a Unix shell script to connect to the database and execute a SQL query. We also learn how to pass variables to SQL queries using a bash script. We also learn about how to run multiple SQL at once.

## References

[Run MySQL Query through Bash Script](https://www.shellhacks.com/mysql-run-query-bash-script-linux-command-line/)

---

*Originally published on nitendratech.com on 2019-01-20, updated 2024-08-03. Migrated to nitendratech.github.io as part of the WordPress migration, in GA4 view order.*
