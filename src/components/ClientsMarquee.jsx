"use client";

import Image from "next/image";
import React from "react";

const logos = [
  "/logos/mcgrawhill.svg",
  "/logos/nbcu.svg",
  "/logos/unitednations.svg",
  "/logos/cqfluency.svg",
  "/logos/openreel.svg",
  "/logos/drbatras.webp",
  "/logos/eshipper.svg",
  "/logos/bluesky.svg",
];

const ClientsMarquee = () => {
  return (
    <section className="w-full bg-white py-10 border-t border-gray-200">
      <div className="relative overflow-hidden">
        {/* Gradient fade edges — increased height visibility */}
        <div className="absolute top-[-20%] bottom-[-20%] left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-[-20%] bottom-[-20%] right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Moving track */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center w-28 sm:w-36 h-16 sm:h-30 p-2 sm:p-3 opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Client logo ${idx + 1}`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
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
          animation: marquee 25s linear infinite;
          display: flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;
