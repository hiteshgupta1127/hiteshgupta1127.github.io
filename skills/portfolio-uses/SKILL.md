---
name: portfolio-uses
description: Fill the Uses page of Hitesh Gupta's portfolio (content/uses.ts) from a description of Hitesh's setup: hardware, editor, terminal, AI tools and the backend stack used day to day. Use when Hitesh changes setup or wants the Uses page filled in.
---

# Portfolio uses

Also apply the **portfolio-voice** skill: never invent facts, calm and specific.

## What the page shows

`/uses` shows one section per group from `content/uses.ts`:

```ts
export const uses = [
  { title: "Hardware", items: [{ label: "Laptop", value: 'MacBook Pro 14"', meta: "M-series" }] },
  { title: "Editor and terminal", items: [...] },
  { title: "Backend", items: [...] },
] as const;
```

- Groups, in this order: `Hardware`, `Editor and terminal`, `Backend`. Add `Services` (hosting, monitoring, note-taking) only if there are 2 or more items.
- `label`: the category in 1–2 words (`Laptop`, `Editor`, `Terminal`, `AI`, `Data`, `Cloud`).
- `value`: the product, as its maker writes it (`IntelliJ IDEA`, `Ghostty + zsh`).
- `meta`: optional, ≤ 16 characters, what it's for or a detail (`"Java"`, `"daily"`).
- 2–5 items per group.

## Steps

1. Ask for anything only implied ("my laptop": which one?).
2. Inside the repo, replace the array in `content/uses.ts`, run `npx tsc --noEmit`, and check `/uses`.
