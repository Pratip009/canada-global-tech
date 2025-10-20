"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scroll-btn"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.15,
              rotate: -5,
              boxShadow: "0px 8px 25px rgba(13, 148, 136, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            className="relative group bg-gradient-to-r from-teal-500 to-cyan-500 text-white 
                       rounded-full p-4 shadow-lg transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />

            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition duration-300"></span>

            {/* Subtle ring */}
            <span className="absolute inset-0 rounded-full ring-2 ring-teal-400/20 group-hover:ring-teal-400/50 transition duration-300"></span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
