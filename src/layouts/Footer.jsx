"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import profile from "@/data/profile";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { fadeIn } from "@/animations/sectionAnimations";
import { useScrollThreshold } from "@/animations/navbarAnimations";
import { getIcon } from "@/utils/iconMap";

export default function Footer() {
  const year = new Date().getFullYear();
  const showBackToTop = useScrollThreshold(600);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-border">
      <Reveal variants={fadeIn}>
        <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              &copy; {year} All rights reserved.
            </p>
          </div>

          <nav aria-label="Social links" className="flex items-center gap-3">
            {profile.social.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  {Icon ? <Icon size={16} aria-hidden="true" /> : null}
                </motion.a>
              );
            })}
          </nav>
        </Container>
      </Reveal>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 12, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.8 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg shadow-black/10"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </footer>
  );
}
