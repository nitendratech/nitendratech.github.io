---
title: "Data Types and Variables in R"
description: "An introduction to data types and variables in R, covering numeric, character, factor, and logical types, data structures, vectors, variable assignment, and order of operations."
pubDate: 2018-08-09
category: "Core Tech & Programming"
subcategory: "R Programming"
draft: false
---

R is a free software environment for statistical computing and graphics. It compiles and runs on a wide variety of UNIX platforms, including Windows and macOS. Everything in R is an object. In this post, we will see the data types and variables in the R programming language.

## Variable Types

- Character – Strings
- Integer- Integers
- Numeric – Integers and Fractions
- Logical -Boolean
- Complex – Complex numbers
- Factor -Categorical variable where each label is a category

## Data Structures in R

R intuitively decides variable type in the background and assigns a class to the variable. R has a variety of [data](/blog/data-explained/) types and is case-sensitive when defining variables. A variable named ‘a’ is not the same as ‘A’.

- Atomic Vectors (numerical, Integer, character, logical)
- Matrix
- Data Frames
- Lists
- Factors

Here Atomic means

R provides many functions to examine features of vectors and other objects.

- `class()` : Gives information about the object on a high level
- `typeof()`: Gives information about the object’s data type on low level
- `length()`: Gives the length of the object
- `attributes()`: gives the information about the metadata if the object has

## Variable in R

Variables in R are typically assigned using <- but can also be assigned using <- or -> ,as in x <-1 or 1 -> x

```r
#Create variables in R and assign some value
x <- 139 +121
x

# Overwrite variables in R
x <- x/60
x

# Assign Character Values
myName <- "Nitendra Gautam"

"Nitendra Gautam" -> newName

typeof(myName) # Gives the data type of myName

# To remove the variable from Memory use rm(variable_name) command
# Removes the variables x from Memory 
rm(x)
```

## Order of Operation in R

In order to put emphasis on the order of operations, use the small bracket.

For example : `totalHours <- (139 + 121) /60`

## Numeric Data Type

It includes the number that contains decimal points which is the default.

```r
# Assign a value of 3 to  variable a
a <- 3

print(a)
# Check Data Types in R 
paste(" Class of A is ", class(a))

# Convert numeric data type into integer
b <- as.integer(a)
paste("Class of B is " , class(b ))
```

## Character Data Type

```r
d <-"Nitendra Gautam"
print(d)
paste("Class of d is ",class(d))

e <- '12345'
print(e)
paste(" class of e is ",class(e))
```

## Factors Data Type

Factors data type refers to the qualitative variables. An example can be “Good”” and “Bad”.

```r
factorVariable <- factor(c("male","female"))

print(factorVariable)

#Factors Levels
levels(factorVariable)

#Class of the factor
class(factorVariable)

#Class of Factor Levels
class(levels(factorVariable))

#Number of Levels
nlevels(factorVariable)
```

## Logical data Type

```r
k <- "TRUE"
class(k)

# Create a factor variable with 3 Levels and 6 Items
sV <- factor(c("good","bad","ugly","good","bad","ugly"))

class(sV)

levels(sV)
```

## Vectors

Vector is a type of object which is used to store multiple data of same data type.

Technically, vectors can be one of two types:

- Atomic vectors
- Lists

In general, vector refers to the atomic types, not the lists. Vector can have character, integer, numeric or logical value.

```r
v1 <- c(1,2,5.3,6,-2,4,5) # create a Numeric Vector 
v2 <- c("one","two","three","four","five") # Character Vector
v3 <- c(TRUE,FALSE,TRUE,FALSE) # Logical Vector

# Refer to the element of the vector using Subscript 
v1[c(3,4)]  #Third and Fourth Elements of Vector

v1[4] # Get Fourth Element from Vector V1

v1[2:6]  # Get elements from 2nd to 6th element 

class(v2) # Class of Character Vector

v2[2:5] # Get elements from second to 5th element

 typeof(v2)  #Gives the types of Vector V2
```

## Adding Elements in character Vector

```r
z <-c("Sam","Ram","Hari")

## Add one elements in Vector
z <- c(z,"Mike")

## Add Another elements in Vector
z <- c(z,"Shyam")
```

## Given a Large Vector find the first and Last Element of the Vector

```r
ab <- c(1:50) # Large vector from 1 to 50

ab[1] # Get the first Element 
ab[length(ab)] # Get the last element which will be at the index equal to length of Vector

ab[c(ab[1],ab[length(ab)])]
```

## References

[R Data Structures](https://swcarpentry.github.io/r-novice-inflammation/13-supp-data-structures/)

[R Project](https://www.r-project.org/)

---

*Originally published on nitendratech.com on 2018-08-09, updated 2024-08-03.*
