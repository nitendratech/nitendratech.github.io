---
title: "Functions in Bash Script"
description: "How to create and use functions in a Bash script — the two definition syntax forms, a simple helloWorld function, and functions that take parameters."
pubDate: 2019-06-23
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

A function is a small piece of code or command which can be used multiple times in a script. A function in bash can be created using the `function` keyword. It is one of the best ways to make a [Bash script](/blog/bash-script/) modular, as small chunks of code are easier to develop and maintain.

## The syntax for function creation.

To define a function, you can use either one of two forms, as given below.

```bash
# First form
 function functname{
 shell commands
}

# Second Form
 functname ()
 {
 shell commands
}
```

There is no functional difference between the two. When we define a function, we are telling the shell to store its name and definition in memory. If we want to run the functions later, we can just type in its name followed by any arguments, as if it were a shell script.

## Simple Function in Shell

Let's create a simple script named `helloWorld.sh`

```bash
#!/bin/bash

function helloWorld(){
echo "Hello World!"
}

#Calling Function
helloWorld
helloWorld
```

Make the script executable by using `chmod u+x hello_world.sh` and run the script.

```bash
~$ chmod u+x helloWorld.sh
:~$ ./helloWorld.sh
Hello World!
Hello World!
```

## Functions with Parameters

Let's create a bash script named `function_with_param.sh` which takes parameters.

```bash
#!/bin/bash

## Function which takes two parameters
function printMyName(){
first_name=$1
last_name=$2
echo "My Name is $first_name $last_name"

}

printMyName Nitendra Gautam
```

```bash
~$ chmod u+x  function_with_param.sh 
 :~$ ./ function_with_param.sh 
 My Name is Nitendra Gautam
```

---

*Originally published on nitendratech.com on 2019-06-23, updated 2022-06-06.*
