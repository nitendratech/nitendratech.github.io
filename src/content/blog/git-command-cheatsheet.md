---
title: "Important Git Command Cheat Sheet"
description: "A cheat sheet of important Git commands for everyday development — configuring a user profile, creating and switching branches, adding files, cloning, merging, rebasing, and creating repositories."
pubDate: 2017-06-25
category: "Core Tech & Programming"
subcategory: "Git"
draft: false
---

Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. This post is a collection of important Git command Cheat Sheets that any developer uses on a day-to-day basis when working in computer science or software engineering field. For details, please refer to the official git page.

## Add User profile it Git

```bash
~$git config --global user.name "<User Name>"
#Example
~$git config --global user.name "Nitendra Gautam"
```

We use the git config command to add the username and email address globally in our system.

```bash
#Add global Email Address
~$git config --global user.email "<Email>"
#Example
~$git config --global user.email "abc@gmail.com"
```

## Create a Branch in Git

```bash
(1) Create a branch in git locally if it does not exist
~$git checkout -b <Git Branch Name>
Eg :~$git checkout -b develop
Switched to a new branch 'develop'

(2) Push the local branch(origin) to UpStream to origin
$git push --set-upstream origin develop

Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/nitendragautam/nitendragautam.github.io.git
 * [new branch]      develop -> develop
Branch develop set up to track remote branch develop from origin.

#verify that you are in develop branch
~$git branch
* develop
  master
```

## Listing all the remote Branches

We use the `git branch -a` command to list all the remote branches. It shows which branch you are currently at with the * sign.

## Changing Branch in Git

```bash
~$cd <Local Repository Folder>
Eg :$cd testRepo

#Switch to remote branch which you want to work
~$git checkout <branch name>

#verify the branch that you changed /Sanity check for the branch which you are working on
~$git branch
```

## Add a project Directory or a File to Git

If you have new projects or several projects that you want to add under several repos, you need to add them first.

This needs to be done so that Git can recognize the submodules or project folder added.

```bash
~$git add <File Name>
~git add JavaProject
```

## Pull down remote repo to Local

We use the `git clone` command to pull the remote repository to one's local environment.

```bash
~$git clone <git-repo.git>
```

## Deleting the file from the repository

```bash
~$git rm file.name
```

If you don't want to add the file to the repository, don't stage it or you can also delete it from the file system

## Merge Develop branch with Master

```bash
git checkout master
git merge develop
git push -u origin master
```

## Rebase vs Merge in Git

- **Rebase:** Rebase is recreating your work from one branch onto another. For every commit that you have on the feature branch and not in the master, a new commit will be created on top of the master.
- **Merge:** Merge is a new commit. It is a simple commit with one difference – it has two parents. All other regular commits have only one.

## Difference between local and remote master

If we want to find out the difference between a file in the remote and local environment, we use the `git diff` command.

```bash
git diff origin/master -- MyClass.java
```

## Create a repository in GIT

We first need to create a new directory for the project. Once the directory is created, we run a command called git init from the root of the directory created. Once we run this command, GIT software will create a sub directly called .git in the main project directory. Once this subdirectory is created, the GIT repository is created.

```bash
nitendragautam@ % mkdir git_repo1
nitendragautam@ % cd git_repo1
nitendragautam@  % git init
Initialized empty Git repository in test_Dir/git_repo1/.git/
nitendragautam@ % ls -a
.	..	.git
```

### Question: How can we clone a repository in GIT?

We use `git clone` command to create a copy of the GIT repository in the local working environment. This is the most popular command to create a copy among different development teams.

Let's try to clone a project called [voidrice](https://github.com/LukeSmithxyz/voidrice) from remote got repo to local. Once we close the project, we will go to that repo locally and use `ls -a` command to list the content in the console.

```bash
nitendragautam@ % git clone https://github.com/LukeSmithxyz/voidrice.git
Cloning into 'voidrice'...
remote: Enumerating objects: 8143, done.
remote: Total 8143 (delta 0), reused 0 (delta 0), pack-reused 8143
Receiving objects: 100% (8143/8143), 3.43 MiB | 11.45 MiB/s, done.
Resolving deltas: 100% (4630/4630), done.
nitendragautam@% cd voidrice
nitendragautam@ % ls -a
.		..		.config		.git		.gitmodules	.gtkrc-2.0	.local	    	.xprofile	.zprofile	FUNDING.yml	LICENSE		README.md
```

Conclusion

In this blog post, we read about the important git commands that are needed on a day-to-day basis by developers.

Please share the article on social media and leave a comment with any questions or suggestions.

## Reference

[Git Merge vs Rebase](http://five.agency/git-merge-and-rebase-the-simple-explanation/)

---

*Originally published on nitendratech.com on 2017-06-25, updated 2024-08-03.*
