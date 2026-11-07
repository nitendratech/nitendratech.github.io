---
title: "Scala Functions and Methods"
description: "What Scala functions and methods are — defining a function, methods as members of an object, local functions, higher-order functions, and function literals, with code examples."
pubDate: 2018-05-16
category: "Core Tech & Programming"
subcategory: "Scala"
draft: false
---

A [Scala](https://www.nitendratech.com/scala/scala-programming-language/) function is a block of executable code that returns a value or a function by itself.

```scala
//add function in scala which takes two parameters of type Int and returns Int
def add(value1: Int ,value2: Int ): Int = {
    val sum = value1 +value2;
    sum
}
```

We can write a concise form of the above code using Scala.

```scala
def add(value1: Int ,value2: Int) = value1 + value2
```

## Methods in Scala

Methods in Scala is a function that is a member of an object. A method has access to all the fields of the object to which it belongs.

## Local Functions

Local functions are functions that are defined inside the function. This function will have access to variables defined within that specific function.

## Higher-order Functions

A Higher-order function is a function that takes another function as input.

```scala
def encode(n: Int, f: (Int) => Long): Long = {
val x = n * 10;
f(x)
}


//Sum() returns a function that takes two Integer and Returns an Integer
  def sum(f: Int => Int):(Int, Int) => Int ={
    def sumf(a: Int ,b:Int): Int ={
      a+b
    }
    sumf
  }

//Same as Above .
//Its type is (Int => Int) => (Int ,Int) => Int
  def sum(f:Int => Int)(a:Int ,b:Int):Int = a+b

//Called like this
sum(x: Int) => x * x * x) //Anonymous Function which does not have a name

sum(x => x * x * x)    //Same anonymous function with type inferred


def cube(x: Int) = x * x * x
sum (x => x * x * x)(1, 10) //Sum of cubes from 1 to 10

sum(cube) (1 ,10) //Same as above
```

## Function Literal

A function literal is an unnamed or anonymous function in Scala code. It can be used in an application just like a string literal. It can be passed as an input to a higher-order method or function. Furthermore, it can also be assigned to a variable.

```scala
(x: Int) => {
              x+100
             }
```

We can use a single line for a single statement.

```scala
 (x: Int) => x + 200
```

---

*Originally published on nitendratech.com on 2018-05-16, updated 2024-02-19.*
