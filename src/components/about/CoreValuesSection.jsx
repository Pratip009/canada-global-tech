"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CoreValuesSection() {
  const values = [
    {
      title: "Collaborative",
      image: "/about/collab.webp",
      description:
        "We work as one—with our teams, our clients, and our partners. Great digital outcomes are built on trust, transparency and shared ownership.",
    },
    {
      title: "Driven",
      image: "/about/driven.webp",
      description:
        "Every solution we craft reflects our commitment to thoughtful design and technical precision. We never settle—we build it right.",
    },
    {
      title: "Strategic",
      image: "/about/strategic.webp",
      description:
        "We challenge assumptions, question the obvious, and think ahead. Our work is rooted in strategy but inspired by what is possible through AI and emerging tech.",
    },
    {
      title: "Reliable",
      image: "/about/reliable.webp",
      description:
        "We deliver what we promise on time, with quality, and without compromise. Clients trust us because we take ownership, every step of the way.",
    },
    {
      title: "Human-centric",
      image: "/about/human.webp",
      description:
        "Whether designing a user journey or scaling an enterprise platform, we keep real people at the center. Empathy fuels everything we create.",
    },
    {
      title: "Committed",
      image: "/about/value.webp",
      description:
        "Your success is our mission. We measure our impact by the value we unlock for you — through growth, innovation, and long-term results.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-amber-400 to-purple-400 text-transparent bg-clip-text text-center md:text-left"
      >
        Our Core Values
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={() => handleTouch(index)}
            className="relative group overflow-hidden rounded-none cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={value.image}
              alt={value.title}
              width={800}
              height={600}
              className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                activeIndex === index
                  ? "bg-black/95"
                  : "bg-black/60 group-hover:bg-black/95"
              }`}
            />

            {/* Text Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              {/* Title */}
              <h3
                className={`font-extrabold uppercase tracking-tight z-10 transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
                ${activeIndex === index
                  ? "text-3xl translate-y-[-10px]"
                  : "text-4xl md:text-5xl group-hover:text-3xl group-hover:-translate-y-5"
                }`}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className={`max-w-md text-sm md:text-base text-gray-200 leading-relaxed z-10 mt-4 transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
                ${activeIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              >
                {value.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
