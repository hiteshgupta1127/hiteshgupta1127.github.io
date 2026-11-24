// Placeholder content from the V3.2 Figma designs. Replace with your real setup.

export const uses = [
  {
    title: "Hardware",
    items: [
      { label: "Laptop", value: 'MacBook Pro 14"', meta: "M-series" },
      { label: "Display", value: '27" 4K monitor' },
      { label: "Keyboard", value: "Mechanical, low profile" },
    ],
  },
  {
    title: "Editor and terminal",
    items: [
      { label: "Editor", value: "IntelliJ IDEA", meta: "Java" },
      { label: "Editor", value: "VS Code", meta: "Python" },
      { label: "Terminal", value: "Ghostty + zsh" },
      { label: "AI", value: "Claude Code", meta: "daily" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Runtime", value: "Java 21, Spring Boot 3" },
      { label: "Data", value: "Postgres, Redis, Kafka" },
      { label: "Cloud", value: "AWS: ECS, Lambda, SQS" },
      { label: "Observability", value: "OpenTelemetry, Grafana" },
    ],
  },
] as const;
