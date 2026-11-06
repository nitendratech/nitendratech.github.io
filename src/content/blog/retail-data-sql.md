---
title: "Analyze retail DB using Structured Query Language(SQL)"
description: "Load the Cloudera retail database into MySQL and analyze it with SQL — creating the database and user, granting privileges, loading the data, and running analysis queries on orders and customers."
pubDate: 2019-01-05
category: "Data Engineering"
subcategory: "SQL"
---

In this blog post, we will load the retail data into MySQL instances and analyze it using Structured Query Language(SQL). SQL is one of the most popular languages among developers, data engineers, data scientists, and DBAs.

## The data model for the Retail database

This retail database is obtained from the tutorial the Cloudera team provided as part of their Big Data Developer training. It has mainly 6 tables.

- Departments
- Categories
- Products
- Order Items
- Orders
- Customers

![Retail Data Model](https://www.nitendratech.com/wp-content/uploads/2019/04/retail_data_model.png)

## Download the retail_db database

[Retail Database SQL File](https://raw.githubusercontent.com/nitendragautam/samp_data_sets/master/retail_data/retail_db.sql)

```bash
cd /tmp
wget https://raw.githubusercontent.com/nitendragautam/samp_data_sets/master/retail_data/retail_db.sql
```

## Create database retail_db and user retail_dba for this Database

```bash
mysql -root -padmin
mysql>CREATE database retail_db;
mysql>CREATE user retail_dba identified by 'hadoop';
```

## Grant the required permission to the retail_dba user

```sql
mysql> GRANT ALL ON retail_db.* to retail_dba;
```

## Flush all the Privileges

```sql
mysql> flush privileges;
```

## Login into MySQL using the retail_dba user and load the retail_db data

Previously, had set up the `retail_dba` user using the password `hadoop`. Now we will log in to MySQL using this `retail_dba` user.

```sql
$ mysql -u retail_dba -phadoop

mysql> USE retail_db;
```

## Load the retail_db

Use the directory location where we downloaded the Retail Database `/tmp/retail_db.sql` to load the file in MySQL databases.

```sql
mysql>source /tmp/retail_db.sql;
```

It will load the data into the MySQL Instance as a `retail_dba` user.

## Display all the tables within the Database

```sql
mysql> show tables;
+---------------------+
| Tables_in_retail_db |
+---------------------+
| categories          |
| customers           |
| departments         |
| order_items         |
| orders              |
| products            |
+---------------------+
6 rows in set (0.00 sec)
```

## Give me the Unique Order date in which Order status is Pending Payment State

```sql
 SELECT DISTINCT(Year(order_date)) FROM orders WHERE order_status='PENDING_PAYMENT';
```

## Number of Customers whose Order status is Pending Payment

```sql
mysql> SELECT COUNT(*) as count FROM customers c JOIN orders o ON(c.customer_id=o.order_customer_id) WHERE o.order_status='PENDING_PAYMENT';
+-------+
| count |
+-------+
| 15030 |
+-------+
1 row in set (0.06 sec)
```

## Number of Customers whose Order status is Closed

```sql
mysql> SELECT COUNT(*) as count FROM customers c JOIN orders o ON(c.customer_id=o.order_customer_id) WHERE o.order_status='CLOSED';
+-------+
| count |
+-------+
|  7556 |
+-------+
1 row in set (0.03 sec)
```

## Get Customer details, and order status who live in the state of Texas

```sql
SELECT c.customer_fname,c.customer_lname,o.order_date,o.order_status FROM customers c JOIN orders o ON(c.customer_id=o.order_customer_id) WHERE c.customer_state='TX' LIMIT 20;
```

![Customer Details](https://www.nitendratech.com/wp-content/uploads/2019/04/customer_details.jpg)

## Completed version of the Script

You can find the complete version of the script at the below location.

[load_retail_data_mysql.sh](https://github.com/nitendragautam/blog_tutorials/blob/master/database/load_retail_data_mysql.sh)

To run this script, you can follow the below steps.

- Get the Script in your local environment

```bash
cd ~
wget https://gitlab.com/nitendragautam/blog_tutorials/raw/master/database/load_retail_data_mysql.sh
```

- Make the Script executable using Change Mode `chmod` command

```bash
cd ~
chmod a+x load_retail_data_mysql.sh
```

- Run the Script by passing your MySQL username and password

Syntax: `./load_retail_data_mysql.sh -u <User_Name> -p<Password>`

```bash
cd ~
./load_retail_data_mysql.sh -u root -padmin
```

---

*Originally published on nitendratech.com on 2019-01-05, updated 2024-01-23.*
