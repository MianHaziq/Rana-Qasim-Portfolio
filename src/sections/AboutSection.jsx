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
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Sticks alongside the copy on large screens so the two columns stay
              visually anchored instead of the heading scrolling away early. */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title={about.heading}
              subtitle={about.subheading}
            />
          </Reveal>

          <div className="flex flex-col gap-10 sm:gap-12">
            <Stagger className="flex max-w-prose flex-col gap-5" staggerChildren={0.1}>
              {about.paragraphs.map((paragraph, index) => (
                <Reveal
                  key={index}
                  variants={fadeInUp}
                  as="p"
                  className="text-[0.975rem] leading-[1.75] text-muted-foreground sm:text-base sm:leading-[1.8]"
                >
                  {paragraph}
                </Reveal>
              ))}
            </Stagger>

            {/* Two columns at every width: four narrow columns forced values
                like "Full Stack & AI" to wrap mid-phrase on tablets. */}
            <Stagger
              className="grid grid-cols-1 gap-x-8 gap-y-6 border-t border-border pt-8 xs:grid-cols-2 sm:gap-x-10 sm:gap-y-8 sm:pt-10"
              staggerChildren={0.08}
            >
              {about.highlights.map((item) => (
                <Reveal
                  key={item.id}
                  variants={fadeInUp}
                  className="flex flex-col gap-1.5 border-l-2 border-accent/30 pl-4 sm:pl-5"
                >
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-[0.975rem] font-semibold leading-snug text-foreground text-balance sm:text-base">
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
