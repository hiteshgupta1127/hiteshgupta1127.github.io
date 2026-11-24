---
name: portfolio-resume
description: Turn a résumé, CV, LinkedIn export or a list of past jobs into the Résumé page data for Hitesh Gupta's portfolio (content/experience.ts): summary, jobs with highlights, skills and education. The About page reuses the same jobs and skills. Use when Hitesh shares career history or asks to update the résumé page.
---

# Portfolio résumé

Also apply the **portfolio-voice** skill: never invent facts, calm and specific, no em dashes in prose.

## What the page shows

`/resume` and the About page read `content/experience.ts`:

```ts
export const resumeUpdated = "Oct 2026";        // "Mon YYYY", shown as "updated Oct 2026"
export const summary = "...";                   // 2 sentences
export const jobs = [{ role, company, period, highlights: [...] }, ...] as const;
export const skills = [{ label, value }, ...] as const;
export const education = [{ label, value, meta }, ...] as const;
```

About shows each job as one row (period, role, company) and the skills list as "Stack".

## Fields

- **`resumeUpdated`**: today's month and year, `"Nov 2026"`.
- **`summary`**: 2 sentences, ≤ 240 characters. Sentence 1: what Hitesh is and the core stack. Sentence 2: what Hitesh leads or is known for. First person is implied; don't start with "I am".
- **`jobs`**: newest first.
  - `role`: the official title, title case as on the offer (`"Software Engineer"`).
  - `company`: the public company name. If it must stay private, use a short description (`"Fintech startup"`) and say so.
  - `period`: `"2022 — 2024"`, or `"2024 — Now"` for the current job. Years only.
  - `highlights`: 1–3 per job, each ≤ 90 characters, one achievement per line, starting with a verb (Led, Cut, Built, Introduced). Include the number that proves it: `"On-call lead for checkout; pages per week 11 → 2."` No duties ("Responsible for...").
- **`skills`**: exactly 4 rows with these labels: `Languages`, `Backend`, `Cloud`, `Data & AI`. Each `value` is a comma-separated list of ≤ 5 items Hitesh has used in real work, most used first.
- **`education`**: degrees and certifications, newest last as today. `label` is the period or year (`"2017 — 2021"`, `"2024"`), `value` is the degree or certification name, `meta` is the institution or issuer.

## Steps

1. Pull every job, date, title and achievement out of the source. Keep numbers exact.
2. Choose the 1–3 strongest highlights per job: biggest measurable result first. Drop vague ones and list them under "Choices I made".
3. Ask about gaps: missing dates, a title that differs between sources, highlights with no number.
4. Inside the repo, replace the values in `content/experience.ts`, keeping the `as const` assertions, then run `npx tsc --noEmit` and check `/resume` and `/about`.
5. If any certification is new, suggest also running the **portfolio-certifications** skill so the Certifications page matches.
