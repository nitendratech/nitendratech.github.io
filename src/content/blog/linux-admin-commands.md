---
title: "Linux Admin Commands"
description: "Important Linux admin commands for monitoring processes and memory — listing processes with ps, checking uptime, killing processes, monitoring with top, and checking memory with free."
pubDate: 2019-09-27
category: "Core Tech & Programming"
subcategory: "Linux"
---

This blog lists some important [Linux](https://www.nitendratech.com/linux/bash-script/) Admin commands useful for monitoring Linux processes.

## List All Processes

We can use the ps command to list the processes in the Linux system.

```bash
~$ ps
   PID TTY          TIME CMD
  1116 pts/1    00:00:00 bash
  2271 pts/1    00:00:00 ps
```

## List All Processes in Detail

Let's check all the processes in detail by their memory and consumption. We use the `ps aux` command for that.

Syntax: $`ps aux`

- a = show processes for all users
- u = displays the process listed by their user names/owners
- x = show processes not attached to a terminal. It includes processes such as services like `crond`, `upowerd`, etc.

```bash
hduser@hmaster:~$ ps aux
USER        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root          1  0.4  0.0  37840  5784 ?        Ss   18:27   0:02
hduser     1484  6.6  3.2 2787916 244508 ?      Sl   18:32   0:10 /usr/lib/jvm/java-8-oracle/bin/ja
root       1799  0.0  0.0      0     0 ?        R    18:32   0:00 [kworker/u256:0]
hduser     1891  5.6  2.4 2781908 183660 ?      Sl   18:32   0:08 /usr/lib/jvm/java-8-oracle/bin/ja
hduser     2137  4.4  2.3 2750992 177272 ?      Sl   18:32   0:06 /usr/lib/jvm/java-8-oracle/bin/ja
hduser     2278  0.0  0.0  37364  3284 pts/1    R+   18:34   0:00 ps aux
```

## System Uptime

We can check the system Uptime using the uptime command. It gives information about the current time, how long the system has been running, how many users are currently logged on, and the system load averages for the past 1, 5, and 15 minutes.

```bash
~$ uptime
 18:53:33 up 26 min,  3 users,  load average: 0.00, 0.04, 0.054

# Use -p option to display information in Pretty format
~$uptime -p
up 26 minutes
```

## Kill/Terminate a process

We use the Kill command on Linux to kill or terminate a process.

```text
Syntax:
~$kill [options] <pid>
```

```text
Example:
~$kill 18766
```

We can also kill the process forcefully using option -9.

```text
Example:
~$kill -9 18766
```

## Clearing the terminal

If you have a lot of clutter on the screen and want to clear the information on the existing screen, use the `clear` command.

```text
~$clear
```

## Check if a Linux Script is running or not

```text
Syntax:
~$pgrep(1) -fl <Name of Script>
```

## Monitor all running process

We use top command to monitor all running processes.

```text
~$top
top - 21:52:54 up  3:24,  3 users,  load average: 0.11, 0.04, 0.01
top - 21:52:57 up  3:24,  3 users,  load average: 0.10, 0.04, 0.01
%Cpu(s):  0.1 us,  0.2 sy,  0.0 ni, 99.7 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
%Cpu(s):  0.0 us,  0.1 sy,  0.0 ni, 99.9 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :  7603884 total,  5503320 free,  1637416 used,   463148 buff/cache
KiB Swap:  3913724 total,  3913724 free,        0 used.  5685176 avail Mem

  1233 hduser    20   0 2962148 365388  23412 S   1.0  4.8   2:46.57 java
  1233 hduser    20   0 2962148 365388  23412 S   0.7  4.8   2:46.59 java
  1372 hduser    20   0 2820388 366996  23732 S   0.7  4.8   1:18.42 java
     1 root      20   0   37840   5800   3884 S   0.0  0.1   0:02.32 systemd
     2 root      20   0       0      0      0 S   0.0  0.0   0:00.02 kthreadd
```

```bash
$w :List Users processes
~~$ps -ef :Shows list of files and directories with PID no
~$ps -ef|grep jps :Search jps from linux machine and shows its PID number
~$ps -ef |grep 2490 :Search which PID is for what Process
~$bg :Shows the jobs running in background and suspended jobs
```

### Checking the memory on Linux

We use the free command to check the memory on Linux. We can use the different options to display the memory in a different format.

```bash
~$free - see amount of used and free memory
Options : -m : memory in megabytes
          -g :memory in gigabytes
          -k :amounts in Kilobytes
          -t :Displays line showing column totals
          -c :Count the result  times .Need to pass the -s option
          -S continuously display the result  second apart
```

```bash
~$ free
               total        used        free      shared  buff/cache   available
 Mem:        7603884     1405440     5745632        9160      452812     5917308
 Swap:       3913724           0     3913724
```

```bash
~$ free -m
              total        used        free      shared  buff/cache   available
Mem:           7425        1372        5610           8         442        5778
Swap:          3821           0        3821
```

---

*Originally published on nitendratech.com on 2019-09-27, updated 2024-08-03.*
