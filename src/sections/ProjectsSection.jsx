"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import { fadeInUp, scaleIn } from "@/animations/sectionAnimations";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/utils/cn";

export default function ProjectsSection({ projects }) {
  const [expanded, setExpanded] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal variants={scaleIn}>
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Selected Work"
            subtitle="A selection of MERN stack projects covering e-commerce, real-time apps, and dashboards."
            align="center"
            className="mx-auto mb-10 sm:mb-14 lg:mb-16"
          />
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" staggerChildren={0.1}>
          {featuredProjects.map((project) => (
            <Reveal key={project.id} variants={fadeInUp} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Stagger>

        {moreProjects.length > 0 ? (
          <Stagger
            className={cn(
              "grid gap-5 pt-5 sm:grid-cols-2 sm:gap-6 sm:pt-6 lg:grid-cols-3",
              !expanded && "hidden sm:grid"
            )}
            staggerChildren={0.1}
          >
            {moreProjects.map((project) => (
              <Reveal key={project.id} variants={fadeInUp} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </Stagger>
        ) : null}

        {moreProjects.length > 0 && !expanded ? (
          <div className="mt-8 flex justify-center sm:hidden">
            <Button
              variant="secondary"
              icon={ChevronDown}
              onClick={() => setExpanded(true)}
              className="w-full max-w-xs"
            >
              Load More Projects
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
