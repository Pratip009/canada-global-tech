"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0.1)}
          className="flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-700 tracking-wide uppercase mb-3">
              About Us
            </h3>

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Drive Success
              </span>
              <br />
              <span className="text-gray-900">
                with our Digital Transformation Services
              </span>
            </h2>
          </div>

          {/* STATS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(0.3)}
            className="flex flex-wrap gap-10 mt-12 border-t border-gray-200 pt-8"
          >
            {[
              { number: "15+", label: "Years in business" },
              { number: "300+", label: "Global clients" },
              { number: "250+", label: "Digital experts" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group transition-transform"
              >
                <p className="text-5xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-sm md:text-base mt-1 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0.2)}
          className="flex flex-col justify-center h-full text-gray-700 text-[1.1rem] leading-[2.2rem] space-y-8"
        >
          <p>
            <span className="font-semibold text-gray-900">Canada Global Tech</span>{" "}
            is a trusted partner for IT and software solutions dedicated to
            empowering businesses. Since 2010, we’ve been helping startups,
            SMEs, and enterprises harness emerging technologies to craft
            end-to-end solutions that fuel growth and optimize efficiency.
          </p>

          <p>
            We’re a team of passionate minds united by a relentless pursuit of
            excellence. We design cutting-edge solutions that help enterprises
            build transformative digital experiences. Our{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              software development and digital transformation services
            </a>{" "}
            span bespoke website design, web development,{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              scalable mobile applications
            </a>{" "}
            and robust SaaS platforms.
          </p>
        </motion.div>
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-300/20 to-teal-400/20 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
}
