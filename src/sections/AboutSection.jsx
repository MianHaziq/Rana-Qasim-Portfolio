"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import { fadeInUp } from "@/animations/sectionAnimations";

export default function AboutSection({ about }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title={about.heading}
              subtitle={about.subheading}
            />
          </Reveal>

          <div className="flex flex-col gap-8 sm:gap-10">
            <Stagger className="flex flex-col gap-4 sm:gap-5" staggerChildren={0.1}>
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={index} variants={fadeInUp} as="p" className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                  {paragraph}
                </Reveal>
              ))}
            </Stagger>

            <Stagger
              className="grid grid-cols-2 gap-5 border-t border-border pt-6 sm:gap-6 sm:pt-8 sm:grid-cols-4"
              staggerChildren={0.08}
            >
              {about.highlights.map((item) => (
                <Reveal key={item.id} variants={fadeInUp} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-base font-semibold text-foreground">
                    {item.value}
                  </span>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
