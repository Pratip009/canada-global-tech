"use client";

import { Star } from "lucide-react";

export default function WebsiteIntro({
  leftTitle = "Web Development Solutions",
  mainTitle = "Unlock the full",
  highlightText = "potential of your business with our specialized website development services for",
  afterHighlight = "superior functionality, flexibility, and scalability",
  challenges = [
    "A slow and clunky experience that frustrates end users",
    "Limited control over back-end, slowing down innovation ",
    "Lack of business intelligence features impacting business performance",
    "Dated technology and the overwhelming complexity of implementing emerging tech",
  ],
  paragraph1 = "Leveraging a consulting-led methodology, our experts first analyze your core objectives, craft strategic plans, and proactively eliminate risks, transforming insights into functional solutions that power high-performance web development solutions. Based on this solid foundation, we then skillfully blend world-class UI/UX design with forward-thinking development approaches, including responsive web design, to drive ongoing success. Whether it be simple informative websites, eCommerce solutions, or SaaS platforms, we take pride in continually innovating and building solutions centered around your short and long-term objectives.",
}) {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900 py-24 px-6 md:px-12 lg:px-20">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-lime-50 animate-gradient-x"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-[0.6fr_2fr] gap-16 md:gap-24 items-start">
        {/* Left Section */}
        <div className="space-y-2 md:pr-8">
          {leftTitle.split(" ").map((word, i) => (
            <p
              key={i}
              className="text-lg font-mono tracking-tight text-gray-800 hover:text-teal-600 transition-colors duration-300"
            >
              {word}
            </p>
          ))}
        </div>

        {/* Right Section */}
        <div className="relative max-w-4xl">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-10">
            {mainTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-green-400 to-lime-500 animate-gradient-x">
              {highlightText}
            </span>{" "}
            {afterHighlight}
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 mb-8 font-medium text-lg">
            Are you facing any of these challenges?
          </p>

          {/* Challenges Grid */}
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {challenges.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl px-6 py-4 group"
              >
                <Star
                  size={20}
                  className="text-yellow-400 mt-1 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300"
                />
                <p className="text-gray-800 text-base font-medium leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>{paragraph1}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
