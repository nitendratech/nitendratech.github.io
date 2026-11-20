---
title: "What is Retrieval-Augmented Generation (RAG)?"
description: "Retrieval-Augmented Generation connects a large language model to your own data, so it answers from current, trusted documents instead of only its training. How RAG works, its components, and why data engineers build the pipeline behind it."
pubDate: 2026-11-20
category: "AI & ML Platforms"
subcategory: "RAG"
draft: false
---



A large language model (LLM) knows only what it was trained on. It does not know your company's documents, your product manuals, or anything that changed after training — and when it doesn't know, it may still answer confidently. Retrieval-Augmented Generation, or RAG, fixes this by giving the model the right information at the moment it answers.

## What is RAG?

RAG is an architecture with two steps:

1. **Retrieval** — when a user asks a question, the system first searches a knowledge base (documents, manuals, tickets, database records) and finds the pieces of information most relevant to the question.
2. **Generation** — those retrieved pieces are placed into the prompt as context, and the LLM generates its answer using that context.

The model is no longer answering from memory alone. It is answering from your data, supplied fresh at query time. That one change gives three practical benefits:

- **Current answers** — update the knowledge base and the answers update; no retraining.
- **Private data** — the model can answer questions about documents it never saw in training.
- **Grounded answers** — the system can show which source documents an answer came from, which is essential for trust.

## How a RAG system works

A RAG system has two halves: an **indexing pipeline** that runs ahead of time, and a **query flow** that runs when a user asks something.

### The indexing pipeline (offline)

1. **Ingest** — collect the source documents: PDFs, web pages, wiki pages, database rows, tickets.
2. **Chunk** — split documents into smaller pieces (chunks). A whole manual is too large and too mixed in topic to retrieve precisely; a few paragraphs on one topic retrieve well.
3. **Embed** — convert each chunk into an embedding: a list of numbers (a vector) that captures its meaning, produced by an embedding model.
4. **Index** — store the vectors, the original text, and metadata (source, date, permissions) in a vector database built for fast similarity search.

### The query flow (online)

1. The user's question is embedded with the same embedding model.
2. The vector database finds the chunks whose vectors are closest in meaning to the question's vector.
3. Optionally, a **reranker** re-scores those results for precision, and filters apply permissions and freshness.
4. The top chunks are inserted into the prompt, and the LLM generates the final answer with citations to the sources.

## The data engineering behind RAG

RAG looks like an AI topic, but most of the work is data engineering:

- **Ingestion pipelines** that keep the knowledge base fresh as sources change — increasingly with change data capture and incremental updates rather than full reloads.
- **Chunking strategy** — fixed-size splitting is the naive approach; splitting on document structure (sections, headings, paragraphs) retrieves noticeably better. This single decision affects answer quality more than many model choices.
- **Embedding management** — changing the embedding model means re-embedding everything; embeddings must be versioned like any other data product.
- **Metadata and permissions** — retrieval must respect who is allowed to see what. Permission-aware retrieval (filtering by the user's access before anything reaches the prompt) is a correctness requirement, not an enhancement.
- **Evaluation** — RAG systems need their own quality checks: are the right chunks being retrieved (retrieval quality), and is the answer faithful to them (groundedness)? Without measurement, quality regressions are invisible.

## RAG vs fine-tuning

A common question: why not just fine-tune the model on your data? They solve different problems.

- **Fine-tuning** changes the model's behavior — tone, format, task style. It is slow and expensive to repeat, and it is a poor way to store facts that change.
- **RAG** supplies facts at query time. It is updatable, auditable, and respects permissions.

Most production systems use RAG for knowledge and light fine-tuning, if any, for behavior.

## Challenges to know

- **Retrieval quality is the ceiling** — if the right chunk isn't retrieved, the model cannot use it. Most "the AI gave a wrong answer" incidents are retrieval failures, not model failures.
- **Stale indexes** — an index refreshed weekly answers with last week's data. Freshness SLAs belong in the design.
- **Chunking and context limits** — too-small chunks lose meaning; too-large chunks waste the context window and dilute relevance.

## Key takeaways

- RAG = retrieve relevant data first, then generate the answer with that data as context.
- It makes LLM applications current, private-data-aware, and auditable — without retraining.
- The pipeline behind it (ingestion, chunking, embedding, indexing, evaluation) is data engineering work, which is why RAG has become a core data engineering topic.

## Resources

- Databricks: Data Engineering for AI — https://www.databricks.com/blog/data-engineering-for-ai
- LlamaIndex documentation — https://docs.llamaindex.ai/
- LangChain documentation — https://python.langchain.com/docs/introduction/
