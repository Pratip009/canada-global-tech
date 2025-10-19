"use client";

import { motion } from "framer-motion";

export default function VisionMissionSection() {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <section className="relative w-full bg-gradient-to-r from-[#a4b96d] via-[#4bb1a1] to-[#6a86c2] text-white py-24 px-6 md:px-16 lg:px-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Our Vision */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0.1)}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Our Vision
          </h3>
          <p className="text-base md:text-lg leading-relaxed max-w-xl">
            To be the global catalyst for digital excellence – where visionary
            design, intelligent engineering and business strategy converge to
            build the Future! To build digital solutions that unlock value,
            inspire innovation, and ultimately redefine industries.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0.3)}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Our Mission
          </h3>
          <p className="text-base md:text-lg leading-relaxed max-w-xl">
            To help businesses reimagine and redefine what is possible through
            digital innovation. Our mission is to create impactful,
            future-proof digital solutions that drive transformation, provide
            competitive edge and stand the test of time in a rapidly evolving
            world.
          </p>
        </motion.div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
    </section>
  );
}
