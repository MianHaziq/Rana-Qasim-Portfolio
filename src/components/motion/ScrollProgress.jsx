"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin accent bar across the top of the viewport tracking read progress.
 * Springed rather than raw so it glides instead of tracking the scrollbar
 * 1:1, which reads as jittery on trackpads.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-100 h-0.5 origin-left bg-gradient-to-r from-accent via-accent to-accent/40"
    />
  );
}
