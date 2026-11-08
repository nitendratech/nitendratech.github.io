---
title: "Accessing Hive in HDP3 using Apache Spark"
description: "How to access Hive tables in HDP 3 from Apache Spark using the Hive Warehouse Connector (HWC), with Scala and PySpark shell launch examples."
pubDate: 2019-07-15
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

If you are switching from Hortwonwork Data Platform(HDP) 2.6 To 3.0+, you will have a hard time accessing [Hive](https://www.nitendratech.com/hive/hive-query-language/) Tables through the [Apache Spark](https://www.nitendratech.com/spark/apache-spark/) shell. HDP 3 introduced something called Hive Warehouse Connector (HWC) which is a Spark library/plugin that is launched with the Spark application. You need to understand how to use HWC to access Spark tables from Hive in HDP 3.0 and later. You can also export tables to Hive from Spark and vice versa using this connector.

In HDP 3.0 and later, Spark and Hive use independent catalogs for accessing SparkSQL or Hive tables on the same or different platforms. Both Spark and Hive have a different catalog in HDP 3.0 and later. A table created by Spark resides in the Spark catalog, whereas the table created by Hive resides in the Hive catalog. When we create a database in the new platform, it will fall under the catalog namespace, which is similar to how tables belong to the database namespace. These tables are interoperable when we use the Hive warehouse connector.

## Hive Warehouse Connector Operations

You can use the Hive Warehouse Connector (HWC) API to access any type of table in the Hive catalog from Spark. When you use SparkSQL, standard Spark APIs access tables in the Spark catalog.

![Hive HWC](/images/hive-hwc.png)

We can read and write Apache Spark Data Frames and Streaming Data frames to and from Apache Hive using this Hive warehouse connector. It supports the following applications.

- Spark shell
- PySpark
- spark-submit script

The spark thrift server is not supported.

## Operations Supported by the Hive Warehouse Connector.

Below are some operations supported by the Hive Warehouse connection.

- Describing a Table
- Creating a table for [ORC-formatted](https://www.nitendratech.com/bigdata/columnar-data-storage/) data
- Selecting Hive data and retrieving a Data Frame
- Writing a Data Frame to Hive in Batch
- Executing a Hive update statement
- Reading table data from Hive, transforming it in Spark, and writing it to a new Hive table
- Writing a DataFrame or Spark stream to Hive using Hive Streaming

## Launching Spark Shell with HWC for Scala

1. Locate the hive-warehouse-connector-assembly jar in `/usr/hdp/current/hive_warehouse_connector/`.
2. Add the connector jar to the app submission using `--jars`.

```bash
/usr/hdp/current/spark2-client/bin/spark-shell --conf spark.sql.hive.hiveserver2.jdbc.url="jdbc:hive2://sandbox-hdp.hortonworks.com:2181/;serviceDiscoveryMode=zooKeeper;zooKeeperNamespace=hiveserver2" spark.hadoop.hive.zookeeper.quorum="sandbox-hdp.hortonworks.com:2181" --jars /usr/hdp/current/hive_warehouse_connector/hive-warehouse-connector-assembly-1.0.0.3.0.1.0-187.jar
scala>
```

Replace the `sandbox-hdp.hortonworks.com` with the IP Address of your cluster.

3. Use the Hive Warehouse API to access to Apache Hive Database and tables

```scala
scala> import com.hortonworks.hwc.HiveWarehouseSession
import com.hortonworks.hwc.HiveWarehouseSession

scala> import com.hortonworks.hwc.HiveWarehouseSession._
import com.hortonworks.hwc.HiveWarehouseSession._

scala> val hive = HiveWarehouseSession.session(spark).build()
hive: com.hortonworks.spark.sql.hive.llap.HiveWarehouseSessionImpl = com.hortonworks.spark.sql.hive.llap.HiveWarehouseSessionImpl@1bfafce1

//Select Hive Database
scala>hive.setDatabase("foodmart")

//Show tables
scala>hive.showTables()
```

## Launching Spark Shell with HWC for PySpark

1. Locate the hive-warehouse-connector-assembly jar in `/usr/hdp/current/hive_warehouse_connector/`.
2. Add the connector jar to the app submission using `--jars`.

```bash
pyspark --jars /usr/hdp/current/hive_warehouse_connector/hive-warehouse-connector-assembly-1.0.0.3.0.1.0-187.jar \
--py-files /usr/hdp/current/hive_warehouse_connector/pyspark_hwc-1.0.0.3.0.1.0-187.zip
```

Replace the " sandbox-hdp.hortonworks.com " with the IP Address of your cluster.

3. Use the Hive Warehouse API to access to Apache Hive Database and tables

```python
from pyspark_llap import HiveWarehouseSession
hive = HiveWarehouseSession.session(spark).build()

//Select Hive Database
hive.setDatabase("foodmart")

//Show tables
hive.showTables()
```

Since this is an early phase of this connector, you can experience many issues while using different features of this API.

## Reference

[Hive WarehouseSession API Operations](https://docs.hortonworks.com/HDPDocuments/HDP3/HDP-3.1.0/integrating-hive/content/hive_hivewarehousesession_api_operations.html)

[Integrating Hive With Apache Spark](https://community.hortonworks.com/content/kbentry/223626/integrating-apache-hive-with-apache-spark-hive-war.html)

---

*Originally published on nitendratech.com on 2019-07-15, updated 2024-08-03.*
