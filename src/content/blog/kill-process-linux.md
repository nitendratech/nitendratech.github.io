---
title: "How to Kill a Process in Linux?"
description: "How to kill or terminate an unresponsive process in Linux using the kill command — by PID, SIGTERM vs. the forceful SIGKILL (kill -9), and a table of common signals and their numbers."
pubDate: 2021-11-03
category: "Core Tech & Programming"
subcategory: "Linux"
---

To kill or terminate a Linux process, we can use the kill command. We need to kill the Linux process if it becomes unresponsive.

Below is the syntax of this command.

```bash
## Kill by using PID
kill <PID>

## Kill the process by using Name
kill <process_name>
```

Here, PID is the process Identification of the process that is being executed. We can kill a Linux process using two ways.

- `kill <pid>`: This generates a signal SIGTERM allows the Linux process to be terminated gracefully by using the PID..
- `kill -9 <pid>`: This generates a signallSIGKILL which will forcefully terminate the Linux process by using PID.

| Signal | Number | Description |
| --- | --- | --- |
| SIGKILL | 9 | It makes the process to exit without carrying out any routine tasks |
| SIGTERM | 15 | It causes the process to exit. But it allows us to close any files that are open |
| SIGHUP | 1 | It terminates the interactive process and programs in Linux |
| SIGCONT | 18,19,25 | It continues the process if stopped in between |
| SIGSTOP | 17,19,23 | It stops the process |

---

*Originally published on nitendratech.com on 2021-11-03, updated 2021-12-12.*
