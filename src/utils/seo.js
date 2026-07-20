import profile from "@/data/profile";

export function buildMetadata() {
  const { seo, name } = profile;

  return {
    metadataBase: new URL(seo.siteUrl),
    title: { default: seo.title, template: `%s | ${name}` },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name, url: seo.siteUrl }],
    creator: name,
    openGraph: {
      type: "website",
      url: seo.siteUrl,
      title: seo.title,
      description: seo.description,
      siteName: name,
      images: [{ url: seo.ogImage, width: 1200, height: 750, alt: seo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
      creator: seo.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export function buildPersonJsonLd() {
  const { name, role, seo, social, location } = profile;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    url: seo.siteUrl,
    address: { "@type": "PostalAddress", addressLocality: location },
    sameAs: social.filter((item) => item.href.startsWith("http")).map((item) => item.href),
  };
}
