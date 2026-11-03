import { AppLink, type AppLinkProps } from "@/components/ui/app-link";

const base =
  "inline-flex h-11 items-center justify-center rounded-full px-5 text-control font-medium transition-colors sm:h-10";

const variants = {
  solid: "bg-foreground text-canvas hover:bg-foreground/90",
  outline: "border border-line-strong text-foreground hover:bg-subtle",
} as const;

type ButtonLinkProps = AppLinkProps & { variant?: keyof typeof variants };

export function ButtonLink({ variant = "outline", className, children, ...props }: ButtonLinkProps) {
  return (
    <AppLink className={[base, variants[variant], className].filter(Boolean).join(" ")} {...props}>
      <span className="text-trim-cap">{children}</span>
    </AppLink>
  );
}

export function ButtonRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-3">{children}</div>;
}
