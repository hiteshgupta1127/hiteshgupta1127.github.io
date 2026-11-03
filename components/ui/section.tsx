import { TextLink } from "@/components/ui/text-link";

type SectionProps = {
  title: string;
  action?: { href: string; label: string };
  children: React.ReactNode;
};

export function Section({ title, action, children }: SectionProps) {
  const headingId = `section-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-6 border-t border-line pt-5">
      <div className="flex items-center justify-between gap-4">
        <h2 id={headingId} className="font-mono text-label text-muted uppercase">
          {title}
        </h2>
        {action && (
          <span className="text-caption">
            <TextLink href={action.href}>{action.label}</TextLink>
          </span>
        )}
      </div>
      {children}
    </section>
  );
}
