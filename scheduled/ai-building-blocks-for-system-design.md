---
title: "AI Building Blocks for System Design"
description: "How to design the reusable AI components — model serving, retrieval and vector search, and evaluation — with data engineering examples and interview trade-offs."
pubDate: 2026-12-02
category: data-engineering
subcategory: System Design
draft: false
---

*Focus keyword: AI building blocks model serving retrieval evaluation. Research basis: system design study guide from the knowledge base (AI building blocks section) and the System Design Foundations post on this site. This post covers the AI components themselves; the RAG pipeline and ML feature platform drafts on this site cover the end-to-end pipelines that use them.*

## What Are AI Building Blocks?

Most AI systems are assembled from three reusable components. **Model serving** takes a trained model and answers requests with predictions. **Retrieval** finds the relevant context — documents, features, or examples — that the model needs to answer well. **Evaluation** measures whether the system is actually good, offline and in production.

Treating them as building blocks matters because the same components show up in different systems. The retrieval component in a customer-support chatbot, a code assistant, and an internal knowledge search is the same shape: embed, index, search, rerank. The serving component behind a recommendation model and a text classifier is the same shape too: load the model, batch requests, return predictions, scale with load. Interviewers ask about these blocks because designing one well is more useful than memorizing any single product's architecture.

For a data engineer, these blocks sit downstream of the pipelines you already build. Your lakehouse produces the training data and the documents; the serving layer consumes them. Knowing how the blocks work — and where they break — is what lets you design the data side correctly.

## 1. Model Serving

**Definition:** Model serving is running a trained model behind an API so other systems can get predictions. It sounds simple — load the model, accept requests, return outputs — but the engineering is in the trade-offs between latency, throughput, cost, and freshness.

**Online vs offline inference.** Online serving answers one request at a time with a latency budget, usually tens to hundreds of milliseconds. Offline (batch) inference scores large datasets on a schedule, where throughput matters and latency does not. A fraud model that approves a transaction needs online serving; a churn model that scores a customer table nightly needs batch inference. Many systems need both, served from the same model version.

**Batching** is the biggest lever on throughput. A GPU is idle if it processes one request at a time, so serving systems group requests into batches. **Dynamic batching** waits a few milliseconds to collect a batch, trading a small latency increase for a large throughput gain. The batch size and wait time are the tuning knobs, and the right values depend on the latency budget.

**Scaling and versioning.** Models are versioned artifacts, usually tracked in a model registry with their training data and metrics. Serving must support **canary releases** — routing a small percentage of traffic to the new version and comparing its predictions and error rates before a full rollout. **Autoscaling** adds replicas under load, but model loading is slow (large weights, GPU memory), so replicas must warm up before they take traffic, and scale-down should be gradual to avoid cold starts.

**Caching and fallbacks.** Repeated inputs should hit a cache before the model — the same product description or the same query text does not need recomputing. And every serving design needs a fallback: if the model is down or too slow, return a cached result, a simpler model's output, or a safe default. A serving system without a fallback is a single point of failure for everything downstream.

**Data engineering example:** A recommendation model served online needs features at request time. The feature platform computes features in batch and writes them to a low-latency online store; the serving layer reads them in milliseconds. The contract between the two is the feature definition — if the batch pipeline changes a feature's meaning without telling the serving layer, the model silently gets different inputs than it was trained on. That mismatch, training-serving skew, is the most common serving bug in production.

**The trade-off to say out loud:** "Online serving trades cost for latency; batching trades a little latency for a lot of throughput. I size both from the latency budget, and I never deploy a model without a canary and a fallback."

## 2. Retrieval and Vector Search

**Definition:** Retrieval is finding the most relevant items for a query — documents for a chatbot, examples for a code assistant, candidate products for a recommendation. Modern retrieval is usually vector search: an embedding model turns text into a dense vector, and the system returns the vectors closest to the query's vector.

**How it works.** First, content is **chunked** into pieces (a few hundred tokens each) and each chunk is embedded. The vectors are stored in an **index**. Exact nearest-neighbor search over millions of vectors is too slow, so production systems use **approximate nearest neighbor (ANN)** indexes: HNSW builds a navigable graph for fast, accurate search; IVF partitions vectors into clusters and searches only the nearest ones. HNSW is more accurate per query; IVF is cheaper to build and update.

**Hybrid search and reranking.** Pure vector search misses exact matches — a part number or a name — so production retrieval combines vector search with keyword search (BM25) and merges the results. Then a **reranker** — a small model that scores query-document pairs — reorders the top candidates. Retrieval returns the top 50, reranking picks the top 5. The reranker is slower per item, which is why it only sees the shortlist.

**Keeping the index fresh.** An index is only as good as its contents. New documents must be embedded and indexed, changed documents re-embedded, deleted documents removed. The ingestion path is a data pipeline problem: chunk, embed, write, with idempotency so a retry does not duplicate entries. **Metadata filtering** (by source, date, owner, permission) happens before or during the search, and permission filtering must happen at retrieval time — never filter after generation, or the model may have already seen restricted content.

**Data engineering example:** A RAG system over company documentation starts in the lakehouse: raw documents land in bronze, cleaned and chunked text lands in silver, embeddings land in the vector index. The serving layer queries the index, reranks, and passes the top chunks to the language model. When a document is updated, the pipeline re-embeds only the changed chunks — full re-embedding on every change is the expensive mistake.

**The trade-off to say out loud:** "ANN indexes trade a little recall for a lot of speed, and reranking buys back quality on a shortlist. The real design work is freshness and permissions — an index that is stale or leaky is worse than no index."

## 3. Evaluation

**Definition:** Evaluation is measuring whether an AI system is good enough — before it ships, and while it runs. It is a system component, not a one-off experiment: it needs datasets, metrics, and a place in the deployment pipeline.

**Offline evaluation** runs the system against a **golden dataset** — a fixed set of inputs with expected outputs, curated by humans. For retrieval, the metrics are recall (did we find the right documents) and precision (were the returned documents relevant). For generation, the metrics are harder: exact match rarely applies, so teams use **groundedness** (is the answer supported by the retrieved context), **faithfulness** (does it avoid inventing facts), and relevance. **LLM-as-judge** — using a strong model to score outputs — is common and fast, but it has biases: it favors long answers and its own style. Use it with human spot-checks, never as the only signal.

**Online evaluation** measures the system in production: user feedback (thumbs up/down), task completion, and **A/B tests** comparing the new version against the old. Online metrics are the ground truth, but they are slow and noisy — which is why offline eval exists to catch regressions before users do.

**Evaluation as a gate.** The mature design puts evaluation in CI/CD: every model or prompt change runs the golden dataset, and the change ships only if the metrics clear a threshold. Evaluation results are versioned alongside the model, so a regression can be traced to the exact change. And because models and data drift, the golden dataset itself needs maintenance — new failure cases found in production get added to it.

**Data engineering example:** A customer-support bot's golden dataset is a set of real past questions with the correct answers and the documents that support them. When the documentation pipeline changes the chunking strategy, the offline eval catches the retrieval recall drop before the change reaches users. Without the eval gate, the first sign of trouble would be a week of bad answers and angry customers.

**The trade-off to say out loud:** "Offline eval is fast and repeatable but never the whole truth; online eval is the truth but slow. I gate on offline metrics and verify with online ones."

## 4. Putting the Blocks Together

**Definition:** A complete AI system composes the three blocks: retrieve context, generate with the model, evaluate the result — and feed what you learn back into the data.

The classic composition is RAG: a user asks a question, retrieval finds the relevant chunks, the model generates an answer from them, and evaluation scores the answer against the golden dataset. But the pattern generalizes. A code assistant retrieves similar code, generates a completion, and is evaluated on accepted suggestions. A recommendation system retrieves candidate items, scores them with the model, and is evaluated on clicks and conversions.

The **feedback loop** is what makes the composition a system rather than a pipeline. Production interactions — which answers users accepted, which retrievals were irrelevant, which generations were wrong — become new training data, new golden-dataset entries, and new retrieval content. The data engineering work is building that loop: logging interactions with privacy and consent handled, joining them back to the retrieval and generation inputs, and making the loop cheap enough to run continuously.

**Failure modes to name in an interview:** retrieval returning stale or wrong documents (a freshness problem), the model ignoring the retrieved context and hallucinating (a grounding problem), evaluation passing offline but failing online (a distribution-shift problem), and a serving change breaking the feature contract (a skew problem). Each maps to one of the three blocks, which is why the block view is useful: it tells you where to look.

**The trade-off to say out loud:** "The blocks are simple; the system is the composition and the feedback loop. I design the interfaces between blocks — the feature contract, the retrieval API, the eval gate — before I optimize any single block."

## Interview Questions

**1. How would you design a model serving system with a 100 ms latency budget?**

Keep the model warm in memory, batch requests dynamically with a small wait window, cache repeated inputs, and autoscale on queue depth rather than CPU. Put a load balancer in front of replicas, run canary releases for new versions, and define a fallback — cached result or a simpler model — for when the primary is slow or down.

**2. How does vector search work, and why use approximate nearest neighbor?**

Text is embedded into dense vectors, and search returns the vectors closest to the query. Exact search over millions of vectors is too slow, so ANN indexes trade a little recall for speed: HNSW builds a navigable graph, IVF searches only the nearest clusters. Then a reranker reorders the shortlist for quality.

**3. How do you keep a retrieval index fresh and correct?**

Treat index updates as a data pipeline: chunk, embed, and write idempotently so retries do not duplicate entries. Re-embed only changed chunks. Apply metadata and permission filters at retrieval time, never after generation, so restricted content is never exposed to the model.

**4. How do you evaluate a RAG system?**

Offline, against a golden dataset: retrieval recall and precision, plus groundedness and faithfulness of the generated answers, with LLM-as-judge backed by human spot-checks. Online, through user feedback and A/B tests. Put the offline eval in CI/CD as a deployment gate, and feed production failures back into the golden dataset.

**5. What is training-serving skew, and how do you prevent it?**

Skew is when the model gets different inputs in production than it saw in training — usually because the feature pipeline changed. Prevent it by defining features once and serving them from the same definitions in training and production, versioning features with the model, and monitoring feature distributions in production against the training baseline.

## Common Mistakes

- **Serving a model with no fallback and no canary**, so a bad deploy or a slow model becomes a full outage instead of a controlled rollback.
- **Filtering permissions after generation instead of at retrieval**, which lets the model see restricted content it should never have accessed.
- **Treating LLM-as-judge as the only evaluation signal**, without human spot-checks or online metrics — it favors long answers and its own style.
- **Re-embedding the entire corpus on every document change**, instead of updating only changed chunks — the fastest way to make retrieval unaffordable.

## Key Takeaways

- AI systems compose three blocks: serving, retrieval, and evaluation — design each as a reusable component with a clear interface.
- Online serving is about latency budgets, dynamic batching, canaries, and fallbacks; batch inference is about throughput.
- Vector search trades a little recall for speed with ANN indexes, and reranking buys quality back on a shortlist.
- Retrieval freshness and permission filtering are the real design work — a stale or leaky index is worse than none.
- Evaluation is a system component: golden datasets, offline metrics, LLM-as-judge with human checks, and a CI/CD gate.
- The feedback loop — production interactions becoming new training and eval data — is what turns a pipeline into a system.

## Resources

- vLLM documentation — https://docs.vllm.ai/
- LangChain documentation — https://python.langchain.com/docs/
- Pinecone documentation — https://docs.pinecone.io/
- MLflow documentation — https://mlflow.org/docs/latest/
- OpenAI Evals — https://github.com/openai/evals
- NVIDIA Triton Inference Server documentation — https://docs.nvidia.com/deeplearning/triton-inference-server/
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
