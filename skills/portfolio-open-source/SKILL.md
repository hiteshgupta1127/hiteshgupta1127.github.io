---
name: portfolio-open-source
description: Fill the Open source page of Hitesh Gupta's portfolio (content/open-source.ts) from a GitHub profile, a list of repositories or merged pull requests. Produces maintained-library cards and a contributions list. Use when Hitesh shares GitHub work or open-source contributions.
---

# Portfolio open source

Also apply the **portfolio-voice** skill: never invent facts (especially star counts and merged PRs), calm and specific.

## What the page shows

`/open-source` reads `content/open-source.ts`:

```ts
export const libraries = [
  { name: "Outbox starter", kind: "Library", description: "Spring Boot auto-config for outboxes.", meta: "42 stars · Java" },
] as const;

export const contributions = [
  { label: "2026", value: "Fix consumer shutdown during rebalance", meta: "apache/kafka" },
] as const;
```

- **`libraries`** (cards, two per row): repositories Hitesh owns or maintains.
  - `name` ≤ 24 characters, `kind` is `Library` or `Tool`, `description` one sentence ≤ 45 characters, `meta` is `"<stars> stars · <main language>"`.
- **`contributions`** (rows): merged pull requests to other people's projects, newest first.
  - `label` is the year merged, `value` is the PR title rewritten as a short sentence-case phrase (≤ 60 characters), `meta` is `owner/repo`.

## Steps

1. From a GitHub profile or `gh` output, list owned repos that aren't forks, archived or empty. Rank by usefulness to others, then stars. Keep 2–6.
2. For contributions, include only **merged** PRs to repos Hitesh doesn't own. Skip typo-only fixes unless there are no others. Keep 3–8.
3. Read star counts from the source at the time of writing; never estimate. Mention the date you read them in the reply.
4. Inside the repo, replace the arrays in `content/open-source.ts`, run `npx tsc --noEmit`, and check `/open-source`.
