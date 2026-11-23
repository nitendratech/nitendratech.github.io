---
title: "Storage Building Blocks Interview Questions and Answers"
description: "Interview questions and answers on storage building blocks — key-value stores, blob uploads, the metadata service, inverted indexes, and choosing a store."
pubDate: 2026-12-03
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the storage designs from the companion post, "Storage Building Blocks: Key-Value Stores, Blob Stores, Distributed Search" — how each store is built and when to pick it.

## Interview Questions

**1. Design a key-value store like DynamoDB.**
Partition by consistent hashing with virtual nodes; replicate each key to the next N nodes on the ring; use quorum reads/writes (R + W > N) for consistency, hinted handoff for temporary failures, gossip for failure detection, and anti-entropy with Merkle trees for repair. Version with vector clocks or last-write-wins, and store with an LSM-tree for write throughput.

**2. How does a blob store handle a 100 GB upload?**
Split the object into chunks (e.g., 8–16 MB), upload chunks in parallel with a checksum per chunk, retry only failed chunks, and commit with a manifest listing the chunks in order. The metadata service records the manifest atomically — the upload is not visible until the commit succeeds.

**3. Why is the metadata service the hardest part of a blob store?**
Chunks are interchangeable and dumb; the index mapping names to chunks, versions, and permissions must be strongly consistent, available, and able to list billions of keys. It is a distributed database problem hiding inside a storage API, and it is where consistency bugs and scaling limits actually live.

**4. How does an inverted index work, and how do you shard it?**
Tokenize documents into terms; each term maps to a posting list of document IDs. Queries intersect or union posting lists, then rank with BM25. Shard by document (scatter-gather across all shards, even load) or by term (only relevant shards touched, but popular terms become hot shards). Document sharding is the usual default.

**5. When would you use a key-value store instead of a relational database or a blob store?**
KV when access is by a single key at high throughput with no joins — feature lookups, session state, dedup tables. Relational when you need transactions and queries across related rows. Blob when the unit is a large file and the access is by name. If the requirement mentions "all records where X," the KV store is the wrong answer.

## Key Takeaways

- A key-value store partitions by consistent hashing, replicates with quorums, and repairs with anti-entropy.
- The metadata service is the hardest part of a blob store — it is a distributed database hiding inside a storage API.
- Choose by access pattern: KV for single-key lookups, relational for joins and transactions, blob for large files by name.

## Resources


- DynamoDB documentation — https://aws.amazon.com/dynamodb/
- Apache Cassandra — https://cassandra.apache.org/
- Amazon S3 — https://aws.amazon.com/s3/
- Elasticsearch — https://www.elastic.co/elasticsearch/
- Apache Solr — https://solr.apache.org/
- Delta Lake documentation — https://docs.delta.io/latest/delta-intro.html
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
