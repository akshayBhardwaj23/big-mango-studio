const items = [
  {
    q: "Are you a design agency?",
    a: "We’re a conversion-focused studio for SaaS & AI. Design matters, but the north star is trials, demos, and qualified leads. Our builds carry engineering-quality judgment end to end.",
  },
  {
    q: "Do you only build websites?",
    a: "The website is the hub, and we often pair it with launch messaging, landing experiments, and analytics hooks so you can learn fast after go-live.",
  },
  {
    q: "How fast can we ship?",
    a: "Many focused scopes land in ~7-14 days depending on assets and integrations. If timing is tight, share your deadline in the first message. We’ll only commit if it’s realistic.",
  },
];

export function FaqShort() {
  return (
    <div className="divide-y divide-white/10 rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)]">
      {items.map((item) => (
        <details
          key={item.q}
          className="px-5 py-5 sm:px-8 sm:py-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-white">
            <span>{item.q}</span>
            <span className="text-xl font-light text-[var(--accent)]">+</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
