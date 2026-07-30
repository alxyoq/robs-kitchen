import {
  ArrowRight,
  Instagram,
  MapPin,
  Phone,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { directionsUrl, siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="h-2 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary" />
      <div className="site-container py-12">
        <div className="grid gap-10 text-sm sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src={siteConfig.assets.logo}
                alt={`${siteConfig.businessName} logo`}
                width={128}
                height={128}
                className="h-24 w-24 rounded-full"
              />
              <div>
                <p className="font-display text-2xl uppercase">
                  Rob's <span className="text-brand-primary">Kitchen</span>
                </p>
                <p className="mt-2 max-w-[14rem] text-xs font-bold uppercase tracking-[0.15em] text-brand-accent">
                  Jamaican & American Soul Food
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs leading-6 text-white/65">
              Authentic island flavor, soul-food comfort, and generous plates in
              Stratford, New Jersey.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-lg uppercase text-brand-accent">
              Visit Us
            </h2>
            <div className="flex items-start">
              <MapPin
                size={18}
                className="mr-2 mt-0.5 shrink-0 text-brand-primary"
              />
              <address className="not-italic leading-6 text-white/75">
                {siteConfig.contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center font-semibold text-brand-accent transition-colors hover:text-white"
            >
              Get Directions <ArrowRight size={14} className="ml-1" />
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-lg uppercase text-brand-accent">Hours</h2>
            <ul className="space-y-2 text-white/75">
              {siteConfig.hours.map(({ days, times }) => (
                <li key={days}>
                  <span className="block font-semibold text-white">{days}</span>
                  <span>{times}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg uppercase text-brand-accent">
              Connect
            </h2>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="flex items-center text-white/75 transition-colors hover:text-brand-accent"
            >
              <Phone size={17} className="mr-2 text-brand-primary" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center text-white/75 transition-colors hover:text-brand-accent"
            >
              <Instagram size={17} className="mr-2 text-brand-primary" />
              @rob_kitchen_1
            </a>
            <a
              href={siteConfig.ordering.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-10 items-center rounded-lg bg-brand-accent px-4 py-2 font-bold text-brand-ink"
            >
              <ShoppingBag size={16} className="mr-2" />
              Order Online
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights
            reserved.
          </p>
          <nav className="flex gap-5" aria-label="Footer navigation">
            <Link href="/menu" className="hover:text-white">
              Menu
            </Link>
            <Link href="/catering-events" className="hover:text-white">
              Catering
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
