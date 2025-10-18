"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ResourcesDropdown({ isOpen, isMobile = false }) {
  const resourcesLinks = [
    { name: "Blogs", href: "/resources/blogs" },
    { name: "Infographics", href: "/resources/infographics" },
    { name: "Ebooks", href: "/resources/ebooks" },
    { name: "UI/UX Gallery", href: "/resources/ui-ux-gallery" },
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
              : "fixed left-1/2 top-[80px] -translate-x-1/2 w-[90vw] max-w-md z-50"
          }
        >
          <div
            className={`relative grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl 
              border border-white/10 bg-gradient-to-br from-gray-950/90 via-gray-900/85 to-gray-950/90 
              shadow-[0_0_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl`}
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/15 to-pink-500/10 blur-3xl pointer-events-none" />

            {resourcesLinks.map((link, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative z-10"
              >
                <Link
                  href={link.href}
                  className="block text-center text-gray-300 hover:text-white hover:bg-white/5 
                             py-3 px-4 rounded-xl text-lg font-medium transition-all duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
