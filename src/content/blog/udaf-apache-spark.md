---
title: "User-Defined Aggregate Functions(UDAF) Using Apache Spark"
description: "How to implement a User-Defined Aggregate Function (UDAF) in Apache Spark with Scala — the methods to override, supported data types, and a food analytics example."
pubDate: 2019-05-31
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

UDAF stands for User Defined Aggregate Functions. When we work on Data engineering projects or need to analyze some data, there might come a time when we need to aggregate it. Aggregate functions are used to perform a calculation on a set of values and return a single value. It is difficult to write an aggregate function compared to writing a User Defined Function (UDF) as we need to aggregate on multiple rows and columns.

While working with Apache Spark, we might have to aggregate multiple column values. Apache Spark UDF or User Defined function does not support aggregating data on multiple columns. We can write our own UDAF for this kind of scenario.

Apache Spark UDAF operates on more than one row or column while returning a single value. In this blog post, I will introduce Spark UDAF with an example using the HDP3 sandbox environment.

## Implementation of UDAF

UDAF is normally used together with a group-by-clause where some analysis or aggregation is needed on a set of data. It is a convenient way to integrate advanced data-processing capabilities on top of Hive or any other data source.

A typical use case of UDAF would be a MapReduce problem where the aggregation is needed based on some key. But in Spark UDAF, you can use either a single column as a key or a combination of multiple columns as an input and perform aggregations. Values are aggregated in chunks using UDAF so that the implementation is capable of combining partial aggregations into a final result.

We can create the UDAF in Spark by extending the `UserDefinedAggregationFunction` class present in the package `org.apache.spark.sql.expressions`.

To write a custom UDAF, we need to extend the `UserDefinedAggregateFunction` class and override the following methods.

```scala
def inputSchema = new StructType().add("schema_name",DataType)
```

This method defines the schema of input data to the UDAF. Spark UDAF can operate on any number of columns.

```scala
def bufferSchema= new StructType().add("schema_name",DataType)
```

This method defines the schema of the UDAF buffer. It also holds the buffer data that are intermediate results while data is being aggregated by Spark.

```scala
def dataType: DataType = new StructType().add("schema_name",DataType)
```

This method defines the data type of the final result. Final results will be collected through the UDAF for each combination of Keys and returned.

```scala
def deterministic: Boolean = true
```

This method makes sure that every time this UDAF is executed for the same set of data, it gives the same results. Here deterministic just means that for the same input the function will return the same output.

```scala
def initialize(buffer: MutableAggregationBuffer) : Unit = {
}
```

This method is called once per node for a given group where we initialize our buffer variables. It updates the Buffer, A [[Row]] representing a mutable aggregation buffer. We can also implement any custom logic, validations, and input in this method.

```scala
def update(buffer: MutableAggregationBuffer, inputRow: Row): Unit ={}
```

This method is called the once-per-input record of a particular group of records. Logic defined in this group is applied to the input record which finally updates the aggregation buffer value.

```scala
def merge(buffer1: MutableAggregationBuffer, buffer2: Row): Unit ={}
```

This method is an optimization technique that is used to combine partial results and combine them. In our case, we need to add different values.

```scala
def evaluate(buffer: Row): Any ={}
```

This method is called to compute the final result when the spark completes all executions and only one buffer is left. It will return the final value of UDAF for a combination of Keys.

## Supported DataType in Spark UDAF

The supported datatype in Spark UDAF is given below

- BooleanType
- ByteType
- ShortType
- IntegerType
- LongType
- FloatType
- DoubleType
- DecimalType
- TimestampType
- DateType
- StringType
- BinaryType

## Food Analytics using Spark UDAF

We will take an example of [food items](https://raw.githubusercontent.com/nitendragautam/samp_data_sets/master/food_data/online_food_items.csv) in which we have:

- Different food products
- Food type,
- Food code,
- Ordered time
- Code of the online retailer or seller responsible for selling food items.

We are mainly interested in finding out the total amount of people paid for GMO and non-GMO products from the online retailer on a particular date.

We will take a unique combination of Product Id, Food code, and Order Date to aggregate the data. We will load the data from HDFS first and then select all the columns. You can get the full version of the code [here](https://github.com/nitendragautam/blog_tutorials/tree/master/applications/spark_applications).

```scala
val hdfsFilePath=args(0)

    val sparkSession = SparkSession.builder()
                         .appName("Food Analytics")
                         .getOrCreate()

    val foodItemsLoad =
                      sparkSession.read.option("header","true")
                        .csv(hdfsFilePath)
    foodItemsLoad.createOrReplaceTempView("foodItemsData")

val foodQuery =
      """
        |SELECT
        |productId,
        |foodType,
        |foodCode,
        |orderDate,
        |sellerCode,
        |cast(paidItem as int),
        |cast(unpaidItem as int)
        |from foodItemsData
        |ORDER BY productId,foodCode,orderDate
      """.stripMargin

    val foodFileDF = sparkSession.sql(foodQuery)
```

Once we select the data, we will pass the data to the UDAF object which will aggregate the data. Once data is aggregated, it is stored in the Data Frame and printed in the console. Instead of this, we can also store this aggregated data in a hive or HDFS table.

```scala
val aggDF =
              foodFileDF
              .repartition(3)// Repartition the Data if the size of data is big.
              .na.fill(0,Seq("paidItem","unPaidItem")) // We replace any Null Values with Zeroes
                .groupBy("productId","foodCode","orderDate") // Group By combination of Columns
                  .agg(FoodAnalyticsUDAF(col("foodType"),
                                  col("sellerCode"),col("paidItem"),
                                  col("unpaidItem"))
                  .as("food_agg_result")) // Get the Aggregated Results from Food Analytics
                  .select(
      col("productId"),
      col("foodCode"),
      col("orderDate"),
      col("food_agg_result.sellerCode").as("sellerCode"),
      col("food_agg_result.gmoIndicator").as("gmoIndicator"),
      col("food_agg_result.ngmoIndicator").as("ngmoIndicator"),
      col("food_agg_result.gmoPaidItem").as("gmoPaidItem"),
      col("food_agg_result.gmoUnpaidItem").as("gmoUnpaidItem"),
      col("food_agg_result.ngmoPaidItem").as("ngmoPaidItem"),
      col("food_agg_result.ngmoUnpaidItem").as("ngmoUnpaidItem")
    )
println("Printing Aggregated Food Data ")

  print(aggDF.show())
```

Here we define our aggregation logic using the FoodAnalyticsUDAF object which extends `UserDefinedAggregateFunction` class.

```scala
import org.apache.spark.sql.Row
import org.apache.spark.sql.expressions.{MutableAggregationBuffer,
                                        UserDefinedAggregateFunction}
import org.apache.spark.sql.types._

object FoodAnalyticsUDAF extends UserDefinedAggregateFunction with Serializable{

 def inputSchema = new StructType()
                   .add("foodType",StringType)
                   .add("sellerCode",StringType)
                   .add("paidItem",IntegerType)
                   .add("unpaidItem",IntegerType)

 def bufferSchema = new StructType()
              .add("seller_code",StringType)
             .add("gmo_paid_item",IntegerType)
             .add("gmo_unpaid_item" ,IntegerType)
             .add ("ngmo_paid_item",IntegerType)
            .add("ngmo_unpaid_item" ,IntegerType)

 def dataType: DataType = new StructType()
  .add("sellerCode",StringType)
  .add("gmoIndicator",StringType)
  .add("ngmoIndicator",StringType)
  .add("gmoPaidItem",IntegerType)
  .add("gmoUnpaidItem",IntegerType)
  .add("ngmoPaidItem",IntegerType)
  .add("ngmoUnpaidItem",IntegerType)

 def deterministic: Boolean = true

 def initialize(buffer: MutableAggregationBuffer) : Unit = {
  buffer(0) =""
  buffer(1) =0
  buffer(2) =0
  buffer(3) =0
  buffer(4) =0
 }

 def update(buffer: MutableAggregationBuffer, inputRow: Row): Unit ={
  if (buffer != null) {
   val foodType = inputRow.getString(0)

   buffer(0) = inputRow(1)
   foodType match {

    case "GMO" => {
     buffer(1) = buffer.getAs[Int](1)+inputRow.getInt(2)
     buffer(2) = buffer.getAs[Int](2) + inputRow.getInt(3)
    }
    case "NGMO" => {
     buffer(3) = buffer.getAs[Int](1)+inputRow.getInt(2)
     buffer(4) = buffer.getAs[Int](2) + inputRow.getInt(3)
    }
   }
  }
 }

 def merge(buffer1: MutableAggregationBuffer, buffer2: Row): Unit ={

  if(buffer1!=null && buffer2 != null){
   buffer1(0) = buffer2.getString(0)
   buffer1(1) = buffer1.getAs[Int](1) +buffer2.getInt(1)
   buffer1(2) = buffer1.getAs[Int](2) +buffer2.getInt(2)
   buffer1(3) = buffer1.getAs[Int](3) +buffer2.getInt(3)
   buffer1(4) = buffer1.getAs[Int](4) +buffer2.getInt(4)
  }
 }

 def evaluate(buffer: Row): Any ={
  var gmoIndicator:String =""
  var nonGmoIndicator: String =""
  if(buffer.getAs[Int](1)>0 || buffer.getAs[Int](2) >0) gmoIndicator ="Y" else gmoIndicator="N"
  if(buffer.getAs[Int](3)>0 || buffer.getAs[Int](4)>0) nonGmoIndicator="Y" else nonGmoIndicator="N"

  Row(buffer.getString(0),
    gmoIndicator,
    nonGmoIndicator,
    buffer.getAs[Int](1),
    buffer.getAs[Int](2),
    buffer.getAs[Int](3),
    buffer.getAs[Int](4))

 }
}
```

## Running the Food Analytics Application

**Step 1:** Clone the spark project and build the jar file using sbt command.

```bash
cd <base_project_location>
git clone https://gitlab.com/nitendragautam/spark_applications.git
```

**Step 2:** In the base folder location run the below sbt command that will generate the jar file for the spark applications

```bash
~$cd D:\gitlab_repo\spark_applications
~$ sbt clean package
Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=256m; support was removed in 8.0
[info] Compiling 2 Scala sources to D:\gitlab_repo\spark_applications\target\scala-2.11\classes...
[info] Packaging D:\gitlab_repo\spark_applications\target\scala-2.11\sparkprojects_2.11-1.0.jar ...
[info] Done packaging.
```

**Step 3:** Once the project is built, copy the Jar file to the spark server using Winscp or a similar tool and give proper permissions.

```bash
$ cd /home/maria_dev/spark
$ ls
sparkprojects_2.11-1.0.jar
$ chmod 754 sparkprojects_2.11-1.0.jar
$ pwd
/home/maria_dev/spark
```

**Step 4:** Get the food items to file from the Gitlab [repository](https://github.com/nitendragautam/samp_data_sets/blob/master/food_data/online_food_items.csv).

```bash
cd /home/maria_dev/spark
wget $https://gitlab.com/nitendragautam/samp_data_sets/raw/master/food_data/online_food_items.csv
```

**Step 5:** Copy the online food items file to HDFS and give proper permission

```bash
#Make Directoy in HDFS and copy the file
$hdfs dfs -mkdir -p /user/maria_dev/fooditems
$hdfs dfs -copyFromLocal online_food_items.csv /user/maria_dev/fooditems

$hdfs dfs -chmod  755 /user/maria_dev/fooditems
$ hdfs dfs -chmod -R 755 /user/maria_dev/fooditems
$ hdfs dfs -ls /user/maria_dev/fooditems
  /user/maria_dev/fooditems/online_food_items.csv
```

**Step 6:** Now run the Spark job by using the Spark Submit command in a script named [spark_submit_food_analytics.sh](https://github.com/nitendragautam/blog_tutorials/blob/master/scripts/spark_submit_food_analytics.sh)

```bash
#!/bin/bash

/usr/hdp/current/spark2-client/bin/spark-submit \
--class com.nitendratech.sparkudaf.FoodAnalytics \
--master local[4] \
--executor-memory 4G \
/home/maria_dev/spark/sparkprojects_2.11-1.0.jar \
/user/maria_dev/fooditems/online_food_items.csv
```

```bash
$ pwd
/home/maria_dev/spark
~$ ./spark_submit_food_analytics.sh
Starting the Food Analytics Job
Input HDFS Path: /user/maria_dev/fooditems/online_food_items.csv
Printing Aggregated Food Data
+---------+--------+---------+----------+------------+-------------+-----------+-------------+------------+--------------+
|productId|foodCode|orderDate|sellerCode|gmoIndicator|ngmoIndicator|gmoPaidItem|gmoUnpaidItem|ngmoPaidItem|ngmoUnpaidItem|
+---------+--------+---------+----------+------------+-------------+-----------+-------------+------------+--------------+
|     3022|      BB| 20181121|        GE|           Y|            Y|        240|         3500|        160|          1400|
|     3022|      DD| 20181114|       WAL|           N|            Y|          0|            0|          40|           300|
|     3023|      CC| 20181123|        AM|           Y|            Y|        150|         4500|          70|          1800|
|     3023|      CC| 20181113|        EB|           Y|            N|          50|         1500|           0|             0|
|     3022|      BB| 20181114|       WAL|           N|            Y|          0|            0|          40|           300|
|     3021|      AA| 20181121|        AM|           Y|            Y|          60|          500|         100|          1800|
|     3022|      DD| 20181112|       WAL|           N|            Y|          0|            0|         120|           900|
|     3023|      CC| 20181122|        GE|           N|            Y|          0|            0|           0|           100|
|     3022|      BB| 20181117|        AM|           Y|            N|          40|          600|           0|             0|
|     3022|      DD| 20181116|       WAL|           N|            Y|          0|            0|          40|           300|
|     3022|      BB| 20181122|        AM|           Y|            N|          40|          600|           0|             0|
|     3021|      AA| 20181109|       WAL|           Y|            N|          20|          200|           0|             0|
|     3021|      AA| 20181115|        GE|           N|            Y|          0|            0|          20|           200|
|     3021|      AA| 20181116|        GE|           N|            Y|          0|            0|          20|           200|
|     3021|      LL| 20181201|        GE|           N|            Y|          0|            0|          40|           800|
+---------+--------+---------+----------+------------+-------------+-----------+-------------+------------+--------------+
```

As we can see from the above result, Spark UDAF gives aggregated rows for each of the unique combinations of product, food code, and order date. Similarly, we can choose any combination of columns for aggregation and store results in the Hive table or store them in HDFS.

---

*Originally published on nitendratech.com on 2019-05-31, updated 2024-02-19.*
