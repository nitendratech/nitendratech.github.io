---
title: "What is Slowly Changing Dimensions?"
description: "Slowly Changing Dimensions (SCD) explained — what they are, the SCD types 0, 1, 2, 3, 4, and 6 for tracking current and historical dimension data in a data warehouse, and a summary of commonly used SCD2 techniques."
pubDate: 2018-11-10
category: "Data Engineering"
subcategory: "Data Warehouse"
---

A Slowly changing Dimension or SCD is a technique as part of the Change Data Capture(CDC) process that is used to track changes for certain columns over time. SCD is a dimension that stores and manages both current and historical data over time in a data warehouse. It tracks dimensions that change slowly over time, rather than changing on a regular schedule, time-base.

In a data warehouse, we need a dimensional attribute to report historical data. Some examples of these dimensions would be customer address, geography, employee salary, etc. It is considered and implemented as one of the most critical ETL (Extract Transform and Load) tasks in tracking the history of dimension records. These dimensional data can change slowly over time and are known as Slowly Changing Dimensions(SCD).

## Categories of SCD

The most popular approaches to dealing with SCD are given below.

### Type 0 – The passive method

In this method, no special action is performed upon dimensional changes. Some dimension data can remain the same as it was the first time inserted, while others may be overwritten.

### Type 1 – Overwriting the old value

In a Type 1 SCD, the new data overwrites the existing data. Thus, the existing data is lost as it is not stored anywhere else. This is the default type of dimension you create. You do not need to specify any additional information to create a Type 1 SCD.

In this method, no history of dimension changes is kept in the database. The old dimension value is simply overwritten by the new one. This type is easy to maintain and is often used for data whose changes are caused by processing corrections(e.g. removal of special characters, correcting spelling errors).

### Type 2 – Creating a new additional record

In this methodology, all history of dimension changes is kept in the database. You capture attribute changes by adding a new row with a new surrogate key to the dimension table. Both the prior and new rows contain as attributes the natural key (or another durable identifier). Also, the 'effective date' and 'current indicator' columns are used in this method.

A Type 2 SCD retains the full history of values. When the value of a chosen attribute changes, the current record is closed. A new record is created with the changed data values, and this new record becomes the current record. Each record contains the effective time and expiration time to identify the period between which the record was active.

### Type 3 – Adding a new column.

In this type, usually, only the current and previous values of dimensions are kept in the database. The new value is loaded into the 'current/new' column and the old one into the 'old/previous' column. Generally speaking, history is limited to the number of columns created for storing historical data. A Type 3 SCD stores two versions of values for certain selected level attributes. Each record stores the previous value and the current value of the selected attribute. When the value of the selected attributes changes, the current value is stored as the old value and the new value becomes the current value.

### Type 4 – Using the Historical table

In this method, a separate historical table is used to track all dimension's attribute historical changes for each of the dimensions.

#### Type 6 – Combine approaches of types 1,2,3 (1+2+3=6)

## Commonly Used SCD2 Techniques

The below table gives a summary of commonly used SCD2 techniques.

| SCD Type | Use | Description | Tracks History |
| --- | --- | --- | --- |
| Type 1 | Overwrites the Data | When there is a change, existing records are overwritten with one version of the dimension existing. | No |
| Type 2 | Adds new Records | When there is a change, new versions of the same records are created. The old version is deactivated and kept for preserving History. It can have multiple versions of the same dimensional record. | Yes |
| Type 3 | Adds a new Record with Latest Value | When there is a change, it adds a new record with an updated value and maintains an old record for the same. In total, there are two versions of the same dimension record: old values and current values. | Yes |

---

*Originally published on nitendratech.com on 2018-11-10, updated 2023-07-27.*
