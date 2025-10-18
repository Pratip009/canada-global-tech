"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const TechnologyOfferings = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#030B11] via-[#041922] to-[#061E27] text-white py-24 px-6 sm:px-10 md:px-20 overflow-hidden">
      {/* subtle glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,60,80,0.3),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <p className="text-gray-400 text-lg leading-relaxed tracking-wide font-mono">
            Home of Dependable <br />
            Engineers & Analysts.
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-snug text-gray-100">
            We{" "}
            <span className="bg-gradient-to-r from-[#23D2A2] via-[#FFD84D] to-[#23D2A2] bg-clip-text text-transparent">
              ideate, engineer, and transform
            </span>{" "}
            digital landscapes to help your business stay modern, efficient, and
            agile.
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-y-12 gap-x-20 mb-16">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-500/40 pb-2 hover:text-[#23D2A2] transition-colors">
              Software Product Engineering
            </h3>
            <ul className="space-y-1.5 text-gray-300 text-sm">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>Custom Software Development</li>
              <li>Application Modernization</li>
              <li>E-commerce Development</li>
              <li>Blockchain Development</li>
              <li>Enterprise Software Development</li>
              <li>API & Microservices</li>
              <li>Software Project Rescue</li>
              <li>Testing & Quality Assurance</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-500/40 pb-2 hover:text-[#23D2A2] transition-colors">
              IT Consulting & Advisory
            </h3>
            <ul className="space-y-1.5 text-gray-300 text-sm">
              <li>IT Staff Augmentation</li>
              <li>Product Strategy & Roadmap</li>
              <li>Business Technology Consulting</li>
            </ul>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4 border-b border-teal-500/40 pb-2 hover:text-[#23D2A2] transition-colors">
                Digital Experience
              </h3>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                <li>User Research</li>
                <li>Web Design</li>
                <li>UI/UX Design</li>
                <li>UX & Information Architecture</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-500/40 pb-2 hover:text-[#23D2A2] transition-colors">
              Data & Analytics
            </h3>
            <ul className="space-y-1.5 text-gray-300 text-sm">
              <li>Data Engineering</li>
              <li>Analytics & Visualization</li>
              <li>AI & Machine Learning</li>
            </ul>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4 border-b border-teal-500/40 pb-2 hover:text-[#23D2A2] transition-colors">
                Cloud Engineering
              </h3>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                <li>Cloud Migration</li>
                <li>DevOps</li>
                <li>Cybersecurity</li>
                <li>24/7 Support & Maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Panel */}
        <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(35,210,162,0.3)] transition-all duration-300">
          <h4 className="text-xl font-semibold text-white">
            Leading Technology Offerings For
          </h4>

          <div className="flex flex-col sm:flex-row gap-5">
            {[
              "Enterprise Consulting",
              "SMB Consulting",
              "Startup Consulting",
            ].map((label, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#FFD84D] transition-colors"
              >
                {label} <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOfferings;
