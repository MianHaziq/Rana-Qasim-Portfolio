"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./variants";

export default function Reveal({
  children,
  variants = fadeInUp,
  className,
  as = "div",
  viewportMargin = "-80px",
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={variants}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
