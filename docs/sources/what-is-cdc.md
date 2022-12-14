---
title: What is Change Data Capture (CDC)?
description: CDC - what is change data capture?
layout: doc
lastUpdated: true
---

# {{ $frontmatter.title }}

![Transaction Log Change Data Capture](/images/log-cdc.png)

**Change Collection** is a technology that extracts row-level events from Database Transaction Logs generated by the database engine.

Traditionally, RDBMS systems use transaction logs for backup and recovery purposes. But transaction logs are also useful for replicating changes to target databases.

DBConvert Streams platform retrieves data changes from transaction logs in real-time to make the information available at the target before the DBMS has finished processing transactions at the source. At the same time, this approach minimizes the impact on the source production database since no additional queries are required for each transaction.

All database readers described in this section collect changed data by reading transaction logs.

See the [Change data capture article](https://dbconvert.com/blog/change-data-capture-cdc-what-it-is-and-how-it-works/#transaction-log-cdc) in our blog for more details about CDC technology.
