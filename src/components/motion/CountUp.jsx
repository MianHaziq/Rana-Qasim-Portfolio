"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

/**
 * Counts from zero up to `value` the first time it scrolls into view.
 *
 * The final value is what renders server-side and what stays in the DOM for
 * assistive tech and no-JS readers — the animation only ever overwrites
 * textContent on the client, so there is no hydration mismatch and no
 * flash of "0" if scripting is unavailable.
 */
export default function CountUp({ value, suffix = "", duration = 1.6, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
