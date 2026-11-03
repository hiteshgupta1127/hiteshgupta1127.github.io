import type { MetadataRoute } from "next";

import { primaryNav, secondaryNav } from "@/content/navigation";
import { posts } from "@/content/posts";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...[...primaryNav, ...secondaryNav].map(({ href }) => href)];

  return [
    ...pages.map((path) => ({ url: new URL(path, profile.url).href, changeFrequency: "monthly" as const })),
    ...projects.map(({ slug }) => ({ url: `${profile.url}/projects/${slug}` })),
    ...posts.map(({ slug, date }) => ({ url: `${profile.url}/writing/${slug}`, lastModified: date })),
  ];
}
