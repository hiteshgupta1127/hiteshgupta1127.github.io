import { CardGrid } from "@/components/ui/card-grid";
import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { contributions, libraries } from "@/content/open-source";
import { pageMetadata } from "@/content/seo";

const intro = "Libraries I maintain and changes I've sent to projects I depend on.";

export const metadata = pageMetadata({ path: "/open-source", title: "Open source", description: intro });

export default function OpenSourcePage() {
  return (
    <PageStack>
      <PageIntro eyebrow="Open source" title="Code in the open." accent="small libraries, honest fixes.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      <Section title="Maintained">
        <CardGrid items={libraries} />
      </Section>
      <Section title="Contributions">
        <DetailList items={contributions} />
      </Section>
    </PageStack>
  );
}
