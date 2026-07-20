import profile from "@/data/profile";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${profile.seo.siteUrl}/sitemap.xml`,
  };
}
