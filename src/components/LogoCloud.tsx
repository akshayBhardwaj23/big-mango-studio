const brands = [
  "Fuchsia Shaw",
  "Snaptix.ai",
  "MagicStocks.ai",
  "ZYYP",
  "Slick Stiles",
  "Startup-Analyst-XI",
];

export function LogoCloud() {
  return (
    <section className="border-y border-white/[0.06] bg-black py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Trusted by teams we&apos;ve helped shape
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
          {brands.map((name) => (
            <span
              key={name}
              className="font-[family-name:var(--font-display)] text-lg font-semibold text-white/35 sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
