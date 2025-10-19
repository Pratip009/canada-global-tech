"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LeftCaseStudy from "../case-study/LeftCaseStudy";

const caseStudies = [
  {
    smallHeader: "Energy",
    mainHeader:
      "Unlocked huge business growth and seed funding for a Solar Energy Provider",
    description1:
      "Developed a real-time sales management platform with analytics and collaboration to enhance operational efficiency.",
    description2:
      "Our solution streamlined the lead lifecycle, driving conversions and improving client engagement.",
    stat1Value: "40%",
    stat1Text: "Million funding achieved",
    stat2Value: "50%",
    stat2Text: "Reduction in customer acquisition cost",
    image: "/ui-ux/Energy.webp",
    gradientFrom: "#0ea5e9",
    gradientTo: "#22c55e",
  },
  {
    smallHeader: "Education & eLearning",
    mainHeader:
      "Platform Modernization enabled 3x sales growth for a Global EdTech Leader",
    description1:
      "Enhanced scalability, redefined UI/UX, and integrated adaptive learning powered by AI for personalized education.",
    description2:
      "Enabled over 1M learners to personalize their learning journey and boosted retention significantly.",
    stat1Value: "135%",
    stat1Text: "Increase in active users",
    stat2Value: "29%",
    stat2Text: "Increase in revenue",
    image: "/ui-ux/education.webp",
    gradientFrom: "#3b82f6",
    gradientTo: "#14b8a6",
  },
  {
    smallHeader: "Real Estate",
    mainHeader:
      "AI-enabled, blockchain-based platform for an Investment Management Startup",
    description1:
      "Engineered a secure, transparent platform for investment management using blockchain and predictive AI models.",
    description2:
      "Empowered investors with data-driven insights, ensuring accountability and efficiency in financial operations.",
    stat1Value: "$5M+",
    stat1Text: "Seed funding secured",
    stat2Value: "70%",
    stat2Text: "Year-on-year growth since launch",
    image: "/ui-ux/business.webp",
    gradientFrom: "#1e40af",
    gradientTo: "#16a34a",
  },
];

export default function CaseStudySlider() {
  const [index, setIndex] = useState(0);
  const total = caseStudies.length;

  const nextSlide = useCallback(
    () => setIndex((prev) => (prev + 1) % total),
    [total]
  );
  const prevSlide = useCallback(
    () => setIndex((prev) => (prev - 1 + total) % total),
    [total]
  );

  // Optional: auto-slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = caseStudies[index];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Controls */}
      <div className="absolute inset-y-0 left-3 flex items-center z-10">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-3 flex items-center z-10">
        <button
          onClick={nextSlide}
          className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Slide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <LeftCaseStudy {...current} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-3 mb-8 space-x-3">
        {caseStudies.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i
                ? "bg-gradient-to-r from-cyan-500 to-emerald-500 scale-125 shadow-md"
                : "bg-gray-300 hover:bg-gray-400 scale-100"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
