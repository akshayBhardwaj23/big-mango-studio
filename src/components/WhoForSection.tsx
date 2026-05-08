const audiences = [
  {
    title: "SaaS founders",
    body: "You need a credible story, pricing, and proof — fast — without a bloated agency process.",
  },
  {
    title: "Early-stage startups",
    body: "You’re validating motion: landing pages, MVP sites, and iterations that don’t break your runway.",
  },
  {
    title: "AI products",
    body: "You need clarity for skeptical buyers: what it does, why it’s safe, and what to do next.",
  },
];

export function WhoForSection() {
  return (
    <section id="who-for" className="scroll-mt-24 bg-[var(--surface-muted)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Who this is for
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          If you ship software, you’re probably in the right place.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-400">
          Not a fit for everyone — best for teams who want revenue-minded pages
          and a builder who can reason about product and implementation.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {audiences.map((a, i) => (
            <article
              key={a.title}
              className="rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-7 sm:p-8"
            >
              <span className="font-mono text-xs font-medium tabular-nums text-[var(--accent)]">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {a.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
