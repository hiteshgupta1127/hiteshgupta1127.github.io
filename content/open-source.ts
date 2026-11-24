// Placeholder content from the V3.2 Figma designs. Replace with real repositories and pull requests.

export const libraries = [
  { name: "Outbox starter", kind: "Library", description: "Spring Boot auto-config for outboxes.", meta: "42 stars · Java" },
  { name: "Idempotency filter", kind: "Library", description: "Request keys for safe retries.", meta: "18 stars · Java" },
  { name: "prompt-regress", kind: "Tool", description: "Regression tests for LLM prompts.", meta: "27 stars · Python" },
  { name: "otel-defaults", kind: "Library", description: "Sane OpenTelemetry defaults.", meta: "9 stars · Java" },
] as const;

export const contributions = [
  { label: "2026", value: "Fix consumer shutdown during rebalance", meta: "Project A" },
  { label: "2025", value: "Add retry budget to HTTP client", meta: "Project B" },
  { label: "2025", value: "Docs: exactly-once with outboxes", meta: "Project C" },
  { label: "2024", value: "Expose pool metrics", meta: "Project D" },
] as const;
