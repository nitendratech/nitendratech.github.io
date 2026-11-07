---
title: "What is Linux File System?"
description: "The Linux file system explained — the three types of files (regular files, special files, and directories), the hierarchical directory structure starting from root, and what each standard Linux directory is used for."
pubDate: 2021-10-08
category: "Core Tech & Programming"
subcategory: "Linux"
---

There are mainly three types of files in the Linux system.

- Regular files
- Special Files
- Directories

## Regular Files

Regular files in Linux are the common files types such as human-readable text, program manual, and ASCII(American Standard Code For Information Interchange) characters.

Below are some of the regular files.

- Text files such as CSV(Comma Seperated Values) and TSV(Tab Seperated Values) and files having .txt extension
- Zipped/Compressed Files with .zip,.gzip extensions
- Binary and PDF(Portable Document Format) files

## Special Files

Special files are those files that are used for System uses. These can be files produced by physical devices such as mounted volumes, printers, CD drives, and any other Input/Output devices.

## Directories

In Linux operating system, directories are also a special file system that stores both the regular and special files in a certain order. Directories in Linux are similar to folders in Windows-based operating Systems. They follow a hierarchical order starting from the root directory.

The below diagram shows the directory structure in Unix/Linux

```
/ (system root)
 _______________________________|____________________________________
 |    |	    |	 |     |    |	    |	      |	   |	  |    |    |
bin/ boot/ dev/ etc/ home/ lib/ lost+found/ proc/ root/ sbin/ usr/ var/
 |    |     |    |     |    |       |         |    |      |    |    |
 |    |     |    |     |    |       |         |    |      |    |    |-> various
 |    |     |    |     |    |       |         |    |      |    |
 |    |     |    |     |    |       |         |    |      |    |-> Read only files
 |    |     |    |     |    |       |         |    |      |
 |    |     |    |     |    |       |         |    |      |-> Superuser Binaries
 |    |     |    |     |    |       |         |    |
 |    |     |    |     |    |       |         |    |-> User roots home dir
 |    |     |    |     |    |       |         |
 |    |     |    |     |    |       |         |-> system info etc.
 |    |     |    |     |    |       |
 |    |     |    |     |    |       |-> Orphan files (look here after crashes)
 |    |     |    |     |    |
 |    |     |    |     |    |-> System / programming libraries
 |    |     |    |     |
 |    |     |    |     |-> Contains the user accounts home directories
 |    |     |    |
 |    |     |    |-> System configuration files.
 |    |     |
 |    |     |-> Contains Devices file such as /dev/sda
 |    |
 |    |-> The kernel and kernel maps which are static boot files
 |
 |-> Executeble files. (binaries)
```


### Linux Directory Description

| **Directories** | **Description** |
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
| /proc | This is a virtual files system in Linux that contains information about the processes that are running currently. It’s created when the system is up and running and gets deleted when the Linux system is shut down. |
| /media | This directory contains files for removable devices such as USB drivers. |

---

*Originally published on nitendratech.com on 2021-10-08, updated 2022-01-27.*
