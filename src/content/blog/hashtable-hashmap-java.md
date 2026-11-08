---
title: "HashTable vs HashMap in Java"
description: "The key differences between Hashtable and HashMap in Java — synchronization, null keys and values, and insertion order — and why ConcurrentHashMap is preferred when thread safety is needed."
pubDate: 2020-02-09
category: "Core Tech & Programming"
subcategory: "Java"
draft: false
---

Even though HashTable and HashMap both are data-structure based upon Hashing and implementation of Map Interface, there are many differences among them. We will read about the main difference between them when implemented in [Java](/blog/java-programming-language/) Programming Language.

## Hashtable vs HashMap

| Factors | HashMap | Hashtable |
| --- | --- | --- |
| **Synchronization** | `java.util.HashMap` methods is not synchronized, not thread-safe and can’t be shared between many threads | `java.util.Hashtable` methods is synchronized, thread-safe and can be shared with many threads |
| **Null Key/Values** | HashMap allows one null key and multiple null Values | Hashtable does not allows any null key or value |
| **Preference** | HashMap is preferred if thread synchronization is not needed | Since Hashtable is legacy class ,use ConcurrentHashMap instead if needed synchronization |
| **Instantiate** | `Map<String, List<String>> foo = new HashMap<String, List<String>>();` | `Map<String ,List<String>> foo = new Hashtable<String, List<String>>();` |
| **Insertion Order** | Does not maintain Insertion Order | Does not maintain Insertion Order |

## Why HashTable doesn’t allow null and HashMap does?

To successfully store and retrieve objects from a HashTable, the objects used as keys must implement the hashCode method and the equals method. Since null is not an object, it can’t implement these methods. HashMap is an advanced version and improvement on the Hashtable. HashMap was created later.

source: [HashTable and Hash Map Differences](http://www.geeksforgeeks.org/differences-between-hashmap-and-hashtable-in-java/)

## Maintaining Insertion order in Hashmap

[`HashMap`](http://docs.oracle.com/javase/7/docs/api/java/util/HashMap.html)

> `HashMap` itself doesnot maintain insertion order – but `LinkedHashMap` does. This class makes no guarantees as to the order of the map; in particular, it does not guarantee that the order will remain constant over time.

[`LinkedHashMap`](http://docs.oracle.com/javase/7/docs/api/java/util/LinkedHashMap.html)

> It is the Hash table and linked list implementation of the Map interface, with predictable iteration order. This implementation differs from HashMap in that it maintains a doubly-linked list running through all of its entries. This linked list defines the iteration ordering, which is normally the order in which keys were inserted into the map (insertion-order).

## Concurrent Hash Map

ConcurrentHashMap is the implementation of HashMap which is thread-safe. It allows multiple readers to read concurrently without any blocking. This is achieved by partitioning Map into different parts based on concurrency level and locking only a portion of Map during updates.

---

*Originally published on nitendratech.com on 2020-02-09, updated 2022-06-05.*
