import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { linkArrow } from "@/animations/cardAnimations";

export default function ProjectCard({ project }) {
  const { links = {} } = project;

  return (
    <Card interactive className="flex h-full flex-col gap-4 p-6 sm:p-7">
      <div>
        <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          {project.category}
        </span>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{project.title}</h3>
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

      {/* Client and in-house work often has no public repo, and not every
          project has a public URL — render only the links that exist, and
          explain the gap rather than leaving a dead "Code" link. */}
      <div className="mt-auto flex items-center gap-4 border-t border-border pt-4">
        {links.github ? (
          <motion.a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            initial="rest"
            whileHover="hover"
            aria-label={`${project.title} source code on GitHub`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
          >
            <FaGithub size={15} aria-hidden="true" />
            Code
          </motion.a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Lock size={14} aria-hidden="true" />
            {links.codeNote ?? "Private source"}
          </span>
        )}

        {links.live ? (
          <motion.a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            initial="rest"
            whileHover="hover"
            aria-label={`${project.title} — ${links.liveLabel ?? "live demo"}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
          >
            {links.liveLabel ?? "Live Demo"}
            <motion.span variants={linkArrow} className="flex">
              <ArrowUpRight size={15} aria-hidden="true" />
            </motion.span>
          </motion.a>
        ) : null}
      </div>
    </Card>
  );
}
