---
title: "Data Locality in Spark"
description: "What data locality means in Apache Spark and its five levels — PROCESS_LOCAL, NODE_LOCAL, NO_PREF, RACK_LOCAL, and ANY — ordered from closest to farthest from the running code."
pubDate: 2019-09-24
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

Data locality refers to how close data is to the code processing it. Having the code and the data together tends to make computations faster in [Apache Spark](/blog/apache-spark/). If the code and data are separated, either one has to move to the other. Moving the serialized code through the network is faster than moving the data through the network. As the size of the code is smaller than the data itself, this helps in the use of fewer network resources.

There are several levels of locality based on the data's current location. Below are the locality levels in order from closest to farthest.

## PROCESS_LOCAL

At this level, data is in the same JVM as the running code. This is the best locality possible in Spark.

## NODE_LOCAL

At this level, data is on the same node. Examples might be in HDFS on the same node, or in another executor on the same node. This is a little slower than PROCESS_LOCAL because the data has to travel between processes

## NO_PREF

At this level, data is accessed equally quickly from anywhere and has no locality preference

## RACK_LOCAL

At this level, data is on the same rack of servers. Data is on a different server on the same rack so needs to be sent over the network, typically through a single switch

## ANY

At this level, data is elsewhere on the network and not in the same rack

## References

[https://spark.apache.org/docs/latest/tuning.html#data-locality](https://spark.apache.org/docs/latest/tuning.html#data-locality)

---

*Originally published on nitendratech.com on 2019-09-24, updated 2022-06-06.*
