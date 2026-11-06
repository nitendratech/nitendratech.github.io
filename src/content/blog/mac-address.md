---
title: "What is MAC Address?"
description: "What a MAC address is — the 48-bit hardware address assigned to a network interface controller (NIC), its hexadecimal format and vendor OUI, whether a device can have multiple MAC addresses, and the ifconfig command to display it."
pubDate: 2021-09-03
category: "Core Tech & Programming"
subcategory: "Linux"
---

MAC or Media Access Control address is a hardware address that is assigned to a network interface controller/(NIC) that is used in the same network segment. They are mostly used in IEEE 802 networking technologies like Ethernet, Wi-Fit, and Bluetooth. They are also known as a burned-in addresses, or as Ethernet hardware addresses, hardware addresses, or physical addresses.

## What does a MAC address look like?

MAC addresses are written in the form of Hexadecimal digits. This address is 48-bit in length and is stored in the firmware of the network interface card. They are globally unique addresses. it means every hardware address is unique. Each network card vendor gets it to share addresses by using a pattern in the address. First 24 bits of the MAC address belongs to the hardware vendor and next 24 bit is the address of the hardware. They typically include the manufacturer identifier known as organizationally Unique Identifier(OUI).

MAC address is a 12 digit hexadecimal number in which two digits(an octet) are separated by either colon or hyphen.

Example: This is a sample MAC address. 00:07:C2:1C:5C:04 or 00-07-C2-1C-5C-04

## Can a Device have Mutiple MAC address?

Yes. A MAC address for a device is unique for each network interface. It means if I connect to the internet using Wifi and Ethernet port using my Wifi, my laptop can have two MAC addresses associated it with

Below is the command that displays your MAC address.

```
% ifconfig -a
en5: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	ether  00:07:C2:1C:5C:04
	inet6 ge80::bede:58fh:ge00:2122%en5 prefixlen 64 scopeid 0x4
	status: active
```

---

*Originally published on nitendratech.com on 2021-09-03, updated 2021-08-31.*
