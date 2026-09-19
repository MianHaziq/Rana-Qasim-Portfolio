"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Cycles through a list of role/specialism phrases in the hero.
 *
 * The first entry renders on the server, so the headline is never empty
 * before hydration and crawlers still see real copy. Under reduced-motion
 * the rotation is skipped entirely and that first entry simply stays put.
 */
export default function RoleRotator({ items, interval = 2800, className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={className}>
      {/* Reserves the widest phrase's width so the line never reflows as the
          text swaps — the invisible copy sets the box, the animated one sits
          on top of it. */}
      <span className="invisible block" aria-hidden="true">
        {items.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      <span className="absolute inset-0 flex items-center justify-center lg:justify-start">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block whitespace-nowrap bg-gradient-to-r from-accent via-accent to-foreground bg-clip-text text-transparent"
          >
            {items[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
