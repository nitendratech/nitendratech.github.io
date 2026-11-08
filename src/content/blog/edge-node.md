---
title: "What is an Edge Node? Hadoop Cluster, Database, and Applications"
description: "What an edge node is, its role as the gateway between a Hadoop cluster and the outside network, how to connect to one, and its common uses and examples."
pubDate: 2021-07-17
category: "Data Engineering"
subcategory: "Big Data"
---

An edge node is a computer that provides an interface for communicating with other nodes in case of cluster code. Edge nodes are also called staging nodes, Gateway nodes, or Edge communication nodes. It can also be a physical or virtual machine that acts as a gateway and bridge between the local network and the outside world.

## Edge node in Apache Hadoop or Hive or Spark cluster

The edge node in the [Hadoop](/blog/apache-hadoop/) cluster is an interface between the Hadoop cluster and the outside network. They are used to running client applications and cluster administration tools. It is a dedicated node with a client-facing interface and has all client tools installed to operate on a cluster.

Edge nodes in the Hadoop cluster are used to run client-side operations. In a typical environment, edge nodes are kept separate from the nodes that contain Hadoop services such as [HDFS (Hadoop Distributed File System),](/blog/hadoop-hdfs/) [Map Reduce,](/blog/hadoop-mapreduce-framework/) etc., mainly to keep computing resources separate. If the cluster is small, having only a few nodes, the edge node can be part of the Hadoop cluster. If a Spark job is executed in [YARN (Yet Another Resource Negotiator)](/blog/hadoop-yarn/) mode, it would run through the edge node, which in turn becomes the driver node.

Edge nodes are also used as a temporary staging area to store the final data for applications like a Spark, Sqoop, and Oozie workflow setup. They are also used for data science work to process any aggregated data retrieved from the cluster. For example, we can have a use case where a data science-based application can use spark to aggregate data and use R or Python code to perform analytics on top of it in the edge node.

## Is Edge Node Part of the cluster?

The Edge Node does not have to be part of the cluster. If the edge node is outside the Hadoop cluster, it will need Hadoop binaries along with the current cluster configuration files to submit any jobs on the cluster. This is done to make sure the entire cluster is not open to the outside world. This approach keeps the network architecture low.

Edge nodes in the Hadoop cluster are neither master nor worker nodes. Daemons or services like Hive Server 2, Flume agents, Oozie servers, Hue Servers, and Impala Load balancer runs in the edge node. These roles can also be installed on multiple nodes so that we can have multiple edge nodes in a cluster. It makes sure that everyone who is running the job is not connecting to the same edge node.

This node connects to the Name Node for all operations that are related to HDFS. Once this is done, it connects to the Resource Manager for the jobs that were submitted to the cluster. In a typical production environment, there will be multiple edge nodes that connect to the cluster and maintain high availability in the cluster. This is mainly done using a load balancer or DNS round-robin strategy. Edge nodes have different hardware requirements as compared to Master and secondary nodes.

## How do we connect to the Edge node?

In most of the on-premise-based Hadoop clusters, one can connect to edge nodes using SSH (Secured Shell Protocol). In cloud-based Hadoop clusters, we can connect to edge nodes using a User interface like Apache Hue using a browser.

## Example of Edge Node

Edge nodes have different meanings depending on where they are used. In general, they are connected to the Wide Area Network(WAN) and provide a means to communicate with the users or clients. Some typical examples of edge nodes are given below.

- Internet of Things(IoT) Gateways
- Routers
- Mobile Devices
- Micro Servers
- Datacenter edge nodes in Hadoop Cluster mounted in a rack

## Uses of Edge node

There are two popular use cases where edge nodes can be used.

- As a connection point to run an application or communicate with the rest of the network
- Used as a server to collect the data from sensors and other devices which can be further processed and analyzed

## Conclusion

We read about the meaning of edge node, the concept of edge node in Hadoop/ Hive cluster along with other use cases. In addition to that, we also learned how to connect edge nodes using SSH. We also saw that the Edge node might or might not be part of a Hadoop cluster.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2021-07-17, updated 2023-07-11.*
