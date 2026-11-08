---
title: "Installing Apache Spark on Linux"
description: "Step-by-step guide to installing Apache Spark 2.1.1 as a standalone cluster on Linux (Ubuntu) — SSH, Java, Scala, SBT, and Maven prerequisites, Spark configuration, passwordless SSH, and connecting Spark with Hive."
pubDate: 2017-06-18
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

[Apache Spark](/blog/apache-spark/) is an open-source cluster-computing framework. This post will explain the steps for installing the prebuilt version of Apache Spark 2.1.1 as a stand-alone cluster in a Linux system. I have used Ubuntu as a debain based OS for this post.

## Install open SSH server and client and another prerequisite

```bash
sudo apt-get install rsync
sudo apt-get install openssh-client openssh-server
sudo apt-get install rsync
sudo apt-get install telnetd
```

## Add a dedicated user for Spark

```bash
#Adding hduser
sudo adduser hduser

#Adding the hduser in the sudoers list
sudo visudo -f /etc/sudoers

#Paste this in the sudoers file
root    ALL=(ALL:ALL) ALL
hduser  ALL=(ALL:ALL) ALL
```

## Install Java in the Ubuntu Machine

```bash
sudo apt-get install software-properties-common
sudo apt-get -y install python-software-properties
sudo apt-add-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer

#Add JAVA_HOME in bashrc file
nano ~/.bashrc

#Add the Java environment to last line of bashrc file
export JAVA_HOME=/usr/lib/jvm/java-8-oracle
export PATH=$JAVA_HOME/bin:$PATH

#Reload the bashrc file
source ~/.bashrc
```

## Install Scala

```bash
#Remove any older version of scala
sudo apt-get remove scala-library scala
sudo wget http://www.scala-lang.org/files/archive/scala-2.11.8.deb
sudo dpkg -i scala-2.11.8.deb
sudo apt-get update
```

## Install SBT(Scala Build Tool)

```bash
#Installation of sbt
sudo wget http://dl.bintray.com/sbt/debian/sbt-0.13.12.deb
sudo dpkg -i sbt-0.13.12.deb
sudo apt-get  update
```

## Install git and Apache Maven

```bash
#Install git as spark depends upon Git
sudo apt-get install git

#Install Maven Linux
sudo apt-get install maven
```

## Download Apache Spark

```bash
#Downloading spark with Pre Buit Hadoop
sudo wget http://d3kbcqa49mib13.cloudfront.net/spark-2.1.1-bin-hadoop2.7.tgz
sudo mv spark-2.1.1-bin-hadoop2.7.tgz /usr/local/
cd /usr/local
sudo tar -xzf spark-2.1.1-bin-hadoop2.7.tgz
sudo mv /usr/local/spark-2.1.1-bin-hadoop2.7 /usr/local/spark

#Changing ownership and permissions on that directory
sudo chown -R hduser /usr/local/spark
sudo chmod 755 /usr/local/spark

cd /usr/local/spark

#Add SPARK_HOME in the end of the bashrc file as a user hduser
nano ~/.bashrc
#Add the following two lines at the end of bash
export SPARK_HOME=/usr/local/spark/
export PATH=$SPARK_HOME/bin:$PATH
source ~/.bashrc
```

## Edit the Spark Config files

```bash
#Navigate to $SPARK_HOME/conf and copy slaves.template as slaves
cd /usr/local/spark/conf
cp slaves.template ./slaves

#create spark-env.sh file using the provided template:
cp $SPARK_HOME/conf/spark-env.sh.template $SPARK_HOME/conf/spark-env.sh

#append a configuration param to the end of the spark-env.sh file withe ip address of your machine
#export SPARK_MASTER_IP=XXX.XXX.XXX
```

## Passwordless Cluster

Spark master requires passwordless ssh to connect to its slaves. Since we're building a standalone Spark cluster, we'll need to facilitate connection to localhost passwordless connection.

```bash
#generate ssh key  and make cluster passwordless for hduser and hostname localhost
ssh-keygen -t rsa -P ''

#Press Enter

#Copy the RSA public Key to the authorized keys file
cp .ssh/id_rsa.pub .ssh/authorized_keys

#Test the passwordless key in cluster
ssh localhost
```

## Start the Spark Shell to use spark from the command line

```bash
SPARK_HOME/bin/spark-shell
```

## Deploying the Spark Batch Application or deploying the spark streaming jar file

To run a spark batch or streaming application, spark master and spark slaves daemons need to be started.

```bash
#start the Spark master on your localhost:
$SPARK_HOME/sbin/start-master.sh

#Start the Spark Slaves
$SPARK_HOME/sbin/start-slaves.sh
```

## Connecting Apache Spark with Apache Hive

To use Apache Hive from Spark shell or spark applications, it should have access to hive-site.xml and MySQL common library jar

- Make a Symbolic link of hive-site.xml at Spark Path using `ln -s /usr/local/hive/conf/hive-site.xml /usr/local/spark/conf/hive-site.xml`
- Copy Mysql jar to spark path below command

```bash
cp mysql-connector-java-5.1.44.jar $SPARK_HOME/spark/jars/
```

- Add this property to hive-site.xml

```xml
<property>
    <name>hive.metastore.schema.verification</name>
    <value>false</value>
</property>
```

## Stopping a Spark Cluster

```bash
$SPARK_HOME/sbin/stop-all.sh
```

## References

[Spark Standalone](http://spark.apache.org/docs/2.1.0/spark-standalone.html)

---

*Originally published on nitendratech.com on 2017-06-18, updated 2022-06-06.*
