/**
 * Every project rendered on the site lives here. Add, remove, or edit an
 * entry and the Projects section updates automatically — no component
 * changes required.
 */
const projects = [
  {
    id: "shopnest-ecommerce",
    title: "ShopNest",
    tagline: "E-commerce platform with cart, checkout & admin dashboard",
    description:
      "A full-featured e-commerce platform with product catalog, cart, Stripe checkout, order tracking, and an admin dashboard for inventory and sales.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe"],
    image: { src: "/images/projects/shopnest.png", alt: "ShopNest e-commerce dashboard placeholder screenshot" },
    links: { github: "https://github.com/", live: "https://example.com" },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "taskflow-manager",
    title: "TaskFlow",
    tagline: "Drag-and-drop Kanban task manager for teams",
    description:
      "A collaborative Kanban-style task manager with drag-and-drop boards, real-time status updates, and per-project team workspaces.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: { src: "/images/projects/taskflow.png", alt: "TaskFlow Kanban board placeholder screenshot" },
    links: { github: "https://github.com/", live: "https://example.com" },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "quickblog-platform",
    title: "QuickBlog",
    tagline: "Markdown-first blogging platform with an author dashboard",
    description:
      "A lightweight blogging platform with markdown editing, tag-based discovery, comment threads, and an author analytics dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: { src: "/images/projects/quickblog.png", alt: "QuickBlog editor placeholder screenshot" },
    links: { github: "https://github.com/", live: "https://example.com" },
    category: "Full Stack",
    featured: true,
  },
  {
    id: "chatsphere-messaging",
    title: "ChatSphere",
    tagline: "Real-time messaging app with rooms and presence",
    description:
      "A real-time chat application with public/private rooms, typing indicators, and online presence, built on Socket.io.",
    technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    image: { src: "/images/projects/chatsphere.png", alt: "ChatSphere real-time chat placeholder screenshot" },
    links: { github: "https://github.com/", live: "https://example.com" },
    category: "Real-Time",
    featured: false,
  },
  {
    id: "fittrack-dashboard",
    title: "FitTrack",
    tagline: "Fitness tracking dashboard with progress charts",
    description:
      "A fitness tracking dashboard for logging workouts and nutrition, with visual progress charts and goal tracking over time.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    image: { src: "/images/projects/fittrack.png", alt: "FitTrack fitness dashboard placeholder screenshot" },
    links: { github: "https://github.com/", live: "https://example.com" },
    category: "Dashboard",
    featured: false,
  },
  {
    id: "devconnect-network",
    title: "DevConnect",
    tagline: "Social network for developers to share and discuss projects",
    description:
      "A developer-focused social network for sharing projects, following other developers, and discussing posts in threaded comments.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: { src: "/images/projects/devconnect.png", alt: "DevConnect developer network placeholder screenshot" },
    links: { github: "https://github.com/", live: "https://example.com" },
    category: "Full Stack",
    featured: false,
  },
];

export default projects;
