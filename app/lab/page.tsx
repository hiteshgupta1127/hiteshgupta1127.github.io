import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { experiments } from "@/content/lab";
import { pageMetadata } from "@/content/seo";

const intro = "Prototypes and notebooks I build to understand something. Not production, not polished.";

export const metadata = pageMetadata({ path: "/lab", title: "Lab", description: intro });

export default function LabPage() {
  return (
    <PageStack>
      <PageIntro eyebrow="Lab" title="Small experiments." accent="half-finished, honest, occasionally useful.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      <Section title="Experiments">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {experiments.map((experiment) => (
            <li key={experiment.name} className="flex flex-col gap-2 rounded-card border border-line bg-surface p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-title">{experiment.name}</h3>
                <span className="font-mono text-label text-muted uppercase">{experiment.kind}</span>
              </div>
              <p className="text-secondary text-pretty text-muted">{experiment.description}</p>
              <p className="font-mono text-label text-muted">{experiment.metric}</p>
            </li>
          ))}
        </ul>
      </Section>
    </PageStack>
  );
}
