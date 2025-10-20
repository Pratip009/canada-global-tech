"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WebsiteProcessProgress({
  topHeading = "Best Practices",
  mainHeading = "Setting quality and performance benchmarks in web development",
}) {
  const steps = [
    {
      title: "PROCESS",
      description:
        "Agile development processes combined with DevOps best practices form the core of our web development approach. We adopt a quality-first mindset to deliver dependable, scalable results.",
      image: "/software/website/process.webp",
    },
    {
      title: "CONSULTING",
      description:
        "We analyze your business goals and technology stack to propose a roadmap that maximizes ROI, scalability, and long-term sustainability.",
      image: "/software/website/consulting.webp",
    },
    {
      title: "DESIGN",
      description:
        "Our design team creates engaging user interfaces backed by UX research, ensuring your product is both beautiful and intuitive.",
      image: "/software/website/Design.webp",
    },
    {
      title: "DEVELOPMENT",
      description:
        "We deliver clean, efficient code with an emphasis on performance, security, and maintainability across web and mobile platforms.",
      image: "/software/website/development.webp",
    },
    {
      title: "TESTING",
      description:
        "Comprehensive QA and testing at every stage ensure a flawless, high-performing product ready for deployment.",
      image: "/software/website/testing.webp",
    },
    {
      title: "DEVOPS",
      description:
        "Continuous integration, monitoring, and deployment pipelines that keep your project stable and scalable.",
      image: "/software/website/devops.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Headings */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h4 className="text-[#1AABC1]/80 font-mono text-xs sm:text-sm tracking-[0.25em] mb-4 uppercase">
          {topHeading}
        </h4>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-[#1AABC1] to-gray-900 bg-clip-text text-transparent leading-tight">
          {mainHeading}
        </h2>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* LEFT: Image */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[350px] md:min-h-[450px]">
          <motion.div
            key={steps[activeIndex].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={steps[activeIndex].image}
              alt={steps[activeIndex].title}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1AABC1]/25 to-transparent" />
        </div>

        {/* MIDDLE (hidden on small) */}
        <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
          <div className="rotate-180 [writing-mode:vertical-rl]">
            <h1 className="text-[1.6rem] font-black tracking-[0.1em] bg-gradient-to-t from-[#1AABC1] to-gray-700 bg-clip-text text-transparent opacity-90 uppercase leading-[1.2]">
              CANADA
              <br />
              GLOBAL
              <br />
              TECH
            </h1>
          </div>
        </div>

        {/* RIGHT: Steps */}
        <div className="lg:col-span-5 bg-[#02171a] text-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col shadow-2xl relative">
          {/* Progress Bar (adjust for mobile) */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-10 bottom-10 w-[2px] sm:w-[3px] bg-white/20">
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"
              style={{ transformOrigin: "top" }}
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: (activeIndex + 1) / steps.length,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {/* Steps List */}
          <div className="relative pl-10 sm:pl-14 space-y-8 sm:space-y-10 pt-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="flex items-center gap-3 sm:gap-4 cursor-pointer group py-2"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Dot */}
                  <motion.div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      index <= activeIndex
                        ? "bg-white border-white scale-110 shadow-lg"
                        : "border-white/60 group-hover:border-white bg-transparent"
                    }`}
                  >
                    {index <= activeIndex && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" />
                    )}
                  </motion.div>

                  {/* Step Number */}
                  <span
                    className={`text-xs sm:text-sm font-mono w-6 ${
                      index === activeIndex
                        ? "text-yellow-300"
                        : "text-white/60"
                    }`}
                  >
                    {index + 1}
                  </span>

                  {/* Title */}
                  <h4
                    className={`text-lg sm:text-2xl font-extrabold uppercase tracking-wide transition-all duration-300 ${
                      index === activeIndex
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>

                {/* Description */}
                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                      className="text-white text-sm sm:text-base leading-relaxed mt-3 pl-10 sm:pl-12 font-light overflow-hidden"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
