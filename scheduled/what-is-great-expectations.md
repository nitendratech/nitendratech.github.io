---
title: "What is Great Expectations?"
description: "Great Expectations is the most-named data quality framework in top-payer data engineering postings: Expectations, Suites, Checkpoints, and Data Docs. What it is, how it validates pipelines, and where it fits next to dbt tests."
pubDate: 2026-11-26
category: "Data Engineering"
subcategory: "Data Quality"
draft: false
---


Data pipelines fail quietly. A column that was always populated starts arriving null, a categorical field gains a new value, a join silently drops rows — and the dashboard still renders, now wrong. Great Expectations (GX) exists to catch those failures before bad data reaches anyone: it turns "this data should look like this" into executable, versioned checks.

## What is Great Expectations?

Great Expectations is an open-source data quality framework. Instead of writing one-off validation scripts, you declare **Expectations** — statements about data, such as "this column must never be null" or "values in this column must be one of these five statuses" — and GX runs them against your data and reports pass or fail.

The framework works across pandas DataFrames, Spark, SQL databases, and files, so the same expectation can validate a batch in a warehouse, a DataFrame in a notebook, or a file landing in object storage.

## Expectations, Suites, and Checkpoints

Three concepts hold a GX project together:

- **Expectation** — a single assertion about data. Examples: `expect_column_values_to_not_be_null`, `expect_column_values_to_be_between`, `expect_column_values_to_be_unique`, `expect_table_row_count_to_be_between`. There are hundreds of built-in expectations, and custom ones can be written in Python.
- **Expectation Suite** — a named collection of expectations for one dataset, stored as JSON. A suite is the contract for that dataset: it documents what "good" means, and it is versioned in git like code.
- **Checkpoint** — the thing that actually runs. A Checkpoint binds a Suite to a data source (a batch of data), runs validation, and decides what happens with the result: log it, send an alert, or fail the pipeline step.

```python
# A minimal validation in Python
import great_expectations as gx

context = gx.get_context()
validator = context.sources.pandas_default.read_csv("orders.csv")
validator.expect_column_values_to_not_be_null("order_id")
validator.expect_column_values_to_be_between("total_amount", min_value=0)
results = validator.validate()
```

**Validation Results** record every expectation's outcome, and **Data Docs** renders them as a browsable HTML site — the same results a reviewer, an auditor, or a downstream team can open to see exactly which checks passed and which failed, and when.

## How it fits in a pipeline

The usual pattern is to validate at the gates: when raw data lands, when a staging model finishes, and before a mart is published. A failed Checkpoint can stop the run, quarantine the batch, or alert the owner — the point is that the failure is loud and early, not discovered weeks later in a report.

GX pairs naturally with the rest of the modern stack: dbt tests assert inside the warehouse after transformation, while GX validates data as it moves between systems, in Python, or before it lands. Teams that need both use both — dbt for in-warehouse tests, GX for cross-system validation and richer statistical checks such as distribution drift.

## Where it fits — and its limits

- **Common uses** — validating ingested files and API payloads, gating pipeline stages on data quality, documenting data contracts in executable form, and producing auditable validation history for regulated data.
- **What it is not** — not an orchestrator, not a data catalog, and not a profiler that fixes data. It detects and reports problems; the pipeline decides what to do about them.
- **Honest caveat** — GX is powerful but has a learning curve: suites, checkpoints, and data sources are a fair amount of configuration for a small pipeline, and teams sometimes start with a handful of critical expectations on their most important tables rather than validating everything at once.

For a data engineer, Great Expectations matters because interviewers increasingly ask not just "how do you move data" but "how do you prove it is correct" — and GX is the named tool they most often expect you to know.

## Resources

- Great Expectations — https://greatexpectations.io/
- Great Expectations documentation — https://docs.greatexpectations.io/
