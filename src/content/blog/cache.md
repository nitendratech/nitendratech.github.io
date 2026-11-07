---
title: "What is Cache? And How Does it Work?"
description: "What cache is and how it works — storing frequently accessed data in a fast temporary area, common use cases and types of cache, eviction policies such as FIFO, LRU, and LFU, and cache invalidation."
pubDate: 2024-03-30
category: "Core Tech & Programming"
subcategory: "Caching"
draft: false
---

In Software engineering, caching is a process of storing frequently accessed expensive data in a temporary state area called cache. The main goal of caching is to improve the performance and efficiency of applications by reducing the time and resources to retrieve data. It is like short-term memory containing the most recently accessed items, which use a limited amount of space but is faster than accessing the original data source

The use of caching reduces the load on backend systems or databases. This further leads to lower resource consumption, such as CPU usage, network bandwidth, and database queries. It helps to reduce costs by using existing resources and reducing the need of expensive hardware to spring the data temporarily.

## Common Use Cases of Cache

Caching is widely used in various applications and systems in every layer of computing.

- Hardware
- Operating System
- Web Browsers
- Web Servers (HTTP Caching) and Application Server Cache
- Databases (Query Caching)
- Content Delivery Network (CDNs)
- Object Relation Mapping

**Types of Caches**

There are different types of cache being used in software engineering. Each one of them has their characteristics and suitability for specific use cases.

- In-Memory Cache
- Disk Cache
- Distributed Cache
- Browser Cache

## Cache Eviction Policies

Below are some of the common cache eviction policies

- First In First Out (FIFO): In this cache policy, those blocks that are accessed first are evicted first, regardless of frequency or number of times it was accessed before.
- Last In First Out (LIFO): In this cache, those blocks that are accessed most recently are evicted first. It does not matter how often or how many times this block was accessed before.
- Least Recently Used (LRU): It disregards that item first which was least recently used.
- Most Recently Used (LRU): It discards the most recently used items first.
- Least Frequently Used (LFU): It counts how often an item is accessed and discard those items which are least frequently used,
- Random Replacement(RR): It randomly selects the candidate item and discards it to make space when needed.

## Cache Invalidation

It is a process of updating cached data in a cache store when data in the original source changes or becomes outdated. This process triggers when updates, inserts, or deletions of original data records happens.

This process ensures that cached data remains consistent with the latest version of the data, ensuring users or application won't be accessing stale or incorrect information. Thus, it is important for maintaining data integrity and accuracy in software systems that uses caching mechanism.

---

*Originally published on nitendratech.com on 2024-03-30, updated 2024-03-30.*
