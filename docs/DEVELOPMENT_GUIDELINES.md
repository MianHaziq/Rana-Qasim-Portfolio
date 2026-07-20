# Development Guidelines

## Architecture Rules

This project must be data-driven.

No personal information should be hardcoded inside components.

Only two files should contain editable content.

src/data/profile.js

src/data/projects.js

Everything else should consume these files.

---

# profile.js

Store:

- Name
- Hero Text
- About
- Skills
- Education
- Experience
- Contact
- Social Links
- Resume
- Profile Image
- Statistics

All sections must use this data.

---

# projects.js

Store:

- Title
- Description
- Technologies
- Image
- GitHub
- Live Demo
- Category
- Featured

Projects should be rendered dynamically.

---

# Components

Components should only receive props.

Never duplicate UI.

Reuse wherever possible.

---

# Folder Structure

Keep folders clean.

Example:

src/

assets/

components/

sections/

layouts/

hooks/

utils/

styles/

data/

App.jsx

---

# Naming

Use clear names.

Examples:

HeroSection

SkillsSection

ProjectCard

ContactForm

EducationTimeline

Avoid vague names.

---

# Styling

Use Tailwind CSS.

Maintain consistency.

Spacing should follow a design system.

Avoid arbitrary values whenever possible.

---

# Animations

Use Framer Motion.

Animations should be reusable.

Avoid unnecessary complexity.

---

# Images

Images should be optimized.

Profile image should be replaceable by changing one path inside profile.js.

Project images should be replaceable from projects.js.

---

# Accessibility

Include:

- aria labels
- keyboard navigation
- semantic HTML
- sufficient color contrast

---

# Theme

Dark mode should be default.

Persist user preference.

Use CSS variables or a consistent theme system.

---

# Responsiveness

Every component must be tested on:

- Mobile
- Tablet
- Desktop

Do not assume desktop-first layouts automatically work on mobile.

---

# Maintainability

Future updates should require editing only:

profile.js

projects.js

No UI component should need modification when updating portfolio content.

---

# Quality Standard

Before considering any feature complete, verify:

✓ Responsive

✓ Accessible

✓ Reusable

✓ Animated

✓ Cleanly coded

✓ Visually polished

✓ Performance optimized

✓ Matches the premium design language

If any feature feels generic or template-like, refine it until it reaches a professional, handcrafted quality.