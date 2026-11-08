---
title: "How to Set Up Proxy in JVM-based Applications?"
description: "How to set up a proxy in Java and Scala applications using system properties, and how to exclude single or multiple URLs from the proxy with the http.nonProxyHosts property."
pubDate: 2021-04-25
category: "Core Tech & Programming"
subcategory: "Java"
draft: false
---

A proxy server, also known as a "proxy" or "application-level gateway", is a computer that acts as a gateway between a local network (e.g., all the computers at one company or in one building) and a larger-scale network such as the Internet. Proxy servers provide increased performance and security. In some cases, they monitor employees' use of outside resources.

As a software developer, one has to work on the development of multiple web applications or web services using Java or Scala. The majority of the production environment has some proxy set up in their server. Developers need to include the same setup in their code too in order to access URLs behind a firewall proxy and needs to exclude URL that does not need the proxy to access it.

To use this code in Scala and [Java](/blog/java-programming-language/) one needs to `java.util.Properties` library in their application.

Use the following code snippet in your application to set up a proxy.

Let's assume our proxy in the production environment is proxy1 and the port number is port1

```java
Properties properties = System.getProperties();
// Set the http proxy
properties.setProperty("https.proxyHost", "proxy1");
properties.setProperty("https.proxyPort", "port1");
```

After setting this property in your application, proxy will be set up throughout the application.

## Excluding proxy for single URL

Let's suppose URL [quora](https://www.quora.com/) is not behind proxy which you need to access normally from your code. To access this URL normally without ant proxy use the following code.

```java
properties.setProperty("http.nonProxyHosts","www.quora.com");
```

If you observe here, i have removed some elements from the Url. All the elements like front slash "/" should be removed while adding Urls and Url having "." should only be included

## Excluding proxy for Multiple URL

Let's suppose you need to access multiple URLs without proxy. Multiple URLs need to be separated by a pipe sign. Since we can only add the base Url wild card "*" expression is used to match the pattern accordingly.

Use the following snippet .

```java
properties.setProperty("http.nonProxyHosts","www.quora.com*|www.amazon.com");
```

All the URLs that we add in the system property using "http.proxyHosts" will be accessed normally. All the URLs that you don't add on this property will be accessed by a proxy.

Create a function with these settings and call once, when an application starts .

In Java, use below function.

```java
public void getProxy() {
    Properties properties = System.getProperties();
    // Set the http proxy
    properties.setProperty("https.proxyHost", "proxy1");
    properties.setProperty("https.proxyPort", "80");
    properties.setProperty("http.nonProxyHosts","www.google.com*|www.quora.com*")
}
```

In Scala use below function in a class or just create a function.

```scala
class ProxyUtility {
  def getProxy(): Unit= {
    val properties = System.getProperties
    //Set the httpProxy
    properties.setProperty("https.proxyHost","proxy1")
    properties.setProperty("https:proxyHost","80")
    //Excluding the Hosts which does not Requires proxy
    properties.setProperty("http.nonProxyHosts","www.google.com*|www.quora.com*")
  }
}
```

## Reference :

[Oracle Proxy Documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/net/proxies.html)

[Proxy](https://kb.iu.edu/d/ahoo)

---

*Originally published on nitendratech.com on 2021-04-25, updated 2022-07-17.*
