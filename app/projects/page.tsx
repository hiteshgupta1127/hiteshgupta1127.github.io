import { ProjectList } from "@/components/projects/project-card";
import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { archive, projects } from "@/content/projects";
import { pageMetadata } from "@/content/seo";

const intro =
  "Production systems from work and small tools I maintain. Numbers are from production unless noted.";

export const metadata = pageMetadata({ path: "/projects", title: "Projects", description: intro });

const archiveItems = archive.map(({ year, name, description }) => ({
  label: String(year),
  value: name,
  meta: description,
}));

export default function ProjectsPage() {
  return (
    <PageStack>
      <PageIntro eyebrow="Projects" title="Things I've built." accent="and still keep running.">
        <p className="max-w-lead text-body text-pretty text-muted">{intro}</p>
      </PageIntro>
      <Section title="Featured">
        <ProjectList projects={projects} />
      </Section>
      <Section title="Archive">
        <DetailList items={archiveItems} />
      </Section>
    </PageStack>
  );
}
