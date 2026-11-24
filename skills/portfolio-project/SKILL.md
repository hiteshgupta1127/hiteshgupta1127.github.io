---
name: portfolio-project
description: Turn a software project (a code repository, README, design doc, notes, or a rough description) into a case study for the Projects page of Hitesh Gupta's portfolio. Produces one `Project` entry for content/projects.ts (card, detail page, architecture diagram, results) or a one-line archive entry for small projects. Use whenever Hitesh shares a project and wants it on the site.
---

# Portfolio project case study

Also apply the **portfolio-voice** skill: never invent facts, no em dashes in titles or taglines, calm and specific.

## What the page shows

A project appears in three places, all fed by one `Project` object in `content/projects.ts`:

1. **Card** on Home and `/projects`: name, year, summary, `stack` joined with " / ", and `highlight`.
2. **Detail page** `/projects/<slug>`: tagline under the title, Overview rows, an optional architecture diagram, Problem, Approach (with an optional code snippet), and three Results metrics.
3. **Home**: the first three projects in the array are "Selected projects". Order the array best first.

Small or old projects that don't merit a case study go in `archive` instead: `{ year, name, description }`, where the description is a few words such as `"Spring Boot outbox"`.

## Step 1: gather the facts

From a **repository**, read in this order and take notes as you go:

- `README` and any `docs/`: purpose, users, problem, results.
- Dependency files (`pom.xml`, `build.gradle`, `package.json`, `pyproject.toml`, `requirements.txt`, `go.mod`): the real stack.
- Infra (`docker-compose.yml`, Terraform, CDK, Helm, `serverless.yml`, CI workflows): services and how requests flow, for the diagram.
- The main request path in the code (controller → service → store): the snippet that best shows the key idea.
- Benchmarks, load tests, dashboards, `CHANGELOG`: numbers for Results.
- `git log --reverse` (first and last commit dates) and author counts: timeline and whether Hitesh built it alone.

From **notes or a description**, pull out the same facts and list what's missing.

You need, at minimum: name, year, what it does, the problem it solved, how, and Hitesh's role. If the role or the problem is unclear, ask before writing.

## Step 2: fill the fields

| Field | Rule | Example |
|---|---|---|
| `slug` | kebab-case of the name, unique in the file | `"atlas-rag"` |
| `name` | Product or repo name as people say it | `"Atlas RAG"` |
| `year` | Number. Year it shipped, or the latest active year | `2026` |
| `tagline` | Lowercase start, ends with a period, ≤ 45 characters, no em dash. Shown in serif italic under the title | `"grounded answers over internal docs."` |
| `summary` | One sentence, ≤ 100 characters, says what it is and the key technique. Shown on the card | `"Token-bucket rate limiter shared across three AWS regions."` |
| `stack` | Exactly 3 items, the most defining technologies, most important first | `["Java", "Redis", "AWS"]` |
| `highlight` | The single best result, ≤ 16 characters, fits on one line | `"p99 38ms"`, `"−71% 429s"` |
| `overview` | Exactly 4 rows, in this order: `Role`, `Stack` (full list, comma-separated), `Timeline` (`"Jan — Jun 2026"` or `"2025 — ongoing"`), `Impact` (one plain-language line) | see the existing entries |
| `problem` | 1–3 sentences, ≤ 300 characters. The concrete pain before the project, with a number if one exists. No solution here | `"Per-region limits let heavy clients burst across regions while well-behaved clients were throttled."` |
| `approach` | 2–3 sentences, ≤ 350 characters. The key idea and why it works. Name the technique, not every library | |
| `code` | Optional. 3–8 lines, ≤ 72 characters per line, copied from the real code (trim, don't rewrite). Must show the key idea from `approach`. Omit if nothing in the source fits | |
| `architecture` | Optional. Include it when the project has 3 or more components a request passes through | see below |
| `results` | Exactly 3 metrics. `value` ≤ 10 characters (`"2.4k tx/s"`, `"38ms"`, `"0"`), `label` ≤ 24 characters, sentence case (`"p99 latency"`, `"Duplicates in 9 months"`) | |

### Architecture diagram

```ts
architecture: {
  caption: "Write path with idempotency keys and a transactional outbox", // ≤ 70 chars, no period
  steps: [
    { name: "Client", detail: "HTTPS" },
    { name: "API Gateway", detail: "AWS" },
    { name: "Ledger service", detail: "Spring Boot" },
    { name: "Kafka", detail: "outbox" },
    [ // a group: nodes that all follow the previous step
      { name: "Postgres", detail: "ledger + keys" },
      { name: "Redis", detail: "key cache" },
    ],
  ],
},
```

- 3–6 steps, left to right in the order a request flows.
- `name` ≤ 16 characters, `detail` ≤ 14 characters (the technology or the role of the node).
- Use a group only for parallel targets of the same step, at most 3 nodes in a group, usually as the last step.
- Only include components that exist in the source.

### Results when there are no numbers

Don't invent metrics. Use honest counts that are true and checkable: number of services, regions, tests, users, documents, PRs, weeks to ship. If you still can't find three, put `"TODO"` values and ask.

## Step 3: write it into the site

- Inside the portfolio repo: add the object to the `projects` array in `content/projects.ts` at the position Hitesh wants (ask whether it should be featured, which means being in the first three). For a small project, add to `archive` instead.
- Run `npx tsc --noEmit`, then open `/projects` and `/projects/<slug>` with `npm run dev` and check that the card meta fits on one line and the diagram reads left to right.
- Outside the repo: return the object as a TypeScript snippet typed `Project`.

## Example

Source: *"Built a token bucket limiter in Java with Redis replicated across us-east-1, eu-west-1 and ap-south-1 at my last job, Jul to Oct 2025. Before, limits were per region so big clients spread load across regions. 429s dropped 71%, checks take 9ms at p99."*

```ts
{
  slug: "relay",
  name: "Relay",
  year: 2025,
  tagline: "a multi-region rate limiter.",
  summary: "Token-bucket rate limiter shared across three AWS regions.",
  stack: ["Java", "Redis", "AWS"],
  highlight: "−71% 429s",
  overview: [
    { label: "Role", value: "TODO: your role" },
    { label: "Stack", value: "Java, Redis, AWS" },
    { label: "Timeline", value: "Jul — Oct 2025" },
    { label: "Impact", value: "71% fewer rejected requests" },
  ],
  problem: "Per-region limits let heavy clients burst across regions while well-behaved clients were throttled.",
  approach: "A shared token bucket with regional Redis replicas and a small local budget, so checks stay fast and limits stay global.",
  results: [
    { value: "3", label: "Regions" },
    { value: "−71%", label: "429 responses" },
    { value: "9ms", label: "p99 check" },
  ],
}
```

Questions: your role on Relay; is "Relay" the name to use publicly?
