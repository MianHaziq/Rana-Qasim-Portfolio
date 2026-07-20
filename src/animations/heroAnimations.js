"use client";

import { gsap, SplitText, EASE, DURATION, prefersReducedMotion } from "./gsapConfig";

/**
 * Builds the hero's cinematic entrance timeline: background decoration fades
 * in first, then heading/copy reveal, CTAs and social links stagger in, the
 * image frame scales in with its floating skill badges, and the scroll
 * indicator appears last. Continuous ambient motion (drifting blobs,
 * floating badges) is started separately once the intro finishes.
 */
export function buildHeroTimeline(refs) {
  const {
    bgCanvas,
    eyebrow,
    heading,
    subheadline,
    description,
    meta,
    ctas,
    social,
    image,
    badge,
    floatBadges,
    stats,
    scrollIndicator,
  } = refs;
  const reduceMotion = prefersReducedMotion();

  const targets = [
    bgCanvas,
    eyebrow,
    heading,
    subheadline,
    description,
    meta,
    ctas,
    social,
    image,
    badge,
    floatBadges,
    stats,
    scrollIndicator,
  ].filter(Boolean);

  if (reduceMotion) {
    gsap.set(targets, { opacity: 1, y: 0, scale: 1, clearProps: "all" });
    return null;
  }

  const tl = gsap.timeline({ defaults: { ease: EASE.out } });
  let split;

  if (bgCanvas) {
    tl.from(bgCanvas, { opacity: 0, duration: DURATION.hero * 1.2, ease: EASE.soft });
  }

  tl.from(eyebrow, { opacity: 0, y: 12, duration: DURATION.reveal * 0.7 }, 0.2);

  if (heading) {
    split = SplitText.create(heading, { type: "lines,words", mask: "lines" });
    gsap.set(heading, { opacity: 1 });
    tl.from(
      split.words,
      { opacity: 0, yPercent: 115, duration: DURATION.hero * 0.6, stagger: 0.035 },
      0.35
    );
  }

  tl.from(subheadline, { opacity: 0, y: 14, duration: DURATION.reveal * 0.8 }, "-=0.3")
    .from(description, { opacity: 0, y: 16, duration: DURATION.reveal }, "-=0.45")
    .from(meta, { opacity: 0, y: 12, duration: DURATION.reveal * 0.7 }, "-=0.35")
    .from(
      ctas ? Array.from(ctas.children) : null,
      { opacity: 0, y: 14, duration: DURATION.reveal, stagger: 0.1 },
      "-=0.35"
    )
    .from(
      social ? Array.from(social.children) : null,
      { opacity: 0, y: 10, duration: DURATION.reveal * 0.6, stagger: 0.06 },
      "-=0.35"
    )
    .from(
      image,
      { opacity: 0, scale: 0.94, y: 18, duration: DURATION.hero * 0.8, ease: EASE.expo },
      "-=0.7"
    )
    .from(badge, { opacity: 0, y: 10, duration: DURATION.reveal * 0.7 }, "-=0.3")
    .from(
      floatBadges ? Array.from(floatBadges.children) : null,
      { opacity: 0, scale: 0.6, duration: DURATION.reveal * 0.7, stagger: 0.12, ease: EASE.expo },
      "-=0.4"
    )
    .from(
      stats ? Array.from(stats.children) : null,
      { opacity: 0, y: 14, duration: DURATION.reveal * 0.8, stagger: 0.08 },
      "-=0.4"
    )
    .from(scrollIndicator, { opacity: 0, y: -8, duration: DURATION.reveal }, "-=0.1");

  tl.eventCallback("onComplete", () => split?.revert());

  return tl;
}

/** Continuous, independently-phased bobbing for each of a group's children (e.g. floating skill badges). */
export function startFloatingGroup(container, options = {}) {
  if (!container || prefersReducedMotion()) return null;

  const { distance = 10, baseDuration = 3.2 } = options;
  const children = Array.from(container.children);

  return children.map((child, index) =>
    gsap.to(child, {
      y: index % 2 === 0 ? distance : -distance,
      duration: baseDuration + index * 0.6,
      delay: index * 0.3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    })
  );
}
