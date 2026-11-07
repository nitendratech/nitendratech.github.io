---
title: "Most asked System Design Interview Questions"
description: "System design interview questions and answers on distributed systems, covering CDN, TTL, load balancing, caching, replication, the CAP theorem, two-phase commit, scalability, and fault tolerance."
pubDate: 2022-01-21
category: "Cloud & Architecture"
subcategory: "Interview Questions"
draft: false
---

System design is the process through which we design the architecture, components, and interfaces for software based on a given user requirement. It’s a field of study in computer engineering that helps to design and build scalable systems that can be distributed globally.

In this blog post, we read about the important System Design Interview questions and answers that will help you prepare for the next Interview related to System design, and distributed systems.

## What do you mean by distributed System?

A distributed system is a collection of independent computers or hosts that work together to form a single computer by connecting through a communication network. All of the distributed machines have one shared state and operate concurrently. Each of these hosts or computers has a separate operating system and runs its programs without having a dependency on one another.

With distributed systems, users must be able to communicate with any of the distributed machines without knowing it’s only one machine. The distributed system network stores its data on more than just a single node, using multiple physical or virtual machines at the same time. Computers that are part of a distributed environment do not share memory or CPU (Central Processing Unit). Components in a distributed system interact with each other so that they can achieve a common goal.

## What are some of the examples of distributed systems?

The following are some examples of distributed systems.

- Banking System
- Streaming Websites
- Email System
- Airline Reservation system
- Telecommunication/Cellular Network
- World Wide Web
- Online Games
- Aircraft Control System
- Rendering in Computer graphics
- Distributed Database systems

## What are the common characteristics of the distributed system?

Certain characteristics are common to all distributed systems.

- **Resource Sharing:** Applications running on the distributed system can use any resources, hardware, software, or data within the system.
- **Concurrent**: Components running in distributed systems are executed in concurrent processes. Certain resources such as variables and databases can be accessed concurrently as a shared resource.
- **Openness:** Distributed systems should be open to extension and improvement. It should support any new components that can be integrated with the components that are already existing.
- **Scalability: **The distributed system should accommodate more additional users while having low latency. Architecture should be designed in such a way that components are scalable when we add more resources.
- **Fault Tolerance:** The distributed system should be accessed by users or processes even though there can be a failure of software/hardware or network.
- **Transparent:** The distributed system should act as a whole rather than different components that rework together.

## What do you mean by CDN(Content Delivery Network) in a Distributed System?

A CDN or Content Delivery Network is a group of geographically distributed servers that deliver static content through the internet. This network of CDN servers caches static contents like multi-media images, videos, CSS, Graphics Interchange Format(GIF) images, JavaScript files, PDF files, etc.

## What is Time to Live(TTL) in a Distributed System?

TTL or Time to Live is a mechanism that is used to limit the lifetime of data on a computer or the network. Once the predefined time or counter has elapsed, this data is discarded.

In terms of distributed computing, it is commonly used in Non-Relational or [NoSQL](https://www.nitendratech.com/database/nosql-databases/) databases like Apache Hbase, Cassandra, and time-series databases. We need to create a timestamp-based column when designing the data models for the NoSQL database. This timestamp-based column is used as a basis to determine the TTL for the data in that schema. Once the designated time has expired, this data is deleted.

## What is the Single Point of Failure(SPOF) in a Distributed System?

A Single Point of Failure(SPOF) is a fault in the design or configuration of a system that poses a hazard because it could lead to a situation in which one fault or malfunction can cause the whole system to stop working. It can be software, hardware, a facility, or a person for which there is no backup in place. If any of those resources goes down, it can bring the whole cluster down.

The main goal of the distributed system is to design a system that avoids a single point of failure. We do not want SPOF for systems like supply chains, networks, and software applications that demand high reliability and availability.

## What is a Load Balancer in a Distributed System?

A load balancer is a device or a server that evenly distributes the network or incoming traffic among several servers. They are mainly used to increase the capacity and reliability of the applications installed in the servers. They communicate with web servers through private Internet Protocol(IP) addresses.

The load balancer balances the incoming traffic throughout the servers based on various algorithms.

## What are some of the industry standard Algorithms for Load balancers?

Below are some of the current industry-standard algorithms.

- Least Response Time
- Weighted Round robin
- Least Connections
- Round robin

## What are Private IPs(Internet Protocols)?

A private IP(Internet Protocol) is an address that is reachable between servers in the same network but unreachable over the Internet. Datacenters hosted within an organization firewall have private IPs that cannot be accessed from outside.

## What is Replication in a Distributed System?

Replication is the process through which we can copy files or data into more than one place. This copy of data or files can be done locally or remotely so that we do not lose that data in any catastrophic event like hardware failure or accidental deletion. This is done to make sure the system is highly available and fault-tolerant.

## What is Cache in a Distributed System?

A cache is a temporary storage area in memory that stores some result of common response or frequently accessed data so that response time is improved. Whenever the new web page is loaded, it makes some database calls to fetch the data. This frequent call to the database degrades the application’s performance. To resolve this issue, we can use a caching mechanism to store the data in memory so that it improves the application performance and improves the user experience.

## What do you understand by Cache Tier?

The cache tier is a separate data storage layer that is based temporarily. This helps to reduce the database workloads and improve the system performance, in addition, to scaling it when needed for larger applications.

## What are Merkle Trees?

A Merkle Tree or Hash Tree is a data structure in many computer science applications that is used for quick verification of the database for checking integrity. We do this using multiple levels of Hashing.

## What is DMZ or Demilitarized zone?

DMZ or demilitarized zone is a section of the network in an organization that sits behind the network firewall. This DMZ includes servers related to email, domain servers, and internal applications.

## What is a CPU?

A CPU or Central Processing Unit is a separate computer unit that performs basic arithmetic, controlling, logic, and Input/output(I/O) operations specified by the instruction in the program.

## What is RAM?

RAM or Random Access Memory is separate hardware in a computing device where the operating system (OS), application programs, and data in current use are kept in memory temporarily. This storage of data in main memory makes it faster to read/write in comparison to other storage such as Solid State Drive(SDD) or Hard Disk Drive(HDD).

## What is HyperText Transfer Protocol(HTTP)?

Hypertext Transfer Protocol (HTTP) is an internet-based protocol in the application layer that is used for distributed data communication for sharing hypermedia information systems. It is the foundation of the World Wide Web(WWW) through which users can share various multimedia information through a web browser or the URL(Uniform Resource Locator).

Tim Berners-Lee initiated the development of HTTP at CERN in 1989 AD who also provided a document that described the client-server behavior using the HTTP protocol.

## What are the types of Hypertext Transfer Protocol (HTTP) requests?

HTTP has different request methods that indicate the different actions that should be performed for a given resource.

The following are the types of HTTP requests.

- GET
- HEAD
- POST
- PUT
- POST
- DELETE
- TRACE
- CONNECT
- OPTIONS

## What is Write-ahead logging(WAL) in a Distributed System?

WAL or Write ahead logging is a popular concept in computer science for assuring data integrity. In this technique, we need to log the set of transactions in permanent storage(like a disk) before making any change to the database’s current state or making actual modifications to the database. It helps to maintain the atomicity and durability of the writing that is being planned.

Durability is an achiever in an application as the mutation is written to the WAL before applying any change to the database. This is done so that, we can recover the mutation in case of any crash or server failure. The WAL that persisted before is used to bring the database to an earlier state if any crash occurs by replaying the logs.

This WAL can be used to roll back the data in case of a power outage or failure. Data files can be rolled forward if there are any uncommitted transactions or rolled back in case of power failure. This technique makes sure that no transaction gets flushed to the disk until the transactions are recorded to disk as logs to maintain the [ACID property](https://www.nitendratech.com/database/acid-property-database/) of the transaction,

These logs are written in segments until an allotted size is reached. Once the file crosses the allotted size, WAL starts a new segment. This makes it easier for the Database Administration(DBA)/ Infrastructure Engineer /Site Reliability Engineer to truncate the logs based on their timestamp or their usability.

## What are the Features of Write-Ahead Logging(WAL)?

Below are the features of WAL.

- Data can be reverted to any time given that WAL is archived on a timely basis. We just have to install the database once again and replay the WAL log for the time it’s needed.
- As Logs files are written sequentially, synchronization of lost files is less expensive than flushing the data pages every time a transaction happens. This is applicable for that’s servers that handle large amounts of small transactions. This kind of small transaction produces a long trail.
- It helps to provide back-in-real-time and point-in-time recovery features.

Most database software uses one form of WAL to maintain the transaction backup. Messaging systems such as Apache Kafka make use of this feature a lot.

## What is Hadoop Distributed File System (HDFS)

[HDFS or Hadoop Distributed File System,](https://www.nitendratech.com/hadoop/hadoop-hdfs/) is a distributed file system for [Apache Hadoop](https://www.nitendratech.com/hadoop/apache-hadoop/)that handles large data sets while running on commodity hardware. It can handle structured, unstructured, and semi-structured data while supporting streaming/batch data access patterns to the application that runs on top of it. It was built around the idea that the most efficient data processing pattern in a distributed environment would be the “write once, read many times” pattern. HDFS was created based on the paper published by Google where they give details about Google File System(GFS) and MapReduce algorithm.

## What is a Cyclic redundancy check?

CRC or Cyclic redundancy check is a code that detects the error on a periodic basis. They are commonly used in digital networks and storage devices to check if the raw data are changed by accident.

## What is Database Replication?

[Database](https://www.nitendratech.com/database/learn-database/) replication is a process in which data from the central database is copied to one or more databases. The database whose data is copied to another database is called a publisher database whereas the database getting the data is known as the Subscriber database. This process is followed to make sure the database is distributed in a different data center or geographical location so that users connecting to any of the databases see the same data and work on it.

## What are Sockets in Networking?

A socket is one endpoint to the two-way communication link that is used as a communication link between two programs running on a network. They allow for communication between two different processes on the same or different machines. The lifetime of the socket is during the lifetime of the process or application that is running in the network node. Every socket has a port number bound to it so that the TCP(Transmission Control Protocol) networking layer can identify the application where the data is being sent. Sockets are generally used in client-server applications.

## What is a CAP Theorem in Distributed Systems?

The [CAP theorem](https://www.nitendratech.com/database/cap-theorem/) or Brewer theorem is a fundamental theorem presented by Eric Brewer in 2000 AD, who was a computer science professor at UC Berkeley. He presented this conjecture during a talk show on distributed computing principles. According to this theorem, a distributed system can only have two of three properties at the same time; Consistency, Availability, and Partition tolerance. This theorem formalizes the trade-off in the distributed system between these properties.

## What is Scalability?

Scalability is a system/process or network capability to scale up depending upon the increased demand. There are many reasons why systems have to scale up. They can be as follows.

- Increased in number of transactions or work
- Increase in Data Volume

When a system is designed as scalable in a distributed system, it should be able to scale up without losing performance. This type of distributed system that is scalable can evolve to support the growing number of users. If a system is not designed carefully in terms of architecture, it might limit the efficient distribution of loads on all nodes that are participating.

## What are File systems?

An**swer: **File systems are processes in the operating system, that are used to manage the data storage mechanism on disk. It helps to manage the internal workings of the storage disk and how users can access this data. It is responsible for managing multiple operations like Naming of File, Directories and Folders, Management of Storage, and Access rules.

## What are Fault-tolerant Systems?

Those systems that can anticipate and cope with faults are known as fault-tolerant or resilient systems. A fault in a system means that some components of that system veered from the original specification. A fault in a system does not mean failure in the system as a fault system still works in some way but not expected way.

## What is the reported mean time to failure for Hard disks?

Hard disks are supposed to have a Mean time to Failure(MTTF) of about 10 to 15 years.

## How can we make a Data Center with a large storage cluster redundant to failure?

We can make a Data Center with a large storage cluster redundant to failure by following the below points.

- Using RAID(Redundant Array of Independent Disks) configuration for disks
- Setting up dual power supplies for Servers
- Batteries and Diesel Generators for backup power

## What are Cascading failures in distributed systems?

There are some failures in a distributed system that start with a fault at one component gradually triggering in other components and further triggering more faults in the chain of sequence. These kinds of failures are called cascading failures.

## What are Redundant Disk Arrays (RAID)?

RAID is known as redundant arrays of disks. It is a virtual disk-based technology in which multiple physical hard disks are combined into a single unit. It is used to achieve redundancy, improve performance, reliable storage system.

Although RAID looks like a physical disk physically, it has a complex design internally. A RAID might have multiple disks, memory, or processors to manage them. There are different raid levels like RAID 0, RAID 1, etc. that provide various functionalities.

## What is a Two-phase commit in the database?

In Relational Database Management System(RDBMS), commit means saving the data changes in the storage, whereas rollback means undoing the data changes. When a database is used in a distributed environment, data is geographically distributed in the data centers. In order for a commit or any transaction operation to occur in a distributed environment, the coordinator object is used to synchronize the data between the servers in two phases.

A two-phase commit is a standard protocol in which a database commit operation is implemented in two steps.

**First Phase:** In this phase, servers first write the commit messages to the database logs. These logs contain any data changes that need to happen in the database. This phase returns success or failure depending upon the outcome of this phase.

**Second phase: **In this phase, the coordinator sends a signal to all the participants regarding the new changes.

If all the participants respond with `OK`, each of them applies the new changes in the database and writes the details in the log record. Once the database changes are applied, it sends the request back to the coordinator.

If there is a failure, the coordinator sends instructions to all the servers to roll back the changes. Once the rollback operation is completed, each of the servers sends the feedback to the coordinator.

## What is Synchronous Replication?

Synchronous replication is a type of replication in which the original node that is trying to replicate its data to other nodes reports success only when it receives an acknowledgment from all the replicas. The main database waits till it receives confirmation from all the replicas.

If any of the replica nodes fail to acknowledge due to network or other issues, the original node is not able to communicate back to the client till the failed node confirms the write operation.

## What do you understand by the Internet?

The Internet refers to the network of networks, that transfer huge amounts of data around the globe.

## What do you understand by TCP/IP?

TCP/IP stands for Transmission Control Protocol/Internet Protocol. It is a set of protocols that defines how two or more devices can communicate with each other.

## When is it best to Choose Non-Relational Databases?

It is best to choose non-relational databases for the below scenarios.

- When an application requires extremely low latency
- When data is unstructured or there is no need for any relational data structure
- When we only need to serialize and deserialize data like JSON, XML, etc
- When the volume of data used is massive

## What is Quorum in a Distributed System?

Quorum in a distributed system is the minimum number of replicas or votes that a distributed transaction has to obtain to proclaim success in that operation. This technique is implemented to ensure that consistent operation is enforced in a distributed system.

Let’s say that we have a database with three replicas of it. In this case, a quorum is the least number of machines that perform the same action as committing or aborting a particular operation to determine if it’s succeeded or failed. If any two of the replicas acknowledged the operation, it can be committed, guaranteeing the needed consistency for distributed operations.

---

*Originally published on nitendratech.com on 2022-01-21, updated 2024-02-18.*
