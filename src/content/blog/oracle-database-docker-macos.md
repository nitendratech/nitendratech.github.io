---
title: "Installing Oracle Database using Docker on macOS"
description: "Step-by-step guide to installing Oracle Database 12c with Docker on macOS — pulling the image, running the container, checking status and alert logs, and connecting from inside and outside the container."
pubDate: 2020-05-10
category: "Cloud & Architecture"
subcategory: "Docker"
draft: false
---

Oracle Database Server 12c is an industry-leading relational database server. This Docker Image contains the Oracle Database Server 12 Enterprise Edition running on Oracle Linux 7. This image contains a default database in a multi-tenant configuration with a single pluggable database. We will see the steps of installing the Oracle database using docker on macOS in this blog.

## Install the docker

Install the docker first by creating a docker username and password. If you have macOS, you can check my earlier blog to install it on your system. You can refer to the official docker documentation for the installation of it on another operating system. Start the docker application once it is installed. Use the `docker version` to check if the docker is running or not.

```bash
docker version
Client: Docker Engine - Community
 Version:           19.03.8
 API version:       1.40
 Go version:        go1.12.17
 Git commit:        afacb8b
 Built:             Wed Mar 11 01:21:11 2020
 OS/Arch:           darwin/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.8
  API version:      1.40 (minimum version 1.12)
  Go version:         go1.12.17
  Git commit:       afacb8b
  Built:            Wed Mar 11 01:29:16 2020
  OS/Arch:          linux/amd64
  Experimental:     false
```

## Get the Oracle database image in your Local

First, get the oracle database image from the docker [website](https://hub.docker.com) after filling out the necessary forms and accepting the terms of service for Oracle Database Enterprise Edition. I am using the Oracle 12 Image [Oracle database enterprise](https://quay.io/repository/maksymbilenko/oracle-12c?tab=info) edition for this tutorial.

Then use the below commands to pull the oracle database using docker

```bash
docker pull quay.io/maksymbilenko/oracle-12c
```

```bash
docker pull quay.io/maksymbilenko/oracle-12c
Using default tag: latest
latest: Pulling from maksymbilenko/oracle-12c
8ba884070f61: Pull complete
ef9513b81046: Pull complete
6f1de349e202: Pull complete
5376ebfa0fa3: Pull complete
697bbcfbc0b9: Pull complete
f2855fb906c0: Pull complete
Digest: sha256:8dfdac592af58f24f36eeae1e60cbe718bb75173ccc94ed4ca16c85b411a4fb3
Status: Downloaded newer image for quay.io/maksymbilenko/oracle-12c:latest
quay.io/maksymbilenko/oracle-12c:latest
```

## Run Image on docker

As we want to connect to the database from outside the container, start the container with `-P` or -p option. This option will allow you to forward the port.

The Oracle database server exposes port 1521 for Oracle client connections over SQL Net protocol and port for Oracle XML DB. We can use either SQLPLUS or any other JDBC client to connect to the database server from outside the container.

We will start the Oracle database server instance by using the below `docker run` command with port 1521 opened. I am disabling the web console port as I will not be using it.

```bash
docker run -d -e WEB_CONSOLE=false --name oracle-12c-container -p 1521:1521 quay.io/maksymbilenko/oracle-12c
```

Here, option -p indicates that the ports are allocated by Docker.

Once you run this command, you should be able to see the hash generated once it gets executed successfully.

```bash
docker run -d -e WEB_CONSOLE=false --name oracle-12c-container -p 1521:1521 quay.io/maksymbilenko/oracle-12c
40ff38d0b214cf44440186d43cc1604adf6ffb84ad9aae7ea8c796666599dbcb
```

Here, **oracle-12c-container** is the name of the container and `quay.io/maksymbilenko/oracle-12` is the Docker image tag.

## Check the Status of the container

The Oracle database server is ready to use when the STATUS field shows (healthy) in the output of `docker ps` command.

```bash
docker ps
CONTAINER ID        IMAGE                              COMMAND             CREATED             STATUS              PORTS                              NAMES
40ff38d0b214        quay.io/maksymbilenko/oracle-12c   "/entrypoint.sh "   53 seconds ago      Up 52 seconds       0.0.0.0:1521->1521/tcp, 8080/tcp   oracle-12c-container
```

## Check the Database Alert Logs

The database alert log can be viewed with `docker logs <ORACLE_CONTAINER_NAME>` command. It will give you various details about different items such as log location, buffers used, database versions, etc.

```bash
docker logs oracle-12c-container
Database not initialized. Initializing database.
Starting tnslsnr
[WARNING] [DBT-11217] Unable to check available shared memory on specified node(s) (40ff38d0b214).
[WARNING] [DBT-06208] The 'SYS' password entered does not conform to the Oracle recommended standards.
   CAUSE:
```

## Connecting to the Database Server Within Container

The password to connect to the database with the system, the username, is `oracle`. The database server can be connected by executing SQL plus command after connecting to the container terminal.

First, connect to the docker container bash.

```
docker exec -it oracle-12c-container /bin/bash
```

Once the bash shell comes up, we can use the sql plus command to connect from within the container.

Make sure `ORACLE_HOME` is defined in the path first.

```bash
echo $ORACLE_HOME
/u01/app/oracle/product/12.2.0/SE
```

```bash
$ORACLE_HOME/bin/sqlplus system/oracle@//localhost:1521/xe
```

```bash
$ORACLE_HOME/bin/sqlplus system/oracle@//localhost:1521/xe

SQL*Plus: Release 12.2.0.1.0 Production on Mon May 4 00:16:46 2020

Copyright (c) 1982, 2016, Oracle.  All rights reserved.

Last Successful login time: Sun May 03 2020 23:36:41 +00:00

Connected to:
Oracle Database 12c Standard Edition Release 12.2.0.1.0 - 64bit Production

SQL>
SQL> select tablespace_name, file_name from dba_data_files;

TABLESPACE_NAME
------------------------------
FILE_NAME
--------------------------------------------------------------------------------
```

## Connecting to the Database Server From Outside Container

The Oracle database server exposes port 1521 for Oracle client connections over SQL Net protocol and a port for Oracle XML DB. We can use either SQLPLUS or any other JDBC client to connect to the database server from outside the container.

Now try to connect to this database using `system/oracle`as Username and Password, `xe` as SID, 1521 as the port. I have used the DBeaver SQL client software application and a database administration tool to test the connection. It is a great GUI-based tool to connect to SQL as well as NoSQL databases. You need to make sure that the Oracle client jar is in the classpath before connecting to this database.

![](/images/DBWeaver_Connection_Test.png)

As you can see, the test is successful.

## References

[https://github.com/MaksymBilenko/docker-oracle-12c](https://github.com/MaksymBilenko/docker-oracle-12c)

---

*Originally published on nitendratech.com on 2020-05-10, updated 2024-01-23.*
