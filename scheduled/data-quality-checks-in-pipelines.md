---
title: "Data Quality Checks in Pipelines: A Practical Guide"
description: "Quality as a gate, not a dashboard. The checks every pipeline needs — schema, freshness, volume, uniqueness, validity, reconciliation — where to run them, and what to do when they fail."
pubDate: 2026-12-17
category: "Data Engineering"
subcategory: "Data Quality"
draft: false
---


Most data quality programs fail the same way: checks exist, but they produce a report nobody acts on, while bad data flows downstream anyway. The pattern that works is simpler — treat quality checks as **gates at layer boundaries** that can stop a load, with a small, well-chosen set of checks that run on every pipeline execution.

## The six checks that cover most failures

### 1. Schema checks

Did the structure change? Column names, types, and nullability compared against an expected contract. This is the check that catches the upstream rename at the boundary instead of in a dashboard three tables later. On enforced table formats (Delta, Iceberg), part of this is automatic — but only for the tables they govern.

### 2. Freshness checks

Is the data as recent as the SLA promises? Compare `max(event_time)` or the latest partition against a threshold ("hourly table must contain data within the last 2 hours"). Freshness failures usually mean an upstream delay, not bad data — route them differently from correctness failures.

### 3. Volume checks

Row counts within an expected band: not zero, not 10× yesterday, within a percentage range of the recent average. Volume checks catch truncated extracts, double loads, and silently filtered sources — the most common real-world incidents — with one cheap query.

### 4. Uniqueness checks

Primary keys actually unique, on the tables that promise it. Duplicates are the classic silent corruption: joins fan out, aggregates inflate, and every downstream number is slightly wrong. `GROUP BY key HAVING COUNT(*) > 1` on the silver layer earns its keep weekly.

### 5. Validity and referential checks

Values inside their domains: amounts non-negative where that must hold, statuses from the known enum, dates inside a sane range, foreign keys that resolve to a dimension row. Keep this list short and tied to real business rules — hundreds of aspirational checks become noise.

### 6. Reconciliation checks

Totals that must agree across systems: source row count vs landed row count; control totals (sum of amounts) at source, silver, and gold. Reconciliation is the check that answers the stakeholder's "your numbers are wrong" with evidence about exactly where they diverge.

## Where the gates go

- **At ingestion (bronze → silver):** schema, volume, freshness. Non-conforming batches get **quarantined** — landed but not promoted — so raw data is never lost and the pipeline isn't held hostage by one bad file.
- **At publication (silver → gold):** uniqueness, validity, reconciliation. Gold is the trust boundary consumers read; nothing crosses it unchecked.
- **Fail behavior is a design decision:** block (correctness-critical marts), warn-and-continue (exploratory feeds), or quarantine-and-alert (most ingestion). Write the choice into the pipeline, not into a runbook.

## A minimal example (SQL-style checks)

```sql
-- freshness
SELECT CASE WHEN MAX(event_time) >= CURRENT_TIMESTAMP - INTERVAL 2 HOUR
            THEN 'PASS' ELSE 'FAIL' END AS freshness
FROM silver.events;

-- uniqueness
SELECT COUNT(*) AS duplicate_keys
FROM (SELECT event_id FROM silver.events
      GROUP BY event_id HAVING COUNT(*) > 1) d;

-- volume band (vs 7-day average)
SELECT CASE WHEN COUNT(*) BETWEEN 0.7 * (SELECT AVG(cnt) FROM ops.daily_counts
                                          WHERE table_name = 'silver.events')
                              AND 1.5 * (SELECT AVG(cnt) FROM ops.daily_counts
                                          WHERE table_name = 'silver.events')
            THEN 'PASS' ELSE 'FAIL' END AS volume
FROM silver.events WHERE event_date = CURRENT_DATE;
```

Frameworks (Great Expectations, dbt tests, Deequ, Soda, platform expectations in managed pipelines) all implement these same ideas with better ergonomics — suites of expectations, stored results, and alerting. The framework matters less than placement and fail behavior.

## Operating the gates without creating alert fatigue

- **Every check has an owner and a severity.** Unowned checks get muted; muted checks are worse than none.
- **Alert on failure with context:** which check, expected vs actual, affected partitions, and a link to the run. "Job failed" is not an alert, it's a chore.
- **Track failures as data.** A small history of check results shows slow drift (freshness slipping 10 minutes a week) long before it becomes an incident.
- **Review quarterly.** Delete checks that never fire and never would matter; add checks for every incident you actually had. The suite should read like your incident history, formalized.

## Key takeaways

- Quality works as blocking gates at layer boundaries — bronze → silver for structure and volume, silver → gold for trust.
- Six check types cover the overwhelming majority of real incidents; start there, not with a framework shopping list.
- Quarantine beats both silent acceptance and total failure for bad input batches — land the data, stop its promotion, alert with context.

## Resources

- Great Expectations — https://greatexpectations.io/
- dbt tests documentation — https://docs.getdbt.com/docs/build/tests
- Monte Carlo — https://www.montecarlodata.com/
