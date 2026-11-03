import { Suspense } from "react";

import { SiteNav, SiteNavLinks } from "@/components/site-nav";
import { AppLink } from "@/components/ui/app-link";
import { profile } from "@/content/profile";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-6 pt-6 sm:pt-10">
      <AppLink href="/" className="text-secondary">
        {profile.name}
      </AppLink>
      <Suspense fallback={<SiteNavLinks pathname="" />}>
        <SiteNav />
      </Suspense>
    </header>
  );
}
