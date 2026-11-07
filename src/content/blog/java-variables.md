---
title: "What are Java Variables?"
description: "What Java variables are, their three properties — memory location, data type, and name — how to declare and initialize them, and the class-level and method-level scopes, with a complete example."
pubDate: 2021-03-02
category: "Core Tech & Programming"
subcategory: "Java"
draft: false
---

Variables in Java are defined as a basic unit of storage that defines the type and scope of the variable. A variable has three properties.

- Memory Location to store the value
- Type of data stored in the memory Location
- Name that is used to refer to the memory location

Variables in Java must be declared before they can be used. We can use the below syntax to declare the variable.

```java
Data_Type Identifier [ =value] [,identifier [=value ] ...];
```

Here, a Data Type is one of Java's atomic data types Class or an interface. The identifier is the variable name.
Variables are initialized by specifying the equal sign and a value.

## Scope and Lifetime of Variable

In Java Programming Language, Variables have two scopes. They are defined by the below levels.

- Class
- Method

If a variable is defined in a method, it does not have the scope outside that method.

Let's take a look at the below variables which are defined on.

```java
package com.nitendratech.tutorials;
public class Variables {
  public static String globalVariable ="Hello World"; //Globally Defined Variable

  public static void methodScopeForVariable(){
    String myName="Nitendra Gautam"; //Variable defined Within the method
    System.out.println(myName);
    System.out.println(globalVariable);
  }
  public static void main(String[] args){
    int var1, var2, var3; // Declaring three variables var1,var2 and var3
    int variable1 = 22; // Declaring and Initializing one Variable
    int var4 = 3, var5, var6 = 5; // Declare var5 but initialize var4 and var6
    byte z = 22;
    double shoppingBill = 120.29;
    char characterValue = 'x'; // Variable characterValue has value of X
    String myWebsite ="nitendratech.com";

    methodScopeForVariable();
    System.out.println(globalVariable);
  }
}
```

---

*Originally published on nitendratech.com on 2021-03-02, updated 2022-06-05.*
