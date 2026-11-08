---
title: "How to Send Email from Linux Command Line on Linux?"
description: "How to send email from the Linux command line with the mail command — adding a subject and body, sending file contents, and using the -c and -b options for CC and BCC."
pubDate: 2019-06-10
category: "Core Tech & Programming"
subcategory: "Linux"
---

We can automate different tasks in Linux including generating reports, monitoring processes, automating backups, submitting Spark jobs, and many more. There are times when jobs fail and a report needs to be generated and sent through email. We can use the Linux mail command to accomplish this task either on the command line or through [bash script](/blog/bash-script/), Perl, and Python.

When we want to send email from a Linux command line or bash script, we commonly use the `mail` or `sendmail` command. Before using this command, we need to have a Simple Mail Transfer Protocol (SMTP) server configured in our system, as they rely on an SMTP server to send email.

An SMTP server is a computer program or service that allows for sending and receiving email messages. Developers need to follow their organization's policies and guidelines for email usage, depending upon where email is being sent.

## Sending Emails on Linux

We use the mail command to send emails on Linux.

```bash
mail -s "Hello world" <email_address>
```

## Sending email with body

We can use the below commands to add the content to the body of the mail.

```bash
echo "Email Body." | mail -s "Hello world" <email_address>
Example:
echo "Testing email" |mail -s "This is Nitendra Tech Blog" nitendra.gautamblog@gmail.com
```

Explanation:

- `echo` is used to create the body of the email
- `|` is a pipe symbol that us used to send the output of `echo` to the `mail` command.
- `-s` is used to specify the subject of the email.
- nitendra.gautamblog@gmail.com is the recipient's email address

## Sending Emails with content from a file

If we want to email the content of the log file, we can use the below command t

```bash
mail -s "Testing Email from a File" nitendra.gautamblog@gmail.com < /home/nitendratech/testfile.txt
```

## Sending an email with CC and BCC

We can use the below options along with the mail command to add cc and bcc in the email.

**-s \<subject\>**: It is the subject of the mail
-c \<email_address\>: It will send a carbon copy to this "email address", or CC
-b \<email_address\>: It will send a blind carbon copy to this "email-address", or BCC

Here's how you might use these options:

```bash
echo "Welcome to this Blog " | mail -s "Test Email with cc and bcc" nitendra.gautamblog@gmail.com -c email1@gmail.com -b email2@gmail.com
```

---

*Originally published on nitendratech.com on 2019-06-10, updated 2024-02-19.*
