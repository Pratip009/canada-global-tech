"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DiscoverySection from "./DiscoverySection";
import PlanningSection from "./PlanningSection";
import DesignSection from "./DesignSection";
import DevelopmentSection from "./DevelopmentSection";
import TestingSection from "./TestingSection";
import MaintenanceSection from "./MaintenenceSection";
import { Menu, X } from "lucide-react";

export default function ProcessLayout() {
  const sections = [
    { id: "discovery", label: "Discovery" },
    { id: "planning", label: "Planning" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "testing", label: "Testing" },
    { id: "maintenance", label: "Maintenance" },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const sectionRefs = useRef({});

  sectionRefs.current = sections.reduce((acc, section) => {
    acc[section.id] = acc[section.id] || useRef(null);
    return acc;
  }, {});

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const navOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const handleScrollTo = (id) => {
    sectionRefs.current[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = sectionRefs.current[section.id]?.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.4 &&
            rect.bottom >= window.innerHeight * 0.4
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full bg-white">
      {/* Sticky Navigation Bar */}
      <motion.nav
        style={{ opacity: navOpacity }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center px-4 md:px-10 py-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScrollTo(section.id)}
                className={`relative font-bold text-lg uppercase tracking-wide transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 absolute right-5 top-4"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-white border-t border-gray-100 md:hidden"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScrollTo(section.id)}
                className={`py-4 px-6 text-center text-lg font-semibold uppercase tracking-wide transition-all ${
                  activeSection === section.id
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {section.label}
              </button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Section Wrapper - No Gaps */}
      <div className="space-y-0">
        <section ref={sectionRefs.current.discovery} id="discovery" className="min-h-screen">
          <DiscoverySection />
        </section>

        <section ref={sectionRefs.current.planning} id="planning" className="min-h-screen">
          <PlanningSection />
        </section>

        <section ref={sectionRefs.current.design} id="design" className="min-h-screen">
          <DesignSection />
        </section>

        <section ref={sectionRefs.current.development} id="development" className="min-h-screen">
          <DevelopmentSection />
        </section>

        <section ref={sectionRefs.current.testing} id="testing" className="min-h-screen">
          <TestingSection />
        </section>

        <section ref={sectionRefs.current.maintenance} id="maintenance" className="min-h-screen">
          <MaintenanceSection />
        </section>
      </div>
    </div>
  );
}
