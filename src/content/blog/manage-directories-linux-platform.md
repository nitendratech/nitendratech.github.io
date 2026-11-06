---
title: "How to Manage Directories in Linux Platform?"
description: "How to manage directories on the Linux platform — the home directory, creating single, multiple, and nested directories with mkdir, and moving, deleting, and renaming directories with mv, rmdir, and rm."
pubDate: 2022-04-07
category: "Core Tech & Programming"
subcategory: "Linux"
---

A directory in Linux is a location where we can store files or directories. In Linux, all the files and directories are contained in a directory. Linux uses a hierarchical structure for managing files and directories in the form of a directory tree. This structure has a single root node denoted by a slash `/` and all the files and directors are under it.

If we work with Linux, we need to be familiar with the commands that are used to create, delete or move directories. These commands can be directly used with a shell script or can be u invoked from a programming language such as Java/Python. We would read about some of these concepts in this blog post.

## Home Directory

The home directory is the default directory or the workspace allocated in Linux. It is the location where we find ourselves when login into the Linux system. Most users use the home locator to do their work and organize the files. It will generally be in the below format in a Linux system.

```
/home/<user_name>
```

Let's say we have a user name called `nitendratech` in a Linux-based system which would have below home directory.

```
/home/nitendratech
```

Instead of remembering the above path, we can use the tilde or `~` sign to navigate to the home directory.

```bash
$cd ~
```

## Creating Directory

We use the `mkdir` command to create directories in Linux. When this command creates a directory successfully, it does not produce any output.

```
mkdir <directory_name>
```

### Create a single Directory

We can create a single directory as shown below.

```bash
$mkdir dir1
% ls -ltr
total 0
drwxr-xr-x  2 nitendragautam  staff  64 Apr 13 23:35 dir1
```

### Create Multiple Directories

We can create multiple directories as shown below.

```bash
% mkdir dir1 dir2 dir3
nitendragautam@Nitendras-MBP testdir % ls -ltr
total 0
drwxr-xr-x  2 nitendragautam  staff  64 Apr 13 23:40 dir1
drwxr-xr-x  2 nitendragautam  staff  64 Apr 13 23:40 dir2
drwxr-xr-x  2 nitendragautam  staff  64 Apr 13 23:40 dir3
```

We can also create parent directories at the same time using `mkdir` command that creates directories and subdirectories at once. We can also use the `-p` parameter when we are not sure if the directories/sub-directories exist or not. This parameter creates all the necessary directories. Let's take an example where we are creating `tmp`, `dir1`, `dir2`, `dir3` in the current working directory. Here, the current working directory is denoted by `.` sign.

```bash
% mkdir -p ./tmp/dir1/dir2/dir3
% cd tmp/dir1/dir2/dir3
 % pwd
/bash/testdir/tmp/dir1/dir2/dir3
```

## Moving Directory

We use the `mv` command to move the directories from these sources to destinations.

Following is the syntax for this command.

```
mv <source_directory_name>  <destination_directory>
```

## Deleting Directory

We can use `rmdir` command to delete the directories.

### Empty Directory

This command will delete or remove existing directories provided that they are empty

```
rmdir <directory_name>
```

### Directory that is not empty

We can use `rm` command along with the `-rf` option to delete a directory recursively along with its content.

```
rm -rf <directory_name>
```

In the following example, we are deleting a directory **example** along with its content.

```bash
% pwd
/tmp/dir1/dir2/dir3
% ls
dir1		test1.txt
% rm -rf ./tmp
 % ls
```

## Renaming Directories

We use the `mv` or move command to rename a directory. Following is the syntax for this.

```
% mv <old_dir> <new_dir>
```

Let's take an example where we are renaming a directory called `old_dir` to a directory called `new_dir`.

```bash
% mkdir old_dir
r % ls
old_dir
% mv old_dir new_dir
 % ls
new_dir
```

## Conclusion

In this blog post, we learned about how to create a directory on the Linux platform. We also saw the commands on renaming/deleting a directory. We also saw commands on how to move a directory on the Linux platform.

---

*Originally published on nitendratech.com on 2022-04-07, updated 2022-05-03.*
