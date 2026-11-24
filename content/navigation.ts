export type NavItem = { href: string; label: string };

export const primaryNav = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const satisfies readonly NavItem[];

export const secondaryNav = [
  { href: "/resume", label: "Résumé" },
  { href: "/now", label: "Now" },
  { href: "/lab", label: "Lab" },
  { href: "/more", label: "More" },
] as const satisfies readonly NavItem[];

type MoreItem = NavItem & { description: string };
type MoreGroup = { title: string; items: readonly MoreItem[] };

/** Everything behind the "More" page, grouped as in the design. */
export const moreNav = [
  {
    title: "Career",
    items: [
      { href: "/resume", label: "Résumé", description: "Experience, skills and education" },
      { href: "/certifications", label: "Certifications", description: "AWS, Java and courses" },
      { href: "/recommendations", label: "Recommendations", description: "Notes from managers and teammates" },
    ],
  },
  {
    title: "Work in the open",
    items: [
      { href: "/open-source", label: "Open source", description: "Libraries I maintain and contributions" },
      { href: "/lab", label: "Lab", description: "Small experiments and prototypes" },
      { href: "/talks", label: "Talks", description: "Slides and recordings" },
    ],
  },
  {
    title: "Notes and life",
    items: [
      { href: "/now", label: "Now", description: "What I'm focused on this month" },
      { href: "/notes", label: "Notes", description: "Short things I learned" },
      { href: "/reading", label: "Reading", description: "Books and papers I go back to" },
      { href: "/uses", label: "Uses", description: "My setup and tools" },
    ],
  },
] as const satisfies readonly MoreGroup[];

export const morePages: readonly MoreItem[] = moreNav.flatMap(({ items }): readonly MoreItem[] => items);
