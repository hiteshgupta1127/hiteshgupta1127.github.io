type Card = { name: string; kind: string; description: string; meta: string };

export function CardGrid({ items }: { items: readonly Card[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map(({ name, kind, description, meta }) => (
        <li key={name} className="flex flex-col gap-2 rounded-card border border-line bg-surface p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-title">{name}</h3>
            <span className="font-mono text-label text-muted uppercase">{kind}</span>
          </div>
          <p className="text-secondary text-pretty text-muted">{description}</p>
          <p className="font-mono text-label text-muted">{meta}</p>
        </li>
      ))}
    </ul>
  );
}
