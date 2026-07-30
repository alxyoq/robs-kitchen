import type { GalleryImage } from "@/types/content";

export const galleryContent = {
  title: "Inside Rob's Kitchen",
  intro: "A look at the food, family, and Stratford home behind Rob's Kitchen.",
  images: [
    {
      src: "/images/site/jerk-chicken.webp",
      alt: "Jerk chicken with cabbage, carrots, and house sauce",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/site/story.webp",
      alt: "Mr. Rob and his son inside their Stratford restaurant",
      width: 1400,
      height: 1050,
    },
    {
      src: "/images/site/oxtail.webp",
      alt: "Oxtails with rice and cabbage packed for takeout",
      width: 1000,
      height: 680,
    },
    {
      src: "/images/site/interior.webp",
      alt: "Dining room and front counter at Rob's Kitchen",
      width: 1500,
      height: 1000,
    },
    {
      src: "/images/site/rasta-pasta.webp",
      alt: "Creamy shrimp Rasta pasta with peppers",
      width: 1000,
      height: 680,
    },
    {
      src: "/images/site/exterior.webp",
      alt: "Rob's Kitchen exterior on North White Horse Pike",
      width: 1600,
      height: 1100,
    },
    {
      src: "/images/site/comfort-plate.webp",
      alt: "Fried fish with macaroni and cheese and candied yams",
      width: 1000,
      height: 1000,
    },
    {
      src: "/images/site/menu-board.webp",
      alt: "Jamaican and soul-food menu board inside Rob's Kitchen",
      width: 1300,
      height: 950,
    },
    {
      src: "/images/site/fish-jerk.webp",
      alt: "Fried whiting fish with macaroni and candied yams",
      width: 1000,
      height: 695,
    },
    {
      src: "/images/site/sign.webp",
      alt: "Rob's Kitchen Jamaican and American Soul Food roadside sign",
      width: 1400,
      height: 1000,
    },
  ] satisfies GalleryImage[],
} as const;
