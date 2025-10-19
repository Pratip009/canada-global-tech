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
              Development
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Enable{" "}
              <span className="text-blue-600">
                frontend, backend, and API development
              </span>{" "}
              and third-party integrations
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              We leverage DevOps and the Agile Scrum methodology to implement a
              strategy that facilitates iterative and incremental development.
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
                Factor in multi-tenancy and scalability to enable the system to
                handle growth and multiple user groups efficiently
              </li>
              <li>
                Extend the system’s functionality and interoperability through
                third-party integration
              </li>
              <li>
                Set up a sprint/milestone frequency to maintain regular progress
                checks and deliverables
              </li>
              <li>
                Craft an optimized, clean code structure that follows its best
                practices
              </li>
              <li>
                Involve the client in reviews at the end of each
                sprint/milestone
              </li>
              <li>
                Maintain comprehensive documentation that includes code, system
                architecture, and user guides
              </li>
              <li>
                Foster effective collaboration and communication among team
                members
              </li>
              <li>
                Integrate robust security measures to protect the system from
                vulnerabilities
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
              <li>
                <span className="font-semibold text-blue-400">Back-end:</span>{" "}
                JavaScript, NodeJS (Express/Nest), PHP, Laravel, Cake PHP,
                Python, Django/Flask, Java, Spring, Dot Net
              </li>
              <li>
                <span className="font-semibold text-blue-400">Front-end:</span>{" "}
                AngularJS, ReactJS, JavaScript, VueJS, Micro Frontend
                Development
              </li>
              <li>
                <span className="font-semibold text-blue-400">Database:</span>{" "}
                MySQL/MariaDB, PostgreSQL, MongoDB (NoSQL), Oracle
              </li>
              <li>
                <span className="font-semibold text-blue-400">
                  CMS & eCommerce:
                </span>{" "}
                WordPress, WooCommerce, PHP, Drupal + Acquia, CMS, Strapi
                (Headless), Webflow, Shopify, Magento eCommerce, Sitecore
              </li>
              <li>
                <span className="font-semibold text-blue-400">DevOps:</span> AWS
                Cloud, Azure Cloud, GCP Cloud, Jenkins CI/CD, Kubernetes,
                Docker, Containers
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-5">
              Mobile technologies
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[17px] leading-relaxed">
              <li>
                <span className="font-semibold text-blue-400">iOS:</span>{" "}
                ObjectiveC, Swift, iOS Native
              </li>
              <li>
                <span className="font-semibold text-blue-400">Android:</span>{" "}
                Java, Android Native, Kotlin
              </li>
              <li>
                <span className="font-semibold text-blue-400">Hybrid:</span>{" "}
                Ionic, ReactNative, Flutter
              </li>
            </ul>
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
              <li>Project Manager</li>
              <li>Tech Lead</li>
              <li>Front-End Developers</li>
              <li>Back-End Developers</li>
              <li>QA Engineer</li>
            </ul>
          </motion.div>

          {/* Team Involved */}
        </motion.div>
        <div className="relative md:sticky md:top-24 h-[550px] rounded-2xl overflow-hidden">
          <Image
            src="/process/development.webp"
            alt="Development process"
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
