---
title: "Most Useful Vi Text Editor Commands"
description: "The most useful Vi text editor commands — operation modes, starting Vi, saving and quitting files, Vi parameters, deleting content, and cursor movement keys."
pubDate: 2019-02-27
category: "Core Tech & Programming"
subcategory: "Linux"
---

`Vi` editor, which is short for Visual Editor, is the default Text Editor that comes with the majority of Linux distributions. Vi text editor is available in the majority of the commercial and open-source versions of Linux Distributions. Once you learn this text editor, you can use it in many Linux distributions. Commands used in Vi editor are case-sensitive. This blog post will show you the most useful Vi Text Editor Commands that one can use while writing a [bash script](https://www.nitendratech.com/linux/bash-script/).

## Operation Modes

Vi editor has mainly two types of operation modes.

- **Command Mode**

Vi editor beings in command mode and only understands commands. In this mode, we can move the cursor to the point where text deletion and pasting occur.

- **Insert Mode**

This mode is used for entering text in the file and can be invoked from the command mode by pressing `i` on the keyboard. Once we are in insert mode, any key from the keyboard would be taken as an input for the file which is being currently edited.

If we want to switch to command mode and save the changes, we can press `ESC` key and press `wq!` and `ENTER` key.

## Starting the Vi Text Editor

To use vi editors on a file, type in `vi filename`. If this file already exists, then a screen will appear on that file. If this file does not exist, then an empty file and screen would be created which can be used to edit text.

**Syntax:**

```bash
vi <NEW_FILE_NAME> or <EXISTING_FILE_NAME>
vi -r <FILE_NAME>
```

Here `-r` option means that we are trying to recover the File Name when the System is Crashed.

![Vi New File](/images/vi_newfile-1.png)

## Closing and Savings Files using the Editor

When we are using `vi` editor to edit a file, we are editing the copy of the file rather than the original itself. Once editing is finished, we can either quit without saving or quit with saving edits.

Press the `ESC` to go to the command mode. When you type a colon, the cursor moves to the bottom of the screen whenever a colon (:) is typed. This type of command is completed by hitting the `<Return>` (or `<Enter>`) key.

### Quitting and Saving a File with Edit

Once we go to the command mode, we can press `SHIFT` & Colon `:` key to enter the below commands.

| Command | Description |
| --- | --- |
| `:w` | It saves the file but does not quit. One needs to do this periodically to save a file as a preventive measure. |
| `:q` | It will exit the editor without any Warning |
| `wq` | It will save the edit to the file and quit the editor |

An alternative way to save an edit is using the `ZZ` Key which is in uppercase.

![Vi Save File](/images/vi_savefile-2.png)

### Quitting without Saving Edits

Sometimes, we might do a mistake and need to quit without saving any edits in the file. We can achieve this by using the below commands.

| Command | Description |
| --- | --- |
| `:e!` | It resets the file to its original content so that it can be started all over again |
| `:q!` | It clears all the edits and exits the Vi Editor |

## Parameters in Vi

These parameters can be used in the command mode after using the Colon `:` key.

| Parameters | Description |
| --- | --- |
| `:set list` | It shows Invisible Characters |
| `:set nolist` | It does not show Invisible Characters |
| `:set number` | It shows line numbers |
| `:set nonumber` | It does not show line numbers |
| `:set showmatch` | Show matching sets of parentheses as they are typed |
| `:set noshowmatch` | It turns off showmatch |
| `:set showmode` | It displays mode on the last line of the screen |
| `:set noshowmode` | It turns off showmode |
| `:set all` | It shows values of all possible parameters |
| `:set autoindent` | It indents after carriage return |
| `:set noautoindent` | Turn off auto-indent |

## Deleting the content with vi or Vim editor

In the command mode after using the Colon `:` key. We can use the `:%d` command to delete all the contents

Here `%` means all the lines and `d` means delete

## Cursor Movement in Vi Editor

We can use the below key for moving the cursor in Vi Editor.

| Key | Movement |
| --- | --- |
| h | Move Left |
| j | Move Down |
| k | Move Up |
| l | Move Right |
| 0 | (Zero) Starts of the Line |
| $ | End of the Line |
| ^ | the first non-blank character of the line |

---

*Originally published on nitendratech.com on 2019-02-27, updated 2022-06-06.*
