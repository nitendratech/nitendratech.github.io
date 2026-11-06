---
title: "What is Data Quality?"
description: "What data quality is and why it matters — common data quality issues, the advantages of maintaining quality data, and the dimensions used to measure it, from uniqueness and accuracy to completeness, timeliness, and integrity."
pubDate: 2018-11-22
category: "Data Engineering"
subcategory: "Data Quality"
---

Accurate, consistent, and timely available data in an organization are essential to today's world. Organizations must strive to identify the data relevant to their decision-making to develop business policies and practices that ensure accuracy and completeness and facilitate enterprise-wide data sharing.

## What is Data Quality?

Data quality is a measure that makes sure the [data](https://www.nitendratech.com/datascience/data-explained/) fits the purpose of its organization. It is an important aspect of data governance that makes sure that the organization's data is fit for its purpose to be used by all the lines of business. It can also be the development and implementation of certain activities that utilize the quality management technique in the data to make it fit all the lines of business of the organization. Data is considered to be of high quality if it fits its intended use and accurately represents real-world scenarios consistently.

## Data Quality Issues

An organization that fails to maintain its data quality faces many issues.

Some frequent and important issues are given below.

- Duplicate Data
- Incomplete Data
- Inconsistent data
- Incorrect Data
- Poorly Defined Data
- Poorly Organized data
- Poorly secured data with confidential data exposed

## Advantages of Data Quality

When an organization maintains quality in its existing data, it has the below advantages.

### Minimize IT (Information Technology) project risk

Bad data or dirty data can cause delays and extra work on information system projects, especially those that involve reusing data from existing systems.

### Make timely business decisions

When managers do not have access to high-quality data, they lack confidence in data. This causes delays in making quick and informed business decisions.

### Ensure regulatory compliance

Quality data can help organizational justice, intelligence, and anti-fraud activities.

### Expand the customer base by knowing correct information about the customers

## Data Quality Dimensions

Quality data are the kind of data that are free of defects and can be used in operations, decision-making, and planning in an organization. Data is considered high quality if it accurately reflects the real-world construct to which it refers. These high-quality data are desired in any organization as they can make use of it in their data mining or Machine learning-based projects.

We can measure the quality of the data by using indicators known as Data Quality Index(DQI). This index can be used to monitor the quality of the organization's database and warehouses, as it provides an aggregate score of selected data characteristics. These indexes are also known as Data Quality Dimensions. These dimensions represent a set of rules providing an objective measure of data quality. DQI uses these dimensions along with other rules to establish consistency in the data stored in an organization.

Below are some important dimensions of Quality data.

### Uniqueness

Uniqueness in data quality means that each entity exists no more than once within the database and is identified by a unique key.

### Accuracy

Accuracy has to do with the degree to which any datum correctly represents the real-life object it models. Data must be both accurate and precise enough for their intended use. Data can be valid (i.e., satisfy a specified domain or range of values) and not be accurate. It should accurately represent the "real-world" values by being unbiased, unprejudiced, and impartial. Data should not have incorrect spellings of product or person names and addresses. Incorrect data can impact operational and analytical applications.

### Consistency

Consistency means that values for data in one data set (database) are in agreement with the values for related data in another data set (database). Inconsistency between data values affects organizations attempting to reconcile different systems and applications.

### Completeness

Completeness refers to data having assigned values if they need to have values. It also means that all data needed are present.

### Timeliness

Timeliness means meeting the expectation for the time between when data are expected and when they are readily available for use. Some data need to be time-stamped to indicate when to apply, and missing from or to dates may indicate a data quality issue.

### Currency

Currency is the degree to which data are recent enough to be useful. For Example, the Customer phone number needs to be up-to-date in the database so that we can call customers in real time.

### Conformance

Conformance refers to whether data are stored, exchanged, or presented in a format that is specified by their metadata. The metadata includes both domain integrity rules (e.g., attribute values that come from a valid set or range of values) and actual format (e.g., specific location of special characters, the precise mixture of text, numbers, and special symbols).

### Integrity

Data that refer to other data need to be unique and satisfy existing requirements (i.e., satisfy any mandatory or optional one-cardinalities). If there is no way to link various records can cause duplicates in the system

What data is missing important relationship linkages? The inability to link related records together may actually introduce duplication across your systems. Not only that but as more value is derived from analyzing connectivity and relationships, the inability to link related data instances together impedes this valuable analysis.

## References

[1] Jeffrey A. Hoffer, Ramesh Venkataraman, and Heikki Topi. 2010. Modern Database Management (10th ed.). Prentice Hall Press, Upper Saddle River, NJ, USA.

---

*Originally published on nitendratech.com on 2018-11-22, updated 2024-08-03.*
