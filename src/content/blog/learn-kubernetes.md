---
title: "What is Kubernetes?"
description: "Kubernetes (k8s) explained — what the open-source container orchestration platform does, its declarative configuration model, why it is popular, and core concepts such as pods, nodes, services, and deployments."
pubDate: 2023-03-08
category: "Cloud & Architecture"
subcategory: "Kubernetes"
draft: false
---

Kubernetes is an open-source orchestration platform that automates the deployment, scaling, and management of [containerized](/blog/learn-containerization/) applications. It was originally developed by Google and is now maintained by the cloud native computing foundation(CNCF). It is also known as `k8s` in short form. Furthermore, it has become one of the most popular tools for container orchestration.

Kubernetes provides a variety of extensible and flexible sets of APIs, along with a large ecosystem of tools and plugins. With Kubernetes, one can easily deploy and manage containers across a cluster of machines, automatically scaling your applications depending upon the demand. This makes it ideal for an organization to manage its cloud-native and modern applications that must be designed with distribution, resiliency, and scalability in mind.

Kubernetes is used by many organizations, ranging from small startups to large enterprises. It is popular among those organizations that are building cloud-native applications based on microservice architecture. It is also integrated into DevOps and CI/CD workflows, providing a consistent and automated platform for deploying and managing applications.

## Configuration Model in Kubernetes

Kubernetes follows a declarative style configuration model that allows defining the desired state of the application in YAML file format. Once you define the desired state, Kubernetes takes care of matching your application with the desired state. It makes it easier for organizations to manage their complex, multi-component application with many moving parts, leading to minimal configuration error and downtime.

Kubernetes also provides several advanced features for managing containerized applications, including rolling updates, automated rollbacks, self-healing, and horizontal scaling. These features enable organizations to deploy and manage applications with confidence, knowing that Kubernetes will handle the complexities of managing containers at scale.

## Popularity of Kubernetes

There are many reasons for Kubernetes to be popular. Some of the key reasons are given below.

### Container Orchestration

Kubernetes provides various sets of tools for orchestration, automated deployment, scaling, and management of containerized applications.

### Portability

Kubernetes allows developers to deploy their applications to a wide variety of cloud and on-premise environments, making it a desirable choice for hybrid and multi-cloud architectures. It also offers various deployment options such as blue-green, canary, and rolling updates. This ensures seamless updates and rollbacks of applications and makes sure the application is both available and stable during the deployment process.

### Scalability

Kubernetes is designed from the ground up to be highly scalable, which allows it to handle large and complex applications with ease. It allows for the automated scaling of applications based on resource utilization, ensuring that applications can handle increased traffic and workload.

### Flexibility

Kubernetes is highly configurable, allowing organizations to adapt it to a wide range of workloads and use cases. It also offers various features for managing storage, networking, and security. It offers various storage options such as local, cloud-based, and network storage solutions. Not only that, but it also offers various networking solutions such as service discovery, load balancing, and network policies.

### Security

Kubernetes supports various security features such as role-based access control, remote management, and network policies that help to ensure the application is secure and compliant with current industry standards and regulations.

### Community Support

As Kubernetes has a large and active community of developers and contributors, it has helped to drive its adoption and development among organizations over the years.

## Important concepts of Kubernetes

For one to learn about Kubernetes, they’ll need to understand, its important concepts.

- **Nodes:** A node is a physical or virtual machine in a Kubernetes cluster. Each node is responsible for running one or more containers. The Kubernetes master is responsible for coordinating the scheduling of containers into nodes.
- **Pods:** A pod is the smallest deployable unit in Kubernetes that represents a single instance of a running process in a cluster. Kubernetes pods can contain one or more containers that can share the name namespace and storage volumes.
- **Namespaces:** A namespace is a virtual cluster or logical units within a Kubernetes cluster. It is used to divide a cluster into small logical units to organize the existing resources and provide access controls. It makes sure that different teams and applications run their jobs in an isolated environment while sharing the same cluster.
- **Services:** A service in Kubernetes is an abstraction that defines a logical set of pods and policies by which to access them. It allows communication between different parts of an application or between different applications within a Kubernetes cluster.
- **Replication controllers:** A replication controller is a Kubernetes object that ensures a specified number of replicas of pods are spinning at a given time. If any of the pods fails or is deleted, the replication controller automatically creates new pods to replace them.
- **Deployments:** Deployment is a concept in Kubernetes that provides declarative updates to pods and replica sets. It is used to manage the deployment and configuration change for new or existing applications.
- **ConfigMaps:** ConfigMaps are Kubernetes Object that allow decoupling configuration data from application code. It can be used to store key-value pairs, files, or entire directories of configuration data.
- **Secrets:** Secrets are similar to config maps, but are designed to store sensitive information such as passwords, passcode, keys, secrets, or confidential data. It is also used to provide secure access to external services, databases, or other resources.
- **Labels:** Labels are key-value pairs that are attached to Kubernetes objects. They are used to organize and select subsets of resources based on common properties such as application name or version.
- **Annotations:** Annotations are similar to labels that are used to store information such as build or release numbers or provide a context without specifying a particular object. They are designed for attaching non-identifying metadata to Kubernetes objects.

## Organization using Kubernetes

Many organizations use Kubernetes for managing containerization applications. Below are some popular organizations that use Kubernetes.

- Google
- Oracle
- Uber
- Lyft
- Shopify
- AT&T
- Github
- Spotify
- Amazon Web Services(AWS)
- Red Hat
- Microsoft
- Huawei

---

*Originally published on nitendratech.com on 2023-03-08, updated 2024-08-03.*
