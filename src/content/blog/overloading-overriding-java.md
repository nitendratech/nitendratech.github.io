---
title: "Difference between Overloading Vs Overriding in Java"
description: "The difference between method overloading and method overriding in Java — same method name with different parameters within one class, versus a child class providing its own implementation of a parent class method — with code examples."
pubDate: 2019-10-20
category: "Core Tech & Programming"
subcategory: "Java"
draft: false
---

This is one of the most common interview questions of all time when applying for a [Java](/blog/java-programming-language/) developer position. We will see the difference between Overloading and Overriding in this blog post.

## OverLoading

It occurs when two or more methods in the same class have the same method name but different parameters.

```java
public class Shape {

public void drawCircle() {
System.out.println("Drawing Circle");
}
//Overloading Method with Parameters
public void drawCircle(int radius){
System.out.println(" Drawing Circle With radius"+r);
}}
```

## Overriding

It means when two methods have the same name and parameters, where one method is in the parent class and the other method is in the child class. It allows a child class to provide a specific implementation of a method that is already provided in the parent class.

```java
class Shape{
public void drawCircle(){
System.out.println("Drawing Circle from Shape Class");
}
class Circle extends Shape(){

public void drawCircle(){
System.out.println(" Drawing Circle from Circle CLass");
}}}

public class OverridingTest{

public static void main(String [] args){
Shape shape = new Circle();
shape.drawCircle();
}}
```

Above example prints >Drawing “Circle from Circle Class “

---

*Originally published on nitendratech.com on 2019-10-20, updated 2022-06-05.*
