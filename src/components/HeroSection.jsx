"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 sm:px-20 overflow-hidden">
      {/* Background Image - visible only on mobile */}
      <div className="absolute inset-0 md:hidden z-0">
        <Image
          src="/banner.webp"
          alt="3D Abstract"
          fill
          className="object-cover brightness-110 saturate-125"
          priority
        />
        {/* Slightly lighter overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Container */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Simply <br /> Exceptional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
              Software Engineering
            </span>
            .
          </h1>

          <p className="text-white/85 text-lg sm:text-xl max-w-md mx-auto md:mx-0">
            Proven IT Consulting & Custom Software Development solutions for
            your complex business challenges, ensuring long-term success.
          </p>

          {/* Animated Gradient Button */}
          <a
            href="/get-started"
            className="inline-block w-2/3 md:w-auto mx-auto md:mx-0 mt-4 px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-yellow-400 via-teal-400 to-yellow-400 bg-[length:200%_200%] bg-left animate-gradient-x text-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl text-center"
          >
            Get Started →
          </a>
        </div>

        {/* Right: Image (desktop only) */}
        <div className="hidden md:block flex-1 relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/banner.webp"
            alt="3D Abstract"
            fill
            className="object-contain animate-bounce-slow"
            priority
          />
        </div>

        {/* Right: Feature list */}
        <div className="hidden md:flex flex-col gap-4 ml-6">
          <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <div className="w-3 h-3 bg-teal-400 rounded-full flex-shrink-0"></div>
            <span className="font-semibold text-teal-400">Local</span>
            <span className="text-gray-200">oversight</span>
          </div>

          <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <div className="w-3 h-3 bg-teal-400 rounded-full flex-shrink-0"></div>
            <span className="font-semibold text-teal-400">Global</span>
            <span className="text-gray-200">expertise</span>
          </div>

          <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
            <span className="font-semibold text-yellow-400">Flawless</span>
            <span className="text-gray-200">execution</span>
          </div>
        </div>
      </div>

      {/* Local animation styles */}
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        @keyframes gradient-x {
          0% {
            background-position: left;
          }
          50% {
            background-position: right;
          }
          100% {
            background-position: left;
          }
        }

        .animate-bounce-slow {
          animation: bounce 4s infinite ease-in-out
        }
      `}</style>
    </section>
  );
}
