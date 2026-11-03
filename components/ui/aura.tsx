/** Full-width gradient wash behind the top of a page. Use at most once per page. */
export function Aura() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-aura-mobile bg-aura sm:h-aura"
    />
  );
}
