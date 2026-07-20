"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
}

/** Shared easing curves — natural accel/decel, no linear motion. */
export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  soft: "power1.out",
  expo: "expo.out",
};

/** Shared durations (seconds) matching the project's motion scale. */
export const DURATION = {
  fast: 0.2,
  reveal: 0.6,
  hero: 1.1,
};

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, useGSAP, ScrollTrigger, SplitText };
