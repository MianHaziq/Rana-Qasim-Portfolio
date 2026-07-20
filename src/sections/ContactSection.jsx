"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";
import { fadeInLeft, fadeInUp } from "@/animations/sectionAnimations";
import ContactForm from "@/components/ContactForm";
import { getIcon } from "@/utils/iconMap";

export default function ContactSection({ contact }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal variants={fadeInLeft} className="flex flex-col gap-8 sm:gap-10">
            <SectionHeading
              id="contact-heading"
              eyebrow="Contact"
              title={contact.heading}
              subtitle={contact.subheading}
            />

            <ul className="flex flex-col gap-5">
              {contact.details.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <li key={item.id} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal variants={fadeInUp}>
            <Card>
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
