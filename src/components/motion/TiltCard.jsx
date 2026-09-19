"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Tilts its children toward the cursor in 3D. Pointer-driven, so it is inert
 * on touch (no pointermove fires without a hovering pointer) and the spring
 * simply rests at zero.
 */
export default function TiltCard({ children, className, max = 9 }) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const config = { stiffness: 180, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), config);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), config);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
