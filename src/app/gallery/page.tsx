import type { Metadata } from "next";

import Layout from "@/components/layout/Layout";
import { galleryContent } from "@/content/gallery";
import { createPageMetadata } from "@/lib/metadata";

import GalleryClient from "./GalleryClient";

export const metadata: Metadata = createPageMetadata(
  "Gallery",
  "See food, family, and restaurant photos from Rob's Kitchen in Stratford, New Jersey.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <Layout>
      <section className="bg-brand-ink py-16 text-white md:py-20">
        <div className="site-container">
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
            Food · Family · Stratford
          </p>
          <h1 className="mt-3 text-center text-5xl uppercase md:text-6xl">
            {galleryContent.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-white/75">
            {galleryContent.intro}
          </p>
        </div>
      </section>

      <div className="bg-brand-surface py-14 md:py-20">
        <div className="site-container">
          <GalleryClient />
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-5 text-gray-500">
            Photography includes images shared by Rob's Kitchen and local
            coverage by Miles Morris and 42Freeway. Source details are preserved
            in the project documentation.
          </p>
        </div>
      </div>
    </Layout>
  );
}
