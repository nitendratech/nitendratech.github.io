---
title: "Introduction to Apache Spark SQL"
description: "An introduction to Apache Spark SQL — what it is, how to interact with it using SQL and the Dataset API, creating DataFrames with SparkSession, extracting data, and saving DataFrames to persistent tables using the different SaveModes."
pubDate: 2017-10-10
category: "Data Engineering"
subcategory: "Spark SQL"
draft: false
---

Spark SQL previously known as Shark (SQL on Spark)is an [Apache Spark](/blog/apache-spark/) module for structured data processing. It provides a higher-level abstraction than the Spark core API for processing structured data. Structured data includes data stored in a database, NoSQL data store, Parquet, ORC, Avro, JSON, CSV, or any other structured format.

Internally, Spark SQL uses this extra information to perform extra optimizations. Several ways exist to interact with Spark SQL, including SQL and the Dataset API. When computing a result, the same execution engine is used, independent of which API/language you are using to express the computation. This unification means that developers can easily switch back and forth between different APIs, which provides the most natural way to express a given transformation.

## Spark SQL Uses

Spark SQL can be used as a library for developing data processing applications in Scala, Java, Python, or R. It supports multiple query languages, including SQL, HiveQL, and language-integrated queries. In addition, it can be used for interactive analytics with just SQL/HiveQL. In both cases, it internally uses the Spark core API to execute queries on a Spark cluster. The core of the component supports an altogether different RDD called SchemaRDD, composed of row objects and schema objects defining the data type of each column in the row. It is similar to a table in a relational database.

One use case of Spark SQL is to execute SQL queries. Spark SQL can also read data from an existing Hive installation. When running SQL from within another programming language, the results will be returned as a Dataset/DataFrame. You can also interact with the SQL interface using the command line or over JDBC/ODBC.

## Interaction with Spark SQL

Several ways exist to interact with Spark SQL, including SQL and the Dataset API.

- **Hive table:** However, since Hive has many dependencies, these dependencies are not included in the default Spark distribution. If Hive dependencies can be found on the classpath, Spark will load them automatically. Note that these hive dependencies must also be present on all the worker nodes, as they will need access to the Hive serialization and deserialization libraries (SerDes) to access data stored in the hive.
- **Spark Session:** A unified entry point for manipulating data with Spark using Dataset and DataFrame API. Beyond a time-bounded interaction, SparkSession provides a single point of entry to interact with underlying Spark functionality and allows programming Spark with DataFrame and Dataset APIs.

## Create Data Frame using Spark Session

In `Spark 2.0.0` or greater, we can create a SparkSession object instead of a SparkContext when using Spark SQL /DataSets. We use `SparkContext` this `SparkSession` and use it to issue SQL queries on the Data Sets.

The entry point to all the functionality in Spark SQL is through the Spark session class.

Let's say we have a JSON file named file.json with the following content. We would like to use Spark SQL to read the content of this JSON file using Scala.

```json
{"name":"Nitendra"}
{"name":"nitendratech", "age":3}
{"name":"Justin", "age":23}
```

```scala
import org.apache.spark.sql.SparkSession
// Get Spark session
val sparkSession = SparkSession
   .builder()
   .appName("Spark SQL Session")
   .config("spark.config.option","config-value")
   .getOrCreate()

   // For Implicit Conversion from RDDs to Data Frames

   import spark.implicits._
//Create Data Frames from reading Json file
val df = sparkSession.read.json("file.json")
//Display the Content
df.show()
//  temp view called PEOPLE will be queried using Spark SQL
df.createOrReplaceTempView("PEOPLE")
```

### Extract Data from Spark SQL

```scala
val peopleDataFrame = sparkSession.sql("SELECT * FROM PEOPLE")
peopleDataFrame.show()  //Display the Data Frame
```

### Saving Data to Persistent Tables in Spark SQL

Data Frames can also be saved as persistent tables into Hive metastore using the `saveAsTable` command. Unlike the `createOrReplaceTempView` command, `saveAsTable` will materialize the contents of the DataFrame and create a pointer to the data in the Hive metastore. Persistent tables will still exist even after your Spark program has been restarted, as long as you maintain your connection to the same metastore. A DataFrame for a persistent table can be created by calling the table method on a Spark Session with the name of the table.

If the data source is based upon a file-based like text, parquet, JSON, CSV, etc., we can specify a custom table path For file-based data source, e.g. text, parquet, JSON, etc. you can specify a custom table path via the path option, e.g. `df.write.option("path", "/some/path").saveAsTable("t")`. When the table is dropped, the custom table path will not be removed and the table data is still there.

If no custom table path is specified, Spark will write data to a default table path under the warehouse directory. When the table is dropped, the default table path will be removed too.

## Spark SQL Saving Modes

When Apache Spark SQL is used to perform some aggregations, the aggregated Data Frame needs to be saved temporarily or permanently. Save operations in [Apache Spark](/blog/apache-spark/) tell us how to handle existing data in DataFrame. These save modes do not utilize any locking and are not atomic.

Below are some modes through which we can save Data Frame in Spark to a data source.

| Scala/Java | Any Language | Description |
| --- | --- | --- |
| `SaveMode.ErrorIfExists` (default) | "error" or "errorifexists" (default) | If data already exists, an exception is expected to be thrown. |
| `SaveMode.Append` | "append" | If data/table already exists, the contents of the Data Frame are expected to be appended to existing data. |
| `SaveMode.Overwrite` | "overwrite" | If data/table already exists, existing data is expected to be overwritten by the contents of the Data Frame. |
| `SaveMode.Ignore` | "ignore" | If data already exists, the save operation is expected to not save the contents of the Data Frame and not change the existing data. This is similar to a `CREATE TABLE IF NOT EXISTS in SQL`. |

### Saving to Persistent Tables

We can save `DataFrames` as persistent tables into the hive metastore using the `saveAsTable` command. This `saveAsTable` command will materialize the contents of the Data Frame and create a pointer to the data in the Hive metastore, unlike the `createOrReplaceTempView` command. These persistent tables will still exist even after the Spark program has been restarted, as long as we maintain the connection to the same metastore.

### References

[1] [Spark Documentation](https://spark.apache.org/docs/latest/index.html)

---

*Originally published on nitendratech.com on 2017-10-10, updated 2024-01-17.*
