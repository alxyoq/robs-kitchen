import type { MenuSection } from "@/types/content";

export const menuContent: {
  title: string;
  intro: string;
  notice: string;
  sections: MenuSection[];
} = {
  title: "The Menu",
  intro:
    "Jamaican favorites, American soul food, generous sides, and made-to-order specialties.",
  notice:
    "Prices and availability can change. For the most current options, sizes, and add-ons, use Order Online or call the restaurant. Please tell the team about food allergies before ordering.",
  sections: [
    {
      title: "Jamaican Platters",
      description:
        "Signature island dishes served with your choice of available sides.",
      items: [
        { name: "Oxtails", price: "$28+" },
        { name: "Curry Chicken", price: "$19+" },
        { name: "Brown Stew Chicken", price: "$19+" },
        { name: "Jerk Chicken", price: "$19+" },
        { name: "Curry Goat", price: "$20+" },
        {
          name: "Curry Shrimp",
          price: "$20+",
          description: "Made to order.",
        },
        {
          name: "Red Snapper",
          price: "$32",
          description: "Made to order.",
        },
        { name: "Chicken Rasta Pasta", price: "$22+" },
        { name: "Shrimp Rasta Pasta", price: "$26+" },
        { name: "Rasta Pasta — No Meat", price: "$20+" },
        { name: "Pineapple Baked Barbecue Chicken", price: "$19+" },
      ],
    },
    {
      title: "Soul Food Platters",
      description:
        "Comfort-food favorites with your choice of available sides.",
      items: [
        { name: "Whole Chicken Wings (4)", price: "$19" },
        { name: "Fried Whiting Fish", price: "$19" },
        { name: "Hot Wings (8)", price: "$18" },
        { name: "Wing Dings (8)", price: "$18" },
        { name: "Fried Chicken — Breast & Wing", price: "$19" },
        { name: "Fried Chicken — Leg & Thigh", price: "$18" },
      ],
    },
    {
      title: "Sandwiches",
      items: [
        { name: "Fried Whiting Fish Sandwich", price: "$12" },
        { name: "Fried Whole Wings Sandwich", price: "$8" },
        { name: "BBQ Pork Ribs Sandwich", price: "$18" },
        { name: "Jerk Chicken Sandwich", price: "$12" },
        { name: "Fried Chicken Breast Sandwich", price: "$15" },
        { name: "Fried Chicken Leg & Thigh Sandwich", price: "$12" },
      ],
    },
    {
      title: "BBQ Ribs & Jerk",
      items: [
        { name: "BBQ Pork Ribs Platter", price: "$23" },
        { name: "Half Slab BBQ Pork Ribs", price: "$30" },
        { name: "Half Slab with 2 Sides", price: "$38" },
        { name: "Whole Slab BBQ Pork Ribs", price: "$40" },
        { name: "Whole Slab with 2 Sides", price: "$48" },
        { name: "Ribs Sandwich", price: "$18" },
        { name: "Quarter Jerk Chicken", price: "$12" },
      ],
    },
    {
      title: "House Sides",
      description: "Small and large sizes are available for many sides.",
      items: [
        { name: "Macaroni and Cheese", price: "$6+" },
        { name: "Potato Salad", price: "$5+" },
        { name: "Macaroni Salad", price: "$5+" },
        { name: "Collard Greens", price: "$5+" },
        { name: "Steamed Cabbage & Carrots", price: "$5+" },
        { name: "Yams", price: "$5+" },
        { name: "French Fries", price: "$5+" },
        { name: "Fried Plantains", price: "$5+" },
        { name: "Rice and Beans", price: "$5+" },
        { name: "Steamed White Rice", price: "$5+" },
        { name: "Spanish Rice", price: "$5+" },
        { name: "Chicken or Beef Soup", price: "$5+" },
        { name: "Beef Patty", price: "$3" },
        { name: "Coco Bread", price: "$2.50" },
        { name: "Extra Sauce", price: "$0.50" },
      ],
    },
    {
      title: "Hot Wings",
      items: [
        { name: "6 Hot Wings", price: "$9" },
        { name: "10 Hot Wings", price: "$15" },
        { name: "12 Hot Wings", price: "$18" },
        { name: "24 Hot Wings", price: "$36" },
        { name: "50 Hot Wings", price: "$75" },
        { name: "100 Hot Wings", price: "$140" },
      ],
    },
    {
      title: "Whole Wings",
      items: [
        { name: "4 Whole Wings", price: "$10" },
        { name: "8 Whole Wings", price: "$20" },
        { name: "10 Whole Wings", price: "$25" },
        { name: "12 Whole Wings", price: "$30" },
        { name: "20 Whole Wings", price: "$50" },
        { name: "50 Whole Wings", price: "$125" },
        { name: "100 Whole Wings", price: "$250" },
      ],
    },
    {
      title: "Wing Dings",
      items: [
        { name: "6 Wing Dings", price: "$9" },
        { name: "10 Wing Dings", price: "$15" },
        { name: "12 Wing Dings", price: "$18" },
        { name: "24 Wing Dings", price: "$36" },
        { name: "50 Wing Dings", price: "$75" },
        { name: "100 Wing Dings", price: "$140" },
      ],
    },
    {
      title: "Lunch Specials",
      description: "Ask the restaurant about current lunch-special hours.",
      items: [
        { name: "Curry Chicken Platter", price: "$15" },
        { name: "Brown Stew Chicken Platter", price: "$15" },
        { name: "Jerk Chicken Platter", price: "$15" },
        { name: "Wing Platter", price: "$15" },
        { name: "Hot Wing or Wing Ding Platter", price: "$15" },
        { name: "Fish Platter", price: "$15" },
      ],
    },
    {
      title: "Beverages",
      items: [
        { name: "Water", price: "$1" },
        { name: "D&G Soda", price: "$2.50" },
        { name: "Tropical Rhythms", price: "$3.50" },
        { name: "Can Soda", price: "$2" },
      ],
    },
    {
      title: "Catering Mains",
      description:
        "Tray pricing varies by size. Call ahead to confirm serving counts and availability.",
      items: [
        { name: "Curry Chicken", price: "$85+" },
        { name: "Brown Stew Chicken", price: "$85+" },
        { name: "Jerk Chicken", price: "$85+" },
        { name: "Curry Goat", price: "$95+" },
        { name: "Oxtail", price: "$210+" },
        { name: "Fried Whiting Fish", price: "$100+" },
        { name: "Fried Chicken", price: "$100+" },
      ],
    },
    {
      title: "Catering Sides",
      items: [
        { name: "Mac and Cheese", price: "$65+" },
        { name: "Yams", price: "$55+" },
        { name: "Rice and Beans", price: "$50+" },
        { name: "Collard Greens", price: "$55+" },
        { name: "Steamed Cabbage & Carrots", price: "$50+" },
        { name: "Macaroni Salad", price: "$55+" },
        { name: "Potato Salad", price: "$55+" },
        { name: "Large Chicken Soup", price: "$100" },
      ],
    },
  ],
};
