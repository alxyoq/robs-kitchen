import { CreditCard } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function FloatingPurchaseButton() {
  if (!siteConfig.websitePurchase.enabled || !siteConfig.websitePurchase.url) {
    return null;
  }

  return (
    <a
      href={siteConfig.websitePurchase.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-40 flex min-h-14 max-w-[calc(100vw-8.5rem)] items-center gap-3 rounded-2xl border border-white/15 bg-brand-ink px-4 py-2.5 text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-1 hover:bg-brand-primary-dark sm:bottom-6 sm:left-6 sm:max-w-none sm:px-5"
      aria-label="Buy this website through secure Stripe checkout"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-ink">
        <CreditCard size={18} aria-hidden="true" />
      </span>
      <span className="text-left text-sm font-extrabold leading-tight sm:text-base">
        Buy This Website
      </span>
    </a>
  );
}
