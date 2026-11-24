---
name: portfolio-post
description: Turn a messy or unstructured draft (notes, a brain dump, a Slack thread, an old blog post, a talk transcript, a postmortem) into a clean article for the Writing section of Hitesh Gupta's portfolio. Produces one `Post` entry for content/posts.ts with a title, summary, topic, reading time and a structured body. Use whenever Hitesh shares writing to publish on the site.
---

# Portfolio blog post

Also apply the **portfolio-voice** skill: never invent facts, no em dashes in titles or headings, calm and specific.

## What the page shows

Each post is one `Post` object in `content/posts.ts`:

- **Writing list** `/writing` and **Home**: title, date (grouped by year), topic, summary.
- **Article** `/writing/<slug>`: title, date, reading time, topic, then the `body` blocks in order.

The body is a list of blocks. Only these four types exist:

```ts
{ type: "paragraph", text: "..." }
{ type: "heading", text: "..." }   // section heading
{ type: "quote", text: "..." }     // pull quote, shown large in serif italic
{ type: "code", code: "..." }      // monospace block, keeps line breaks
```

No lists, images, links or inline formatting yet. Turn a bulleted list into a short paragraph, or into a code block if it's a checklist that must stay line by line. If the draft depends on an image or a table, say so in the reply instead of dropping the information.

## Step 1: understand the draft

Read the whole draft first. Write down, for yourself:

- The **one point** of the post in a sentence. If you can't find one, ask Hitesh which of the candidate points to make.
- The **story**: what happened, what was wrong, what changed, what was learned.
- Every **fact**: numbers, dates, systems, code. These must survive unchanged.
- Anything **confidential** (company, customer, internal names): generalise it.

## Step 2: restructure

Default shape, adapt it to the material:

1. **Hook** (1 paragraph): the concrete moment or problem. No throat-clearing ("In this post I will...").
2. **Context** (1–2 paragraphs): just enough for a backend engineer who wasn't there.
3. **2–4 sections** with headings: what happened, what was tried, the fix, the trade-offs.
4. **Close** (1 paragraph): the lesson, in one or two sentences. No "In conclusion".

Editing rules:

- Keep Hitesh's voice and opinions. Tighten, reorder and cut repetition; don't add new claims, examples or numbers.
- Paragraphs of 2–4 sentences.
- Headings: 2–6 words, sentence case, no period, no em dash. Plain labels beat clever ones ("The fix", "Why it took three weeks").
- At most one `quote` block: the single sentence that sums up the post, taken from Hitesh's own words.
- Code only from the draft or the real repo, ≤ 15 lines, ≤ 72 characters per line. Trim, don't rewrite.

## Step 3: fill the metadata

| Field | Rule | Example |
|---|---|---|
| `slug` | kebab-case, 3–6 words, from the title, unique | `"idempotency-keys-explained"` |
| `title` | ≤ 70 characters, sentence case, specific, no clickbait, no em dash, no colon chains | `"Idempotency keys, explained with a payments bug"` |
| `date` | ISO `YYYY-MM-DD`. Use the date in the draft or ask; never guess | `"2026-09-14"` |
| `readingMinutes` | Words in the final body ÷ 230, rounded up, minimum 1 | `8` |
| `topic` | Prefer an existing topic: `"Systems"` or `"LLMs"`. Propose a new one only if neither fits, and say so | `"Systems"` |
| `summary` | One sentence, ≤ 110 characters, says what the reader gets | `"A real double-charge, the three-line fix, and why the fix was the easy part."` |
| `body` | The blocks from step 2 | |

## Step 4: write it into the site

- Inside the portfolio repo: add the object to the `unsorted` array in `content/posts.ts` (the list is sorted by date automatically). Run `npx tsc --noEmit`, then check `/writing/<slug>` with `npm run dev`.
- Outside the repo: return the object as a TypeScript snippet typed `Post`.
- In the reply, also give a 2–3 line "what changed" summary: sections added, paragraphs cut, anything moved.

## Example

Draft: *"so last march customer got charged twice?? logs fine. app retried after 10s timeout, gateway was just slow. two ledger rows. fix = idempotency key per checkout, store with result same txn. 3 lines of code lol but backfilling old clients + expiry rules took 3 weeks. retries arent the bug, retries w/o identity are."*

```ts
{
  slug: "idempotency-keys-explained",
  title: "Idempotency keys, explained with a payments bug",
  date: "TODO: publish date",
  readingMinutes: 2,
  topic: "Systems",
  summary: "A real double-charge, the three-line fix, and why the fix was the easy part.",
  body: [
    { type: "paragraph", text: "Last March a customer was charged twice for the same order. The logs looked fine. Every service did exactly what it was told, twice." },
    { type: "heading", text: "What actually happened" },
    { type: "paragraph", text: "The mobile app timed out after 10 seconds and retried. The payment gateway had already accepted the first request; it just answered slowly. Our API saw two valid requests and wrote two ledger entries." },
    { type: "quote", text: "Retries are not the bug. Retries without identity are the bug." },
    { type: "heading", text: "The fix" },
    { type: "paragraph", text: "The client generates an idempotency key once per checkout and sends it with every retry. The server stores the key with the result, in the same transaction as the write." },
    { type: "paragraph", text: "The code change was three lines. Backfilling keys for old clients and agreeing on expiry rules took three weeks." },
  ],
}
```

Questions: publish date; can I name the payment gateway, or keep it generic?
