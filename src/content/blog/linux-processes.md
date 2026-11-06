---
title: "What are Linux Processes?"
description: "What a Linux process is and how the kernel manages it — the types of Linux processes (interactive, batch, daemon, foreground, and background) and the states a process goes through."
pubDate: 2021-08-30
category: "Core Tech & Programming"
subcategory: "Linux"
---

## What is a Process?

A process is an active or a running instance of a program. When we run a command in Linux using a command line or using a shell script, a separate process is created for that task. These processes are managed by the kernel in Linux. The kernel is the core part of the Linux operating system which assigns a unique process identification number(PID) to each of these processes.

A Linux process uses many system sources like CPU)(Central Processing Unit), filesystem, and memory during its lifetime. In computing, device CPUs are the most important resource as there can be only one CPU in a system. We can have multiple files and multiple memory devices(external or internal). As Linux is a multiprocessing operating system, its objective is to have multiple processing running on each CPU in the system at the same time. It increases the CPU utilization to the max.

In Linux operating system, processes are treated as separate tasks with each having its own ownership and responsibilities. There can be some situations where processes failed or crash. If this happens it will not crash the system or other processes as each process in Linux runs in its own space. They do not interact with each other directly.

As Linux operating system supports the concept of multi-user or multi-process, its objective is multiple processes executed by different users at the same time. In order for one to be competent in Linux-based operating systems, they need to be familiar with commands that are needed to list, identify and delete any process if needed. In this blog post, we will learn about the Linux process and the types of the Linux process.

## Types of Linux Process

There are two different varieties of classification of the Linux process.

### First Category of Classification

Processes in Linux can be is divided into interactive, batch, and daemon modes.

- **Interactive**

These interactive processes are run interactively by a user from the command line. These processes get terminated when the user logs off or finishes the task.

- **Batch**

Batch processes are submitted from a queue of processes that are used to execute the repeating tasks. An example would be checking the Linux files /HDFS(Hadoop Distributed File System) file system usage in a cluster periodically and creating reports out of it.

- **Daemon**

Daemons are an important program in Linux that runs in the background either at a predefined time or in event of a trigger. They respond to another program and hardware activity. All the Linux-based systems run many daemons that get activated by a specific event or occurrence.

### Second Category of Classfication

In this classification, Processes it is classified as either foreground or background process.

- **Foreground Process**

These are the process that is launched by the user and run in the foreground. The user waits for this process to gets completed before issuing any there command from the terminal.

- **Background Process**

This process runs in the background when the user executes it. This background process can run even after the user logs of the terminal. We can make a command to run in the background by adding an ampersand & at the end of the command. Users can run any other command while the background process gets executed. They are mainly useful for running long jobs. We can place a command in the background instead of waiting in the terminal.

We can execute a command in the background by placing an ampersand (**&**) symbol at the end of the command. When we place a job in the background, a user job number and system process number or id are displayed in the terminal. The user id placed in the square bracket is the id by which the user can reference the job. The system process id is the number through which the system identifies the job.

```
% print nitendratech.com &
[1] 36532
nitendratech.com
```

## States of Linux Process

A process in Linux changes its states according to different circumstances like success or failure.

Following are the states of the Linux Process.

- **Running**

In this state, The process is running or either ready to run.

- **Waiting**

In this state, the Process is waiting for an event or a resource

- **Stopped**

In this state, Process has been stopped when they receive a signal

- **Zombie**

In this state, the process is halted for some reason.

## Conclusion

In this blog post, we learned about the Linux process. We also learned about the types of the Linux process and the different states of the Linux processes.

---

*Originally published on nitendratech.com on 2021-08-30, updated 2022-01-27.*
