"use client";
import { useState } from "react";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import { FiSearch } from "react-icons/fi";
export default function MobileMenu({ isOpen, setIsOpen }) {
  const navLinks = [
    { name: "Technologies", href: "/technologies" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
  ];

  const [servicesOpen, setServicesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
      {/* Services Dropdown toggle */}
      <div>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex justify-between items-center text-gray-700 font-medium mb-2"
        >
          Services
          <span>{servicesOpen ? "-" : "-"}</span>
        </button>

        {/* Show Services submenu only if toggled */}
        {servicesOpen && <ServicesDropdown isMobile />}
      </div>

      {/* Main navigation links */}
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="block text-gray-700 hover:text-blue-600 font-medium transition"
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}

      {/* Contact Us Button */}
      <Link
        href="/contact"
        className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        onClick={() => setIsOpen(false)}
      >
        Contact Us
      </Link>

      {/* Search Button */}
      <button className="w-full flex justify-center p-2 rounded-md hover:bg-gray-100 transition text-gray-800">
        <FiSearch size={20} />
      </button>
    </div>
  );
}
