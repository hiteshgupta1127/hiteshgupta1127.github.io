import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { reading } from "@/content/reading";
import { pageMetadata } from "@/content/seo";

const intro = "Engineering books and papers I go back to, with one line on why.";

export const metadata = pageMetadata({ path: "/reading", title: "Reading", description: intro });

export default function ReadingPage() {
  return (
    <PageStack density="dense">
      <PageIntro eyebrow="Reading" title="Books I go back to." accent="and a few still on the shelf.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      {reading.map(({ title, items }) => (
        <Section key={title} title={title}>
          <DetailList items={items} />
        </Section>
      ))}
    </PageStack>
  );
}
