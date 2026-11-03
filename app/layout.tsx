import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { palette } from "@/content/brand";
import { profile } from "@/content/profile";
import { baseOpenGraph, shareImage, siteTitle } from "@/content/seo";

import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: siteTitle, template: `%s · ${profile.name}` },
  description: profile.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  openGraph: baseOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.description,
    images: [shareImage],
  },
  icons: { icon: { url: "/icon.svg", type: "image/svg+xml" }, apple: "/apple-touch-icon.png" },
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
    <html lang="en" className={fontVariables} data-scroll-behavior="smooth">
      <body>
        <div className="mx-auto flex min-h-dvh w-full max-w-content flex-col px-6">
          <main className="flex-1 pt-16 sm:pt-24">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
