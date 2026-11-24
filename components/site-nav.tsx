"use client";

import { usePathname } from "next/navigation";

import { AppLink } from "@/components/ui/app-link";
import { morePages, primaryNav } from "@/content/navigation";

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
        <div className="absolute top-full right-0 z-10 flex w-72 flex-col gap-2 rounded-card border border-line bg-surface p-2">
          <ul className="flex flex-col">
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
          <div className="flex flex-col gap-1 border-t border-line pt-3">
            <p className="px-3 font-mono text-label text-muted uppercase">More</p>
            <ul aria-label="More pages" className="grid grid-cols-2">
              {morePages.map(({ href, label }) => (
                <li key={href}>
                  <AppLink
                    href={href}
                    aria-current={isActive(pathname, href) ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded-row px-3 text-small hover:bg-subtle ${isActive(pathname, href) ? "text-foreground" : "text-muted"}`}
                  >
                    {label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </nav>
  );
}

export function SiteNav() {
  return <SiteNavLinks pathname={usePathname()} />;
}
