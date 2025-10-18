"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navLinks = [
    { name: "Case Studies", href: "/case-studies" },
    
  ];

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
        <Link href="/" className="text-xl font-bold text-white">
          Canada Global Tech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Services */}
          
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-white font-medium flex items-center">
              Services
            </button>
            <ServicesDropdown isOpen={isServicesOpen} isMobile={false} />
          </div>
          {/* Technologies */}
          <div
            className="relative"
            onMouseEnter={() => setIsTechOpen(true)}
            onMouseLeave={() => setIsTechOpen(false)}
          >
            <button className="text-white font-medium flex items-center">
              Technologies
            </button>
            <TechnologiesDropdown isOpen={isTechOpen} isMobile={false} />
          </div>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button className="text-white font-medium flex items-center">
              Industries
            </button>
            <IndustriesDropdown isOpen={isIndustriesOpen} isMobile={false} />
          </div>

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className="text-white font-medium flex items-center">
              Resources
            </button>
            <ResourcesDropdown isOpen={isResourcesOpen} isMobile={false} />
          </div>

          {/* Company */}
          <div
            className="relative"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button className="text-white font-medium flex items-center">
              Company
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
              Services
              <span>{isServicesOpen ? "-" : "+"}</span>
            </button>
            <ServicesDropdown
              isOpen={isServicesOpen}
              onClose={() => setIsServicesOpen(false)}
              isMobile
            />
          </div>

          {/* Technologies */}
          <div>
            <button
              className="w-full flex justify-between items-center text-white font-medium mb-2"
              onClick={() => setIsTechOpen(!isTechOpen)}
            >
              Technologies
              <span>{isTechOpen ? "-" : "+"}</span>
            </button>
            <TechnologiesDropdown isOpen={isTechOpen} isMobile />
          </div>

          {/* Industries */}
          <div>
            <button
              className="w-full flex justify-between items-center text-white font-medium mb-2"
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
            >
              Industries
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
              Resources
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
              Company
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
