"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function HealthcareTrendsTabs() {
  const [activeTab, setActiveTab] = useState("trends");

  const trends = [
    "AI-Driven Predictive Diagnostics",
    "IoMT and Smart Medical Devices",
    "Blockchain for Health Data Exchange",
    "AR/VR for Surgical Planning and Medical Training",
  ];

  const opportunities = [
    "Expanding telemedicine and remote monitoring capabilities",
    "Leveraging patient data for personalized treatments",
    "Improving operational efficiency with automation",
    "Developing secure, interoperable digital ecosystems",
  ];

  const content =
    activeTab === "trends"
      ? {
          title: "Trends",
          description:
            "Breakthrough trends in the healthcare sector that make healthcare more connected, intelligent, and patient-centric:",
          list: trends,
          accent: "from-purple-400 to-blue-400",
        }
      : {
          title: "Opportunities",
          description:
            "Emerging opportunities that help healthcare providers innovate, scale, and enhance patient care:",
          list: opportunities,
          accent: "from-emerald-400 to-lime-400",
        };

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden mb-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
        {/* Left side */}
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm font-mono text-gray-400 mb-3 tracking-widest uppercase">
            Trends & Opportunities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            The Future of the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Healthcare Industry
            </span>
          </h2>
        </div>

        {/* Right side */}
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 sm:gap-12 border-b border-gray-800 mb-8">
            <button
              onClick={() => setActiveTab("trends")}
              className={`pb-3 text-2xl sm:text-3xl font-extrabold transition-colors relative ${
                activeTab === "trends"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Trends
              {activeTab === "trends" && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("opportunities")}
              className={`pb-3 text-2xl sm:text-3xl font-extrabold transition-colors relative ${
                activeTab === "opportunities"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Opportunities
              {activeTab === "opportunities" && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full"></span>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {content.description}
            </p>

            <ul className="space-y-5 mt-6">
              {content.list.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 sm:gap-4 hover:translate-x-1 transition-transform duration-200"
                >
                  <Sparkles
                    size={20}
                    className="mt-1 flex-shrink-0"
                    style={{
                      color:
                        activeTab === "trends" ? "#a78bfa" : "#34d399", // purple-400 / emerald-400
                    }}
                  />
                  <span className="text-white font-medium sm:font-semibold text-base sm:text-lg leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
