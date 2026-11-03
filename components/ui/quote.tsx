export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l border-line-strong pl-5 font-serif text-quote text-pretty italic">
      {children}
    </blockquote>
  );
}
