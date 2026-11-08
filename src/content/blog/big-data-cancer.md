---
title: "Big Data Analytics in Cancer Research"
description: "How big data analytics is applied to cancer research — analyzing data at the cellular, patient, and population levels, and the storage, transport, processing, and visualization tools used to handle it."
pubDate: 2018-03-15
category: "Data Engineering"
subcategory: "Big Data Analytics"
draft: false
---

A single cancer patient on average can generate 1 Terabyte of biomedical diagnostic and clinical data. According to a paper from GLOBOCAN 2018, there will be 18.1 million new cancer cases worldwide along with 18 Exabytes of data being generated annually. Data generated from Cancer has all fours Vs (speed, variety, volume, and veracity) of Big data. We will see how [Big Data](/blog/big-data/) analytics can be used in the field of cancer research in this blog post.

Researchers currently use this data to analyze the disease on [three levels](https://www.canwelivebetter.bayer.com/innovation/finding-cure-cancer-big-data-solution):

- **Cellular**

Researchers mainly look for various patterns in the data to discover genetic biomarkers that can help in predicting the tumor mutation and effective drug treatment for them.

- **Patient**

Using the patient medical history and DNA data, researchers can define the best therapies based on their tumor and gene type.

- **Population**

Population data can be analyzed to determine treatment strategies for cancer patients that differ based on their different lifestyles, geographies, and cancer types.

One of the common methods for cancer research is Genome Sequence, in which we determine the Deoxyribonucleic acid (DNA) sequence of a single, homogeneous or heterogeneous group of cancer cells. It’s an expensive and long-running process, in which we need to analyze billions of records of data to track down the DNA sequence of cancer cells.

## Finding a tool to analyze the cancer data

The real challenge with these huge data sets is to find the proper tool to store it for a long time, process, analyze and visualize it.

#### Storage:

Since data sets are large and need to be archived for a long time, it needs to be stored in a distributed fashion so that no loss of data occurs. Some options available are [HDFS (Hadoop Distributed File System)](/blog/hadoop-hdfs/), Amazon S3, Microsoft Azure, Google Cloud, IBM Cloud, and In-house servers

#### Data Collection/Transport Mechanism:

Organizations need to decide how they want to transport the data from the lab or on-site to their IT infrastructure. Some tools and mechanisms available are SFTP, Hadoop DistCp (Hadoop Distributed Copy), Apache Flume, Apache Sqoop, [Apache Kafka](/blog/apache-kafka/), and Apache NiFi.

**Processes/Analyze:**

Organizations also need to think about how they are going to process or analyze the data. Some tools available are Apache Hadoop/ MapReduce, Apache Hive, Apache Spark in ML Library, R Packages on top of Spark, Vertica, and [ETL](/blog/etl-process/) tools.

**Visualization:**

Once you analyze the data, you might want to summarize these results as a report or visualization. Some tools available for this purpose are Tableau, Microstrategy, d3js library

## Conclusion

In this blog post, we learned about how Apache Hadoop is used in research related to cancer. We also read about the different tools used to analyze cancer data.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2018-03-15, updated 2022-06-21.*
