"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PlanningSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Sticky Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-14"
        >
          {/* Intro Section */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">
              Planning
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Meticulously develop{" "}
              <span className="text-blue-600">a strategic roadmap</span> that
              meets client expectations
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              We stay on course by developing a project plan that sets realistic
              milestones and defines sprint requirements and deliverables.
            </p>
          </div>

          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-5">
              Objective
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[17px] leading-relaxed">
              <li>
                Document everything to enable software development success
              </li>
              <li>Evaluate the project’s technical, operational, and financial feasibility</li>
              <li>Define the project scope to set clear expectations</li>
              <li>
               Identify and allocate necessary resources, human and technology
              </li>
              <li>
                Develop strategies for proactive risk management
              </li>
              <li>
                Establish a project timeline with defined milestones
              </li>
             
            </ul>
          </motion.div>

          {/* Expected Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-5">
              Expected Outcome
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[17px] leading-relaxed">
              <li>Develop a reference guide that outlines tasks, responsibilities, timelines, and dependencies</li>
              <li>
                Obtain approval and sign-off from client on key documents
              </li>
              <li>Establish key performance indicators (KPIs) and metrics for project success</li>
              <li>Proceed to the design phase</li>
            </ul>
          </motion.div>

          {/* Team Involved */}
         
        </motion.div>
        <div className="relative md:sticky md:top-24 h-[550px] rounded-2xl overflow-hidden">
          <Image
            src="/process/planning.webp"
            alt="Planning process"
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Scrollable Text Section */}
      </div>
    </section>
  );
}
