import { ArrowRight, Clock3, CookingPot, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";

const highlights = [
  {
    icon: CookingPot,
    value: "Since 2001",
    label: "More than two decades of flavor",
  },
  {
    icon: UsersRound,
    value: "Family Run",
    label: "Made and served with pride",
  },
  {
    icon: Clock3,
    value: "Tue–Sun",
    label: "Dine-in, takeout, and catering",
  },
] as const;

export default function FeaturedSections() {
  return (
    <div className="bg-brand-surface">
      <section className="site-container py-16 text-center md:py-20">
        <p className="eyebrow">Jamaican & American Soul Food</p>
        <h2 className="mx-auto mt-3 max-w-4xl text-4xl uppercase leading-tight text-brand-ink md:text-5xl">
          {homeContent.intro.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-700">
          {homeContent.intro.tagline}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {homeContent.quickLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="btn-outline">
              {label}
            </Link>
          ))}
          <a
            href={siteConfig.ordering.url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            {siteConfig.ordering.label}
          </a>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-2xl bg-brand-ink text-white shadow-soft md:grid-cols-3">
          {highlights.map(({ icon: Icon, value, label }, index) => (
            <div
              key={value}
              className={`flex items-center gap-4 p-6 text-left md:justify-center md:p-8 ${
                index > 0
                  ? "border-t border-white/10 md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-accent text-brand-ink">
                <Icon size={23} />
              </span>
              <div>
                <p className="font-display text-lg uppercase text-white">
                  {value}
                </p>
                <p className="mt-1 text-sm text-white/65">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="site-container space-y-20 pb-20 md:space-y-28 md:pb-28">
        {homeContent.sections.map((section, index) => (
          <section
            key={section.title}
            className="grid items-center gap-9 md:grid-cols-2 md:gap-14"
          >
            <div
              className={
                section.imagePosition === "right" ? "md:order-1" : "md:order-2"
              }
            >
              {section.eyebrow ? (
                <p className="eyebrow">{section.eyebrow}</p>
              ) : null}
              <h2 className="mt-3 text-3xl uppercase leading-tight text-brand-ink md:text-4xl">
                {section.title}
              </h2>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary" />
              <div className="mt-6">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-4 text-[1.03rem] leading-8 text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.cta ? (
                <Link href={section.cta.href} className="btn-primary mt-2">
                  {section.cta.label}
                  <ArrowRight size={17} className="ml-2" />
                </Link>
              ) : null}
            </div>

            <div
              className={`relative ${
                section.imagePosition === "right" ? "md:order-2" : "md:order-1"
              }`}
            >
              <div
                className={`absolute -z-0 h-24 w-24 ${
                  index % 2 === 0
                    ? "-right-3 -top-3 bg-brand-accent"
                    : "-bottom-3 -left-3 bg-brand-secondary"
                }`}
                aria-hidden="true"
              />
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-soft">
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
