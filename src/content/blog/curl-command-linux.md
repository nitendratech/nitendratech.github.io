---
title: "Introduction to curl Command on Linux"
description: "A beginner's guide to the curl command on Linux — transferring data with supported protocols, viewing response headers, downloading files, basic authentication, POST and PUT requests, and debugging with verbose output."
pubDate: 2019-06-28
category: "Core Tech & Programming"
subcategory: "Linux"
---

`curl` is a command or tool that can transfer data from or to a server using any of the supported protocols. curl supports most of the major protocols and is mainly used for automating the file transfer task, as manual intervention is not needed by this command. In this blog post, we will learn about using `Curl` command using the command line and [bash script](https://www.nitendratech.com/linux/bash-script/).

## Protocol Supported by Curl

It supports the below protocol.

- DICT (Dictionary Network Protocol)
- FILE
- FTP (File Transfer Protocol), SFTP (Secure File Transfer Protocol)
- FTPS
- GOPHER (TCP/IP application layer protocol)
- HTTP and HTTPS
- IMAP and IMAPS( Internet Message Access Protocol)
- LDAP and LDAPS (Lightweight Directory Access Protocol)
- POP3 and POP3S (Post Office Protocol)
- RTMP (Real-Time Messaging Protocol) and RTSP (Real-Time Streaming Protocol)
- SCP
- SMTP (Simple Mail Transfer Protocol)

The `curl` command can also guess which protocol to use based on the URL hostname that we give. If we use ftp.my1.com as an argument, the curl command will use the FTP protocol to fetch the data. HTTP is the default protocol used by the curl command.

## Get the Response Headers using this URL

If we are interested in including the header's info in the response, we can use the `-i` (`--include`) option.

```bash
curl -i <Url> # It will get the response along with the headers
```

```bash
~$curl -i https://gitlab.com/nitendragautam/samp_data_sets/raw/master/cars/car-list.json
HTTP/1.1 200 OK
Server: nginx
Date: Sun, 30 Jun 2019 20:17:10 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 11088
Vary: Accept-Encoding
Cache-Control: max-age=60, public
Content-Disposition: inline
Strict-Transport-Security: max-age=31536000
Referrer-Policy: strict-origin-when-cross-origin

[{"brand": "Seat", "models": ["Alhambra", "Altea", "Altea XL", "Arosa", "Cordoba", "Cordoba Vario", "Exeo", "Ibiza", "Ibiza ST", "Exeo ST", "Leon", "Leon ST", "Inca", "Mii", "Toledo"]},
```

If we are only interested in the response header returned by the server, we can use the -I option.

```bash
curl -I <Url>
```

```bash
~$ curl -I https://gitlab.com/nitendragautam/samp_data_sets/raw/ma
ster/cars/car-list.json
HTTP/1.1 200 OK
Server: nginx
Date: Sun, 30 Jun 2019 20:17:19 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 11088
Vary: Accept-Encoding
Cache-Control: max-age=60, public
Content-Disposition: inline
Referrer-Policy: strict-origin-when-cross-origin
```

As we can see from the above command, gitlab.com is live and is giving the 200 response code.

## Downloading files

We use the `curl <Url>` command to download the content of the URL. `Curl` command will display the downloaded content in the standard output or in the terminal.

```bash
 ~$curl https://www-us.apache.org/dist/hadoop/common/hadoop-3.2.0/hadoop-3.2.0-rat.txt
hadoop-3.2.0-rat.txt

*****************************************************
Summary
```

If we want to save the downloaded content, we have to use options like `-o` and `-O`. Lets us download a text and compressed file using this option.

```bash
~$ curl -O https://www-us.apache.org/dist/hadoop/common/hadoop-3.2
.0/hadoop-3.2.0-rat.txt
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 1845k  100 1845k    0     0  1890k      0 --:--:-- --:--:-- --:--:-- 1888k

~$ curl -O https://www-us.apache.org/dist/hadoop/common/hadoop-3.2
.0/hadoop-3.2.0-src.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 29.3M  100 29.3M    0     0  9868k      0  0:00:03  0:00:03 --:--:-- 9872k

$ ls -ltr
-rwxrwxrwx 1 nitendratech nitendratech  1889496 Jun 30 15:47 hadoop-3.2.0-rat.txt
-rwxrwxrwx 1 nitendratech nitendratech 30751465 Jun 30 15:47 hadoop-3.2.0-src.tar.gz
```

## Silencing the output

When we download the file with the curl command, we can see the download details like transferred data, Data transfer speeds, and estimated time left in the output.

If we are not interested in seeing the progress, we can silence it using the `-s` (`--silent`) option.

```bash
~$curl -Os https://www-us.apache.org/dist/hadoop/common/hadoop-3.
2.0/hadoop-3.2.0-src.tar.gz
```

## Basic Authentication

We can pass the credentials using the curl command using the `-u` option for authentication.

```bash
curl -u username:password http://url.com/
```

## Submitting data using POST and PUT requests

If we want to submit data using the curl command, we can use POST and PUT commands.

`curl -X POST https://url.com` – send a POST request.

The header can be specified using the header option `-H` (`--header`) and data can be specified using the `-d` (`--data`) option.

```bash
$ curl -d '{"id":1,"loginId":"ngaut","firstName":"Nitendra","lastName":"Gautam","currentAddress":"Dallas"}' -H "Content-Type: application/json" -X POST http://localhost:8199/app/records
```

You can also post the data through files containing JSON data. Let's say the above JSON content is present in a file called json_data.json

```bash
# send data from a file
$ curl -d @json_data.json -H "Content-Type: application/json" -X POST http://localhost:8199/app/records
```

When posting the data, we need to specify the data type using `Content-Type header`. Below are the common data types.

- `application/json`
- `application/x-www-form-urlencoded`

## Debugging with Verbose

If you run into issues using the curl command and want to debug more, you can use the verbose command

```bash
curl -v https://www.nitendratech.com/
```

---

*Originally published on nitendratech.com on 2019-06-28, updated 2024-01-23.*
