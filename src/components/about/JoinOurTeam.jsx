"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JoinOurTeam() {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-r from-cyan-600 via-teal-400 to-lime-300 text-white overflow-hidden">
      {/* Subtle overlay for smoother tone */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Join Our Team
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-xl">
            Shape the future with ideas, new technologies, and innovation. Join
            the Canada Global Tech team.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/careers"
            className="bg-white text-black font-medium px-8 py-4 rounded-full flex items-center gap-2 hover:gap-3 hover:shadow-lg transition-all duration-300"
          >
            View Open Positions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
