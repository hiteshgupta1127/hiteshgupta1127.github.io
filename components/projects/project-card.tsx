import { AppLink } from "@/components/ui/app-link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <AppLink
      href={`/projects/${project.slug}`}
      className="flex flex-col gap-2 rounded-card border border-line bg-surface p-6 transition-colors hover:border-line-strong"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-title">{project.name}</h3>
        <span className="font-mono text-label text-muted">{project.year}</span>
      </div>
      <p className="text-secondary text-pretty text-muted">{project.summary}</p>
      <p className="font-mono text-label text-muted">
        {project.stack.join(" / ")} · <span className="whitespace-nowrap">{project.highlight}</span>
      </p>
    </AppLink>
  );
}

export function ProjectList({ projects }: { projects: readonly Project[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
