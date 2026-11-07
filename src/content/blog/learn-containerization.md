---
title: "What is Containerization?"
description: "An introduction to containerization — how containers differ from virtual machines, why teams adopt them, the applications they run, and the major container technologies and companies using them."
pubDate: 2020-08-30
category: "Cloud & Architecture"
subcategory: "Containers"
draft: false
---

Containerization is defined as a new Operating System (OS) based virtualization technique through which applications are executed in isolated spaces called containers while using the same operating system. Containers share the same host kernel internally. They are isolated from each other through private user spaces (also called namespaces) and resource control mechanisms at the OS level.

## Container Vs Virtual Machine

A containerization is a modern approach to server virtualization. Container-based virtualization provides different abstractions and isolation when compared to hypervisors. Traditional hypervisor-based virtualization uses a lot of hardware, which causes overhead for the infrastructure team.

The virtual machine runs a fully-fledged operating system like Linux/Windows on top of virtualized hardware in each of its running instances. In virtual machines, a hypervisor layer resides between memory, storage, and computing and the operating system and its application/services. Each application in a virtual machine runs on its own version of the Operating System(OS).

Containers, on the other hand, use the same shared operating system kernel of the underlying host machine by implementing isolation of processes at the operating system level. While doing so, the container utilizes the resource better in comparison to virtual machines and has a short start-up process. Containers-based applications are to be started in seconds, whereas virtual machines take minutes to start.

![](https://www.nitendratech.com/wp-content/uploads/2020/08/container_vs_vm.png)

## Purpose of Containerization

Containerized applications have a lot of benefits in comparison to virtualized applications.

**It** allows developers and teams to create and deploy applications faster and more securely.

- Reduced Cost and Less Overhead
- Encourages Agile-based software Development
- Provides fault isolation for applications
- Provides easier management of Applications

## Types of Applications/Services running on Containers

Containers support all types of applications.

- Databases
- Microservices
- Stand-alone applications
- Web Servers: Different web servers
- A container within Virtual Machines

## Types of Application Containerization Technology

There are many technologies for application containerization besides docker.

- **Google Kubernetes Engine**: It is a production-ready environment for deploying applications managed by Google. It allows the team to rapidly develop applications iteratively and easily deploy, manage, and update applications and services.
- **Apache Mesos:** It is an open-source cluster manager that was developed at the University of California, Berkeley. It allows the team to handle the workloads in a distributed environment through dynamic
- **Azure Kubernetes Services(AKS)**: It is the cloud-based managed service provided by Microsoft to deploy Kubernetes-based applications.
- **Amazon Elastic Container Registry (ECR):** It is a fully managed container registry that easily allows developers to store, manage and deploy Docker container images.
- Mirantis Kubernetes Engine(formerly known as Docker Enterprise): It provides Kubernetes as a Service experience that can run modern applications smoothly.

## Companies using Containerization Technology

Containerization has been one of the most popular technologies in recent years to be used by large companies. Some of the biggest technology companies using containerization include.

- Google
- [Amazon](https://www.nitendratech.com/technology/learn-aws/)
- Microsoft
- IBM
- Netflix
- Uber
- Airbnb

---

*Originally published on nitendratech.com on 2020-08-30, updated 2024-08-03.*
