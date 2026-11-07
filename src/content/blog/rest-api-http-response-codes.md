---
title: "Rest API HTTP Response and Request Codes"
description: "Commonly used HTTP status codes in REST APIs — from 200 OK to 500 Internal Server Error — plus the components of an HTTP request and an HTTP response."
pubDate: 2019-11-03
category: "Core Tech & Programming"
subcategory: "REST APIs"
draft: false
---

HTTP Status codes are standard codes and refer to the predefined status of tasks done at the server. For example, HTTP Status 404 states that the requested resource is not present on the server.

Below are some of the commonly used HTTP Status Codes in REST API.

| Status Code | Message | Details |
| --- | --- | --- |
| **200** | OK | It shows success. |
| **201** | CREATED | when a resource is successfully created using POST or PUT requests. Return link to a newly created resources using location header. |
| **204** | NO CONTENT | when the response body is empty for example, a DELETE request. |
| **304** | NOT MODIFIED | It used to reduce network bandwidth usage in case of conditional GET requests. The response body should be empty. Headers should have dates, location etc. |
| **400** | BAD REQUEST | It states that invalid input is provided, e.g. validation error, missing data. The request URI does not match the APIs in the system or the operation failed for unknown reasons. Invalid headers can also, cause this error. |
| **401** | UNAUTHORIZED OR FORBIDDEN | It states that the user is not having access to the method being used, for example, delete access without admin rights. The user is not authorized to use the API |
| **403** | FORBIDDEN | The requested operation is not permitted for the user. This error can also, be caused by ACL failures, or business rule or data policy constraints. |
| **404** | NOT FOUND | It states that the method is not available. The requested resource was not found. This can be caused by an ACL constraint or if the resource does not exist. |
| **405** | METHOD NOT ALLOWED | The HTTP action is not allowed for the requested REST API, or it is not supported by any API. |
| **409** | CONFLICT | states conflict situation while executing the method. for example, adding duplicate entries. |
| **500** | INTERNAL SERVER ERROR | It states that the server has thrown some exception while executing the method. |

## Components of an HTTP Request

| Components | Description | Examples |
| --- | --- | --- |
| **Verb** | Identifies the operation/HTTP Methods to be performed on the resource | GET, POST, DELETE, PUT etc. |
| **Uniform Resource Identifier(URI)** | Used to identify the resource on the server. | Example URI |
| **HTTP Version** | Indicate HTTP version | for example, HTTP v1.1 |
| **Request Header** | Contains metadata for the HTTP Request message as key-value pairs. | For example, client ( or browser) type, format supported by the client, the format of the message body, cache settings, etc. |
| **Request Body** | Message content or Resource representation | {“firstName”:”Nitendra”,”lastName”:”Gautam”} |

## Components of an HTTP Response

| Components | Description | Examples |
| --- | --- | --- |
| **Status or Response Code** | Indicate Server status for the requested resource | 404, 200 |
| **HTTP Version** | Indicate HTTP version | for example HTTP v1.1 |
| **Response Header** | Contains metadata for the HTTP Response message as key-value pairs | content length, content type, response date, server type etc. |
| **Response Body** | Response message content or Resource representation | `{"status":"success"}` |

---

*Originally published on nitendratech.com on 2019-11-03, updated 2022-06-06.*
