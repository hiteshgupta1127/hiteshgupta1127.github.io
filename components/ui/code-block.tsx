export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-control border border-line bg-subtle p-5 font-mono text-code">
      <code>{code}</code>
    </pre>
  );
}
