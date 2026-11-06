---
title: "How to List Running Processes in Linux?"
description: "How to list running processes in Linux with the ps command and the top utility — viewing all processes with ps -ef and ps aux, and reading details like PID, CPU, and memory use."
pubDate: 2021-10-15
category: "Core Tech & Programming"
subcategory: "Linux"
---

## How to List Running Process in Linux?

There are many commands that can be used to check the processes that are running within Linux. We will see the most common ones that are available in all Linux distros.

## `ps` command

The `ps` or Process Status command I the most common way to list the processes currently running in the system. This command gives important information about the running processes under the current user that can be useful when troubleshooting the system.

```bash
root@5c8d55b982b8:/# ps
  PID TTY          TIME CMD
   10 pts/1    00:00:00 sh
   18 pts/1    00:00:00 bash
   21 pts/1    00:00:00 ps
```

The above ps command shows the list of processes running inside the terminal along with the unique PID.

If we want to see all the processes running within the operating system, we need to use `ps -ef` command. It displays a single snapshot of all the processes running that are mostly used for non-interactive usage in the scripts.

The most popular option when using `ps` command is the use of options `a,u and x`. When we use this command. It displays all the processes running for all the users in the system along with other important information. It gives information related to the username of the process owner, the start time of the process, CPU(Central Processing Unit) and Memory Loads, etc.

let's take a look at the below example where we check for the first five processes using this command.

```bash
root@5c8d55b982b8:/# ps aux|head -5
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0   4116  3272 pts/0    Ss+  18:30   0:00 bash
root        10  0.0  0.0   2616   532 pts/1    Ss   18:30   0:00 /bin/sh
root        18  0.0  0.0   4252  3564 pts/1    S    18:30   0:00 bash
root        23  0.0  0.0   5904  2800 pts/1    R+   18:32   0:00 ps aux
```

## `top` Utility

The `top` utility can be used to list all the running processes. It lists out important attributes of the process such as PIC(Process ID), Actual command that was run, parent process Id, Physical memory used, Percentage of CPU used, Process start time, etc. Below is the typical output of the top utility.

```text
Processes: 618 total, 2 running, 616 sleeping, 2585 threads                                                                                                            20:17:55
Load Avg: 1.32, 1.41, 1.56  CPU usage: 3.68% user, 2.41% sys, 93.89% idle  SharedLibs: 839M resident, 118M data, 347M linkedit.
MemRegions: 295953 total, 9054M resident, 351M private, 4319M shared. PhysMem: 50G used (6102M wired), 14G unused.
VM: 4026G vsize, 2320M framework vsize, 60032(0) swapins, 79348(0) swapouts. Networks: packets: 237946188/227G in, 206624735/34G out.
Disks: 15865519/270G read, 194834702/1147G written.

PID    COMMAND      %CPU TIME     #TH    #WQ  #PORTS MEM    PURG   CMPRS PGRP  PPID  STATE    BOOSTS            %CPU_ME %CPU_OTHRS UID  FAULTS     COW     MSGSENT
529    containerman 35.9 28:09.61 3      2    41-    11M+   192K   72K   529   1     sleeping  0[1355974]       0.00000 31.57804   501  65074+     168     16764734+
31752  Terminal     11.1 00:04.07 8      3    270    160M+  125M   0B    31752 1     sleeping *0[13+]           0.23558 0.34014    501  77356+     678     22131+
31764  top          7.3  00:02.05 1/1    0    28     6732K+ 0B     0B    31764 31754 running  *0[1]             0.00000 0.00000    0    12017+     111     917433+
```

---

*Originally published on nitendratech.com on 2021-10-15, updated 2022-01-27.*
