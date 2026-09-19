/**
 * Every project rendered on the site lives here. Add, remove, or edit an
 * entry and the Projects section updates automatically — no component
 * changes required.
 *
 * Optional fields:
 * - `links.github` — omit for private/in-house work; the card shows
 *   `links.codeNote` (or "Private source") in place of the Code link.
 * - `links.liveLabel` — overrides the default "Live Demo" label.
 */
const projects = [
  {
    id: "folio3-pulse",
    title: "Pulse",
    tagline: "Employee engagement and performance platform at Folio3",
    description:
      "A company-wide web platform used across Folio3 to run recurring employee check-ins, feedback, and performance cycles. I worked on the product's feature development and API layer, building interfaces and services that stay responsive as usage scales across the organisation.",
    technologies: ["React", "Node.js", "TypeScript", "REST API", "PostgreSQL", "Docker"],
    links: {
      live: "https://pulse.folio3.com/",
      liveLabel: "Visit Pulse",
      codeNote: "Proprietary — Folio3",
    },
    category: "Product",
    featured: true,
  },
  {
    id: "folio3-hr-automation",
    title: "HR Automation",
    tagline: "NestJS service automating the employee lifecycle end to end",
    description:
      "An internal HR platform that replaces manual spreadsheet workflows — onboarding, leave and attendance, approval chains, and document handling — with an automated, auditable system. Built on NestJS with a modular architecture, role-based access control, Redis-backed caching and queued background jobs for notifications and scheduled reports.",
    technologies: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "CI/CD"],
    links: { codeNote: "Proprietary — Folio3" },
    category: "Backend",
    featured: true,
  },
  {
    id: "frizbea-social",
    title: "Frizbea",
    tagline: "Social platform backend — feeds, reels, and real-time calling",
    description:
      "A full-featured social media platform where I worked on the backend. Built the NestJS services and PostgreSQL data model behind posts, reels, feeds, follows, and engagement, integrated Agora for one-to-one and group voice and video calling, and implemented an HLS transcoding and delivery pipeline so reels and uploaded video stream adaptively across network conditions.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Agora", "WebRTC", "HLS", "REST API"],
    links: {},
    category: "Backend",
    featured: true,
  },
  {
    id: "dj-shipping",
    title: "DJ Shipping",
    tagline: "Marketing site for a 25-year-old freight forwarding firm",
    description:
      "The frontend for a licensed Pakistani freight forwarding and customs clearance company operating since 1999. Built in Next.js around a custom Tailwind design system — branded colour and type tokens, fluid clamp-based typography, and a three-typeface pairing loaded through next/font. Content is server-rendered for search visibility, sections reveal on scroll, and the primary quote CTA routes straight to WhatsApp to match how the business actually takes enquiries.",
    technologies: ["Next.js", "React", "Tailwind CSS", "next/font", "Responsive Design", "Vercel"],
    links: {
      live: "https://dj-shipping.vercel.app/",
      liveLabel: "Visit Site",
    },
    category: "Frontend",
    featured: true,
  },
  {
    id: "zarrat-revolution",
    title: "Zarrat Revolution",
    tagline: "Flutter agriculture app putting crop guidance in farmers' hands",
    description:
      "A mobile app built for farmers, bringing crop guidance, field record-keeping, and market information into a single interface designed for low-literacy, low-connectivity use. Built with Flutter and Dart on a Firebase backend — Firestore for data, Authentication for accounts, Storage for crop imagery, and Cloud Messaging for timely advisories.",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth", "Cloud Messaging"],
    links: { github: null },
    category: "Mobile",
    featured: true,
  },
  {
    id: "shopnest-ecommerce",
    title: "ShopNest",
    tagline: "E-commerce platform with cart, checkout & admin dashboard",
    description:
      "A full-featured e-commerce platform with product catalog, cart, Stripe checkout, order tracking, and an admin dashboard for inventory and sales.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe"],
    links: { github: "https://github.com/", live: "https://example.com" },
    category: "Full Stack",
    featured: true,
  },
];

export default projects;
