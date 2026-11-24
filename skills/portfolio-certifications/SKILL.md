---
name: portfolio-certifications
description: Fill the Certifications page of Hitesh Gupta's portfolio (content/certifications.ts) from certificates, a Credly or LinkedIn list, course receipts or a résumé. Use when Hitesh earns a certification or finishes a course worth listing.
---

# Portfolio certifications

Also apply the **portfolio-voice** skill: never invent facts, calm and specific.

## What the page shows

`/certifications` reads `content/certifications.ts`:

```ts
export const certifications = [
  { label: "2026", value: "AWS Certified Solutions Architect, Associate", meta: "Amazon Web Services" },
] as const;

export const courses = [
  { label: "2025", value: "Designing Data-Intensive Applications (study group)" },
] as const;
```

- **`certifications`**: proctored or issued credentials. `label` is the year earned, `value` is the official name (replace en or em dashes in the official name with a comma), `meta` is the issuer.
- **`courses`**: courses, study groups and programmes without an exam. `label` is the year finished, `value` is the course name, optional `meta` is the provider.
- Both lists are newest first. Leave out expired certifications unless Hitesh asks to keep them, and say which you left out.

## Steps

1. Read each certificate for its exact name, issuer and date. Ask for any date you can't see.
2. Inside the repo, replace the arrays in `content/certifications.ts`, run `npx tsc --noEmit`, and check `/certifications`.
3. If a certification is also listed under Education on the résumé, mention it so **portfolio-resume** can keep both in sync.
