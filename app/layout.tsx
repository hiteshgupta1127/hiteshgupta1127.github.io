import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { palette } from "@/content/brand";
import { profile } from "@/content/profile";
import { baseOpenGraph, siteTitle } from "@/content/seo";

import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: siteTitle, template: `%s — ${profile.name}` },
  description: profile.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  openGraph: baseOpenGraph,
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: palette.light.canvas },
    { media: "(prefers-color-scheme: dark)", color: palette.dark.canvas },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="relative isolate">
        <div className="px-6 md:px-8">
          <div className="mx-auto flex min-h-dvh max-w-tablet flex-col lg:max-w-content">
            <SiteHeader />
            <main className="flex-1 pt-26 sm:pt-34">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
