"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig, mailtoLink } from "@/content/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#offer", label: "What we Offer" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#services", label: "How we build" },
  { href: "/work", label: "Work" },
];

function NavCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={mailtoLink("Book a 30-min call — Big Mango Studio")}
      className={`group inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/55 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 ${className}`}
    >
      <span>Book a 30-min call</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white transition group-hover:brightness-110">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <NavCta />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-2.5 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-black/95 px-4 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-white/10 pt-4">
              <NavCta className="w-full justify-center" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
