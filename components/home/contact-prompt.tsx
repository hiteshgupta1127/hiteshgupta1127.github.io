import { ButtonLink, ButtonRow } from "@/components/ui/button-link";
import { profile } from "@/content/profile";

export function ContactPrompt() {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-lead text-body text-pretty text-muted">
        Open to backend and AI engineering roles. Email is the fastest way to reach me.
      </p>
      <ButtonRow>
        <ButtonLink variant="solid" href={`mailto:${profile.email}`}>
          Email me
        </ButtonLink>
        <ButtonLink href="/resume">View résumé</ButtonLink>
      </ButtonRow>
    </div>
  );
}
