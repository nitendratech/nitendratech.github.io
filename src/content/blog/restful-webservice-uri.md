---
title: "Restful Web service URI"
description: "What a URI is in REST architecture, how resources are represented, the difference between URN and URL, and best practices for designing standard URIs for web services."
pubDate: 2019-12-17
category: "Core Tech & Programming"
subcategory: "REST APIs"
draft: false
---

URI stands for Uniform Resource Identifier. Each resource in a [REST](/blog/restful-web-services/) architecture is identified by its URI. The purpose of a URI is to locate a resource(s) on the server hosting the web service.

Below is the format of a URI in REST architecture.

```
<protocol>://<service-name>/<ResourceType>/<ResourceID>
```

REST architecture treats every content as a resource. These resources can be text files, HTML pages, images, videos, or dynamic business data. It simply provides access to resources and REST client access and modifies the resources. Here each resource is identified by URIs/ global IDs.

## Representing a resource in REST

REST uses various representations to represent a resource such as text, JSON, and XML. XML and JSON are the most popular representations of resources.

The following are important points to be considered while designing a representation format of a resource in RESTful web services.

### Understandability

Both Server and Client should be able to understand and utilize the representation format of the resource.

### Completeness:

Format should be able to represent a resource completely. For example, a resource can contain another resource. Format should be able to represent simple as well as complex structures of resources.

### Linkablity:

A resource can have a linkage to another resource, a format should be able to handle such situations.

## URI Classifications

A URI can be split into two different classifications.

- URN A URN, or Unique Resource Name, is a form-normal identifier for the resource.
- URL. A URL, or Uniform Resource Locator, stores the location of a resource.

A common example of a URN is a unique ID, used to identify any object. Here, an object can be an employee from the employee database or books from a book store API. A book locator service may accept an ISBN as a URN for a book resource and retrieve a list of URLs, representing locations where the book may be retrieved.

## Standard URI Best practices

Below are the best practices to create a standard URI for a web service.

**Use Plural Noun**:

Use plural nouns to define resources. For example, we've used users to identify users as a resource.

**Avoid using spaces**:

Use `underscore(_)` or `hyphen(-)` when using a long resource name, for example, use `authorized_users` instead of `authorized%20users`.

**Use lowercase letters**:

Although URI is case-insensitive, it is good practice to keep URL in lower case letters only.

**Maintain Backward Compatibility**:

As Web Service is a public service, a URI once made public should always be available. In case, URI gets updated, redirect the older URI to the new URI using HTTP Status code, 300.

**Use HTTP Verb**:

Always use HTTP Verb like GET, PUT, and DELETE to do the operations on the resource. It is not good to use operations names in URI.

---

*Originally published on nitendratech.com on 2019-12-17, updated 2022-06-06.*
