---
title: "What are Paths on Linux Platform?"
description: "What paths are on Linux — absolute vs. relative paths, finding the present working directory with pwd, and basic file and directory commands like mkdir and rm."
pubDate: 2017-04-09
category: "Core Tech & Programming"
subcategory: "Linux"
---

Linux is a family of free and open-source software operating systems built around the Linux kernel. This blog post includes the concept of paths in a Linux environment that one can use while writing the [Bash script.](https://www.nitendratech.com/linux/bash-script/)

## Path on Linux

A path is a unique location of a path or directory on Linux.

Linux has mainly two types of paths, the absolute path, and the relative path.

- **Absolute path:** It is the full path of a file or a directory from the root directory(/).
- **Relative Path:** It is the path relative to the present working directory.

### Present Working Directory(PWD) on Linux

Use the below command to find the present working directory.

```bash
~$ pwd
/home/nitendragautam
```

## Files and Directory manipulations

### Create a directory on Linux

`mkdir <Directory Name>`

### Create a directory recursively

`mkdir -p <Directory1/Directory 2/Directory 3>`

-p means progressively creating

```bash
mkdir -p /home/hduser/dir1   :Create multiple directory
```

### Deletes file in the current path

```bash
rm <file name>
```

```bash
:~$rm file1.txt
```

### Forcefully removes everything (Files and directory) in the path

```bash
rm -rf <Directory_Path>
```

```bash
:~$rm -rf /home/hduser/dir1/dir2
```

## Reference

[Linux Tutorials](https://bash.cyberciti.biz/guide/Main_Page)

---

*Originally published on nitendratech.com on 2017-04-09, updated 2022-06-06.*
