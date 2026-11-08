---
title: "Running Hive Queries using Shell scripts"
description: "How to load CSV movie data into Hive internal and external tables using a Bash shell script — copying the data to HDFS, creating the database and tables, and running sample queries."
pubDate: 2018-11-04
category: "Data Engineering"
subcategory: "Hive"
draft: false
---

When working with a Big data platform like Apache Hive, a certain task such as data ingestion/data preparation task needs to be scheduled daily so that downstream applications can get the new data every day. Shell/Bash script is one of the most widely used tools to run any data processing job in a batch manner as the majority of production servers use Linux as the operating system.

In this blog, we will load movie data which is in CSV format into hive tables using Shell scripts. During the development of this script, I will demonstrate the below steps.

- Copying the data from the Local Linux path to [HDFS](/blog/hadoop-hdfs/)
- Creating a Hive Internal/Managed Table
- Create a Hive external Table

You can find the working version of this script below the GitLab Link. [Load Mo](https://gitlab.com/nitendragautam/blog_tutorials/blob/master/big_data/hive/load_movies_data_hive.sh)[vies Data Hive](https://github.com/nitendragautam/blog_tutorials/blob/master/bigdata/hive/load_movies_data_hive.sh)

To run the script to this, you need and Hadoop Cluster running with Apache Hive on top of it.

First, define the shebang and working directory.

```bash
#!/bin/bash

WORK_DIRECTORY=/tmp/movies_data
HDFS_DIR=/data/movies_data
DATABASE_NAME=moviesdata
```

Create the working directory if it does not exist, and download the movie’s data from the GitLab repo.

```bash
if [ ! -d "$WORK_DIRECTORY" ];then
 mkdir -p ${WORK_DIRECTORY}
fi

cd $WORK_DIRECTORY

MOVIES_DATA=${WORK_DIRECTORY}/movies_data.csv

if [ ! -f "$MOVIES_DATA" ];then
wget https://gitlab.com/nitendragautam/samp_data_sets/raw/master/moviesdata/movies_data.csv
fi
```

Since we have already downloaded the movie data, let us copy the file to HDFS.

Before copying the file into HDFS, we need to make a directory in HDFS.

```bash
hdfs dfs -mkdir -p $HDFS_DIR
```

Now we will copy the movie’s data from the Local directory to HDFS only if does not exist.

```bash
hdfs dfs -test -f ${HDFS_DIR}/movies_data.csv

RETURN_CODE=$?
if [ ! $RETURN_CODE -eq 0 ];then

echo " Copy Files to HDFS: hdfs dfs -put ${MOVIES_DATA} $HDFS_DIR \n"

hdfs dfs -put ${MOVIES_DATA} $HDFS_DIR
fi
```

## Create Hive Database

First, we create a database named `moviesdata`.

```bash
CREATE DATABASE IF NOT EXISTS $DATABASE_NAME;
USE $DATABASE_NAME;
```

## Hive Internal Table

Now we will create a hive internal table from movie data and then load data from the Local path into this table.

```bash
CREATE TABLE IF NOT EXISTS movies_int
(id int, name String, year int, rating double, duration int)
COMMENT 'Movies Internal Table'
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
STORED AS TEXTFILE;

LOAD DATA LOCAL INPATH '$MOVIES_DATA' INTO TABLE movies_int;"
```

### Take 20 records

```bash
[maria_dev@sandbox-hdp ~]$ hive -e "USE moviesdata;SELECT * FROM movies_int LIMIT 20;"

1       The Nightmare Before Christmas  1993    3.9     4568
2       The Mummy       1932    3.5     4388
3       Orphans of the Storm    1921    3.2     9062
4       The Object of Beauty    1991    2.8     6150
5       Night Tide      1963    2.8     5126
6       One Magic Christmas     1985    3.8     5333
7       Muriel's Wedding        1994    3.5     6323
8       Mother's Boys   1994    3.4     5733
9       Nosferatu: Original Version     1929    3.5     5651
10      Nick of Time    1995    3.4     5333
11      Broken Blossoms 1919    3.3     5367
12      Big Night       1996    3.6     6561
13      The Birth of a Nation   1915    2.9     12118
14      The Boys from Brazil    1978    3.6     7417
15      Big Doll House  1971    2.9     5696
16      The Breakfast Club      1985    4.0     5823
17      The Bride of Frankenstein       1935    3.7     4485
18      Beautiful Girls 1996    3.5     6755
19      Bustin' Loose   1981    3.7     5598
20      The Beguiled    1971    3.4     6307
Time taken: 0.769 seconds, Fetched: 20 row(s)
```

### Total record count

```bash
[maria_dev@sandbox-hdp ~]$ hive -e "USE moviesdata;SELECT COUNT(*) FROM movies_int;"

--------------------------------------------------------------------------------
        VERTICES      STATUS  TOTAL  COMPLETED  RUNNING  PENDING  FAILED  KILLED
--------------------------------------------------------------------------------
Map 1 ..........   SUCCEEDED      1          1        0        0       0       0
Reducer 2 ......   SUCCEEDED      1          1        0        0       0       0
--------------------------------------------------------------------------------
VERTICES: 02/02  [==========================>>] 100%  ELAPSED TIME: 5.45 s
--------------------------------------------------------------------------------
OK
49590
Time taken: 8.227 seconds, Fetched: 1 row(s)
```

### 20 records whose Release Year is >1990

```bash
hive -e "USE moviesdata; SELECT * FROM movies_int WHERE year> 1990 LIMIT 20;"
Time taken: 2.367 seconds
OK
1       The Nightmare Before Christmas  1993    3.9     4568
4       The Object of Beauty    1991    2.8     6150
7       Muriel's Wedding        1994    3.5     6323
8       Mother's Boys   1994    3.4     5733
10      Nick of Time    1995    3.4     5333
12      Big Night       1996    3.6     6561
18      Beautiful Girls 1996    3.5     6755
23      Swimming with Sharks    1994    3.3     5586
24      Beavis and Butt-head Do America 1996    3.4     4852
27      Brassed Off     1996    3.5     6040
29      Leprechaun 2    1994    3.2     5125
30      Incident at Oglala: The Leonard Peltier Story   1992    3.7     5487
31      Kalifornia      1993    3.4     7095
33      Jingle All the Way      1996    3.6     5371
34      Killing Zoe     1993    3.4     5773
35      King of Beggars 1992    3.6     6025
38      In Too Deep     1999    3.9     5823
42      In the Name of the Father       1993    3.9     7972
46      Drop Zone       1994    3.4     6087
47      Escape from L.A.        1996    3.3     6039
```

## Hive External Table

Now let’s create an external Table `movies_ext`within Hive and apply the repair function on top of it.

```bash
hive -e "
USE $DATABASE_NAME;
CREATE EXTERNAL TABLE IF NOT EXISTS movies_ext
(id int,name String, year int, rating double, duration int)
COMMENT 'Movies External Table'
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
STORED AS TEXTFILE
LOCATION '$HDFS_DIR';

Msck repair table movies_ext;"
```

### Take 20 records

```bash
hive> SELECT * FROM movies_ext LIMIT 20;
OK
1       The Nightmare Before Christmas  1993    3.9     4568
2       The Mummy       1932    3.5     4388
3       Orphans of the Storm    1921    3.2     9062
4       The Object of Beauty    1991    2.8     6150
5       Night Tide      1963    2.8     5126
6       One Magic Christmas     1985    3.8     5333
7       Muriel's Wedding        1994    3.5     6323
8       Mother's Boys   1994    3.4     5733
9       Nosferatu: Original Version     1929    3.5     5651
10      Nick of Time    1995    3.4     5333
11      Broken Blossoms 1919    3.3     5367
12      Big Night       1996    3.6     6561
13      The Birth of a Nation   1915    2.9     12118
14      The Boys from Brazil    1978    3.6     7417
15      Big Doll House  1971    2.9     5696
16      The Breakfast Club      1985    4.0     5823
17      The Bride of Frankenstein       1935    3.7     4485
18      Beautiful Girls 1996    3.5     6755
19      Bustin' Loose   1981    3.7     5598
20      The Beguiled    1971    3.4     6307
Time taken: 0.545 seconds, Fetched: 20 row(s)
```

### Total record count

```bash
[maria_dev@sandbox-hdp ~]$ hive -e "USE moviesdata;SELECT COUNT(*) FROM movies_ext;"

--------------------------------------------------------------------------------
        VERTICES      STATUS  TOTAL  COMPLETED  RUNNING  PENDING  FAILED  KILLED
--------------------------------------------------------------------------------
Map 1 ..........   SUCCEEDED      1          1        0        0       0       0
Reducer 2 ......   SUCCEEDED      1          1        0        0       0       0
--------------------------------------------------------------------------------
VERTICES: 02/02  [==========================>>] 100%  ELAPSED TIME: 5.45 s
--------------------------------------------------------------------------------
49590
```

### 20 records whose Release Year is >1990

```bash
hive -e "USE moviesdata; SELECT * FROM movies_ext WHERE year> 1990 LIMIT 20;"
Time taken: 2.367 seconds
OK
1       The Nightmare Before Christmas  1993    3.9     4568
4       The Object of Beauty    1991    2.8     6150
7       Muriel's Wedding        1994    3.5     6323
8       Mother's Boys   1994    3.4     5733
10      Nick of Time    1995    3.4     5333
12      Big Night       1996    3.6     6561
18      Beautiful Girls 1996    3.5     6755
23      Swimming with Sharks    1994    3.3     5586
24      Beavis and Butt-head Do America 1996    3.4     4852
27      Brassed Off     1996    3.5     6040
29      Leprechaun 2    1994    3.2     5125
30      Incident at Oglala: The Leonard Peltier Story   1992    3.7     5487
31      Kalifornia      1993    3.4     7095
33      Jingle All the Way      1996    3.6     5371
34      Killing Zoe     1993    3.4     5773
35      King of Beggars 1992    3.6     6025
38      In Too Deep     1999    3.9     5823
42      In the Name of the Father       1993    3.9     7972
46      Drop Zone       1994    3.4     6087
47      Escape from L.A.        1996    3.3     6039
```

---

*Originally published on nitendratech.com on 2018-11-04, updated 2024-01-23.*
