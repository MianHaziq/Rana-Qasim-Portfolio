import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { linkArrow } from "@/animations/cardAnimations";

export default function ProjectCard({ project }) {
  return (
    <Card interactive className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-2">
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            initial="rest"
            whileHover="hover"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
          >
            <FaGithub size={15} aria-hidden="true" />
            Code
          </motion.a>
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            initial="rest"
            whileHover="hover"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
          >
            Live Demo
            <motion.span variants={linkArrow} className="flex">
              <ArrowUpRight size={15} aria-hidden="true" />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </Card>
  );
}
