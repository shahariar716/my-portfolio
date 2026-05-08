"use client";

import { useEffect, useState } from "react";
import { sections, type SectionId } from "@/data/portfolio";

export function useActiveSection(defaultSection: SectionId = "home") {
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
