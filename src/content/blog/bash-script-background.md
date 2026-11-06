---
title: "How to Run Bash Script in Background?"
description: "How to run Bash scripts and functions in the background — using the ampersand (&) operator, the wait command, and the nohup command to keep long-running jobs running even after the session disconnects."
pubDate: 2020-04-12
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

There are times when you need to execute a long-running data ingestion job or a complex [Extract, Transform, Load(ETL)](https://www.nitendratech.com/database/etl-process/) data pipeline in the background. You can use the feature Shell provides to run [Bash scripts](https://www.nitendratech.com/linux/bash-script/) and function in the background.

There are two popular ways of doing it; either using an ampersand(&) in the script or function or using the nohup command. Let's create a Bash script that has a function that runs in the background.

```bash
#!/bin/bash

# It will print t
print_my_name () {
  my_name=$1

echo "My Name is $my_name"
sleep 5s // Sleep for five seconds
}
```

## Running the Function or Command in Background

We can execute a command in the background by placing an ampersand (**&**) symbol at the end of the command. When we place a job in the background, a user job number and system process number or ID are displayed in the terminal.

```bash
## Run the Function in Background
echo "Calling the function for first time"
print_my_name nitendra &

echo "Calling the function for second time"
print_my_name gautam &
```

The "**&**" symbol at the end of the function instructs bash to run **`print_my_name`** function in the background.

## Wait for the Background function to finish

We use the `wait` command to wait for the background process to finish. Let's wait for both the process to finish and print the exit code.

```bash
# Waiting for the process to finish
wait

echo "Both the functions are finished"

#Exit a Shell Script with 0 exit code
exit 0
```

## Running the Shell script in the background

We can use the **`ampersand(&)`** or **`nohup`** to run a shell script in the background.

### ampersand(&)

The "**&**" symbol at the end of the script instructs bash to run that script in the background.

```bash
sh long_running_Script.sh & // This will run in the background
```

## Nohup Command

Nohup is a command used to run a long-running process (job) on a server. This command executes another command and instructs the system to continue running it even if the session is disconnected.

It is present on all the Unix compute servers. Its syntax is given below.

```bash
nohup command [command-argument ...]
nohup <command> &
```

Replace < command > with the name of your executable or that of the script we want to execute.

```bash
nohup long_running_Script.sh &
```

When we use **&**, we will see the bash job ID in brackets, and the process ID (PID) listed after.

```bash
~ % nohup ls -ltr &
[3] 27631
```

We can use the PID to terminate the process prematurely. We can use the `kill` command to terminate this process if needed.

```bash
~ % kill -9 27631
```

This is the advantage `nohup` has over the direct use of `ampersand(&)`.

---

*Originally published on nitendratech.com on 2020-04-12, updated 2024-08-03.*
