---
title: "What is Inode in Linux?"
description: "What an inode (index node) is in Linux — the metadata it stores about a file or directory, such as permissions, owner, size, and links, and how to view a file's inode number with ls -il."
pubDate: 2021-09-10
category: "Core Tech & Programming"
subcategory: "Linux"
---

An inode or Index Node is a data structure within a Linux system that provides metadata about a file-system object. A file system object in Linux can be a file or a directory.

It contains metadata about the file or directory. An inode is assigned to a file system object when a file or a directory gets created. Each of the inodes is identified by an integer data type.

An inode contains the below information.

- Access Mode(Read/write/execute permissioms)
- Owner(UID{User Identifier } and GID{Group Identifier} )
- File Type
- File Size
- Group
- Number of Links
- Created time
- ACL (Acess Control List)
- Blocks list.

There is a file system such as ext3(Third Extended File System) that creates an inode every time a file is created. But a file system like xfs creates inode when needed.

To see the inode for the file under directory we can use `ls il` command.

```
root@5c8d55b982b8:/usr/tutorials# ls -il
total 3404
6294749 -rw-r--r-- 1 root root  576000 Sep  3 19:49 cars_data.csv
6294778 drwxr-xr-x 2 root root    4096 Sep  3 19:49 file1
6294790 drwxr-xr-x 2 root root    4096 Sep  3 19:49 file2
6294796 drwxr-xr-x 2 root root    4096 Sep  3 19:50 file3
6294821 -rw-r--r-- 1 root root 2893177 Sep  3 19:50 movies_data.csv
```

---

*Originally published on nitendratech.com on 2021-09-10, updated 2021-12-21.*
