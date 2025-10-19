"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ElearningTechnologies() {
  const techList = [
    { name: "React", logo: "/industry/icons/react.svg" },
    { name: "Node.js", logo: "/industry/icons/node.svg" },
    { name: "Python", logo: "/industry/icons/python.svg" },
    { name: ".NET", logo: "/industry/icons/dotnet.svg" },
    { name: "React Native", logo: "/industry/icons/native.svg" },
    { name: "PostgreSQL", logo: "/industry/icons/postgres.svg" },
    { name: "AWS", logo: "/industry/icons/aws.svg" },
    { name: "TensorFlow", logo: "/industry/icons/tensor.svg" },
    { name: "Flutter", logo: "/industry/icons/flutter.svg" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.2em] text-blue-600 text-sm font-semibold mb-3">
            Technologies we use
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Powering modern{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
              eLearning platforms
            </span>{" "}
            with cutting-edge technologies
          </h2>

          <p className="text-gray-600 mb-8 max-w-lg">
            Our expertise spans scalable cloud platforms, real-time data
            processing, and AI-powered analytics to deliver seamless, engaging,
            and personalized digital learning experiences.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundPosition: "100% 0" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg bg-gradient-to-r from-blue-500 via-teal-500 to-green-400 bg-[length:200%_100%] transition-all duration-500"
          >
            View complete stack →
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE GRID */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-3 divide-x divide-y divide-gray-200 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/60 shadow-sm"
        >
          {techList.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center justify-center h-36 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 transition-all duration-300"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={80}
                height={80}
                className="mb-2 object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
