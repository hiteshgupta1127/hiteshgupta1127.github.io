import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/content/profile";

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="flex flex-col gap-7">
      <hgroup className="flex flex-col gap-3">
        <h1 id="intro-title" className="text-display-sm font-light sm:text-display">
          {profile.name}
        </h1>
        <p className="font-serif text-accent-sm text-muted italic sm:text-accent">
          {profile.role}.
        </p>
      </hgroup>

      <p className="max-w-lead text-body text-pretty sm:text-body-lg">{profile.bio}</p>

      <div className="flex flex-wrap gap-3 pt-3">
        <ButtonLink variant="solid" href={`mailto:${profile.email}`}>
          Email me
        </ButtonLink>
        <ButtonLink href={profile.links.github} external>
          GitHub
        </ButtonLink>
        <ButtonLink href={profile.links.linkedin} external>
          LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}
