---
title: "Linux Networking Commands"
description: "Useful Linux networking commands — ssh, telnet, sftp, and ftp for remote access, scp for securely copying files between hosts, uname and hostname for host information, ifconfig for configuring a network interface, ping to check if a host is reachable, and wget for downloading files."
pubDate: 2019-09-27
category: "Core Tech & Programming"
subcategory: "Linux"
---

This post includes some of the useful and important [Linux](https://www.nitendratech.com/linux/bash-script/) networking commands.

## Networking Commands

```bash
~$ssh -securely log into remote hosts
~$telnet :log into remote hosts
~$sftp :securely transfers files between hosts
~$ftp :Copy file between hosts
```

## Securely copy Files between hosts

We use the SCP command to securely copy files from local to remote servers.

```bash
Syntax: ~$scp -P <port_no> <file_location_with_name> <user-name>@<ip-address>:<remote-location-to-copy>
```

```bash
Example: Copying file from
~scp file1.tar.bz2 hduser@192.168.133.128:/home/hduser/
```

### Host related Command

```bash
~$uname
```

It gives information on the flavor of Linux distribution

```bash
~$uname
Linux
~$uname -a :prints the system information in Details
Example:
nitendragautam@Nemo:/home$ uname -a
Linux Nemo 4.4.0-43-Microsoft #1-Microsoft Wed Dec 31 14:42:53 PST 2014 x86_64 x86_64 x86_64 GNU/Linux
```

### Checking the Linux box Related Information

```bash
~$hostname :prints the system hostname
Example:
 $~hostname
Nemo
~$hostname -f : prints the full hostname
Example:

nitendragautam@Nemo:/mnt/c/Users/nitendragautam$ hostname -f
Nemo.localdomain
```

### Configure a network interface

We can use `ifconfig` to configure the network interface.

```bash
$ ifconfig
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 1500
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0xfe<compat,link,site,host>
        loop  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wifi0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 195.167.0.12  netmask 255.255.255.0  broadcast 191.158.0.255
        inet6 2605:6000:8a53:1600:9140:dc9d:65e4:5d67  prefixlen 64  scopeid 0x0<global>

        inet6 fe80::9140:dc9d:65e4:5d67  prefixlen 64  scopeid 0xfd<compat,link,site,host>
        ether d0:57:7b:c2:c8:38  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0 overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

## Check if the host is reachable

We can use the `ping` command to check if the host is reachable.

```bash
$~ ping www.google.com
PING www.google.com (172.217.6.132) 56(84) bytes of data.
64 bytes from dfw25s16-in-f4.1e100.net (172.217.6.132): icmp_seq=2 ttl=53 time=17.1 ms
64 bytes from dfw25s16-in-f4.1e100.net (172.217.6.132): icmp_seq=3 ttl=53 time=16.1 ms
^C
--- www.google.com ping statistics ---
3 packets transmitted, 2 received, 33% packet loss, time 2007ms
rtt min/avg/max/mdev = 16.107/16.649/17.191/0.542 ms
```

### Download file over the network

```bash
wget <url Link>:retrieve/download webpages to disk

Example: wget http://mirrors.gigenet.com/apache/hadoop/common/hadoop-2.8.2/hadoop-2.8.2.tar.gz
```

---

*Originally published on nitendratech.com on 2019-09-27, updated 2024-08-03.*
