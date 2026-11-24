---
name: portfolio-talks
description: Add talks, meetups, podcasts, workshops or internal tech talks to the Talks page of Hitesh Gupta's portfolio (content/talks.ts) from slides, an event page, a recording or notes. Use when Hitesh has given a talk and wants it listed.
---

# Portfolio talks

Also apply the **portfolio-voice** skill: never invent facts, no em dashes in titles, calm and specific.

## What the page shows

`/talks` shows a two-column grid of cards from `content/talks.ts`, newest first:

```ts
export const talks = [
  { name: "Retries without identity", kind: "Meetup", description: "Why idempotency keys belong in the API.", meta: "2026 · slides, video" },
] as const;
```

| Field | Rule |
|---|---|
| `name` | The talk title, ≤ 28 characters. Shorten long titles and give the full one in the reply |
| `kind` | `Meetup`, `Conference`, `Team talk`, `Podcast` or `Workshop` (shown in uppercase) |
| `description` | One sentence, ≤ 50 characters, ends with a period: the main takeaway |
| `meta` | `"<year> · <what exists>"`, listing only materials that exist: `slides`, `video`, `audio`, `code` |

## Steps

1. From slides, take the title and the main takeaway (usually the last or summary slide). From an event page, take the event type and date.
2. Internal talks are fine; don't name the company if it isn't public.
3. Keep the list even (2, 4 or 6) so the grid has no gap.
4. Inside the repo, add the entry at the top of `talks` in `content/talks.ts`, run `npx tsc --noEmit`, and check `/talks`.
