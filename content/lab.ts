// Placeholder content from the V3.2 Figma designs. Replace with real experiments.

export const experiments = [
  { name: "pgvector benchmarks", kind: "Notebook", description: "HNSW vs IVFFlat at 10M rows.", metric: "recall@10 0.97" },
  { name: "Retry budget simulator", kind: "Prototype", description: "How retries amplify outages.", metric: "2.4× load at 30% errors" },
  { name: "Prompt diff viewer", kind: "Tool", description: "Side-by-side output diffs for evals.", metric: "+12 −3 lines" },
  { name: "Kafka lag dashboard", kind: "Prototype", description: "Consumer lag as a product metric.", metric: "lag p95 1.8s" },
  { name: "Outbox starter", kind: "Library", description: "Spring Boot auto-config for outboxes.", metric: "42 ★ on GitHub" },
  { name: "LLM cost estimator", kind: "Tool", description: "Tokens → dollars before you ship.", metric: "$0.004 / request" },
] as const;
