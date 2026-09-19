/**
 * Single source of truth for every piece of personal/portfolio content.
 * No component should hardcode copy — everything is read from this file.
 * Replace the placeholder values below with real content at any time;
 * no UI component needs to change when you do.
 */
const profile = {
  name: "Rana Qasim",
  initials: "RQ",
  role: "Full Stack Software Engineer",
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
    eyebrow: "Full Stack Software Engineer",
    headline: "Rana Qasim",
    // Cycled one at a time under the headline. The first is rendered on the
    // server, so keep the strongest positioning statement in that slot.
    roles: [
      "Full Stack Software Engineer",
      "NestJS & React Developer",
      "LLM-Powered Product Builder",
      "Flutter Mobile Developer",
    ],
    subheadline:
      "I build fast, accessible, and elegant web applications from front to back.",
    description:
      "I design and develop full-stack products — NestJS and Node.js services, React and Next.js interfaces, and LLM-powered features on top — with a sharp focus on performance, clean architecture, and interfaces that feel considered rather than assembled.",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Get in Touch", href: "#contact" },
  },

  image: {
    src: "/rana-qasim-portrait.jpg",
    alt: "Portrait of Rana Qasim",
    width: 714,
    height: 714,
    // Framing controls for the circular hero portrait — tune these two and
    // nothing else. `objectPosition` slides the crop ("50% 20%" favours the
    // head); `zoom` scales the photo inside the circle (1 = fit, 1.15 = tighter).
    objectPosition: "50% 50%",
    zoom: 1,
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
      "I'm a software engineering graduate and full stack software engineer based in Lahore, Pakistan, focused on building web applications that are as maintainable as they are polished. I care about the details most users never consciously notice — load times, transitions, and the small affordances that make an interface feel trustworthy.",
      "My work spans the full stack: designing database schemas and building NestJS and Node.js APIs on the backend, building accessible, animated React interfaces on the front, and integrating LLMs into products where they genuinely earn their place. I enjoy taking a product from a rough idea to a shipped, production-ready experience.",
      "Outside of client and academic work, I contribute to personal open-source projects and continually rebuild parts of my own toolkit to keep up with how the ecosystem evolves.",
    ],
    highlights: [
      { id: "location", label: "Location", value: "Lahore, Pakistan" },
      { id: "experience", label: "Experience", value: "1+ Year" },
      { id: "focus", label: "Focus", value: "Full Stack & AI" },
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
          { name: "NestJS", icon: "nestjs" },
          { name: "Express.js", icon: "express" },
        ],
      },
      {
        id: "database",
        name: "Database",
        items: [
          { name: "PostgreSQL", icon: "postgresql" },
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
    subheading: "Where I've built and shipped software professionally.",
    items: [
      {
        id: "folio3-software-engineer",
        role: "Software Engineer",
        company: "Folio3 Software",
        companyUrl: "#",
        location: "Onsite",
        startDate: "Jul 2026",
        endDate: null,
        current: true,
        description:
          "Building and shipping full stack applications powered by LLMs — designing NestJS services on the backend, developing product features on the front, wiring in language models where they add real value, and owning the containerization and delivery pipeline that gets it all to production.",
        responsibilities: [
          "Designed and built scalable REST APIs with NestJS, applying modular architecture, dependency injection, and DTO-level request validation",
          "Built full stack applications powered by LLMs, integrating language models into product features and handling prompting, streaming responses, and failure cases",
          "Developed features end to end across the stack, from database schema design through to the user-facing UI",
          "Containerized services with Docker and Docker Compose, giving the team reproducible local environments and consistent production builds",
          "Managed source control and collaboration through Git and GitHub using feature branches, pull requests, and structured code review",
          "Built and maintained CI/CD pipelines to automate linting, testing, and deployments on every merge to the main branch",
          "Integrated Redis for caching and session storage, cutting repeat database reads and improving API response times",
        ],
      },
      {
        id: "remotepuzzle-trainee",
        role: "Software Engineer Trainee",
        company: "Remotepuzzle",
        companyUrl: "#",
        location: "Remote",
        startDate: "Sep 2025",
        endDate: "May 2026",
        current: false,
        description:
          "Trained and worked as a mobile engineer building cross-platform applications with Flutter and Dart — turning designs into responsive interfaces that run from a single codebase on both Android and iOS, and learning to write mobile code that holds up as a product grows.",
        responsibilities: [
          "Built cross-platform mobile interfaces with Flutter and Dart, composing reusable widgets that render consistently across Android and iOS",
          "Wrote idiomatic Dart — null safety, async/await, and typed models — to keep application logic predictable and easy to reason about",
          "Implemented state management and navigation patterns that kept feature code isolated and maintainable as screens multiplied",
          "Integrated REST APIs into the app, handling asynchronous data alongside loading, empty, and error states so the UI never left users guessing",
          "Translated design handoffs into pixel-accurate, responsive layouts that adapt cleanly across phone and tablet screen sizes",
          "Participated in daily standups and code review, applying senior feedback to steadily raise the quality of what I shipped",
        ],
      },
    ],
  },

  education: {
    heading: "Education & Leadership",
    subheading:
      "My academic background, and the communities I helped build alongside it.",
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
          "Final year project: a full stack e-commerce platform",
          "Maintained a strong academic standing throughout the program",
        ],
      },
      {
        id: "trendsetter-club-president",
        degree: "President",
        institution: "Trendsetter Club",
        location: "Lahore, Pakistan",
        startDate: "2023",
        endDate: "2025",
        description:
          "Led the student tech community — organising competitions and events, and running the club's coverage of emerging technology for a campus-wide audience.",
        achievements: [
          "Organised tech competitions and hackathons, handling planning, scheduling, and judging end to end",
          "Hosted technical events and speaker sessions that brought industry practice onto campus",
          "Published posts on trending technologies, building a steady following among students",
          "Coordinated a volunteer team and managed sponsorships and logistics for each event",
        ],
      },
      {
        id: "searchopal-ambassador",
        degree: "Campus Ambassador",
        institution: "Search O Pal",
        location: "Lahore, Pakistan",
        startDate: "2024",
        endDate: "2025",
        description:
          "Represented Search O Pal — a Pakistani job and internship platform connecting candidates with employers — as its ambassador on campus, bridging students and early-career opportunities.",
        achievements: [
          "Promoted the platform across campus, helping students find internships and graduate roles",
          "Ran awareness sessions on building strong profiles and applying effectively",
          "Relayed student feedback to the team to inform how the platform served new graduates",
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
    { id: "github", label: "GitHub", href: "https://github.com/ranaqasim22", icon: "github" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/qasim-basheer",
      icon: "linkedin",
    },
    { id: "twitter", label: "X (Twitter)", href: "https://x.com/", icon: "twitter" },
    { id: "email", label: "Email", href: "mailto:ranaqasimkha227@gmail.com", icon: "mail" },
  ],

  seo: {
    title: "Rana Qasim — Full Stack Software Engineer",
    description:
      "Portfolio of Rana Qasim, a full stack software engineer building fast, accessible and elegant web applications powered by LLMs.",
    siteUrl: "https://ranaqasim.dev",
    keywords: [
      "Rana Qasim",
      "Full Stack Software Engineer",
      "Full Stack Developer",
      "NestJS Developer",
      "React Developer",
      "Next.js Portfolio",
    ],
    ogImage: "/images/projects/shopnest.png",
    twitterHandle: "@ranaqasim",
  },
};

export default profile;
