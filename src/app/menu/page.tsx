import { ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import { menuContent } from "@/content/menu";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Menu",
  "Explore Jamaican platters, soul food, wings, sandwiches, sides, lunch specials, beverages, and catering at Rob's Kitchen.",
  "/menu",
);

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function MenuPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brand-ink py-16 text-white md:py-20">
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-[url('/images/site/menu-board.webp')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="site-container relative">
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
            Jamaican & American Soul Food
          </p>
          <h1 className="mt-3 text-center text-5xl uppercase md:text-6xl">
            {menuContent.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-white/75">
            {menuContent.intro}
          </p>
          <div className="mt-8 text-center">
            <a
              href={siteConfig.ordering.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-lg bg-brand-accent px-6 py-3 font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
            >
              <ShoppingBag size={19} className="mr-2" />
              Order from the Current Menu
            </a>
          </div>
        </div>
      </section>

      <div className="bg-brand-surface py-12 md:py-16">
        <div className="site-container">
          <nav
            className="mx-auto mb-14 flex max-w-6xl flex-wrap justify-center gap-2.5"
            aria-label="Menu categories"
          >
            {menuContent.sections.map((section) => (
              <a
                key={section.title}
                href={`#${slugify(section.title)}`}
                className="inline-flex min-h-10 items-center rounded-full border border-brand-secondary/40 bg-white px-4 py-2 text-sm font-bold text-brand-secondary transition-colors hover:border-brand-secondary hover:bg-brand-secondary hover:text-white"
              >
                {section.title}
              </a>
            ))}
          </nav>

          <div className="mx-auto max-w-5xl space-y-14">
            {menuContent.sections.map((section, sectionIndex) => (
              <section
                key={section.title}
                id={slugify(section.title)}
                className="scroll-mt-24"
              >
                <div className="mb-6 text-center">
                  <p className="eyebrow">
                    {sectionIndex < 4
                      ? "Made to Satisfy"
                      : sectionIndex < 9
                        ? "Build Your Plate"
                        : "More from Rob's"}
                  </p>
                  <h2 className="mt-2 text-3xl uppercase text-brand-ink md:text-4xl">
                    {section.title}
                  </h2>
                  {section.description ? (
                    <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
                      {section.description}
                    </p>
                  ) : null}
                </div>

                <div className="content-card grid overflow-hidden sm:grid-cols-2">
                  {section.items.map((item, itemIndex) => (
                    <article
                      key={`${section.title}-${item.name}`}
                      className={`grid gap-2 p-5 sm:grid-cols-[1fr_auto] sm:gap-x-6 md:p-6 ${
                        itemIndex > 1
                          ? "border-t"
                          : itemIndex > 0
                            ? "border-t sm:border-t-0"
                            : ""
                      } ${itemIndex % 2 === 1 ? "sm:border-l" : ""}`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-body text-lg font-bold text-brand-ink">
                            {item.name}
                          </h3>
                          {item.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-brand-secondary/10 px-2.5 py-1 text-xs font-semibold text-brand-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {item.description ? (
                          <p className="mt-2 text-sm leading-6 text-gray-600">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                      <p className="font-bold text-brand-primary sm:text-right">
                        {item.price}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-brand-ink p-7 text-center text-sm leading-6 text-white/70 md:p-9">
            <p>{menuContent.notice}</p>
            <a
              href={siteConfig.ordering.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex font-bold text-brand-accent hover:text-white"
            >
              Open Online Ordering →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
