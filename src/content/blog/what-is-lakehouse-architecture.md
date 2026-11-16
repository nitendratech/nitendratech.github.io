---
title: "What is a Lakehouse Architecture?"
description: "A lakehouse combines the low-cost, flexible storage of a data lake with the transactions, schema, and performance of a data warehouse — one platform for BI and AI. How it evolved, how it works, and when it fits."
pubDate: 2026-11-16
category: "Cloud & Architecture"
subcategory: "Data Lakehouse"
draft: false
---


For twenty years, organizations ran two systems side by side: a data warehouse for reporting, and later a data lake for everything else. The lakehouse is the architecture that merges them — one copy of the data, on cheap cloud storage, serving business intelligence, data science, and AI workloads together.

## The two systems the lakehouse replaces

### The data warehouse

Structured, schema-first, and excellent for SQL reporting — but expensive to store data in, closed in format, and a poor fit for unstructured data, streaming, and machine learning. Data must be transformed *before* loading, so anything not modeled in advance is simply not there when you need it.

### The data lake

Cheap object storage (S3, Azure Data Lake Storage, Google Cloud Storage) holding files in open formats like Parquet, in any shape — structured, semi-structured, unstructured. Flexible and scalable, but with no transactions, weak schema control, and no reliable updates, lakes famously decayed into "data swamps": files nobody could trust, update, or delete safely.

The standard workaround was a two-system architecture — lake for storage and ML, warehouse for BI, data copied between them. It worked, at the price of duplicate storage, duplicated pipelines, and numbers that never quite matched.

## What a lakehouse is

A lakehouse keeps the lake's storage model — open files on object storage — and adds the warehouse's guarantees through an **open table format**: Delta Lake, Apache Iceberg, or Apache Hudi. The table format is a metadata layer that tracks which files make up a table at each version, making possible:

- **ACID transactions** — concurrent readers and writers see consistent snapshots; failed jobs leave no partial data.
- **Schema enforcement and evolution** — tables have real schemas that reject bad writes, and can evolve deliberately.
- **Time travel** — every committed version is queryable for audit, reproduction, and rollback.
- **Upserts and deletes** — `MERGE INTO` and row-level deletes bring warehouse-style data management (including CDC loads and privacy deletions) to lake files.
- **Performance features** — file statistics, data skipping, compaction, and clustering make SQL over lake files fast enough for BI.

Compute stays separate and interchangeable: Spark, SQL warehouses, Flink, Trino, and ML frameworks can all work over the same tables, because the formats and files are open.

## The typical shape of a lakehouse

Most lakehouses organize tables in layers — the medallion pattern is the common example:

- **Bronze** — raw data as ingested, append-only; the replayable source of truth.
- **Silver** — cleaned, deduplicated, conformed tables; reliable joins live here.
- **Gold** — business-level aggregates and marts, shaped for dashboards, reports, and increasingly, AI features and retrieval.

Governance sits across the layers — a catalog (such as Unity Catalog or an Iceberg REST catalog) provides one place for access control, auditing, and lineage.

## Why it matters now: BI and AI on the same data

The lakehouse arrived for BI cost and flexibility reasons, but AI made it essential. Machine learning and LLM applications consume exactly what warehouses excluded: unstructured documents, images, logs, and event streams — plus the structured tables. A platform that holds both, with transactions and governance, removes the copy pipelines between "analytics data" and "AI data" and gives models and dashboards the same trusted source.

## Lakehouse vs warehouse vs lake, briefly

| Aspect | Data warehouse | Data lake | Lakehouse |
| --- | --- | --- | --- |
| Storage | Proprietary, higher cost | Open files, low cost | Open files, low cost |
| Data types | Structured | All, uncontrolled | All, with schema and governance |
| Transactions | Yes | No | Yes (via table format) |
| Updates/deletes | Yes | Painful | Yes (MERGE, row-level) |
| Workloads | BI/SQL | Storage, some ML | BI, ML, streaming, AI |
| Compute choice | Tied to the warehouse | Bring your own | Many engines, one copy |

## When a lakehouse fits — and when it may not

**Fits well:** organizations with mixed BI + ML/AI workloads, large or fast-growing data volumes, streaming plus batch needs, and a reason to avoid maintaining two platforms.

**Simpler may win:** a small, purely relational reporting workload can be served perfectly well by a modern cloud warehouse alone. The lakehouse earns its complexity at scale and workload diversity — it is not a default for every team.

## Key takeaways

- A lakehouse = lake storage (open files, object storage) + warehouse guarantees (transactions, schema, time travel) delivered by an open table format.
- It removes the two-system copy tax between lakes and warehouses, and serves BI, streaming, ML, and AI from one governed copy of the data.
- Delta Lake, Apache Iceberg, and Apache Hudi are the formats that make it possible; the medallion layering is the common operating pattern.

## Resources

- Databricks: What is a data lakehouse? — https://www.databricks.com/glossary/data-lakehouse
- Delta Lake documentation — https://docs.delta.io/latest/
- Apache Iceberg documentation — https://iceberg.apache.org/docs/latest/
