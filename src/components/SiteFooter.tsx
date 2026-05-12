import Link from "next/link";
import Image from "next/image";
import { siteConfig, mailtoLink } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-neutral-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <div className="relative h-20 w-56 sm:w-64">
            <Image
              src="/big-mango-logo.png"
              alt={siteConfig.name}
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 224px, 256px"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            {siteConfig.description}
          </p>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </p>
            <a
              href={mailtoLink()}
              className="mt-3 block text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/work" className="text-neutral-300 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#offer"
                  className="text-neutral-300 hover:text-white"
                >
                  What we Offer
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-neutral-300 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
