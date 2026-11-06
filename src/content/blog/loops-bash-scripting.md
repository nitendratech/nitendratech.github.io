---
title: "Loops in Bash Scripting"
description: "Loops in Bash scripting explained — the for, while, and until loops, when to use loops for repeated operations on files and tasks, and a worked example for each loop type."
pubDate: 2020-04-25
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

Loops in [Bash Scripting](https://www.nitendratech.com/linux/bash-script/) are the process of repeating the same script or logic many numbers of times. It works best when it is used for any of the below operations.

- Performing the same set of operations on a different number of input files (e.g., counting the number of records for all the files present in a certain directory)
- Running the same set of operations at a certain interval (e.g., scanning directories for new files every 5 minutes)
- Performing the same operation for a given number of items. (e.g. Calculating table counts for a given number of tables)

## Types of Loops in Bash

There are mainly three ways to create loops in bash.

- For Loop
- While Loop
- Until

## For Loop

A `for` loop is classified as an iteration statement. It is the repetition of a process within a bash script. It iterates through a list and executes an action at each step.

Let's take an example where we will print Welcome and number 5 times. You can directly run in any Linux command line or in bash script.

```bash
$for number in {1..5};do echo "Welcome $number" ; done
Welcome 1
Welcome 2
Welcome 3
Welcome 4
Welcome 5
```

When the word `number` is being defined at the top of for loop, it does not have any `$` prepended. We only prepend the dollar `$` sign when we want to access the variable. That's why we need to prepend the dollar `$` in the do block when we want to access it.

## While Loop

The **while** executes a piece of code if the control expression is true, and only stops when it is false (or an explicit break is found within the executed code. Below is the Syntax of the While loop.

```bash
## Syntax
while command
do
   Statement(s) to be executed if the command is true
done
```

```bash
#!/bin/bash
count="0"
max="10"
while [ $count != $max ];
do count=`expr $count + 1`
        echo "We are now at number: $count"
done
exit 0
```

## Until

The **`until`** loop is almost equal to the while loop, except that the code is executed while the control expression evaluates to false.

Below is the syntax of Until loop.

```bash
## Syntax
until command
do
   Statement(s) to be executed until the command is true
done
```

---

*Originally published on nitendratech.com on 2020-04-25, updated 2022-06-06.*
