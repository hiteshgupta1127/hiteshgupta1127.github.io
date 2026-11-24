import { AppLink } from "@/components/ui/app-link";

type LinkItem = { label: string; value: string; href: string };

export function LinkList({ items }: { items: readonly LinkItem[] }) {
  return (
    <ul className="flex flex-col border-t border-line">
      {items.map(({ label, value, href }) => (
        <li key={label}>
          <AppLink href={href} className="group flex items-center gap-4 border-b border-line py-4">
            <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
              <span className="shrink-0 text-row underline-offset-4 group-hover:underline sm:w-40">{label}</span>
              <span className="min-w-0 flex-1 text-row text-muted sm:truncate">{value}</span>
            </span>
            <span aria-hidden="true" className="text-row text-muted">
              {href.startsWith("/") ? "→" : "↗"}
            </span>
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
