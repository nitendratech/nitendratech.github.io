---
title: "What are Access Logs?"
description: "What access logs are, how the Apache Combined Log Format (CLF) is configured, what each field in a log entry means, and how access logs are used in clickstream analysis."
pubDate: 2021-05-10
category: "Core Tech & Programming"
subcategory: "Logging"
draft: false
---

As more and more people have started using the internet, online applications, and software have increased drastically within the last decade. With this, there has been an increase in digital footprints left by internet-based users from millions to billions. These footprints consist of web usage data that is recorded in the form of access logs on web servers. The rate at which [log files](/blog/log-files/) are produced in modern distributed applications ranges from several terabytes to petabytes per day.

Application servers within internet-based companies store and record different types of logs, ranging from system and access logs. Among these logs, access logs contain information related to user navigational behavior and user access patterns. This blog posts on the Combined Log Format (CLF), which is the most popular access logs format in the current market.

## What exactly are Access Logs?

Access Logs are the server logs that record all HTTPS (Hypertext Transfer Protocol Secure) requests processed by a web server. It maintains the history of page requests made to the server along with the other important pieces of information like the type of request, time of the request, status code of the request, web server details, source or Internet Protocol (IP) address of the request from the client, user activities detail during that session, time spent on these activities and other relevant information.

These logs determine the total number of people who have visited the website along with the total time spent on the website. It can also be used to detect security threats or abnormalities in the logs that can be used to protect customers from those threats. This, in turn, increases trust among customers and can be used as an advantage against competitors. The World Wide Web Consortium, or W3C, maintains a standard common format for web server access log files. The entries in a Log give details about the client that requested the server.

### Configuration of Combined Log Formats

Below is the configuration for the combined log formats.

```bash
LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-agent}i\""
```

Below is an example of log file entries in CLF.

```bash
97.63.130.73 - - [03/May/2017:18:16:33 -0500] "DELETE /apps/cart.jsp?appID=7978 HTTP/1.0" 200 4902 "http://pitts-jackson.com/home/" "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/5320 (KHTML, like Gecko) Chrome/13.0.817.0 Safari/5320".
```

```
96.63.130.73(%h)
```

This is the Internet Protocol (IP) address of the client that requested the server. Generally, the IP address assigned by the Internet Service Provider would be the identification of the user or client name. If we can track the client's IP address, we can identify the user who visited the website.

`- (%l)` If we see a hyphen present in the log file entry, it means the request is not available.

```
[03/May/2017:18:16:33 -0500](%t)
```

It is the time at which the request was received. The format of the time resembles like `[day/month/year:hour:minute:second zone]`.

```
“DELETE /apps/cart.jsp?appID=7978 HTTP/1.0"(\"%r\")
```

It represents the request that is coming from the client as given by double quotes. DELETE is the type of REST (Representational State Transfer) method used. Instead of DELETE, we can have GET, POST, PUT, and PATCH. ‘/apps/cart.jsp?appID=7978’ represents the information requested by the client. Here, ‘HTTP/1.0’ represents the protocol used.

```
200(%>s)
```

It is the status code that the web server sends back when the request is received. Status codes beginning with 2 are for a successful response, 3 is for redirection, 4 is for an error caused by the client, and 5 is for an error related to a server.

```
4902(%b)
```

It refers to the size of the object (in bytes) returned to the client by the web server, but does not include the response headers. If the server returns empty content to the client, it will be logged as a “-”.

```
"http://pitts-jackson.com/home/"(\"%{Referer}i\")
```

It gives information about the Referrer website or the URL

```
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/5320 (KHTML, like Gecko) Chrome/13.0.817.0 Safari/5320"
```

It has information about the type/version of the browser from where the user sends the request to the web server.

## Use of Apache Access Logs in Clickstream Analysis

Clickstream analysis is the process of collecting and studying the user's behaviors from the data that gets generated in the access log by clicking on a web page. The raw form of this data gets saved in the form of access logs that give different user behavior information and help the company in making a strategic decision regarding their business.

- Duration of their visits
- Page views frequency
- Types of items viewed on the web page.
- The geographical location of the user
- Browser type of User

## Reference

[https://library.ndsu.edu/ir/handle/10365/28001](https://library.ndsu.edu/ir/handle/10365/28001)

---

*Originally published on nitendratech.com on 2021-05-10, updated 2024-02-18.*
