import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";
import { buttonHover, buttonTap } from "@/animations/cardAnimations";

const MotionLink = motion.create(Link);

const VARIANTS = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90 shadow-sm shadow-accent/20",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:bg-surface-hover",
  ghost: "bg-transparent text-foreground hover:bg-surface-hover",
};

const SIZES = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

/** Subtly pulls the button toward the cursor on hover. No-op on touch (no mousemove events fire). */
function useMagnetic(strength = 0.25) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function onMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { style: { x: springX, y: springY }, onMouseMove, onMouseLeave };
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  icon: Icon,
  iconPosition = "right",
  disabled = false,
  magnetic = false,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200",
    "focus-visible:outline-none",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const magneticProps = useMagnetic();

  const motionProps = disabled
    ? {}
    : {
        whileHover: buttonHover,
        whileTap: buttonTap,
        transition: { duration: 0.15, ease: "easeOut" },
        ...(magnetic ? magneticProps : {}),
      };

  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon size={16} aria-hidden="true" /> : null}
      {children}
      {Icon && iconPosition === "right" ? <Icon size={16} aria-hidden="true" /> : null}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...motionProps}
          {...props}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <MotionLink href={href} className={classes} {...motionProps} {...props}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} className={classes} disabled={disabled} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
