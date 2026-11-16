---
title: "What is a Vector Database?"
description: "A vector database stores embeddings — numerical representations of meaning — and finds the items most similar to a query in milliseconds. What it is, how similarity search works, and why it became core infrastructure for AI applications."
pubDate: 2026-12-21
category: "AI & ML Platforms"
subcategory: "Vector Databases"
draft: false
---


Traditional databases answer exact questions: find the row where `id = 42`, or where `city = 'Dallas'`. AI applications ask a different kind of question: find the documents *most similar in meaning* to this question, the images most like this image, the products most like this one. A vector database is the system built to answer that question, fast, over millions or billions of items.

## What is a vector database?

A vector database stores **vectors** — also called embeddings — and indexes them for similarity search. An embedding is a list of numbers (often hundreds or thousands of them) produced by an AI model to represent the meaning of a piece of content: a paragraph, an image, a product description, an audio clip.

Content with similar meaning gets similar vectors. "How do I reset my password?" and "I forgot my login credentials" end up close together in vector space, even though they share almost no words. That property — closeness means relatedness — is what the database exploits.

## How similarity search works

When a query arrives, it is converted to a vector by the same embedding model. The database then finds the stored vectors nearest to it. "Nearest" is measured with a distance or similarity function:

- **Cosine similarity** — the angle between vectors; the most common choice for text.
- **Dot product** — fast and common when vectors are normalized.
- **Euclidean distance** — straight-line distance in the vector space.

An exact search would compare the query against every stored vector — far too slow at scale. So vector databases use **approximate nearest neighbor (ANN)** indexes, most commonly:

- **HNSW** (Hierarchical Navigable Small World) — a graph structure that navigates from broad to precise matches; high accuracy, fast queries, more memory.
- **IVF** (Inverted File Index), often with product quantization (PQ) — clusters vectors and searches only the nearest clusters; uses less memory, trades a little accuracy.

"Approximate" is a deliberate, tunable trade: a small, controlled loss of recall for orders-of-magnitude speed.

## What gets stored besides the vector

A useful vector record has three parts:

1. **The vector itself** — the embedding.
2. **The payload** — the original text or a reference to the source content.
3. **Metadata** — source, date, category, owner, permissions — used to **filter** results (for example, "search only documents from 2026 that this user may access"). Filtering by metadata alongside similarity is a standard production requirement, especially for permission-aware AI applications.

## Where vector databases are used

- **Retrieval-Augmented Generation (RAG)** — the primary driver: retrieving the right document chunks to ground an LLM's answer.
- **Semantic search** — search by meaning instead of keywords, in product catalogs, support knowledge bases, and internal documentation.
- **Recommendations** — "more like this" based on embedding similarity of items and user behavior.
- **Anomaly and duplicate detection** — items that are unexpectedly close to, or far from, everything else.

## The main options

- **Dedicated vector databases** — Pinecone (managed), Milvus, Qdrant, Weaviate, Chroma: built purely for this workload.
- **Vector support in existing systems** — pgvector for PostgreSQL, and vector search in Elasticsearch/OpenSearch, Redis, and lakehouse/warehouse platforms. For many teams, "good vector search inside the database we already run" beats a new system to operate.

Choosing between them is an architecture decision: scale, latency, filtering complexity, and operational cost — not a feature checklist.

## Vector database vs traditional database

| Aspect | Traditional database | Vector database |
| --- | --- | --- |
| Data stored | Rows and columns of exact values | Embeddings plus payload and metadata |
| Question type | "Equal to / greater than / matches pattern" | "Most similar to this" |
| Match quality | Exact or rule-based | Semantic — similar meaning, different words |
| Index structures | B-trees, hash indexes | ANN graphs (HNSW) and clustering (IVF) |
| Typical role | Systems of record, transactions, reporting | Retrieval for AI, search, recommendations |

They are complements, not competitors: the traditional store remains the system of record; the vector index is a derived, rebuildable retrieval layer over it.

## What data engineers need to manage

- **Embedding pipelines** — generating and refreshing embeddings as content changes; an embedding model upgrade means re-indexing everything.
- **Freshness** — new and deleted content must appear in (and disappear from) the index promptly; soft deletes and versioning are operational necessities, including honoring deletion requests for governance.
- **Evaluation** — recall of the index (are the true nearest neighbors being found?) is a quality metric to monitor, like any other data quality check.

## Key takeaways

- A vector database stores embeddings and answers "most similar to this" queries with ANN indexes.
- It is the retrieval layer behind RAG, semantic search, and recommendations — core AI infrastructure.
- It complements rather than replaces traditional databases, and running it well is largely data engineering: pipelines, freshness, and quality.

## Resources

- Pinecone: What is a vector database? — https://www.pinecone.io/learn/vector-database/
- pgvector — https://github.com/pgvector/pgvector
- Databricks: Data Engineering for AI — https://www.databricks.com/blog/data-engineering-for-ai
