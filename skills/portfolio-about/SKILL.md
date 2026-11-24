---
name: portfolio-about
description: Write or update the About page and the core profile copy for Hitesh Gupta's portfolio (content/about.ts and the bio in content/profile.ts) from notes, an old bio, a LinkedIn About section or a conversation. Use when Hitesh wants to change how the site introduces Hitesh: the headline, the intro paragraph or the quote.
---

# Portfolio about

Also apply the **portfolio-voice** skill: never invent facts, calm and specific, no em dashes.

## What the pages show

- **About** (`/about`) reads `content/about.ts`:
  ```ts
  export const about = { headline, intro, quote } as const;
  ```
  - `headline`: 2–4 words ending with a period, shown huge: `"Backend engineer."`
  - `intro`: 2–3 sentences, ≤ 320 characters, first person, starting "I'm Hitesh,". What Hitesh builds, with what, and for what kind of problems.
  - `quote`: one sentence, ≤ 120 characters, shown as a pull quote. A belief about the work, in Hitesh's own words where possible: `"I care about boring reliability: idempotent APIs, clear runbooks and dashboards that tell the truth."`
- **Home intro** and search snippets read `content/profile.ts`:
  - `role`: 1–3 words, sentence case, no period: `"Software engineer"`. Used in the page title as "Hitesh Gupta · Software engineer".
  - `bio`: 2 sentences, ≤ 230 characters, shown under the name on Home.
  - `description`: one sentence, ≤ 155 characters, for search results and link previews.
  - `skills`: 5–7 items for structured data (search engines), not shown as a list.

## Steps

1. Collect what Hitesh actually does now: role, stack, domains (payments, data pipelines, LLM products), and one belief about engineering.
2. Draft `headline`, `intro` and `quote`, then `role`, `bio` and `description` so they agree with each other and with the résumé summary.
3. Offer 2 alternatives for the `headline` and the `quote`, since they carry the most personality.
4. Inside the repo, edit only those fields (leave `name`, `url`, `email`, `links` and `copyrightYear` alone unless asked), run `npx tsc --noEmit`, and check `/`, `/about` and the page title.
