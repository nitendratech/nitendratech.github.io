---
title: "Apache HBase Data Model"
description: "The Apache HBase data model explained — tables, rows, row keys, columns, column families, column qualifiers, cells, and timestamps in this distributed NoSQL database."
pubDate: 2020-06-18
category: "Data Engineering"
subcategory: "HBase"
---

Apache HBase is an open-source, distributed, versioned, non-relational(NoSQL) database modeled after Google's Big Table. Even though this terminology overlaps with [relational databases(RDBMS)](https://www.nitendratech.com/database/database-tutorials/), the HBase table, in reality, is a multidimensional map. It is column-oriented data storage, as we don't need to read all the values for specific queries. A column-oriented database saves its data by columns, and subsequent column values are stored contiguously on a disk. This is in contrast to the row-oriented traditional database, which stores entire rows contiguously.

## HBase Data Model Terminology

**Table**
An HBase table consists of multiple rows.

**Row**
A row in HBase consists of a row key and one or more columns with values associated with them. Rows are sorted alphabetically by the row key as they are stored. As rows are stored by the row key in HBase, its design is very important. The main goal is to store data such that related rows are near to each other.

**Column**
A column in HBase consists of a column family and a column qualifier, which are delimited by a : (colon) character.

**Column Family**
Column families physically colocate a set of columns and their values, often for performance reasons. Each column family has a set of storage properties, such as whether its values should be cached in memory, how its data is compressed or its row keys are encoded, and others. Table rows have the same column families, even though they might not store any data related to that common family.

**Column Qualifier**
A column qualifier is added to a column family to provide the index for a given piece of data. HBase column qualifiers differ greatly between rows, even though column families are fixed at table creation.

**Cell**
An HBase cell is a combination of the row, column family, and column qualifier, and contains a value and a timestamp, which represents the value's version.

**Timestamp**
A timestamp is written alongside each value and is the identifier for a given version of a value. By default, the timestamp represents the time on the RegionServer when the data was written, but you can specify a different timestamp value when you put data into the cell.

**Row Key**
Every row in an HBase table has a unique identifier known as RowKey. It is used for grouping cells logically, it ensures that all cells that have the same RowKeys are colocated on the same server. RowKey is internally regarded as a byte array.

---

*Originally published on nitendratech.com on 2020-06-18, updated 2024-02-18.*
