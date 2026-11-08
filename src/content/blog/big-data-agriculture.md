---
title: "Big Data Technology in Agriculture"
description: "How big data is used in agriculture — smart farming and precision agriculture, big data sources and analysis techniques by agricultural area, and the software tools used for agricultural big data analysis."
pubDate: 2021-05-25
category: "Data Engineering"
subcategory: "Big Data"
---

The technology used in agriculture has continued to grow since the early 20th century when the industry shifted from horse-drawn plows to mechanized tractors. Advancement in the field of genetics, chemical inputs, and, more recently, guidance systems has transformed the agricultural industry into a technology-intensive and data-rich field. The current area of agriculture is more technology-oriented than labor-oriented. As the size of farms has changed, farming concepts, techniques, risks associated with farming, and data size associated with farming have changed. This has led to an increase in data produced from different tools and machinery used on farms.

According to a report by the Global Harvest initiative, the human population will exceed 9 billion by 2050. It will lead to increased demand for food and fuel, even though the production rate remains the same. It means that producing and distributing food for this population will be the biggest challenge. That's why there has been wide research into the use of big data techniques in agricultural methods in both academia and commercial products.

## Smart Farming/Precision Agriculture

Modern-day agriculture is called Precision Agriculture, in which smart farming techniques are used to collect and analyze the data related to the fields. The aim of Precision Farming or Precision Agriculture is to increase productivity, decrease production costs, and minimize the environmental impact of farming. Smart farming is important as it helps to tackle the challenges of agricultural production in terms of productivity, environmental impact, food security, and sustainability.

## Why Big Data In Agriculture?

Within the last 20 years, the agricultural industry has increased its ability to generate, capture, and store this generated [data](/blog/data-explained/) through the use of mobile technology and data management software. The current state of agricultural practices is supported by biotechnology and emerging digital technologies such as remote sensing, [cloud computing](/blog/cloud-computing/), [Graphical Information System(GIS)](/blog/gis-geographical-information-system/), and the [Internet of Things (IoT)](/blog/internet-of-things/), leading to a notion of `Smart Farming` or `Precision Agriculture`.

The use of [Big data](/blog/big-data/) techniques in agriculture helps to store and process data related to crops, weather terrain, and geographic conditions. Farmers can use this technology to know the success of various crops in a diverse geographic area, and the predictive impact of natural conditions on the crops, which ultimately provides ways to increase productivity in these fields. Farmers can use this technology proactively to increase crop yield, find out seed and fertilization application rates, do soil analysis, and get weather reports. Using Big Data in the field of Agriculture also helps to process data related to crops, weather, terrain, and geographic conditions. [1,2]

## Big Data Sources & techniques for Analysis

The below table shows the different agricultural areas along with the source of data that is produced.

| Agricultural Area | Big Data Sources | Techniques |
| --- | --- | --- |
| **Weather and climate change** | Weather stations/Climate/Earth Observation/Surveys/Historical/Climate/ Remote sensing (satellites)/ Geospatial data | Machine learning (SVM, statistical analysis, modeling, cloud platforms, MapReduce, [GIS geospatial analysis](/blog/gis-geographical-information-system/). |
| **Land** | Remote sensing (satellites, synthetic aperture radar, airplanes), geospatial data, historical datasets (land characterization and crop phenology, rainfall and temperature, elevation, global tree cover maps), camera sensors (multispectral imaging), weather stations. | Machine learning (SVM, KMC, random forests, extremely randomized trees), NDVI vegetation indices, Wavelet-based filtering, image processing, statistical analysis, spectral matching techniques, reflectance and surface temperature calculations. |
| **Animal Research** | Historical information about soils and animals (physiological characteristics), ground sensors (grazing activity, feed intake, weight, heat, milk production of individual cows, sound), camera sensors (multispectral and optical). | Machine learning (decision trees, neural networks, SVM). |
| **Crops** | Ground sensors (metabolites), remote sensing (satellite), historical datasets (land use, national land information, statistical data on yields). | Machine learning (SVM, KMC), Wavelet-based filtering, Fourier transform, NDVI vegetation indices. |
| **Soil** | Ground sensors (salinity, electrical conductivity, moisture), cameras (optical), historical databases (e.g. AGRIC soils). | Machine learning (KMC, Farthest First clustering algorithm). |
| **Weeds** | Remote sensing (airplane, drones), historical information (digital library of images of plants and weeds, plant-specific data). | Machine learning (neural networks, logistic regression), image processing, NDVI vegetation indices. |
| **Food availability and security** | Surveys, historical information and databases (e.g. CIALCA, ENAR, rice crop growth datasets), GIS geospatial data, statistical data, remote sensing (synthetic aperture radar). | Machine learning (neural networks), statistical analysis, modeling, simulation, network-based analysis, GIS geospatial analysis, image processing. |
| **Biodiversity** | GIS geospatial data, historical information and databases (SER database of wildlife species. | Statistics (Bayesian belief networks). |
| **Farmers decision-making** | Static historical information and datasets (e.g. US government survey data), remote sensing (satellites, drones), weather stations, humans as sensors, web-based data, GIS geospatial data, feeds from social media. | Cloud platforms, web services, mobile applications, statistical analysis, modeling, simulation, benchmarking, big data storage, message-oriented middleware. |
| **Farmers' insurance and finance** | Web-based data, historical information, weather stations, and humans as sensors (crops, yields, financial transactions data). | Cloud platforms, web services, mobile applications. |
| **Remote sensing** | Remote sensing (satellite, airplane, drones), historical information and datasets (e.g. MODIS surface) reflectance datasets, earth land surface dataset of images, WMO weather datasets, reservoir heights derived from radar altimetry, web-based data, geospatial data (imaging, maps). | Cloud platforms, statistical analysis, GIS geospatial analysis, image processing, NDVI vegetation indices, decision support systems, big data storage, web and community portals, MapReduce analytics, mobile applications, computer vision, artificial intelligence. |

[2]

KMC = K-Means Clustering, SVM = Support Vector Machines

## Software tools used for Big data analysis in Agriculture

| Category | Software tools |
| --- | --- |
| **Image processing tools** | IM toolkit, VTK toolkit, OpenCV library |
| **Machine learning (ML) tools** | Google TensorFlow, R, Weka, Flavia, scikit-learn, SHOGUN, mlPy, Mlpack, Apache Mahout, Mllib, and Oryx |
| **Cloud-based and Big Data storage and analytic platforms** | Cloudera, Hortonworks, MapR based Hadoop Platform EMC Corporation, IBM InfoSphere BigInsights, IBM PureData system for analytics, Aster SQL MapReduce, Pivotal GemFire, Pivotal Greenplum, and Apache Pig, Apache Spark, Apache Storm |
| **GIS systems** | ArcGIS, Autodesk, MapInfo, MiraMon , GRASS GIS |
| **Big databases** | Apache Hive, Cassandra,Hbase HadoopDB, MongoDB, ElasticSearch, Google BigTable, Rasdaman, MonetDB/SciQL, PostGIS, Oracle GeoRaster, SciDB |
| **Messaging/Publish-Subscribe System** | MQTT, RabbitMQ ,Apache Kafka |
| **Modeling and simulation** | AgClimate, GLEAMS, LINTUL, MODAM, OpenATK |
| **Statistical tools** | Norsys Netica, R, Weka, Python ML Libraries |
| **Time-series analysis** | Stata, RATS, MatLab, BFAST |

[2]

## Conclusion

In this blog post, we learned about how big data is being used in Agriculture. We also learned about the various Big Data Sources & techniques for analyzing them. These techniques vary from open sources on-premise tools to cloud-based analytics tools.

Please share this blog post on social media and leave a comment with any questions or suggestions.

## References

(1) [Stubbs, Megan. "Big Data in US Agriculture." Congressional Research Service, January 6, 2016.](https://digital.library.unt.edu/ark:/67531/metadc824605/m1/1/)

(2) Kamilaris, A.; Kartakoullis, A.; Prenafeta-Boldú, F. A review on the practice of big data analysis in agriculture. Comput. Electron. Agric. Int. J. 2017, 143, 23–37. [CrossRef](https://doi.org/10.1016/j.compag.2017.09.037)

(3) [HLEF2050_Global_Agriculture](http://www.fao.org/fileadmin/templates/wsfs/docs/Issues_papers/HLEF2050_Global_Agriculture.pdf)

---

*Originally published on nitendratech.com on 2021-05-25, updated 2024-02-18.*
