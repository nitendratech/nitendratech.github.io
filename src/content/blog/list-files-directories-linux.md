---
title: "List Files and Directories on Linux"
description: "How to list files and directories on Linux with the ls command — long listings with permissions, date, and time, listing only directories, relative paths, hidden files, and the home directory."
pubDate: 2018-02-10
category: "Core Tech & Programming"
subcategory: "Linux"
---

The `ls` command is one of the basic and common commands that all Linux users should know. It is mainly used to list information about files and directories within the Linux file system. The `ls` utility is a part of the GNU core utilities which are installed on all Linux distributions like Ubuntu, Red Hat, Fedora, and Mac OSX. This command is the most commonly used command while writing a [Bash script.](/blog/bash-script/)

```bash
~$ cd ~
~$ pwd
/home/nitendratech
~$ ls
cars_json.json  hadoop-3.2.0-rat.txt  hadoop-3.2.0-src.tar.gz  tutorials
```

## List all Files and Directories with Permissions, Date, and Time

We use the `ls-l` command to list all files and directories with permissions, date, and time.

```bash
$~/linuxtutorials$ ls -l
total 0
drwxrwxr-x 0 hduser hduser 512 Nov  9 18:14 data
-rw-rw-r-- 1 hduser hduser  20 Nov  9 18:12 file1.txt
$~/linuxtutorials$
```

## Lists all directories

`ls -d /`

```bash
~/linuxtutorials$ ls -d */
data/  docs/
```

## Display files and directories of a relative path

```bash
ls <Relative_Path>
```

```bash
:~/linuxtutorials$ ls /home
hduser  nitendragautam
```

## Display the hidden Files and Directories

Files and directories that begin with a period (.) are considered hidden in Linux. There are not visible or displayed by default in Linux. We use the `ls -a` command to display the hidden files and directories. Here -a means, we can see the hidden files and directories

```bash
:~$ ls -ltr -a ~
total 32000
drwxr-xr-x 1 root         root              512 Jun 29 12:48 ..
-rw-r--r-- 1 nitendratech nitendratech      220 Jun 29 12:48 .bash_logout
-rw-r--r-- 1 nitendratech nitendratech     3771 Jun 29 12:48 .bashrc
-rw-r--r-- 1 nitendratech nitendratech      807 Jun 29 12:48 .profile
-rw-r--r-- 1 nitendratech nitendratech        0 Jun 29 12:57 .sudo_as_admin_successful
-rw------- 1 root         root             1062 Jun 29 13:35 .viminfo
-rw-rw-rw- 1 nitendratech nitendratech       67 Jul 14 23:23 .gitconfig
drwxr-xr-x 1 nitendratech nitendratech      512 Jul 17 20:53 .
-rw------- 1 nitendratech nitendratech     5343 Jul 24 22:14 .bash_history
```

## Displays all the files and directories of the home directory

We use the `ls` command along with the tilde symbol `~` to display the files and directory of the home directory.

`ls ~`

```bash
:~$ pwd
/home/nitendratech
:~$ ls ~
cars_json.json  hadoop-3.2.0-rat.txt  hadoop-3.2.0-src.tar.gz  tutorials
```

---

*Originally published on nitendratech.com on 2018-02-10, updated 2022-06-06.*
