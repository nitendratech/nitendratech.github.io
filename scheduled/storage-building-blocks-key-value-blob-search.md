---
title: "Storage Building Blocks: Key-Value Stores, Blob Stores, Distributed Search"
description: "How the three storage building blocks work: key-value stores with partitioning and versioning, blob stores with chunking and deduplication, and distributed search with inverted indexes."
pubDate: 2026-11-26
category: "Data Engineering"
subcategory: System Design
draft: false
---

*Focus keyword: key-value store blob store distributed search. Research basis: system design foundations draft (NitendraTech, Nov 2026) and the knowledge-base system design guide; topics follow the Grokking foundations and building-blocks structure, written in original words.*

## Three Stores, Three Access Patterns

There is no best storage system. There is a best store for each way data is read: look something up by a key, fetch a large object by name, or find all documents containing a word. Those three access patterns map to three building blocks — key-value stores, blob stores, and distributed search — and every large system is some combination of them.

This post designs each one: the data model, how it scales, how it survives failure, and where it fits in a data platform. It goes one level deeper than the foundations overview, which introduced the storage choices without designing them.

## 1. Key-Value Store Design

**Definition:** A key-value store is the simplest data model in distributed systems: every record is a key mapped to an opaque value, with exactly three operations — get, put, delete. No joins, no secondary indexes, no query language. That simplicity is the point: by promising less, it can scale further and run faster than any general database.

**Partitioning:** The data set is split across nodes by hashing the key. The standard method is **consistent hashing**: keys and nodes are arranged on a ring, and each key belongs to the first node clockwise from its hash. Adding or removing a node only moves the keys adjacent to it, instead of reshuffling everything. **Virtual nodes** — each physical node owning many small ring segments — even out the distribution when nodes are few.

**Replication:** Each key lives on several nodes, typically the next N nodes clockwise from its owner. Writes go to all replicas; reads can consult one or several. **Quorum reads and writes** (R + W > N) give strong consistency when you need it; reading from one replica gives speed with possible staleness. **Hinted handoff** covers a temporarily dead replica: another node holds its writes and delivers them when it returns. **Anti-entropy** — nodes periodically comparing data with Merkle trees and repairing differences — catches the writes that hinted handoff missed.

**Versioning and conflicts:** When two clients write the same key at the same time on different replicas, the store must reconcile. **Vector clocks** track which write happened after which: if one write causally follows the other, it wins; if they are concurrent, both versions are kept and the conflict is returned to the reader. Simpler stores skip this and use **last-write-wins** with timestamps — easier, but a write with a skewed clock can silently erase a newer one. DynamoDB's original design used vector clocks; Cassandra uses last-write-wins.

**Fault tolerance:** Nodes watch each other with **gossip** — each node periodically exchanges state with a few peers, so news of a dead node spreads quickly without a central coordinator. There is no master to fail, which is the whole appeal: any node can serve any request, and the ring heals itself.

**Storage engine, briefly:** Most KV stores persist with an **LSM-tree**: writes go to an in-memory table and an append-only log, then flush to sorted files on disk that are periodically compacted. Writes are fast because they are sequential; reads may check several files. The alternative, a B-tree, updates data in place and reads faster but writes slower. LSM-trees are why write-heavy KV stores sustain their throughput.

**Data engineering example:** The online layer of a feature store is a key-value store: a model asks for `user:48291` and gets its features in single-digit milliseconds. A streaming job's deduplication table is another one — the idempotency key for each event lives in DynamoDB, and a duplicate event is dropped on lookup. And the metadata store behind a pipeline registry (dataset names to locations and schemas) is a KV-shaped problem even if it happens to live in a relational table.

**The trade-off to say out loud:** "A key-value store buys you scale and latency by giving up queries. The moment I need 'all users in this city,' I have picked the wrong store — that is a secondary index, and KV stores do it badly on purpose."

## 2. Blob Store Design

**Definition:** A blob store holds large, opaque objects — files, images, video, backups, raw data — addressed by name, not by content. S3, GCS, Azure Blob, and HDFS are the examples you know. The interface is small (put, get, delete, list), and the engineering is almost entirely about the metadata and the chunking.

**Chunking:** Objects arrive in all sizes, from kilobytes to terabytes, so the store splits them into fixed-size chunks (a few MB to tens of MB each). Chunking enables **parallel upload** — a 100 GB file uploads as a thousand chunks at once — and **resumable upload**, since only failed chunks are retried. **Content-defined chunking** splits at content boundaries instead of fixed offsets, so inserting a byte at the start of a file does not shift every chunk after it.

**Deduplication:** Chunk hashes make dedup free: if two objects share a chunk, store it once and reference it twice. This is how backup systems and data lakes save enormous space on repeated daily extracts that are 95% identical to yesterday's.

**Replication and durability:** Chunks are replicated across drives, servers, and availability zones — or protected with **erasure coding**, which splits data into k data fragments plus m parity fragments so any k of the k+m reconstruct the object. Erasure coding stores less overhead than full replication for the same durability, at the cost of more CPU and slower rebuilds. Durability figures like "eleven nines" come from this layering: many copies, spread widely, checked continuously.

**The metadata service is the hard part:** The chunks are dumb; the index that maps an object name to its chunks, versions, and permissions is the system's brain — and its bottleneck. It must be strongly consistent (a successful write must be visible to the next read), highly available, and able to list billions of keys. This is why object stores historically had quirks like list-after-write delays, and why the metadata layer is usually a separate distributed database behind the storage API.

**Versioning and lifecycle:** Versioning keeps old copies of an object when it is overwritten, which is what makes accidental deletion recoverable. **Lifecycle policies** move objects between storage tiers by age or access pattern — hot storage for this month's data, cold archival storage for last year's — which is where most of the cost savings in a data lake come from.

**Data engineering example:** The bronze zone of a lakehouse is a blob store used exactly as designed: raw files land immutable, chunked and deduplicated, with lifecycle rules moving old partitions to cheaper tiers. A daily partner extract that arrives as one 50 GB file should be uploaded in parallel chunks with a checksum per chunk, so a network failure retries megabytes instead of the whole file. And when a pipeline lists a prefix with millions of keys, the cost is the metadata service's problem — partition your prefixes so listings stay small.

**The trade-off to say out loud:** "Blob storage is cheap and durable because the interface is tiny. The moment I need to query inside objects, I am using the wrong tool — that is what the table format and the query engine on top are for."

## 3. Distributed Search Design

**Definition:** A search engine answers a different question from a database: not "give me the row with this key" but "give me all documents containing these words, ranked by relevance." The core data structure is the **inverted index**: for each term, the list of documents containing it. Everything else in search design is about building, sharding, and updating that index at scale.

**How indexing works:** Documents are **tokenized** into terms (lowercasing, splitting on punctuation, removing stop words, stemming "running" to "run"), and each term maps to a posting list of document IDs, often with positions and frequencies. Queries resolve by intersecting or unioning posting lists — "spark AND streaming" means intersecting two lists. **Ranking** then orders the results, classically with TF-IDF or BM25: terms that are rare across the corpus but frequent in a document score higher.

**Near-real-time indexing:** Documents do not go straight into the main index. They land in small in-memory segments that are searchable immediately, then periodically merged into larger segments on disk. Merging is the background cost of search — it keeps read performance stable as the index grows, and it is why a freshly indexed document is visible in seconds but the index files are rewritten continuously.

**Sharding the index:** An index too large for one machine splits two ways. **Document sharding** puts whole documents on different shards — every query fans out to all shards and the results merge (scatter-gather). **Term sharding** puts each term's posting list on one shard — a query touches only the shards holding its terms, but a popular term becomes a hot shard. Document sharding is the default because queries spread evenly; term sharding appears where the vocabulary is small and the corpus huge.

**Replication and availability:** Each shard is replicated, usually with a primary that handles writes and replicas that serve reads. A failed primary promotes a replica. Because search is read-heavy, replicas mostly exist to spread query load, not just for durability.

**Data engineering example:** Nobody builds a search engine for fun in a data platform — but every platform needs one somewhere. The data catalog's search ("find datasets about revenue") is an inverted index over dataset metadata. Pipeline log search — finding the one error in a million Spark log lines — is an inverted index over log text. And product search over a catalog is the same structure at larger scale. The design question is always the same: what is a document, what are its terms, and how fresh must the index be?

**The trade-off to say out loud:** "Search trades write cost for read speed: every write pays indexing and merging overhead so that reads are an intersection of posting lists. If I need exact key lookups instead, that overhead is wasted."

## 4. Choosing Between the Three

| Need | Use | Why |
|---|---|---|
| Look up a value by key, millions of times a second | Key-value store | O(1) lookup, no query overhead |
| Store and serve large files durably and cheaply | Blob store | Chunking, dedup, tiered storage |
| Find documents by their contents, ranked | Distributed search | Inverted index, relevance ranking |
| Scan a column across billions of rows | Columnar store | Not covered here — different access pattern entirely |
| Transactions across related rows | Relational database | The KV store gave that up on purpose |

The interview skill is matching the access pattern to the store before discussing any implementation detail. A candidate who starts with "what does a read look like" is already ahead of one who starts with a product name.

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

## Common Mistakes

- **Treating a key-value store as a relational database.** Needing secondary indexes, range scans, or joins means the data model is wrong for the store — pick the store by the query pattern, not by familiarity.
- **Ignoring hot keys.** One celebrity key can saturate a single partition no matter how many nodes you add. Cache hot keys, split them, or salt them — and name the problem unprompted.
- **Assuming a blob store is a filesystem.** Object stores have no directories, no in-place edits, and list operations that get expensive at scale. Renaming a "folder" means copying every object under the prefix.
- **Using search as a database.** An inverted index is built for relevance-ranked retrieval, not for exact lookups, aggregations, or transactions. It complements a database; it does not replace one.

## Key Takeaways

- A key-value store trades queries for scale: consistent hashing, replication, and versioning are the whole design.
- A blob store's engineering lives in chunking, deduplication, and the metadata service — not in storing bytes.
- Search is an inverted index plus sharding and merging; the write cost buys read speed.
- Match the store to the read pattern first: key lookup, file fetch, or content search.
- Hot keys, metadata bottlenecks, and treating one store as another are the failure modes interviewers probe for.

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
