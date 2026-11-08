---
title: "What are the types of Cluster Manager in Spark?"
description: "The types of cluster managers Apache Spark can run on — standalone mode, Apache Mesos, Hadoop YARN in client and cluster modes, and Kubernetes — and how SparkContext connects to them to acquire executors."
pubDate: 2022-02-15
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

A cluster manager is an external resource or a server through which Spark jobs can be submitted. It helps to acquire resources in the Spark cluster. Spark applications are independent sets of processes in a cluster that are coordinated by `SparkContext` the main program. These main programs are called driver programs. When we want to run the Spark job in a cluster, SparkContext can connect to several cluster managers to access resources for the application. Once these resources are obtained as executors on those nodes, Spark runs the computations and stores the data needed for the application. Once this happens, actual code written in Scala/Java or Python is sent to the executors so that application tasks run.

When you want to run Spark for development and testing activities locally, it is called local mode. We can use this mode from IDE (Integrated Development Environment) itself. Before running this application on servers, it needs to be compiled using `sbt` or `Maven`. We first need to create an assembly jar or Uber jar that contains the spark code and needed dependencies. When we create assembly jars, we can list the Spark and Hadoop libraries' scope as provided as they are provided by the cluster manager at run time.

Apache Spark is agnostic to the underlying cluster manager. Also, data can not be shared across different Spark applications that have different SparkContext without writing to an external storage system.

![Apache spark Cluster Manager](/images/Apache_Spark_Cluster_Manager.drawio.png)

## Spark Modes for Running Applications

Below are the different modes used for running applications in clusters.

- Standalone mode
- Apache Mesos
- Hadoop YARN
- Kubernetes

**Standalone**

It is a simple cluster manager included with Spark that makes it easy to set up a cluster. This mode can be started manually when needed. It has the servers configured as masters and workers, with the allocated memory and CPU cores. Apache Spark application uses all the cores in the cluster by default.

**Apache Mesos**

Apache Mesos is a general cluster manager that can run Hadoop MapReduce and service applications. In this mode, Mesos replaces the spark master as the cluster manager. When a Job is created, Apache Mesos will determine the machine that will handle the submitted job. It handles the workload by dynamically enabling resource sharing and isolation.

Mesos have three components namely Mesos masters, Mesos slaves, and Framework

There are companies like [Twitter](https://www.bairesdev.com/blog/twitter-tech-stack/) and Airbnb that are using Mesos to schedule Spark jobs.

**Hadoop YARN (Yet Another Resource Negotiator)**

In this setup, Hadoop YARN is used to manage the spark cluster. We mainly have two modes, client and cluster mode when YARN is used.

In client-based YARN mode, the Spark driver runs from the same edge node where the job was submitted. It means the Spark driver runs in the client process and the application master is used when needs to request resources from YARN.

In cluster-based YARN mode, the Spark driver runs from the data node separate from the edge node where the job was submitted. It means the Spark driver runs inside the master process that is managed by YARN.

**Kubernetes**

In this mode, Kubernetes is used to use for automating deployment, scaling, and management of containerized applications.

## Resources

[Twitter Tech Stack](https://www.bairesdev.com/blog/twitter-tech-stack)

---

*Originally published on nitendratech.com on 2022-02-15, updated 2025-07-22.*
