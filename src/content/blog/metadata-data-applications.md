---
title: "What is Metadata and why it’s important?"
description: "Metadata explained — data about data: what it is, why it matters, and how it supports easier data interaction, information discovery and lineage, data governance, and data management."
pubDate: 2022-06-17
category: "Data Engineering"
subcategory: "Databases"
---

## What exactly is Metadata?

Metadata is the information that describes other data, or, simply speaking, it is data about the data. It is the descriptive, administrative, and structural data that defines a firm’s data assets. It specifically identifies the attributes, properties, and tags that will describe and classify information. Once the metadata is properly defined, it provides value to the data content along with providing a tool for quickly locating information. It can streamline and enhance the process of collecting, integrating, and analyzing data sources.

Metadata provides the map and linkage between source and target systems. It is the semantic fabric that ties all our systems and users together. It provides the framework to enable effective policy development, clear access channels, consistent data definitions, usage and security protocols, and lineage pathways. Likewise, it also allows data users in all capacities and positions to work within a shared linguistic system.

## Importance of Metadata

Metadata summarizes the basic information about data, which can make obtaining particular instances of data easier. It includes the detailed, structural, and administrative attributes of business data.

According to Forrester, metadata is important because it is the foundation for many efforts, including the below items.

- **Easier interaction with the data**

  It allows users to interact with the data through the higher-level logical abstraction of a table, rather than as a mere collection of files on file-based storage systems like [HDFS (Hadoop Distributed File System)](/blog/hadoop-hdfs/) or AWS S3, or Azure platform. This table can be a Non-Relational database like HBase or a relational database like Oracle. In order to discover or interact with data visually, users don’t need to be concerned about where or how the data is stored.

- **Supplies Information About Data**

  It supplies information about data stored in the cluster (partitioning, sorting properties) that can be leveraged by various tools within the company while querying and populating the data.

- **Information Discovery and Tracing Lineage**

  We can connect metadata to different data management tools and discover what data is available and how it can be used. We can also trace the lineage of the data (find out where and when the data set originated). As business strategic decisions become more data-driven, it becomes more critical to find and effectively employ the data that a business has about a customer, market, or product. It assists this through consistent definitions of data, such as customer address; the association of “related” information, such as all interactions with that customer; and the configuration of views into this data, for BI (Business Intelligence) applications.

- **Data Governance**

  Data-driven business decisions require that a business executive knows he can trust the information; that it’s accurate, timely, and means what he thinks it means. Trust requires a consistent level of quality in an environment of change. Metadata describes the lineage of information, where it comes from, and the quality attributes of information. For example, a shipping address must contain a postcode correctly formatted for the country of the address. As part of the data governance process, different information such as record count, source-to-target mapping record count, null values count, and duplicate counts can be stored in metadata.

- **Data Management**

  Metadata is the backbone for administering and enforcing business policies, such as privacy and security. Similarly, metadata assists with managing the costs of information storage by allowing you to isolate, retain, and delete information according to policy.

## Conclusion

In this blog post, we learned about what metadata is and its importance.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2022-06-17, updated 2023-06-25.*
