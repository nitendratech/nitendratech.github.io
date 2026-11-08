---
title: "How can anyone Navigate on Linux using CD Command?"
description: "How to navigate the Linux filesystem with the cd command — changing directories, going to a specific path, returning home with the tilde symbol, reaching the root directory, and moving one or two levels back."
pubDate: 2018-01-14
category: "Core Tech & Programming"
subcategory: "Linux"
---

`cd` command, also known as `chdir` (change directory), is a command-line shell command. It is used in navigating the Linux/Unix system and is widely used when writing [Shell Script](/blog/bash-script/).

## Change from Present Working Directory to another directory

`cd <Directory Name>`

## Navigate to a Certain directory

```bash
~$ cd <directory_path>
~$ cd /home/nitendratech
```

## Navigate to the home directory using tilde(~) symbol

```bash
cd ~
```

```bash
~$ cd ~
~$ pwd
/home/nitendratech
```

## Navigates to the root directory

`cd /`

```bash
:~$ cd /
:/$ pwd
/
:/$
```

## Move to the previous directory from the current directory

We can use the cd command with .. To move to the previous directory.

```bash
:~/tutorials$ pwd
/home/nitendratech/tutorials
:~/tutorials$ cd ..
:~$ pwd
/home/nitendratech
```

## Move two directories back from the current directory

W can use this command `cd ../..` to move two directories back

```bash
:~/tutorials/hive$ pwd
/home/nitendratech/tutorials/hive
:~/tutorials/hive$ cd ../..
:~$ pwd
/home/nitendratech
```

---

*Originally published on nitendratech.com on 2018-01-14, updated 2024-02-18.*
