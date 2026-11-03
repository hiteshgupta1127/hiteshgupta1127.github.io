import { ButtonLink, ButtonRow } from "@/components/ui/button-link";
import { LinkList } from "@/components/ui/link-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/content/seo";

const intro =
  "Open to backend and AI engineering roles, and the occasional contract. Email is the fastest way to reach me.";

export const metadata = pageMetadata({ path: "/contact", title: "Contact", description: intro });

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.links.github.replace("https://", ""), href: profile.links.github },
  { label: "LinkedIn", value: profile.links.linkedin.replace("https://www.", ""), href: profile.links.linkedin },
  { label: "Résumé", value: "Experience, skills and education", href: "/resume" },
];

export default function ContactPage() {
  return (
    <PageStack>
      <PageIntro eyebrow="Contact" title="Say hello." accent="I usually reply within a day.">
        <p className="max-w-lead text-body text-pretty text-muted">{intro}</p>
      </PageIntro>
      <Section title="Elsewhere">
        <LinkList items={channels} />
        <ButtonRow>
          <ButtonLink variant="solid" href={`mailto:${profile.email}`}>
            Email me
          </ButtonLink>
          <ButtonLink href="/resume">View résumé</ButtonLink>
        </ButtonRow>
      </Section>
    </PageStack>
  );
}
