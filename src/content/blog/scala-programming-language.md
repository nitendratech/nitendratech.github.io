---
title: "Scala Programming Language"
description: "An introduction to the Scala programming language — what it is, its functional programming concepts, and two ways to create a runnable Scala application."
pubDate: 2017-09-16
category: "Core Tech & Programming"
subcategory: "Scala"
draft: false
---

The word "Scala" comes from a combination of "scalable" and "language". It means that it is designed to grow with the demand of users. It was designed and developed by Martin Odersky.

Furthermore, it is a Multi-Paradigm Programming Language, which supports both Object-Oriented and Functional Programming concepts. It is a strong and statically typed system, which means that all types are checked at compile time by the Scala compiler. Scala Source code is compiled into Java byte code so that its resulting executable code runs on a Java Virtual Machine(JVM).

## Functional Programming (FP) Concepts in Scala

It is a programming style that uses functions as a building block and avoids mutable variables, loops, and other imperative control structures.

It has the below properties.

- In FP, functions are treated as first-class citizens who have the same status as variables or values. Using FP, we can use functions just like a variable.
- It emphasizes the use of immutable data structures rather than using mutable data structures or variables.
- In functional programming, every statement is an expression that returns a value.
- It supports higher-order functions, through which you can pass functions as parameters.
- It provides a lightweight syntax for defining anonymous functions
- It supports higher-order functions, supports nested functions, and supports currying.
- Pattern Matching using Case Classes: Scala case class has built-in support for pattern matching model algebraic types.
- Singleton objects provide a convenient way to group functions that aren't members of a class.

## Create a runnable application in Scala

There are two ways of creating runnable applications in

- **Using the main method**

```scala
object ScalaApplication {

def main(args:Array[String]) = println(" Hello World")
}
```

- **Extending App**

```scala
object ScalaApplication extends App {
println("Hello World")
}
```

---

*Originally published on nitendratech.com on 2017-09-16, updated 2024-02-18.*
