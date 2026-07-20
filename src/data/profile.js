/**
 * Single source of truth for every piece of personal/portfolio content.
 * No component should hardcode copy — everything is read from this file.
 * Replace the placeholder values below with real content at any time;
 * no UI component needs to change when you do.
 */
const profile = {
  name: "Rana Qasim",
  initials: "RQ",
  role: "MERN Stack Developer",
  location: "Lahore, Pakistan",

  navigation: [
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "education", label: "Education", href: "#education" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "MERN Stack Developer",
    headline: "Rana Qasim",
    subheadline:
      "I build fast, accessible, and elegant web applications from front to back.",
    description:
      "I design and develop full-stack products with React, Node.js, Express and MongoDB — with a sharp focus on performance, clean architecture, and interfaces that feel considered rather than assembled.",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Get in Touch", href: "#contact" },
  },

  image: {
    src: "/rana-qasim.jpeg",
    alt: "Portrait of Rana Qasim",
    width: 480,
    height: 480,
  },

  resume: {
    href: "/resume/resume-rana-qasim.pdf",
    label: "Download Resume",
    fileName: "Rana-Qasim-Resume.pdf",
  },

  about: {
    heading: "About Me",
    subheading: "A quick introduction to who I am and how I work.",
    paragraphs: [
      "I'm a software engineering graduate and MERN stack developer based in Lahore, Pakistan, focused on building web applications that are as maintainable as they are polished. I care about the details most users never consciously notice — load times, transitions, and the small affordances that make an interface feel trustworthy.",
      "My work spans the full stack: designing MongoDB schemas and Express APIs on the backend, and building accessible, animated React interfaces on the front. I enjoy taking a product from a rough idea to a shipped, production-ready experience.",
      "Outside of client and academic work, I contribute to personal open-source projects and continually rebuild parts of my own toolkit to keep up with how the ecosystem evolves.",
    ],
    highlights: [
      { id: "location", label: "Location", value: "Lahore, Pakistan" },
      { id: "experience", label: "Experience", value: "1+ Year" },
      { id: "focus", label: "Focus", value: "MERN Stack" },
      { id: "availability", label: "Availability", value: "Open to work" },
    ],
  },

  skills: {
    heading: "Skills & Technologies",
    subheading: "The tools I reach for to design, build, and ship products.",
    categories: [
      {
        id: "frontend",
        name: "Frontend",
        items: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
        ],
      },
      {
        id: "backend",
        name: "Backend",
        items: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
        ],
      },
      {
        id: "database",
        name: "Database",
        items: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "Mongoose", icon: "mongoose" },
        ],
      },
      {
        id: "tools",
        name: "Tools & Platforms",
        items: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Docker", icon: "docker" },
          { name: "Postman", icon: "postman" },
          { name: "Vercel", icon: "vercel" },
        ],
      },
    ],
  },

  experience: {
    heading: "Experience",
    subheading: "Where I've applied the MERN stack professionally.",
    items: [
      {
        id: "folio-intern",
        role: "MERN Stack Intern",
        company: "Folio",
        companyUrl: "#",
        location: "Remote",
        startDate: "Jun 2025",
        endDate: "Dec 2025",
        current: false,
        description:
          "Contributed to the development and maintenance of client-facing web applications built on the MERN stack, working closely with senior engineers on both API and UI work.",
        responsibilities: [
          "Built and maintained RESTful APIs using Node.js and Express",
          "Developed reusable, accessible React components integrated with backend services",
          "Collaborated with a cross-functional team using Agile practices and code review",
          "Optimized MongoDB queries and indexes, improving average response times by roughly 30%",
        ],
      },
    ],
  },

  education: {
    heading: "Education",
    subheading: "My academic background in software engineering.",
    items: [
      {
        id: "ucp-bsse",
        degree: "Bachelor of Science in Software Engineering",
        institution: "University of Central Punjab (UCP)",
        location: "Lahore, Pakistan",
        startDate: "2021",
        endDate: "2025",
        description:
          "Focused on software design, data structures and algorithms, databases, and full-stack web engineering.",
        achievements: [
          "Final year project: a full-stack MERN e-commerce platform",
          "Maintained a strong academic standing throughout the program",
        ],
      },
    ],
  },

  statistics: [
    { id: "projects", label: "Projects Completed", value: 6, suffix: "+" },
    { id: "experience", label: "Years of Experience", value: 1, suffix: "+" },
    { id: "technologies", label: "Technologies", value: 12, suffix: "+" },
    { id: "commits", label: "GitHub Contributions", value: 500, suffix: "+" },
  ],

  contact: {
    heading: "Let's Work Together",
    subheading:
      "Have a project in mind or just want to say hello? My inbox is always open.",
    email: "ranaqasimkha227@gmail.com",
    phone: "+92 308 6098288",
    location: "Lahore, Pakistan",
    availability: "Open to full-time roles & freelance projects",
    details: [
      {
        id: "email",
        icon: "mail",
        label: "Email",
        value: "ranaqasimkha227@gmail.com",
        href: "mailto:ranaqasimkha227@gmail.com",
      },
      {
        id: "phone",
        icon: "phone",
        label: "Phone",
        value: "+92 308 6098288",
        href: "tel:+923086098288",
      },
      { id: "location", icon: "mapPin", label: "Location", value: "Lahore, Pakistan" },
      {
        id: "availability",
        icon: "clock",
        label: "Availability",
        value: "Open to full-time roles & freelance projects",
      },
    ],
  },

  social: [
    { id: "github", label: "GitHub", href: "https://github.com/", icon: "github" },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    { id: "twitter", label: "X (Twitter)", href: "https://x.com/", icon: "twitter" },
    { id: "email", label: "Email", href: "mailto:ranaqasimkha227@gmail.com", icon: "mail" },
  ],

  seo: {
    title: "Rana Qasim — MERN Stack Developer",
    description:
      "Portfolio of Rana Qasim, a MERN stack developer building fast, accessible and elegant web applications.",
    siteUrl: "https://ranaqasim.dev",
    keywords: [
      "Rana Qasim",
      "MERN Stack Developer",
      "React Developer",
      "Full Stack Developer",
      "Next.js Portfolio",
    ],
    ogImage: "/images/projects/shopnest.png",
    twitterHandle: "@ranaqasim",
  },
};

export default profile;
