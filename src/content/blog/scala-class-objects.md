---
title: "Scala Class and Objects"
description: "What Scala classes and objects are — defining a class with constructors and members, the Scala object hierarchy (Any, AnyVal, AnyRef), and singleton companion objects with a Hello World example."
pubDate: 2019-01-21
category: "Core Tech & Programming"
subcategory: "Scala"
draft: false
---

Scala Classes are a blueprint for creating objects. They can contain methods, values, variables, types, objects, traits, and Classes that are Collectively called Members.

Minimal Class Definition in Scala is simply the Keyword Class and an identifier.
Class Name should be capitalized.

Let's take a look at an example of a class in Scala.

```scala
class Person
val person1 = new Person
```

In Scala, `new` a keyword is used to create an instance of the Class. Here `Class Person` has a default constructor which takes no arguments because we have not defined any constructor.

Let's look at a more complex Example

```scala
//Defines a new MyClass with a Constructor
class NewClass(x:Int ,y: Int) {
  require(y > 0, "y must be positive") //precondition triggering an IllegalArgument if not Met

  def nb1 = x               //public method which is computed every time it is called
  def nb2 = y
  private def test(a:Int):Int= { a} //Private Method
  val nb3 = x+y   //Computed Only Once

  override def toString =
    x+","+y
}
val newClass = new NewClass(2,2)
println(newClass.nb1)
```

Here `toString` method does not take arguments but returns a String Value.
As `toString` methods override the `toString` from AnyRef, it is used with override Keyword

## Object Hierarchy in Scala

- `scala.Any` is the base type of all types. It has methods like `hasCode` `toString` that can be overridden.
- `scala.AnyVal` is the base type of all primitive types. (scala. Double, scala. Float )
- scala.AnyRef is a base type of all reference types. (alias of java.lang.Object, supertype of java.lang.String , scala.List or any user-defined types)
- scala. Null is a subtype of any `scala.AnyRef` (null is the only instance of type Null) , and `scala.Nothing` is a subtype of any other type without any instance.

## Companion Object in Scala

Scala does not have static methods or variables, but rather they have a singleton object or Companion object. Companion objects are compiled into classes that have static methods.

```scala
object HelloWorld {

def main(args:Array[String]){
println("Hello World")
}
}
```

---

*Originally published on nitendratech.com on 2019-01-21, updated 2022-06-06.*
