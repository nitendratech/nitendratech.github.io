---
title: "Install Docker on Mac OS X"
description: "How to install Docker Desktop on Mac OS X — downloading the Docker.dmg, installing it, and verifying the setup with the hello-world container, image and container listings, and docker help."
pubDate: 2020-03-07
category: "Cloud & Architecture"
subcategory: "Docker"
draft: false
---

[Docker](/blog/docker-interview-questions/) is a development platform used to build, run, compile, and share applications in a containerized environment. [Containerization](/blog/learn-containerization/) is the process of packaging all the application dependencies and configurations together so that the same container can be run in various environments.

As a developer, we need to work on many virtual machines. I used mainly VMware and Virtual box when I was using windows. When you work on virtual machines in Mac OS X, you can use Docker to work with virtual machines. If we want to use docker on Mac, Docker desktop is the best tool to use.

## Download Docker on Mac OS X

Go to the [docker hub page](https://hub.docker.com/editions/community/docker-ce-desktop-mac/) to get the community edition of the Docker.

![](/images/docker_hub_page.png)

Click the Get Docker link from the browser or use the command to download the files from Url in the downloads folder.

```bash
~ % cd Downloads
% curl -o Docker.dmg https://download.docker.com/mac/stable/Docker.dmg
 % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                Dload  Upload   Total   Spent    Left  Speed
32  674M   32  220M    0     0  12.1M      0  0:00:55  0:00:18  0:00:37 11.5M
```

Once the file is downloaded you can install Docker by double-clicking the Docker.dmg file.

![](/images/docker_drag_drop.png)

Once this installation is complete, you will see an icon of Docker in Launchpad and installed location through terminal. Click on the icon from the launchpad when you want to use it.

![](/images/docker_Launchpad.png)

Once you start the docker it's menu will come up in the main title window. you can sign in using the docker user name and password or sign up for a new one if you don't have it. You need to sign in to use many of the images the docker provides.

![](/images/docker_logo.png)

Let's use the terminal to check the status of installation.

![](/images/docker_terminal.png)

## Test the Docker Installation

Run the `docker --version` command to check the docker version

```bash
~ % docker --version
Docker version 19.03.8, build afacb8b
```

Pull the [hello-world image](https://hub.docker.com/r/library/hello-world/) from Docker Hub and run a container:

```bash
~ % docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
1b930d010525: Pull complete
Digest: sha256:f9dfddf63636d84ef479d645ab5885156ae030f611a56f3a7ac7f2fdd86d7e4e
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
```

## List the Images

Lets List the `hello-world` image that was downloaded from docker using `docker image ls` command.

```bash
~ % docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
hello-world         latest              fce289e99eb9        15 months ago       1.84kB
```

## Exploring Docker helo

```bash
~ % docker --help

Usage:	docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files
                           (default "/Users/nitendragautam/.docker")
  -c, --context string     Name of the context to use to connect
                           to the daemon (overrides DOCKER_HOST
                           env var and default
```

## List the Containers

If you want to list the installed containers, use the `docker container ls --all` command

```bash
~ % docker container --help
~ % docker run --help
```

---

*Originally published on nitendratech.com on 2020-03-07, updated 2024-08-03.*
