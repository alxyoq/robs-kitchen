import type { NavigationItem } from "@/types/content";

export const siteConfig = {
  businessName: "Rob's Kitchen",
  wordmark: {
    topLine: "ROB'S",
    bottomLine: "KITCHEN",
  },
  tagline: "Authentic Jamaican & American Soul Food",
  description:
    "Rob's Kitchen serves authentic Jamaican favorites and American soul food in Stratford, New Jersey, with dine-in, takeout, online ordering, and catering.",
  siteUrl: "https://www.robskitchen.online",
  locale: "en_US",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/catering-events", label: "Catering" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavigationItem[],
  contact: {
    phoneDisplay: "(856) 805-7851",
    phoneHref: "+18568057851",
    email: "",
    addressLines: ["804 N White Horse Pike", "Stratford, NJ 08084"],
  },
  hours: [
    { days: "Monday", times: "Closed" },
    { days: "Tuesday–Thursday", times: "12:00 PM–8:00 PM" },
    { days: "Friday–Saturday", times: "12:00 PM–10:00 PM" },
    { days: "Sunday", times: "12:00 PM–6:00 PM" },
  ],
  ordering: {
    enabled: true,
    label: "Order Online",
    url: "https://www.toasttab.com/local/order/robs-kitchen-804-n-white-horse-pike",
  },
  websitePurchase: {
    enabled: true,
    label: "Buy This Website",
    url: "https://buy.stripe.com/3cI3cwe3J94k3Y8aMGdwc00?prefilled_promo_code=FIRST10FREE3&client_reference_id=robs_kitchen",
  },
  reviews: {
    label: "Find Rob's Kitchen on Google",
    url: "https://share.google/fH24gaO9qYE0Wj4dj",
  },
  social: {
    instagramUrl: "https://www.instagram.com/rob_kitchen_1/",
    facebookUrl: "",
  },
  newsletter: {
    enabled: false,
    title: "Stay in the Loop",
    description: "Get menu news and restaurant updates from Rob's Kitchen.",
  },
  assets: {
    logo: "/images/brand/logo.svg",
    favicon: "/images/brand/favicon.svg",
    socialImage: "/images/brand/social-card.jpg",
  },
} as const;

export const fullAddress = siteConfig.contact.addressLines.join(", ");
export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
