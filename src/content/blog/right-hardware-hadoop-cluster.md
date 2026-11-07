---
title: "Finding Right hardware for Hadoop Cluster"
description: "How to size hardware for a Hadoop cluster based on workload patterns — balanced, compute-intensive/CPU-bound, and I/O-bound workloads — covering storage, processing power, and internode communication."
pubDate: 2018-06-20
category: "Data Engineering"
subcategory: "Hadoop"
draft: false
---

Engineers and Stakeholders in an Information Technology(IT) based organization need to consider many things before finding the right hardware for Hadoop clusters. Hadoop's workloads tend to vary a lot between different jobs. It takes experience to correctly anticipate the amounts of storage, processing power, and internode communication that will be required for different kinds of jobs. Disk space, I/O Bandwidth (required by Hadoop), and computational power (required for the MapReduce processes) are the most important parameters for accurate hardware sizing.

The configuration for the [Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/) Cluster depends upon the type of Workload Patterns. We need to consider the below items before finding the right hardware for the Hadoop Cluster.

## Balanced Workload

Jobs are distributed equally across the various job types (CPU bound, Disk I/O bound, or Network I/O bound)

## Compute Intensive/CPU-bound workload

These workloads are CPU-bound and are characterized by the need for many CPUs and large amounts of memory to store in-process data. (This usage pattern is typical for natural language processing or HPC (High-Performance Computing) workloads like Clustering/Classification, complex text mining, and Natural-language processing. Feature extraction)

## Network Input/Output Intensive(IO-bound Workload)

A typical [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) job (like sorting, indexing, grouping, data importing, exporting, Data movement, and transformation) requires very little compute power but relies more on the I/O bound capacity of the cluster (for example, if you have a lot of cold data). Hadoop clusters utilized for such workloads are typically I/O intensive. For this type of workload, we recommend investing in more disks per box.

## Unknown or evolving Workload Patterns

Most teams looking to build a Hadoop cluster are often unaware of their workload patterns. Also, the first jobs submitted to Hadoop are very different from the actual jobs in production environments. For these reasons, Hortonworks recommends that you either use the Balanced workload configuration or invest in a pilot Hadoop cluster and plan to evolve as you analyze the workload patterns in your environment.

## References

[Hardware Recommendations](https://docs.hortonworks.com/HDPDocuments/HDP2/HDP-2.6.4/bk_cluster-planning/content/ch_hardware-recommendations_chapter.html)

---

*Originally published on nitendratech.com on 2018-06-20, updated 2024-02-18.*
