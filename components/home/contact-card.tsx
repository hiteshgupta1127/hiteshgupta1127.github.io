import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/content/profile";

export function ContactCard() {
  return (
    <section
      aria-labelledby="contact-card-title"
      className="flex flex-col gap-3.5 rounded-feature border border-line bg-glow p-6 sm:p-10"
    >
      <h2 id="contact-card-title" className="text-callout font-light">
        Let&apos;s build something reliable.
      </h2>
      <p className="max-w-lead text-secondary text-pretty text-muted">
        Open to backend and AI engineering roles. Email is the fastest way to reach me.
      </p>
      <div className="pt-2">
        <ButtonLink variant="solid" href={`mailto:${profile.email}`}>
          Email me
        </ButtonLink>
      </div>
    </section>
  );
}
