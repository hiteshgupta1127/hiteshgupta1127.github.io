import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageIntro eyebrow="Error 404" title="Page not found." accent="it may have moved, or never existed.">
      <div className="pt-4">
        <ButtonLink href="/">← Back home</ButtonLink>
      </div>
    </PageIntro>
  );
}
