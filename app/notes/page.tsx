import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { notes } from "@/content/notes";
import { pageMetadata } from "@/content/seo";

const intro = "Small things I figured out at work, written down so I don't figure them out twice.";

export const metadata = pageMetadata({ path: "/notes", title: "Notes", description: intro });

export default function NotesPage() {
  return (
    <PageStack density="dense">
      <PageIntro eyebrow="Notes" title="Today I learned." accent="short, specific, searchable.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      <Section title="Recent">
        <DetailList items={notes} />
      </Section>
    </PageStack>
  );
}
