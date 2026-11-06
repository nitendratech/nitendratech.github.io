---
title: "Most Useful Apache Hadoop HDFS Commands"
description: "A practical reference of the most useful Hadoop HDFS shell commands — creating directories, listing, copying, moving, and removing files, checking usage, and more."
pubDate: 2017-08-25
category: "Data Engineering"
subcategory: "Hadoop"
---

[Hadoop Distributed File System (HDFS)](https://www.nitendratech.com/hadoop/introduction-hadoop-hdfs/) is a highly fault-tolerant distributed file system that runs on commodity hardware. File System Shell includes several commands that directly interact with the HDFS and other file systems such as S3 File System, HFTP (Hadoop File System Implementation) File System which are also supported by HDFS. I will introduce some of the most useful Hadoop HDFS commands in this blog post.

## Creating a directory in HDFS

We use `mkdir` command to create a directory in HDFS at a given path(s).

**Syntax:**

`hdfs dfs -mkdir <HDFS_PATH>`

```bash
$hdfs dfs -mkdir /home/hduser/dir1 /home/hduser/dir2
```

## List the content of Files or Directory in HDFS

We use the `ls` command to list the contents of a file or a directory in HDFS.

**Syntax:** `hdfs dfs -ls <HDFS_PATH>`

Example:

```bash
$hdfs dfs -ls /home/hduser
```

It returns the statistics in the below format for HDFS files,

```bash
permissions number_of_replicas userid groupid filesize modification_date modification_time filename
```

For HDFS Directories, it returns the statistics in the format below.

```bash
permissions userid groupid modification_date modification_time dirname
```

### List only the file name in HDFS

To list only the file name in HDFS, using the `-C` as an argument.

```bash
hdfs dfs -ls -C /<hdfs_path>
```

### Recursive command to list all directories, and subdirectories of Hadoop HDFS till the end.

```bash
$ hdfs dfs -ls -R /data/movies_data
-rw-r--r--   1 maria_dev hdfs    2893177 2018-11-04 22:09 /data/movies_data/movies_data.csv
```

## Copy a file to HDFS from the Local path.

### **put** Command

The below command copies a single src file, or multiple src files, from the local file system to the Hadoop data file system

Syntax: `hadoop fs -put <local file system source> ... <HDFS_dest_Path>`

```bash
$hadoop fs -put /home/hduser/HadoopJob/input/74-0.txt /user/hduser/input
```

If we are using Relative Path for the local system path, Use period or dot `.`

```bash
$hadoop fs -put ./HadoopJob/input/accesslogs.log /user/hduser/input
```

### copyFromLocal Command

It copies a file from the local source to the HDFS destination

```bash
$hadoop fs -copyFromLocal <localsrc> URI   //Syntax
$hadoop fs -copyFromLocal /home/hduser/abc.txt  /home/hduser/abc.txt
```

## Copy file from HDFS to local Path

### `get`

Syntax: `$hadoop fs -get <hdfs_source> <local_destination_path>`

```bash
$hadoop fs -get /home/hduser/dir3/file1/txt /home/
```

### `copyToLocal`

Syntax: `$hadoop fs -copyToLocal <hdfs_source> <local_destination_path>`

```bash
[maria_dev@sandbox-hdp tutorials]$ hdfs dfs -copyToLocal /data/movies_data/movies_data.csv /home/maria_dev/tutorials
[maria_dev@sandbox-hdp tutorials]$ls
movies_data.csv
```

## Move file from source to destination.

We can use the `mv` command to move the file from source to destination.

```bash
$hadoop fs -mv <src> <dest>   //Syntax
```

```bash
$hadoop fs -mv /home/hduser/dir2/abc.txt /home/hduser/dir2
```

## Removing files and Directories in HDFS

We use the `rm` command to remove the files and directories in the Hadoop framework using the command line.

Syntax: `$hadoop fs -rm <argument>`

**Files** Remove files specified as the argument.

```bash
$hadoop fs -rm /home/hduser/dir1/abc.txt
```

**Directories**

```bash
$hadoop fs -rm -R /home/hduser/dir1/
```

### Removing files and directories Recursively, version of delete.

It Deletes the directory only when it is empty **Syntax:** `$hadoop fs -rm -R <HDFS_PATH>`

```bash
$hadoop fs -rm -R /home/hduser/
```

## Display the Last few lines of a file.

We can display a few lines of file Using the tail command of Unix

```bash
$hadoop fs -tail /home/hduser/dir1/abc.txt
```

## See or Read the contents of a file

We can use the `cat` command to read or display the content of a file in console.

```bash
$hadoop fs -cat /home/hduser/dir1/abc.txt
```

## Display the aggregate length or disk usage of a file or HDFS path

Syntax: `hadoop fs -du /<Directory Path>`

```bash
hadoop fs -du /home/hduser/dir1/abc.txt
```

## Display the HDFS usage in Human Readable Format

Syntax: `hdfs dfs -du -h`

```bash
[maria_dev@sandbox-hdp ~]$ hdfs dfs -du -h  /data/retail_application
590      /data/retail_application/categories_dim
51.5 M   /data/retail_application/customer_addresses_dim
4.4 M    /data/retail_application/customers_dim
17.4 K   /data/retail_application/date_dim
7.4 M    /data/retail_application/email_addresses_dim
131.4 M  /data/retail_application/order_lineitems
69.4 M   /data/retail_application/orders
99       /data/retail_application/payment_methods
22.3 M   /data/retail_application/products_dim
```

## Counts the no of directories, files, and bytes in a File Path

Syntax: `hadoop fs -count <HDFS_FILE_PATH>`

```bash
~$hadoop fs -count <HDFS_FILE_PATH>
```

```bash
hdfs dfs -ls  <hdfs_directory_path>|wc -l
```

## Empty the Trash

```bash
~$hadoop fs -expunge :Empty the trash
```

## Merges the HDFS Files into a single file at the local directory

When you work with a file system like HDFS Directory or use tools like Hive or Spark, your application can create

It takes a source directory and destination file as input and concatenates the file in src into the destination local file

```bash
~$hadoop fs -getmerge <HDFS source path>
             <Local file system Destination path >
```

## Takes a source file and outputs the file in text format.

```bash
 ~$hadoop fs -text <Source Path>
 The allowed formats are zip & TextReadInput Stream
```

## Creates a file of length Zero or size

```bash
~$hadoop fs -touchz <path>
```

## Check if the File, path or Directory Exists

```bash
~$hadoop fs -test -ezd <pathname>
  hadoop fs -test -e <path>
  hadoop fs -test -z <pathname>
  hadoop fs -test -d <pathname>

 -e: checks to see if the file exists
     return 0 if true
  -z:check to see if  the file is zero length
      return if true
   -d: Checks and return 1 if path is directory
      else 0
```

## Returns the stat information on Path

```bash
$hadoop fs -stat <local or HDFS path name>
```

## Displaying Disk file system capability in terms of bytes

```bash
~$hadoop fs -df <Directory Path>
```

## Disable the NameNode Safe mode

The below command is used to disable the safe node of NameNode and can be executed by only Hadoop Admin or Hadoop operation team.

```bash
sudo su hdfs -l -c 'hdfs dfsadmin -safemode leave'
```

### Count Number of Lines in the HDFS File

```bash
hdfs dfs -cat </path_to_hdfs_directory/*> |wc -l
```

## References

[File System Guide](https://hadoop.apache.org/docs/r2.6.3/hadoop-project-dist/hadoop-common/FileSystemShell.html)

---

*Originally published on nitendratech.com on 2017-08-25, updated 2023-07-19. Migrated to nitendratech.github.io as the third WordPress import, in GA4 view order.*
