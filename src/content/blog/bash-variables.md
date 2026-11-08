---
title: "What are Bash Variables?"
description: "Bash variables explained — the rules for creating them, and the three types: local variables, environment variables, and positional parameters, with examples."
pubDate: 2020-11-05
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

Even though BASH is not a typed language like another programming language, it provides different ways to create variables. Variables in [Bash scripts](/blog/bash-script/) can only contain String or numerical values.

```bash
my_name='Nitendra'
```

There are some rules when creating the Bash variables.

- Shell script name starts with an underscore or an Alphabet.
- The bash script is case-sensitive. It means `my_name` and `MY_NAME` are two different variables.

## Types of Bash Variables

There are mainly three types of variables in a Bash script that we can use.

- Local variables
- Environment variables
- Positional Parameters Variable.

### Local Variables

This variable exists throughout the session of the script and is not accessible outside of that particular script. It can be declared using equals = sign can be retrieved using dollar $ sign. When you declare a variable in a shell script, you should not have a space between the variable name, `=` and the value.

Let's create the shell script with the below local variable.

```bash
blog_name="nitendratech" #Declaring the Variable with the value
echo $blog_name #Display the value of that variable using echo and `$` sign
unset blog_name   # Deleting the variable after use
```

When the above piece of code runs, we will see the below value.

```
~ % blog_name="nitendratech"
 ~ % echo $blog_name
nitendratech
 ~ % unset blog_name
```

Instead of this, we can use the local keyword to declare the variable. The main advantage of doing this is that the variable disappears when the function exits.

```bash
local blog_name_local="nitendratech"
```

### Environment Variables

Environment variables are accessible to any program or script running the current Shell session. They are global settings that control Shell's function as well as other Linux-based commands. They are created using the export keyword when declaring in the shell script. Depending upon your flavors of Linux you might have a file called `.bashrc` or `.zshrc` in your home location. It will have a list of environment variables that are available in that Linux session.

For Example, the MySql home path is set up in the below location.

```bash
cat ~/.zshrc

#Mysql home
export MYSQL_HOME=/usr/local/mysql
export PATH=$PATH:$MYSQL_HOME/bin
```

So if I use the echo command of Mysql home from a bash script or a terminal, I will be able to get the value of this variable.

```
 ~ % echo $MYSQL_HOME
/usr/local/mysql
```

There are many environment variables in bash that are already defined. Below are some of the common parameters that you can use after adding a dollar `$` sign.

| Variable | Description |
| --- | --- |
| HOME | Current users Home directory. The value of this variable is the same one when using tilde `~` expansion. |
| PWD | Current/Present working directory |
| RANDOM | Generates a Random number between 0 and 32767 |
| PATH | A list of a colon-separated list of Application Paths from the current Shell session |
| UID | The numeric, Real ID of the current user |

### Positional Parameters Variables

These variables are allocated when a function is evaluated and are given positionally. When we pass parameters to a shell script, the value of those parameters is read as a positional Variable.

```bash
sh positionalVariablesEx.sh param1 param2 param3 param3
```

The following tables give a list of positional parameters and other variables which have their special meaning when used inside of Bash script function.

| Parameter | Description |
| --- | --- |
| `$0` | Current Scripts Name |
| `$#` | Number of Parameters Passed not counting `$0` |
| `$1 ... $9` | Parameter List Elements from 1 to 9 |
| `$*` or `$@` | All Positional Parameters except $0 |

You can check the below command to run this [script](https://github.com/nitendragautam/devops_scripting/blob/master/bash/bash_variables_example.sh).

```
  ~ %chmod 754 bash_variables_example.sh
 ~ % sh bash_variables_example.sh 1 2 3 4 5
Number of Parameters Passed  5
Current Script Name  bash_variables_example.sh
All Positiona Parameters Exccept Zero  1 2 3 4 5
All Positiona Parameters Exccept Zero  1 2 3 4 5
FIve Input Parameters 1 2 3 4 5
Printing from print_param function
first_param 1
second_param 2
third_param 3
fourth_param 4
fifth_param 5
Unsetting the Fifth Parameters
Printing Global Variables
Home Directory /Users/nitendragautam
Preset Working Directory /Users/nitendragautam/github_projects/devops_scripting/bash
Random Number 16654
Displaying Path
/Library/Frameworks/Python.framework/Versions/3.7/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public
```

---

*Originally published on nitendratech.com on 2020-11-05, updated 2022-05-26.*
