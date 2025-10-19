"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MaintenanceSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Sticky Image Section */}
        <div className="relative md:sticky md:top-24 h-[550px] rounded-2xl overflow-hidden">
          <Image
            src="/process/maintenance.webp"
            alt="Maintenance process"
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
              Maintenance
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Continuous software{" "}
              <span className="text-blue-600">
                performance enhancement using
              </span>{" "}
              an Agile approach
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              We ensure consistent software performance through continuous
              system monitoring to address evolving user needs and incorporate
              new features.
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
                Conduct regular security audits to identify and mitigate
                vulnerabilities
              </li>
              <li>Proactively secure the software against emerging threats</li>
              <li>
                Perform bi-weekly code backups to safeguard against data loss
              </li>
              <li>
                Upgrade regularly to incorporate new software versions,
                technologies, and security patches
              </li>
              <li>Monitor traffic and server load continuously</li>
              <li>
                Ensure the software complies with relevant regulations and
                standards
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
