import type { Metadata } from "next";

import { Intro } from "@/components/home/intro";
import { JsonLd } from "@/components/seo/json-ld";
import { profile } from "@/content/profile";
import { baseOpenGraph } from "@/content/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...baseOpenGraph, url: "/" },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.description,
  url: profile.url,
  email: `mailto:${profile.email}`,
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: profile.skills,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={person} />
      <Intro />
    </>
  );
}
