---
title: Source configuration.
description: Configure sources for DBConvert Streams.
layout: doc
lastUpdated: true
---

# {{ $frontmatter.title }}

DBS readers collect data from external sources such as MySQL and PostgreSQL and write the collected events to the target system of your choice.

This section provides general information about source configuration options. Some specific configuration options for different source types are described in the relevant sections.

Here is an example of a JSON source config object.

```JSON
"source": {
    "type": "source-type",
    "connection": "connection-string",
    "settings": {
      //settings are unique for each source type
    },
    "filter": {
      "tables": [
        { "name": "table1", "operations": ["insert", "update", "delete"]},
        { "name": "table2", "operations": ["insert", "update", "delete"]}
      ]
    }
  }
```

| property       | type   | description                                                                                                                       |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| type           | string | Source type. It can be either `mysql` or `postgresql`.                                                                            |
| connection     | string | Connection settings. See the relevant sections for specific data sources.                                                         |
| settings       | -      | The settings are unique for each source type. Find more details about the settings in the relevant sections of the documentation. |
| filter/ tables | object | Tables for which change data is returned. Tables must have primary keys (required for logical replication).                       |
| operations     | enum   | A set of Change Data Capture types (insert, update, delete) of events to track.                                                   |
