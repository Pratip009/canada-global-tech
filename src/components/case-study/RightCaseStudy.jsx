"use client";

import Image from "next/image";

export default function RightCaseStudy({
  smallHeader,
  mainHeader,
  description1,
  description2,
  stat1Value,
  stat1Text,
  stat2Value,
  stat2Text,
  image,
  buttonText = "View Case Study",
  gradientFrom = "#0ea5e9",
  gradientTo = "#22c55e",
}) {
  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-14 px-8">
        {/* Text Content */}
        <div className="flex-[0.9]">
          {/* Small Header */}
          <p
            className="text-base font-semibold mb-3 tracking-wide uppercase"
            style={{
              backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {smallHeader}
          </p>

          {/* Main Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-3">
            {mainHeader}
          </h2>

          {/* Descriptions */}
          <p className="text-gray-600 text-lg mb-3 leading-relaxed">
            {description1}
          </p>
          <p className="text-gray-600 text-lg mb-3 leading-relaxed">
            {description2}
          </p>

          {/* Stats Section */}
          <div className="flex justify-start items-start gap-16 border-t border-gray-200 pt-6 mb-5">
            <div className="flex flex-col">
              <h3 className="text-4xl font-extrabold text-emerald-600 mb-1">
                {stat1Value}
              </h3>
              <p className="text-gray-600 text-base leading-snug max-w-xs">
                {stat1Text}
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-4xl font-extrabold text-emerald-600 mb-1">
                {stat2Value}
              </h3>
              <p className="text-gray-600 text-base leading-snug max-w-xs">
                {stat2Text}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            className="px-8 py-3.5 rounded-full text-white font-semibold transition-all duration-300 hover:opacity-90 shadow-lg text-base"
            style={{
              backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {buttonText} <span className="ml-1">→</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-[1.2] w-full h-full">
          <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image
              src={image}
              alt={mainHeader}
              width={700}
              height={480}
              className="object-cover w-full h-[480px] md:h-[520px] hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
