---
title: "Introduction to MicroServices"
description: "An introduction to microservices architecture — building applications as small, independently deployable services instead of a single monolith, and the challenge of maintaining data consistency across them."
pubDate: 2017-05-22
category: "Cloud & Architecture"
subcategory: "Microservices"
draft: false
---

Microservice architecture, or simply microservices, is a distinctive method of developing software applications as a suite of independently deployable, small, modular services. Each service in microservice runs a unique process and communicates through a well-defined, lightweight mechanism to serve a business goal.

Microservices are a highly scalable architecture. This architecture is considered particularly ideal when you have to enable support for a range of platforms and devices-spanning web, mobile, [Internet of Things (IoT),](/blog/internet-of-things/) and wearables. [REST (Representational State Transfer)](/blog/restful-web-services/) with JSON(JavaScript Object Notation) or Protocol Buf is the data exchange format for microservices.

They are opposite to the monolithic architecture style, which is built upon a single autonomous unit. In a client-server model-based architecture, the server-side application is a monolith that handles the HTTP requests, executes logic, and retrieves/updates the data in the underlying database. A small change applied to a small section of the application might require building and deploying an entirely new version. If we want to scale up specific functions of an application, we have to scale the entire application instead of just desired components.

![Microservice Architecture](/images/monolithic-vs-microservices-architecture.png)

Figure: [Monothilic Vs MicroServices Architecture](https://howtodoinjava.com/microservices/microservices-definition-principles-benefits)

## Handling MicroServices

A monolithic application is broken down into multiple microservices when designing a microservices-based architecture. One of the main problems is maintaining data consistency within these services, as these services are in a distributed environment. Most people working on microservices agree that it should implement the Single Responsibility Principle (SPR) so that it can manage its own transaction.

A monolithic application consists of multiple libraries in a single process, which makes it difficult to change any components separately in the service. But if the same application is decoupled into multiple services, any change to a single service will affect only that service.

## References

[What-are-micro-services](https://smartbear.com/learn/api-design/what-are-microservices/)

[monolithic-vs-microservices-architecture](https://articles.microservices.com/monolithic-vs-microservices-architecture-5c4848858f59)

[Microservices Enterprise Integration](http://kasunpanorama.blogspot.com/2016/02/microservices-enterprise-integration.html)

---

*Originally published on nitendratech.com on 2017-05-22, updated 2022-06-06.*
