---
title: "How to Use Word Count(wc) Command In Linux?"
description: "How to use the Linux wc (word count) command — its syntax and common options (-l, -c, -L), with examples counting lines, bytes, and the longest line in a CSV file."
pubDate: 2021-09-17
category: "Core Tech & Programming"
subcategory: "Linux"
---

## Understanding Word Count command in Linux

In Linux, we can count files/directories or lines in a file using wc command.

`wc` is a short form for word count that displays word count, byte, and character count, newline count for the files we specify. This is one of the basic Lixu commands everyone should know ranging from Software Developer, Data Engineer to Linux Devops or Admin person.

In this blog post, we will go over some of the comment uses of this command across the Industry. I am using an ubuntu image through docker for this tutorial.

Below is the syntax for this command.

```
wc [options] <filename>
```

## Common Option Available in wc Command

The below table gives the common uses of this command with several options.

| Command | Description |
| --- | --- |
| `wc -l` | It prints the number of lines in a file |
| `wc -c` | It displays the count of total bytes in a specified file |
| `wc -L` | It displays the length of the longest line in a file |

Let's look at these commands with some examples. I have downloaded some sample Comma Separated Value(CSV) files from [this](https://raw.githubusercontent.com/nitendragautam/samp_data_sets/master/cars/cars_data.csv) GitHub repo. It's a CSV file that has the year, makes, and model of the car.

```bash
root@5c8d55b982b8:/usr/tutorials# head -2 cars_data.csv
"year","make","model"
2001,"ACURA","CL"
```

## Count Number of Lines in File

Let's look at ways to count the number of lines in a file. As we can see we have 19773 lines in this file.

```bash
root@5c8d55b982b8:/usr/tutorials# wc -l cars_data.csv
19773 cars_data.csv
```

## Count Number of Bytes and Characters

```bash
root@5c8d55b982b8:/usr/tutorials# wc -c cars_data.csv
576000 cars_data.csv
```

## Display Length of Longest Line

As we can see the longest line has a length of 60 in the file cars_data.csv

```
root@5c8d55b982b8:/usr/tutorials# wc -L cars_data.csv
60 cars_data.csv
```

We can use the awk command to validate this length like below which will show the length of each line. Then we can sort the unique length in descending order and get the max using the tail command.

```bash
root@5c8d55b982b8:/usr/tutorials# awk '{ print length }' cars_data.csv |uniq|sort|tail -2
60
60
```

---

*Originally published on nitendratech.com on 2021-09-17, updated 2021-12-21.*
