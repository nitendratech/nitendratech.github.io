---
title: "Difference between Abstract Class and Interfaces in Java"
description: "The differences between abstract classes and interfaces in Java — method types, final and static variables, access modifiers, extends vs implements keywords, implementation, and multiple inheritance."
pubDate: 2019-10-13
category: "Core Tech & Programming"
subcategory: "Java"
draft: false
---

An abstract class is a [java](https://www.nitendratech.com/java/java-programming-language/) class that has one or more abstract methods (nobody). It cannot be instantiated and defines an interface that has to be implemented by all its subclasses.

## Abstract classes vs. Interfaces

The below table shows the difference between abstract classes and Interfaces in Java.

| Field | Abstract Class | Interface |
| --- | --- | --- |
| Method Type | Abstract ,Non-Abstract ,default and Static | Abstract Method |
| Final Variable | final and non-final variable | Variables final by Default |
| Variable Type | final, non-final, static and non-static variables | only static and final variables |
| Access Modifiers | It can have class members like private, protected, etc. | All the Members of a Java interface are public by default |
| Keywords | abstract class can be extended using keyword “extends”. | A Java interface can be implemented using keyword “implements” |
| Implementation | An abstract class can provide the implementation of the interface. | Interface can’t provide the implementation of an abstract class. |
| Multiple Implementation | An abstract class can extend another Java class and implement multiple Java interfaces | An interface can extend another Java interface only. |

---

*Originally published on nitendratech.com on 2019-10-13, updated 2022-06-05.*
