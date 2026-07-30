import { ShoppingBag } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function StickyOrderButton() {
  if (!siteConfig.ordering.enabled || !siteConfig.ordering.url) {
    return null;
  }

  return (
    <a
      href={siteConfig.ordering.url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center rounded-full bg-brand-accent px-5 py-3 font-bold text-brand-ink shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-transform hover:-translate-y-1 sm:bottom-6 sm:right-6"
      aria-label="Order from Rob's Kitchen online"
    >
      <ShoppingBag size={19} className="mr-2" />
      Order Now
    </a>
  );
}
