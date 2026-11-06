---
title: "Aggregate and Scalar Functions in Database"
description: "Aggregate functions operate on a set of values and return a single aggregated value, while scalar functions return a single value based on the input — here are the commonly used SQL aggregate and scalar functions."
pubDate: 2024-04-06
category: "Data Engineering"
subcategory: "SQL"
---

## What is Aggregate Function?

An aggregate function in a database is a function that operates on a set of values and returns a single aggregated value as a result. These functions are commonly used in SQL queries to perform calculations and operations across multiple or group rows. They are often used with the GROUP BY and HAVING clause of the SELECT statement.

## Commonly used SQL Aggregate functions

The following are the widely used SQL aggregate functions:

| Function | Description |
| --- | --- |
| `AVG()` | Calculates the mean or average of a collection of values. |
| `COUNT()` | Counts the total number of records or rows in a specific table or view. |
| `MIN()` | Calculates the minimum of a collection of values. |
| `MAX()` | Calculates the maximum of a collection of values. |
| `SUM()` | Calculates the sum of a given column values |
| `FIRST()` | Returns the first element in a collection of values. |
| `LAST()` | Returns the last element in a collection of values |

## What is the Scalar function?

A scalar function in a Table returns a single value based on the input value.

## Commonly used SQL scalar function

The following are the widely used SQL scalar functions:

| Function | Description |
| --- | --- |
| `LEN()` | Calculates the total Length of a given field or column. |
| `UCASE()` | Converts a given column value to uppercase character |
| `LCASE()` | Converts a given column value to a lowercase character |
| `MID()` | Converts a given column value to a lowercase character |
| `CONCAT()` | Concatenates two or more column values |
| `RAND()` | Calculates the round-off integer value for numerical field or decimal point values |
| `ROUND()` | Calculates the round-off integer value for numerical field or decimal point values |
| `NOW()` | Returns current Date and Time |
| `FORMAT()` | Sets the format value with the specified rules |

---

*Originally published on nitendratech.com on 2024-04-06, updated 2024-04-06.*
