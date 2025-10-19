"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Import React Icons
import {
  FaHospital,
  FaUserMd,
  FaPills,
  FaVideo,
  FaCogs,
} from "react-icons/fa";

export default function WhoWeHelp() {
  const [activeTab, setActiveTab] = useState("Hospitals and Health Systems");

  const tabs = [
    {
      title: "Hospitals and Health Systems",
      image: "/industry/help1.webp",
      icon: <FaHospital className="text-white text-2xl" />,
      description: `
Develop tailored enterprise-grade healthcare software to manage complex operations, enhance patient care coordination, and integrate various departmental systems for large-scale medical institutions.

Our platforms also leverage healthcare predictive analytics and AI to optimize hospital operations, forecast patient demand, and enable proactive care strategies.
      `,
    },
    {
      title: "Clinics and Private Practices",
      image: "/industry/help2.png",
      icon: <FaUserMd className="text-white text-2xl" />,
      description: `
Boost efficiency for smaller practices with custom solutions for appointment scheduling, patient records, billing, and telemedicine — designed to improve patient flow and reduce administrative overhead. By incorporating HIPAA-compliant AI tools, clinics can securely manage sensitive data while streamlining workflows.
      `,
    },
    {
      title: "Pharmaceutical and Life Sciences",
      image: "/industry/help3.webp",
      icon: <FaPills className="text-white text-2xl" />,
      description: `
Equip your research and operations with specialized software for clinical trial management, pharmacovigilance, drug supply chain logistics, and regulatory compliance tracking. Our advanced solutions apply AI predictive analytics in healthcare to accelerate drug discovery and enhance risk detection.
      `,
    },
    {
      title: "Telemedicine Providers",
      image: "/industry/help4.webp",
      icon: <FaVideo className="text-white text-2xl" />,
      description: `
Build robust, scalable, and secure virtual care platforms that offer seamless patient-doctor interactions, electronic prescriptions, and integration with existing healthcare ecosystems. Predictive analytics anticipate patient needs and enhance care plans.
      `,
    },
    {
      title: "Medical Device Companies",
      image: "/industry/help5.png",
      icon: <FaCogs className="text-white text-2xl" />,
      description: `
Create companion software and IoT (IoMT) platforms for your medical devices — enabling remote monitoring, predictive maintenance, and firmware management. Ensure continuous care and reliability with AI-powered analytics.
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
            Empowering every part of healthcare — from enterprise systems to
            innovative startups transforming patient care.
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
