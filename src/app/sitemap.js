import profile from "@/data/profile";

export default function sitemap() {
  return [
    {
      url: profile.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
