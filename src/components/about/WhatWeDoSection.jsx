"use client";

import { useState } from "react";
import {
  FaCode,
  FaComments,
  FaBullhorn,
  FaChartBar,
  FaCloud,
  FaMicrochip,
} from "react-icons/fa";

export default function WhatWeDoSection() {
  const services = [
    {
      title: "Software Product Engineering",
      icon: <FaCode className="text-4xl" />,
      funText: "We build scalable, high-performing digital products.",
    },
    {
      title: "Advisory & Consulting",
      icon: <FaComments className="text-4xl" />,
      funText: "Guiding businesses to make smarter tech decisions.",
    },
    {
      title: "Digital Experience",
      icon: <FaBullhorn className="text-4xl" />,
      funText: "Crafting seamless, human-centered digital journeys.",
    },
    {
      title: "Data & Analytics",
      icon: <FaChartBar className="text-4xl" />,
      funText: "Turning data into insights that drive success.",
    },
    {
      title: "Cloud Engineering",
      icon: <FaCloud className="text-4xl" />,
      funText: "Building resilient, scalable cloud-first solutions.",
    },
    {
      title: "Leading Technology Offerings",
      icon: <FaMicrochip className="text-4xl" />,
      funText: "Leveraging the latest tech to fuel innovation.",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
          What We Do
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex flex-col items-center text-center border rounded-2xl p-10 transition-all duration-500 ease-out cursor-pointer transform 
                ${
                  hovered === index
                    ? "bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white shadow-2xl -translate-y-2 border-transparent"
                    : "bg-white text-gray-900 shadow-sm hover:shadow-xl border-gray-200"
                }`}
            >
              {/* Icon */}
              <div
                className={`mb-4 transition-all duration-500 ${
                  hovered === index
                    ? "text-white scale-110 drop-shadow-glow"
                    : "text-purple-700"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-lg font-semibold transition-all duration-300 ${
                  hovered === index ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm mt-3 transition-all duration-500 ${
                  hovered === index
                    ? "opacity-100 translate-y-0 text-gray-200"
                    : "opacity-0 translate-y-3"
                }`}
              >
                {service.funText}
              </p>

              {/* Glow border effect */}
              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-700 opacity-0 ${
                  hovered === index
                    ? "opacity-100 ring-2 ring-purple-500/40 blur-[2px]"
                    : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animation for gradient text */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
        }
      `}</style>
    </section>
  );
}
