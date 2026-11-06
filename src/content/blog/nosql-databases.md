---
title: "What is NoSQL Database? NoSQL Database Explained"
description: "What a NoSQL database is and how it differs from an RDBMS — flexible data models explained, covering key-value, document, wide-column, and graph stores with examples."
pubDate: 2020-10-10
category: "Data Engineering"
subcategory: "Databases"
---

## What is NoSQL Database?

A non-relational or NoSQL Database is a data storage system that was designed for unstructured data, which does not follow an [ACID](https://www.nitendratech.com/database/acid-property-database/) property like a traditional Relational Database Management System ([RDBMS](https://www.nitendratech.com/database/relational-database/)). Many of the NoSQL databases provide flexibility to inconsistency in favor of availability and partition tolerance, as explained by the [CAP](https://www.nitendratech.com/database/cap-theorem/) theorem.

Instead of having a fixed schema structure like RDBMS, NoSQL provides flexible data models.

## NoSQL Data Models

Fundamentally, we can classify NoSQL databases into four basic types.

### Key-value data store

These databases store the values in the form of Key/Value Pairs and also stores the metadata about the values. Data in this database can be of any type of binary objects like text, video, or JSON (JavaScript Object Notation). Records in this database are stored and retrieved using a key that can identify and retrieve the records uniquely.
For Example, Project Voldemort, Riak, and Redis.

### Document store

In this database, data are stored in the form of self-describing documents like JSON (JavaScript Object Notation), XML (Extended Markup Language), and BSON. Each document can be a complex data structure that can or cannot have any pre-defined schema. If certain fields are popular, they can be indexed to provide fast retrieval without knowing the key. In this type of database, it is possible to query the document using a single or set of fields. It is also possible to update the portion of the field at once for the documents. Example: MongoDB, RavenDB, CouchDB.

![Relational vs Document database](https://www.nitendratech.com/wp-content/uploads/2019/04/relational_vs_doc1.png)

Figure: [Document Store Database](https://developer.couchbase.com/documentation/server/3.x/developer/dev-guide-3.0/compare-docs-vs-relational.html)

### Wide-Column family store

In this wide column database, data are stored in a table with rows and columns but with the possibility of having different column names and formats in different rows. Multiple column families can be grouped and stored together using single row keys. We can pull individual columns using this database in a single operation, as it is a columnar database. It aggregates the data based on the key Value. Based on the key values, it can be distributed across the clusters. For Example, Cassandra and Apache HBase.

![Column Family Store database](https://www.nitendratech.com/wp-content/uploads/2019/04/column-family-store-building-blocks.png)

Figure: [Column Family Building Blocks](https://neo4j.com/blog/aggregate-stores-tour/)

### Graph stores

A Graph store or Graph-oriented database is a NoSQL database that uses the graph structure and theory to store, map and query the relationship between them. It is based on the Node and Arch Graph Structure. In this database, adjacent elements are linked together without using an index. For Example Neo4J

![NoSQL Database Pattern](https://www.nitendratech.com/wp-content/uploads/2019/04/database-types.jpg)

Figure: [NoSQL Database Patterns](https://www.slideshare.net/Dataversity/nosql-now-webinar-series-migrating-security-policies-from-sql-to-nosql-28817859)

### Reference:

[1] [Introduction to Redis a NoSQL database](http://www.slideshare.net/AbhijeetShekhar1/introduction-of-redis-as-nosql-database)

[2] [NoSQL vs SQL Database](http://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/)

[3] [NoSQL Database](http://basho.com/resources/nosql-databases/)

[4] [Cap Theorem](https://en.wikipedia.org/wiki/CAP_theorem)

---

*Originally published on nitendratech.com on 2020-10-10, updated 2022-06-05.*
