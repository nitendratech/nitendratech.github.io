---
title: "What is the Best Way to Secure a Big Data cluster?"
description: "How to secure a big data (Hadoop) cluster — authentication, authorization, access control, data masking and encryption, network and system security, auditing, and disaster recovery."
pubDate: 2018-08-26
category: "Data Engineering"
subcategory: "Big Data Security"
draft: false
---

Big data refers to datasets whose size, volume, and structure are beyond the ability of traditional software tools and database systems to store, process, and analyze within reasonable timeframes. The influx of big data and the need to move this information throughout an organization has created a massive new target for hackers and other cybercriminals. This data, which previously was unusable by various organizations is now highly valuable and is subject to privacy laws and compliance regulations, and must always be protected. [Big data](https://www.nitendratech.com/bigdata/big-data/) security is a term used for the different tools and techniques used to protect data and any backend processes from outside attacks and thefts.

[Hadoop](https://www.nitendratech.com/hadoop/hadoop-mapreduce-framework/) and similar [NoSQL](https://www.nitendratech.com/database/nosql-databases/)(Not only SQL) data stores are used in many organizations of large and small sizes to collect, manage, and analyze large data sets. They were not designed with comprehensive security in mind even though, these tools are popular among large and small organizations. In this blog post, we will learn about the best ways to secure a Big Data Cluster and implement it optimally.

## Data Security in Hadoop Framework

In a Hadoop-based ecosystem, there are mainly two ways to process and ingest data; push or pull-based architecture. Hadoop framework can be used to handle these data for different use cases. However, managing petabytes of data in a single centralized cluster can be dangerous as data is the most valuable asset of a company. Hadoop uses a distributed file system called [Hadoop Distributed File System(HDFS)](https://www.nitendratech.com/hadoop/hadoop-hdfs/) to store petabytes of data.

Hadoop security is about securing the below items.

- Source data is moved from the enterprise systems to the Hadoop ecosystems.
- Business insights and intelligence developed from those data.

Any such insights in the hands of the competitor, individual hacker, or any unauthorized personnel could be disastrous as they could steal personal or corporate data and use it for unlawful purposes. That's why all these data must be fully secured

Sensitive data stored in Hadoop or any big data frameworks are subject to privacy standards such as HIPAA (Health Insurance Portability and Accountability Act), HITECH (Health Information Technology for Economic and Clinical Health Act), etc, and security regulations and audits. In addition to bringing benefits to the enterprise, the Hadoop framework is also introducing new dimensions to the cyber-attack landscape. In a time when attackers are constantly looking for which system to target, Hadoop has become a starting point as all data are stored on top of HDFS.

Data security strategy is one of the most widely discussed topics among executives, business stakeholders, data scientists, and developers when working with data-based solutions at the enterprise level.

## Reasons for Securing Big Data Cluster

Among the many reasons for securing the Big data cluster, below are some of the important ones.

- **Contains Sensitive Data**

Sensitive data like Credit card information, SSN(Social Security Number), Financial Records, and other corporate needs to be protected all the time.

- **Data is Subject to Regulatory Compliance**

Certain Countries/Regions like the USA/EU have different data protection policies like HIPAA, FISMA, and GDPR to protect sensitive data. This compliance differs based on the data types and the region in which a company is conducting the Business.

- **Secured data can Enable one's Business**

By securing sensitive data, companies can allow different workloads on sensitive datasets.

## Key Security Considerations in Hadoop

A complex and holistic approach is needed for data security in the entire Big Data Hadoop ecosystem. Below are some of the key considerations while designing security features for the Apache Hadoop Big Data Ecosystem.

### 1. Authentication

A single point of authentication is needed for enterprise identity and access management systems. It is about verifying the identity of the user or service so that only legitimate users get access to the data and services of the Hadoop cluster. In large organizations, Hadoop is integrated with existing authentication systems like those given below.

- **Active Directory(AD)**: The use of an Active Directory has many advantages on the part of the organization and the users. From the organization's perspective, Re-usage of existing services reduces maintenance efforts and costs. From the user perspective use of a Single Sign-On service is important to simplify access and to increase security in the cluster as password hashes do not get repeatedly transmitted over the wire.
- **Use of Kerberos and LDAP:** Kerberos provides Single Sign-On(SSO) via a ticket-based authentication mechanism. The Simple and Protected GSSAPI Negotiation Mechanism (**SPNEGO**) protocol, which is supported by all major browsers, extends Kerberos authentication to web applications and portals.
- **SAML(Security Assertion Markup Language)**
- **OAuth (Open Authorization)**
- **HTTP Authentication**: REST API-based authentication is mainly used for JDBC connection

### 2. Authorization

A role-based authorization with fine-grained access control needs to be set up to provide access to sensitive data.

### 3. Access control

Access to the data needs to be controlled based on the availability of the processing capacity in the cluster.

### 4. Data Masking and Encryption

The enterprise must deploy proper encryption and masking techniques on the data so that secure access to sensitive data is available for authorized personnel only.

### 5. Network perimeter security

Core Hadoop does not provide any native safeguard against network-based attacks like denial of service attacks, Denial of Service (DoS), or Distributed Denial of Service (DDoS) attacks which can. This attack floods a cluster with extra jobs or runs jobs that consume a high amount of resources.

To protect a Big data cluster from network-based attacks, an organization needs to :

- Perform packet-level encryption and protect the client to cluster data with TLS(Transport Layer Security).
- Protect communication traffic within-cluster by enabling encrypted shuffle and TLS/HTTPS for HDFS, MapReduce, YARN, HBase UI(User interface), etc.
- Protect Traffic in Cluster between Mapper and Reducer Jobs

### 6. System Security

System-level security is achieved by hardening the OS(Operating System) and the applications that are installed as part of the ecosystem.

**Infrastructure Security -SELinux:** Data centers should have a strict infrastructure and physical access security.

Security-Enhanced Linux (SELinux) is a Linux kernel security module that provides a mechanism for supporting access control policies such as MAC (Mandatory Access Control). It was developed by NSA (National Security Agency) and adopted by the upstream Linux Kernel. It prevents command injection attacks such as having a lib file with executable permission(x) but not write permissions(w). This policy prevents another user or process from accessing one's home directory, even if that user changes any settings on their home directory. This policy helps to label files, grant permissions to them, and enforce MAC.

### 7. Audits /Event Monitoring and Data Governance

Enterprises should have a proper audit trail indicating any changes to the data ecosystem and also provide audit reports for any data access and data processing that occurs within the ecosystem.

As part of following government regulations, companies are often required to keep an audit trail of log-related cluster access and cluster configuration changes. Most of the Hadoop distributions like Cloudera, Mapr, and Hortonworks offer audit capabilities to ensure that platform administrators and users' activities can be logged.

Logging for audits should include at least the below items.

- Change of File & Folders in the filesystem
- Modification of Database structures
- Reconfigurations of the cluster
- Application exceptions
- Login attempts to services.

Good auditing practice in an organization allows one to identify sources of data and application & data errors as well as recognize security events. Most of the big data platform components allow for one or another form of logging, either to the local file system or HDFS. The main challenge in the big data world for auditing is the distributed nature of big data components and the tight integration of distinct components with each other.

Good practice of auditing on the Hadoop framework lets organizations capture metadata for data lineage, database changes, and security events. Some of the common tools for auditing are the Cloudera Navigator Audit Server and Apache Atlas (Hortonworks). By using this, organizations can capture events from the filesystem, database, and authorization components automatically and display these data through the User Interface.

### 8. Disaster Recovery and Backup

Disaster Recovery (DR) enables business continuity for significant data center failures beyond what high availability features of Hadoop components can cover.

It is supported by various computer systems in three ways.

- Backup of data refers to cold storage of data that won't be used all the time.
- Replication

Replication aims to provide a close resemblance to the production system by replicating data at a scheduled interval. It can also be used within the cluster to increase availability and reduce single points of failure.

- Mirrors A mirror is usually an exact copy of the production system with virtually no delay and is set up as a failover instance of the production system.

## Best Techniques for Encrypting Big Data

External or external leakage of data is a crucial business concern in any organization. It is a challenging task for any organization to secure sensitive and critical business data and personally identifiable in a [Big Data](https://www.nitendratech.com/bigdata/big-data/) cluster as data is stored across various formats after passing through different data pipelines.

### Types of Encryption Techniques

There are two types of encryption techniques for securing data.

- **Data in-transit Encryption**
- **Data-at-Rest Encryption**

Implementing these techniques can be challenging as much information is not file-based, but rather handled through a complex chain of message queues and message brokers. Sometimes applications in Hadoop may use local temporary files that can contain sensitive information that must be secured. The plain version of Hadoop provides encryption for data that are stored in HDFS(Hadoop Distributed File System). However, it does not have any comprehensive cryptographic key management solution or any Hardware Security Module(HSM) integration.

To support data at rest encryption, Hadoop distribution from Cloudera provides a tool named Cloudera Navigator Encrypt and Key Trustee Server whereas Hortonworks provides Ranger Key Management Service. MapR uses format-preserving encryption and masking techniques, maintaining the data format without replacing it with cryptic text supporting faster analytical processing between applications.

### Ways of protection of Data-at-rest

There are three ways in which Data at rest can be protected Cryptographically.

- **Application Level**

It integrates with the current application by securing the data during ingestion by using an external key manager with cryptic keys in HSM to encrypt and decrypt the data.

- **Hadoop Distributed File System(HDFS) Level**

It is transparent encryption in which content is encrypted while writing and reading the data. It protects against file-system & OS-level attacks.

- **Disk Level**

It is transparent encryption which is at a layer between the application & file system. It provides process-based access control which can secure metadata logs and config files.

## Conclusion

In this blog post, we learned about different Ways to Secure a Big Data cluster and why we need to secure the big data clusters We also learned about the different key considerations in Hadoop.

Do you know any other ways to secure the Big Data Cluster?

Please share this blog post on social media and leave a comment with any questions or suggestions.

## Reference

[Securing Hadoop](https://www.amazon.com/Securing-Hadoop-Sudheesh-Narayanan/dp/1783285257)

---

*Originally published on nitendratech.com on 2018-08-26, updated 2024-02-18.*
