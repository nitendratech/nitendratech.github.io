---
title: "Important Kubernetes Interview Questions"
description: "Important Kubernetes interview questions and answers — what Kubernetes is, clusters, load balancing, pods, namespaces, ingress, kubectl, Prometheus monitoring, and secrets."
pubDate: 2022-03-31
category: "Cloud & Architecture"
subcategory: "Interview Questions"
draft: false
---

In this blog post, we will go through important Kubernetes Interview questions and answers that will help you prepare for the next Kubernetes Interview.

## What is Kubernetes?

Kubernetes is an open-source container orchestration platform that was developed by Google. Google donated the Kubernetes project to the Cloud Native Computing Foundation(CNCF)in 2015. It is used to automate the management monitoring, scaling, and deployment of containerized applications. It helps to manage those containers as individual units. Furthermore, it helps the DevOps and developers team to manage those containers easily

## How is Kubernetes related to Docker?

Docker is software that is used to run containerized applications. Docker helps to provide the lifecycle management of containers through Docker image. We use Docker images to build runtime containers and orchestrate them by using Kubernetes. Kubernetes comes into the picture when these individual containers need to communicate with each other. So we can have different containers that run on multiple hosts that can be manually linked and orchestrated by making use of Kubernetes.

## What do you mean by Container Orchestration?

Container Orchestration is a process through which components and processes related to running containers are automated. When we work with containers, we can automate items like resource allocation, availability, and scheduling containers.

## How does Kubernetes balance the load in Kubernetes?

Load balancing is a process to distribute the incoming traffic to multiple backend servers so that the application running on Kubernetes does not face any downtime.

The load balancer in the Kubernetes cluster is a way to expose the service to the outside internet and distribute the tasks. This load balancer uses a different algorithm to route the incoming traffic to the Kubernetes pod (through service). If any of the pods goes down, the load balancer gets notified so that the incoming traffic is not routed to that particular unavailable node.

## What are the different Kubernetes Load Balancing?

There are two types of load balancing in the K8s cluster. They are given below.

- **Internal load balancer** – This load balancer is used for handling internal load within the K8s cluster. It allocates the pods with the required incoming load.
- **External Load Balancer** – This type of load balancer is used to direct the traffic from external loads to the backend Kubernetes Pods.

## What is a Kubernetes cluster?

A Kubernetes cluster is a set of virtual or physical nodes that are used to run containerized applications.

## How can we monitor the K8s cluster?

We can use the Prometheus ecosystem for K8s monitoring that is used to collect the resource level metrics such as CPU, memory, and disk usage. This Prometheus server scraps and stores the time series data.

## How can we run Kubernetes Locally?

We can set up Kubernetes locally using the `minikube` tool that runs a single node in a Virtual Machine on the computer. Anyone who wants to learn Kubernetes can use this tool to run Kubernetes locally.

## What are the different components of Kubernetes?

There are mainly three components of Kubernetes.

- Control Plane Components
- Node components
- Add-ons

## What are the different Layers in Kubernetes architecture?

There are two main layers in Kubernetes architecture.

- **Control Plane Layer**: It is the container orchestration layer that includes two objects. (a) Kubernetes objects that control the cluster. (b) The data about the cluster's state and configuration.
- **Data plane**: This processes the data requests and is managed by the control plane.

## What is Kubernetes Network Policy?

Network Policies in Kubernetes are application-specific policies that are used to define how the pods in the same namespace would communicate with various network entities over the network.

## What is Ingress Network in Kubernetes?

An Ingress network is defined as a collection of rules that permits outside connection into the Kubernetes cluster.

## What is an Ingress?

An ingress is an API object that helps to expose HTTP and HTTPS routes from external applications to services within the Kubernetes cluster.

## What is a `kubectl` command in Kubernetes?

`kubectl` is the command-line interface for Kubernetes through which we can communicate with a Kubernetes API server. This command-line configuration tool allows the users to create, inspect, delete, and update the Kubernetes object.

## What is a pod in Kubernetes?

Pods are the small and most basic deployable units that we can create and manage in Kubernetes. They consist of a group of containers sharing a network and running in the cluster.

## What is Prometheus in Kubernetes?

Prometheus is an open-source monitoring framework that is used for monitoring and alerting applications deployed in Kubernetes. It is used to collect real-time metrics like counts, memory/CPU/disk utilization, and bandwidth metrics. We can create a dashboard from these metrics or store it in some kind of database.

## What is a Namespace in Kubernetes?

Namespaces is a separate workspace or name given to that Kubernetes can divide the cluster resources between multiple users. As many users or applications can run on Kubernetes at the same time, the namespace is used to spread the resources among those users. With a namespace, a user can get a portion of the cluster just for them.

## What are Init Containers in Kubernetes?

Init containers are the first containers that get executed before any other containers in the pod.

## How can we delete all pods in a particular Kubernetes namespace?

We can use the `kubectl delete --all pods` command to delete all the pods in a particular namespace. Let's take an example below.

```bash
kubectl delete --all pods --namespace=nitendratech
```

## What is Sidecar Container in Kubernetes?

A sidecar container in Kubernetes is a utility container that is used to extend the functionality of the main container. A common usage of this sidecar container is to collect the logs from the main container and ship them to external services like Splunk.

## What do you understand by Secrets in Kubernetes?

Secrets are sensitive information like login credentials for an API, database, or user. In Kubernetes, it is stored as objects after applying encryption

---

*Originally published on nitendratech.com on 2022-03-31, updated 2024-02-18.*
