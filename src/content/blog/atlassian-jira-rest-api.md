---
title: "Atlassian Jira REST API"
description: "The important Jira REST APIs and JQL for finding project and issue metadata — getting issue details, project details, project metadata, and custom field values, with sample JSON responses."
pubDate: 2017-08-10
category: "Core Tech & Programming"
subcategory: "REST APIs"
draft: false
---

Atlassian Jira is a proprietary issue tracking software developed by Atlassian which provides bug tracking, issue tracking, and project management functions. According to Atlassian, Jira is used for issue tracking and project management by over 25,000 customers in 122 countries around the globe. Jira is written in Java and uses the Pico inversion control container, Apache OFBiz entity engine, and WebWork 1 technology stack. The main features of Jira for agile software development are the functionality to plan development iterations, the iteration reports, and the bug tracking functionality.

In this post, we will focus on the important REST API and JQL (Jira Query Language) provided by Jira. These REST APIs are popular APIs that help to find metadata related to Jira Project. For simplicity, I will be taking a base Jira URL for all the APIs. All the APIs will give a JSON response when using a tool like POST or posted in a browser. But make sure that you log in to the Jira instance first before making these calls.

```bash
Let BASE_URL =https://jira.atlassian.com/
```

## Get Issue Details

This is a GET request which will give details of all the issues in JSON format.

```bash
<Base URL>/rest/api/2/issue/<Issue Number>

Example :
https://jira.atlassian.com/rest/api/2/issue/JRASERVER-65722
```

Below is the shortened version JSON Response of this call

```json
{
  "expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
  "id": "825975",
  "self": "https://jira.atlassian.com/rest/api/2/issue/825975",
  "key": "JRASERVER-65722",
  "fields": {
    "customfield_16730": {
      "self": "https://jira.atlassian.com/rest/api/2/customFieldOption/13930",
      "value": "Other",
      "id": "13930"
    },
    "fixVersions": [],
    "resolution": null,
    "versions": [],
    "issuelinks": [],
    "assignee": null,
    "status": {
      "self": "https://jira.atlassian.com/rest/api/2/status/1",
      "description": "Issue is open and has not yet been accepted by Atlassian.",
      "iconUrl": "https://jira.atlassian.com/images/icons/statuses/open.png",
      "name": "Open",
      "id": "1",
      "statusCategory": {
        "self": "https://jira.atlassian.com/rest/api/2/statuscategory/2",
        "id": 2,
        "key": "new",
        "colorName": "blue-gray",
        "name": "To Do"
      }
    },
    "customfield_16030": null,
    "components": [
      {
        "self": "https://jira.atlassian.com/rest/api/2/component/43417",
        "id": "43417",
        "name": "System Administration - General Configuration"
      }
    ]
  }
}
```

## Get all Project Details of a Jira

```bash
<Base URL>/rest/api/2/issue/createmeta?expand=projects.issuetypes.fields
Example :
https://jira.atlassian.com/rest/api/2/issue/createmeta?expand=projects.issuetypes.fields
```

## Get all the metadata of a particular project in Jira

```bash
<Base URL>/rest/api/2/issue/createmeta?projectKeys=<Project Key>&expand=projects.issuetypes.fields
Example :
https://jira.atlassian.com/rest/api/2/issue/createmeta?projectKeys=JRASERVER&expand=projects.issuetypes.fields
```

## Get the value of a Particular Jira Custom Field using REST API

```bash
<Base url>/rest/api/2/issue/<Jira Issue>?fields=<Custom Field ID>
https://jira.atlassian.com/rest/api/2/issue/BSERV-9413/?fields=customfield_17130
```

It gives a JSON File as below, which needs to be parsed to extract the custom fields value.

```json
{
  "expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
  "id": "655478",
  "self": "https://jira.atlassian.com/rest/api/2/issue/655478",
  "key": "BSERV-9413",
  "fields": {
    "customfield_17130": {
      "self": "https://jira.atlassian.com/rest/api/2/customFieldOption/14432",
      "value": "Minor",
      "id": "14432"
    }
  }
}
```

## Reference:

[1] https://en.wikipedia.org/wiki/Jira_(software)

[2] https://jira.atlassian.com/

[3] https://docs.atlassian.com/jira/REST/server/

---

*Originally published on nitendratech.com on 2017-08-10, updated 2022-06-06.*
