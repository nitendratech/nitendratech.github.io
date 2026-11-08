---
title: "Submit Apache Spark Job with REST API"
description: "How to submit an Apache Spark job from outside the cluster using the Spark REST API — a curl-based shell script, the submission response, and checking job status by submission ID."
pubDate: 2018-04-29
category: "Data Engineering"
subcategory: "Spark"
draft: false
---

When working with [Apache Spark](https://www.nitendratech.com/spark/apache-spark/), there are times when you need to trigger a Spark job on demand from outside the cluster. There are two ways in which we can submit [Apache spark](https://www.nitendratech.com/spark/apache-spark/) job in a cluster.

- **Spark Submit from within the Spark cluster**

To submit a Spark job from within the spark cluster, we use spark-submit. Below is a sample shell script that submits the Spark job. Most of the arguments are self-explanatory.

```bash
#!/bin/bash

$SPARK_HOME/bin/spark-submit \
 --class com.nitendragautam.sparkbatchapp.main.Boot \
--master spark://192.168.133.128:7077 \
--deploy-mode cluster \
--supervise \
--executor-memory 4G \
--driver-memory 4G \
--total-executor-cores 2 \
/home/hduser/sparkbatchapp.jar \
/home/hduser/NDSBatchApp/input \
/home/hduser/NDSBatchApp/output/
```

- **REST API from outside the Spark cluster**

In this post, I will explain how to trigger a Spark job with the help of the REST API. Please make sure that Spark Cluster is running before submitting Spark Job.

![Spark Master](/images/spark-master.png)

Figure: Apache Spark Master

## Trigger Spark batch job by using Shell Script

Create a Shell script named `submit_spark_job.sh` with the below contents. Give the shells script

```bash
#!/bin/bash

curl -X POST http://192.168.133.128:6066/v1/submissions/create --header "Content-Type:application/json;charset=UTF-8" --data '{
  "appResource": "/home/hduser/sparkbatchapp.jar",
  "sparkProperties": {
    "spark.executor.memory": "4g",
    "spark.master": "spark://192.168.133.128:7077",
    "spark.driver.memory": "4g",
    "spark.driver.cores": "2",
    "spark.eventLog.enabled": "false",
    "spark.app.name": "Spark REST API201804291717022",
    "spark.submit.deployMode": "cluster",
    "spark.jars": "/home/hduser/sparkbatchapp.jar",
    "spark.driver.supervise": "true"
  },
  "clientSparkVersion": "2.0.1",
  "mainClass": "com.nitendragautam.sparkbatchapp.main.Boot",
  "environmentVariables": {
    "SPARK_ENV_LOADED": "1"
  },
  "action": "CreateSubmissionRequest",
  "appArgs": [
    "/home/hduser/NDSBatchApp/input",
    "/home/hduser/NDSBatchApp/output/"
  ]
}'
```

Once the spark Job successfully gets executed, we will see an output with the below contents.

```bash
nitendragautam@Nemo: sh submit_spark_job.sh
{
  "action" : "CreateSubmissionResponse",
  "message" : "Driver successfully submitted as driver-20180429125849-0001",
  "serverSparkVersion" : "2.0.1",
  "submissionId" : "driver-20180429125849-0001",
  "success" : true
}
```

## Check Status of Spark Job using REST API

If you want to check the status of your Spark Job, you can use the Submission ID and below shell script.

```bash
curl http://192.168.133.128:6066/v1/submissions/status/driver-20180429125849-0001
{
  "action" : "SubmissionStatusResponse",
  "driverState" : "FINISHED",
  "serverSparkVersion" : "2.0.1",
  "submissionId" : "driver-20180429125849-0001",
  "success" : true,
  "workerHostPort" : "192.168.133.128:38451",
  "workerId" : "worker-20180429124356-192.168.133.128-38451"
}
```

---

*Originally published on nitendratech.com on 2018-04-29, updated 2022-06-06.*
