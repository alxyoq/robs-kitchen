import { ArrowRight, Phone, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import { cateringContent } from "@/content/catering";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Catering",
  "Order Jamaican and soul-food catering from Rob's Kitchen for celebrations, office meals, and family gatherings in South Jersey.",
  "/catering-events",
);

export default function CateringEventsPage() {
  return (
    <Layout>
      <section className="bg-brand-ink py-16 text-white md:py-20">
        <div className="site-container">
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
            Feed the Whole Crew
          </p>
          <h1 className="mx-auto mt-3 max-w-4xl text-center text-4xl uppercase leading-tight md:text-6xl">
            {cateringContent.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-white/75">
            {cateringContent.intro}
          </p>
        </div>
      </section>

      <div className="bg-brand-surface py-14 md:py-20">
        <div className="site-container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src={cateringContent.mainImage.src}
                alt={cateringContent.mainImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <p className="eyebrow">Build a Crowd-Pleasing Spread</p>
              <h2 className="mt-3 text-3xl uppercase leading-tight text-brand-ink md:text-4xl">
                The mains they love. The sides they fight over.
              </h2>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary" />
              <div className="mt-6 space-y-4 text-[1.03rem] leading-8 text-gray-700">
                {cateringContent.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="btn-primary"
                >
                  <Phone size={18} className="mr-2" />
                  Call {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={siteConfig.ordering.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Order Online
                </a>
              </div>
            </div>
          </div>

          <section className="mt-20 rounded-3xl bg-brand-secondary p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
                  Catering Menu
                </p>
                <h2 className="mt-3 text-3xl uppercase md:text-4xl">
                  Trays of Jamaican and soul-food favorites
                </h2>
                <p className="mt-4 max-w-3xl leading-7 text-white/75">
                  Catering options include curry chicken, brown stew chicken,
                  jerk chicken, curry goat, oxtails, fried whiting, fried
                  chicken, mac and cheese, yams, rice and beans, collard greens,
                  cabbage, salads, and soup.
                </p>
              </div>
              <Link
                href="/menu#catering-mains"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-accent px-6 py-3 font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
              >
                View Tray Pricing
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </section>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {cateringContent.gallery.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
