"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import profile from "@/data/profile";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useScrollThreshold } from "@/animations/navbarAnimations";
import { staggerContainer, fadeInUp } from "@/animations/sectionAnimations";
import { cn } from "@/utils/cn";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const sectionIds = profile.navigation.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds);
  const scrolled = useScrollThreshold(8);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "border-border/80 bg-background/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-18 items-center justify-between py-4">
          <Link
            href="#top"
            aria-label={`${profile.name} — back to top`}
            className="group flex items-center gap-2.5"
          >
            <span className="relative size-10 shrink-0 overflow-hidden rounded-full border border-border ring-2 ring-transparent transition-all duration-200 group-hover:ring-accent/50">
              <Image
                src={profile.image.src}
                alt=""
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <span className="text-base font-semibold tracking-tight text-foreground">
              {profile.name}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {profile.navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground",
                  activeId === item.id && "text-foreground"
                )}
              >
                {activeId === item.id ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button href="#contact" size="md">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              ref={triggerRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen(true)}
              className="relative flex size-11 items-center justify-center rounded-full border border-border text-foreground"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      {/* Rendered as a sibling, not a header descendant: the header's
          backdrop-blur establishes a containing block that would otherwise
          break this element's `fixed inset-0` viewport sizing. */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 overflow-hidden bg-background lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
            >
              <div className="h-72 w-96 rounded-full bg-accent/15 blur-[100px]" />
            </div>

            <Container className="flex h-18 items-center justify-between border-b border-border py-4">
              <span className="flex items-center gap-2.5">
                <span className="relative size-10 shrink-0 overflow-hidden rounded-full border border-border">
                  <Image
                    src={profile.image.src}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
                <span className="text-base font-semibold tracking-tight text-foreground">
                  {profile.name}
                </span>
              </span>
              <motion.button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.92 }}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex size-11 items-center justify-center rounded-full border border-border text-foreground"
              >
                <X size={18} aria-hidden="true" />
              </motion.button>
            </Container>
            <motion.nav
              aria-label="Mobile"
              className="flex flex-col gap-1.5 px-6 pt-6"
              variants={staggerContainer(0.06, 0.1)}
              initial="hidden"
              animate="visible"
            >
              {profile.navigation.map((item) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-4 text-lg font-medium transition-colors duration-200",
                      activeId === item.id
                        ? "bg-surface text-foreground"
                        : "text-muted-foreground hover:bg-surface-hover hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeInUp} className="pt-4">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-accent px-4 py-4 text-center text-base font-medium text-accent-foreground"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
