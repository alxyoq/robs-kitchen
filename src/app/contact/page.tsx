import { Clock, MapPin, Phone, Send, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import Layout from "@/components/layout/Layout";
import { directionsUrl, mapEmbedUrl, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Find Rob's Kitchen hours, directions, phone number, and online ordering in Stratford, New Jersey.",
  "/contact",
);

const inputClasses =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-brand-secondary";

export default function ContactPage() {
  return (
    <Layout>
      <section className="bg-brand-ink py-16 text-white md:py-20">
        <div className="site-container">
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
            Stop In or Call Ahead
          </p>
          <h1 className="mt-3 text-center text-5xl uppercase md:text-6xl">
            Visit Rob's Kitchen
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-white/75">
            Find us on the White Horse Pike in Stratford for dine-in, takeout,
            online ordering, and catering.
          </p>
        </div>
      </section>

      <div className="bg-brand-surface py-14 md:py-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="content-card p-7 md:p-9">
                <h2 className="text-3xl uppercase text-brand-ink">
                  Restaurant Information
                </h2>
                <ul className="mt-8 space-y-7">
                  <li className="flex items-start">
                    <span className="mr-4 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-accent text-brand-ink">
                      <MapPin size={20} />
                    </span>
                    <div>
                      <h3 className="font-body font-bold">Address</h3>
                      <address className="mt-1 not-italic leading-6 text-gray-700">
                        {siteConfig.contact.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-sm font-bold text-brand-primary hover:text-brand-secondary"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-accent text-brand-ink">
                      <Phone size={20} />
                    </span>
                    <div>
                      <h3 className="font-body font-bold">Phone</h3>
                      <a
                        href={`tel:${siteConfig.contact.phoneHref}`}
                        className="mt-1 block text-gray-700 hover:text-brand-primary"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-accent text-brand-ink">
                      <Clock size={20} />
                    </span>
                    <div>
                      <h3 className="mb-2 font-body font-bold">Hours</h3>
                      <ul className="space-y-2 text-gray-700">
                        {siteConfig.hours.map(({ days, times }) => (
                          <li
                            key={days}
                            className="grid grid-cols-1 gap-0 sm:grid-cols-[1fr_auto] sm:gap-5"
                          >
                            <span className="font-semibold">{days}</span>
                            <span>{times}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>

                <a
                  href={siteConfig.ordering.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-accent px-5 py-3 font-bold text-brand-ink transition-transform hover:-translate-y-0.5"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Order Online
                </a>
              </div>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/site/exterior.webp"
                  alt="Exterior of Rob's Kitchen at 804 N White Horse Pike"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="content-card p-7 md:p-9">
              <p className="eyebrow">Questions or Catering?</p>
              <h2 className="mt-2 text-3xl uppercase text-brand-ink">
                Send a Message
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                For same-day orders, call the restaurant or use online ordering.
                Use this form for general questions and catering inquiries.
              </p>
              <form
                name="contact"
                method="POST"
                action="/thank-you"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-8 space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Do not fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="mb-2 block font-bold"
                    >
                      First Name <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      autoComplete="given-name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="mb-2 block font-bold">
                      Last Name <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      autoComplete="family-name"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-bold">
                    Email <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block font-bold">
                    Subject <span className="text-brand-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className={inputClasses}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Question</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="feedback">Guest Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-bold">
                    Message <span className="text-brand-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className={inputClasses}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <section id="location" className="mt-20 scroll-mt-24">
            <p className="eyebrow text-center">804 N White Horse Pike</p>
            <h2 className="mt-2 text-center text-4xl uppercase text-brand-ink">
              Find Us in Stratford
            </h2>
            <div className="mt-8 h-[430px] overflow-hidden rounded-2xl bg-white shadow-soft">
              <iframe
                title={`Map to ${siteConfig.businessName}`}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
