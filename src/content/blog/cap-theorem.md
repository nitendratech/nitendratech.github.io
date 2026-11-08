---
title: "What is the CAP Theorem?"
description: "The CAP theorem (Brewer's theorem) explained — why a distributed system can strongly support only two of consistency, availability, and partition tolerance at the same time."
pubDate: 2020-01-26
category: "Data Engineering"
subcategory: "Databases"
---

The CAP theorem is also known as Brewer's theorem. It states that it is impossible for a distributed computer system to simultaneously provide all three (Consistency, Availability, and Partition tolerance) guarantees. A distributed computer system can only guarantee/strongly support two of these properties.

![Cap Theorem](/images/cap_theorem.png)

**Fig: Cap Theorem**

## C – Consistency

Consistency is a guarantee that every node in a distributed cluster returns the same, most recent, successful write. It means that everyone on the system has the same view of the data. It refers to every client having the same view of the data. If there are multiple nodes with multiple replicas, clients must see an updated replica. They cannot read stale/old replicas of the data that are not consistent anymore.

There are various types of consistency models. Consistency refers to sequential consistency, a very strong form of consistency.

## A – Availability

It means that every node on (either side of a network partition) must be able to respond in a reasonable amount of time. It means that everyone on the system receives some sort of view from their requests. Every non-failing node returns a response for all read and write requests in a reasonable amount of time.

## P – Partition Tolerance

Partition tolerance means that the system continues to function and upholds its consistency guarantees despite network partitions. It means that either Availability or Consistency can be kept when parts of the system cannot communicate.

We can trade off Availability and Consistency in certain parts of a system. A withdrawal from your bank account should be a consistent transaction; you wouldn't want to see an incorrect number in your bank account after making a withdrawal.

## References

[Cap Theorem Revisited](http://robertgreiner.com/2014/08/cap-theorem-revisited/)

[Understanding Cap Theorem](https://dzone.com/articles/understanding-the-cap-theorem)

---

*Originally published on nitendratech.com on 2020-01-26, updated 2024-01-07.*
