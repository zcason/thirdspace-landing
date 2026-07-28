import React, { useEffect, useId, useState } from "react";
import { ChevronRight, List } from "lucide-react";

export function TableOfContents({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isExpanded, setIsExpanded] = useState(false);
  const contentsId = useId();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const element = document.getElementById(sections[index].id);

        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[index].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    setIsExpanded(false);

    window.requestAnimationFrame(() => {
      const element = document.getElementById(id);

      if (!element) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });
  };

  if (!sections || sections.length === 0) return null;

  return (
    <div className="legal-toc">
      <button
        type="button"
        className="legal-toc__toggle"
        onClick={() => setIsExpanded((value) => !value)}
        aria-expanded={isExpanded}
        aria-controls={contentsId}
      >
        <List aria-hidden="true" />
        <span>On this page</span>
        <ChevronRight aria-hidden="true" />
      </button>

      <nav
        id={contentsId}
        className="legal-toc__panel"
        data-expanded={isExpanded}
        aria-label="On this page"
      >
        <p>On this page</p>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-current={activeSection === section.id ? "location" : undefined}
                title={section.title}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function generateSectionId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
