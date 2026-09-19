"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subscribes to a media query without ever calling setState from an effect,
 * so capability changes (plugging in a mouse, toggling reduced-motion) are
 * picked up as external-store updates rather than cascading renders.
 */
function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false // server: assume no fine pointer, so nothing renders until hydration
  );
}

/**
 * Soft accent light that trails the cursor, plus a tighter ring that lags
 * slightly behind it. Mounted only for devices with a real cursor and skipped
 * under reduced-motion, so touch users never pay for a listener that can't fire.
 */
export default function CursorGlow() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reducedMotion;

  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const haloX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const haloY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });
  const ringX = useSpring(x, { stiffness: 380, damping: 28, mass: 0.3 });
  const ringY = useSpring(y, { stiffness: 380, damping: 28, mass: 0.3 });

  useEffect(() => {
    if (!enabled) return;

    function handleMove(event) {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    }
    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-90">
      <motion.div
        style={{ x: haloX, y: haloY }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute -ml-40 -mt-40 size-80 rounded-full bg-accent/18 blur-[70px]"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute -ml-3 -mt-3 size-6 rounded-full border border-accent/50"
      />
    </div>
  );
}
