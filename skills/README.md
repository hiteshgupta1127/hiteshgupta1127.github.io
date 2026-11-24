# Portfolio skills

Claude skills that turn raw material (a repo, a messy draft, a résumé, notes) into ready-to-publish content for this site. Each skill knows exactly what one page renders: the fields, their length limits, where the data lives in `content/`, and what to ask instead of making up.

| Skill | Give it | It fills | Page |
|---|---|---|---|
| `portfolio-voice` | Any copy | Shared rules every other skill follows | All |
| `portfolio-project` | A repo, README, design doc or description | `content/projects.ts` | Projects, project case study, Home |
| `portfolio-post` | A messy draft, notes, postmortem or transcript | `content/posts.ts` | Writing, article, Home |
| `portfolio-resume` | Résumé, CV or LinkedIn export | `content/experience.ts` | Résumé, About |
| `portfolio-about` | Old bio, LinkedIn About, notes | `content/about.ts`, `content/profile.ts` | About, Home intro, search snippets |
| `portfolio-now` | This month's brain dump | `content/now.ts` | Now, About |
| `portfolio-lab` | An experiment, notebook or prototype | `content/lab.ts` | Lab |
| `portfolio-open-source` | GitHub profile, repos, merged PRs | `content/open-source.ts` | Open source |
| `portfolio-certifications` | Certificates, Credly, course list | `content/certifications.ts` | Certifications |
| `portfolio-notes` | A small "today I learned" | `content/notes.ts` | Notes |
| `portfolio-talks` | Slides, event page, recording | `content/talks.ts` | Talks |
| `portfolio-recommendations` | LinkedIn recommendations, messages | `content/recommendations.ts` | Recommendations |
| `portfolio-reading` | Books and papers | `content/reading.ts` | Reading |
| `portfolio-uses` | Your setup | `content/uses.ts` | Uses |

The content files above live on the branches with the full site (`0001/ui-pages`, `0002/ui-pages-gradient`). `main` only has the single-page home.

## How to use them

**In Claude Code (inside this repo).** Claude Code loads project skills from `.claude/skills/`. Link this folder once:

```bash
mkdir -p .claude && ln -s ../skills .claude/skills
```

Then ask in plain words, for example: "Use the portfolio-project skill on ~/code/ledgerline and add it to the projects page." Claude reads the repo, fills the fields, edits `content/projects.ts`, type-checks, and lists anything it needs from you.

**In the Claude app (claude.ai).** Zip a skill's folder (for example `portfolio-post/`) and upload it under Settings → Capabilities → Skills. Upload `portfolio-voice` too, since every skill relies on it. Then attach your draft or repo files and ask for the post or case study. Claude returns a TypeScript snippet to paste into the content file.

## What every skill does

- Never invents numbers, dates, names, quotes or links. Missing facts become `TODO` placeholders and questions.
- Follows the site's style: calm and specific, sentence case, no em dashes in titles.
- Keeps the exact shape of the content type, so the site type-checks.
- Ends with **Questions** (what it needs from you) and **Choices I made** (what it cut or changed).

## Keeping skills in sync with the code

If you change a content type (for example, add a field to `Project`), update the matching skill's field table in the same commit, so the skill and the page never disagree.
