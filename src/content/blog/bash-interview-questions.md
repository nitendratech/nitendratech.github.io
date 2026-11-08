---
title: "Bash Scripts Interview Questions"
description: "Bash scripting interview questions and answers covering essential commands, processes, exit codes, the Vi editor, arrays, permissions, loops, functions, operators, variables, and command-line arguments."
pubDate: 2023-10-20
category: "Core Tech & Programming"
subcategory: "Interview Questions"
draft: false
---

This blog post has the top Bash Interview questions and answers that will help you prepare for the next Bash scripts  Interview.  You can check this [Linux interview blog post ](/blog/linux-interview-questions/)for interview questions related to Linux. We have divided the interview questions into various sections so that it is easier to follow.

**Question: What do you understand by Bash Script?**

**Answer: **A bash script is a file containing a list of commands that are executed by the bash program one by one.

**Question: What do you know about `cd` command in Linux?**

**Answer:** `cd` command, also known as `chdir` (change directory),  is a command-line shell command.  It is used in navigating the Linux/Unix system and is widely used when writing[ Shell Script](/blog/bash-script/).

**Question: What do you know about the `date` command on Linux?**

**Answer: **`date` command in Linux can be used to display the current time and date. It is one of the most useful tools when working with [bash script](/blog/bash-script/) as it is available on all Linux Systems. It allows you to display and configure the current date and time in different formats as needed. According to the manual page of `date` command, it displays the current time in the given local format or sets the system date.

Below is the Syntax of Date Command.

```bash
  date [OPTION]... [+FORMAT]
       date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]
```

**Question: What is the email function on Linux?**

**Answer: **We can automate different tasks in Linux including generating reports, monitoring processes, automating backups, submitting Spark jobs, and many more. There are times when jobs fail and a report needs to be generated and sent through email. We can use the Linux mail command to accomplish this task either in the command line or through bash script, Perl, and Python.

We use the mail command to send emails in Linux.

```bash
mail -s "Hello world" <email_address>
```

**Question: How do you send emails with the body on Linux?**

**Answer: **We can use the below commands to add the content to the body of the mail.

```bash
echo "Email Body." | mail -s "Hello world" <email_address>
Example:
echo "Testing email" |mail -s "This is Nitendra Tech Blog" nitendra.gautamblog@gmail.com
```

**Question: How to List Running Processes on Linux?**

**Answer: **The `ps` or Process Status command is the most common way to list the processes currently running in the system. This command gives important information about the running processes under the current user that can be useful when troubleshooting the system.

**Question: How do you List All Processes in Linux?**

**Answer: **We can use the ps or Process status command to list the running processes in the Linux system.

```bash
~$ ps
   PID TTY          TIME CMD
  1116 pts/1    00:00:00 bash
  2271 pts/1    00:00:00 ps
```

**Question: How to List All Processes in Detail**

**Answer: **Let’s check all the processes in detail by their memory and consumption. We use the `ps aux` command for that.

Syntax: $`ps aux`
a = show processes for all users
u = displays the process listed by their user names/owners
x = show processes not attached to a terminal. It includes processes such as services like `crond`, `upowerd`, etc.

```bash
hduser@hmaster:~$ ps aux
USER        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root          1  0.4  0.0  37840  5784 ?        Ss   18:27   0:02
hduser     1484  6.6  3.2 2787916 244508 ?      Sl   18:32   0:10 /usr/lib/jvm/java-8-oracle/bin/jaroot       1799  0.0  0.0      0     0 ?        R    18:32   0:00 [kworker/u256:0]
hduser     1891  5.6  2.4 2781908 183660 ?      Sl   18:32   0:08 /usr/lib/jvm/java-8-oracle/bin/jahduser     2137  4.4  2.3 2750992 177272 ?      Sl   18:32   0:06 /usr/lib/jvm/java-8-oracle/bin/jahduser     2278  0.0  0.0  37364  3284 pts/1    R+   18:34   0:00 ps aux
```

**Question: How do you kill or terminate a process in Linux?**

**Answer: **To kill or terminate a Linux process, we can use the kill command.  We need to kill the Linux process if it becomes unresponsive.

We can kill a Linux process using two ways.

- `kill <pid>`: This generates a signal SIGTERM allows the Linux process to be terminated gracefully by using the PID..

- `kill -9 <pid>`: This generates a signallSIGKILL which will forcefully terminate the Linux process by using PID.

**Question: What is the exit code on Linux?**

**Answer: **An exit code, sometimes known as a return code, is the number between 0 and 255 returned to a parent process by an executable or command when it returns control to its parent process. Every command returns an exit code which can be either a return status or an exit status of the application. A successful command returns 0(zero) as the exit code, whereas the failed command returns the non-zero value as the error code. Failure codes must be integers between 1 and 255.

We use the special variable called  `$?` in Linux [bash scripts](/blog/bash-script/) to check the exit code. When a program in shell terminates, it assigns an exit code to this environment variable.

**Question: What are the Commonly Used Important Exit Codes?**

**Answer: **Below are the most commonly used exit codes in Linux.

| Exit Code | Meaning |
| --- | --- |
| 0 | Successful termination |
| 1 | General Errors like a typo |
| 2 | Syntax Issue in the shell |
| 126 | Command invoked cannot execute. It can be Permission problem or command is not an executable |
| 127 | Command not found. It can be an invalid Command or a typo |
| 128 | Invalid argument to exit. Valid values for exit are from 0 to 255 |
| 130 | Shell terminated by CTRL +C |

**Question: What do you know about  `Vi` editor in Linux?**

**Answer: **`Vi` editor or Visual Editor is the default Text Editor that comes with the majority of Linux distributions. Vi text editor is available in the majority of the commercial and open-source versions of Linux Distributions. Once you learn this text editor, you can use it in many Linux distributions. Commands used in the Vi editor are case-sensitive. This blog post will show you the most useful Vi Text Editor Commands that one can use while writing a [bash script](/blog/bash-script/).

**Question: What are the Operation Modes of  `Vi`  Text Editor?**

**Answer:** Vi editor has mainly two types of operation modes.

- **Command Mode**

Vi editor beings in command mode and only understands commands. In this mode, we can move the cursor to the point where the text deletion and pasting occur.

- **Insert Mode**

This mode is used for entering text in the file and can be invoked from the command mode by pressing `i` on the keyboard. Once we are in insert mode, any key from the keyboard would be taken as input for the file which is being currently edited.

If we want to switch to command mode and save the changes, we can press `ESC` key and press `wq!` and `ENTER` key.

**Question: What is Array in Linux Bash Script?**

**Answer**: An array is a data structure or a variable that can store multiple values. It does not have any limit on the size or any requirements that say members variables be indexed or assigned contiguously. In Bash, the index of the first element starts with the number 0.

When working with Arrays, we should be aware of the environmental variable called IFS or Input Field Separator. It is a character that separates elements in an Array whose default value is an empty space `IFS=''`. Let’s look at the basic concepts of Array in [Bash Script](/blog/bash-script/)

**Question: What are Access Permissions in Linux?**

**Answer: **Once you start working in Linux and writing a [Shell script](/blog/bash-script/), you will notice that all files and directories in Linux have a standard set of access permissions. These access permissions control who can access what files, and provide a fundamental level of security to the files and directories in a system.

In Linux, each file and directory have three owners: User, Group, and Other.

- **User:** This permission class belongs to the user who created the file/directory. They are the primary owner or User of that resource created. They have read/write access to the file/directory.

- **Group:** This permission class belongs to members of the same file or directory. For example: You are working on a same project in a Linux-based cluster as your team member and need access to a common directory/ files.  Admin of the project can add your user id to the same Group as other team members.

- **Other: ** This permission class refers to the members who will have read access to the file.

**Question: What is Change Mode in Linux?**

**Answer: **Permissions are known as modes in Linux. That’s why in Linux we use a command called `chmod` or “change mode”. Below `chmod` or changemode command can be used to change the permission of file/shell script/directory for protection.

```bash
chmod {options} filename/Directory/Shell Script
chmod 754 file1.sh # For File
chmod 755 test1  # directory
```

- u :user

- g:group

- o:other

- a:all

- r:read

- w:write(and delete)

- x:execute(and access directory)

- +:add permission -take away permission

**Question: What are Commonly Used Permissions in Bash Script?**

**Answer: **This table gives the list of commonly used permissions in Linux for files/directories from lower to a higher level.

| Symbol | Octal Number | Description |
| --- | --- | --- |
| -rw-r--r-- | 644 | This permission allows all the users on the system to read the file but only the owner can edit it. |
| -rw-rw---- | 660 | This permission allows certain groups of people to modify the file. But other users who are not in that group cannot read it. |
| -rw-rw-r-- | 664 | This permission allows certain groups of people to modify the file. But other users on the system can read it. |
| rwxr-xr-x | 755 | This permission allows all users in the system to execute the file. But only the owners can edit it. |
| -rwx------ | 700 | This permission allows for the file to be read/edited and executed by the owner. Others users in the system cannot access it. |

**Question: What is `ls` command on Linux?**

**Answer: **The `ls` command is one of the basic and common commands that all Linux users should know. It is mainly used to list information about files and directories within the Linux file system. The `ls` utility is a part of the GNU core utilities which are installed on all Linux distributions like  Ubuntu, Red Hat, Fedora, Mac OSX.  This command is the most commonly used command while writing a[ Bash script.](/blog/bash-script/)

```bash
~$ cd ~
~$ pwd
/home/nitendratech
~$ ls
cars_json.json  hadoop-3.2.0-rat.txt  hadoop-3.2.0-src.tar.gz  tutorials
```

**Question: How do you find out the Present Working Directory(PWD) on Linux?**

**Answer:** We can use the below `pwd` or Present working directory command to find the present working directory.

```bash
~$ pwd
/home/nitendragautam
```

**Question: What do you understand by Curl Command on Linux?**

**Answer: **curl is a command or tool that can transfer data from or to a server using any of the supported protocols. Curl supports most of the major protocols and is mainly used for automating the file transfer task, as manual intervention is not needed by this command. In this blog post, we will learn about using the curl command using the command line and[ bash script](/blog/bash-script/).

**Question: What is the Protocol Supported by Curl on Linux?**

**Answer: **Curl command supports the below protocol.

- DICT(Dictionary Network Protocol)

- FILE

- FTP(File Transfer Protocol), SFTP(Secure File Transfer Protocol)

- FTPS

- GOPHER (TCP/IP application layer protocol)

- HTTP and HTTPS

- IMAP and IMAPS( Internet Message Access Protocol)

- LDAP and LDAPS (Lightweight Directory Access Protocol)

- POP3 and POP3S (Post Office Protocol)

- RTMP(Real-Time Messaging Protocol) and RTSP(Real-Time Streaming Protocol)

- SCP (Secured Copy)

- SMTP (Simple Mail Transfer Protocol)

`curl` command can also guess which protocol to use based on the URL hostname that we give.
 If we use ftp.my1.com as an argument, the curl command will use the FTP protocol to fetch the data. HTTP is the default protocol used by the curl command.

**Question: What is a function in the Linux Platform?**

** Answer: **The function is a small piece of code or command which can be used multiple times in a script. A function in bash can be created using the `function` keyword.  It is one of the best ways to make a [Bash scrip](/blog/bash-script/)t modular as small chunks of code are easier to develop and maintain.

**Question: How do you define a function on Linux?**

**Answer: **To define a function, you can use either one of two forms as given below.

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

**Question: How do you make Shell  Script Executable?**

**Answer:** We can make the script executable by using `chmod u+x <script_name>` and run the script.

```bash
~$ chmod u+x script_name
```

**Question: How do you run the Shell script in the background?**

**Answer:** There are times when you need to execute a long-running data ingestion job or a complex ETL(Extract, Transform, and Load) data pipeline in the background. You can use the feature Shell provides to run Bash scripts and functions in the background.

There are two popular ways of doing it; either using an ampersand(&) in the script or function, or using the `nohup` command. Let’s create a Bash script that has a function that runs in the background.

```bash
#!/bin/bash

# It will print t
print_my_name () {
  my_name=$1

echo "My Name is $my_name"
sleep 5s // Sleep for five seconds
}
```

**Question: How do you run the Function or Command in the Background?**

**Answer: **We can execute a command in the background by placing an ampersand (**&**) symbol at the end of the command. When we place a job in the background, a user job number and system process number or id are displayed in the terminal.

```bash
## Run the Function in Background
echo "Calling the function for first time"
print_my_name nitendra &

echo "Calling the function for second time"
print_my_name gautam &
```

The “**&**” symbol at the end of the function instructs bash to run** `print_my_name`** function in the background.

**Question: What are Loops in Bash Scripting?**

**Answer: **Loops in[ Bash Scripting](/blog/bash-script/) is the process of repeating the same script or logic many numbers times.  It works best when it is used for any of the below operations.

- Performing the same set of operations to a different number of input files (e.g. counting the number of records for all the files present in a certain directory)

- Running the same set of operations in a certain interval(e.g. scanning directories for new files every 5 minutes)

- Performing the same operation for a given number of items. (e.g. Calculating table counts for a given number of tables)

**Question: What are the Types of Loops in Bash?**

**Answer: **There are three types of loops in Bash. They are given below.

- For Loop

- While Loop

- Until

**Question: What is For Loop in Bash Script?**

**Answer: **A `for` loop is classified as an iteration statement. It is the repetition of a process within a bash script.

Let’s take an example where we will print the Welcome and number 3  times. You can directly run in any Linux command line or in bash script.

```bash
$for i in {1..3};do echo "Welcome $i " ; done
Welcome 1
Welcome 2
Welcome 3
```

**Question: What is While Loop in Bash Script?**

**Answer:** The **while** executes a piece of code if the control expression is true, and only stops when it is false (or an explicit break is found within the executed code.  Below is the Syntax of the While loop.

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

**Question: What is Until loop?**

** Answer: **The **`until`** loop is almost equal to the while loop, except that the code is executed while the control expression evaluates to false. Below is the Syntax of  `until` loop.

```bash
## Syntax
until command
do
   Statement(s) to be executed until the command is true
done
```

**Question: What do you understand about the Word Count command on Linux?**

**Answer: **In Linux, we can count files/directories or lines in a file using the wc command. It is a short form for word count that displays word count, byte, character count, and newline count for the files we specify. This is one of the basic Linux commands everyone should know ranging from Software Developers, Data Engineers to Linux Devops or Admin person.

Below is the syntax for this command.

```bash
wc [options] <filename>
```

**Question: What are the different Common Options Available in wc Command ?**

**Answer: **The below table gives the common uses of  `wc` or Word Count command with several options.

| Command | Description |
| --- | --- |
| wc -l | It prints the number of lines in a file |
| wc -c | It displays the count of total bytes in a specified file |
| wc -L | It displays the length of the longest line in a file |

**Question: What are the different operators provided by Bash Script?**

**Answer: **[Bash](/blog/bash-script/) provides different operators that we can use in our Bash Script.

- Arithmetic

- Assignment

- Bitwise

- Logical

- Relational

**Question: What is an Arithmetic Operator in Linux?**

**Answer:** Bash provides multiple arithmetic operations through which we can perform Mathematical operations on [variables](/blog/bash-variables/).

| Operator | Description |
| --- | --- |
| + | Addition |
| * | Multiplication |
| - | Subtraction |
| / | Division |
| % | Modulo |
| ** | Exponentiation |
| += | Plus-Equal(Increments a Variable value) |
| *= | Times-Equal(Multiply a Variable value) |
| -= | Minus-Equal(Decrement a Variable value) |
| /= | Slash-Equal(Divide a Variable Value) |
| %= | Mod-Equal( Remainder of Dividing a Variable) |

**Question: What is an Assignment Operator on Linux?**

**Answer:** Bash provides mainly equals to `=` as an assignment operator.

| Operator | Description |
| --- | --- |
| = | Initialize/Change the value of the variable assigned |

**Question: What is a Bitwise Operator on Linux?**

**Answer: **Bitwise operators process bits or bit patterns, unlike other operators.

| Operator | Description |
| --- | --- |
| << | Bitwise Left Shift |
| <<== | Left-Shift-Equal |
| >> | Bitwise Right Shift |
| >>== | Right-Shift-Equal |
| \| | Bitwise OR |
| \|= | Bitwise OR-Equal |
| & | Bitwise AND |
| &= | Bitwise OR-Equal |
| ~ | Bitwise NOT |
| ^ | Bitwise XOR |
| ^= | Bitwise XOR-Equal |

**Question: What is a Logical Operator on Linux?**

**Answer: **Logical operators are known as boolean operators that used to perform logical operations such as `AND` , `OR` and `NOT`.

| Operators | Description |
| --- | --- |
| ! | NOT |
| && | AND |
| \|\| | OR |

**Question:  What is a Relational Operator on Linux?**

**Answer: **These Operators work on two operands or Variables and return True or False accordingly. Some of these operators like `lt` can be used in `if` statements.

| Operator | Description |
| --- | --- |
| == or -eq | Equals to. The result is True if two operands/variables are equal, else gives False |
| != or -ne | Not Equal. The result is True if two operands/variable is not equal, else gives False |
| < or -lt | Less Than. The result is true if the First Operand/Variable is less than Second Operand, else gives False |
| <= or -le | Less than or Equal. The result is true if the First Operand/Variable is less than or equals to The second Operand, else Return False |
| > or -gt | Greater than. The result is True if First Operand is greater than Second Operand, else False |
| >= or -ge | Greater than or Equal. The result is true if First Operand is greater than or Equal to Operand Second |
| -Z | Checks if the value of an operand is null or not |

**Question: What are Bash Variables in Linux?**

**Answer: **Even though BASH is not a typed language like other programming language, it provides different ways to create variables. Variables in [Bash scripts ](/blog/bash-script/)can only contain string or numerical values.

```bash
my_name='Nitendra'
```

There are some rules when creating the Bash variables.

- Shell script name starts with an underscore or an Alphabet.

- The bash script is case-sensitive. It means `my_name` and `MY_NAME` are two different variables.

**Question: What are the types of Bash Variables on Linux?**

**Answer:** There are mainly three types of variables in a Bash script that we can use.

- Local variables

- Environment variables

- Positional Parameters Variable.

**Question: What are Local Variables?**

**Answer: **This variable exists throughout the session of the script and is not accessible outside of that particular script. It can be declared using the equals = sign can be retrieved using the dollar $ sign. When you declare a variable in a shell script, you should not have a space between the variable name, `=` and the value.

**Question: What are Environment Variables in Linux? **

**Answer:** Environment variables are accessible to any program or script running the current Shell session. They are global settings that control Shell’s function as well as other Linux-based commands. We need to use the export keyword when declaring the environment variables. Depending upon your flavors of Linux you might have a file called `.bashrc` or `.zshrc` in your home location. It will have a list of environment variables that are available in that Linux session.

**Question: What are Positional Parameters Variables in Linux?**

**Answer: **These variables are allocated when a function is evaluated and are given positionally. When we pass parameters to a shell script, the value of those parameters is read as a positional Variable.

```bash
sh positionalVariablesEx.sh param1 param2 param3 param3
```

**Question: What is the use of  `cp` utility on Linux?**

**Answer: **CP utility is used to copy files and directories in a Linux-based operating system. It needs two mandatory arguments along with any optional parameters. Those two arguments are the source and destination location. This command is used most frequently while automating a task using [bash scripts](/blog/bash-script/).

**Question: How to copy files from source to destination?**

**Answer: **Once this is completed, a copy of the file will be copied to the destination without deleting the original source.

```bash
~$cp <source> <Destination >:
<Source> can be file or a directory
```

```bash
cp /home/user1/file1.txt /home/user2/
```

This will copy the file `file1.txt` from `/home/user1/` location to `/home/user2/` location

**Question: How to move or rename files from source to destination in Linux?**

**Answer: **If you want to move the whole file, you can use `mv` command. It cut and pastes the file.

```bash
~$mv <source> <Destination >:Cutting files from source to destination Or renaming a file or directory
```

**Question: How do you pass command line arguments to the Shell script?**

**Answer:** [Shell script](/blog/bash-script/) command line supports passing arguments(also called parameters) like any other scripting Language. Command-line arguments consist of one or more words, which are separated by balls blanks or TABS. In this blog post, we will see how arguments can be passed to scripts while calling and can be accessed within the script.

The basic syntax for passing the arguments is given below.

```bash
bash bashLimArguments.sh arg1 args1 argsn
```

**Question: What are the different Script Parameters available when running shell Script?**

**Answer: **We have the below options available when using command-line arguments with Shell script.

| Parameters | Description |
| --- | --- |
| $0 | Name of the script which ran |
| $1 to $n | $1is the first argument, $2 is the second argument till $n nth argument. We need to enclose arguments using braces after the 10th argument like ${10},${11} and so on |
| "$*" | Values of all the arguments. All arguments need to be double-quoted |
| $# | Total number of arguments passed to the script |
| $? | Exit status id of the last command executed. |
| $! | Process id of the last command |

**Question: How do you check the memory status on Linux?**

**Answer**: We can use the `free` command in Linux to check the memory status.

```bash
// Displays the memory status in MB or Mega Bytes
free -m

// Displays the memory status in GB or Giga Bytes.
free -g
```

**Question: How can we calculate the total size of all text files in the directory?**

**Answer: **We can calculate the total size of all the text files in the current working directory using the below command.

```bash
du -hc *.txt | tail -1
```

If you just use the `du -hc *.txt` without the tail and pipe, it will list the file size for all the files.

**Question: What is the use of ‘file’ utility on Linux?**

**Answer: **We use the file utility on Linux to determine the file type. We want to know whether the file is a flat file-based text file, a picture, a video, a binary, or an audio file.

```bash
% file kubernetes.md
kubernetes.md: UTF-8 Unicode text, with very long lines
```

```bash
% file Image_Sample.png
Image_Sample.png: PNG image data, 621 x 277, 8-bit colormap, non-interlaced
```

---

*Originally published on nitendratech.com on 2023-10-20, updated 2024-02-19.*
