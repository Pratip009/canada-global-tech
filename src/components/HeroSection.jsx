"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 sm:px-20">
      {/* Hero Container */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Simply <br /> Exceptional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
              Software Engineering
            </span>
            .
          </h1>

          <p className="text-white/80 text-lg sm:text-xl max-w-md">
            Proven IT Consulting & Custom Software Development solutions for
            your complex business challenges, ensuring long-term success.
          </p>

          {/* Animated Gradient Button */}
          <a
            href="/get-started"
            className="inline-block w-2/3 mt-4 px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-yellow-400 via-teal-400 to-yellow-400 bg-[length:200%_200%] bg-left animate-gradient-x text-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl text-center"
          >
            Get Started →
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
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
          animation: bounce 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
