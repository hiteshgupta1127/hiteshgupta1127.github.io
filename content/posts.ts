// Placeholder content from the V3.2 Figma designs. Replace with real posts.

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "code"; code: string };

export type Post = {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-09-14". */
  date: string;
  readingMinutes: number;
  topic: string;
  summary: string;
  body: readonly Block[];
};

const unsorted: readonly Post[] = [
  {
    slug: "idempotency-keys-explained",
    title: "Idempotency keys, explained with a payments bug",
    date: "2026-09-14",
    readingMinutes: 8,
    topic: "Systems",
    summary: "A real double-charge, the three-line fix, and why the fix was the easy part.",
    body: [
      {
        type: "paragraph",
        text: "Last March a customer was charged twice for the same order. The logs looked fine. Every service did exactly what it was told, twice.",
      },
      { type: "heading", text: "What actually happened" },
      {
        type: "paragraph",
        text: "The mobile app timed out after 10 seconds and retried. The payment gateway had already accepted the first request; it just answered slowly. Our API saw two valid requests and wrote two ledger entries.",
      },
      { type: "quote", text: "Retries are not the bug. Retries without identity are the bug." },
      { type: "heading", text: "The fix" },
      {
        type: "paragraph",
        text: "The client generates an Idempotency-Key once per checkout and sends it with every retry. The server stores the key with the result, in the same transaction as the write.",
      },
      {
        type: "code",
        code: `@PostMapping("/payments")
public Payment create(@RequestHeader("Idempotency-Key") String key,
                      @RequestBody PaymentRequest req) {
    return ledger.applyOnce(key, req);   // exactly-once
}`,
      },
      {
        type: "paragraph",
        text: "The three-line fix took an afternoon. Backfilling keys for old clients and agreeing on expiry rules took three weeks, and that's the part worth writing about.",
      },
    ],
  },
  {
    slug: "pgvector-at-10m-rows",
    title: "What I learned running pgvector at 10M rows",
    date: "2026-07-12",
    readingMinutes: 11,
    topic: "LLMs",
    summary: "Index choices, recall trade-offs and the vacuum settings nobody mentions.",
    body: [
      {
        type: "paragraph",
        text: "At a few hundred thousand rows, pgvector feels effortless. At ten million, every default deserves a second look.",
      },
    ],
  },
  {
    slug: "outbox-pattern-spring-boot",
    title: "The outbox pattern in Spring Boot, without the ceremony",
    date: "2026-04-03",
    readingMinutes: 6,
    topic: "Systems",
    summary: "Reliable events from a single table and a scheduled publisher.",
    body: [
      {
        type: "paragraph",
        text: "You don't need a framework to publish events reliably. A table, a transaction and a small publisher get you most of the way.",
      },
    ],
  },
  {
    slug: "retries-for-llm-apis",
    title: "Designing retries for LLM APIs",
    date: "2026-02-18",
    readingMinutes: 7,
    topic: "LLMs",
    summary: "Budgets, backoff and when not to retry at all.",
    body: [
      {
        type: "paragraph",
        text: "Model APIs fail differently from databases: slowly, partially and expensively. Your retry policy should know that.",
      },
    ],
  },
  {
    slug: "kafka-consumer-lag",
    title: "Kafka consumer lag is a product metric",
    date: "2025-11-21",
    readingMinutes: 5,
    topic: "Systems",
    summary: "Why lag belongs on the product dashboard, not just the ops one.",
    body: [
      {
        type: "paragraph",
        text: "When consumers fall behind, customers notice before your alerts do. Treat lag like latency.",
      },
    ],
  },
  {
    slug: "on-call-handover-checklist",
    title: "A boring checklist for on-call handovers",
    date: "2025-08-09",
    readingMinutes: 4,
    topic: "Systems",
    summary: "Five questions that make the next shift calmer.",
    body: [
      {
        type: "paragraph",
        text: "Good handovers are boring on purpose. Here are the five questions we ask at every one.",
      },
    ],
  },
];

export const posts = [...unsorted].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getNextPost(slug: string) {
  const index = posts.findIndex((post) => post.slug === slug);
  return posts[(index + 1) % posts.length];
}

export function postsByYear() {
  const groups = new Map<string, Post[]>();
  for (const post of posts) {
    const year = post.date.slice(0, 4);
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups];
}
