---
title: "What is Bash Script? A Beginner's Guide to Bash Scripts"
description: "What a Bash script is and how it works — running scripts with chmod and shebangs, interactive vs. non-interactive shell modes, and common shell types like bash, sh, ksh, and zsh."
pubDate: 2017-03-25
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

Unix-like operating systems are one of the best architectures for operating system design, as it is widely used to run enterprise-based applications. One of the important features of this architecture is the use of the command-line interface or the shell. The shell environment provides users with a way to interact with operating system core functions.

As a developer, our job is to optimize the work process by making it efficient in terms of resource utilization and time. In an IT (Information Technology) based organization, many tasks are repeated over and over. Some of them are mentioned below.

- Running a batch job like an SQL (Structured Query Language) /Teradata/Spark-based ETL (Extract Transform and Load) job
- Deploying the Java Jar with updated code
- Processing flat file
- Database maintenance and backup task

Bash provided all the tools and features for performing this activity on a daily or schedule.

## What is Bash?

Bash is a Unix shell written by Brian Fox as part of the GNU Project. It was developed as a free software replacement for the Bourne shell. It was released in 1989 and has been distributed as the [Linux](/blog/linux-operating-system/) and macOS default shell terminal for some time. In this blog post, we will read about the basic introduction to Bash (Bourne Again Shell), which is the default shell environment for most GNU/Linux systems.

## What is a Bash Script?

The Bash script or Bourne Again shell script is a plain text file that contains a sequence of commands that are needed to perform and execute using the shell utility. Most of the commands that can be executed on the command line can be executed through Bash scripts.

Bash scripts generally have the extension of `.sh` or `.bash`. As Linux is an extensionless operating system, any file with a set of commands can work here.

## How does the bash Script work?

In Linux operating systems, when a command has been executed, a process starts that executes that command. These commands are programs that have binary data and certain instructions for the CPUs and other resources of the system. When we run these programs, we are copying that instruction and starting a process instead. When that process starts, it uses some CPU (Central Processing Unit), RAM (Random Access Memory), and the physical space if needed from the operating system. Each of these processes is assigned a unique identifier called Process Identifier(PID) when it starts.

When we run a `cp` command to copy some files and directories on Linux, we are copying the copy program and starting the process using the Linux resources. Technically, the Linux process becomes a process when they are executed and dies when it is completed.

As Linux is a multiprocessing operating system, there can be multiple processes running on each CPU in the system at the same time. In this case, there can be multiple instances of `cp` commands running at the same time as a separate process. Once these processes are finished, the Linux system destroys them graciously.

## How to run Bash Script?

When we want to run the bash script, it needs to have the proper permission.

Let's take a sample script called `hello_world.sh` script as shown below.

```bash
#!/bin/bash

echo Hello World!
```

Let's try to execute it directly. As we can see, we get the permission denied error. We will use the change mode or `chmod` command to change the mode of the script. Number 754 means the owner of the script is allowed to write/modify or execute the script. But everyone else can execute the script. Instead of using this, we can also make it executable by typing `chmod u+x hello_world.sh`.

```
~ % ./hello_world.sh
bash: permission denied: ./hello_world.sh

 ~ % ls -l hello_world.sh
-rw-r--r--  1 nitendragautam  staff  31 Dec 22 16:03 hello_world.sh

 ~ % chmod 754 hello_world.sh
~ % ./hello_world.sh
Hello World!
```

Here, the shell script is a text file that begins with a shebang. Let's take the example below for bash and shell-based shebang.

```bash
#!/bin/bash
```

```bash
#!/bin/sh
```

Shebang is a character sequence `#!` that is prefixed to the Interpreter path. In this case, `bin/bash` is the interpreter command path for Bash. The important thing to remember is that the shebang must be in the first line of the script. And no space should exist between the `#` and `!`

We can also use the Shebang, like below.

```bash
#!/usr/bin/env bash
```

This way of using Shebang will search the program based on the `PATH` environment variable used in the operating system. This method is preferred over the earlier method, as the location of programs like bash and sh on a given file system can change. Use of #!/user/bin/env bash over #!/bin/bash makes sure the latest version of the application is being used in the script. The use of shebang is to let the script know what interpreter it should use.

## Shell Modes

Those users who want to use the bash shell can use it in two modes, interactive and non-interactive modes.

### Interactive mode

In interactive mode, users can directly interact with the shell using certain commands that are provided in most modern shells. Some of the command commands that are frequently used are `pwd`, `ls`, `grep`, `mkdir`, `cd` and `rm`. We can directly run these commands in the terminal and see the results.

### Non-interactive mode

This is a non-interactive mode, as we have certain predefined steps to perform certain tasks. In this mode, the shell reads commands from a file or pipe commands and executes them. To run the shell in non-interactive mode, all the commands need to be in a Shell script file with an interpreter at the top of the script. When the interpreter reaches the end of the script, the process terminates the current session. We can execute a shell in non-interactive mode like below.

```bash
sh /home/path_to_shell_script.sh
bash /home/path_to_shell_script.sh
```

## Common Shell types

Below are the most common and popular shell types that exist today.

| Name | Library/Extension | Interpreter |
| --- | --- | --- |
| Bourne Again Shell | `bash` | `/bin/bash` |
| Shell | `sh` | `/bin/sh` |
| Korn Shell | `ksh` | `/bin/ksh` |
| Z Shell | `zsh` | `/bin/zsh` |

## Conclusion

In this blog post, we learned about the concept of a bash script its history, and how to run a bash script. We also read about the types of bash scripts according to their execution mode and different types of common shell types.

Are you ready to explore more on bash scripts?

Please share the article on social media and leave a comment with any questions or suggestions.

---

*Originally published on nitendratech.com on 2017-03-25, updated 2024-02-18.*
