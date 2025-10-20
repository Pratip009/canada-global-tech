"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function CompanyDropdown({ isOpen, isMobile = false, onClose }) {
  const companyLinks = [
    { name: "About", href: "/company/about" },
    { name: "Our Process", href: "/company/our-process" },
  ];

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
              ? "mt-2 space-y-1 pl-4"
              : "fixed left-1/2 mt-6 top-[100px] -translate-x-1/2 w-[90vw] max-w-sm z-50"
          }
        >
          <div
            className={`relative flex flex-col gap-3 p-6 rounded-2xl 
              border border-white/10 bg-gradient-to-br from-gray-950/90 via-gray-900/85 to-gray-950/90 
              shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl`}
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/15 to-pink-500/10 blur-3xl pointer-events-none" />

            {companyLinks.map((link, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, x: 4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative z-10"
              >
                <Link
                  href={link.href}
                  onClick={onClose} // ✅ closes the entire navbar
                  className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/5 
                             py-3 px-5 rounded-xl text-lg font-medium transition-all duration-300 group"
                >
                  <span>{link.name}</span>
                  <FiArrowUpRight className="text-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
