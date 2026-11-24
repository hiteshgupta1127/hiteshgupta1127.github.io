import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Quote } from "@/components/ui/quote";
import { Section } from "@/components/ui/section";
import { recommendations } from "@/content/recommendations";
import { pageMetadata } from "@/content/seo";

const intro = "A few notes from managers and teammates. Full versions are on LinkedIn.";

export const metadata = pageMetadata({ path: "/recommendations", title: "Recommendations", description: intro });

export default function RecommendationsPage() {
  return (
    <PageStack>
      <PageIntro eyebrow="Recommendations" title="In their words." accent="people I've built things with.">
        <p className="max-w-lead text-body text-pretty">{intro}</p>
      </PageIntro>
      <Section title="From LinkedIn">
        <ul className="flex max-w-reading flex-col gap-8">
          {recommendations.map(({ quote, name, role }) => (
            <li key={quote}>
              <figure className="flex flex-col gap-3">
                <Quote>{quote}</Quote>
                <figcaption className="pl-5 text-small text-muted">
                  {name} · {role}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>
    </PageStack>
  );
}
