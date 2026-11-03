import { ButtonLink, ButtonRow } from "@/components/ui/button-link";
import { DetailList } from "@/components/ui/detail-list";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { education, jobs, resumeUpdated, skills, summary } from "@/content/experience";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata({ path: "/resume", title: "Résumé", description: summary });

export default function ResumePage() {
  return (
    <PageStack density="dense">
      <PageIntro
        eyebrow={`Résumé · updated ${resumeUpdated}`}
        title={profile.name}
        accent="software engineer, backend & AI."
      >
        <ButtonRow>
          <ButtonLink variant="solid" href={`mailto:${profile.email}`}>
            Email me
          </ButtonLink>
          <ButtonLink href={profile.links.linkedin}>LinkedIn</ButtonLink>
        </ButtonRow>
      </PageIntro>
      <Section title="Summary">
        <p className="max-w-reading text-body text-pretty sm:text-body-lg">{summary}</p>
      </Section>
      <Section title="Experience">
        <ol className="flex flex-col">
          {jobs.map((job) => (
            <li key={`${job.company}-${job.period}`} className="flex flex-col gap-2.5 border-b border-line py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-row">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <span className="font-mono text-label text-muted uppercase">{job.period}</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-secondary text-pretty text-muted">
                    <span aria-hidden="true">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Skills">
        <DetailList items={skills} />
      </Section>
      <Section title="Education">
        <DetailList items={education} />
      </Section>
    </PageStack>
  );
}
