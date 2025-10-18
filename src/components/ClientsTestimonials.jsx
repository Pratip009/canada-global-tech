"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/mcgrawhill.svg",
  "/logos/nbcu.svg",
  "/logos/unitednations.svg",
  "/logos/ct.png",
  "/logos/cqfluency.svg",
  "/logos/openreel.svg",
  "/logos/drbatras.webp",
  "/logos/eshipper.svg",
  "/logos/bluesky.svg",
];

const testimonials = [
  {
    name: "Daniel Milczarski",
    title: "Chief Technology Officer (CQ Fluency)",
    quote: "CQ Fluency helped us achieve unmatched scalability.",
    thumbnail: "/thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/8LSt8_11wbQ",
  },
  {
    name: "Sarah Thompson",
    title: "VP of Engineering (McGraw Hill)",
    quote: "They transformed our product pipeline with AI-driven insights.",
    thumbnail: "/thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/8LSt8_11wbQ",
  },
  {
    name: "Michael Green",
    title: "Head of Operations (NBCU)",
    quote: "Reliable, modern, and innovative tech partnership.",
    thumbnail: "/thumbnail2.jpg",
    videoUrl: "https://www.youtube.com/embed/8LSt8_11wbQ",
  },
];

export default function ClientsTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const active = testimonials[activeIndex];

  return (
    <section className="relative w-full bg-[#080d0e] text-white py-28 overflow-hidden">
      {/* Gradient Blur Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-lime-900/20 blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center md:items-start overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mb-16"
        >
          <h3 className="text-gray-400 font-medium text-lg tracking-wide mb-4 md:mb-0 text-center md:text-left">
            Some Accounts & Testimonials
          </h3>

          <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-right leading-tight">
            What our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-300">
              clients
            </span>{" "}
            say about us
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-10 md:gap-12 items-center w-full overflow-hidden">
          {/* Left: Logos */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-[#0f1718] to-[#1a2324] rounded-3xl border border-white/10 shadow-2xl p-8 sm:p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 place-items-center backdrop-blur-md overflow-hidden w-full"
          >
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.12,
                  rotate: 1.5,
                  boxShadow: "0 0 20px rgba(163, 230, 53, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="relative w-24 h-14 sm:w-28 sm:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={logo}
                  alt="client logo"
                  fill
                  className="object-contain p-3 opacity-80 hover:opacity-100 transition-all"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-[#0f1718] to-[#1a2324] rounded-3xl border border-white/10 overflow-hidden shadow-2xl w-full"
          >
            {/* Video Section */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden">
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <iframe
                      src={`${active.videoUrl}?autoplay=1`}
                      title={active.name}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    />
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="absolute top-4 right-4 bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/90 transition-all"
                    >
                      ✕
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 group"
                  >
                    <Image
                      src={active.thumbnail}
                      alt={active.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#84cc16"
                          viewBox="0 0 24 24"
                          className="w-10 h-10"
                        >
                          <path d="M8.25 6.75v10.5l7.5-5.25-7.5-5.25z" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Text Section */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-2xl font-semibold text-white">
                    {active.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{active.title}</p>
                  <p className="text-lime-400 font-medium mt-4 text-base italic leading-relaxed">
                    “{active.quote}”
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Slider Dots */}
              <div className="flex items-center gap-3 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      setIsPlaying(false);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      i === activeIndex
                        ? "w-8 h-2 bg-lime-400"
                        : "w-3 h-2 bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
