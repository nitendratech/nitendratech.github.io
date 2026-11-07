---
title: "Scala Case Classes And Pattern Matching"
description: "What Scala case classes are and their key properties, and how pattern matching works in Scala — with match examples for colors, arithmetic operators, and list patterns."
pubDate: 2019-03-29
category: "Core Tech & Programming"
subcategory: "Scala"
draft: false
---

A Case class in Scala [programming language](https://www.nitendratech.com/programming/programming-langauge/) is a class with a case modifier. It is used to conveniently store and match the contents of a class.

```scala
case class Person (name: String, address: String)

// Create Instance of Case Class
val person = Person("Nitendra Gautam","Dallas")
```

## Case Classes Properties

- Case Classes can be constructed without using a new Keyword.
- All input parameters specified in the definition of a case class implicitly get a `val` prefix.
- Scala adds four methods such as `toString`, `hashCode`, equals, and copy to a case class.
- Scala case classes can be used for Pattern Matching as they create non-mutable objects

## Pattern Matching in Scala

One simple use of pattern matching is as a replacement for a multi-level if-else statement. An if-else statement with more than two branches becomes harder to read.

Let's take a simple function that takes an input parameter, a string that represents a color, and returns 1 if the input string is "Red",2 for "Blue", 3 for "Green",4 for "Yellow", and 0 for any other color.

```scala
def matchColorToNumber(color:String) :Int = {
     val num = color match {
      case "Red" => 1
      case "Blue" =>2
      case "Green" =>3
      case "Yellow" =>4
      case _ => 0
    }
     num
  }
```

Instead of the keyword switch, Scala uses the keyword match. Each possible match is preceded by the keyword case. If there is a match for a case, the code on the right-hand side of the right arrow is executed. The underscore represents the default case. If none of the prior cases match, the code for the default case is executed.

Another example of `case class` is given below. The final results are based upon the given operator like addition, subtraction, multiplication, and division.

```scala
def executeOperation(x:Int ,y: Int ,operator: String) :Double = {
    operator match {
      case "+" => x+y
      case "-" => x-y
      case "*" => x*y
      case "/" => (x/y).toDouble
      case _ => 0 //returns 0 if empty operator
    }
  }
```

```scala
(someList: List[T]) match {
 case Nil => ...   //Empty List
 case x:: Nil => //List with only one Element
 case List(x) => //Same as above
 case x :: xs => ... // a List with at least one element .x is bound to the head
 //xs is bound to the tail .xs could be Nil of Some other List.

 case 1 :: 2 :: cs => ... lists that start with 1 and then 2
 case (x, y) :: ps => //a list where head element is a pair
 case _ => ...  //Default case if none of the above matches
}
```

---

*Originally published on nitendratech.com on 2019-03-29, updated 2024-08-03.*
