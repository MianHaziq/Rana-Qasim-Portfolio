"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

export default function Textarea({ id, label, error, className, rows = 5, ...props }) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <motion.textarea
        id={id}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        whileFocus={{ scale: 1.005 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={cn(
          "resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground",
          "placeholder:text-muted-foreground/70 transition-colors duration-200",
          "focus-visible:border-accent",
          error && "border-red-500/70",
          className
        )}
        {...props}
      />
      <AnimatePresence>
        {error ? (
          <motion.p
            id={describedBy}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="text-xs text-red-500"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
