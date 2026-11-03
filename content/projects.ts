// Placeholder content from the V3.2 Figma designs. Replace with real projects.

export type ArchitectureNode = { name: string; detail: string };

export type Project = {
  slug: string;
  name: string;
  year: number;
  tagline: string;
  summary: string;
  stack: readonly string[];
  highlight: string;
  overview: readonly { label: string; value: string }[];
  problem: string;
  approach: string;
  code?: string;
  architecture?: {
    caption: string;
    /** Each step is one node, or a group of nodes that share the previous step. */
    steps: readonly (ArchitectureNode | readonly ArchitectureNode[])[];
  };
  results: readonly { value: string; label: string }[];
};

export const projects: readonly Project[] = [
  {
    slug: "ledgerline",
    name: "Ledgerline",
    year: 2026,
    tagline: "an event-sourced payments ledger.",
    summary: "Double-entry ledger with exactly-once writes, built on Kafka and Postgres.",
    stack: ["Java", "Spring Boot", "Kafka"],
    highlight: "p99 38ms",
    overview: [
      { label: "Role", value: "Backend lead" },
      { label: "Stack", value: "Java, Spring Boot, Kafka, Postgres" },
      { label: "Timeline", value: "Jan — Jun 2026" },
      { label: "Impact", value: "2.4k tx/s at p99 38ms" },
    ],
    problem:
      "Retries from mobile clients and a flaky payment gateway caused roughly 1 in 40,000 payments to be applied twice. Each one meant a manual refund and an apology email.",
    approach:
      "Every write carries an idempotency key. The ledger service stores the key and the resulting event in one Postgres transaction, then publishes to Kafka through an outbox. Replays become no-ops instead of incidents.",
    code: `@PostMapping("/payments")
public Payment create(@RequestHeader("Idempotency-Key") String key,
                      @RequestBody PaymentRequest req) {
    return ledger.applyOnce(key, req);   // exactly-once
}`,
    architecture: {
      caption: "Write path with idempotency keys and a transactional outbox",
      steps: [
        { name: "Client", detail: "HTTPS" },
        { name: "API Gateway", detail: "AWS" },
        { name: "Ledger service", detail: "Spring Boot" },
        { name: "Kafka", detail: "outbox" },
        [
          { name: "Postgres", detail: "ledger + keys" },
          { name: "Redis", detail: "key cache" },
        ],
      ],
    },
    results: [
      { value: "2.4k tx/s", label: "Throughput" },
      { value: "38ms", label: "p99 latency" },
      { value: "0", label: "Duplicates in 9 months" },
    ],
  },
  {
    slug: "atlas-rag",
    name: "Atlas RAG",
    year: 2026,
    tagline: "grounded answers over internal docs.",
    summary: "Grounded Q&A over 120k internal docs with hybrid search and citation checks.",
    stack: ["Python", "FastAPI", "pgvector"],
    highlight: "92% grounded",
    overview: [
      { label: "Role", value: "Tech lead" },
      { label: "Stack", value: "Python, FastAPI, pgvector, Claude API" },
      { label: "Timeline", value: "Mar — Aug 2026" },
      { label: "Impact", value: "92% of answers fully grounded" },
    ],
    problem:
      "Engineers spent hours searching wikis and runbooks, and a first chatbot prototype answered confidently without sources.",
    approach:
      "Hybrid keyword and vector search, a reranker, and a citation check that rejects any answer it can't trace back to a document.",
    results: [
      { value: "120k", label: "Documents indexed" },
      { value: "1.2s", label: "p50 answer time" },
      { value: "92%", label: "Grounded answers" },
    ],
  },
  {
    slug: "relay",
    name: "Relay",
    year: 2025,
    tagline: "a multi-region rate limiter.",
    summary: "Token-bucket rate limiter shared across three AWS regions.",
    stack: ["Java", "Redis", "AWS"],
    highlight: "−71% 429s",
    overview: [
      { label: "Role", value: "Backend engineer" },
      { label: "Stack", value: "Java, Redis, AWS" },
      { label: "Timeline", value: "Jul — Oct 2025" },
      { label: "Impact", value: "71% fewer rejected requests" },
    ],
    problem:
      "Per-region limits let heavy clients burst across regions while well-behaved clients were throttled.",
    approach:
      "A shared token bucket with regional Redis replicas and a small local budget, so checks stay fast and limits stay global.",
    results: [
      { value: "3", label: "Regions" },
      { value: "−71%", label: "429 responses" },
      { value: "9ms", label: "p99 check" },
    ],
  },
  {
    slug: "tracewise",
    name: "Tracewise",
    year: 2025,
    tagline: "an eval harness for LLM features.",
    summary: "Regression tests for LLM prompts that run on every pull request.",
    stack: ["Python", "Lambda", "SQS"],
    highlight: "1.8k evals / PR",
    overview: [
      { label: "Role", value: "Creator" },
      { label: "Stack", value: "Python, AWS Lambda, SQS" },
      { label: "Timeline", value: "2025 — ongoing" },
      { label: "Impact", value: "Regressions caught before release" },
    ],
    problem: "Prompt changes shipped without tests, so quality regressions surfaced only in production.",
    approach:
      "Every pull request fans out about 1,800 eval cases to Lambda workers and blocks the merge when scores drop.",
    results: [
      { value: "1.8k", label: "Evals per PR" },
      { value: "41s", label: "Suite time" },
      { value: "3", label: "Regressions caught" },
    ],
  },
];

export const archive = [
  { year: 2024, name: "Outboxer", description: "Spring Boot outbox" },
  { year: 2024, name: "s3-sync-lite", description: "Python CLI" },
  { year: 2023, name: "Queue Lens", description: "SQS DLQ inspector" },
] as const;

export const featuredProjects = projects.slice(0, 3);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
