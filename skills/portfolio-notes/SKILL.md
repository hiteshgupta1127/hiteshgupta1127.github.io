---
name: portfolio-notes
description: Turn quick learnings (a Slack message, a commit, a debugging session, a "today I learned" thought) into entries for the Notes page of Hitesh Gupta's portfolio (content/notes.ts). Use for things too small for a full blog post; for longer pieces use portfolio-post.
---

# Portfolio notes

Also apply the **portfolio-voice** skill: never invent facts, no em dashes, calm and specific.

## What the page shows

`/notes` lists one row per note from `content/notes.ts`, newest first:

```ts
export const notes = [
  { label: "Nov 18", value: "Kafka consumer lag isn't a latency metric", meta: "Kafka" },
] as const;
```

| Field | Rule |
|---|---|
| `label` | Date learned, `"Mon DD"` (`"Nov 09"`). Ask if unknown |
| `value` | The lesson as a statement, ≤ 60 characters, sentence case, no period. Say the surprising part, not the topic: `"Why my Spring retry ran 9 times, not 3"` beats `"Spring retries"` |
| `meta` | One-word topic tag, the technology: `Kafka`, `Spring`, `Postgres`, `AWS`, `LLM`. Reuse existing tags |

## Steps

1. Find the single lesson in the source. If there are several, make several notes.
2. If the lesson needs more than a sentence of context to be useful, suggest a post with **portfolio-post** instead.
3. Inside the repo, add the entries at the top of `notes` in `content/notes.ts`, run `npx tsc --noEmit`, and check `/notes`.
