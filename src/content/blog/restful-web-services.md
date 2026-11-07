---
title: "Restful (REST) Web Services"
description: "What REST (Representational State Transfer) is, how RESTful web services work, the constraints of REST architecture — stateless, client-server, cacheable, layered, uniform interface — and the key HTTP response headers and their uses."
pubDate: 2018-12-27
category: "Core Tech & Programming"
subcategory: "REST APIs"
draft: false
---

## What is a Web Service?

A web service is a collection of open protocols and standards (XML, SOAP, HTTP) that are used for interacting or exchanging data between systems or web-based applications. A variety of software applications written in different languages and running on different platforms use Software applications written in various programming languages and running on various platforms that can use web services to exchange data over computer networks like the Internet like inter-process communication on a single computer.

## What is REST?

REST stands for Representational State Transfer. It is a simple, scalable stateless architecture used in enterprise web applications that runs over HTTPS.

It is a web standards-based architecture and uses HTTP Protocol for data communication. It revolves around resources, where every component is a resource and a resource is accessed by a common interface using HTTP standard methods. REST was first introduced by Roy Fielding in 2000.

In a REST architecture, a REST Server simply provides access to resources, and a REST client accesses and presents the resources. Here, each resource is identified by URIs/ global IDs. REST uses various representations to represent a resource like text, JSON, and XML. Nowadays, JSON is the most popular format being used in web services.

## RESTful Web Services

Web services based on REST Architecture are known as RESTful web services. These web services use HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, a Uniform Resource Identifier, a service, that provides resource representations such as JSON and a set of HTTP Methods. RESTful web services make use of HTTP protocol as a medium of communication between client and server.

REST mainly uses HTTP methods like GET, HEAD, POST, PUT and DELETE methods to indicate the action to be performed on the identified resource.

## Constraints of REST

Restful web service has the following constraints.

### Stateless:

The stateless protocol is a communications protocol that treats each request as an independent transaction that is unrelated to any previous request so that the communication consists of independent pairs of requests and responses. A stateless protocol does not require the server to retain session information or status about each communications partner for the duration of multiple requests.

### Client-Server:

A uniform interface separates clients from servers. This separation of concerns means that, for example, clients are not concerned with data storage, which remains internal to each server, so that the portability of client code is improved. Servers are not concerned with the user interface or user state, e.g. (UUI) so servers can be simpler and more scalable. Servers and clients may also be replaced and developed independently, as long as the interface between them is not altered.

### Cacheable:

Clients can cache responses. Responses must therefore, implicitly or explicitly, define themselves as cacheable, or not, to prevent clients from reusing stale or inappropriate data in response to further requests

### Layered system – Service Chaining

A client cannot ordinarily tell whether it is connected directly to the end server, or to an intermediary along the way. Intermediary servers may improve system scalability by enabling load balancing and by providing shared caches. They may also enforce security policies.

### Uniform interface:

The uniform interface constraint is fundamental to the design of any REST service. The uniform interface simplifies and decouples the architecture, which enables each part to evolve independently. The Uniform interface in the REST API has certain constraints that we need to keep in mind while designing an application based on REST APIs. Four of these constraints are explained below.

#### Identification of resources

Individual resources are identified in requests, for example using URIs in Web-based REST systems. The resources themselves are conceptually separate from the representations that are returned to the client. For example, the server may send data from its database as HTML, XML, or JSON, none of which are the server's internal representation, and it is the same resource regardless.

#### Manipulation of resources through these representations

When a client holds a representation of a resource, including any metadata attached, it has enough information to modify or delete the resource.

- Self-descriptive messages

Each message includes enough information to describe how to process the message. For example, which parser to invoke may be specified by an Internet media type (previously known as a MIME type). Responses also explicitly indicate their cacheablity.

- Hypermedia as the engine of application state (HATEOAS)

Clients make state transitions only through actions that are dynamically identified within hypermedia by the server (e.g., by hyperlinks within hypertext). Except for simply fixed entry points to the application, a client does not assume that any particular action is available for any particular resources beyond those described in representations previously received from the server.

## REST API Response Headers

[REST](https://www.nitendratech.com/programming/restful-web-services/) API headers play an important part in API development, as they represent the meta-data associated with connecting to the API.

Each of the supported rest API methods can be overridden if you set the `X-http-method-override` header. The `Accept` and `Content-Type` request headers are required for proper data formatting. These request headers have the following valid values:

- `Accept: application/json, application/xml`
- `Content-Type: application/json, application/xml`

### REST API HTTP Response Header and their Uses

The below table shows some important REST API HTTP response headers and their uses.

| Header | Uses |
| --- | --- |
| **Date Header** | It provides the date and time of the resource when it was created |
| **Last-Modified header** | It provides the date and time of the resource when it was last modified |
| **Cache-Control** | It is the primary header of the HTTP response that provides control over caching |
| **Expires header** | sets expiration date and time of caching |
| **Public directive of Cache-Control Header** | It indicates that the resource is cacheable by any component |
| **Private directive of Cache-Control Header** | It indicates that the resource is cacheable by only the client and server. No intermediary can cache the resource |
| **no-cache or no-store directive of Cache-Control Header** | It indicates that the resource is not cacheable |
| **Max-Age directive of Cache-Control Header** | It indicates that the caching is valid up to max-age in seconds. After this, the client has to make another request. |
| **Must-revalidate directive of Cache-Control Header** | It provides an indication to the server to re-validate resources if max-age has passed. |

## References

[REST Architecture](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)

[REST API tutorials](http://www.restapitutorial.com/)

---

*Originally published on nitendratech.com on 2018-12-27, updated 2024-02-18.*
