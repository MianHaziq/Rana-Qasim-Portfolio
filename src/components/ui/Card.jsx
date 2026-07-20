import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { cardHover } from "@/animations/cardAnimations";

export default function Card({
  children,
  className,
  as = "div",
  interactive = false,
  ...props
}) {
  const classes = cn(
    "rounded-2xl border border-border bg-surface p-6 sm:p-8",
    "transition-colors duration-200",
    interactive && "hover:border-border-strong",
    className
  );

  if (interactive) {
    const MotionTag = motion[as] ?? motion.div;
    return (
      <MotionTag
        className={classes}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHover}
        {...props}
      >
        {children}
      </MotionTag>
    );
  }

  const Tag = as;
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
