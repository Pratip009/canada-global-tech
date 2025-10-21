"use client";

import React from "react";
import Image from "next/image";

const serviceCategories = [
  { text: "Healthcare Solutions", icon: "/flaticons/healthcare.png" },
  { text: "FinTech Platforms", icon: "/flaticons/fintech.png" },
  { text: "Education Technology", icon: "/flaticons/education.png" },
  { text: "Media & Entertainment", icon: "/flaticons/media.png" },
  { text: "E-Commerce Development", icon: "/flaticons/ecommerce.png" },
  { text: "Logistics & Supply Chain", icon: "/flaticons/cargo.png" },
  { text: "AI & Data Engineering", icon: "/flaticons/ai.png" },
  { text: "Cloud & DevOps Services", icon: "/flaticons/cloud.png" },
  { text: "Digital Transformation", icon: "/flaticons/fintech.png" },
  { text: "SaaS Product Engineering", icon: "/flaticons/platform.png" },
  { text: "Custom Web Development", icon: "/flaticons/code.png" },
  { text: "Mobile App Solutions", icon: "/flaticons/mobile.png" },
];

const ClientsMarquee = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Our Industry Expertise
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Empowering global businesses with technology-driven solutions across diverse sectors.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Moving track */}
        <div className="flex whitespace-nowrap animate-marquee opacity-95 hover:opacity-100 transition-opacity duration-500">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 sm:gap-20 px-8">
              {serviceCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-110 hover:drop-shadow-xl"
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-teal-400/40">
                    <Image
                      src={category.icon}
                      alt={category.text}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-4 text-gray-800 font-semibold text-sm sm:text-base tracking-wide">
                    {category.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;
