"use client";

import { useRef } from "react";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import { useGSAP } from "@/animations/gsapConfig";
import { timelineItemVariant, createLineDraw } from "@/animations/timelineAnimations";

export default function ExperienceTimeline({ items }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => createLineDraw(lineRef.current, containerRef.current), {
    scope: containerRef,
  });

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
      <div ref={lineRef} className="absolute left-0 top-0 bottom-0 w-px bg-accent" aria-hidden="true" />

      <Stagger as="ol" className="flex flex-col gap-8 sm:gap-10" staggerChildren={0.15}>
        {items.map((item) => (
          <Reveal as="li" key={item.id} variants={timelineItemVariant} className="relative pl-8">
            <span
              aria-hidden="true"
              className="absolute -left-1.25 top-1.5 size-2.5 rounded-full bg-accent"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                {item.role}{" "}
                <span className="font-normal text-muted-foreground">
                  &middot; {item.company}
                </span>
              </h3>
              <span className="text-sm text-muted-foreground">
                {item.startDate} &ndash; {item.current ? "Present" : item.endDate}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {item.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </Stagger>
    </div>
  );
}
