"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP, EASE, prefersReducedMotion } from "@/animations/gsapConfig";

/**
 * Full-screen intro overlay shown on first paint. A masked reveal of the
 * initials plays alongside a counter and an accent progress bar; once it
 * fills, the overlay splits and slides away to reveal the page beneath.
 *
 * Rendered on top of everything via a high z-index fixed layer. It removes
 * itself from the DOM after the exit finishes so it never traps clicks.
 */
export default function Preloader({ image, name = "", label = "Portfolio" }) {
  const rootRef = useRef(null);
  const panelTopRef = useRef(null);
  const panelBottomRef = useRef(null);
  const markRef = useRef(null);
  const barRef = useRef(null);
  const counterRef = useRef(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      // Lock scroll while the intro plays.
      document.body.style.overflow = "hidden";
      const unlock = () => {
        document.body.style.overflow = "";
      };

      if (prefersReducedMotion()) {
        unlock();
        setDone(true);
        return;
      }

      const counter = { value: 0 };
      const tl = gsap.timeline({
        defaults: { ease: EASE.out },
        onComplete: () => {
          unlock();
          setDone(true);
        },
      });

      tl.from(markRef.current, {
        scale: 0.6,
        opacity: 0,
        duration: 0.9,
        ease: EASE.expo,
      })
        .to(
          barRef.current,
          { scaleX: 1, duration: 1.4, ease: "power2.inOut" },
          0.1
        )
        .to(
          counter,
          {
            value: 100,
            duration: 1.4,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = `${Math.round(counter.value)}`;
              }
            },
          },
          0.1
        )
        // Brief hold, then the reveal.
        .to(markRef.current, { scale: 1.15, opacity: 0, duration: 0.7, ease: EASE.expo }, "+=0.15")
        .to([counterRef.current, barRef.current], { opacity: 0, duration: 0.4 }, "<")
        .to(
          panelTopRef.current,
          { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
          "-=0.2"
        )
        .to(
          panelBottomRef.current,
          { yPercent: 100, duration: 0.9, ease: "power4.inOut" },
          "<"
        );

      return () => {
        unlock();
      };
    },
    { scope: rootRef }
  );

  if (done) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
    >
      {/* Two stacked panels that part to reveal the page. */}
      <div ref={panelTopRef} className="absolute inset-x-0 top-0 h-1/2 bg-background" />
      <div ref={panelBottomRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-background" />

      {/* Center content sits above the panels. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
        <div
          ref={markRef}
          className="relative size-28 overflow-hidden rounded-full border-2 border-surface shadow-2xl shadow-accent/20 ring-1 ring-inset ring-accent/40 sm:size-36"
        >
          <Image
            src={image.src}
            alt={name}
            fill
            priority
            sizes="144px"
            className="object-cover"
          />
        </div>

        <div className="flex w-40 flex-col items-center gap-3 sm:w-56">
          <div className="h-px w-full overflow-hidden bg-border">
            <div
              ref={barRef}
              className="h-full w-full origin-left scale-x-0 bg-accent"
            />
          </div>
          <div className="flex w-full items-center justify-between text-xs font-medium text-muted-foreground">
            <span className="uppercase tracking-[0.2em]">{label}</span>
            <span>
              <span ref={counterRef}>0</span>
              <span className="text-accent">%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
