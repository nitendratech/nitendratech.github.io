---
title: "What are Object-Oriented Programming concepts? OOP Explained"
description: "What object-oriented programming is, its building blocks — class, object, field, and method — and its four pillars of abstraction, polymorphism, inheritance, and encapsulation."
pubDate: 2017-04-28
category: "Core Tech & Programming"
subcategory: "Programming Concepts"
draft: false
---

In my 10+ years at AT&T and Verizon, I've seen thousands of lines of 'spaghetti code' break under the weight of petabyte-scale data. OOP isn't just about syntax; it's about Encapsulation—ensuring that a change in your 'Data Ingestion' class doesn't crash your 'Fraud Detection' model.

Object-Oriented Programming (OOP) is a programming methodology that organizes a program around the data (object) and an interface to that data. It allows users to create objects and methods to handle that data. Users can manipulate objects and create applications.

Before going into the four pillars of OOP, we need to understand the basic building blocks of OOP.

![](/images/OOP_Concept.png)

**Fig: OOP Concepts**

## The building block of the Object-oriented Design

OOP consists of a fundamental building block that needs to be understood before diving over the OOP pillars. There are Class, Object, Field, and Method.

### Class

A class is a template or blueprint for creating objects at run time. It is a logical entity that is a collection of objects. The class consists of fields and methods. It contains the collection of data and various operations that can be performed on the data.

```java
class Dog {
public static void main(String[] args){
System.out.println("Bark");
}
}
```

### Object

An object is an instance of a class. It is a physical and logical entity that has a state and behavior. A class is defined in source code whereas an object exists at runtime.

Let's consider `Dog` a class that has the dog traits represented by a function `bark()`. We can have a separate object for German Shepherd and Labrador having the same behavior (`bark()` in this case).

```java
class Dog {

public void bark(){
System.out.println("Bark");
}

public static void main(String[] args){
Dog dogObject = new Dog(); // Creating a object named dogObject
dogObject.bark(); // Calling the method bark
}
}
```

### Field

A field is a variable used to store data.

```java
class Dog {
public static void main(String[] args){

     String dogName = "German Shepherd"; // String Variable or Field
    int dogAge = 2;  // Numeric Variable or Field
    System.out.println("Dog Name: "+dogName);
    System.out.println("Dog Age: "+dogAge);
}
}
```

### Method

A method is a function defined inside a class. It contains executable code and has access to all the fields of a class. It can modify a state of a class and can be applied across all the instances of the class.

In the example given above `bark` is a method inside `Dog` class.

## Four Principles/Pillars of Object-Oriented-Programming (OOP) Design

There are four main principles or pillars which comprise object-oriented programming. They are Abstraction, Polymorphism, Inheritance, and Encapsulation. They are also called APIE in short form.

### Abstraction

It is used to hide internal details, but only exposes the functionality of the code. Abstract class and interfaces are used to achieve abstraction in Java.

Example: When people drive a car, they don't want to be overwhelmed by the complexity of the parts that constitute the car. People can ignore the minute details regarding how engines, brakes, and transmissions work. They can instead focus on driving rather than the car internals. That's exactly how abstraction works in an Object-oriented programming world.

### Polymorphism

In polymorphism, we define one or more classes as children of some parent class. These classes provide some different implementations for the same method(s). We use method overloading and method overriding to achieve polymorphism in Java.

### Inheritance

It is a mechanism in which one of the application objects acquires all the properties and behaviors of the parent object. Using Inheritance, the properties of one class can be used by another class.

### Encapsulation

Encapsulation is the ability to package data and related behavior into a single unit and hide them from external elements. It can be considered as a protective wrapper that prevents the code from being accessed by other codes arbitrarily. The application can control access to the code and data inside the interface.

It hides the data of a class from an object. Therefore, encapsulation is also referred to as data hiding. The main benefit of encapsulation is the ability to modify our implemented code without breaking the code of others who use our code.

A Java class is an example of encapsulation.

## Object-Oriented based Languages

There are many programming languages based on object-oriented design. I have listed down some popular ones.

- [Java](https://www.nitendratech.com/java/java-tutorials/)
- [Scala](https://www.nitendratech.com/scala/scala-tutorials/)
- Python
- JavaScript
- C ++
- C#
- Swift

## Conclusion

In this blog post, we read about the concept of object-oriented programming and the building blocks of object-oriented design. We also read about the four pillars of object-oriented design and the programming language that follows the object-oriented paradigm.

Please share the article on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2017-04-28, updated 2026-03-25.*
