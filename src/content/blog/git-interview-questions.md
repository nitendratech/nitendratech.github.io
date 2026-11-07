---
title: "Important Git Interview Questions"
description: "Essential Git interview questions and answers — repositories, cloning, branching, git rm, git log, pull, stash, staging, and commit messages."
pubDate: 2022-03-14
category: "Core Tech & Programming"
subcategory: "Interview Questions"
draft: false
---

## What is Git?

Git is an open-source distributed version control system that is designed to handle small and larger projects with great efficiency. It is mainly used for managing the source code of various projects.

## Who Invented Git?

It was invented by Linus Torvalds in 2005 when he was working on the development of the Linux kernel.

## What is a Repository in Git?

A Repository in git is a location where we store all our software-related work. When we use the git command on the root of the project, GIT creates a subdirectory called .git which is internal to the GIT software. In this subdirectory, GIT stores all the required metadata of the project. So we should not change anything manually in this subdirectory.

## How can we create a repository in GIT?

We need to use the `git init` command to create a repository.

## How can we clone a repository in GIT?

We use `git clone` command to create a copy of the GIT repository in the local working environment. This is the most popular command to create a copy among different development teams. When we use the git clone command, it creates a copy of the fully-fledged repository.

## What is the language in which GIT is written?

GIT is primarily written in C language in combination with the Shell scripts. There is also some usage of Perl language.

## How can we create a new branch in GIT?

We use the command called `git checkout -b <branchname>` to create a new branch in GIT.

## How can we change the branch when working with Git?

We can use `git checkout <branchname>` to switch to the new branch in GIT.

## How can we delete a branch in GIT?

We can delete a branch in GIT with the below command. This command will forcibly delete the unwanted branch as well as any unmerged changes from the repository.

```bash
git branch -D <branchname>
```

## When do we use the `git rm` command in GIT?

We use the `git rm` command in GIT when we need to remove the file from the working tree and index. If we want to delete all the files and directories recursively, we can use `git rm -r` command.

## How can we see the most recent commits in GIT?

We use the `git log` command to see the latest commit. If we want only to see a certain number of commits using this command, we can add a number at the end. For Example: To see the two most recent commits, we use the `git log -2` command.

## What happens when we use `git pull` command?

When we use the git pull command, it fetches the latest update from the remote repo and merges that update with the local repo. We mainly use it to bring the local branch up to date with the remote repo. So `git pull` internally executes `git fetch` and `git merge` step by step.

## How can we start working using GIT?

We can start work using GIT in two different ways.

- Create a new repository using `git init` command
- Clone the existing repository using the `git clone` command

## What is git stash?

We use the git stash command to save the current state of the working directory and index. This is mainly done when we are not ready to commit the code yet, but don't want to lose the unfinished code.

## What is the use of git add command?

We need to stage the changes before committing the code. `git add` command is used to stage the changes that add these changes to the index from the working directory. When we work on a project, there might be a possibility that we are working on multiple items. We can use this `git add` command to stage the changes to the staging area. Once the changes are added to the staging area, we can commit them.

## When do we want to use the git log command?

If we want to search for specific commits in the git project history, we use the GIT log command. There are mainly three ways through which we can search the git project history.

- Author
- Date
- Content

This command can be modified to list the commit for a specific time period.

## What do you mean by committing a message in GIT?

A commit message in GIT is a comment or a description of the changes that we are trying to push to the repository. It contains important information about the code changes, such as why the code is being modified and who is modifying it. Most organizations have hooks enabled such that every commit message needs to have a certain identification such as a JIRA ticket, defect id, etc. for a project. This has become like a standard throughout the industry where git is being used as part of the DevOps cycle as part of CI-CD based software life cycle.

## Can we change a commit message in GIT?

We can use the `git commit --amend` command to change a commit message if it is not being pushed to the remote repository. Once we amend a commit and push it to the remote repo, the updated version of the commit appears in the GitHub repo.

---

*Originally published on nitendratech.com on 2022-03-14, updated 2023-07-10.*
