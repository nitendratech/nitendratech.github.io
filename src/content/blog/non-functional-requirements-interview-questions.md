---
title: "Non-Functional Requirements Interview Questions and Answers"
description: "Interview questions and answers on non-functional requirements — availability vs reliability, nines and error budgets, SLOs vs SLAs, fault tolerance, scalability, and failure models."
pubDate: 2026-11-22
category: "Data Engineering"
subcategory: System Design
draft: false
---

These questions cover the non-functional requirements from the companion post, "Non-Functional Requirements: Availability, Reliability, Scalability, Fault Tolerance" — the definitions interviewers expect you to state precisely, and the numbers behind the nines.

## Interview Questions

**Q: What is the difference between availability and reliability?**
A: Availability is the fraction of time the system is up and serving. Reliability is the probability it behaves correctly while up. A pipeline can be 100% available and unreliable if it runs on time but drops records. Availability is about uptime; reliability is about correctness, durability, and consistency.

**Q: What does 99.9% availability mean in practice?**
A: Three nines allows about 8.76 hours of downtime per year, or roughly 43 minutes per month. Each additional nine cuts the budget by about 10x — four nines is 52.6 minutes per year. The point is that nines are a budget: you spend them on maintenance, deploys, and failures, and exceeding them is what an error budget measures.

**Q: What is an SLO, and how is it different from an SLA?**
A: An SLI is what you measure, an SLO is the target you set for it, and an SLA is the SLO written into a contract with consequences. Example: SLI is the fraction of refreshes completed by 7 AM, SLO is 99.9%, and the SLA is the agreement with the business that promises it. The SLO is an engineering target; the SLA is a business commitment.

**Q: How do you design a system to be fault-tolerant?**
A: Three ingredients: redundancy (more than one of everything critical), isolation (a failure in one part cannot cascade), and graceful degradation (the system does something useful instead of nothing). Plus detection — health checks and alerting — because an unnoticed failure is not tolerated, it is silent. In a batch platform that means task retries, quarantine for bad data, and publishing stale data with a banner instead of publishing nothing.

**Q: What is the difference between scalability and performance?**
A: Performance is how fast one unit of work completes — latency and throughput at the current load. Scalability is how the system behaves as load grows: can it handle 10x the data without redesign or proportional cost growth? A system can be fast and unscalable (a single machine that answers in 10 ms but cannot grow) or scalable and slow (a cluster that handles any load at high latency). Interviews ask about both.

**Q: What failure model should I assume in a design interview?**
A: Say it out loud. The usual assumption is crash failures — machines stop silently — plus detection for corruption through checksums and reconciliation. Byzantine failures (machines behaving arbitrarily) are rarely the right assumption for a data platform interview, but naming the model shows you understand that fault tolerance depends on what you assume can go wrong.

## Key Takeaways

- Availability is uptime; reliability is correctness while up — a pipeline can be 100% available and still unreliable.
- Nines are a budget: 99.9% allows about 43 minutes of downtime a month, and each extra nine cuts it roughly 10x.
- Fault tolerance needs redundancy, isolation, graceful degradation, and detection — an unnoticed failure is not tolerated, it is silent.

## Resources


- Google Site Reliability Engineering books — https://sre.google/books/
- Designing Data-Intensive Applications, Martin Kleppmann — https://dataintensive.net/
- The System Design Primer — https://github.com/donnemartin/system-design-primer
- AWS Well-Architected Framework — https://aws.amazon.com/architecture/well-architected/
- Educative, Grokking the System Design Interview — https://www.educative.io/courses/grokking-the-system-design-interview
- System Design Roadmap — https://roadmap.sh/system-design
- Awesome System Design (curated resources) — https://github.com/madd86/awesome-system-design
