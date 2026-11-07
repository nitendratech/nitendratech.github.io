---
title: "What is Apache Maven ?"
description: "What Apache Maven is, why to use it for Java project builds and dependency management, its build lifecycle phases, and the POM concept with a sample pom.xml file."
pubDate: 2022-06-04
category: "Core Tech & Programming"
subcategory: "Build Tools"
draft: false
---

Apache Maven is a build automation tool mainly used for Java-based projects. It helps in two aspects of a project: the build and the dependency management phase. It uses an XML file called pom.xml to describe the software project being built, its external dependencies, build order, and any required plugins.

Dependency handling in Maven is done by identifying the individual artifacts like software libraries or modules. If we want to use spring in the project, we need to declare its artifacts as the dependency in `pom.xml` file. Maven dynamically downloads these needed Java libraries through maven plugins from the maven central repository and stores them in a local cache. The local cache automatically gets updated if a newer version of the library is referred to in any pom.xml. Every user has their own local repository which contains a list of downloaded dependencies.

Normally, Apache Maven downloads the dependency from the central repository. But organizations create their own private repositories in which they keep the firm-wide approved libraries.

## Why do we want to use Maven?

There are many advantages of using Maven to build a project. The most important ones are given below.

- Easy project step with a simple build.xml file.
- Reduces the size of source distribution as jars can be pulled from a central location
- Maven adds the jar automatically to the class path without the need to add them manually.
- It provides various project-related metrics without any additional effort.
- Provides simple command to package the jar along with its dependencies easily
- The use of centralized pom helps the developers to have the same dependencies in a project.

## Build Life Cycle steps in Maven

The build lifecycle in maven is a list of named phrases that denote a specific goal in that project's build lifecycle. Maven has a list of the standard lifecycles, which are given below in the same order Maven executes the project.

1. Validate
2. generate-sources
3. process-sources
4. generate-resources
5. process-resources
6. compile
7. process-test-sources
8. process-test-resources
9. test-compile
10. test
11. package
12. install
13. deploy

## Concept of POM in maven.

A Project Object Model or POM is used for providing all the required configurations for a given project. It is an XML (Extensible Markup Language) document containing all of this information, such as given below.

- Project Name and its Owners Name
- Project dependencies on another project
- Build Process phases defined through plugins
- Use of compiler-plugin to specify Java version for compilation

If a Java-based project is big, it is divided into several modules and subprojects. These small projects or modules have their pom defined. Any single pom.xml can inherit configuration from other pom files.

Let's take a look at the small pom.xml file below for a Java 1.8 based project

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.nitendratech</groupId>
  <artifactId>sample-pom-project</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-databind</artifactId>
			<version>2.4.0</version>
		</dependency>
	</dependencies>
  <build>
    <plugins>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.5.1</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

---

*Originally published on nitendratech.com on 2022-06-04, updated 2022-06-06.*
