"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DiscoverySection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Sticky Image Section */}
        <div className="relative md:sticky md:top-24 h-[550px] rounded-2xl overflow-hidden">
          <Image
            src="/process/discovery.webp"
            alt="Discovery process"
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Scrollable Text Section */}
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
              Discovery
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Conducting intensive research to know your{" "}
              <span className="text-blue-600">business, processes</span> and
              intent
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Our engineering excellence is the result of a well-defined
              research process that helps us build software to fulfill your
              digital aspirations.
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
                Conduct a comprehensive review of the entire project with the
                client
              </li>
              <li>Gain an accurate perspective of the project’s intent</li>
              <li>Analyze the competitive landscape extensively</li>
              <li>
                Research the target market niche, its demographics and
                geographies
              </li>
              <li>
                Convey the project requirements to internal stakeholders and
                clear any doubts
              </li>
              <li>
                Document client branding preferences, project assumptions and
                constraints
              </li>
              <li>Creating a precise, high-quality epic map</li>
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
              <li>Thorough understanding of project scope</li>
              <li>
                Bringing cross-functional team members on the same platform
              </li>
              <li>Helping in planning and prioritization</li>
              <li>Gaining insights to define realistic milestones</li>
            </ul>
          </motion.div>

          {/* Team Involved */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-5">
              Team Involved
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[17px] leading-relaxed">
              <li>Project Manager</li>
              <li>Tech Lead</li>
              <li>IA & UX Lead</li>
              <li>Project Owner / Client</li>
              <li>Business Analyst</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
