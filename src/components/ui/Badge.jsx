import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export default function Badge({ children, className, icon: Icon }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06, borderColor: "var(--color-accent)" }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {Icon ? <Icon size={13} aria-hidden="true" /> : null}
      {children}
    </motion.span>
  );
}
