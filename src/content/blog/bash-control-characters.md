---
title: "Bash Control Characters"
description: "Common Bash control characters and separators explained — pipes, logical operators, variable and argument symbols, wildcards, quotes, and redirection operators, with what each one does."
pubDate: 2020-09-05
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

Control characters are codes or numbers in a character set that does not represent a written symbol. They are building blocks of Bash scripts which are like metacharacters having a special meaning. Below are the common separators and Control characters used in [Bash scripts](/blog/bash-script/).

| Control Characters | Description |
| --- | --- |
| `\|` | pipe will take the first commands stdout as the second commands stdin. |
| `\|\|` | OR if first command is false, it will take the second. |
| `\|=` | OR IS (mostly used in if statements) |
| `&&` | AND if first command is true, it will execute the second one. |
| `!` | NOT (mostly used in if and test statements), but as a shell-command it opens a shell to run the command (ex. `! echo foo`) |
| `!=` | NOT IS (mostly used in if statements) |
| `!$` | last commands last argument |
| `!!` | repeat last command |
| `=` | IS (mostly used in if statements) |
| `;` | will separate 2 commands as if they were written on separate command lines |
| `;;` | end of a case function in a case statement. |
| `$` | prefix to a variable like "$customVariable" |
| `$!` | PID of the last child process. |
| `$$` | PID of the current process (PID is Process ID) |
| `$0` | Shows program that owns the current process. |
| `$1` | First argument supplied after the program/function on execution. |
| `$2` | Second argument supplied after the program/function on execution. ($3 etc.) |
| `$#` | Shows the number of arguments. |
| `$?` | Any argument (good to use in `if` statements) |
| `$-` | current option flags |
| `$_` | Last argument/Command |
| `$*` | All arguments |
| `$@` | All arguments |
| `#` | commented line, anything on a line after "#" will be processed by the script |
| `{` | start braces (starts a function) |
| `}` | end braces (ends a function) |
| `[` | start bracket (multiple-argument specifiers) |
| `]` | end bracket (multiple-argument specifiers) |
| `@` | $@ is equivalent to "$1" "$2" etc. (all arguments) |
| `*` | wild card (* can substitute any number of characters) |
| `?` | wild card (? can substitute any single character) |
| `'` | precise quote. (Will even include "'s in the quote) |
| `.` | dot will read and execute commands from a file, ( . .bashrc ) |
| `&` | and. as suffix to executed file makes it go to the background(./program &) |
| `1>` | stdout stream director (standard output) |
| `2>` | stderr stream director (standard error output) |
| `%` | job character, %1 = fg job 1, %2 = fg job 2, etc. |
| `>>` | stream director append to a file |
| `<<` | stdin stream director. (`cat > file << EOF ; anything ; EOF`) |
| `>` | stream director that will start at the top of the file (in if statements < and > may be used as greater-then and lesser-then, as: if [ "$1" >= "2" ]) |
| `\` | back-slash, takes away any special meaning with a character |
| `>&` | stream director to stream director, ie. echo "a" 1>/dev/null 2>&1 this directs 2> to the same place as 1> |

---

*Originally published on nitendratech.com on 2020-09-05, updated 2022-05-26.*
