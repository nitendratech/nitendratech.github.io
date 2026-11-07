---
title: "What is Speculative Execution in Hadoop?"
description: "What speculative execution is in Hadoop, why it is needed to handle slow or failing nodes, how to configure it in MapReduce and Spark, and its advantages."
pubDate: 2021-08-23
category: "Data Engineering"
subcategory: "Hadoop"
draft: false
---

Speculative execution is a way of coping with individual machine performance. There might be many machines in large clusters with a hundred or thousands of machines, that are not performing well in comparison to others. This may result in delays in the completion of the job, even if only one machine not performing well. To avoid this, speculative execution in the Hadoop framework launches multiple copies of the same job on different slave nodes. The Hadoop framework uses the results from the first node in which the job was finished.

## Why Speculative Execution Needed in Hadoop?

In the [Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/) framework, JobTracker makes different Task Trackers process the same input. Whichever copy of the task finishes first becomes the definitive copy. If there are other copies of data running at the same time, the Task tracker will abandon the task and disregard its outputs. The Reducers then receive their inputs from whichever Mapper completed successfully, first. If a node appears to be running slow, the master node can redundantly execute another instance of the same task and the first output will be taken. This process is called Speculative execution.

When input data is copied into [HDFS](https://www.nitendratech.com/hadoop/hadoop-hdfs/) (Hadoop Distributed File System), it is partitioned and stored in different nodes in the Hadoop cluster. When the client submits the [MapReduce](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) jobs, MapReduce jobs will calculate the number of input splits needed for this job. The same number of Mappers as the Input Splits runs in parallel on the data nodes on the data nodes where split data is present.

Let's say some data nodes in the Hadoop cluster have gone bad and are not responding or not executing the task. This can happen because of hardware failure or network issues. In this situation, these map tasks running on bad data nodes can be slower than the other map tasks running on other data nodes. As the reducer starts the execution, after all, the mapper provides the intermediate output, mapper jobs running on bad data nodes can cause a delay in the execution of the reducer and thus delay the whole MapReduce job. These bad nodes can cause the reduction to slow its execution time. To avoid this scenario in a production setting, the Hadoop framework has a concept of speculative execution.

Speculative execution in the Hadoop framework does not launch duplicate tasks at the same time that can race each other. In the Hadoop framework, the scheduler tracks the progress of all the tasks for the same job and launches only the speculative duplicate tasks for a smaller proportion of jobs that are running slower than average. When any task gets completed successfully, the scheduler kills the duplicate tasks as the result is already obtained from the successful task. If the original task is finished first, the speculative task is killed, and vice versa. It helps to optimize the existing MapReduce jobs.

## How do You Configure the Speculative Execution?

We can use the below settings in the `mapred-site.xml` configuration file for enabling this setting in the Hadoop cluster. This setting is enabled by default in Map and Reduce Task in the Hadoop cluster.

- `mapreduce.map.speculative`: true: This setting enables the speculative execution of map tasks.
- `mapreduce.reduce.speculative`: This setting enables speculative execution tasks in the reduced tasks

If we want to configure Speculative execution in the Spark job, we use the below settings.

`spark.speculative true`

## Advantages of Speculative Execution

In many [production environments](https://www.nitendratech.com/hadoop/hadoop-execution-modes/), we can have large-scale clusters with thousands of nodes running MapReduce or the related Hadoop jobs at the same time. Problems like hardware failure and network clusters are common in large-scale clusters. So, it makes sense to run duplicate tasks in case one server might fail.

## Conclusion

In this blog post, we learned bout the speculative execution in the Hadoop cluster and how it is useful. We also saw how to enable this setting in Spark and Hadoop jobs.

---

*Originally published on nitendratech.com on 2021-08-23, updated 2023-07-22.*
