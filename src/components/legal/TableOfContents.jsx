import React, { useState, useEffect } from "react";
import { List, ChevronRight } from "lucide-react";

/**
 * TableOfContents Component
 * Generates a clickable table of contents from h2 headings
 * Highlights the currently visible section based on scroll position
 * 
 * @param {Object} props
 * @param {Array<{id: string, title: string}>} props.sections - Array of section objects
 */
export function TableOfContents({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsExpanded(false); // Close mobile menu after selection
    }
  };

  if (!sections || sections.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="lg:hidden flex items-center gap-2 mb-4 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:bg-white/10 transition w-full"
      >
        <List className="w-4 h-4" />
        <span>Table of Contents</span>
        <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${isExpanded ? "rotate-90" : ""}`} />
      </button>

      {/* TOC List */}
      <nav
        className={`${
          isExpanded ? "block" : "hidden"
        } lg:block mb-6 lg:mb-0`}
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
            On This Page
          </h4>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    activeSection === section.id
                      ? "bg-white/10 text-white font-medium border-l-2 border-cyan-400"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

/**
 * Helper function to generate section ID from title
 * @param {string} title - Section title
 * @returns {string} URL-friendly ID
 */
export function generateSectionId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

