---
title: "Important Amazon Web Services(AWS) Interview Questions"
description: "Common AWS interview questions and answers covering AWS features and solutions, EC2 instance types, core components such as S3, EC2, IAM and VPC, auto scaling, policies, roles, key pairs, and availability zones."
pubDate: 2022-01-05
category: "Cloud & Architecture"
subcategory: "Interview Questions"
draft: false
---

In this blog post, we will look at some common Amazon Web Services(AWS) based questions that are asked during an interview.

**Question: What do you mean by AWS?**

**Answer:** AWS, or Amazon Web Services, is a subsidiary of Amazon. It provides certain on-demand resources for hosting web services, storage, networking, databases, and other resources over the Internet with a pay-as-the-user-go pricing system.

**Question: What are the Features of AWS-based Cloud Infrastructure?**

**Answer:** Amazon AWS is available in more than 245 countries and territories, with 26 + Launched Regions. AWS is being used by customers across many industries of every size, ranging from start-ups to big enterprises.

Below are some features provided by AWS.

- Security
- Availability
- Performance
- Global Footprint
- Scalability
- Flexibility

**Question: What are the Solutions provided by Amazon AWS?**

**Answer:** AWS has many products that are used in many verticals. Some important ones are listed below.

- Analytics (EMR, Kinesis, Redshift, Glue, Quick Sight)
- Application Integration
- AR & VR (Amazon Sumerian)
- Blockchain (Quantum Ledger Database)
- Containers (Amazon EKS, Elastic Container Service)
- Storage (S3, EBS, EFS, AWS Storage Gateway)
- Business Applications (Alexa, Chime)
- Gaming Technology (Amazon GameLift, Amazon Lumberyard)
- Network and Content Delivery (VPC, API Gateway, Elastic Load Balancing)
- Compute (EC2, EC2 Auto Scaling, AWS Lambda, VMware cloud)

**Question: What are the various types of AWS EC2 instances?**

**Answer:** AWS EC2 has various instances based on its uses, which are listed below.

- General-purpose
- Storage Optimized
- Accelerated Computing
- Computer Optimized
- Memory-Optimized

**Question: What are the components of AWS?**

**Answer:** There are many components in AWS. Some important and popular ones are listed below.

- **Simple Storage Service(S3)**: It's a service that provides Storage on AWS
- **Elastic Block Store (EBS):** Provides persistent storage volumes on ECS instances that last beyond that EC2 instance lifetime.
- **Identity and Access Management/IAM) :** Provides enhanced security and identity management for AWS accounts.
- **Simple E-mail Service:** Allows sending an email using RESTful API call or through SMTP
- **Cloud Watch**: A monitoring service for administrators to monitor/view/alert and collect data
- **Elastic Compute Cloud(EC2)**: Provides on-demand computing resources for hosting applications.
- **Route54**: A web service for DNS

**Question: What do you understand by Autoscaling and its components in AWS?**

**Answer:** Autoscaling allows users to automatically scale up or scale down their resources depending upon the CPU and memory utilization. We need to configure the Auto-Scaling group for launch configuration for setting up Auto Scaling in AWS instances.

**Question: What are the benefits of auto-scaling in AWS?**

**Answer:** Auto Scaling provides several benefits, which are listed below.

- Service is Available all the times
- Cost is managed appropriately, as fewer resources will be used when demand is less.
- Higher Fault Tolerant

**Question: What do you mean by Roles in AWS?**

**Answer:** Roles in AWS are mainly permissions that are applied to users that are not part of your AWS account. These roles are used in another AWS account.

**Question: What do you understand by Policy in AWS, and what are the types of policies?**

**Answer:** Identity-based policies allow control of what actions an identity (users, groups of users, and roles) can perform on which resources. They are declared as JSON(JavaScript Object Notation) objects. These policies contain all the access that the user has for that particular service.

In terms of Managing the policies based on identity, it can be divided into two categories. They are managed Policies and Inline Policies.

## Managed Policies

These policies are pre-defined standalone identity policies that can be applied to multiple user groups and roles in the AWS account. There are two types of Managed Policies.

- AWS Managed Policies
- Customer Managed Policies

## Inline Policies

These inline Policies are added directly to a single user, group, or role. When we delete the identity, these inline policies also get deleted.

**Question: What are the types of access in AWS that can be provided when creating users?**

**Answer:** Two types of AWS access are provided when creating users.

- Programmatic Access
- Console Access.

**Question: What do you understand by Amazon S3?**

**Answer:** Amazon S3 stands for Simple Storage Service. It is a storage service by AWS that is used to store and retrieve any amount of data, at any time and from anywhere on the web. Amazon S3 has a pay-as-you-go pricing model that charges based on usage.

**Question: What do you understand by Amazon EC2?**

**Answer:** Amazon EC2 stands for Amazon Elastic Compute Cloud. It is a virtual machine in the AWS cloud on which we have Operating System-level control. We can start this cloud-based server whenever we want and deploy our applications in the cloud.

**Question: What is a Virtual Private Cloud(VPC) in a cloud environment?**

**Answer:** VPC stands for Virtual Private Cloud. It is a network through which we can customize our networking configuration and logically isolate our network from another network in the cloud environment. Using VPC, we can have our private IP Address range, subnets, internet gateways, and security groups.

**Question: How do you monitor Amazon VPC?**

**Answer:** We can monitor Amazon VPC using CloudWatch and VPC Flow Logs.

**Question: What are Key-Pairs in AWS?**

**Answer:** Key-Pairs are the secure login information for the virtual machines that contain a Public Key and Private Key. We can use these key pairs to connect to the instances.

**Question: What is Snowball in AWS?**

**Answer:** Snowball is a data transport solution that allows the transfer of terabytes of data inside and outside the AWS environment. Using these services one can move a huge amount of data from one place to another, reducing network costs, and long transfer times, and providing better security.

**Question: What are the different parameters that are required while choosing an availability zone in AWS?**

**Answer**: The following parameters need to be evaluated when choosing an Availability zone in AWS.

- Performance
- Pricing/Cost
- Latency
- Response time

**Question: What are the different types of storage volumes provided by AWS for EC2 Instances?**

**Answer:** The following volumes are provided by the AWS for EC2 Instances.

- Instance store volumes
- EBS – Elastic Block Stores

---

*Originally published on nitendratech.com on 2022-01-05, updated 2024-02-18.*
