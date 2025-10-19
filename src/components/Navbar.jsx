"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCanadianMapleLeaf } from "react-icons/fa";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navLinks = [{ name: "Case Studies", href: "/case-studies" }];

  // Show navbar only when at top
  useEffect(() => {
    const handleScroll = () => setShowNavbar(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showNavbar) return null;

  return (
    <nav className="w-full bg-transparent z-50 absolute top-12 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-all duration-300"
        >
          {/* Maple Leaf Icon */}
          <FaCanadianMapleLeaf className="text-red-500 text-3xl group-hover:rotate-12 transition-transform duration-300" />

          {/* Stylish Text */}
          <span className="text-2xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-[Poppins]">
            Canada <span className="text-red-500 font-bold">Global Tech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-white font-medium flex items-center gap-1">
              Services
              <MdKeyboardArrowDown
                size={20}
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180 text-yellow-400" : ""
                }`}
              />
            </button>
            <ServicesDropdown isOpen={isServicesOpen} isMobile={false} />
          </div>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button className="text-white font-medium flex items-center gap-1">
              Industries
              <MdKeyboardArrowDown
                size={20}
                className={`transition-transform duration-300 ${
                  isIndustriesOpen ? "rotate-180 text-yellow-400" : ""
                }`}
              />
            </button>
            <IndustriesDropdown isOpen={isIndustriesOpen} isMobile={false} />
          </div>

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className="text-white font-medium flex items-center gap-1">
              Resources
              <MdKeyboardArrowDown
                size={20}
                className={`transition-transform duration-300 ${
                  isResourcesOpen ? "rotate-180 text-yellow-400" : ""
                }`}
              />
            </button>
            <ResourcesDropdown isOpen={isResourcesOpen} isMobile={false} />
          </div>

          {/* Company */}
          <div
            className="relative"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button className="text-white font-medium flex items-center gap-1">
              Company
              <MdKeyboardArrowDown
                size={20}
                className={`transition-transform duration-300 ${
                  isCompanyOpen ? "rotate-180 text-yellow-400" : ""
                }`}
              />
            </button>
            <CompanyDropdown isOpen={isCompanyOpen} isMobile={false} />
          </div>

          {/* Extra Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-yellow-400 font-medium transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            href="/contact"
            className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition"
          >
            Contact Us
          </Link>

          {/* Search */}
          <button className="p-2 rounded-md hover:bg-white/20 transition text-white">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/20 px-6 py-4 space-y-4 max-h-[80vh] overflow-hidden">
          {/* Services */}
          <div>
            <button
              className="w-full flex justify-between items-center text-white font-medium mb-2"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span className="flex items-center gap-1">
                Services <MdKeyboardArrowDown size={20} />
              </span>
              <span>{isServicesOpen ? "-" : "+"}</span>
            </button>
            <ServicesDropdown
              isOpen={isServicesOpen}
              onClose={() => setIsServicesOpen(false)}
              isMobile
            />
          </div>

          {/* Industries */}
          <div>
            <button
              className="w-full flex justify-between items-center text-white font-medium mb-2"
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
            >
              <span className="flex items-center gap-1">
                Industries <MdKeyboardArrowDown size={20} />
              </span>
              <span>{isIndustriesOpen ? "-" : "+"}</span>
            </button>
            <IndustriesDropdown isOpen={isIndustriesOpen} isMobile />
          </div>

          {/* Resources */}
          <div>
            <button
              className="w-full flex justify-between items-center text-white font-medium mb-2"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              <span className="flex items-center gap-1">
                Resources <MdKeyboardArrowDown size={20} />
              </span>
              <span>{isResourcesOpen ? "-" : "+"}</span>
            </button>
            <ResourcesDropdown isOpen={isResourcesOpen} isMobile />
          </div>

          {/* Company */}
          <div>
            <button
              className="w-full flex justify-between items-center text-white font-medium mb-2"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              <span className="flex items-center gap-1">
                Company <MdKeyboardArrowDown size={20} />
              </span>
              <span>{isCompanyOpen ? "-" : "+"}</span>
            </button>
            <CompanyDropdown isOpen={isCompanyOpen} isMobile />
          </div>

          {/* Extra Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-white hover:text-yellow-400 font-medium transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Us */}
          <Link
            href="/contact"
            className="block w-full text-center px-4 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          {/* Search */}
          <button className="w-full flex justify-center p-2 rounded-md hover:bg-white/20 transition text-white">
            <FiSearch size={20} />
          </button>
        </div>
      )}
    </nav>
  );
}
