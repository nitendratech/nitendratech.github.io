---
title: "Options in Scala"
description: "What the Option data type is in Scala — Some and None — and how to use it with flatMap, pattern matching, and Map lookups to avoid NullPointerException."
pubDate: 2019-05-08
category: "Core Tech & Programming"
subcategory: "Scala"
draft: false
---

An Option is a data type in Scala that indicates the presence or absence of some data. It can be an instance of either a case class called Some or a Singleton object called None. An instance of Some can store data of any type. An instance of `None` the object represents the absence of data.

One of the common uses of this is to prevent from getting an `NullPointerException` in Scala. When mapping an Option without a value (None), the mapping function will just return another None.

```scala
//Assign cost as Option which means it can be either None when empty
scala> val cost: Option[Double] =None
cost: Option[Double] = None

scala> val fee = 1.25
fee: Double = 1.25

scala> cost.flatMap { x => if( x> 1.00) None else Some(x+fee) }
res18: Option[Double] = None

//Assigning value to cost after which its value will be 0.5
scala> val cost = Some(0.5)
cost: Some[Double] = Some(0.5)

scala> cost.flatMap { x => if( x> 1.00) None else Some(x+fee) }
res19: Option[Double] = Some(1.75)
```

Another example of Option.

```scala
def matchColorCode(color: String) : Option[Int] = {

 color match {
 case "red" => Some(1)
 case "blue" => Some(2)
 case "green" => Some(3)
 case _ => None
     }
}

//color "orange" is not defined
val code = colorCode("orange")

code match {

 case Some(c) => println(" code for orange is: "+c)
 case None => println(" Code not defined for orange")
}
```

Let's look at another value.

```scala
val cMap = Map("a" -> 42 ,"b" -> 43)


def getMapValues(keyValue: String):String = {
   cMap get keyValue match {  //Gets the Value which is passed
   through the Function
   case Some(mb) => "value found: " +mb
   case None => "No Value Found"
 }

}

getMapValues("b") //Value Found 43
getMapValues("c") //No Value Found
```

Another way to get Map Values using the combinator method of the `Option` Class

```scala
def getMapValuesC(s:String)= cMap.get(s).map("Value Found: "+ _)
.getOrElse("No Value Found")

getMapValuesC("a")  //Gets the Value 42
```

---

*Originally published on nitendratech.com on 2019-05-08, updated 2022-06-06.*
