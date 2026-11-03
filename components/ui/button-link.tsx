import type { ComponentPropsWithoutRef } from "react";

const base =
  "inline-flex h-11 items-center justify-center rounded-full px-5 text-control font-medium transition-colors sm:h-10";

const variants = {
  solid: "bg-foreground text-canvas hover:bg-foreground/90",
  outline: "border border-line-strong text-foreground hover:bg-subtle",
} as const;

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: keyof typeof variants;
  external?: boolean;
};

export function ButtonLink({
  variant = "outline",
  external = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      <span className="text-trim-cap">{children}</span>
    </a>
  );
}
