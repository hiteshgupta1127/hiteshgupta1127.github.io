type Metric = { value: string; label: string };

export function MetricList({ items }: { items: readonly Metric[] }) {
  return (
    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map(({ value, label }) => (
        <div key={label} className="flex flex-col-reverse gap-1.5">
          <dt className="font-mono text-label text-muted uppercase">{label}</dt>
          <dd className="text-metric font-light">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
