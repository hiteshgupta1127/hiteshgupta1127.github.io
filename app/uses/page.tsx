import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/content/seo";
import { uses } from "@/content/uses";

const intro = "Hardware, software and services I use every day. Updated when something changes.";

export const metadata = pageMetadata({ path: "/uses", title: "Uses", description: intro });

export default function UsesPage() {
  return (
    <PageStack density="dense">
      <PageIntro eyebrow="Uses" title="What I work with." accent="the boring tools that never break.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      {uses.map(({ title, items }) => (
        <Section key={title} title={title}>
          <DetailList items={items} />
        </Section>
      ))}
    </PageStack>
  );
}
