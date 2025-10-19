"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiFigma,
  SiAdobephotoshop,
  SiSketch,
  SiAdobexd,
  SiAdobeillustrator,
} from "react-icons/si";
import { FaInvision } from "react-icons/fa";
import { RiBearSmileFill } from "react-icons/ri"; // Placeholder for Axure logo

export default function DesignSection() {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Left - Image */}
        <div className="relative md:sticky md:top-24 h-[500px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/process/design.webp"
            alt="Design process"
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10 text-gray-800"
        >
          {/* Intro */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">
              Design
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Craft a blueprint to turn your software vision to digital into a{" "}
              <span className="text-blue-600">digital reality</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Through our well-designed wireframes and prototypes, we offer
              clients a preview and ask for feedback that we incorporate
              promptly.
            </p>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-5">
              Objective
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[17px] leading-relaxed">
              <li>Define the information architecture of the system</li>
              <li>
                Detail design specifications for algorithms, data structures,
                and interfaces
              </li>
              <li>
                Design the database schema for efficient data storage and
                retrieval
              </li>
              <li>Create wireframes, mockups, and prototypes of the UI/UX</li>
              <li>
                Incorporate security measures and protocols into the design
              </li>
              <li>Plan third-party integrations carefully</li>
            </ul>
          </div>

          {/* Expected Outcome */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-5">
              Expected Outcome
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[17px] leading-relaxed">
              <li>Prototypes help validate design concepts</li>
              <li>Gather feedback to improve software design</li>
              <li>
                Knowledge of required tools, technologies, and frameworks
              </li>
              <li>Client’s go-ahead to proceed to the development stage</li>
            </ul>
          </div>

          {/* Team Involved */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-5">
              Team Involved
            </h3>
            <div className="flex flex-wrap items-center gap-6 text-4xl text-gray-700">
              <SiFigma className="hover:text-blue-600 transition-colors" />
              <SiAdobephotoshop className="hover:text-blue-500 transition-colors" />
              <FaInvision className="hover:text-pink-500 transition-colors" />
              <SiSketch className="hover:text-yellow-500 transition-colors" />
              <SiAdobeillustrator className="hover:text-orange-500 transition-colors" />
              <SiAdobexd className="hover:text-pink-400 transition-colors" />
              <RiBearSmileFill className="hover:text-purple-500 transition-colors" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
