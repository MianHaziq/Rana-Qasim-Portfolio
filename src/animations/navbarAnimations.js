"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

/** Tracks whether the page has scrolled past a pixel threshold — used for the navbar's background/shadow state and the footer's back-to-top button visibility. */
export function useScrollThreshold(threshold = 8) {
  const [past, setPast] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPast(latest > threshold);
  });

  return past;
}
