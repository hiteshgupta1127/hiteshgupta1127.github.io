import type { Metadata } from "next";

import { profile } from "@/content/profile";

export const siteTitle = `${profile.name} — ${profile.role}`;

/**
 * Shared Open Graph fields. Next.js replaces nested metadata objects rather
 * than merging them, so pages that set their own `openGraph` must spread this.
 */
export const baseOpenGraph = {
  type: "website",
  siteName: profile.name,
  title: siteTitle,
  description: profile.description,
  locale: "en_US",
} satisfies Metadata["openGraph"];
