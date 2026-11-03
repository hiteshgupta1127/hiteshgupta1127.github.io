const gaps = {
  default: "gap-section-mobile sm:gap-section",
  dense: "gap-section-mobile sm:gap-section-dense",
} as const;

type PageStackProps = { density?: keyof typeof gaps; children: React.ReactNode };

/** Vertical rhythm between a page's intro and its sections. */
export function PageStack({ density = "default", children }: PageStackProps) {
  return <div className={`flex flex-col ${gaps[density]}`}>{children}</div>;
}
