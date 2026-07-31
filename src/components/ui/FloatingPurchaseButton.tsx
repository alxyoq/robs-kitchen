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
      className="fixed bottom-4 left-4 z-40 flex min-h-16 max-w-[calc(100vw-7rem)] items-center gap-3.5 rounded-2xl border border-white/15 bg-brand-ink px-6 py-4 text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-1 hover:bg-brand-primary-dark sm:bottom-6 sm:left-6 sm:max-w-none sm:px-7"
      aria-label="Buy this website through secure Stripe checkout"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-ink">
        <CreditCard size={22} aria-hidden="true" />
      </span>
      <span className="text-left text-base font-extrabold leading-tight sm:text-lg">
        Buy This Website
      </span>
    </a>
  );
}
