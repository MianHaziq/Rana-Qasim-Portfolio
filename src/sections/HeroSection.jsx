"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Mouse, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroParticles from "@/components/HeroParticles";
import { useGSAP } from "@/animations/gsapConfig";
import { buildHeroTimeline, startFloatingGroup } from "@/animations/heroAnimations";
import { createParallax } from "@/animations/scrollAnimations";
import { getIcon } from "@/utils/iconMap";

const FLOATING_SKILLS = [
  { icon: "react", position: "-top-3 -right-3 sm:-top-4 sm:-right-4" },
  { icon: "nodejs", position: "top-1/3 -left-4 sm:-left-6", hideOn: "hidden sm:flex" },
  { icon: "mongodb", position: "-bottom-3 -right-6", hideOn: "hidden lg:flex" },
];

export default function HeroSection({ profile }) {
  const { hero, image, statistics, role, location, social } = profile;

  const sectionRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subheadlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const metaRef = useRef(null);
  const ctasRef = useRef(null);
  const socialRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const floatBadgesRef = useRef(null);
  const statsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(
    () => {
      buildHeroTimeline({
        bgCanvas: bgCanvasRef.current,
        eyebrow: eyebrowRef.current,
        heading: headingRef.current,
        subheadline: subheadlineRef.current,
        description: descriptionRef.current,
        meta: metaRef.current,
        ctas: ctasRef.current,
        social: socialRef.current,
        image: imageRef.current,
        badge: badgeRef.current,
        floatBadges: floatBadgesRef.current,
        stats: statsRef.current,
        scrollIndicator: scrollIndicatorRef.current,
      });

      startFloatingGroup(floatBadgesRef.current);
      createParallax(bgCanvasRef.current, sectionRef.current, { distance: 40 });
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, var(--color-accent-soft), transparent 70%)",
          }}
        />
        <div ref={bgCanvasRef} className="absolute inset-0">
          <HeroParticles className="absolute inset-0 size-full" />
        </div>
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
                Hi, I&apos;m <span className="text-accent">{hero.headline}.</span>
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
              ref={metaRef}
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground lg:justify-start"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} aria-hidden="true" />
                {location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                Available for new projects
              </span>
            </div>

            <div
              ref={ctasRef}
              className="flex w-full flex-col gap-3 xs:w-auto xs:flex-row xs:items-center xs:gap-4"
            >
              <Button
                href={hero.ctaPrimary.href}
                icon={ArrowUpRight}
                magnetic
                className="w-full xs:w-auto"
              >
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary" className="w-full xs:w-auto">
                {hero.ctaSecondary.label}
              </Button>
            </div>

            <nav ref={socialRef} aria-label="Social links" className="flex items-center gap-3">
              {social.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {Icon ? <Icon size={14} aria-hidden="true" /> : null}
                  </a>
                );
              })}
            </nav>

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

          <div className="relative order-1 mx-auto w-full max-w-56 sm:max-w-xs lg:order-2 lg:max-w-none">
            <div aria-hidden="true" className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="aspect-square w-[118%] rounded-full border border-dashed border-accent/25 animate-spin-slow" />
              <div className="absolute aspect-square w-[104%] rounded-full border border-accent/15 animate-spin-slow-reverse" />
            </div>

            <div
              ref={imageRef}
              className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl shadow-accent/10"
            >
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

            <div ref={floatBadgesRef} aria-hidden="true">
              {FLOATING_SKILLS.map((skill) => {
                const Icon = getIcon(skill.icon);
                return (
                  <div
                    key={skill.icon}
                    className={`absolute ${skill.position} ${skill.hideOn ?? "flex"} size-10 items-center justify-center rounded-full border border-border bg-background text-accent shadow-lg shadow-black/5 sm:size-12`}
                  >
                    {Icon ? <Icon size={18} aria-hidden="true" /> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <div
        ref={scrollIndicatorRef}
        className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center sm:flex"
      >
        <div className="flex flex-col items-center gap-1 text-muted-foreground/70">
          <Mouse size={20} aria-hidden="true" />
          <ChevronDown size={14} className="animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
