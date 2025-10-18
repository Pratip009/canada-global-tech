"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years in Service", value: 15, text: "EXPERIENCE OF YEARS • " },
  { label: "Global Clients", value: 300, text: "TOTAL SATISFIED CUSTOMERS • " },
  { label: "Tech Experts", value: 250, text: "DRIVING TECH EXCELLENCE • " },
];

export default function DigitalChangeCTA() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const step = end / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setCounts((prev) => {
          const copy = [...prev];
          copy[i] = Math.floor(start);
          return copy;
        });
      }, 16);
    });
  }, []);

  return (
    <section className="relative w-full text-white py-24 px-6 md:px-10 overflow-hidden">
      {/* 🌌 Animated Blue-Red Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#0a0f2c,_#1b0033,_#330011,_#0d1b4c)] bg-[length:400%_400%] animate-blue-red-gradient" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Text Section */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Step Into The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-400">
              Future
            </span>{" "}
            of Digital Excellence
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            We help visionary brands scale through innovation and precision.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Start Your Journey →
          </button>
        </div>

        {/* ✅ Fixed Right Circular Stats */}
        <div className="flex flex-col sm:flex-row md:flex-row md:flex-nowrap justify-center md:justify-end items-center gap-10 md:gap-12 w-full md:w-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 flex-shrink-0 flex flex-col items-center justify-center"
            >
              {/* 🔥 Glow Behind Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 via-pink-400/10 to-transparent blur-2xl" />

              {/* 🔁 Circular Rotating Text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  {Array.from(stat.text).map((char, index) => {
                    const angle = (index / stat.text.length) * 360;
                    return (
                      <span
                        key={index}
                        className="absolute text-[10px] sm:text-[11px] font-bold uppercase tracking-[2.5px] text-gray-400"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `rotate(${angle}deg) translate(80px) rotate(${-angle}deg)`,
                          transformOrigin: "center",
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>
              </motion.div>

              {/* Center Number + Label */}
              <div className="relative z-10 text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                  {counts[i]}+
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🎨 Background Gradient Animation */}
      <style jsx>{`
        @keyframes blue-red-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-blue-red-gradient {
          animation: blue-red-gradient 10s ease infinite;
        }
      `}</style>
    </section>
  );
}
