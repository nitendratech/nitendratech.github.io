---
title: "Understanding Scala Collections"
description: "The Scala collections framework — its base classes, the immutable and mutable collection types, List vs Array, tuples, and core operations like map, flatMap, and flatten, with REPL examples."
pubDate: 2019-11-27
category: "Core Tech & Programming"
subcategory: "Scala"
draft: false
---

Scala Collections is a container [data](/blog/data-explained/) structure that contains zero or more elements. Scala provides several collection classes.

## Base Classes

- Iterable (Collections that are iterated)
- Sequence (Consist of Ordered Sequences)
- Set
- Map (lookup data structure)

## Immutable Collections

- List (Linked List provides fast sequential access)
- Stream (Same as List except that tail is evaluated on Demand)
- Vector (Array Like type, implemented as a tree of Blocks, which provides fast random access)
- Range (Ordered Sequence of Integers with equal Spacing)
- String (Java type implicitly converted to a character sequence, so you can treat every string like Seq[Char] )
- Map (Collection that maps keys to Values)
- Set (Collection without duplicate elements)

## Mutable Collections

- Array (Scala arrays are native JVM arrays at run-time, therefore they are very performant)
- Scala also has mutable maps and sets, which should only be used if there are performance issues with Immutable types

## Scala List vs Array

List is an immutable recursive data structure, whilst array is a sequential mutable data structure.

Arrays are mutable objects, you can’t change the length of an array after it is instantiated. You can change its element values.

```scala
val scalaArray1 = Array("zero","one","two")
val scalaArray2 = Array.apply("zero","one","two") //Same as Above

//Updating the element in Array
scalaArray.update(0,"changedValue")
```

### Tuples in Scala

A tuple is a container for storing two or more data types. As it is immutable, it cannot be modified after it has been created

```scala
val twoElementsTuple = ("10",true)
val threeElementsTuple = ("10","Nitendra",true)
```

A tuple is useful when we want to Group non-related elements.

To access elements in a tuple, we use one based index.

```scala
val firstElement = twoElementsTuple._1 val secondElement = twoElementsTuple._2
```

In Scala `map` applies functions to all the element in the collections. We typically use it to iterate over a list, performing an operation on each element and adding the result to a new list. Map returns associated value by wrapping in `Some`.

### Map vs Flat Map in Scala

`flatMap` also applies functions to all the elements in the List, but returns a sequence for each element in the List. `flatMap` flattens the data from the input List

```scala
scala> val animalList = List("Dog","Cat","Hamster")
animalList: List[String] = List(Dog, Cat, Hamster)

scala> animalList.map(_.toUpperCase)
res1: List[String] = List(DOG, CAT, HAMSTER)

scala> animalList.flatMap(_.toUpperCase)
res2: List[Char] = List(D, O, G, C, A, T, H, A, M, S, T, E, R)
```

### List

A-List is a linear sequence of elements of the same data type. It is a recursive and immutable data structure that cannot be modified after creating it.

```scala
scala> List(1,2,4).map(_ *2)
res5: List[Int] = List(2, 4, 8)
```

Following are the basic operations on a list

- Fetching the first element using a method named head.
- Fetching all the elements except the first element. For this operation, the List class provides a method named tail.
- Checking whether a list is empty. This is done by using a method named `isEmpty` which returns true if a list is empty.

```scala
val numList = List(10 ,20,30,50)
val rangeList = (1 to 100).toList
val arrList = Array(2,5,10).toList
```

### Array

An Array is an indexed sequence of the same type of elements. It is a mutable flat data structure in which elements in an array can be updated. But we cannot add any new element to an existing Array after it has been created.

```scala
scala> Array(2,5,6).map(x => x *2)
res6: Array[Int] = Array(4, 10, 12)

// Create new Array
scala> var arr = Array(10,20,30 ,40,50,60)
arr: Array[Int] = Array(10, 20, 30, 40, 50, 60)

//Get first Elements of Array
scala> arr(0)
res0: Int = 10

//Assign 50 as first Element
scala> arr(0) = 50

//Value of first Element Changed
scala> arr
res2: Array[Int] = Array(50, 20, 30, 40, 50, 60)
```

### Set

It is an unordered collection of distinct elements which does not contain duplicate elements.

```scala
scala> Set(2,4,6).map(_ + 3)
res7: scala.collection.immutable.Set[Int] = Set(5, 7, 9)
```

### Vector

```scala
scala> val numberRange = 0 until 10
numberRange: scala.collection.immutable.Range = Range 0 until 10

scala> numberRange.map( _ * 2)
res8: scala.collection.immutable.IndexedSeq[Int] = Vector(0, 2, 4, 6, 8, 10, 12, 14, 16, 18)
```

### String Data Type

```scala
scala> "Hello World".map { _.toUpper}
res11: String = HELLO WORLD
```

### Flatten

It is used to flatten the collection so that unnecessary nesting can be removed

```scala
scala> List(List(3,4,5),List(4,9,8)).flatten
res12: List[Int] = List(3, 4, 5, 4, 9, 8)
```

### flatMap

```scala
//Filter over a List with some condition
scala> List(1,2,3).flatMap { x => if( x >2 ) List() else List(x) }
res13: List[Int] = List(1, 2)
```

## References

[Scala Documentation](https://docs.scala-lang.org/)

---

*Originally published on nitendratech.com on 2019-11-27, updated 2024-08-03.*
