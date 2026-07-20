"use client";

import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsapConfig";

/**
 * Very subtle parallax: the target drifts a small number of pixels as the
 * page scrolls past its container. Kept intentionally minimal so it reads
 * as depth, not motion sickness.
 */
export function createParallax(target, container, { distance = 40 } = {}) {
  if (!target || !container || prefersReducedMotion()) return null;

  return gsap.to(target, {
    y: distance,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.6,
    },
  });
}

/**
 * Draws a vertical line from top to bottom as the container scrolls
 * through the viewport — used behind Experience/Education timelines.
 */
export function createLineDraw(target, container) {
  if (!target || !container) return null;

  if (prefersReducedMotion()) {
    gsap.set(target, { scaleY: 1 });
    return null;
  }

  gsap.set(target, { scaleY: 0, transformOrigin: "top" });

  return gsap.to(target, {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 0.5,
    },
  });
}

export { ScrollTrigger };
