"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "./variants";

export default function Stagger({
  children,
  className,
  staggerChildren = 0.12,
  delayChildren = 0,
  viewportMargin = "-80px",
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={staggerContainer(staggerChildren, delayChildren)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
