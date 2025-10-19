"use client";

import { useState, useLayoutEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Tv,
  Plane,
  Shield,
  Server,
} from "lucide-react";

const industries = [
  {
    id: 1,
    title: "Education",
    icon: <Building2 size={28} />,
    image: "/showcase/education.webp",
    description:
      "In the evolving education industry, we navigate challenges with a digital-first mindset, bridging learning gaps and meeting shifting expectations. Our eLearning software development leverages advanced technology and data analytics to create intuitive, interactive, and personalized learning experiences.",
    tagline: "Because learning happens everywhere.",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: <Stethoscope size={28} />,
    image: "/showcase/healthcare.webp",
    description:
      "In the healthcare industry, we personalize processes with seamless access and engaging user journeys for better patient care. Our IT services enhance efficiency, streamline workflows, and enable predictive, preventive solutions—reducing custom software development costs while optimizing clinician performance.",
    tagline: "Because care never stops.",
  },
  {
    id: 3,
    title: "Media & Entertainment",
    icon: <Tv size={28} />,
    image: "/showcase/mediaa.jpg",
    description:
      "Canada Global Tech transforms the media & entertainment industry with custom solutions that enhance audience engagement and deliver seamless experiences. By adopting the DevOps methodology, we accelerate time to market, drive growth, and implement cutting-edge technology to meet evolving demands.",
    tagline: "Because stories inspire change.",
  },
  {
    id: 4,
    title: "Travel",
    icon: <Plane size={28} />,
    image: "/showcase/travell.jpg",
    description:
      "We transform the travel and hospitality industry by integrating people, processes, and technology to deliver seamless, high-performing solutions. Our expertise in eCommerce, custom software, mobile app development, and web design empowers businesses to stay competitive and enhance the customer experience.",
    tagline: "Because journeys connect us.",
  },
  {
    id: 5,
    title: "Insurance",
    icon: <Shield size={28} />,
    image: "/showcase/insure.png",
    description:
      "In the insurance industry, we address complex customer protection needs by digitizing, connecting, and personalizing services. Our expertise enables tailored solutions, automates tasks, and enhances claims and underwriting processes. Using cutting-edge technology, we transform operations and deliver compelling products.",
    tagline: "Because protection matters.",
  },
  {
    id: 6,
    title: "SAAS",
    icon: <Server size={28} />,
    image: "/showcase/sasss.webp",
    description:
      "We empower industries with B2B SaaS solutions, setting new performance standards through digital innovation. By leveraging SaaS and digital platforms, we help businesses streamline workflows, enhance CX, and drive efficiency. Explore how our custom software development fuels growth and resilience.",
    tagline: "Because scalability fuels success.",
  },
];

export default function IndustryShowcase() {
  const [active, setActive] = useState(industries[0]);
  const [gridHeight, setGridHeight] = useState(0);

  // Keep height equal (safe for SSR)
  useLayoutEffect(() => {
    const updateHeight = () => {
      const left = document.getElementById("leftCard");
      if (left) setGridHeight(left.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [active]);

  return (
    <section className="relative w-full bg-white text-gray-900 py-24 px-6 md:px-10 overflow-hidden">
      {/* Subtle lime gradient background */}
      <div className="absolute inset-0 bg-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-12">
        {/* LEFT SIDE */}
        <div id="leftCard" className="w-full lg:w-2/3 flex flex-col gap-10">
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              A Unified Vision That <br />
              Caters to Diverse{" "}
              <span className="bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                Industry
              </span>{" "}
              Demands.
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl">
              Tailored digital solutions crafted to empower businesses across
              multiple industries — combining innovation, strategy, and
              technology.
            </p>
          </div>

          {/* Active Industry Card */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-lime-200/40 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-72 md:h-auto">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between w-full md:w-1/2">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-lime-600">
                  {active.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {active.description}
                </p>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 italic text-sm text-lime-500 font-medium tracking-wide"
              >
                {active.tagline}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE GRID */}
        <div
          id="rightGrid"
          style={{ height: gridHeight ? `${gridHeight}px` : "auto" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 w-full lg:w-1/3"
        >
          {industries.map((industry) => {
            const isActive = active.id === industry.id;
            return (
              <motion.button
                key={industry.id}
                onClick={() => setActive(industry)}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center justify-center gap-3 rounded-2xl border transition-all duration-300 py-8 ${
                  isActive
                    ? "bg-gradient-to-b from-lime-500/20 to-emerald-700/10 border-lime-400/50 shadow-lg shadow-lime-500/20"
                    : "bg-[#0d0d0d] border-gray-700 hover:border-lime-400/40 hover:bg-[#161616]"
                }`}
              >
                <div
                  className={`${
                    isActive
                      ? "text-lime-400 drop-shadow-[0_0_5px_#a3e635]"
                      : "text-gray-300"
                  } transition-colors`}
                >
                  {industry.icon}
                </div>
                <span
                  className={`text-sm font-semibold ${
                    isActive ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {industry.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
