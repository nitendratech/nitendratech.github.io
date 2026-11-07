---
title: "Atlassian JIRA REST Java Client(JRJC) Library"
description: "How to use the Atlassian JIRA REST Java Client (JRJC) library in Java — adding the Maven dependencies, authenticating with basic HTTP authentication, and working with issues, comments, and attachments."
pubDate: 2020-03-25
category: "Core Tech & Programming"
subcategory: "Java"
draft: false
---

Atlassian Jira is a proprietary issue-tracking software developed by Atlassian that provides bug tracking, issue tracking, and project management functions. According to Atlassian, Jira is used for issue tracking and project management by over 25,000 customers in 122 countries around the globe. Jira is written in Java and uses the Pico inversion control container, Apache OFBiz entity engine, and Webwork 1 technology stack. The main features of Jira for agile software development are the functionality to plan development iterations, iteration reports, and bug tracking functionality.

In this tutorial, we will focus on a JIRA REST Java Client (JRJC) Library based on Java. To use this library, we need to add the following dependency to the project. I have a Maven-based Java project for which I need to add the following dependency to download all the required jars.

```xml
<!-- Atlassian Dependencies -->
        <dependency>
        <groupId>com.atlassian.jira</groupId>
        <artifactId>jira-rest-java-client-api</artifactId>
        <version>4.0.0</version>
    </dependency>

    <dependency>
        <groupId>com.atlassian.jira</groupId>
        <artifactId>jira-rest-java-client-core</artifactId>
       <version>4.0.0</version>
</dependency>
```

Lets assume the Jira URL for this tutorial as below.

```java
String JIRA_URL="https://jira.atlassian.com/";
```

## Authentication

JRCJ first needs to authenticate with a given username and password to obtain a JiraRestClient object.

```java
public JiraRestClient getJiraRestClient(String jiraUserName, String jiraPassword) {
		JiraRestClient jiraRestClient = null;
		try {
			URI baseUri = new URI(JIRA_URL);
JiraRestClientFactory restClientFactory = new AsynchronousJiraRestClientFactory();
			//  Basic Http Authentication to connect to Jira
jiraRestClient = restClientFactory.createWithBasicHttpAuthentication(baseUri, jiraUserName, jiraPassword);
		} catch (URISyntaxException e) {
			e.printStackTrace();
		} catch (NullPointerException e) {
			e.printStackTrace();
		}
		return jiraRestClient;
	}
```

Once the Jira Rest Client is obtained, it can be passed around in different functions to call other REST API.

## Get the Issue Rest Client from Jira Rest Client

```java
IssueRestClient issueRestClient = jiraRestClient.getIssueClient();
```

## Add Comment in Jira

```java
public void addCommentJIRA(IssueRestClient issueRestClient, String jiraIssueKey, String comment) {
		Issue issue = null;
		URI issueURI = null;
		Comment jiraComment = null;
		try {
			issue = (Issue) issueRestClient.getIssue(jiraIssueKey).get();
			issueURI = new URI(issue.getSelf().toString() + "/comment/");
			jiraComment = Comment.valueOf(comment);
			issueRestClient.addComment(issueURI, jiraComment).claim();
		} catch (InterruptedException e) {
		} catch (ExecutionException e) {
		} catch (URISyntaxException e) {

		}

	}
```

### Attaching Files in Jira Ticket

```java
public void attachLogsJiraAsStream(ByteArrayInputStream bin, String fileName, String jiraIssueKey,
			IssueRestClient issueRestClient) {

		// Calls the getIssue Client and adds Attachment

Issue issue = (Issue) issueRestClient.getIssue(jiraIssueKey).claim();

issueRestClient.addAttachment(issue.getAttachmentsUri(), bin, fileName);

	}
```

## To Download Files, we need the attachment URL

```java
//Example URL
String jiraAttachmentUr="http://www.example.com/jira/attachments/10000"
public ByteArrayOutputStream downloadAttachmentsAsStream(IssueRestClient issueRestClient, String jiraAttachmentUri,
	String attachmentName) {
		InputStream in = null;
		ByteArrayOutputStream bout = new ByteArrayOutputStream();

		try {

in = (InputStream) issueRestClient.getAttachment(new URI(jiraAttachmentUri)).get();
			byte[] buffer = new byte[49152];
			int bytesRead;
			while ((bytesRead = in.read(buffer)) != -1) {
				bout.write(buffer, 0, bytesRead);
			}
		} catch (InterruptedException e) {

			e.printStackTrace();
		} catch (ExecutionException e) {

			e.printStackTrace();
		} catch (URISyntaxException e) {

			e.printStackTrace();
		} catch (IOException e) {

			e.printStackTrace();
		}

		return bout;
	}
```

## Get Jira Ticket Attachment Name List

```java
public ArrayList<String> getJiraAttachmentName(IssueRestClient issueRestClient, String jiraIssueKey){
		ArrayList<String> jiraAttachmentNameList = new ArrayList<String>();
		Issue issue = (Issue) issueRestClient.getIssue(jiraIssueKey).claim();
		Iterable<Attachment> issueAttachments = issue.getAttachments();
		issueAttachments.forEach(attachment -> {
			if (null != attachment.getFilename()) {
				jiraAttachmentNameList.add(attachment.getFilename());
			}
		});
		return jiraAttachmentNameList;
	}
```

## Get the Jira Attachment URL List for download

```java
/*
	 * Gets the attachment  Url List
	 */

public ArrayList<String> getJiraAttachmentsURLList(IssueRestClient issueRestClient, String jiraIssueKey) {

ArrayList<String> jiraAttachmentURLList = new ArrayList<String>();
Issue issue = (Issue) issueRestClient.getIssue(jiraIssueKey).claim();
Iterable<Attachment> issueAttachments = issue.getAttachments();
		issueAttachments.forEach(attachment -> {
			if (null != attachment.getFilename()) {
				jiraAttachmentURLList.add((attachment.getContentUri().toString()));
			}
		});
		return jiraAttachmentURLList;
	}
```

## Reference

[JRJC Home](https://bitbucket.org/atlassian/jira-rest-java-client)

[Jira Wiki](https://en.wikipedia.org/wiki/Jira_(software))

---

*Originally published on nitendratech.com on 2020-03-25, updated 2024-02-19.*
