import { AppLink } from "@/components/ui/app-link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  direction?: "forward" | "back";
  tone?: "muted" | "default";
};

export function TextLink({ href, children, direction = "forward", tone = "muted" }: TextLinkProps) {
  const color = tone === "muted" ? "text-muted hover:text-foreground" : "text-foreground";

  return (
    <AppLink
      href={href}
      className={`inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:underline ${color}`}
    >
      {direction === "back" && <span aria-hidden="true">←</span>}
      {children}
      {direction === "forward" && <span aria-hidden="true">→</span>}
    </AppLink>
  );
}
