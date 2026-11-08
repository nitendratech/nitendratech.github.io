---
title: "Installing Apache Hive on Ubuntu"
description: "A step-by-step guide to installing Apache Hive on Ubuntu, from the Java and Hadoop prerequisites through HIVE_HOME setup and Derby metastore initialization, verified by creating a database and table and running Hive queries."
pubDate: 2018-03-25
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

In this blog post, we will install Apache Hive in Ubuntu Machine(`Ubuntu 16.04.5 LTS (GNU/Linux 4.4.0-36-generic x86_64)`). Once installation is complete, we will run Hive queries using Hive Query Language(HQL) to verify the installation.

![Ubuntu Version](/images/ubuntu_version.jpg)

Figure: Ubuntu Version

## Prerequisites for Hive Installation

Before Installing the hive, we need to make sure that both `Java` and `Hadoop` is installed and configured in a cluster.

## Install Java

First Update the Ubuntu with the latest software and patches if available.

```bash
sudo apt-get update && sudo apt-get -y dist-upgrade
```

Use the below command to install the open JDK version of Java.

```bash
sudo apt-get -y install openjdk-8-jdk-headless
```

## Install Apache Hive

### Download and Decompress Hive

First, download the latest available Hive installation archive from the mirror site.

```bash
cd /tmp
sudo wget https://www-eu.apache.org/dist/hive/stable-2/apache-hive-2.3.4-bin.tar.gz
```

```bash
[maria_dev@sandbox-hdp ~]$ cd /tmp
[maria_dev@sandbox-hdp tmp]$ sudo wget https://www-eu.apache.org/dist/hive/stable-2/apache-hive-2.3.4-bin.tar.gz
--2019-04-14 21:27:49--  https://www-eu.apache.org/dist/hive/stable-2/apache-hive-2.3.4-bin.tar.gz
Resolving www-eu.apache.org (www-eu.apache.org)... 95.216.24.32, 2a01:4f9:2a:185f::2
Connecting to www-eu.apache.org (www-eu.apache.org)|95.216.24.32|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 232234292 (221M) [application/x-gzip]
Saving to: ‘apache-hive-2.3.4-bin.tar.gz’

100%[====================================================================================================================================================================================================>] 232,234,292 13.9MB/s   in 17s

2019-04-14 21:28:07 (13.0 MB/s) - ‘apache-hive-2.3.4-bin.tar.gz’ saved [232234292/232234292]
```

Once the file is downloaded, Decompress the Tar file and move to the installation location

```bash
tar -xvf apache-hive-2.3.4-bin.tar.gz
mv apache-hive-2.3.4-bin /usr/local/hive
```

### Change Permission to the installation directory

If you want to run the hive besides `root` user you need to change ownership of hive directory to the desired user and hive proper permission.

For my case, Apache Hive is being installed for user `hduser` at location `/usr/local/hive`.

```bash
## Give 755 Permission to Folder
chmod 755 -R /usr/local/hive

## Change ownership
chown -R hduser /usr/local/hive
```

Skip this step if you are installing hive as default user.

### Set the HIVE_HOME in the system Path

Now we have moved the hive installation file to `/usr/local/hive`. We need to add this path to Ubuntu system Path if we want to access hive from anywhere in that Ubuntu.

In a Debian-based system .bashrc is a shell script that Bash runs whenever it is started interactively. It initializes an interactive shell session.

Use the text editor like `vim` or `nano` to open and edit the file.

```bash
nano ~/.bashrc
```

Set the Hive Home Path in the `.bashrc` file like below.

```bash
#HIVE Path
export HIVE_HOME=/usr/local/hive
export HIVE_CONF_DIR=/usr/local/hive/conf
export PATH=$HIVE_HOME/bin:$PATH
```

Now, to make the Hive path available, we need to reload the `.bashrc` file using the `source` command

```bash
source ~/.bashrc
```

### Check Hadoop and Java Path in `.bashrc`

Before running Hive, we need to make sure that Apache Hadoop and Java are set up in the path and running properly.

```bash
#HADOOP VARIABLES START
export HADOOP_HOME="/usr/local/hadoop"
export PATH="$HADOOP_HOME/bin:$PATH"
export PATH="$HADOOP_HOME/sbin:$PATH"
export HADOOP_MAPRED_HOME="$HADOOP_HOME"
export HADOOP_COMMON_HOME="$HADOOP_HOME"
export HADOOP_HDFS_HOME="$HADOOP_HOME"
export YARN_HOME="$HADOOP_HOME"
export HADOOP_COMMON_LIB_NATIVE_DIR="$HADOOP_HOME/lib/native"
export HADOOP_OPTS="-Djava.library.path=$HADOOP_HOME/lib"
#HADOOP VARIABLES END

export JAVA_HOME=/usr/lib/jvm/java-8-oracle
export PATH=$JAVA_HOME/bin:$PATH
```

Now use the `jps` and `hadoop version` command to check if Apache Hadoop is running or not.

![Check Hadoop](/images/check_hadoop.jpg)

Figure: Check Hadoop and Hive Version

### Create Hive Warehouse directory and initialize Derby

Let's configure the directory information in [Hadoop Distributed File System(HDFS)](https://www.nitendratech.com/hadoop/introduction-hadoop-hdfs/) where the hive can store its data.

```bash
hdfs dfs -mkdir -p /user/hive/warehouse
```

Now give proper permission to the warehouse

```bash
hdfs dfs -chmod 755 /user/hive/warehouse
```

Now let's inform hive about the database that it should use for its schema definition. The below command tells the hive to use the derby database as its metastore database. We can also specify this in the Hadoop hive configuration file ‘hive-site.xml’ file.

```bash
$HIVE_HOME/bin/schematool -initSchema -dbType derby
```

![Init Derby](/images/init_derby.jpg)

Figure: Initialize Derby database

## Run Hive Queries (Hive Query Langauge)

### Start the Hive Shell

```bash
hive
```

![Hive Shell](/images/hive_shell.jpg)

Figure: Hive Shell

### Create a Database in Hive

We will create a new database named `niten_test` and display all existing databases using `SHOW DATABASES` command.

```sql
CREATE DATABASE IF NOT EXISTS niten_test;

SHOW DATABASES;
```

![Create Database](/images/create_database.jpg)

Figure: Create Hive Database

### Create Hive Table

We have just created our own database, which we can use to create a table.

So, switch to the database you just created.

```sql
USE niten_test;
```

Now create a table inside this database with the below fields.

```sql
CREATE TABLE IF NOT EXISTS niten_table(
id INT,
first_name String,
last_name String,
website String);
```

![Create Hive Table](/images/create_hive_table.jpg)

Figure: Create Hive Table

Once the table is successfully created, we can display the tables and the schema of the table.

```sql
show tables;

desc niten_table;
```

![Show Describe Hive TTable](/images/show_describe_hive_table.jpg)

Figure: Show and Describe Hive Table

### Insert Records into Hive Tables

```sql
INSERT INTO TABLE niten_table VALUES(1,'Nitendra','Gautam','nitendragautam.com');
```

![Insert Record Hive](/images/insert_record_hive.jpg)

Figure: Insert Record Hive Table

## Display the record

```sql
SELECT * FROM niten_test;
```

![Display record Hive](/images/display_records_hive.jpg)

Figure: Display Record

To conclude, we have installed and validated Apache Hive in the Ubuntu server.

---

*Originally published on nitendratech.com on 2018-03-25, updated 2022-06-05.*
