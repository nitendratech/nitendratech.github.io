---
title: "File Movement in Linux"
description: "How to copy, move, and rename files in Linux using the cp and mv commands — the basic syntax for each, with source-to-destination examples."
pubDate: 2020-09-30
category: "Core Tech & Programming"
subcategory: "Linux"
---

CP utility is used to copy files and directories in Linux based Operating system. It needs two mandatory arguments along with any optional parameters. Those two arguments are the source and destination location. This command is used most frequently while automating a task using [bash scripts](/blog/bash-script/).

## Copying files from source to destination

Once this is completed, a copy of the file will be copied to the destination without deleting the original source.

```bash
~$cp <source> <Destination >:
<Source> can be file or a directory
```

```bash
cp /home/user1/file1.txt /home/user2/
```

This will copy the file `file1.txt` from `/home/user1/` location to `/home/user2/` location

## Moving/Renaming files from source to destination

If you want to move the whole file, you can use `mv` command. It cut and pastes the file.

```bash
~$mv <source> <Destination >:Cutting files from source to destination Or renaming a file or directory
```

```bash
mv /home/user1/file1.txt /home/user2/file2.txt
```

It will copy as well the rename the file that you want to copy.

---

*Originally published on nitendratech.com on 2020-09-30, updated 2022-05-26.*
