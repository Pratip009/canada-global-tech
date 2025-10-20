"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Layout,
  Monitor,
  Code,
  FileCheck,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function WebsiteProcessSection({
  topHeading = "Our Process Involvement",
  mainHeading = "An introduction to our web development process",
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const steps = [
    {
      id: "01",
      title: "Discovery Workshop",
      icon: ClipboardList,
      description:
        "We begin by understanding your business objectives and analyzing your market landscape, ensuring our strategy aligns perfectly with your goals and user expectations.",
    },
    {
      id: "02",
      title: "Predictive Planning",
      icon: Layout,
      description:
        "We establish a detailed roadmap, aligning design and technology to ensure efficiency, scalability, and clarity at every stage of development.",
    },
    {
      id: "03",
      title: "IA & UX/UI Design",
      icon: Monitor,
      description:
        "We craft seamless, accessible, and brand-consistent digital experiences focused on user satisfaction and business results.",
    },
    {
      id: "04",
      title: "Development",
      icon: Code,
      description:
        "Our development team delivers clean, modular code that integrates with APIs and backend systems to ensure high performance and reliability.",
    },
    {
      id: "05",
      title: "Testing",
      icon: FileCheck,
      description:
        "We perform thorough testing across devices and environments, ensuring every interaction works flawlessly before launch.",
    },
    {
      id: "06",
      title: "Support & Maintenance",
      icon: Settings,
      description:
        "We continuously monitor, optimize, and enhance your website's performance with 24/7 proactive support and maintenance.",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-20 px-6 md:px-12">
      {/* Headings */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h3 className="text-white/80 text-sm md:text-base uppercase tracking-[0.2em] mb-3">
          {topHeading}
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-[#1AABC1] to-white bg-clip-text text-transparent">
          {mainHeading}
        </h2>
      </div>

      {/* Process Cards */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch bg-[#0b0b0b] border border-gray-800/70 rounded-3xl overflow-hidden backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              layout
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`relative flex flex-col justify-between items-center text-center cursor-pointer border-t md:border-t-0 md:border-l 
              h-[500px] sm:h-[420px] transition-all duration-500 ${
                isActive
                  ? "flex-[2] bg-[#1AABC1] shadow-[0_0_25px_rgba(26,171,193,0.4)] border border-[#1AABC1]/80 border-r-0"
                  : "flex-1 bg-[#090909] hover:bg-[#101010] border-gray-800/70"
              }`}
            >
              <div className="p-8 flex flex-col items-center justify-between w-full h-full">
                {/* Icon + Title */}
                <motion.div
                  layout
                  className="flex flex-col items-center justify-start flex-1 w-full"
                >
                  <motion.div
                    animate={{ scale: isActive ? 1.15 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className={`w-10 h-10 mb-4 transition-all duration-500 ${
                        isActive 
                          ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" 
                          : "text-gray-400"
                      }`}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  <span
                    className={`text-xs md:text-sm font-medium mb-1 tracking-wide transition-colors duration-500 ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.id}
                  </span>
                  <h4
                    className={`text-lg md:text-xl font-semibold mb-2 transition-colors duration-500 ${
                      isActive ? "text-white font-bold" : "text-gray-300"
                    }`}
                  >
                    {step.title}
                  </h4>

                  {/* DELAYED DESCRIPTION - SMOOTH IN & OUT */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="desc"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0 
                        }}
                        exit={{ 
                          opacity: 0, 
                          y: 10,
                          transition: { 
                            duration: 0.2, 
                            delay: 0 
                          }
                        }}
                        transition={{ 
                          duration: 0.3, 
                          ease: "easeOut",
                          delay: 0.4
                        }}
                        className="w-full mt-4"
                      >
                        <p className="text-white text-sm md:text-[15px] leading-relaxed overflow-hidden h-[140px] px-1 font-medium">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isActive && <div className="h-[140px]" />}
                </motion.div>

                {/* Arrow */}
                <motion.div
                  animate={{
                    y: isActive ? -4 : 0,
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-white border-2 border-white text-[#1AABC1] shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                      : "border-2 border-gray-700 text-white"
                  }`}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Note */}
      <p className="text-gray-400/70 text-sm italic mt-8 max-w-3xl mx-auto text-center md:text-left leading-relaxed">
        ** Our process evolves with every project to suit its specific goals, ensuring precision,
        agility, and creative excellence at every phase.
      </p>

      {/* Button */}
      <div className="mt-10 flex justify-center md:justify-end max-w-6xl mx-auto">
        <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-[#1AABC1] transition duration-300 font-medium">
          Our Process Details <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}