---
title: "Most asked  Java Interview Questions"
description: "Core Java interview questions and answers covering what Java is, its features and platforms, primitive data types, OOP concepts including classes, objects, abstraction, polymorphism, inheritance and encapsulation, and Java variables and keywords."
pubDate: 2022-01-31
category: "Core Tech & Programming"
subcategory: "Interview Questions"
draft: false
---

The following section has the important core Java Interview questions and answers that will help you prepare for the next Java Interview.

**Question: What is Java?**

**Answer: **Java is a general-purpose strongly typed computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. Here strongly typed means every variable/expression has a type and every type is strictly defined. It is owned by Oracle and is being used in more than 3 billion devices.

Java is inspired by C++ and C programming languages. It derives syntax from C programming, whereas object-oriented features of Java are derived from C++. The set of instructions written in Java is converted to Byte code, which is executed by the Java Run time system called the Java Virtual Machine(JVM). When a Java code is converted to byte code, it can be run in multiple environments as long as JVM exists on that platform. Java does not care whether the underlying architecture is Windows or Linux.

**Question: What are the Features of Java?**

**Answer: **Some features include Object-Oriented, Platform Independent, Robust, Interpreted, and Multi-threaded.

- **Architectural Neutral**

Java compiler generates an architecture-neutral object file format, which makes the compiled code to be executable on many processors, with the presence of a Java runtime system.

When Java is compiled, it is not compiled into the platform-specific machine; but rather into platform-independent byte code. This byte code is distributed over the web and interpreted by a Java Virtual Machine (JVM) on whichever platform it is being run. It can run on Windows, Mac, Linux, Raspberry Pi, etc.

- **High Performance**

Java uses the Just-In-Time(JIT) compiler to enable high performance. Just-In-Time compiler is a program that turns Java bytecode, which is a program that contains instructions that must be interpreted into instructions that can be sent directly to the processor.

- **Dynamic**

It is designed to adapt to an evolving environment. Java programs can carry an extensive amount of run-time information that can be used to verify and resolve access to objects on run-time.

**Question: Where is Java being used?**

**Answer: **Below are some of the common verticals where Java is used.

- Web-Based Applications
- Retail Sector
- Research and Development
- Android Applications (Most Android-based applications use APIs based on Java or use software that is written in Java)
- NASA-based Mars Rover mission powered by Java
- Financial Sectors (Wells Fargo/ Bank of America/Fidelity Investment)
- Government Institutions like the CIA/NASA/FBI
- Several Mission-Critical Applications
- Desktop-based GUI (Graphical User Interface) Applications
- Games

**Question: What are the supported platforms by Java?**

**Answer: ** Java runs on all the major platforms. Some of them are given below.

- macOS
- Windows
- Unix/Linux
- Ubuntu/ CentOS/ Sun Solaris

**Question: What are the different Data types in Java**

**Answer:** Java has 8 primitive data types which are given below.

| **Primitive Type** | **Length in Bytes** | **Description** |
| --- | --- | --- |
| byte | 1 byte | Whole-valued signed numbers from -128 to 127 |
| short | 2 bytes | Whole valued signed numbers from -32,768 to 32,767 |
| int | 4 bytes | Whole valued signed numbers from -2,147,483,648 to 2,147,483,647 |
| long | 8 bytes | Whole valued signed numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float | 4 bytes | Supports Floating Point fractional Numbers. It can store up to storing 6 to 7 decimal digits. |
| double | 8 bytes | Supports Floating Point fractional Numbers. It can store 15 decimal digits. |
| boolean | 1 bit | Represents true/false values |
| char | 2 bytes | Represents symbols in a character set(ASCII), like Single letters and numbers. |

**Question: Why is Java Platform Independent?**

**Answer:** Java is one of the most popular programming languages as it is platform-independent. Once a runtime engine called Java Runtime Environment (JRE) is installed Java applications can run on a desktop running Windows or Mac or Linux/ Unix server. Once a Java compiler compiles the code and converts it into a byte code, it can run on any platform as Byte code is platform-independent.

**Question: What is Object-Oriented Programming(OOP)?**

**Answer:** Object-Oriented Programming(OOP) is a programming methodology that organizes a program around the data(object) and an interface to that data. It allows users to create objects and methods to handle that data. Users can manipulate the objects and create applications.

**Question: What are the building block of Object-oriented Design?**

**Answer:** OOP consists of a fundamental building block that needs to be understood before diving over the OOP pillars. There are Classes, Object, Field, and Method.

**Question: What do you understand by Class in Java?**

**Answer: **A class is a template or blueprint for creating objects at run time. It is a logical entity that is a collection of objects. The class consists of fields and methods. It contains the collection of data and various operations that can be performed on the data.

```java
class Dog {
public static void main(String[] args){
System.out.println("Bark");
}
}
```

**Question: What do you understand by Object in Java?**

**Answer:** An object is an instance of a class. It is a physical and logical entity that has a state and behavior. A class is defined in source code whereas an object exists at runtime.

Let’s consider Dog as a class that has the dog traits represented by a function `bark()`. We can have a separate object for German Shepherd and Labrador having the same behavior (`bark()` in this case).

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

**Question: What is Field in Java?**

**Answer**: A field is a variable used to store data.

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

**Question: What do you understand by Method in Java**

**Answer: **A method is a function defined inside a class. It contains executable code and has access to all the fields of a class. It can modify a state of a class and can be applied across all the instances of the class.

```java
class Dog {

public void bark(){
     System.out.println("Bark");
}
}
```

In the example given above `bark` is a method inside `Dog` class.

**Question: What are the different Object-Oriented based Languages?**

**Answer:** There are many programming languages based on object-oriented design. I have listed down some of the popular ones.

- Java
- Scala
- Python
- JavaScript
- C ++
- C#
- Swift

**Question: What are the Four Principles/Pillars of Object-Oriented-Programming (OOP) Design?**

**Answer: **There are four main principles or pillars which comprise object-oriented programming. They are Abstraction, Polymorphism, Inheritance, and Encapsulation. There are also called APIE in short form.

**Question: What do you understand by Abstraction?**

**Answer:** It is used to hide internal details but only exposes the functionality of code. Abstract class and Interface are used to achieve abstraction in Java.

Example: When people drive a car, they don’t want to be overwhelmed by the complexity of the car’s parts. People can ignore the minute details regarding how engines, brakes, and transmissions work. They can instead focus on driving rather than the car’s internals. That’s exactly how abstraction works in an object-oriented programming world.

**Question: What do you understand by Polymorphism?**

**Answer: **In polymorphism, we define one or more classes as children of some parent class. These classes provide some different implementations for the same method(s). We use method overloading and method overriding to achieve polymorphism in Java.

**Question: What do you understand by Inheritance?**

**Answer: **It is a mechanism in which one of the application objects acquires all the properties and behaviors of the parent object. Using Inheritance, the properties of one class can be used by another class.

**Question: What do you understand by Encapsulation?**

**Answer:** Encapsulation is the ability to package data and related behavior into a single unit and hide them from external elements. It can be considered as a protective wrapper that prevents the code from being accessed by other codes arbitrarily. The application can control access to the code and data inside the interface.

It hides the data of a class from an object. Therefore encapsulation is also referred to as data hiding. The main benefit of encapsulation is the ability to modify our implemented code without breaking the code of others who use our code.

A Java class is an example of encapsulation.

**Question: What are Java Variables?**

**Answer: **Variables in Java are defined as a basic unit of storage that defines the type and scope of the variable. Variables in Java must be declared before they can be used. We can use the below syntax to declare the variable.

```java
<DATA_TYPE> VARIABLE_NAME = VALUE_OF_VARIABLE;
```

Let’s see an example in Java.

```java
String myName = "NitendraTech";
int myAge = 6;
```

**Question: What are the three properties of the Variable?**

**Answer:** A variable has three properties.

- Memory Location to store the value
- Type of data stored in the memory Location
- Name that is used to refer to the memory location

**Question: What is a Volatile Keyword in Java?**

**Answer: **When we declare a variable in Java using a volatile keyword, its value is not cached in the local thread but in the main memory. All the reads from this variable will go straight into “main memory”.so the variable with the volatile keyword is read/written from the computer’s main memory but not from the CPU cache.

**Question: What is a transient variable?**

**Answer: **Transient variable in Java is a variable that is not serialized.

**Question: What is a Unicode?**

**Answer:** Unicode is an international character set that can represent the characters found in Human Language. It is a text encoding standard used in Java to represent different characters and symbols. Unicode contains ASCII(American Standard Code for Information Interchange) as well as other characters from around the world For example, A Java app can use Unicode for the data shown in different languages like Chinese or Mongolia.

**Question: What is the final class in Java?**

**Answer:** Final classes in Java cannot be inherited and created. Once we create the final class, the methods implemented by this class cannot be overridden.

**Question: What do you mean by anonymous class?**

**Answer: **An anonymous class is an inner class in Java that does not have a name and can be instantiated and declared at the same time.

**Question: What are some Java keywords that are different from C, and C++?**

**Answer: **Some unique keywords based on Java are import, super, finally, etc.

**Question: What is a static variable?**

**Answer:** Static variables are the class variables that are declared with the static keyword, outside of a method, constructor, or block. It is used so that the same variable can be used in a method or a class. So it’s also a global variable.

```java
static String CAPITAL_JAPAN="TOKYO";
```

**Question: Do we need to import the package `java.lang.package` when do we write Java code?**

**Answer:** We don’t need to import this package in Java as it is important by default.

**Question: What does Deep copying of a Java object mean?**

**Answer: **When we perform a deep copy of Java objects, java performs deep copies of Java objects and creates a copy of the fields.

---

*Originally published on nitendratech.com on 2022-01-31, updated 2023-07-10.*
