"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import { fadeInUp, blurReveal } from "@/animations/sectionAnimations";
import { cardHover, iconPop } from "@/animations/cardAnimations";
import { getIcon } from "@/utils/iconMap";
import { cn } from "@/utils/cn";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-surface/40 py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal variants={blurReveal}>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title={skills.heading}
            subtitle={skills.subheading}
            align="center"
            className="mx-auto mb-10 sm:mb-14 lg:mb-16"
          />
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4" staggerChildren={0.1}>
          {skills.categories.map((category) => (
            <Reveal key={category.id} variants={fadeInUp}>
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                className={cn(
                  "h-full rounded-2xl transition-colors duration-200",
                  "border border-border bg-surface p-5",
                  "sm:border-border sm:bg-surface sm:p-6 lg:p-8",
                  "hover:border-border-strong"
                )}
              >
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm">
                  {category.name}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:flex-col sm:gap-4">
                  {category.items.map((item) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <motion.li
                        key={item.name}
                        initial="rest"
                        whileHover="hover"
                        className={cn(
                          "flex items-center gap-2 rounded-full border border-border bg-background/60 py-1.5 pl-1.5 pr-3",
                          "sm:gap-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
                        )}
                      >
                        <motion.span
                          variants={iconPop}
                          className="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent sm:size-8 sm:rounded-lg"
                        >
                          {Icon ? <Icon size={13} aria-hidden="true" className="sm:hidden" /> : null}
                          {Icon ? (
                            <Icon size={16} aria-hidden="true" className="hidden sm:block" />
                          ) : null}
                        </motion.span>
                        <span className="text-xs font-medium text-foreground sm:text-sm">
                          {item.name}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
