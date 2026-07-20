"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import EducationTimeline from "@/components/EducationTimeline";

export default function EducationSection({ education }) {
  return (
    <section id="education" aria-labelledby="education-heading" className="bg-surface/40 py-16 sm:py-20 lg:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title={education.heading}
            subtitle={education.subheading}
            className="mb-10 sm:mb-14"
          />
        </Reveal>

        <EducationTimeline items={education.items} />
      </Container>
    </section>
  );
}
