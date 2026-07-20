"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 sm:py-20 lg:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title={experience.heading}
            subtitle={experience.subheading}
            className="mb-10 sm:mb-14"
          />
        </Reveal>

        <ExperienceTimeline items={experience.items} />
      </Container>
    </section>
  );
}
