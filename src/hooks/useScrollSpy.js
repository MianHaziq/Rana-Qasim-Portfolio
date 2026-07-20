"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, options = { rootMargin: "-45% 0px -50% 0px" }) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
