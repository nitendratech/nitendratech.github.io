---
title: "Arithmetic Operators in Bash"
description: "The operators available in Bash scripts — arithmetic, assignment, bitwise, logical, and relational operators — with their descriptions and examples of arithmetic operations in the shell."
pubDate: 2021-01-17
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

[Bash](https://www.nitendratech.com/linux/bash-script/) provides different operators that we can use in our Bash Script.

- **Arithmetic**
- **Assignment**
- **Bitwise**
- **Logical**
- **Relational**

## Arithmetic Operator

Bash provides multiple operations through which we can perform Mathematical/Arithmetic operations on [variables](https://www.nitendratech.com/linux/bash-variables/).

| Operator | Description |
| --- | --- |
| `+` | Addition |
| `*` | Multiplication |
| `-` | Subtraction |
| `/` | Divison |
| `%` | Modulo |
| `**` | Exponentiation |
| `+=` | Plus-Equal(Increments a Variable value) |
| `*=` | Times-Equal(Multiply a Variable value) |
| `-=` | Minus-Equal(Decrement a Variable value) |
| `/=` | Slash-Equal(Divide a Variable Value) |
| `%=` | Mod-Equal( Remainder of Dividing a Variable) |

Let's see some of the examples below.

```bash
# Addition
~$ echo $[5+5]
10

# Subtraction
~$ echo $[ 10 -3 ]
7

# Multiplication
~$ echo $[ 10 * 3 ]
30

#  Division
~$ echo $[10/5]
2

# Modulus Operation
~$ echo $[10%5]
0

~$ echo $[10%3]
1

## Another way of using the internal Calulator.
~$ echo $((10 + 5 ))
15
```

## Assignment Operator

Bash provides mainly equals to `=` as an assignment operator.

| **Operator** | **Description** |
| --- | --- |
| `=` | Initialize/Change the value of the variable assigned |

## Bitwise Operator

Bitwise operators process bits or bit patterns, unlike other operators.

| **Operator** | **Description** |
| --- | --- |
| `<<` | Bitwise Left Shift |
| `<<==` | Left-Shift-Equal |
| `>>` | Bitwise Right Shift |
| `>>==` | Right-Shift-Equal |
| `\|` | Bitwise OR |
| `\|=` | Bitwise OR-Equal |
| `&` | Bitwise AND |
| `&=` | Bitwise OR-Equal |
| ~ | Bitwise NOT |
| ^ | Bitwise XOR |
| `^=` | Bitwise XOR-Equal |

## Logical Operator

| **Operators** | **Description** |
| --- | --- |
| ! | NOT |
| && | AND |
| \|\| | OR |

## Relational Operator

These Operators work on two operands or Variables and return True or False accordingly. Some of this operator like `lt` can be used in `if` statements.

| **Operator** | **Description** |
| --- | --- |
| `==` or `-eq` | Not Equal. The result is True if two operands/variables is not equal, else gives a False |
| `!=` or `-ne` | Less Than. The result is true if the First Operand/Variable is less than the Second Operand, else gives False |
| `<` or `-lt` | Equals to. The result is True if two operands/variables are equal, else gives a False |
| `<=` or `-le` | Greater than or equal. The result is true if the First Operand is greater than or Equal to the Operand Second |
| `>` or `-gt` | Less than or equal. The result is true if the First Operand/Variable is less than or equals to The second Operand, else Return False |
| `>=` or `-ge` | Greater than or equal. The result is true if the First Operand is greater than or Equal to the Operand Second |
| `-Z` | Checks if the value of an operand is null or not |

When we compare Strings, it is recommended to put the variables into double quotes `"` so that it minimizes the error if the variable is null or contains paces.

Example:

```bash
name1="nitendratech"
name2="nitendratech"

if [ "$name1" == "$name2" ]
```

---

*Originally published on nitendratech.com on 2021-01-17, updated 2024-02-18.*
