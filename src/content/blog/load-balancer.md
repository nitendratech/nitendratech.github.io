---
title: "What is a Load Balancer? How does load balancing work?"
description: "What a load balancer is, where it sits in an application, its advantages, the common load balancing algorithms, and why redundant load balancers are needed."
pubDate: 2022-02-15
category: "Cloud & Architecture"
subcategory: "System Design"
draft: false
---

Load Balancer or LB in short form is one of the critical components of a distributed system. It helps to spread the incoming request or internet-based traffic across several servers that are located in different clusters. It helps to improve the availability and responsiveness of internet-based applications. This application can be a website, database, API (Application Programming Interface), or application hosted on the internet.

A load balancer keeps track of all the servers or resources that it uses to spread the request. If a server or resource is not responding within a certain time interval, LB will remove that resource from its pool and stop diverting any requests to it. The use of a load balancer helps to prevent the Single Point of Failure(SPOF) in an application as it sits between the client and server, thus diverting all the incoming traffic based on the load on the application.

## Types of Applications Using Load Balancers

Some of the applications that rely on Load balancers are given below.

- **Internet-based services** like Gmail, Google Search, Microsoft Bing, and various applications
- **Video Streaming Platform** like YouTube, Hulu, Netflix, HBO Max
- **Audio Streaming application**s like Apple Music, Pandora, Spotify
- **International Websites** like cnn.com, bbc.com, espn.com, etc.
- **E-Commerce** Websites like Amazon.com, Walmart.com, Etsy.com
- **Databases** like Relational and Non-Relational Databases

## Location of Load Balancer in an Application

The location of the load balancer depends upon the complexity and usage of the application. If the application is a mission-critical application with many users, we need a load balancer in various locations of the system. Below are some places where we can keep the load balancer.

- Between the Web server and Internal application layer
- Between the Internal Application Layer and Database
- Between the user and the Web Server

## Advantages of Load Balancing

There are many advantages that a load balancer provides when used with applications.

- Users will be able to experience faster and uninterrupted service as they don't have to wait for any server to finish previous tasks. Users are passed on to the more reliable and available resources.
- The use of a load balancer helps the service provider to improve their service so that customers don't experience any downtime. If any server or resource fails, LB reroutes that service to another healthy server.
- Less stress on the part of System Administrators as fewer resources experience failure because the incoming loads are distributed across all the resources.

## How does the Load Balancer send the Requests?

The load balancer checks whether the server or resource is healthy or available before sending any request to it. Once this is figured out, an algorithm is used to determine the server to which the request will be sent.

To determine if a server is healthy to receive the request, the load balancer sends a signal regularly to the backend server. If the server or resource fails to send the signal back, it is removed from the pool of healthy servers. Requests to this server are not sent until we determine if the server is healthy or not.

Many algorithms are used for load balancing the requests in a distributed system. We will discuss some common algorithms used in a distributed environment.

- **Round Robin Method**

In this method, an incoming traffic connection is sent to the next adjacent server from a list of servers. When the request is sent to all the servers, it starts from the beginning.

- **Weighted Round Robin Method**

In this method, each of the servers is given a weight based on its allocated resources like memory or processing power. This weight is an integer that determines the capacity of the server. If a server is weighted more or has more weights on it, it receives more connections.

- **The Least Connection Method**

In this method, incoming traffic is sent to the server that has the fewest active connections. This is mainly useful when we have many client connections that are persistent and unevenly distributed in the servers.

- **The Least Response Time Method**

In this method, incoming traffic is sent to the server or resource that has the fewest active connections and the lowest average response time.

- **The Least Bandwidth Method**

In this method, incoming traffic is sent to the server or resource that has the least amount of traffic. Here, the measurement is done in terms of Megabits per second.

- **IP Hash**

In this method, the hash value of the IP (Internet Protocol) address of the clients is calculated so that incoming requests are redirected accordingly.

## Redundant Load Balancers

The purpose of the load balancer is to make applications or services fail-safe. But what happens, if the load balancer goes down? As it happens in real life, the load balancer can also be a single point of failure. To avoid this scenario, applications with high demand need a redundant load balancer so that one load balancer can support it if another one goes down.

---

*Originally published on nitendratech.com on 2022-02-15, updated 2024-02-18.*
