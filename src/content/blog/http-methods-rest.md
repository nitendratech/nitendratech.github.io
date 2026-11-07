---
title: "Understanding HTTP methods in REST"
description: "An overview of the six HTTP methods used in REST — GET, PUT, DELETE, POST, OPTIONS, and PATCH — and what each one does to a resource."
pubDate: 2019-11-29
category: "Core Tech & Programming"
subcategory: "REST APIs"
draft: false
---

There are mainly six HTTP methods defined by [REST. API](https://www.nitendratech.com/programming/restful-web-services/) We would go through each of them in this blog.

## GET

Provides read-only access to a resource. GET operations are read-only and are safe operations. It reads the resource content.

## PUT

Used to create a new resource or to Update/Replace.

## DELETE

It is used to remove resource content.

## POST

It is used to update an existing resource or create a new resource.

## OPTIONS

It is used to get the supported operations on a resource. The purpose of the OPTIONS method of RESTful web services is to list down the supported operations in a web service and should be read-only.

## PATCH

It updates or modifies the resource.

POST, PUT, and PATCH operations require you to provide both headers. The GET and DELETE operations require only the Accept header. Failing to provide the required headers results in a 400 Bad Request error.

---

*Originally published on nitendratech.com on 2019-11-29, updated 2022-06-06.*
