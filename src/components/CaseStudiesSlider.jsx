"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    subtitle: "Navigating complex challenges with digital excellence.",
    title:
      "Digital Transformation of a Translation Company, fueling business growth",
    description:
      "Developed scalable middleware to enhance efficiency, ensure data security, and optimize UI/UX with advanced analytics.",
    stats: [
      { value: "3x", label: "Improvement in customer satisfaction survey" },
      { value: "35%", label: "Reduction in project delivery timelines" },
    ],
    image: "/banner/education.webp",
  },
  {
    id: 2,
    subtitle: "Empowering smarter decisions through automation.",
    title: "AI-powered Analytics Platform for a Global Retail Chain",
    description:
      "Delivered real-time insights engine integrating sales, logistics, and customer data to accelerate decision-making.",
    stats: [
      { value: "2.5x", label: "Faster decision-making" },
      { value: "50%", label: "Reduction in operational inefficiencies" },
    ],
    image: "/banner/Feature.webp",
  },
  {
    id: 3,
    subtitle: "Modernizing legacy systems for performance and scalability.",
    title: "Cloud Migration for a Financial Services Company",
    description:
      "Migrated critical systems to cloud infrastructure, ensuring 99.99% uptime and robust disaster recovery.",
    stats: [
      { value: "99.99%", label: "System uptime post-migration" },
      { value: "40%", label: "Cost savings achieved" },
    ],
    image: "/banner/imh.webp",
  },
];

export default function CaseStudiesSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* CASE STUDY LABEL */}
      <div className="absolute top-32 right-0 text-gray-300 text-sm tracking-[0.25em] rotate-90 origin-top-right hidden md:block">
        #case studies
      </div>

      <div className="max-w-[1600px] mx-auto py-24 px-6 md:px-12 lg:px-20 relative">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="grid lg:grid-cols-2 gap-16 items-center"
                >
                  {/* LEFT TEXT CONTENT */}
                  <div className="relative z-10 space-y-5">
                    <p className="text-indigo-600 font-mono text-sm uppercase tracking-widest">
                      {slide.subtitle}
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                      {slide.title}
                    </h2>

                    <p className="text-gray-700 text-lg mt-6 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-10 mt-10">
                      {slide.stats.map((stat, i) => (
                        <div key={i}>
                          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                            {stat.value}
                          </h3>
                          <p className="text-gray-500 mt-1 text-sm">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="block mt-6 text-sm font-semibold text-indigo-600 hover:underline"
                    >
                      View Case Study →
                    </a>

                    <button className="mt-10 relative inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all overflow-hidden group">
                      <span className="relative z-10">Our Success Stories</span>
                      <ChevronRight className="w-4 h-4 relative z-10" />
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <motion.div
                    className="relative w-full h-72 sm:h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 md:gap-8 z-10">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 md:p-4 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 md:p-4 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-4 sm:bottom-6 right-1/2 translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, i) => (
          <motion.span
            key={i}
            className={`block w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              i === current ? "bg-indigo-600 scale-125" : "bg-gray-300"
            }`}
            layout
          />
        ))}
      </div>
    </section>
  );
}
