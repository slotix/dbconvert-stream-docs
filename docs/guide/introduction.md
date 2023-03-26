---
title: Introduction.
description: What is DBConvert Streams?
layout: doc
lastUpdated: true
---

# {{ $frontmatter.title }}


The software DBConvert Streams facilitates real-time data replication between databases for individuals and organizations.  

## Supported databases.

DBConvert Streams currently supports the following databases:

- MySQL
- MariaDB
- Percona
- PostgreSQL   
- CockroachDB
- Amazon RDS for MySQL
- Amazon Aurora (MySQL Compatible)
- Amazon RDS for PostgreSQL
- Amazon Aurora (PostgreSQL Compatible)

## Supported platforms.
The native DBConvert Binaries are available for the following operating systems. 
- Linux AMD 64
- Linux ARM 64
- Apple OS X
- Windows

## Deployment.
DBConvert Streams can be deployed on the following cloud platforms: 
- [Amazon Web Services (AWS)](/guide/deploy-ec2)
- Google Cloud
- Microsoft Azure

## Preview version.
The preview edition of DBConvert Streams is being offered completely free of charge. We encourage you to share your experiences and [provide feedback](mailto:streams@dbconvert.com).

## What is DBConvert Streams?

![high-level diagram of DBConvert Streams architecture](/images/dbconvert-stream-high-level-diagram.png)

 
Configuring real-time data replication software typically requires specialized technical knowledge in database management, networking, and system administration. A professional database administrator (DBA) or a DevOps engineer can configure real-time data replication software using their knowledge of DB replication concepts. 

DBConvert Streams simplifies this process, making it accessible to users with basic knowledge of database administration. The software handles many technical aspects of configuring and optimizing the replication process behind the scenes, allowing users to focus on selecting the source and target databases and configuring a few key options. 

This streamlined approach can save time and reduce the need for specialized technical expertise, making it an ideal solution for organizations that require real-time data synchronization without the resources to hire expensive DBAs or DevOps engineers.

DBConvert Streams is a set of distributed services that capture row-level changes in a source database, allowing your applications to respond to those data changes with very low latency.

DBS collects data from and deliver data _continuously_ to SQL and no-SQL databases, data warehouses, and files on your premises or in a cloud.

The DBS platform collects its internal metrics in Prometheus format to explore and visualize live data in dashboards.


---

This documentation introduces **DBConvert Streams**, also known as **DBS**, to new and prospective users.

Review the sections in the documentation to familiarize yourself with DBConvert Streams and understand its functionality for seamless data replication.

Please [drop us a message](mailto:streams@dbconvert.com) for any clarification or report any documentation error. We eagerly seek your feedback to improve the content of this site.
