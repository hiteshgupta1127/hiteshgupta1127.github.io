import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export type AppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string };

/** Client-side navigation for internal paths; new tab for external sites; plain link for mailto. */
export function AppLink({ href, ...props }: AppLinkProps) {
  if (href.startsWith("/")) {
    return <Link href={href} {...props} />;
  }

  const opensNewTab = /^https?:\/\//.test(href);
  return <a href={href} {...(opensNewTab && { target: "_blank", rel: "noopener noreferrer" })} {...props} />;
}
