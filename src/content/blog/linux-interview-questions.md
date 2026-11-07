---
title: "Important Linux Interview Questions"
description: "Linux interview questions and answers on the basics and internal workings of Linux — the kernel, system libraries and utilities, shell types, processes, file types, directories, paths, and inodes."
pubDate: 2022-02-04
category: "Core Tech & Programming"
subcategory: "Interview Questions"
draft: false
---

This blog post has the top Linux Interview questions and answers that will help you prepare for the next Linux Interview. We have divided the interview questions into various sections so that it is easier to follow.

## Linux OS Basics and Internal Workings

**Question: What do you understand by Linux?**

**Answer:** Linux is an open-source UNIX-like operating system that was developed by Linus Torvald. It is one of the most popular operating systems, having important technological advancements of the last century. It has made a huge impact on the growth of the internet like any operating system, it manages the system's hardware and resources like memory, CPU (Central Processing Unit), and storage.

As Linux is open-source, one can view, edit and contribute to the project if one has enough technical skills. Even though Linux is a different operating system, it was inspired by the UNIX operating system. Therefore, many of the commands in LINUX and UNIX are similar.

**Question: What are the features of Linux?**

**Answer:** Linux has many features in comparison to other operating systems. Some of the basic elements are given below.

1. **Open Software**: Since Linux is open source, its code is available freely to the general public.
2. **Supports Multi-User**: Linux has a multiuser feature that provides the ability to let multiple users access the same machine resources at the same time. These resources can be memory, applications, or hard disk at the same time.
3. **Supports Multitasking:** In Linux, there can be multiple processes or applications running simultaneously.
4. **Improved Security:** Linux provides improved security features like an authentication mechanism for users to log in using username-password, and authorizations for reading/writing/executing files or directories. It also supports the encryption of certain files so that the rightful owner can see the original content of the files.
5. **Administrative Utilities:** It provides several utilities and commands for administrative tasks. There can be several administrative tasks like adding/deleting users and creating/updating user groups.
6. **Managing Memory**: Linux does a great job in managing the memory of the machine in which it is installed. It uses the concept of both virtual and paging memory through which applications use the memory as needed.

**Question: What are the different types of Linux Distributions?**

**Answer:** There are many Linux distributions in the market right now. Below are the important Linux distributors.

- Ubuntu
- Debian
- Fedora
- Red Hat Enterprise
- Arch Linux
- Linux Mint

**Question: What are Linux Operating System Components?**

**Answer:** The Linux Operating System (OS) mainly consists of three components.

- Kernel
- System Library
- System Utility

**Question: What is Kernel on Linux?**

**Answer:** The kernel is the core part of Linux and is responsible for all the main activities of the Linux OS. It has several low-level modules through which it manages hardware resources for the users. As it is free and open-source under General Public Licenses(GPL), anyone can edit it. Different processes that run on Linux communicate with each other using a communication mechanism called Inter-Process Communication(IPC).

**Question: What is a System Library?**

**Answer:** The system library consists of most of the functionalities that run in the Linux Operating System. Applications can access the Kernel features using these functions. In most Linux distros, we can see these libraries under `/lib` location.

**Question: What is System Utility?**

**Answer:** System utilities are different programs and processes that perform specialized tasks at the individual level.

**Question: What are the different Shell types in the Linux platform?**

**Answer:** There are many types of Shell types available in the Linux platform. The following are the common and popular ones.

- Bourne Again Shell (Bash): It has `.bash` extensions and `/bin/bash` interpreter
- Shell: It has `.sh` extensions and `/bin/sh` interpreter
- Korn Shell: It has `.ksh` extensions and `/bin/kash` interpreter
- Z Shell: It has `.zsh` extensions and `/bin/zsh` interpreter

**Question: What is a Process?**

**Answer:** A process is an active or running instance of a program. When we run a command in Linux using a command line or using a shell script, a separate process is created for that task. These processes are managed by the kernel in Linux. The kernel is the core part of the Linux operating system which assigns a unique process identification number(PID) to each of these processes.

**Question: What are the different modes of the Linux Process?**

**Answer:** Processes in Linux can be divided into the below modes.

- Interactive
- Batch
- Daemon modes.

**Question: What is an Interactive Linux Process?**

**Answer:** These interactive processes are run interactively by a user from the command line. These processes get terminated when the user logs off or finishes the task.

**Question: What is a Batch Linux Process?**

**Answer:** Batch processes are submitted from a queue of processes that are used to execute the repeating tasks. An example would be checking the Linux files /HDFS(Hadoop Distributed File System) file system usage in a cluster periodically and creating reports out of it.

**Question: What is Daemon Process on Linux?**

**Answer:** Daemons are an important program on Linux that runs in the background, either at a predefined time or in the event of a trigger. They respond to another program and hardware activity. All Linux-based systems run many daemons that get activated by a specific event or occurrence.

**Question: What are the types of Linux Processes?**

**Answer:** Linux process can be either foreground or background process.

**Question: What is a Foreground Process on Linux?**

**Answer:** These are the process that is launched by the user and run in the foreground. The user waits for this process to get completed before issuing any their commands from the terminal.

**Question: What is a Background Process in Linux?**

**Answer:** This process runs in the background when the user executes it. This background process can run even after the user logs out of the terminal. We can make a command to run in the background by adding an ampersand & at the end of the command. Users can run any other command while the background process gets executed. They are mainly useful for running long jobs. We can place a command in the background instead of waiting in the terminal.

**Question: What is PID on Linux?**

**Answer:** PID is the process Identification of the process that is being executed. It is a unique id that is assigned by the Linux operating system when a process starts

**Question: What are the different types of files on Linux?**

**Answer:** There are mainly three types of files in the Linux system.

- Regular files
- Special Files
- Directories

**Question: What are the Regular Files in the Linux file system?**

**Answer:** Regular files in Linux are the common file types such as human-readable text, program manuals, and ASCII(American Standard Code for Information Interchange) characters.

Below are some of the regular files.

- Text files such as CSV (Comma Separated Values) and TSV (Tab Separated Values) and files having .txt extension
- Zipped/Compressed Files with `.zip`, `.gzip` extensions
- Binary and PDF (Portable Document Format) files

**Question: What are the Special Files on Linux?**

**Answer:** Special files are those files that are used for System uses. These can be files produced by physical devices such as mounted volumes, printers, CD drives, and any other Input/Output devices.

**Question: What are Directories on Linux?**

**Answer:** In the Linux operating system, directories are also a special file system that stores both the regular and special files in a certain order. Directories in Linux are similar to folders in Windows-based operating systems. They follow a hierarchical order starting from the root directory.

**Question: What are the Linux Directory Descriptions?**

**Answer:** The below table gives a description of the various Linux directories.

| Directories | Description |
| --- | --- |
| `/root` | This directory is the home directory for the user who is logged in as root. |
| `/usr` | This directory contains mainly user-accessible things like applications and user utilities. |
| `/bin` | This directory contains systems and user binaries |
| `/usr/lib` or `/usr/local/lib` | This directory contains system and user libraries |
| `/boot` | This directory contains the kernel source-related files. |
| `/var` | This directory contains various log files of various system applications. |
| `/etc` | This directory contains System configuration-related files. |
| `/home` | This directory contains all the user folders of that Linux system. This folder can include Documents, Music, Public, and Videos. |
| `/opt` | This contains any packages that are an add-on to that Linux system |
| /mnt | This directory includes subdirectories that are the access point for mounting devices like CD-ROMs or external hard drives. |
| /proc | This is a virtual files system in Linux that contains information about the processes that are running currently. It's created when the system is up and running and gets deleted when the Linux system is shut down. |
| /media | This directory contains files for removable devices such as USB drivers. |

**Question: What is the Redirection in Linux?**

**Answer:** Redirection on Linux is a Process in which data is directed from one output to another. We can also use redirection to direct an output as an input to another process. One of the common methods to use redirection in Linux is to use the pipe `|` symbol.

**Question: What is a Path on Linux?**

**Answer:** A path is a unique location of a path or directory on Linux.

Linux has mainly two types of paths. They are the absolute and relative paths.

- **Absolute path:** It is the full path of a file or a directory from the root directory(/).
- **Relative Path:** It is the path relative to the present working directory.

**Question: What is an inode on Linux?**

**Answer:** An inode or Index Node is a data structure within a Linux system that provides metadata about a file-system object. A file system object in Linux can be a file or a directory.

It contains metadata about the file or directory. An inode is assigned to a file system object when a file or a directory gets created. Each of the inodes is identified by an integer data type.

**Question: What is the information an inode contains?**

**Answer:** An inode contains the below information.

- Access Mode (Read/write/execute permissions)
- Owner (UID{User Identifier } and GID{Group Identifier} )
- File Type
- File Size
- Group
- Number of Links
- Created time
- ACL (Access Control List)
- Blocks list.

---

*Originally published on nitendratech.com on 2022-02-04, updated 2023-11-26.*
