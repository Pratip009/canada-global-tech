"use client";

import Image from "next/image";
import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});



const WhoWeAre = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4 sm:px-8 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] gap-16 md:gap-20 items-start relative">
        {/* LEFT SIDE */}
        <div>
          {/* Intro */}
          <p className="text-teal-600 uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
            Who we are
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-5">
            Engineering{" "}
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              digital experiences
            </span>{" "}
            with vision, insight, and innovation
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            Founded in 2010, we believe in shaping a future where People,
            Process, and Technology drive sustainable impact and growth.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            Every solution we deliver is designed around the customer—enabling
            businesses to evolve, adapt, and lead in the digital era.
          </p>
          <p className="font-semibold text-gray-900 mb-8 sm:mb-10 text-sm sm:text-base">
            Blending innovation with technology for lasting experiences.
          </p>

          {/* CTA BUTTON */}
          <button className="border border-gray-300 hover:border-teal-400 text-gray-800 hover:text-teal-500 px-6 sm:px-7 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-md">
            Learn More →
          </button>

          {/* LOGO MARQUEE */}
          <div className="mt-14 sm:mt-20 overflow-hidden relative w-full group">
            {/* gradient fade edges */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

            
          </div>
        </div>

        {/* RIGHT SIDE (NUMBERS COLUMN) */}
        <div className="relative flex md:flex-col flex-row md:gap-20 gap-8 justify-between md:justify-center pl-0 md:pl-10 border-t md:border-t-0 md:border-l border-gray-200 pt-10 md:pt-0">
          {[
            { value: "15+", label: "Years in Business" },
            { value: "300+", label: "Global Clients" },
            { value: "250+", label: "Tech Experts" },
          ].map((stat, i) => (
            <div
              key={i}
              className="transition-transform duration-300 hover:scale-105 text-center md:text-left"
            >
              <h3
                className={`${bebas.className} text-5xl sm:text-6xl font-bold bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent`}
              >
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm sm:text-lg mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
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
          display: flex;
          align-items: center;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
