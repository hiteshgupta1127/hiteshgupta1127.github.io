import type { Metadata } from "next";

import { profile } from "@/content/profile";

export const siteTitle = `${profile.name} — ${profile.role}`;

export const shareImage = { url: "/og.png", width: 1200, height: 630, alt: siteTitle, type: "image/png" };

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
  images: [shareImage],
} satisfies Metadata["openGraph"];
