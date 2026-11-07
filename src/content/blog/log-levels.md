---
title: "Log Levels in Application"
description: "Log levels categorize the severity of application log messages — from OFF and FATAL down to TRACE and ALL — and the popular logging libraries that use them."
pubDate: 2020-07-10
category: "Core Tech & Programming"
subcategory: "Logging"
draft: false
---

Log levels or Logging Levels are processes to categorize the importance or severity of messages logged in software or applications. They are also called log severity levels. They allow developers to configure what types of messages are logged and their importance based on the SLA of the system.

Application logging is an important thing to consider when you write production-grade code. It helps in debugging the code as well as fixing any issues that come up in production. It provides an archaeological record of the application behavior in production.

[A log](https://www.nitendratech.com/technology/log-file) file can tell you if an application has failed or faced a memory error in production. It can have important information like timestamps, messages, and logging levels of the logs.

## Common Logs Levels

The below table gives some common log levels in terms of their hierarchy that are used by many logging libraries.

| Log Level | Descriptions |
| --- | --- |
| **OFF** | Don't Log Anything. It is the highest possible rank and is intended to turn off logging. |
| **FATAL** | It represents very severe error events that will presumably lead the application to abort or crash or database corruption. |
| **ERROR** | Gives error events that might still allow the application to continue running. |
| **WARN** | Gives information about harmful situations in applications. |
| **INFO** | It contains informational messages that are logged in the application. |
| **DEBUG** | It provides fine-grained informational events that are most useful to debug an application. |
| **TRACE** | Gives finer-grained informational events than the DEBUG. |
| **ALL** | It logs everything, including any custom logging levels in the application. |

**Common Logging Library**

There are different log levels in applications based on what programming languages and libraries are being used. Some of the most popular libraries that I have worked with are given below.

- Log4j
- Logback
- Apache Common Logging Framework
- Java Logging API
- SL4J framework

---

*Originally published on nitendratech.com on 2020-07-10, updated 2024-02-19.*
