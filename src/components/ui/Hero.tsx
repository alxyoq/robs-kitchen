import { ArrowRight, MapPin, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { directionsUrl, siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-brand-ink sm:min-h-[720px]">
      <Image
        src={homeContent.hero.image}
        alt={homeContent.hero.imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/90 lg:bg-gradient-to-l lg:from-black/90 lg:via-black/60 lg:to-black/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary"
        aria-hidden="true"
      />

      <div className="site-container relative flex min-h-[650px] items-end pb-16 pt-28 sm:min-h-[720px] sm:items-center sm:pb-20 sm:pt-24 lg:justify-end">
        <div className="max-w-2xl text-white lg:text-right">
          <p className="mb-4 inline-flex rounded-full border border-brand-accent/60 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-accent backdrop-blur">
            {homeContent.hero.eyebrow}
          </p>
          <h1 className="text-5xl uppercase leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
            {homeContent.hero.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/85 sm:text-xl">
            {homeContent.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={siteConfig.ordering.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-accent px-6 py-3 font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
            >
              <ShoppingBag size={19} className="mr-2" />
              Order Online
            </a>
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/70 bg-black/20 px-6 py-3 font-bold text-white backdrop-blur transition-colors hover:bg-white hover:text-brand-ink"
            >
              View the Menu <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-brand-accent"
          >
            <MapPin size={17} className="text-brand-accent" />
            804 N White Horse Pike · Stratford, NJ
          </a>
        </div>
      </div>
    </section>
  );
}
