// Placeholder content from the V3.2 Figma designs. Update roughly monthly.

export const now = {
  updated: "Nov 2026",
  building: {
    name: "Tracewise",
    status: "60% done",
    description: "An eval harness that runs prompt regression tests on every pull request.",
    meta: "Python / Lambda / SQS · shipping Dec 2026",
  },
  learning: [
    { label: "Rust", value: "Rewriting a small CLI to learn ownership" },
    { label: "Systems", value: "Formal methods basics with TLA+" },
  ],
  reading: [
    { label: "Book", value: "Designing Data-Intensive Applications", meta: "Kleppmann" },
    { label: "Book", value: "A Philosophy of Software Design", meta: "Ousterhout" },
    { label: "Paper", value: "Spanner", meta: "Corbett et al." },
  ],
  life: "Based in Bengaluru. Walking 8k steps a day, mostly succeeding. Saying no to new side projects until Tracewise ships.",
} as const;
