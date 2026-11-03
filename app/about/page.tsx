import { Portrait } from "@/components/about/portrait";
import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Quote } from "@/components/ui/quote";
import { Section } from "@/components/ui/section";
import { about } from "@/content/about";
import { jobs, skills } from "@/content/experience";
import { now } from "@/content/now";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata({ path: "/about", title: "About", description: about.intro });

const experience = jobs.map(({ period, role, company }) => ({ label: period, value: role, meta: company }));

const currently = [
  { label: "Building", value: now.building.description },
  { label: "Reading", value: now.reading[0].value },
  { label: "Learning", value: `${now.learning[0].label}, slowly` },
];

export default function AboutPage() {
  return (
    <PageStack density="dense">
      <div className="flex flex-col gap-7">
        <Portrait />
        <PageIntro eyebrow="About" title={about.headline}>
          <p className="max-w-reading text-body text-pretty sm:text-body-lg">{about.intro}</p>
          <div className="max-w-reading">
            <Quote>{about.quote}</Quote>
          </div>
        </PageIntro>
      </div>
      <Section title="Experience" action={{ href: "/resume", label: "Résumé" }}>
        <DetailList items={experience} />
      </Section>
      <Section title="Stack">
        <DetailList items={skills} />
      </Section>
      <Section title="Now" action={{ href: "/now", label: "More" }}>
        <DetailList items={currently} />
      </Section>
    </PageStack>
  );
}
