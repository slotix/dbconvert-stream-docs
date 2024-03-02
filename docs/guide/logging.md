---
title: Logging Flags Overview.
description: logging features to monitor and troubleshoot the behavior of various services within the application.
layout: doc
lastUpdated: true
---

# {{ $frontmatter.title }}


DBConvert Streams offers robust logging features to monitor and troubleshoot the behavior of various services within the application. Logging is a crucial aspect of data streaming processes, providing insights into the execution flow, errors, and other relevant information. In this documentation, we will explore the logging features available for DBS (DBConvert Streams) services, including the `--log-file` and `--log-level` flags.

## Logging Flags Overview

### --log-file
The `--log-file` flag allows users to specify the location and filename for the log file generated by DBS services. This feature is particularly useful for maintaining organized logs and ensuring that important information is recorded for future reference.

### Examples:

```sh
./dbs-api --log-file=../logs/api.log
./dbs-source-reader --log-file=../logs/source.log 
./dbs-target-writer --log-file=../logs/target.log
```

### --log-level

The `--log-level` flag enables users to set the desired log level for a service. The log level is set to `info` by default. In this case, all info, warning, and error message types are logged. For more verbose messages, use the `debug` value.

### Examples:

```sh
./dbs-api --log-level=debug
./dbs-source-reader --log-level=debug
./dbs-target-writer --log-level=debug
```
