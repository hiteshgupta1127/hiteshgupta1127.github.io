"use client";

import { usePathname } from "next/navigation";

import { AppLink } from "@/components/ui/app-link";
import { primaryNav } from "@/content/navigation";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Pure markup; `pathname` is empty while the real path is unknown (prerender fallback). */
export function SiteNavLinks({ pathname }: { pathname: string }) {
  const links = primaryNav.map((item) => ({ ...item, active: isActive(pathname, item.href) }));

  return (
    <nav aria-label="Main">
      <ul className="hidden items-center gap-7 sm:flex">
        {links.map(({ href, label, active }) => (
          <li key={href}>
            <AppLink
              href={href}
              aria-current={active ? "page" : undefined}
              className={`text-small transition-colors hover:text-foreground ${active ? "text-foreground" : "text-muted"}`}
            >
              {label}
            </AppLink>
          </li>
        ))}
      </ul>

      {/* Keyed by path so the menu closes after navigating. */}
      <details key={pathname} className="relative sm:hidden">
        <summary className="flex min-h-11 cursor-pointer items-center text-small text-muted">Menu</summary>
        <ul className="absolute top-full right-0 z-10 flex min-w-44 flex-col rounded-card border border-line bg-surface p-2">
          {links.map(({ href, label, active }) => (
            <li key={href}>
              <AppLink
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-row px-3 text-row hover:bg-subtle ${active ? "text-foreground" : "text-muted"}`}
              >
                {label}
              </AppLink>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}

export function SiteNav() {
  return <SiteNavLinks pathname={usePathname()} />;
}
