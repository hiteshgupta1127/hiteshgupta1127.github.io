import { notFound } from "next/navigation";

import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { CodeBlock } from "@/components/ui/code-block";
import { DetailList } from "@/components/ui/detail-list";
import { MetricList } from "@/components/ui/metric-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import { getNextProject, getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/content/seo";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({ path: `/projects/${slug}`, title: project.name, description: project.summary });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <PageStack>
      <PageIntro
        back={{ href: "/projects", label: "Projects" }}
        eyebrow={`Project · ${project.year}`}
        title={project.name}
        accent={project.tagline}
      />
      <Section title="Overview">
        <DetailList items={project.overview} />
      </Section>
      {project.architecture && (
        <Section title="Architecture">
          <ArchitectureDiagram architecture={project.architecture} />
        </Section>
      )}
      <Section title="Problem">
        <p className="max-w-reading text-body text-pretty sm:text-body-lg">{project.problem}</p>
      </Section>
      <Section title="Approach">
        <p className="max-w-reading text-body text-pretty sm:text-body-lg">{project.approach}</p>
        {project.code && <CodeBlock code={project.code} />}
      </Section>
      <Section title="Results">
        <MetricList items={project.results} />
      </Section>
      <nav aria-label="Next project" className="flex items-baseline justify-between gap-4 border-t border-line pt-5">
        <span className="font-mono text-label text-muted uppercase">Next project</span>
        <span className="text-row">
          <TextLink href={`/projects/${next.slug}`} tone="default">
            {next.name}
          </TextLink>
        </span>
      </nav>
    </PageStack>
  );
}
