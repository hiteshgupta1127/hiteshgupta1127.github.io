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
] as const satisfies readonly NavItem[];
