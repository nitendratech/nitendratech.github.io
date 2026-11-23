---
title: "What Is System Design? Interviews, Prep"
description: "What system design interviews actually test, how to prepare for them as a data engineer, and how to use a structured 45-minute framework to reason through any design problem."
pubDate: 2026-11-16
category: "Data Engineering"
subcategory: System Design
draft: false
---


## What Is System Design?

System design is the skill of turning a vague requirement into an architecture. Someone says "build a pipeline that processes 20 TB a day" or "design a video analytics platform," and you have to decide what the components are, how data flows between them, where it is stored, and what breaks first when things go wrong.

For a data engineer, this is not an abstract exercise. Every pipeline you have built already is a distributed system. A Spark job is a coordination problem. A Kafka topic is a partitioning decision. A Delta Lake table is a storage and consistency choice. System design is the vocabulary for explaining why you built things the way you did — and for designing the next system before you build it.

This post is the starting point of the series. It covers what the interview is, what it actually tests, how to prepare, and the structured method to use inside the interview itself. The companion foundations post covers the building blocks (scaling, consistency, caching, partitioning, storage); this post covers the game itself.

## What System Design Interviews Actually Test

A system design interview is usually 45 to 60 minutes, open-ended, and has no single right answer. The interviewer gives you a problem — "design a URL shortener," "design a data platform for a ride-sharing company" — and watches how you think. Four things are being evaluated, and only one of them is technical knowledge.

**Reasoning through ambiguity.** Real requirements are incomplete. The interviewer expects you to notice the gaps and ask: how many users, how much data, how fresh must it be, what does "done" look like? A candidate who starts drawing boxes before clarifying the problem has already failed, because they are solving a problem they invented.

**Communication under pressure.** You have to think out loud, draw a diagram, and keep the interviewer following your reasoning. A clear diagram with a narrated trade-off beats a perfect architecture the interviewer cannot follow. If you go quiet for five minutes and emerge with a finished design, the interviewer has no evidence of how you think.

**Trade-off judgment.** Every design choice costs something. More replicas cost money and latency. Stronger consistency costs availability. A cache buys speed and sells freshness. The interviewer wants to hear you name what you gave up and why it was the right trade for this problem. "It depends" is not a dodge — it is the correct answer, as long as you say what it depends on.

**Structured thinking.** Can you break a large problem into parts, handle one part at a time, and keep the whole design coherent? This is why a method matters: it keeps you from wandering.

What the interview does **not** test is memorization. Nobody expects you to recite the internals of a database you have never used. It also does not test coding — you may write pseudocode for a specific piece, but the interview is about architecture, not syntax.

**Data engineering example:** A Lead Data Engineer interview rarely asks you to design a social network. It asks you to design a batch platform, a streaming pipeline, a feature store, or a lakehouse — systems you have actually built. That is an advantage: you can ground every answer in a real trade-off you have made, like choosing incremental loads over full refreshes because a full refresh would not fit the nightly window.

**The trade-off to say out loud:** "There is no perfect design, only a design that fits these requirements at this scale. Here is what I chose, here is what it costs, and here is what I would change if the scale doubled."

## The Shape of a 45-Minute Interview

A useful time budget for a 45-minute round:

- **First 5 minutes: Clarify.**  Restate the problem, ask about users, data volume, read/write patterns, latency, and freshness. Agree on the scope before designing anything.
- **Next 10 minutes: Requirements and scope.**  Write down functional requirements (what the system must do) and non-functional ones (how fast, how available, how much data). Do a quick back-of-the-envelope estimate so the design has numbers behind it.
- **Next 15 minutes: High-level design.**  Sketch the major components and data flow. Name the storage, the queue, the compute, the API. Keep it simple enough to explain in one breath.
- **Next 10 minutes: Deep dive.** Pick the two or three hardest parts — usually consistency, partitioning, or failure handling — and design them properly.
- **Last 5 minutes: Trade-offs and questions.** Say what you would change at 10x scale, what you deliberately left out, and ask the interviewer a question about how the real system handles it.

The exact split matters less than the discipline: never spend 30 minutes on the diagram and discover in the last five that you never discussed failure modes.

## How to Prepare for the interview 

There are three stages to prepare for the interview which are listed below in order.


**Stage 1: Foundations.**  Learn the building blocks and the vocabulary: scaling, consistency models, caching, partitioning, messaging, storage types, observability. That is what the foundations post in this series covers. You cannot design a system without names for its parts.

**Stage 2: Real systems.** Study how real systems are built. Read engineering blogs from companies that run data platforms at scale. For each system, ask: what was the requirement, what did they choose, and what did they give up? A design you understand deeply is worth ten designs you skimmed.

**Stage 3: Practice.**  Design systems out loud, on paper or a whiteboard, with a timer. Start with the classic prompts, then move to data engineering ones: a batch platform, a streaming pipeline, a feature store, a metrics layer. After each practice round, write down the trade-offs you missed. The gaps repeat — that is how you know what to study next.

**Data engineering example:** Your preparation should include the systems you already run. Take a pipeline you built, and practice describing it as if it were an interview question: requirements, scale, components, the hardest trade-off, and what you would change at 10x volume. That rehearsal turns your experience into interview answers.

## A Worked Mini-Example: Design a Data Catalog Search Service

Walk through the framework on a data engineering problem: design search for a data catalog holding 100,000 tables, used by 2,000 analysts.

**Clarify:** Who searches, and for what? Analysts searching by table name, column name, and owner. Freshness: new tables should be searchable within minutes. Scale: 100,000 tables, maybe 1 million columns, a few hundred searches a minute — modest traffic, but the index must stay correct.

**Scope:** Functional: full-text search over names and descriptions, filters by owner and domain, ranking by usage. Non-functional: search latency under 200 ms, index freshness under 5 minutes, high availability for reads.

**Design for scale:** A search index (Elasticsearch or equivalent) holds a document per table and per column. A crawler or event stream feeds metadata changes into the index. A thin API serves queries. The catalog database remains the source of truth; the index is derived and rebuildable.

**Start simple:** One search node, a nightly full reindex, no caching. Then iterate: incremental updates from the metadata change stream, a second node for availability, a cache for the most common queries.

**Data structures:** An inverted index maps terms to documents — that is what makes "find tables with a column named customer_id" fast. Ranking uses usage signals, which is a top-K problem.

**Trade-offs:** The index is eventually consistent with the catalog — a table created a minute ago may not appear yet, and that is acceptable for search. If the index is lost, it can be rebuilt from the catalog, so durability lives in the catalog, not the index.

## Common Mistakes

- **Designing before clarifying.** Jumping to components without requirements is the single most common failure. Five minutes of questions saves thirty minutes of designing the wrong system.
- **Reciting memorized architectures.** Naming every component of a famous company's stack without explaining why each one fits *this* problem shows memorization, not judgment. Interviewers change constraints precisely to catch this.
- **Going silent while designing.** A perfect diagram delivered after five quiet minutes gives the interviewer no evidence of your thinking. Narrate as you go, even when you are unsure.
- **Never naming a trade-off.** A design with no stated downsides is a design the candidate does not understand. Every choice costs something — say what it is.

## Key Takeaways

- System design interviews test reasoning through ambiguity, communication, and trade-off judgment — not memorization.
- Clarify requirements and estimate scale before sketching any component.
- Prepare in three stages: foundations, real systems, timed practice out loud.
- Use a structured framework so pressure never makes you skip the requirements step.
- Your own pipelines, reframed as interview questions, are your best preparation material.
- Every design choice costs something. Say what you gave up.

The interview questions for this topic are in a separate post: [What Is System Design Interview Questions and Answers](/blog/what-is-system-design-interview-questions/).

## Resources

- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- Educative, Grokking the System Design Interview — https://www.educative.io/courses/grokking-the-system-design-interview
- System Design Interview, Alex Xu (Vol. 1 & 2) — https://www.bytebytego.com/
- Google Site Reliability Engineering books — https://sre.google/books/
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
