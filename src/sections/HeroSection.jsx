"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useGSAP } from "@/animations/gsapConfig";
import { buildHeroTimeline, startAmbientFloat } from "@/animations/heroAnimations";
import { createParallax } from "@/animations/scrollAnimations";

export default function HeroSection({ profile }) {
  const { hero, image, statistics, role } = profile;

  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subheadlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctasRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(
    () => {
      buildHeroTimeline({
        eyebrow: eyebrowRef.current,
        heading: headingRef.current,
        subheadline: subheadlineRef.current,
        description: descriptionRef.current,
        ctas: ctasRef.current,
        image: imageRef.current,
        badge: badgeRef.current,
        stats: statsRef.current,
      });

      startAmbientFloat(glowRef.current);
      createParallax(glowRef.current, sectionRef.current, { distance: 60 });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 flex justify-center"
      >
        <div ref={glowRef} className="h-112 w-184 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="order-2 flex flex-col items-center gap-6 text-center lg:order-1 lg:items-start lg:gap-8 lg:text-left">
            <span
              ref={eyebrowRef}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {hero.eyebrow}
            </span>

            <div className="flex flex-col gap-2 sm:gap-3">
              <h1
                ref={headingRef}
                className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]"
              >
                Hi, I&apos;m {hero.headline}
                <span className="text-accent">.</span>
              </h1>

              <p
                ref={subheadlineRef}
                className="text-lg font-medium leading-snug text-muted-foreground sm:text-2xl lg:text-3xl"
              >
                {hero.subheadline}
              </p>
            </div>

            <p
              ref={descriptionRef}
              className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg"
            >
              {hero.description}
            </p>

            <div
              ref={ctasRef}
              className="flex w-full flex-col gap-3 xs:w-auto xs:flex-row xs:items-center xs:gap-4"
            >
              <Button href={hero.ctaPrimary.href} icon={ArrowUpRight} className="w-full xs:w-auto">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary" className="w-full xs:w-auto">
                {hero.ctaSecondary.label}
              </Button>
            </div>

            <div
              ref={statsRef}
              className="grid w-full grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4 lg:pt-8"
            >
              {statistics.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-1">
                  <span className="text-xl font-semibold text-foreground sm:text-3xl">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative order-1 mx-auto w-full max-w-56 sm:max-w-xs lg:order-2 lg:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 20rem, 14rem"
                className="object-cover"
              />
            </div>
            <div
              ref={badgeRef}
              className="absolute -bottom-4 -left-3 rounded-xl border border-border bg-background px-3 py-2.5 shadow-lg shadow-black/5 sm:-bottom-5 sm:-left-5 sm:rounded-2xl sm:px-5 sm:py-4"
            >
              <p className="text-xs font-semibold text-foreground sm:text-sm">{role}</p>
              <p className="text-[0.65rem] text-muted-foreground sm:text-xs">Available for new projects</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
