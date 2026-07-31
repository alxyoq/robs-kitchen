import type { ReactNode } from "react";

import FloatingPurchaseButton from "../ui/FloatingPurchaseButton";
import NewsletterSignup from "../ui/NewsletterSignup";
import StickyOrderButton from "../ui/StickyOrderButton";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  showNewsletter?: boolean;
}

export default function Layout({
  children,
  showNewsletter = true,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {showNewsletter && <NewsletterSignup />}
      <Footer />
      <FloatingPurchaseButton />
      <StickyOrderButton />
    </div>
  );
}
