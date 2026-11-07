---
title: "What is Hadoop Task Tracker?"
description: "What the Hadoop Task Tracker daemon does — accepting Map, Reduce, and Shuffle tasks from the Job Tracker, running them in separate JVMs, and reporting status through heartbeat signals."
pubDate: 2022-06-28
category: "Data Engineering"
subcategory: "Hadoop"
draft: false
---

Task Tracker is a daemon in the [Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/) cluster node that accepts various tasks from Job Tracker. These tasks range from Map, Reduce, or Shuffle operations. They also run their own Java Virtual Machine(JVM) processes. The task tracker is responsible for monitoring the task instances. It captures the output and exit codes and sends notifications to the Job tracker regardless of the fact that the job succeeded or not.

It is pre-configured with a number of slots that indicates the number of tasks it can accept. When the job tracker tries to schedule tasks, it tries to look for a task tracker in the same data node that might have an empty slot. If no task tracker is found in the same data node, the job tracker tries to find a task tracker with an empty slot in the same rack instead.

## How does Task Tracker Communicate to Job Tracker?

The task tracker spins up a separate JVM process to do the actual work. This separate JVM process or task instance is spun up to make sure the task tracker does not go down if any failure happens. It also sends the heartbeat regularly to the Job tracker to indicate that is still alive. This signal is sent to the Job tracker to inform the Job tracker of the number of available slots. In this way, the Job tracker is aware of the cluster status and can distribute the workload accordingly.

## Conclusion

In this blog post, we learn about the Hadoop Task Tracker and how it works. We also learned about how Hadoop Task Tracker communicates with the Hadoop Job Tracker with the help of a heartbeat signal.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2022-06-28, updated 2023-07-22.*
