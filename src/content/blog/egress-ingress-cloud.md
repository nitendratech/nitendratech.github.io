---
title: "What do Egress and Ingress Mean?"
description: "What egress and ingress network traffic mean in cloud and on-premise systems, with examples of each and the data-exfiltration threats organizations need to watch for."
pubDate: 2022-04-27
category: "Cloud & Architecture"
subcategory: "Cloud Networking"
draft: false
---

Most Information technology-based organizations use the internet to transfer data or communication with each other. There are mainly two types of network-based activities in an organization: Ingress and Egress.

Anyone who wants to work on a scalable distributed system using containerized applications, either on-premise or in the cloud needs to understand this concept. Let us understand them in detail.

## Egress Traffic

Egress traffic is such traffic that originates inside a private network and leaves that network to an external location that can be a public network or the internet.

Some popular examples of Egress traffic are below.

- Email
- Upload of documents/images in the cloud
- Movement of files and documents to external storage.
- HTTP or FTP transfers

## Ingress Traffic

Ingress traffic is such traffic that travels from an external network or public internet to the internet within a private network. So the data or traffic is generated outside the network.

Some popular examples of Ingress traffic are given below.

- Downloading of files from the public cloud
- Receiving emails from outside the network.

## Threat with Network-based activities

Organizations need to be careful while sending the data outside their network as part of egress traffic, as some sensitive and proprietary information is targeted by individuals having malicious intent. They use different methods such as phishing, and cloud upload to steal data from the employees. Data must be encrypted while sending the data outside the organization.

There are many data exfiltration techniques that bad actors use to cause harm to organizations. Some of them are given below.

- Social Engineering
- Backdoor Trojans
- Malware

All of these techniques are used to steal and intercept an organization's network, which can cause confidential data leakage. There are other techniques like SQL injection that are also used by bad actors to penetrate an organization's network.

---

*Originally published on nitendratech.com on 2022-04-27, updated 2022-06-06.*
