"use client";

import { Instagram, Menu, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-brand-ink text-white transition-all duration-300 ${
        scrolled ? "h-16 shadow-2xl" : "h-20"
      }`}
    >
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-3 sm:px-5">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.businessName} home`}
        >
          <Image
            src={siteConfig.assets.logo}
            alt=""
            width={64}
            height={64}
            className={`rounded-full transition-all duration-300 ${
              scrolled ? "h-11 w-11" : "h-14 w-14"
            }`}
            priority
          />
          <div className="leading-none">
            <p className="font-display text-lg uppercase tracking-[0.08em] text-white sm:text-xl">
              {siteConfig.wordmark.topLine}{" "}
              <span className="text-brand-primary">
                {siteConfig.wordmark.bottomLine}
              </span>
            </p>
            <p className="mt-1 hidden text-[9px] font-bold uppercase tracking-[0.2em] text-brand-accent sm:block">
              Jamaican & American Soul Food
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-semibold md:flex"
          aria-label="Primary navigation"
        >
          {siteConfig.navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-brand-accent"
            >
              {label}
            </Link>
          ))}
          <a
            href={siteConfig.ordering.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-brand-accent px-4 py-2 font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
          >
            <ShoppingBag size={16} className="mr-2" />
            {siteConfig.ordering.label}
          </a>
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Rob's Kitchen on Instagram"
            className="text-brand-accent transition-colors hover:text-white"
          >
            <Instagram size={20} />
          </a>
        </nav>

        <button
          type="button"
          ref={buttonRef}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-brand-accent md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={29} /> : <Menu size={29} />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          ref={menuRef}
          className="animate-fadeIn absolute left-0 top-full z-[60] w-full border-t border-white/10 bg-brand-ink px-4 pb-6 pt-3 text-base shadow-2xl md:hidden"
        >
          <nav className="space-y-1" aria-label="Mobile navigation">
            {siteConfig.navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block w-full rounded-lg px-3 py-3 font-semibold hover:bg-white/10 hover:text-brand-accent"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href={siteConfig.ordering.url}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex min-h-12 items-center justify-center rounded-lg bg-brand-accent px-5 py-3 font-bold text-brand-ink"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingBag size={18} className="mr-2" />
            {siteConfig.ordering.label}
          </a>
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-brand-accent"
          >
            <Instagram size={19} />
            Follow @rob_kitchen_1
          </a>
        </div>
      ) : null}
    </header>
  );
}
