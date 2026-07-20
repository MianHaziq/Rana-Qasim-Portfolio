/**
 * Section-level Framer Motion variants (entrance/reveal only — scroll-linked
 * effects live in scrollAnimations.js, hero-specific sequencing in
 * heroAnimations.js). Re-exported here so section components import their
 * reveal variants from the animations layer rather than reaching into
 * components/motion directly.
 */
export {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  scaleIn,
  blurReveal,
  staggerContainer,
} from "@/components/motion/variants";
