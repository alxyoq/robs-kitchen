import { siteConfig } from "@/config/site";
import type { ContentLink, FeaturedSection } from "@/types/content";

export const homeContent = {
  hero: {
    image: "/images/site/hero.webp",
    imageAlt:
      "Jerk chicken served with cabbage, carrots, and house sauce at Rob's Kitchen",
    eyebrow: "Stratford, New Jersey",
    heading: "Jamaican roots. Soul food comfort.",
    description:
      "Big flavor, generous plates, and recipes built over more than two decades in South Jersey.",
  },
  intro: {
    heading: "Welcome to Rob's Kitchen",
    tagline:
      "Authentic island flavor and American comfort food, made fresh in Stratford.",
    serviceLine: "Dine-in · Takeout · Catering",
    hoursSummary: "Open Tuesday through Sunday on the White Horse Pike.",
  },
  quickLinks: [
    { href: "/menu", label: "Explore the Menu" },
    { href: "/contact#location", label: "Get Directions" },
  ] satisfies ContentLink[],
  sections: [
    {
      eyebrow: "A South Jersey Legacy",
      title: "From Mr. Rob's kitchen to yours",
      paragraphs: [
        "Rob's Kitchen traces its roots to 2001, when owner and chef Mr. Rob began sharing the Jamaican food he grew up with and the soul-food classics his South Jersey neighbors loved.",
        "Today, Rob and his son carry that family tradition forward in Stratford—serving the kind of food that brings people around the same table.",
      ],
      image: "/images/site/story.webp",
      imageAlt: "Mr. Rob and his son seated inside Rob's Kitchen",
      imagePosition: "right",
    },
    {
      eyebrow: "Two Traditions. One Table.",
      title: "The dishes people come back for",
      paragraphs: [
        "Fall-apart oxtails, smoky jerk chicken, curry goat, fried whiting, whole wings, barbecue ribs, and made-to-order Rasta pasta anchor a menu full of comfort.",
        "Pair your plate with rice and peas, cabbage, mac and cheese, yams, collard greens, plantains, or another house side.",
      ],
      image: "/images/site/comfort-plate.webp",
      imageAlt:
        "Fried fish with macaroni and cheese and candied yams from Rob's Kitchen",
      imagePosition: "left",
      cta: { href: "/menu", label: "See the Full Menu" },
    },
    {
      eyebrow: "Feed the Whole Crew",
      title: "Catering with real flavor",
      paragraphs: [
        "Bring Rob's Kitchen to birthdays, office lunches, family gatherings, watch parties, and community events.",
        "Choose from Jamaican and soul-food mains with trays of the sides everyone reaches for first. Call ahead to talk through quantities and timing.",
      ],
      image: "/images/site/interior.webp",
      imageAlt: "The warm dining room and pickup counter inside Rob's Kitchen",
      imagePosition: "right",
      cta: { href: "/catering-events", label: "Explore Catering" },
    },
  ] satisfies FeaturedSection[],
} as const;
