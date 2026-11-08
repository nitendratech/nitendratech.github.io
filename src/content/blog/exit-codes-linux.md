---
title: "What are Exit Codes on Linux?"
description: "Exit codes in Linux explained — the 0–255 return code every command leaves behind, how to read it with the $? variable in bash, a table of the commonly used codes, and a worked shell script example."
pubDate: 2019-04-06
category: "Core Tech & Programming"
subcategory: "Linux"
---

An exit code, sometimes known as a return code, is the number between 0 and 255 returned to a parent process by an executable or command when it returns control to its parent process. Every command returns an exit code, which can be either a return status or an exit status of the application. A successful command returns 0 (zero) as an exit code, whereas the failed command returns the non-zero value as an error code. Failure codes must be integers between 1 and 255.

We use the special variable called `$?` in Linux [bash scripts](/blog/bash-script/) to check the exit code. When a program in the shell terminates, it assigns an exit code to this environment variable.

We will first display all the files and directories in the present working directory using the ls command. After that, we will store the exit code of this ls command using the variable EXIT_CODE.

```bash
:~/tutorials$ ls
hive  rdbms  shell_Scripts  spark
:~/tutorials$ EXIT_CODE=$?
:~/tutorials$ echo $EXIT_CODE
0
```

As you can see above, the value of the exit code is 0. It means the code has executed successfully.

## Commonly Used Important Exit Codes

| Exit Code | Meaning |
| --- | --- |
| 0 | Successful termination |
| 1 | General Errors like a typo |
| 2 | Syntax Issue in the shell |
| 126 | Command invoked cannot execute. It can be a permission problem or command is not an executable |
| 127 | Command not found. It can be an invalid Command or a typo |
| 128 | Invalid argument to exit. Valid values for exit is from 0 to 255 |
| 130 | Shell terminated by CTRL +C |

## Shell Script Example

Let's take an example in which we get the current user using whoami command and check for the exit codes.

```bash
#!/usr/bin/env bash
THIS_USER=`whoami`
echo "Current User is $THIS_USER"
EXIT_CODE=$?
# Check if Exit code value is 0 or something else
#Here ne means not equals
if [[ "$EXIT_CODE" -ne 0 ]];then
    echo "Exit Code is $EXIT_CODE"
else
    echo "Exit Code is $EXIT_CODE"
fi
```

Let's create and execute a shell script named exit_code_example.sh with the above example.

```bash
~$/tutorials/bash$ ls
exit_code_example.sh
$ ./exit_code_example.sh
Current User is nitendragautam
Exit Code is 0
```

---

*Originally published on nitendratech.com on 2019-04-06, updated 2022-06-06. Migrated to nitendratech.github.io from the WordPress site.*
