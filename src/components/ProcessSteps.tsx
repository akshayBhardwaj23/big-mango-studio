const steps = [
  {
    title: "Discover & align",
    body: "We clarify audience, offer, and success metrics (often with a tight workshop) so the site and campaigns chase one measurable outcome.",
  },
  {
    title: "Build & launch",
    body: "Design and copy move together: prototype sections, ship production-ready pages, and prep analytics so you can learn from day one.",
  },
  {
    title: "Measure & iterate",
    body: "We review funnel signals, prioritize experiments, and fold learnings back into the site. Especially important after SaaS or AI releases.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-7 sm:p-8"
        >
          <span className="font-mono text-xs font-medium tabular-nums text-[var(--accent)]">
            #{String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-white">
            {step.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-400">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
