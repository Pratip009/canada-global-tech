"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Import relevant icons
import {
  FaRegBuilding,
  FaUniversity,
  FaBriefcase,
  FaHandsHelping,
  FaGlobeAmericas,
} from "react-icons/fa";

export default function ElearningHelp() {
  const [activeTab, setActiveTab] = useState("EdTech Companies");

  const tabs = [
    {
      title: "EdTech Companies",
      image: "/industry/elearning/EdTech.webp",
      icon: <FaRegBuilding className="text-white text-2xl" />,
      description: `
Boost your EdTech venture’s returns with our elite eLearning development team, drawn from the top tier of global IT experts.
Tap into our deep knowledge of innovative tech to build comprehensive eLearning solutions, including modern upskilling platforms, student-focused educational apps, and interactive training systems. Design forward-thinking tools for skill enhancement, knowledge-building apps for learners, and engaging systems to support effective training.
      `,
    },
    {
      title: "Academic Institutions",
      image: "/industry/elearning/Academic.webp",
      icon: <FaUniversity className="text-white text-2xl" />,
      description: `
Develop tailored tools with AI for personalized education software to meet the unique academic demands, featuring dynamic, personalized training and streamlined performance oversight.

Leverage our sophisticated eLearning platforms to structure curricula, enhance student learning, address educational gaps, and boost retention rates.
      `,
    },
    {
      title: "Corporate Firms",
      image: "/industry/elearning/Corporate.webp",
      icon: <FaBriefcase className="text-white text-2xl" />,
      description: `
Equip your employees to excel in their roles through tailored online corporate training initiatives.

Our team crafts bespoke training ecosystems with integrated upskilling modules, live webinars, workshops, virtual sessions, and robust performance monitoring. We also create secure corporate eLearning environments that adhere to regulations like GDPR for safe, compliant learning.
      `,
    },
    {
      title: "Non-Profits",
      image: "/industry/elearning/Non.webp",
      icon: <FaHandsHelping className="text-white text-2xl" />,
      description: `
Craft accessible, engaging eLearning platforms to power your nonprofit’s educational outreach efforts.

Ensure your audience thrives with skill-development resources, training content, and interactive experiences fueled by real-time analytics tracking user engagement.
      `,
    },
    {
      title: "Mass Market",
      image: "/industry/elearning/Mass.webp",
      icon: <FaGlobeAmericas className="text-white text-2xl" />,
      description: `
Roll out eLearning solutions for a global audience, enabling anytime, anywhere access to education, skill acquisition, and continuous personal growth.

Our offerings feature mobile learning applications, bite-sized microlearning tools, and online course systems, revolutionizing self-directed education.
      `,
    },
  ];

  const active = tabs.find((tab) => tab.title === activeTab);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white text-gray-900 py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-r from-teal-400 to-blue-500 opacity-20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/3 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-300 to-teal-300 opacity-10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Who can we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              help?
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Empowering every part of eLearning — from academic institutions to
            global EdTech innovators.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab.title)}
              className={`relative px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base font-medium tracking-wide
                ${
                  activeTab === tab.title
                    ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg border-transparent scale-105"
                    : "border-gray-300 text-gray-700 hover:text-teal-600 hover:border-teal-400"
                }`}
            >
              {tab.title}
              {activeTab === tab.title && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 blur-md opacity-30 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Left Image */}
            <motion.div
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-teal-300/40 transition-shadow"
            >
              <Image
                src={active.image}
                alt={active.title}
                width={600}
                height={400}
                className="object-cover w-full h-[320px] md:h-[400px] transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-yellow-400 flex items-center justify-center shadow-lg">
                  {active.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {active.title}
                </h3>
              </div>

              <hr className="border-gray-200 mb-5" />

              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-[15.5px] md:text-[16px]">
                {active.description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
