"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCommunicationStructure() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      title: "Daily Scrum Standup",
      image: "/process/scrum.webp",
      description:
        "Align with your team daily to discuss progress, blockers, and plans for the day.",
      tag: "Mon - Fri | 30 minutes",
    },
    {
      title: "Weekly Review",
      image: "/process/review.webp",
      description:
        "Check with your cross-functional team every week to review project progress, address concerns, and plan the next sprint.",
      tag: "Every Week | 45 minutes",
    },
    {
      title: "Sprint Delivery",
      image: "/process/delivery.webp",
      description:
        "Deliver sprint outcomes, share progress with stakeholders, and align on next steps.",
      tag: "Every 2 Weeks | 1 hour",
    },
    {
      title: "Code Reviews",
      image: "/process/reviews.webp",
      description:
        "Ensure code quality, maintain standards, and encourage knowledge sharing across the dev team.",
      tag: "Ongoing | Collaborative",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight font-[poppins]">
          Project Communication
        </h2>
        <h3 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-green-400 to-teal-500 bg-clip-text text-transparent mt-1 font-[poppins]">
          Structure
        </h3>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-[poppins]">
          A well-defined communication structure ensures clarity, transparency,
          and seamless collaboration across teams.
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-col md:flex-row gap-8 mb-10 min-h-[550px] transition-all">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex-1 flex flex-col items-center group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              flex:
                hoveredIndex === null ? 1 : hoveredIndex === index ? 1.7 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-3xl w-full h-80 md:h-96 shadow-lg transition-all duration-700 ease-out group cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className={`object-cover w-full h-full transition-all duration-700 ease-out ${
                  hoveredIndex === index
                    ? "scale-110 brightness-100"
                    : "scale-100 brightness-95"
                }`}
              />

              {/* Gradient Mask */}
              <div
                className={`absolute inset-0 transition-all duration-700 bg-gradient-to-t ${
                  hoveredIndex === index
                    ? "from-black/20 via-black/10 to-transparent"
                    : "from-black/50 via-black/30 to-transparent"
                }`}
              ></div>

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-5 left-5 bg-gradient-to-r from-teal-600 to-green-500 text-white px-4 py-2 text-sm md:text-base font-semibold rounded-full shadow-lg tracking-wide"
              >
                {item.tag}
              </motion.div>
            </div>

            {/* Title */}
            <div
              className={`mt-6 text-xl md:text-2xl font-semibold text-center tracking-tight transition-all duration-300 font-[poppins] ${
                hoveredIndex === index
                  ? "text-gray-900 scale-105"
                  : "text-gray-600"
              }`}
            >
              {item.title}
            </div>

            {/* Description (Fixed height zone) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? 0 : 10,
              }}
              transition={{ duration: 0.5 }}
              className="text-center text-gray-700 mt-3 max-w-sm mx-auto leading-relaxed font-[poppins] overflow-hidden"
              style={{
                height: hoveredIndex === index ? "80px" : "0px", // 👈 fixed space
              }}
            >
              <p>{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
