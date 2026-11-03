type Detail = { label: string; value: string; meta?: string };

export function DetailList({ items }: { items: readonly Detail[] }) {
  return (
    <dl className="flex flex-col">
      {items.map(({ label, value, meta }) => (
        <div
          key={`${label}-${value}`}
          className="flex flex-col gap-1 border-b border-line py-3.5 sm:flex-row sm:items-baseline sm:gap-4"
        >
          <dt className="font-mono text-label text-muted sm:w-35 sm:shrink-0">{label}</dt>
          <dd className="flex-1 text-row text-pretty">{value}</dd>
          {meta && <dd className="text-small text-muted">{meta}</dd>}
        </div>
      ))}
    </dl>
  );
}
