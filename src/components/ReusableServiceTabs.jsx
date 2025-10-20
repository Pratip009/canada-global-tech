"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

/**
 * Reusable ServiceTabs component
 * @param {Object[]} services - Array of service objects
 * @param {string} title - Main section title
 * @param {string} subtitle - Optional section subtitle
 */
export default function ReusableServiceTabs({ services, title, subtitle }) {
  const [activeTab, setActiveTab] = useState(services[0]?.title || "");

  const activeService = services.find((s) => s.title === activeTab);

  return (
    <section className="bg-gray-50 text-gray-900 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          {subtitle && (
            <p className="text-sm font-mono text-gray-500 mb-2">{subtitle}</p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_1.5fr_1.5fr] gap-10 items-start">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={activeService.image}
              alt={activeService.title}
              width={500}
              height={500}
              className="object-cover w-full h-[400px]"
            />
          </div>

          {/* Middle Tabs */}

          <div className="border-r border-gray-200 pr-6 flex flex-col justify-between">
            <div className="space-y-10">
              {" "}
              {/* increased spacing between titles */}
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setActiveTab(service.title)}
                  className={`block text-left w-full font-semibold text-xl md:text-2xl transition-colors ${
                    activeTab === service.title
                      ? "text-teal-700 font-semibold"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Chevron Icon at Bottom */}
            <div className="flex justify-center mt-6 text-gray-400">
              <ChevronDown size={20} />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-5 pl-2">
            <h3 className="text-3xl font-semibold leading-snug">
              {activeService.heading}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {activeService.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
