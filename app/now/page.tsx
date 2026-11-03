import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { now } from "@/content/now";
import { pageMetadata } from "@/content/seo";

const intro = "What has my attention right now, in plain words.";

export const metadata = pageMetadata({ path: "/now", title: "Now", description: intro });

export default function NowPage() {
  const { building } = now;

  return (
    <PageStack density="dense">
      <PageIntro eyebrow={`Now · updated ${now.updated}`} title="What I'm doing now." accent="a page I keep honest, roughly monthly.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      <Section title="Building">
        <div className="flex flex-col gap-2 rounded-card border border-line bg-surface p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-title">{building.name}</h3>
            <span className="font-mono text-label text-muted uppercase">{building.status}</span>
          </div>
          <p className="text-secondary text-pretty text-muted">{building.description}</p>
          <p className="font-mono text-label text-muted">{building.meta}</p>
        </div>
      </Section>
      <Section title="Learning">
        <DetailList items={now.learning} />
      </Section>
      <Section title="Reading">
        <DetailList items={now.reading} />
      </Section>
      <Section title="Life">
        <p className="max-w-reading text-body text-pretty text-muted">{now.life}</p>
      </Section>
    </PageStack>
  );
}
