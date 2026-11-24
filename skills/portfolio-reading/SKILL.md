---
name: portfolio-reading
description: Fill the Reading page of Hitesh Gupta's portfolio (content/reading.ts) from a list of books and papers, a Goodreads export or notes. Use when Hitesh wants to add or reorganise books and papers on the site.
---

# Portfolio reading

Also apply the **portfolio-voice** skill: never invent facts, calm and specific.

## What the page shows

`/reading` shows one section per group from `content/reading.ts`:

```ts
export const reading = [
  {
    title: "Go-to",
    items: [{ label: "Kleppmann", value: "Designing Data-Intensive Applications", meta: "Why every queue is a log" }],
  },
  { title: "Papers", items: [...] },
  { title: "On the list", items: [...] },
] as const;
```

- Groups, in this order: `Go-to` (books Hitesh returns to), `Papers`, `On the list` (not read yet). Drop an empty group.
- `label`: the author's surname, or "Surname et al." for three or more authors. For papers, "Org, year" also works (`"Amazon, 2007"`).
- `value`: the exact title.
- `meta`: Hitesh's one-line reason, ≤ 40 characters, in Hitesh's words. Omit it for `On the list`. If the source has no reason, ask; don't write a generic one.

## Steps

1. Sort each item into a group and check titles and authors against the source.
2. Inside the repo, replace the array in `content/reading.ts`, run `npx tsc --noEmit`, and check `/reading`.
3. If a book is also the current read on the Now page, mention it so **portfolio-now** stays consistent.
