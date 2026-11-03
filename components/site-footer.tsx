import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line pt-6 pb-10 text-caption text-muted sm:pb-16">
      <p>
        &copy; {profile.copyrightYear} {profile.name}
      </p>
    </footer>
  );
}
