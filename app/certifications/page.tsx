import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { certifications, courses } from "@/content/certifications";
import { pageMetadata } from "@/content/seo";

const intro = "Certifications and courses behind the day-to-day work.";

export const metadata = pageMetadata({ path: "/certifications", title: "Certifications", description: intro });

export default function CertificationsPage() {
  return (
    <PageStack density="dense">
      <PageIntro eyebrow="Certifications" title="Proof, not trophies." accent="the paper trail behind the work.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      <Section title="Certifications">
        <DetailList items={certifications} />
      </Section>
      <Section title="Courses">
        <DetailList items={courses} />
      </Section>
    </PageStack>
  );
}
