"use client";
import Link from "next/link";

export default function Footer() {
  const coreServices = [
    "Custom Software Development",
    "Website Development",
    "Mobile App Development",
    "Ecommerce Development",
    "Data Engineering",
    "IT Staff Augmentation",
  ];

  const technologies = [
    "Backend",
    "Frontend",
    "CMS",
    "Mobile",
    "Cloud",
    "Security",
  ];

  const company = [
    "About",
    "Case Studies",
    "Blogs",
    "Careers",
    "Contact",
    "Sitemap",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Footer Links */}
        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">Core Services</h2>
          {coreServices.map((item) => (
            <Link
              key={item}
              href="#"
              className="block hover:text-yellow-500 transition"
            >
              {item} <span className="float-right">›</span>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">Technology</h2>
          {technologies.map((item) => (
            <Link
              key={item}
              href="#"
              className="block hover:text-yellow-500 transition"
            >
              {item} <span className="float-right">›</span>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">Company</h2>
          {company.map((item) => (
            <Link
              key={item}
              href="#"
              className="block hover:text-yellow-500 transition"
            >
              {item} <span className="float-right">›</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact & Social */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-gray-700 pt-8 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 className="text-white font-bold">USA</h3>
          <p>79 Madison Avenue #723, New York, NY 10016</p>
          <p>-1 201 761 9432</p>
        </div>

        <div>
          <h3 className="text-white font-bold">IND</h3>
          <p>DN 53, Salt Lake, Sector V, Kolkata 700091</p>
          <p>-91 93309 01942</p>
          <p>-033 2335 0953</p>
        </div>

        <div>
          <h3 className="text-white font-bold">Mail us at</h3>
          <p>hello@unifiedinfotech.net</p>
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

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-8 border-t border-gray-700 pt-4 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Unified Infotech Inc. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0 items-center">
          <p>Privacy Policy</p>
          
        </div>
      </div>
    </footer>
  );
}
