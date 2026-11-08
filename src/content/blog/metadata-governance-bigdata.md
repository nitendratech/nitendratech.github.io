---
title: "Metadata Governance for Big Data Clusters"
description: "How metadata stewardship, data privacy compliance, and the core metadata management functions support data governance on big data clusters."
pubDate: 2019-04-16
category: "Data Engineering"
subcategory: "Data Governance"
draft: false
---

Managing metadata is an integral part of the overall data governance standard. An efficient way to do this is to establish data stewardship for [metadata](/blog/metadata-big-data-applications/). It will ensure that data will remain consistent throughout the enterprise and provide [big data](/blog/big-data/) analytics decisions with accuracy. It also provides the users of this data with value and a context for understanding the data and its components.

## Responsibilities of Metadata Stewards.

Below are some major responsibilities of metadata stewardship.

- Documenting the data heritage and lineage of the data content
- Defining and documenting the data definitions for datastore entities & attributes.
- Identification of the relationship between data
- Providing validation of data timeliness, accuracy, and completeness
- Assist in the development of data compliance, audits, and legal and regulatory controls for data governance

## Data Privacy Compliance

Companies need to adhere to some compliance requirements related to data privacy, which differ for different industries. The below tables show some data privacy-related compliance and its applicable industry/data type.

| Compliance | Applicable Data types |
| --- | --- |
| General Data Protection Regulation (GDPR) | The EU GDPR requires businesses to protect the personal data and privacy of EU citizens for transactions that occur within EU member states. |
| HIPAA (Health Insurance Portability and Accountability Act) | It is a standardized mechanism to ensure healthcare organizations (called "Covered Entities") protect the integrity, privacy, and confidentiality of individuals' health-related data. |
| FDA (Food & Drug Administration) | It requires drugmakers, medical device manufacturers, biotech companies, and other FDA-regulated industries to implement controls including audits, system validations, audit trails, electronic signatures, and documentation for software and systems involved in processing electronic data. |
| GLBA (The Gramm-Leach -Bliley Act) | It includes provisions to protect consumers' personal financial information held by companies broadly defined as "financial institutions." |
| EUDPD (EU Data Protection Directive) | It declares that data protection is a fundamental human right. It standardizes the protection of data privacy for EU citizens. |
| HITECH (Health Information Technology for Economic and Clinical Health Act) | It broadens the scope and increases the rigor of HIPAA compliance. |
| FINRA (Financial Industry Regulatory Authority) | Its member companies must maintain business continuity and contingency plans to satisfy obligations to clients in the event of an emergency or outage. |
| SEC (Securities and Exchange Commission) | These rules require broker-dealers to create and preserve, in an easily accessible manner, a comprehensive record of securities transactions they affect and of their business in general. It requires electronic storage to preserve records in a non-rewriteable and non-erasable format. Retention is required for a specific period. |
| FERPA (The Family Educational Rights and Privacy Act) | This law is designed to protect the privacy of student education records and applies to all schools that receive funds under programs of the US Department of Education. |

## Metadata Management Function

We need to study the below points to understand the key metadata management functions that are needed for data governance.

- **Inventory.**

It is the complete inventory of the data ecosystem. This includes both physical and logical representations of data assets, business or semantic information, services, APIs, etc.

- **Information Model.**

An information model representing the business vocabulary relevant to the business. The model provides the dictionary data assets are mapped to, providing a common understanding and clear translation between business and technical representation of data.

- **Classification.**

It is the process of associating data assets to the information model, which is mostly done manually today. But this process must be automated to achieve an enterprise-scale. This capability provides tremendous value by enabling data quality, and compliance, and improving time to market.

- **Data Quality / Data Usage Information.**

Using common rules enabled by classification, data assets are validated for completeness, correctness, and compliance. Automated data cleansing is enabled as a result of data quality processes. Provide information on what data is utilized for each operation (CRUD).

- **Governance.**

Data Governance provides the oversight of data assets, standards, and policies for the information model and classification and data quality processes. Stewardship and workflow. Just as a library's card catalog provides a directory of what books are on the shelves, in the data engineering space, Metadata provides the equivalent directory of what business information is created, inventoried, and available for application and business use.

## Reference

[https://www.datasciencecentral.com/profiles/blogs/why-you-need-metadata-for-big-data-success](https://www.datasciencecentral.com/profiles/blogs/why-you-need-metadata-for-big-data-success)

[what-is-metadata-and-why-is-it-critical-in-todays](https://dzone.com/articles/what-is-metadata-and-why-is-it-critical-in-todays)

---

*Originally published on nitendratech.com on 2019-04-16, updated 2023-12-17.*
