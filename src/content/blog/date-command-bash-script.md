---
title: "Using Date Command In Bash Script"
description: "How to use the Linux date command in bash scripts — basic syntax, showing the date in another time zone, relative and past dates, yesterday's date, and custom formats with commonly used control sequences."
pubDate: 2019-03-06
category: "Core Tech & Programming"
subcategory: "Shell Scripting"
---

`date` command on Linux can be used to display the current time and date. It is one of the most useful tools when working with [bash script](/blog/bash-script/), as it is available on all Linux Systems. It allows you to display and configure the current date and time in different formats as needed.

## Syntax

```bash
date [OPTION]... [+FORMAT]
     date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]
```

According to the manual page of `date` command, it displays the current time in the given local format or sets the system date.

## Using the date command

When we use the date command without any options, it will display the current system date and time:

```bash
~$ date
Thu Apr 18 20:51:45 CDT 2019
```

Here the results show the day of the week `Thu`, the day of the month `Mar 21`, time `21:03:35` , timezone (`CDT`) and year (`2019`).

## Show the date in another TimeZone

To show the date at a different timezone, use the date and timezone.

```bash
date -- <TimeZone>
```

Let's display the date in UTC Time Zone.

```bash
~$ date --utc
Fri Apr 19 01:52:35 UTC 2019
```

## Relative Date using -date Option

Let's get the date for next Wednesday.

```bash
~$ date --date="next wed"
Wed Apr 24 00:00:00 CDT 2019
```

## Get Past Date

We can display the past date using the -date command.

### Few Seconds Back

```bash
~$date --date='7 seconds ago'
Thu Apr 18 20:52:47 CDT 2019
```

### One Day Back

```bash
~$ date --date="1 day ago"
Wed Apr 17 20:53:14 CDT 2019
```

## Yesterday's Date

```bash
~$date --date="yesterday"
Wed Apr 17 20:53:34 CDT 2019

#Yesterdays in YYMMDD format
~$  date --date="yesterday" +"%Y%m%d"
20190417
```

### Get a Relative Date using the date command

This is another way to get an old date after adding 1 day to the existing date

```bash
~$ OLD_DATE=20190615
~$ NEW_DATE=$(date +%Y%m%d -d "$OLD_DATE +1 day")
~$ echo $NEW_DATE
20190616
```

## Date in Custom Format

We can customize the format of the date by providing the `+"format"` option on the command line along with the date, as given in the below syntax.

```bash
date +"format"
```

```bash
$date +"%Y%m%d"
20190418

~$ date +"%Y-%m-%d %H:%M"
2019-04-18 20:57

~$ date +"%Y-%m-%d %H:%M:%S"
2019-04-18 20:57:56
date +"%Y%m%d_%H%M%S"
20190418_205846
```

### Commonly Used Control Sequences in Bash Script Date Command

| Control Sequence | Description |
| --- | --- |
| %Y | The year in the *YYYY* format. For example :<br>date +"%Y"<br>2019 |
| %m | The month in the *MM* format. For Example :<br>date +"%m"<br>04 |
| %S | The second is in the *SS* format. For Example:<br>date +"%S"<br>34 |
| %H | The hour is in the *HH* format. For Example:<br>~$ date +"%H"<br>21 |
| %M | The minute in the *MM* format. For Example:<br>~$ date +"%M"<br>14 |
| %d | The day of the month in the *DD* format. For example:<br>~$ date +"%d"<br>18 |
| %Z | The time zone abbreviation. For Example:<br>~$ date +"%Z"<br>CDT |
| %F | The full date in the *YYYY-MM-DD* format. This option is equal to `%Y-%m-%d`. For Example:<br>$ date +"%F"<br>2019-04-18 |
| %T | The full time in the *HH:MM: SS* format. This option is equal to `%H:%M:%S`. For Example:<br>~$ date +"%T"<br>21:14:13 |
| %D | It displays the date in MM-DD-YY Format. For Example:<br>~$ date +"%D"<br>04/18/19 |

## References

[Date Manual Page](http://man7.org/linux/man-pages/man1/date.1.html)

---

*Originally published on nitendratech.com on 2019-03-06, updated 2022-06-06.*
