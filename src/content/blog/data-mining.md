---
title: "What is Data Mining?"
description: "What data mining is, how it fits into the Knowledge Discovery in Databases (KDD) process and its seven steps, plus data mining applications, functionalities, and the data types it can be applied to."
pubDate: 2018-08-23
category: "AI & ML Platforms"
subcategory: "Data Mining"
draft: false
---

Data mining is defined as a process that helps discover patterns in data sets by using various methods from machine learning, statistics, and database systems. It can also be defined as an interdisciplinary subfield of computer science whose main goal is to extract information from a data set using an intelligent method and transform the information into a consolidated structure for later use. Many people treat data mining as the synonym for the Knowledge Discovery in Databases(KDD) process, while others view data mining as the analysis step of the KDD.

## Knowledge Discovery in Databases(KDD)

KDD is the multistep process of searching for knowledge in a large volume of data that is hidden when searched through common techniques. Before applying this process, one needs to be technically capable of generating and storing the data. The raw version of collected data is simply a collection of elements and can only provide very little knowledge. The value of this data is significantly improved when we use knowledge discovery techniques.

Many available methods can assist in extracting patterns and can provide valuable, possibly previously unknown, insight into the stored data. Information obtained from the data can be predictive or descriptive.

A variety of methods are available to assist in extracting patterns that when interpreted provide valuable, possibly previously unknown, insight into stored data. This information can be predictive or descriptive. Data mining, the pattern extraction phase of KDD, can take on many forms, the choice dependent on the desired results. KDD is a multistep process that facilitates the conversion of data to useful information.

## Sequence Of KDD

KDD process has an iterative sequence of the below steps:

1. **Data Cleaning**:

   It removes the noise and inconsistent data from inconsistent data.

2. **Data Integration**:

   In the data integration step, multiple data sources are combined. In many tech companies, data cleaning, and data integration is done as a preprocessing step, after which the resulting data is stored in a data warehouse.

3. **Data Selection**:

   In this step, relevant data that are needed for analysis are retrieved from the database or any other sources.

4. **Data Transformation**:

   Data is transformed and consolidated into different formats which can be used for the data mining steps. Many companies use the Hive or other ETL (Extract Transform and Load) based process to transform and consolidate the data before the data selection process.

5. **Data Mining**:

   Various Intelligent methods are applied to extract data patterns from the data.

6. **Pattern Evaluation**:

   Interesting patterns representing Knowledge are identified.

7. **Knowledge** Presentation:

   Visualization and Knowledge representation techniques are used to present mined knowledge to Users.

![KDD Process](/images/kdd-process.png)

Figure: KDD Process

## Application of Data Mining

Data mining has a wide and diverse range of uses in different areas.

- Fraud Detection in Finance and Banking Sector (Credit Cards)
- Financial Forecasting
- Analyze Geospatial/Satellite Imagery
- Addressable/Data-Driven/Targeted Marketing
- Weather Forecasting
- Predict Television Audience viewership
- Gene Sequencing

## Functionalities of Data Mining

Functionalities in data mining are used to specify the kinds of Patterns or Knowledge that can be found in data mining tasks.

Some functionalities are mentioned below.

- Characterization and discrimination
- Mining of frequent patterns
- Associations
- Correlations
- Classification
- Regression
- outlier detection

## Data Types Used in Data Mining

Data mining can be applied to a variety of data as needed by the target application. It can be categorized into structured/traditional and unstructured data types.

Structured data includes data from databases, data warehouses, and transactional data.

Unstructured data can include some of the below data types.

- Time Series Data
- Sequence/Binary Data
- Data Streams
- Spatial, Spatio-temporal and Geospatial data sets
- Text and Media data sets
- Graph data
- Data from Networks
- Web Data (Clickstream Logs)

## Conclusion

We learned about data mining and knowledge Discovery in Databases(KDD). We also learned about the application, functionality, and data type used in Data Mining

Please share this blog post on social media and leave a comment with any questions or suggestions.

### References

[Data Mining Concepts and Techniques 3rd-Edition](https://www.amazon.com/Data-Mining-Concepts-Techniques-Management/dp/0123814790)

[Data Mining](https://en.wikipedia.org/wiki/Data_mining)

[What is Data Mining Knowledge discovery in Databases](https://danrodgar.github.io/DASE/what-is-data-mining-knowledge-discovery-in-databases-kdd.html#data-mining-with-r)

---

*Originally published on nitendratech.com on 2018-08-23, updated 2024-02-18.*
