"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function TechnologiesDropdown({ isOpen, isMobile = false }) {
  const techCategories = [
    { category: "Backend", items: ["Node.js (Express/Nest)", "Laravel", "Python"] },
    { category: "Frontend", items: ["JavaScript", "Angular", "ReactJS", "Vue.JS"] },
    { category: "Mobile", items: ["React Native", "iOS Native", "Android Native", "Flutter"] },
    { category: "Cloud", items: ["AWS Cloud", "Azure"] },
    { category: "CMS", items: ["WordPress", "Drupal", "WooCommerce"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Automation", items: ["Playwright"] },
  ];

  const formatSlug = (str) =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className={
            isMobile
              ? "mt-2 pl-4 space-y-2"
              : "fixed left-1/2 top-[80px] -translate-x-1/2 w-[90vw] max-w-6xl z-50"
          }
        >
          {/* Dropdown container */}
          <div
            className={`relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-8 rounded-2xl 
              border border-white/10 bg-gradient-to-br from-gray-950/90 via-gray-900/85 to-gray-950/90 
              shadow-[0_0_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl`}
          >
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/10 to-pink-500/5 blur-3xl pointer-events-none" />

            {techCategories.map((cat, idx) => (
              <div key={idx} className="relative z-10">
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-3">
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((tech) => (
                    <motion.li
                      key={tech}
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 250, damping: 15 }}
                    >
                      <Link
                        href={`/technologies/${formatSlug(tech)}`}
                        className="block text-gray-300 hover:text-white hover:bg-white/5 rounded-md px-2 py-1 transition-all duration-200"
                      >
                        {tech}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
