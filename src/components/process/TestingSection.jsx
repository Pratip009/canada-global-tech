"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestingSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Sticky Image Section */}
        <div className="relative md:sticky md:top-24 h-[550px] rounded-2xl overflow-hidden">
          <Image
            src="/process/testing.webp"
            alt="Testing process"
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
              Testing
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Driving high-quality{" "}
              <span className="text-blue-600">
                results through iterative testing
              </span>{" "}
              and quality assurance
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              We employ a selected mix of manual and automated tests to ensure
              the software is free from all bugs, flaws, and technical glitches.
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
              <li>Perform rigorous testing of each sprint/milestone</li>
              <li>
                Identify and report bugs for prioritization and resolution
              </li>
              <li>
                Provide a quality release to verify the resolution of issues{" "}
                <br />
                and the stability of the software
              </li>
              <li>
                Leverage regression testing after each sprint to ensure the
                application continues to perform optimally
              </li>
              <li>Increase efficiency and coverage of repetitive test cases</li>
              <li>Identify and address cyber vulnerabilities proactively</li>
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
              Tools
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[17px] leading-relaxed">
              <li>
                <strong>Firewalls:</strong> Cisco ASA, Palo Alto Networks,
                Fortinet
              </li>
              <li>
                <strong>Endpoint Protection:</strong> Symantec, McAfee,
                CrowdStrike
              </li>
              <li>
                <strong>SIEM Solutions:</strong> Splunk, IBM QRadar, ArcSight
              </li>
              <li>
                <strong>Threat Intelligence:</strong> ThreatConnect, Recorded
                Future, Anomali
              </li>
              <li>
                <strong>Access Management:</strong> Okta, Microsoft Azure AD,
                RSA SecurID
              </li>
              <li>
                <strong>Encryption:</strong> AES, RSA, TLS/SSL
              </li>
              <li>
                <strong>Network Security:</strong> Cisco, Juniper Networks,
                Check Point
              </li>
              <li>
                <strong>Cloud Security:</strong> AWS Security Hub, Azure
                Security Center, Google Cloud Security
              </li>
              <li>
                <strong>Vulnerability Management:</strong> Nessus, Qualys,
                Rapid7
              </li>
              <li>
                <strong>Penetration Testing:</strong> Metasploit, Burp Suite,
                Wireshark
              </li>
              <li>
                <strong>Backup and Recovery:</strong> Veeam, Acronis, Veritas
              </li>
              <li>
                <strong>Awareness Training:</strong> KnowBe4, SANS Security
                Awareness, PhishMe
              </li>
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
              Type of testing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-gray-800 text-[17px] leading-relaxed">
              <p>Unit Testing</p>
              <p>Manual Testing</p>
              <p>Regression Testing</p>
              <p>Security Testing</p>
              <p>Automation Testing</p>
              <p>Load & Stress Testing</p>
              <p>Performance</p>
              <p>Code Review</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-5">
              Team Involved
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[17px] leading-relaxed">
              <li>Account Manager</li>
              <li>Project Manager</li>

              <li>Quality Assurance</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
