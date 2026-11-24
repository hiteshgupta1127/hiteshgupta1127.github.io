import { CardGrid } from "@/components/ui/card-grid";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/content/seo";
import { talks } from "@/content/talks";

const intro = "Slides and recordings from talks about backend systems and LLM products.";

export const metadata = pageMetadata({ path: "/talks", title: "Talks", description: intro });

export default function TalksPage() {
  return (
    <PageStack>
      <PageIntro eyebrow="Talks" title="Said out loud." accent="meetups, team talks and the odd podcast.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      <Section title="Talks">
        <CardGrid items={talks} />
      </Section>
    </PageStack>
  );
}
