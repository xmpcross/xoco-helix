import { categories, categorySlug } from "./categories";

export const siteConfig = {
  name: "Helix",
  tagline: "Evidence, wonder, and the shape of discovery",
  title: "Helix - Science reporting for curious readers",
  description:
    "Helix is a contemporary science publication covering space, biology, climate, medicine, physics, technology, and the natural world.",
  siteUrl: "https://helix.xocoweb.workers.dev",
  authorName: "Helix Editorial",
  email: "hello@example.com",
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og-image.png",
  newsletter: {
    enabled: true,
    action: "",
    method: "post",
    nameFieldName: "name",
    emailFieldName: "email",
    eyebrow: "The Helix Brief",
    title: "A sharper weekly signal from the research world.",
    description:
      "New observations, careful explainers, and field notes from the editors. No hype cycle, no spam.",
  },
  contact: {
    enabled: false,
    action: "",
    method: "post",
    office: ["Editorial desk", "Remote science newsroom"],
    responseTime: "Usually within three business days.",
  },
  socials: [
    { label: "X", href: "https://x.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

export const navigation = categories.map((category) => ({
  label: category,
  href: `/category/${categorySlug(category)}/`,
}));
