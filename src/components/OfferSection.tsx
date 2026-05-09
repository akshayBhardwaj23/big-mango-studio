import { offers } from "@/content/services";

export function OfferSection() {
  return (
    <section
      id="offer"
      className="scroll-mt-24 border-y border-white/[0.06] bg-black py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          What we Offer
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Built for SaaS &amp; AI launches — not generic agency pages.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-400">
          Three ways teams usually start. Pick one; we&apos;ll tighten scope on a
          call and ship toward a single conversion goal.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {offers.map((o, i) => (
            <article
              key={o.title}
              className="rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-7 shadow-xl shadow-black/40 sm:p-8"
            >
              <span className="font-mono text-xs font-medium tabular-nums text-[var(--accent)]">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                {o.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {o.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
