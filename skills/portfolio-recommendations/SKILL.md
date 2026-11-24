---
name: portfolio-recommendations
description: Turn LinkedIn recommendations, emails or messages from colleagues into short quotes for the Recommendations page of Hitesh Gupta's portfolio (content/recommendations.ts). Use when Hitesh shares feedback or recommendations to publish.
---

# Portfolio recommendations

Also apply the **portfolio-voice** skill. Quotes are other people's words, so the facts rules are stricter here.

## What the page shows

`/recommendations` shows each quote as a serif pull quote with a caption, from `content/recommendations.ts`:

```ts
export const recommendations = [
  { quote: "...", name: "Priya Sharma", role: "Engineering manager, Company A" },
] as const;
```

| Field | Rule |
|---|---|
| `quote` | 1–2 sentences, ≤ 160 characters, the most specific part of the recommendation. Exact words only; cut with "…" if needed, never paraphrase or improve |
| `name` | The recommender's name as they use it publicly |
| `role` | Their role and company **at the time they worked with Hitesh**, `"Staff engineer, Company A"` |

## Rules

- Only publish recommendations the person gave publicly (LinkedIn) or agreed to have published. If the source is a private message or email, ask Hitesh to confirm they have permission.
- Keep pronouns exactly as the recommender wrote them.
- Prefer quotes that mention a concrete behaviour or result over generic praise ("great team player").
- 3–6 quotes, the strongest first, ideally from different relationships (manager, peer, someone Hitesh mentored).

## Steps

1. Pick the strongest 1–2 sentences from each recommendation and trim them.
2. Inside the repo, replace the array in `content/recommendations.ts`, run `npx tsc --noEmit`, and check `/recommendations`.
3. In the reply, show each trimmed quote next to the full original so Hitesh can check nothing changed meaning.
