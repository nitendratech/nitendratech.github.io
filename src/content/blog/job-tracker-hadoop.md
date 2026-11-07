---
title: "What is Job Tracker in Apache Hadoop?"
description: "What the JobTracker daemon does in Hadoop MapReduce v1 — accepting jobs from clients, scheduling and monitoring tasks, tracking TaskTrackers through heartbeats, and why it is a single point of failure."
pubDate: 2023-11-27
category: "Data Engineering"
subcategory: "Hadoop"
---

JobTracker is a daemon service that is used for submitting and tracking MapReduce(MR) jobs in the Apache Hadoop framework. In a typical production cluster, JobTracker runs on a separate machine through its own JVM process. It is an essential daemon for MR v1 but is replaced by Resource Manager/Application Manager in MR V2. It is the single point of failure for the Hadoop MapReduce service, as it will halt all running jobs if it goes down.

## The function of Job Tracker in Hadoop

- Takes the jobs from client applications
- Master daemon for Job Resource management and scheduling and monitoring of jobs
- acts as a liaison between the Hadoop framework and submitted applications.
- Tracks resource availability and the progress of fault tolerance.
- Communicates with the NameNode to determine the location of the data
- Locates the task tracker node with available slots at or near the data to execute the given task
- Monitoring the individual task trackers and submitting the overall status of the job back to the client. If Task Tracker does not submit regular heartbeat signals, they are considered to have failed and the task is scheduled on a different Task Tracker
- Job Tracker updates its status when the work is completed

---

*Originally published on nitendratech.com on 2023-11-27, updated 2024-02-19.*
