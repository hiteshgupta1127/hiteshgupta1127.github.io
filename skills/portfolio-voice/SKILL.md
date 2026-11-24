---
name: portfolio-voice
description: Writing rules and facts policy for every piece of content on Hitesh Gupta's portfolio site (projects, posts, résumé, about, now, lab and the smaller pages). Use it together with any other portfolio-* skill, or on its own when editing or reviewing copy for the site.
---

# Portfolio voice

Every portfolio-* skill turns raw material into content for the site. This skill holds the rules they all share. Apply them before handing anything back.

## Facts

- **Never invent facts.** Numbers, dates, company names, people, quotes, star counts, links: if the source doesn't say it, don't write it. Use a clearly marked placeholder (`"TODO: p99 latency"`) and list it under "Questions" in your reply.
- **Keep numbers exact.** Copy the figure and its unit as given. Don't round 2,412 to "2.4k" unless the field needs a short form, and then keep the meaning (2,412 tx/s → "2.4k tx/s").
- **One source of truth.** If two sources disagree (README vs. commit history, draft vs. résumé), ask which is right instead of picking one.
- **Keep it public-safe.** Leave out employer secrets, internal hostnames, customer names, private repo URLs, API keys and personal data about other people. If a detail looks confidential, generalise it ("a payments company") and say so in the reply.

## Voice

- Calm, specific, first person where it reads naturally. Plain words over buzzwords: "cut p99 from 210ms to 38ms", not "drove significant performance improvements".
- Lead with the problem and the result, then the how.
- Short sentences. One idea per sentence.
- No hype words: revolutionary, cutting-edge, seamless, robust, leverage, synergy, world-class, passionate.
- No emoji.

## Typography

- **No em dashes (—) in titles, taglines, summaries or headings.** They read as AI-written. Use a middle dot (·), a comma, a colon or a new sentence instead. Date ranges inside data fields keep the existing site format: `"2024 — Now"`, `"Jan — Jun 2026"`.
- Sentence case for titles and headings ("What I learned running pgvector", not "What I Learned Running PgVector").
- Taglines and accent lines start lowercase and end with a period: `"an event-sourced payments ledger."`
- Use real typographic characters where the site already does: `×`, `→`, `−` (minus) in metrics such as `"−71%"`.
- Product names keep their own casing: pgvector, PostgreSQL or Postgres (pick what the source uses), Spring Boot, AWS Lambda.

## Output

- Return TypeScript that drops straight into the named file in `content/`, matching the existing type exactly: same keys, same order, no extra keys.
- When working inside the portfolio repo, edit the content file directly, then run `npx tsc --noEmit` and fix any type errors.
- End every reply with two short lists:
  - **Questions:** each TODO placeholder and what you need to fill it.
  - **Choices I made:** anything you cut, reordered, shortened or generalised, so Hitesh can undo it.
