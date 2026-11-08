---
title: "Introduction to Apache Flume: Components and Channels"
description: "What Apache Flume is and how it works — its core components (event, source, sink, channel, agent, client) and its three built-in channels: memory, JDBC, and file."
pubDate: 2020-04-30
category: "Data Engineering"
subcategory: "Apache Flume"
---

Apache Flume is an Apache open source project used for moving massive quantities of streaming data into HDFS. It collects log data from the web server logs files and aggregates it in [HDFS](/blog/hadoop-hdfs/) for analysis.

It supports multiple sources like –'tail', System logs, [Apache Access Logs,](/blog/access-logs/) and Apache log4j. Furthermore, it provides end-to-end reliability because of its transactional approach to the data flow.

## Flume Core Components

The core components of Flume are given below.

- **Event:** It is the single log entry or unit of data that is transported.
- **Source:** It is the component through which data enters Flume workflows.
- **Sink:** It is responsible for transporting data to the desired destination.
- **Channel:** It is the medium that connects the Sink with the Source.
- **Agent:** An Agent is any JVM (Java Virtual Machine) that runs Flume.
- **Client:** The component that transmits the event to the source that operates with the agent.

![](/images/flume_diagram.png)

## Channels in Apache Flume

Apache Flume has three different built-in channels to transport log files.

### Memory Channel

In the memory-based channel, events are read from the source into memory and passed to the sink.

### JDBC (Java Database Connectivity) Channel

[JDBC](/blog/learn-jdbc/) channel stores the events in an embedded Derby database.

### File Channel

This channel first writes the contents to a file on the file system after reading the event from a source. This file is then deleted only after the contents are successfully delivered to the sink.

Among all these channels, the memory channel is the fastest channel whereas the file channel is the most reliable one. One caveat of using a memory channel is that it has the risk of data loss. But File-based channel does not have data loss. The different organization chooses different channels according to their use case.

## Conclusion

In this blog post, we learned about Apache Flume, its core components, and its channels.

Please share this blog post on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2020-04-30, updated 2022-06-21.*
