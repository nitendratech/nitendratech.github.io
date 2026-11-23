---
title: "AI Building Blocks Interview Questions and Answers"
description: "Interview questions and answers on AI building blocks — model serving under a latency budget, vector search, index freshness, RAG evaluation, and training-serving skew."
pubDate: 2026-12-14
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the AI designs from the companion post, "AI Building Blocks for System Design" — serving under a latency budget, retrieval, evaluation, and training-serving skew.

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

## Key Takeaways

- A 100 ms serving budget means warm models, dynamic batching, caching, and a defined fallback.
- Vector search is approximate by design — ANN trades a little recall for speed, then a reranker restores quality.
- Training-serving skew is a feature-pipeline problem: define features once, serve them from the same definitions everywhere.

## Resources


- vLLM documentation — https://docs.vllm.ai/
- LangChain documentation — https://python.langchain.com/docs/
- Pinecone documentation — https://docs.pinecone.io/
- MLflow documentation — https://mlflow.org/docs/latest/
- OpenAI Evals — https://github.com/openai/evals
- NVIDIA Triton Inference Server documentation — https://docs.nvidia.com/deeplearning/triton-inference-server/
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
