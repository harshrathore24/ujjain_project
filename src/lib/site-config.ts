export const siteConfig = {
  name: "Mahakal Yatra",
  tagline: "Your trusted local guide through the City of Temples",
  description:
    "Ujjain's most loved local tour guide service — Mahakaleshwar darshan, heritage walks, hotel & car booking, all planned for you.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@mahakalyatra.in",
  address: "Near Mahakaleshwar Temple, Ujjain, Madhya Pradesh 456006",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  stats: [
    { label: "Travelers Guided", value: 12500, suffix: "+" },
    { label: "Years of Experience", value: 9, suffix: "+" },
    { label: "Tour Packages", value: 24, suffix: "" },
    { label: "Average Rating", value: 4.9, suffix: "/5" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Hotels", href: "/hotels" },
    { label: "Car Rental", href: "/cars" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
