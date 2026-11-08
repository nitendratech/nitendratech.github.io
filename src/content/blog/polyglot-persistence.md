---
title: "What is Polyglot Persistence?"
description: "Polyglot persistence means using multiple database technologies for the different requirements of an application instead of using an RDBMS as the default choice for everything."
pubDate: 2020-12-13
category: "Data Engineering"
subcategory: "Databases"
---

Polyglot persistence is a concept in which multiple persistent technologies are considered for different requirements of an application instead of using RDBMS as a default choice.

In 2006, Neal Ford coined a term called "Polyglot Programming" which means that computer applications should be written in a mix of programming languages to take advantage of the features they provide. As complex applications involve different types of problems, picking the right programming language would help to solve the right issues. Using the same analogy, we can say that multiple databases can be used as persistent storage for different types of use cases.

In general, the Information Technology department wanted to avoid polyglot persistence in organizations and would rather use RDBMS (Relational Database Management System) as the default choice for many applications. As most organizations have a standardized RDBMS system, they don't want to move to other databases. This had several benefits like savings on license fees, training costs, and management costs.

The rise of open-source databases and NoSQL (Not Structured Query Language) data stores such as Apache HBase, Cassandra, and MongoDB has changed the views of many organizations. These modern databases provide benefits such as faster processing speeds, and lower costs, making them more attractive for many organizations.

## What is the need for Polyglot persistence?

It is needed to solve a complex problem by breaking it down into small problems and using various databases in the process. A complex enterprise application comprises different kinds of data that can be obtained in a batch or stream fashion from different sources or Line of Business. These data can range from text, binary, blob, transactional, financial, XML, JSON, audio, and Video. Thus, these various data do not need to be stored in the same data type.

Let's take the example of e-commerce companies like amazon.com, eBay, Best Buy, and Alibaba.com. These large e-commerce websites have more than a billion users who visit their sites daily. They can generate a variety of data on their websites. Some of the data which can be generated on the websites are given below.

- **Financial/Payment Transactional Data:** These data can be stored in a relational database (RDBMS)
- **Product Catalog Data:** This data can be stored in a document-based NoSQL database.
- **Shopping Cart Session Data:** These are Key/value-based databases that can be stored in a NoSQL database.
- **User Activity Data:** This data can be stored in Columnar NoSQL databases like Apache Cassandra
- **User Session Data:** These user session data can be stored in an in-memory cache database like Redis.
- **Recommendation Data:** These recommendation data can be stored in a graph-based database such as Neo4j.

![polyglot_persistence](/images/polyglot_persistence-1.png)

---

*Originally published on nitendratech.com on 2020-12-13, updated 2022-06-05.*
