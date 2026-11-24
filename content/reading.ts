// Placeholder content from the V3.2 Figma designs. Replace with your own shelf.

export const reading = [
  {
    title: "Go-to",
    items: [
      { label: "Kleppmann", value: "Designing Data-Intensive Applications", meta: "Why every queue is a log" },
      { label: "Nygard", value: "Release It!", meta: "Stability patterns I use weekly" },
      { label: "Google", value: "Site Reliability Engineering", meta: "Error budgets, in practice" },
    ],
  },
  {
    title: "Papers",
    items: [
      { label: "Amazon, 2007", value: "Dynamo", meta: "Availability over consistency" },
      { label: "Dean, Barroso", value: "The Tail at Scale", meta: "Why p99 matters" },
      { label: "Vaswani et al.", value: "Attention Is All You Need", meta: "Where LLMs started" },
    ],
  },
  {
    title: "On the list",
    items: [
      { label: "Petrov", value: "Database Internals" },
      { label: "Various", value: "Building LLM Apps" },
    ],
  },
] as const;
