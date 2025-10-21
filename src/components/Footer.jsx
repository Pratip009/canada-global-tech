"use client";
import Link from "next/link";
import { FaCanadianMapleLeaf } from "react-icons/fa";

export default function Footer() {
  const coreServices = [
    {
      name: "Custom Software Development",
      href: "/services/software-engineering/custom-software-development",
    },
    {
      name: "Website Development",
      href: "/services/software-engineering/website-development",
    },
    {
      name: "Mobile App Development",
      href: "/services/software-engineering/mobile-app-development",
    },
    {
      name: "Ecommerce Development",
      href: "/services/software-engineering/e-commerce-development",
    },
    {
      name: "24/7 Support & Maintenance",
      href: "/services/cloud-engineering/24-7-support-maintenance",
    },
    {
      name: "Digital Marketing",
      href: "/services/digital-strategy/digital-marketing",
    },
  ];

  const company = [
    { name: "About", href: "/company/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/resources/blogs" },
    { name: "Gallery", href: "/resources/ui-ux-gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Our Process", href: "/company/our-process" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* ✅ Logo Section (Horizontal layout) */}
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all duration-300"
          >
            {/* Maple Leaf Icon */}
            <FaCanadianMapleLeaf className="text-red-500 text-4xl group-hover:rotate-12 transition-transform duration-300" />

            {/* Text Logo */}
            <span className="text-2xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-[Poppins] leading-tight">
              Canada <span className="text-red-500 font-bold">Global Tech</span>
            </span>
          </Link>

          <p className="text-sm text-gray-400 max-w-xs mt-2">
            Building world-class digital experiences with innovation and
            excellence across global industries.
          </p>
        </div>

        {/* ✅ Core Services */}
        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">Core Services</h2>
          {coreServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block hover:text-yellow-500 transition"
            >
              {service.name} <span className="float-right">›</span>
            </Link>
          ))}
        </div>

        {/* ✅ Company */}
        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">Company</h2>
          {company.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block hover:text-yellow-500 transition"
            >
              {item.name} <span className="float-right">›</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Contact & Social */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-gray-700 pt-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="text-white font-bold">CANADA</h3>
          <p>
            3465 Platinum Dr Unit 93 Unit 93 , Mississauga , ON L5M 7N4 , Canada
          </p>
          <p>-5513441485</p>
        </div>

        <div>
          <h3 className="text-white font-bold">Mail us at</h3>
          <p>Info@gts-ca.com</p>
        </div>

        <div>
          <h3 className="text-white font-bold">Get Connected</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              X
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-8 border-t border-gray-700 pt-4 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Canada Global Tech Inc. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0 items-center">
          <Link
            href="/privacy-policy"
            className="hover:text-gray-300 transition"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
