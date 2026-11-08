---
title: "Joins using MapReduce Framework"
description: "The three types of joins in the MapReduce framework — map-side joins, reduce-side joins, and memory-backed joins — how each one works, and the advantages of map-side joins."
pubDate: 2017-09-25
category: "Data Engineering"
subcategory: "MapReduce"
draft: false
---

There are 3 types of joins, Reduce-Side joins, Map-Side joins, and memory-backed Joins that can be used to join Tables in [MapReduce](/blog/hadoop-mapreduce-framework/).

## Map Side Join

Joining at the map side performs the join before data reaches the map function. It expects a strong condition before joining data on the map side.

- Data should be partitioned and sorted in a particular way.
- Each input data should be divided into the same number of partitions.
- Must be sorted with the same key.
- All the records for a particular key must reside in the same partition.

## Reduce Side Join

A reduce side join occurs on the reducer side and is also called a Re-partitioned join or repartitioned sort-merge join. In fact, it is the most used join type in the [MapReduce](/blog/hadoop-mapreduce-framework/) framework. This type of join would be performed at a reduce side and thus have to go through a sort and shuffle phase, which would incur network overhead.

## Memory Backed Join

We use this join for small tables which can be fit in the memory of data nodes.

Among these, reduce side join is the efficient one as it joins the tables based on the key which are shuffled and sorted before going to the reducer. Hadoop sends identical keys to the same reducer, so by default, the data is organized for the joins.

## Map side Join and its Advantage

Map-side join is a process where two data sets are joined by the mapper.

The advantages of using map side join in MapReduce are as follows:

- Map-side join helps in minimizing the cost that is incurred for sorting and merging in the shuffle and reduces stages.
- Map-side joins also help in improving the performance of the task by decreasing the time to finish the task.

---

*Originally published on nitendratech.com on 2017-09-25, updated 2023-07-22.*
