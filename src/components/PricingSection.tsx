import { ButtonLink } from "@/components/ButtonLink";
import { pricingTiers } from "@/content/pricing";
import { mailtoLink } from "@/content/site";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-[var(--surface-muted)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Pricing
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Clear packages. No mystery invoices.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-400">
          Ranges beat silence. Most projects fall into one of these. Final
          quote depends on pages, assets, and integrations; we&apos;ll confirm on
          a 30-min call.
        </p>
        <p className="mt-6 max-w-2xl rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-5 py-4 text-base font-medium leading-relaxed text-neutral-200">
          Most founders start with ₹60k+ to ₹1L+ projects once we define scope on
          a call.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-8 shadow-xl shadow-black/40"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                {tier.name}
              </p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white">
                {tier.price}
              </p>
              <p className="mt-2 text-sm text-neutral-400">{tier.description}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-300">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={mailtoLink(
                  `Big Mango Studio: Pricing question (${tier.name})`,
                )}
                variant="secondary"
                className="mt-8 w-full justify-center py-3"
              >
                Discuss {tier.name}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
