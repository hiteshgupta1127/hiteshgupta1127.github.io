import type { ArchitectureNode, Project } from "@/content/projects";

type Step = NonNullable<Project["architecture"]>["steps"][number];

function isGroup(step: Step): step is readonly ArchitectureNode[] {
  return Array.isArray(step);
}

function Node({ name, detail }: ArchitectureNode) {
  return (
    <div className="flex flex-col gap-0.5 rounded-control border border-line bg-surface px-3 py-2 text-center whitespace-nowrap">
      <span className="text-small">{name}</span>
      <span className="font-mono text-label text-muted">{detail}</span>
    </div>
  );
}

/** Left-to-right flow on wider screens, top-to-bottom on phones. */
export function ArchitectureDiagram({ architecture }: { architecture: NonNullable<Project["architecture"]> }) {
  return (
    <figure className="flex flex-col items-center gap-4 rounded-card border border-line bg-surface p-6">
      <ol className="flex flex-col items-center gap-2 sm:flex-row">
        {architecture.steps.map((step, index) => (
          <li key={index} className="flex flex-col items-center gap-2 sm:flex-row">
            {index > 0 && (
              <span aria-hidden="true" className="rotate-90 text-muted sm:rotate-0">
                →
              </span>
            )}
            {isGroup(step) ? (
              <div className="flex gap-2 sm:flex-col">
                {step.map((node) => (
                  <Node key={node.name} {...node} />
                ))}
              </div>
            ) : (
              <Node {...step} />
            )}
          </li>
        ))}
      </ol>
      <figcaption className="text-caption text-muted">{architecture.caption}</figcaption>
    </figure>
  );
}
