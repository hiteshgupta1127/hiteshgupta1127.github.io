// Placeholder content from the V3.2 Figma designs. Replace with your real history.

export const resumeUpdated = "Oct 2026";

export const summary =
  "Backend engineer with five years building distributed systems in Java and Spring Boot on AWS. I lead reliability work on payments and ship LLM features with real evals behind them.";

export const jobs = [
  {
    role: "Software Engineer",
    company: "Company A",
    period: "2024 — Now",
    highlights: [
      "Led the Ledgerline rewrite: 2.4k tx/s at p99 38ms, zero duplicates in 9 months.",
      "Introduced idempotency keys across 14 services.",
      "On-call lead for checkout; pages per week 11 → 2.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Company B",
    period: "2022 — 2024",
    highlights: ["Kafka pipelines moving 3 TB/day into S3.", "Cut AWS spend by 31%."],
  },
  {
    role: "Backend Engineering Intern",
    company: "Company C",
    period: "2021 — 2022",
    highlights: ["Search freshness from 6h to 10 min."],
  },
] as const;

export const skills = [
  { label: "Languages", value: "Java, Python, SQL, TypeScript" },
  { label: "Backend", value: "Spring Boot, FastAPI, Kafka, gRPC" },
  { label: "Cloud", value: "AWS ECS, Lambda, SQS, S3, RDS" },
  { label: "Data & AI", value: "Postgres, Redis, pgvector, LLM APIs, evals" },
] as const;

export const education = [
  { label: "2017 — 2021", value: "B.Tech, Computer Science", meta: "University name" },
  { label: "2024", value: "AWS Solutions Architect – Associate", meta: "Amazon" },
] as const;
