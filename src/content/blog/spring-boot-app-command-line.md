---
title: "Running Spring Boot Application from a Command Line"
description: "How to run a Spring Boot application from the command line with Maven — packaging it as a jar to launch with java -jar, or running it directly with the Spring Boot Maven plugin."
pubDate: 2021-05-03
category: "Core Tech & Programming"
subcategory: "Spring Boot"
draft: false
---

So, you have started learning the Spring Boot application. But you are still trying to figure out how to run Spring Boot from the command line. There are many ways to do this. Since I am using Apache Maven as the build tool, I would be using this as a sample. If you are using any other build tools like Gradle, these steps would be different.

## Maven Plugin in POM.XML

Your project pom.xml needs to behave maven plugin code in order to run a Spring boot application as a Jar file. If your project does not have this plugin, add it to the pom.xml below the list of project dependencies.

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```

You can create a sample spring project by yourself or clone the one I have on GitHub in a folder of your choice. This project already has this build plugin in the pom.xml file.

```bash
git clone https://github.com/nitendragautam/SpringProjects.git
Cloning into 'SpringProjects'...
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 136 (delta 1), reused 3 (delta 1), pack-reused 127
Receiving objects: 100% (136/136), 93.63 KiB | 1.70 MiB/s, done.
Resolving deltas: 100% (27/27), done.
```

Now go to the spring-boot-rest folder location and download all the dependencies using the maven command `mvn install` or `maven package`.

```bash
cd SpringProjects/spring-boot-rest
mvn install
```

Once the project is built, you will see a jar file named `spring-boot-rest-0.0.1.jar` generated at the target folder.

## Option 1: Using the java -jar command

We can use the `java -jar <jar_path>` command to run the Spring boot app from the command line. Run this command from the root location of the project.

```bash
spring-boot-rest % pwd
/../SpringProjects/spring-boot-rest

java -jar target/spring-boot-rest-0.0.1.jar
```

This will run the app in the 8199 port as defined in the `src/main/resources/application.properties` file. You have to change this file if you want to run the Spring application in any other port. Spring Boot uses 8080 as the default port.

```bash
java -jar target/spring-boot-rest-0.0.1.jar

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v1.5.4.RELEASE)

2020-05-01 18:45:25.865  INFO 97701 --- [           main] com.nitendragautam.Boot                 : Starting Boot v0.0.1 on Nitendras-MacBook-Pro.local with PID 97701
2020-05-01 18:45:26.896  INFO 97701 --- [           main] s.b.c.e.t.TomcatEmbeddedServletContainer : Tomcat initialized with port(s): 8199 (http)
```

## Option 2: Using Maven

One can use the `mvn spring-boot: run` command to run your Spring Boot application. Make sure that you are in the project root folder before executing this command.

```bash
mvn spring-boot:run
```

```bash
 % mvn spring-boot:run
[INFO] Scanning for projects...
[INFO]
[INFO] ----------------< com.nitendragautam:spring-boot-rest >-----------------
[INFO] Building spring-boot-rest 0.0.1
[INFO] --------------------------------[ jar ]---------------------------------
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v1.5.4.RELEASE)

2020-05-01 18:55:50.135  INFO 97749 --- [  restartedMain] com.nitendragautam.Boot                  : Starting Boot on Nitendras-MacBook-Pro.local with PID 97749
```

---

*Originally published on nitendratech.com on 2021-05-03, updated 2022-06-06.*
