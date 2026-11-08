---
title: "Hadoop Yarn and Its Commands"
description: "What Hadoop YARN (Yet Another Resource Negotiator) is, how it manages cluster resources in Hadoop 2, and the yarn logs CLI commands for viewing, filtering, and downloading application and container logs."
pubDate: 2018-02-07
category: "Data Engineering"
subcategory: "YARN"
draft: false
---

YARN stands for Yet Another Resource Negotiator. It is a centralized cluster resource management and job scheduling platform to deliver scalable operations across the cluster. It was introduced in Hadoop 2 to help [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) and is the next-generation computation and resource management framework. Furthermore, it allows multiple data processing engines such as [SQL (Structured Query Language)](https://www.nitendratech.com/database/learn-sql/), real-time streaming, data science, graph processing, and batch processing to handle data stored in a single platform.

We can utilize the available resources efficiently and run multiple applications by using YARN. All the applications running within YARN will share a common resource, making the cluster efficient. We can run other jobs that do not follow the MapReduce model using YARN. It does not care about the type of application being executed and also does not keep historical information about the execution on the cluster.

In the Hadoop Stack, Apache Yarn sits on top of [HDFS (Hadoop distributed File system)](https://www.nitendratech.com/hadoop/hadoop-hdfs/) and acts as a mediator between HDFS and processing engines(Tez and [Spark](https://www.nitendratech.com/spark/apache-spark/)).

![yarn_architecture](/images/yarn_arch.png)

## Application and System Logs in HDFS

Application, System, as well as Container Logs in Hadoop, are important for debugging applications that experience failure. These logs are stored in the default file system of the individual data nodes once the job is finished. Even though the application can run on one or many machines, logs for all the YARN containers are aggregated into a single file. YARN provides different commands using the Command Line Interface for aggregating and accessing logs by using the application ID, which is generated when the job starts on the cluster.

We can use the YARN CLI (Command Line Interface) to view log files for running applications.

We can also access container log files using the YARN Resource Manager web UI, but more options are available when we use the `yarn logs` CLI command.

### Check Logs for running applications

When we run an application in Hadoop, it assigns a unique application ID to that job. We can use this application ID to view all logs for a running application

```bash
$yarn logs -applicationId <Application ID>
```

### View specific Log Types for a Running Application

```bash
~$yarn logs -applicationId <Application ID> -log_files <log_file_type>
```

### View only the Standard Error logs in Yarn

We can use the stderr option to get only Standard Error logs in Yarn

```bash
$yarn logs -applicationId <Application ID> -log_files stderr
```

The `-logFiles` option also supports Java regular expressions. So the following format would return all types of log files.

```bash
$yarn logs -applicationId <Application ID> -log_files .*
```

### View only the Standard Output logs in Yarn

```bash
$yarn logs -applicationId <Application ID> -log_files stdout
```

### View Application Master Log Files

Use the following command format to view all Application Master container log files for a running application:

```bash
yarn logs -applicationId <Application ID> -am ALL
```

Use the following command format to view only the first Application Master container log files:

```bash
yarn logs -applicationId <Application ID> -am 1
```

### List Container IDs

Use the following command format to list all container IDs for a running application:

```bash
yarn logs -applicationId <Application ID> -show_application_log_info
```

### View Log Files for One Container

Once you have the container IDs, you can use the following command format to list the log files for a particular container:

```bash
yarn logs -applicationId <Application ID> -containerId <Container ID>
```

### Show Container Log File Information

Use the following command format to list all the container log file names (types) for a running application:

```bash
yarn logs -applicationId <Application ID> -show_container_log_info
```

You can then use the `-logFiles` option to view a particular log type.

### View a Portion of the Log Files for One Container

When you run an application in a distributed environment, it produces a lot of logs. We can use the below command to list only a portion of the log files for a particular container. You need to first find out the container ID of your application.

```bash
yarn logs -applicationId <Application ID> -containerId <Container ID> -size <bytes>
```

This command displays the first, 10000 bytes by default.

```bash
yarn logs -applicationId <Application ID> -containerId <Container ID> -size 10000
```

If we want to view the last 10000 bytes of logs, we can use the negative sign(-) as a prefix to size.

```bash
yarn logs -applicationId <Application ID> -containerId <Container ID> -size -1000
```

### Download Logs for a Running Application

There are times when we need to download logs to the local file system. We can use the following command format to download logs to a local folder.

```bash
yarn logs -applicationId <Application ID> -out <path_to_local_folder>
```

The container log files are organized in parent folders labeled with the applicable node ID.

### Display Help for YARN Logs

If you come across any issues or get confused about any of the commands, you can use the help command to display help.

```bash
yarn logs -help
```

---

*Originally published on nitendratech.com on 2018-02-07, updated 2024-02-18.*
