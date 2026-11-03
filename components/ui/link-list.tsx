import { AppLink } from "@/components/ui/app-link";

type LinkItem = { label: string; value: string; href: string };

export function LinkList({ items }: { items: readonly LinkItem[] }) {
  return (
    <ul className="flex flex-col border-t border-line">
      {items.map(({ label, value, href }) => (
        <li key={label}>
          <AppLink href={href} className="group flex items-baseline gap-4 border-b border-line py-4">
            <span className="w-30 shrink-0 text-row underline-offset-4 group-hover:underline">{label}</span>
            <span className="min-w-0 flex-1 truncate text-row text-muted">{value}</span>
            <span aria-hidden="true" className="text-row text-muted">
              ↗
            </span>
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
