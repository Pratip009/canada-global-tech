"use client";
import { useState } from "react";
import { Upload } from "lucide-react";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/contact.avif"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Animated dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-black/70 to-gray-900/80 animate-gradientMove"></div>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 12s ease-in-out infinite;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
        {/* LEFT FORM */}
        <ContactForm />

        {/* RIGHT SIDE */}
        <div className="p-12 bg-gradient-to-b from-gray-900/60 to-gray-800/80 text-white flex flex-col justify-center">
          <div>
            <h4 className="text-sm uppercase tracking-widest text-emerald-400 mb-2">
              Work With Us
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-400 to-cyan-400 animate-text-gradient">
              Join Our Diverse Team
            </h2>
            <p className="text-gray-300 text-base mb-8 max-w-md leading-relaxed">
              Join our team of seasoned IT professionals and acquire curated
              digital expertise while working with global clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border border-emerald-400 text-emerald-300 px-6 py-3 rounded-full font-medium hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105">
                Career with Global Tech
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-all duration-300 hover:translate-x-1">
                View Open Roles →
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Image
                src="/logos/linkedin.svg"
                alt="LinkedIn Logo"
                width={140}
                height={42}
                className="hover:scale-110 hover:brightness-125 transition-all duration-300"
              />
              <a
                href="#"
                className="text-emerald-300 hover:text-emerald-100 font-semibold text-sm tracking-wide"
              >
                Browse on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
