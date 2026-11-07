---
title: "Java Data Types"
description: "The data types in Java — the eight primitive types (byte, short, int, long, float, double, boolean, and char) with their sizes and ranges, and the non-primitive reference types such as Strings, Arrays, Classes, and Interfaces."
pubDate: 2017-11-01
category: "Core Tech & Programming"
subcategory: "Java"
draft: false
---

As [Java](https://www.nitendratech.com/java/java-programming-language/) is a strongly typed language, everything has a type in Java. Here, strongly typed means every variable/expression has a type and every type is strictly defined. Java compiler checks all the expressions and variables to make sure that the types are compatible without any errors. Java has two types of data types, Primitive and Non-Primitive type.

## Primitive Data Types

Primitive data types are predefined and pre-named by the language. They are commonly referred to as simple types. Java has 8 primitive data types.

| Primitive Type | Length in Bytes | Description |
| --- | --- | --- |
| byte | 1 byte | Whole-valued signed numbers from -128 to 127 |
| short | 2 bytes | Whole-valued signed numbers from -32,768 to 32,767 |
| int | 4 bytes | Whole valued signed numbers from -2,147,483,648 to 2,147,483,647 |
| long | 8 bytes | Whole valued signed numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float | 4 bytes | Supports Floating Point fractional Numbers. It can store up to storing 6 to 7 decimal digits. |
| double | 8 bytes | Supports Floating Point fractional Numbers. It can store 15 decimal digits. |
| boolean | 1 bit | Represents true/false values |
| char | 2 bytes | Represents symbols in a character set(ASCII), like Single letters and numbers. |

### Integers Data Type

#### byte

Java Language has defined four integers: byte, short, int and long. All of these numbers are signed and can store both positive and negative numbers.

byte is the smallest integer type. The signed 9-bit type has ranged from -128 to -127. Developers can use byte datatype instead of using intwhen they are certain of the numerical value to be between -127 and 128.

They are useful when working with data streams coming from network or file operations. This data type is useful for working with binary data, which does not have a direct data type in Java.

```java
// Declare two bytes variable a and b
byte a, b;
```

```java
byte newNum = 100;
System.out.println(newNum); //Prints 100
```

#### short

short is the signed 16-bit data type having range from -32,768 to 32,767.

```java
short shortNum =200;
System.out.println(shortNum); //Prints 200
```

#### int

int is one of the most widely used integer data types in Java. It is a signed integer that can range from –2,147,483,648 to 2,147,483,647. This datatype is commonly used to index arrays and in control loops. It is the best choice when an integer is needed in an application.

```java
int num1 =30;
int num2 =40;
int tSum = num1+num2;
System.out.println(tSum); // prints 70
```

#### long

It is a signed 64-bit type used for storing numerical values. It is used in situations when the int data type is not large enough to hold the desired value. It can store whole number values ranging from -9223372036854775808 to 9223372036854775807.

```java
long longNum = 990000000000000L;
System.out.println("Long Num: "+longNum);// Prints Long Num: 990000000000000
```

## Floating Point Data Type

Floating-point numbers are used when numbers with decimals, such as 1.23 or 3.14. There are two kinds of floating-point types, namely float and double.

### float

The Float Data type has a single-precision value and uses 32 bits of storage. This data type is useful when we need decimal numbers with less precision.

```java
float floatNum = 3.1415f;
System.out.println("Float Number: "+floatNum);
```

### double

This data type uses 64 bits to store a value and provides double precision. It is the best choice when we need to maintain precision to the highest level over iterative calculations using large numbers.

```java
double doubleNum = 19.9863836399839412d;
System.out.println("Double Number: "+doubleNum); //prints 19.98638363998394
```

## boolean

This data type is used to store logical values. It has only two values, true or false.

```java
boolean isThisTrue = true;
boolean isThisFalse = false;

System.out.println(isThisTrue);
System.out.println(isThisFalse);
```

## char

This data type is used to store a single character. The single character needs to be surrounded by a single quote.

```java
char nChar ='n';
System.out.println("Char: "+nChar); //Prints n
```

Java uses Unicode to represent characters. Unicode defines the various international characters that represent all the characters found in human languages.

```java
char b = 66;
char g = 71;
System.out.println(b); // Prints B
System.out.println(g); prints G
```

Check this [website](https://www.asciitable.com/) for all the available ASCII codes.

## Non-Primitive Data Types

They are not defined by the language, but rather are created by the person writing the code.

They are also called “reference variables” or “object references” as they refer to a memory location where data is stored.

Examples are Strings, Arrays, Classes, and Interfaces. We will see these topics in detail in upcoming blogs.

```java
String myName = "Nitendra Gautam";

System.out.println("My Name is :"+myName);
```

---

*Originally published on nitendratech.com on 2017-11-01, updated 2024-02-18.*
