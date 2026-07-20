"use client";

import { gsap, SplitText, EASE, DURATION, prefersReducedMotion } from "./gsapConfig";

/**
 * Builds the hero's sequential entrance timeline: heading lines split and
 * revealed word-by-word, then description, CTAs, image, and stat row each
 * step in with a slight overlap so the sequence reads as one continuous
 * motion rather than separate disconnected pops.
 */
export function buildHeroTimeline(refs) {
  const { eyebrow, heading, subheadline, description, ctas, image, badge, stats } = refs;
  const reduceMotion = prefersReducedMotion();

  const targets = [eyebrow, heading, subheadline, description, ctas, image, badge, stats].filter(
    Boolean
  );

  if (reduceMotion) {
    gsap.set(targets, { opacity: 1, y: 0, scale: 1, clearProps: "all" });
    return null;
  }

  const tl = gsap.timeline({ defaults: { ease: EASE.out } });
  let split;

  tl.from(eyebrow, { opacity: 0, y: 12, duration: DURATION.reveal * 0.7 }, 0.1);

  if (heading) {
    split = SplitText.create(heading, { type: "lines,words", mask: "lines" });
    gsap.set(heading, { opacity: 1 });
    tl.from(
      split.words,
      { opacity: 0, yPercent: 115, duration: DURATION.hero * 0.6, stagger: 0.035 },
      0.25
    );
  }

  tl.from(subheadline, { opacity: 0, y: 14, duration: DURATION.reveal * 0.8 }, "-=0.3")
    .from(description, { opacity: 0, y: 16, duration: DURATION.reveal }, "-=0.45")
    .from(
      ctas ? Array.from(ctas.children) : null,
      { opacity: 0, y: 14, duration: DURATION.reveal, stagger: 0.1 },
      "-=0.35"
    )
    .from(
      image,
      { opacity: 0, scale: 0.94, y: 18, duration: DURATION.hero * 0.8, ease: EASE.expo },
      "-=0.6"
    )
    .from(badge, { opacity: 0, y: 10, duration: DURATION.reveal * 0.7 }, "-=0.3")
    .from(
      stats ? Array.from(stats.children) : null,
      { opacity: 0, y: 14, duration: DURATION.reveal * 0.8, stagger: 0.08 },
      "-=0.4"
    );

  tl.eventCallback("onComplete", () => split?.revert());

  return tl;
}

/** Very subtle, slow ambient drift for the hero's background glow. */
export function startAmbientFloat(target) {
  if (!target || prefersReducedMotion()) return null;

  return gsap.to(target, {
    y: 24,
    x: 12,
    duration: 7,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}
