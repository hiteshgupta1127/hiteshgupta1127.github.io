import { LinkList } from "@/components/ui/link-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { moreNav } from "@/content/navigation";
import { pageMetadata } from "@/content/seo";

const intro = "Career details, side work and the things I read and use.";

export const metadata = pageMetadata({ path: "/more", title: "More", description: intro });

export default function MorePage() {
  return (
    <PageStack density="dense">
      <PageIntro eyebrow="More" title="Everything else." accent="the pages behind the main ones.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      {moreNav.map(({ title, items }) => (
        <Section key={title} title={title}>
          <LinkList items={items.map(({ href, label, description }) => ({ href, label, value: description }))} />
        </Section>
      ))}
    </PageStack>
  );
}
