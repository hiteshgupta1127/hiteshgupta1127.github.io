import { AppLink } from "@/components/ui/app-link";
import { secondaryNav } from "@/content/navigation";
import { profile } from "@/content/profile";

const elsewhere = [
  { href: profile.links.github, label: "GitHub" },
  { href: profile.links.linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, label: "Email" },
];

function FooterLinks({ label, links }: { label: string; links: readonly { href: string; label: string }[] }) {
  return (
    <ul aria-label={label} className="flex gap-5">
      {links.map(({ href, label: text }) => (
        <li key={href}>
          <AppLink href={href} className="transition-colors hover:text-foreground">
            {text}
          </AppLink>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-section-mobile flex flex-col gap-4 border-t border-line pt-6 pb-10 text-caption text-muted sm:mt-section sm:flex-row sm:items-center sm:justify-between sm:pb-16">
      <p>
        &copy; {profile.copyrightYear} {profile.name}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
        <FooterLinks label="More pages" links={secondaryNav} />
        <FooterLinks label="Elsewhere" links={elsewhere} />
      </div>
    </footer>
  );
}
