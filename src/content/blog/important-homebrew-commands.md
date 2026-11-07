---
title: "Important Homebrew Commands"
description: "A quick reference of important Homebrew commands for installing, upgrading, listing, and removing packages and cask applications from the command line."
pubDate: 2020-05-02
category: "Core Tech & Programming"
subcategory: "macOS Tools"
draft: false
---

Homebrew is a free and open-source package management system that makes it easier to install software on Apple MacOS and Linux. It is easy to use and integrates well into the Command-Line. It was written by Max Howell in 2009. Likewise, it is one of the most popular projects on GitHub. Furthermore, it is written in the Ruby programming language. This blog post will list out some important Homebrew commands for installing and maintaining packages using the command line.

## Installing Homebrew

According to the instructions on its official [webpage](https://brew.sh/), paste the below command in the macOS terminal. It is recommended to run this command from `/usr/local` location.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Once you type this command, it will install the Homebrew on your machine.

```bash
local % /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
==> This script will install:
/usr/local/bin/brew
/usr/local/share/doc/homebrew
/usr/local/share/man/man1/brew.1
/usr/local/share/zsh/site-functions/_brew
/usr/local/etc/bash_completion.d/brew
/usr/local/Homebrew
```

Once it is installed, you can verify by using `brew` command.

```bash
brew
Example usage:
  brew search [TEXT|/REGEX/]
  brew info [FORMULA...]
  brew install FORMULA...
```

## Important Homebrew commands

Let's see some important Homebrew commands that can be used for installing packages. Please check the official brew [website](https://formulae.brew.sh/formula/) for a list of available packages.

`brew` is the core command for the Homebrew project and deals with command-line software.

**Global commands**

| Commands | Function |
| --- | --- |
| `brew update` | Updates the brew package and cask package |
| `brew list` | Lists all the installed package using brew |

**General Commands**

| Commands | Function |
| --- | --- |
| `brew install spark` | Installs a Package Spark |
| `brew upgrade spark` | Upgrades the Package to the latest version available |
| `brew uninstall spark` | Uninstalls the package |
| `brew list --versions spark` | Lists down the version that you have |
| `brew switch spark 2.4.0` | Switches to certain versions |
| `brew info spark` | Lists the package versions and other details |
| `brew cleanup spark` | Cleans up older versions of Spark |

**Cask Commands**

`brew cask` is an extension to `brew` that allows the management of graphical applications through the cask project.

| Commands | Function |
| --- | --- |
| `brew cask install jupyterlab` | Installs the Jupyter Lab notebook application |
| `brew cask list` | Lists all the applications installed using cask |

---

*Originally published on nitendratech.com on 2020-05-02, updated 2022-06-06.*
