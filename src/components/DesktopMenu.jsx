"use client";
import { useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import ServicesDropdown from "./ServicesDropdown";

export default function DesktopMenu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "Technologies", href: "/technologies" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-6 relative w-full justify-center">
      {/* Services Menu */}
      <div
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <button
          className={`font-medium transition ${
            isServicesOpen ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
          }`}
          aria-haspopup="true"
          aria-expanded={isServicesOpen}
        >
          Services
        </button>

        <ServicesDropdown
          isOpen={isServicesOpen}
          onClose={() => setIsServicesOpen(false)}
        />
      </div>

      {/* Main Links */}
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          {link.name}
        </Link>
      ))}

      {/* Contact & Search */}
      <Link
        href="/contact"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Contact Us
      </Link>

      <button className="p-2 rounded-md hover:bg-gray-100 transition">
        <FiSearch size={18} />
      </button>
    </div>
  );
}
