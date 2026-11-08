---
title: "JVM Monitoring tools"
description: "The tools JDK 8 provides for monitoring and diagnosing running JVM and Java applications — Java Mission Control, jcmd, Java VisualVM, JConsole, and utilities such as jps, jmap, jstat, jstack, visualgc, and jstatd."
pubDate: 2020-03-22
category: "Core Tech & Programming"
subcategory: "Java"
draft: false
---

JDK 8 version of [Java](/blog/java-programming-language/) introduced Java Mission Control, Java Flight Recorder, and `jcmd` utility for diagnosing problems with JVM and Java applications. Oracle Java documentation suggests using the `jcmd` tool instead of earlier tools like `jstack`, `jinfo`, and `jmap` utilities for enhanced diagnostics and reduced performance overhead.

Below Tables lists, the tools as given in oracle [website](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr025.html) are designed for monitoring applications that are running.

| Tools Or Option | Description and Usage |
| --- | --- |
| **Java Mission Control (JMC)** | JMC is a new JDK profiling and diagnostic tools platform for HotSpot JVM. It s a tool suite for basic monitoring, managing, and production time profiling and diagnostics with high performance. It minimizes the performance overhead that's usually an issue with profiling tools. |
| **jcmd Utility** | The `jcmd` utility is used to send diagnostic command requests to the JVM, where these requests are useful for controlling Java Flight Recordings(JFR). The JFRs are used to troubleshoot and diagnose JVM and Java Applications with flight recording events. |
| **Java VisualVM** | This utility provides a visual interface for viewing detailed information about Java applications while they are running on a Java Virtual Machine. This information can be used in troubleshooting local and remote applications, as well as for profiling local applications |
| **JConsole Utility** | This utility is a monitoring tool that is based on Java Management Extensions (JMX). The tool uses the built-in JMX instrumentation in the Java Virtual Machine to provide information about the performance and resource consumption of running applications |
| **`jps` utility** | This utility lists the instrumented Java HotSpot VMs on the target system. The utility is very useful in environments where the VM is embedded, that is, it is started using the JNI Invocation API rather than the java launcher. |
| **`jmap` utility** | This utility can obtain memory map information, including a heap histogram, from a Java process, a core file, or a remote debug server |
| **`jstat` utility** | This utility uses the built-in instrumentation in Java to provide information about the performance and resource consumption of running applications. The tool can be used when diagnosing performance issues, especially those related to heap sizing and garbage collection |
| **`jstack` utility** | This utility can obtain Java and native stack information from a Java process. On Oracle Solaris and Linux operating systems the utility can also get the information from a core file or a remote debug server. |
| **`visualgc` utility** | This utility provides a graphical view of the garbage collection system. As with `jstat`, it uses the built-in instrumentation of Java HotSpot VM. |
| **`jstatd` daemon** | This tool is a Remote Method Invocation (RMI) server application that monitors the creation and termination of instrumented Java Virtual Machines and provides an interface to allow remote monitoring tools to attach to VMs running on the local host. |
| **Native Tools** | Each operating system has native tools and utilities that can be useful for monitoring purposes. For example, the dynamic tracing (DTrace) capability introduced in Oracle Solaris 10 operating system performs advanced monitoring |

---

*Originally published on nitendratech.com on 2020-03-22, updated 2024-08-10.*
