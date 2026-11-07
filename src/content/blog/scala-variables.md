---
title: "Scala Variables"
description: "What Scala variables are, the difference between mutable variables declared with var and immutable variables declared with val, and how Scala's type inference works."
pubDate: 2017-11-10
category: "Core Tech & Programming"
subcategory: "Scala"
draft: false
---

Variable in Scala is defined as memory locations reserved to store values. When a variable is created, some memory is reserved for the space it will use.

Scala has mainly two types of variables, mutable and Immutable.

## Mutable Variable (var)

Mutable variables are defined using `var` keywords. Its value can be changed after assigning it.

```scala
scala> var x=30
x: Int = 30

scala> x = 20
x: Int = 20 // Value of Var can be changed
```

## Immutable variable (val)

Immutable variables are defined using `val` keywords. Its value cannot be changed after assigning it.

```scala
scala> val y = 20
y: Int = 20

//Compiler will throw an error as value of val cannot be reassigned
scala> y=10
<console>:12: error: reassignment to val
       y=10
```

## Type Inference in Scala Variable

Scala is a statically typed language. Scala compiler infers the type of variable whenever possible without forcing the developers to declare it.

Below, two statements mean the same thing.

```scala
val y =20
val y1: Int = 20

// Below two means the same thing
val x = 'c'
val x1:Char= 'c'
```

---

*Originally published on nitendratech.com on 2017-11-10, updated 2022-06-06.*
