"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Mouse, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroParticles from "@/components/HeroParticles";
import CountUp from "@/components/motion/CountUp";
import RoleRotator from "@/components/motion/RoleRotator";
import TiltCard from "@/components/motion/TiltCard";
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

        {/* Slow-drifting colour mesh. Three offset blobs on long, prime-ish
            durations so the loop never visibly repeats. Paused entirely under
            reduced-motion by the global rule in globals.css. */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-drift-a absolute -left-[10%] top-[-15%] size-[38rem] rounded-full bg-accent/22 blur-[110px]" />
          <div className="animate-drift-b absolute -right-[12%] top-[5%] size-[32rem] rounded-full bg-indigo-400/14 blur-[120px]" />
          <div className="animate-drift-c absolute bottom-[-20%] left-[25%] size-[30rem] rounded-full bg-accent/16 blur-[100px]" />
        </div>

        {/* Faint grid, masked to fade out toward the edges. */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-border-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-strong) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)",
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
                className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.05]"
              >
                Hi, I&apos;m <span className="text-accent">{hero.headline}.</span>
              </h1>

              <RoleRotator
                items={hero.roles}
                className="relative block text-xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl"
              />

              <p
                ref={subheadlineRef}
                className="text-base font-medium leading-snug text-muted-foreground sm:text-xl lg:text-2xl"
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
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    className="bg-gradient-to-br from-foreground to-foreground/55 bg-clip-text text-2xl font-bold tabular-nums text-transparent sm:text-4xl"
                  />
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative order-1 mx-auto w-full max-w-56 sm:max-w-xs lg:order-2 lg:max-w-none"
            style={{ "--portrait-zoom": image.zoom ?? 1 }}
          >
            <div aria-hidden="true" className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="aspect-square w-[118%] rounded-full border border-dashed border-accent/25 animate-spin-slow" />
              <div className="absolute aspect-square w-[104%] rounded-full border border-accent/15 animate-spin-slow-reverse" />
            </div>

            {/* Both branches reworked this frame: the rotating conic ring came
                from the EmailJS branch, the cursor tilt and data-driven crop
                from this one. Kept together — the ring sits outside the
                masked portrait so neither clips the other. */}
            <TiltCard>
              <div ref={imageRef} className="group relative aspect-square">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 animate-spin-slow rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, var(--color-accent), transparent 40%, var(--color-accent) 100%)",
                  }}
                />
                <div className="absolute inset-[3px] overflow-hidden rounded-full border border-background bg-surface shadow-2xl shadow-accent/10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 28rem, (min-width: 640px) 20rem, 14rem"
                    /* Framing is data-driven: nudge `image.objectPosition` in
                       profile.js to re-centre the crop without touching JSX. */
                    style={{ objectPosition: image.objectPosition ?? "center" }}
                    className="scale-[var(--portrait-zoom)] object-cover transition-transform duration-700 ease-out group-hover:scale-[calc(var(--portrait-zoom)*1.05)]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
                  />
                </div>
              </div>
            </TiltCard>

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
