---
title: "PySpark Interview Questions and Answers for Data Engineers"
description: "The PySpark questions that actually come up in data engineering interviews — DataFrames, partitioning, shuffles, skew, and production debugging — with clear, practical answers."
pubDate: 2026-12-14
category: "Data Engineering"
subcategory: "Spark"
draft: false
---



PySpark is where most Spark interviews actually happen. Interviewers rarely ask for syntax trivia — they probe whether you understand what Spark is doing under the hood: partitioning, shuffles, memory, and what you do when a production job misbehaves. These are the questions that come up again and again, grouped the way interviewers ask them.

## Core concepts

### 1. What is PySpark, and how does it execute your code?

PySpark is the Python API for Apache Spark. Spark itself runs on the JVM; PySpark talks to it through Py4J. Your Python code builds a logical plan on the driver, and the actual data processing runs as JVM tasks on executors. That split is why a Python UDF is slower than a built-in function — every row crosses the Python/JVM boundary.

### 2. RDD vs DataFrame vs Dataset — which should you use?

- **RDD** — the low-level, unstructured API. Full control, no optimization.
- **DataFrame** — structured, tabular API. Catalyst optimizer and Tungsten execution make it significantly faster.
- **Dataset** — typed DataFrames (Scala/Java); in Python, DataFrame is the practical choice.

In production PySpark, use DataFrames. RDDs appear mainly in legacy code and very custom partitioning work.

### 3. Transformations vs actions, and lazy evaluation

Transformations (`filter`, `select`, `groupBy`) are lazy — they only extend the plan. Actions (`count`, `write`, `collect`, `show`) trigger execution. Lazy evaluation lets Catalyst optimize the whole chain before a single task runs. It also explains a classic trap: code that "runs instantly" and then explodes at the first action was never executing until that point.

### 4. What is the Catalyst optimizer?

Catalyst builds a logical plan from your query, applies rule-based optimizations (predicate pushdown, column pruning, constant folding), picks a physical plan (including join strategy), and generates optimized code via whole-stage code generation. Calling `.explain()` shows you the plan — the first thing to check when a job is slow.

## Partitioning, shuffles, and performance

### 5. What causes a shuffle, and why is it expensive?

Wide transformations — `groupBy`, joins, `distinct`, `repartition` — need records with the same key in the same place, so data moves across the network and spills to disk. A shuffle is usually the most expensive stage in a job: network I/O, disk I/O, and serialization all at once. Reducing shuffle volume (filter early, pre-aggregate with `reduceByKey`-style patterns, broadcast small sides) is the core of Spark tuning.

### 6. repartition() vs coalesce()

- `repartition(n)` — full shuffle, redistributes evenly. Use it to increase partitions or fix skew.
- `coalesce(n)` — merges partitions without a full shuffle. Use it to reduce partition count, typically before writing output, so you don't produce thousands of tiny files.

### 7. How do you handle data skew?

Symptoms: most tasks finish fast, a few run for a very long time (watch the Spark UI stage view). Fixes, in rough order:

1. **Broadcast join** if the small side truly is small.
2. **Salting** — add a random suffix to hot keys on both sides, join, then aggregate back.
3. **Adaptive Query Execution (AQE)** — Spark 3+ can split skewed partitions automatically (`spark.sql.adaptive.skewJoin.enabled`).
4. Filter out or handle separately a genuinely hot key (e.g., a null or default key carrying half the table).

### 8. A join between a 1 TB table and a 5 MB table is slow. What do you do?

Broadcast the 5 MB table: `broadcast(small_df)` in the join. Every executor gets a full local copy, so the large table never shuffles. Watch the limits — broadcasting gigabytes will OOM the driver; broadcast is for genuinely small dimensions.

### 9. cache() vs persist()

Both keep a DataFrame in memory (and disk, depending on level) for reuse. `cache()` is shorthand for `persist(StorageLevel.MEMORY_AND_DISK)`. Cache when a DataFrame is reused by multiple actions; never cache "just in case" — unused cache evicts data you actually need and can slow everything else down.

### 10. What is spark.sql.shuffle.partitions, and how do you set it?

The number of partitions created by shuffles (default 200). Too few → each task processes too much data and spills. Too many → scheduling overhead dominates. A common starting point is 2–4× your total executor cores, adjusted by watching task sizes in the Spark UI (aim for roughly 100–200 MB per partition).

## Coding questions interviewers love

### 11. Find the second-highest salary per department

```python
from pyspark.sql import Window
from pyspark.sql.functions import dense_rank

w = Window.partitionBy("dept").orderBy(df.salary.desc())
result = (df.withColumn("rnk", dense_rank().over(w))
            .filter("rnk = 2")
            .select("dept", "name", "salary"))
```

Window functions are the most-tested PySpark coding topic — `row_number`, `rank`, `dense_rank`, `lag`/`lead` show up in almost every set.

### 12. Remove duplicate records, keeping the latest

```python
w = Window.partitionBy("id").orderBy(df.updated_at.desc())
deduped = (df.withColumn("rn", row_number().over(w))
             .filter("rn = 1")
             .drop("rn"))
```

### 13. Why avoid UDFs when a built-in function exists?

Built-in functions run entirely in the JVM and are visible to Catalyst, so they can be optimized (and in many cases code-generated). A Python UDF forces row-by-row serialization between the JVM and Python processes and is opaque to the optimizer. If custom logic is unavoidable, prefer pandas UDFs (vectorized, Arrow-based) over plain UDFs.

## Production and scenario questions

### 14. Your Spark job ran in 20 minutes yesterday and takes 2 hours today. How do you troubleshoot?

1. **Compare, don't guess** — open both runs in the Spark UI / history server. Which stage grew?
2. Check input size first: did the source data volume or file count change?
3. Look for skew: a stage where one task dwarfs the others.
4. Check the plan: did a broadcast join silently become a sort-merge join (statistics changed)?
5. Check the cluster: executor loss, spot/preemption, or a noisy neighbor reducing available cores.
6. Check for small files: a day of tiny-file writes upstream makes today's read stage crawl.

### 15. How do you write output without creating the small-file problem?

Control partitions before writing (`coalesce` or AQE's coalesce post-shuffle partitions), write in a columnar format like Parquet or Delta, and partition by a low-to-moderate cardinality column you actually filter on. On Delta Lake, `OPTIMIZE` compacts small files after the fact.

## Key takeaways

- DataFrames + built-in functions beat RDDs and UDFs — Catalyst can only optimize what it can see.
- Most performance questions are really shuffle, skew, and partitioning questions.
- Interviewers reward a debugging method (compare runs, read the UI, read the plan) over memorized config values.

## Resources

- PySpark documentation — https://spark.apache.org/docs/latest/api/python/
- Apache Spark SQL programming guide — https://spark.apache.org/docs/latest/sql-programming-guide.html
- Spark performance tuning guide — https://spark.apache.org/docs/latest/sql-performance-tuning.html
