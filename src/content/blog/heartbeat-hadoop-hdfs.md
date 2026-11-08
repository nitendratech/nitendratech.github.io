---
title: "What is Heartbeat in Hadoop Framework?"
description: "What a heartbeat is in Hadoop — the periodic signal DataNodes send to the NameNode and TaskTrackers send to the JobTracker, the 3-second default interval, the dead-node timeout, and the dfs.heartbeat.interval setting."
pubDate: 2021-08-25
category: "Data Engineering"
subcategory: "HDFS"
draft: false
---

## What is HeartBeat?

In [Hadoop](/blog/apache-hadoop/) framework `heartbeat` is a signal that is sent by DataNode to NameNode and also by Task Tracker to the Job tracker. DataNode sends the signal to NameNode, periodically, indicating that it is alive. This signal is taken as a sign of vitality by NameNode. If there is no response to the signal, there might be some issue with the DataNode or the Task Tracker.

The default interval for the heartbeat is 3 seconds in the Hadoop framework. If the DataNode does not send the heartbeat signal to the NameNode for more than 10 minutes, it is considered to be dead or unavailable. This condition is known as `Heartbeat Lost` condition.

If there is a network partition in the Hadoop cluster, it can cause the subset of DataNode to lose connectivity to NameNode. NameNode knows about this condition by finding out that the Heartbeat message is absent. When this happens, the NameNode marks the DataNode as dead and does not forward any Input/Output request to it. It means any data that was registered to a dead DataNode is not available to [HDFS (Hadoop Distributed File System)](/blog/hadoop-hdfs/) anymore. NameNode constantly checks if the DataNode is alive or dead. If it seems that when a data node is dead, the data block residing on that data node is replicated as necessary.

Data is replicated in HDFS in one of the below conditions.

- DataNode becomes Unavailable
- HDFS Replica of data becoming corrupted
- Failure of Hard Disk in DataNode.
- Increase of replication factor in the settings

## Settings for Heartbeat in Hadoop XML Files

We can see this property in Hadoop framework XML files like below.

```xml
<property>
  <name>dfs.heartbeat.interval</name>
  <value>3</value>
</property>
```

If we want to see the property through the command line, we can use the below command in Hadoop.

```bash
hdfs getconf -confKey dfs.heartbeat.interval
```

---

*Originally published on nitendratech.com on 2021-08-25, updated 2023-07-22.*
