---
title: "Caching and Persisting Mechanism in Spark"
description: "How Spark's cache() and persist() operations store RDDs for reuse in later stages, and the five persistence storage levels from MEMORY_ONLY to DISK_ONLY."
pubDate: 2019-10-01
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

Caching and persistence are optimization techniques for (iterative and interactive) [Apache Spark](https://www.nitendratech.com/spark/apache-spark/) computations. This technique helps to save interim partial results, which can be reused in subsequent stages. These results, in the form of Resilient Distributed Datasets(RDDs), are kept in memory (default) or more solid storage like disk and/or get replicated.

We can cache the RDDs using cache operation. We can also persist in the RDDs using the persist operation. Calling will persist each partition of the RDD in the executor’s memory. If an executor does not have enough memory to store the RDD partition, it will be re-computed instead of failing.

Only the syntactic difference between cache and persist. The cache is a synonym of persist or persist(`MEMORY_ONLY`), i.e. cache is merely persisted with the default storage level `MEMORY_ONLY`. `Persist ()` allows the user to specify the storage level, whereas `cache ()` uses the default storage level.

## Levels of Persistence Provided by Apache Spark

For Spark to perform various shuffle operations, Spark persists intermediate data into different levels. If the users want to reuse the intermediate data, they can call the `persist()` method on the RDD which needs to be used.

Below are the persistence mechanisms provided by Spark.

- **MEMORY_ONLY**

In this persistence level, the RDD object is stored as a deserialized Java object in JVM(Java Virtual Machine). If this object doesn’t fit in the memory, it will be recomputed.

- **MEMORY_AND_DISK**

At this persistence level, the RDD object is stored as a deserialized Java object in JVM. If this object doesn’t fit in the memory, it will be stored on the Disk.

- **MEMORY_ONLY_SER**

In this persistence level, the RDD object is stored as a serialized Java object in JVM. It is more efficient than a deserialized object.

- **MEMORY_AND_DISK_SER**

In this persistence level, the RDD object is stored as a serialized Java object in JVM. If an RDD doesn’t fit in the memory, it will be stored on the Disk.

- **DISK_ONLY**

In this persistence level, the RDD object is stored only on Disk.

---

*Originally published on nitendratech.com on 2019-10-01, updated 2024-02-18.*
