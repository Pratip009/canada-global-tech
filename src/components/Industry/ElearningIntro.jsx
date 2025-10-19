"use client";

import { Star } from "lucide-react";

export default function ElearningIntro({
  leftTitle = "EdTech Software Development Company",
  mainTitle = "Tailored",
  highlightText = "eLearning Solutions",
  afterHighlight = "to fit your precise requirements",
  challenges = [
    "Inefficient patient data management and siloed information",
    "Data security, privacy concerns, and regulatory non-compliance",
    "Low patient engagement and poor care coordination",
    "Rising operational costs and manual, repetitive tasks",
  ],
  paragraph1 = "It’s time to upgrade your EdTech solution with AI tools. ",
  paragraph2 = "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke AI-powered eLearning solutions improve student engagement and retention by transforming digital teaching and learning.",
  paragraph3 = "Whether you seek to empower your students with personalized solutions or drive human productivity through corporate training, our custom eLearning development services will help them reach their true potential. ",
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
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
