---
name: portfolio-now
description: Update the Now page of Hitesh Gupta's portfolio (content/now.ts) from a quick brain dump of what Hitesh is building, learning, reading and doing this month. Use for the monthly Now update or when Hitesh says what has their attention right now.
---

# Portfolio now page

Also apply the **portfolio-voice** skill: never invent facts, calm and specific.

## What the page shows

`/now` reads `content/now.ts` (the About page also shows the first building, reading and learning items):

```ts
export const now = {
  updated: "Nov 2026",                       // "Mon YYYY", the month of this update
  building: { name, status, description, meta },
  learning: [{ label, value }, ...],         // 1–3 rows
  reading: [{ label, value, meta }, ...],    // 1–4 rows
  life: "...",                               // 1–3 short sentences
} as const;
```

## Fields

- `building`: the one main project.
  - `name`: project name.
  - `status`: ≤ 12 characters, shown in uppercase mono: `"60% done"`, `"in beta"`, `"shipping"`.
  - `description`: one sentence, ≤ 100 characters.
  - `meta`: stack and target date, `"Python / Lambda / SQS · shipping Dec 2026"`.
- `learning`: `label` is the topic in 1–2 words (`"Rust"`, `"Systems"`); `value` is what specifically, ≤ 60 characters (`"Rewriting a small CLI to learn ownership"`).
- `reading`: `label` is `"Book"`, `"Paper"` or `"Course"`; `value` is the title; `meta` is the author.
- `life`: personal and light: where Hitesh is based, a habit, what Hitesh is saying no to. Nothing private about other people.

## Steps

1. Sort the brain dump into building, learning, reading and life. Ask about anything that doesn't fit.
2. Keep only what's true this month; move finished items out and mention them under "Choices I made".
3. Set `updated` to the current month.
4. Inside the repo, replace the `now` object in `content/now.ts`, run `npx tsc --noEmit`, and check `/now` and the Now section on `/about`.
