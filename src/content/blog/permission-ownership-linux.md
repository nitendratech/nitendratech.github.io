---
title: "Permission and Ownership on Linux"
description: "How Linux file and directory permissions and ownership work — the User, Group, and Other classes, chmod modes, making scripts executable, changing ownership with chown, and commonly used permission values."
pubDate: 2018-04-23
category: "Core Tech & Programming"
subcategory: "Linux"
---

Once you start working on Linux and writing a [Shell script](https://www.nitendratech.com/linux/bash-script/), you will notice that all files and directories on Linux have a standard set of access permissions. These access permissions control who can access what files, and provide a fundamental level of security to the files and directories in a system. Let's go through this topic in this blog post.

On Linux, each file and directory have three owners: User, Group, and Other.

- **User:** This permission class belongs to the user who created the file/directory. They are the primary owner or user of that resource created. They have read/write access to the file/directory.
- Group: This permission class belongs to members of the same file or directory. For example, you are working on the same project in a Linux-based cluster as your team member and need access to a common directory/ files. Admin of the project can add your user ID to the same Group as other team members.
- **Other:** This permission class refers to the members who will have read access to the file.

## Changing Mode on Linux

Permissions are known as modes on Linux. That's why on Linux we use a command called `chmod` or "change mode". The below changemode command can be used to change the permission of the file/shell script/directory for protection.

```bash
chmod {options} filename/Directory/Shell Script
chmod 754 file1.sh # For File
chmod 755 test1  # directory
```

- u :user
- g:group
- o:other
- a:all
- r:read
- w:write (and delete)
- x:execute(and access directory)
- +:add permission -take away permission

## Permission Modes On Linux

On, Linux, we have three permission modes that are applicable in Files and directories.

- Read: In this permission mode, users can read the content of a file or list the files/directory within that directory. It is denoted by the `r` in the first position `-r`.
- Write: In this Permission mode, users can edit or delete the content of a file. It is denoted by r in the second position `-r`.
- Execute: in this permission mode, Users can execute a script or a file. It is denoted by `X` in the third position `-x-`.

### Give executable permission to Scripts

If you are writing any code using scripting languages like Linux Shell/ Perl/Python, you need to make it executable before using them. Let us take an example of the below scripts which I just created for this exercise.

```bash
[maria_dev@sandbox-hdp bash_tut]$ ls -ltr
total 8
-rw-rw-r-- 1 maria_dev maria_dev 113 Oct 18 03:50 helloworld.pl
-rw-rw-r-- 1 maria_dev maria_dev  32 Oct 18 03:55 helloWorld.sh
```

I will use the `chmod a+x` command to make it executable, where `a` is for adding permission and `x` is executable permission. Use of the plus `+` sign means you are adding the executable permission. Once you change the permission level, you will be able to run the code.

```bash
[maria_dev@sandbox-hdp bash_tut]$ ls -ltr
 total 8
 -rwxrwxr-x 1 maria_dev maria_dev 113 Oct 18 03:50 helloworld.pl
 -rwxrwxr-x 1 maria_dev maria_dev  32 Oct 18 03:55 helloWorld.sh
```

## Changing file ownership

We can use the `chown` or change the owner command to change the file ownership of a file or a directory. One needs to be logged in as a root or a super used for this task. If we want to change the group ownership of the file, we can use chgrp the command.

```bash
chown <user_name> <file_name/directory_name>
```

Let's take the below example where I will change the permission of a directory to root user which was created originally by another user. I have a bunch of directories and files in this directory.

```bash
[root@sandbox-hdp bash_tut]$ ls -ltr
total 12
-rwxr-xr-- 1 maria_dev maria_dev  314 Oct 18 03:18 loop_through_comma_sep_values.sh
drwxrwxr-x 2 maria_dev maria_dev 4096 Oct 18 03:23 test1
drwxrwxr-x 2 maria_dev maria_dev 4096 Oct 18 03:23 test2
```

Now we will change the permissions of the test1 folder to the root user. As you can see below, the user has been changed to root user from maria_dev.

```bash
[root@sandbox-hdp bash_tut]# chown root test1
[root@sandbox-hdp bash_tut]# ls -ltr
total 12
-rwxr-xr-- 1 maria_dev maria_dev  314 Oct 18 03:18 loop_through_comma_sep_values.sh
drwxrwxr-x 2 root      maria_dev 4096 Oct 18 03:23 test1
drwxrwxr-x 2 maria_dev maria_dev 4096 Oct 18 03:23 test2
```

## Commonly Used Permissions

This table gives the list of commonly used permissions on Linux for files/directories from lower to a higher level.

| Symbol | Octal Number | Description |
| --- | --- | --- |
| `-rw-r--r--` | 644 | This permission allows all the users on the system to read the file, but only the owner can edit it. |
| `-rw-rw----` | 660 | This permission allows certain groups of people to modify the file. But other users who are not in that group cannot read it. |
| `-rw-rw-r--` | 664 | This permission allows certain groups of people to modify the file. But other users on the system can read it. |
| `rwxr-xr-x` | 755 | This permission allows all users in the system to execute the file. But only the owners can edit it. |
| `-rwx------` | 700 | This permission allows for the file to be read/edited and executed by the owner. Other users in the system cannot access it. |

---

*Originally published on nitendratech.com on 2018-04-23, updated 2022-06-06.*
