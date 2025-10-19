"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden text-gray-900 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        
        {/* Left: Image with subtle overlay */}
        <div className="relative w-full h-[320px] md:h-[500px] overflow-hidden">
          <Image
            src="/ui-ux/meeting.webp"
            alt="Team meeting"
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent backdrop-blur-[2px]" />
        </div>

        {/* Right: Aurora background with light gradient */}
        <div className="relative flex flex-col justify-center items-center md:items-start text-center md:text-left h-full px-10 md:px-16 py-16 bg-white overflow-hidden">
          {/* Aurora animation background */}
          <div className="absolute inset-0 aurora-bg opacity-70" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 animate-gradient">
                Ready to Embrace
              </span>
              <br />
              <span className="text-gray-900">Digital Change?</span>
            </h2>

            <Link
              href="/contact"
              className="inline-block text-lg font-semibold px-8 py-3 rounded-full border border-purple-400/40 bg-purple-50 hover:bg-purple-100 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] text-purple-600"
            >
              Let&apos;s Discuss Your Project →
            </Link>
          </div>
        </div>
      </div>

      {/* Aurora Gradient Animation */}
      <style jsx>{`
        .aurora-bg {
          background: radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.25), transparent 60%),
                      radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.25), transparent 60%),
                      radial-gradient(circle at 60% 80%, rgba(34, 197, 94, 0.25), transparent 60%),
                      radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.25), transparent 60%);
          background-blend-mode: screen;
          filter: blur(90px);
          animation: auroraMove 18s ease-in-out infinite alternate;
        }

        @keyframes auroraMove {
          0% {
            transform: translateX(-20%) translateY(-10%) scale(1);
          }
          50% {
            transform: translateX(10%) translateY(15%) scale(1.1);
          }
          100% {
            transform: translateX(-10%) translateY(-5%) scale(1);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
