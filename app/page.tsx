import { ContactCard } from "@/components/home/contact-card";
import { Intro } from "@/components/home/intro";
import { ProjectList } from "@/components/projects/project-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Aura } from "@/components/ui/aura";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { PostList } from "@/components/writing/post-list";
import { posts } from "@/content/posts";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata({ path: "/" });

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
    <PageStack>
      <JsonLd data={person} />
      <Aura />
      <Intro />
      <Section title="Selected projects" action={{ href: "/projects", label: "View all" }}>
        <ProjectList projects={featuredProjects} />
      </Section>
      <Section title="Writing" action={{ href: "/writing", label: "View all" }}>
        <PostList posts={posts.slice(0, 4)} />
      </Section>
      <ContactCard />
    </PageStack>
  );
}
