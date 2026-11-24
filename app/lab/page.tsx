import { CardGrid } from "@/components/ui/card-grid";
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
        <CardGrid items={experiments} />
      </Section>
    </PageStack>
  );
}
