---
name: portfolio-lab
description: Add small experiments, prototypes, notebooks or tools to the Lab page of Hitesh Gupta's portfolio (content/lab.ts) from a repo, notebook or short description. Use for side experiments that don't deserve a full project case study.
---

# Portfolio lab

Also apply the **portfolio-voice** skill: never invent facts, calm and specific.

## What the page shows

`/lab` shows a two-column grid of cards from `content/lab.ts`:

```ts
export const experiments = [
  { name: "pgvector benchmarks", kind: "Notebook", description: "HNSW vs IVFFlat at 10M rows.", meta: "recall@10 0.97" },
] as const;
```

| Field | Rule |
|---|---|
| `name` | ≤ 24 characters, as the repo or notebook is called |
| `kind` | One of `Notebook`, `Prototype`, `Tool`, `Library` (shown in uppercase). Add a new kind only if none fits |
| `description` | One sentence, ≤ 45 characters, ends with a period. What question it answers or what it does |
| `meta` | ≤ 26 characters. One result or fact: a metric, a finding, a star count (`"42 ★ on GitHub"`) |

## Steps

1. If the source is bigger than an experiment (users, production traffic, a team), suggest the **portfolio-project** skill instead.
2. Fill the four fields. `meta` must come from the source; if there's no result yet, use the status (`"in progress"`).
3. Keep the list even (2, 4 or 6 cards) so the grid has no gap; ask which to drop if it goes odd.
4. Inside the repo, add the entry to `experiments` in `content/lab.ts`, run `npx tsc --noEmit`, and check `/lab`.
