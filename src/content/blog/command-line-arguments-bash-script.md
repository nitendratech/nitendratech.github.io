---
title: "How to use Command Line Arguments in Bash Script?"
description: "How to pass command line arguments to a Bash shell script and access them inside it — the basic syntax, a worked example, and the special script parameters like $0, $1, $*, and $#."
pubDate: 2020-08-08
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

[Shell script](/blog/bash-script/) command line supports passing arguments(also called parameters) like any other scripting Language. Command-line arguments consist of one or more words, which are separated by balls blanks or TABS. In this blog post, we will see how arguments can be passed to scripts while calling and can be accessed within the script.

## Syntax and Example

The basic syntax for passing the arguments is given below.

```bash
bash bashLimArguments.sh arg1 args1 argsn
```

Let's take the below example where we will pass two arguments to the Shell script.

```bash
#!/bin/bash
# We will read 2 arguments from the command Line
echo "Script Name " $0
echo "First Argument " $1
echo "First Argument " $2

echo "Printing All Arguments At Once "
echo "$*"
```

Let's run the above script in the Shell.

```
%bash bashLimArguments.sh 1 2
Script Name  bashLimArguments.sh
First Argument  1
First Argument  2
Printing All Arguments At Once
1 2
```

## Script Parameters

We have the below options available when using command-line arguments with Shell script.

| Parameters | Description |
| --- | --- |
| `$0` | Name of the script which ran |
| `$1` to `$n` | `$1` is the first argument, $2 is the second argument till `$n` nth arguments. We need to enclose arguments using braces after the 10th argument like `${10}`, `${11}` and so on |
| `"$*"` | Values of all the arguments. All arguments need to be double-quoted |
| `$#` | Total number of arguments passed to script |
| `$?` | Exit status id of the last command executed. |
| `$!` | Process id of the last command |

---

*Originally published on nitendratech.com on 2020-08-08, updated 2022-05-26.*
