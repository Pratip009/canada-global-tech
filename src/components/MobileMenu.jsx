"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const navLinks = [
    { name: "Technologies", href: "/technologies" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
  ];

  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      name: "Software Engineering",
      subItems: [
        "Website Development",
        "Web App Development",
        "Mobile App Development",
        "Application Modernization",
        "Blockchain Development",
        "Custom Software Development",
        "SaaS Development",
        "E-Commerce Development",
        "Testing & Quality Assurance",
      ],
    },
    {
      name: "Design & Digital Experience",
      subItems: ["User Research", "Web Design", "UI/UX Design", "IA and UX Design"],
    },
    {
      name: "Cloud Engineering",
      subItems: ["Cloud Migration", "DevOps", "Cybersecurity", "24/7 Support & Maintenance"],
    },
    {
      name: "Data & Analytics",
      subItems: ["Data Engineering", "Analytics & Visualization", "AI & Machine Learning"],
    },
    {
      name: "Digital Strategy",
      subItems: ["Digital Marketing", "SEO Marketing Services"],
    },
    {
      name: "Emerging Technologies",
      subItems: ["IoT Solutions", "AR/VR Development", "Edge Computing", "Quantum Readiness"],
    },
  ];

  const formatSlug = (str) => str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");

  const toggleSubmenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-gray-950 text-white border-t border-gray-800 px-6 py-5 space-y-6 overflow-y-auto max-h-[90vh] rounded-t-3xl">
      {/* Services Dropdown toggle */}
      <div>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-yellow-400"
        >
          Services
          {servicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-3 pl-2 border-l border-yellow-500/40 space-y-2"
            >
              {services.map((service, index) => (
                <div key={index}>
                  {/* Service Header */}
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-full flex justify-between items-center py-2 text-base font-semibold text-left hover:text-yellow-400"
                  >
                    {service.name}
                    {activeIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {/* Subitems */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-black/30 rounded-xl border border-white/10 p-3 ml-2 space-y-2"
                      >
                        {service.subItems.map((item, i) => (
                          <li key={i}>
                            <Link
                              href={`/services/${formatSlug(service.name)}/${formatSlug(item)}`}
                              className="flex justify-between items-center text-sm text-gray-300 hover:text-white transition-all"
                              onClick={() => setIsOpen(false)}
                            >
                              <span>{item}</span>
                              <FiArrowUpRight className="text-yellow-400 opacity-0 group-hover:opacity-100 transition" />
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Links */}
      <div className="space-y-3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-gray-300 hover:text-yellow-400 text-base font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Contact Us */}
      <Link
        href="/contact"
        className="block w-full text-center px-4 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
        onClick={() => setIsOpen(false)}
      >
        Contact Us
      </Link>

      {/* Search */}
      <button className="w-full flex justify-center p-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">
        <FiSearch size={20} />
      </button>
    </div>
  );
}
