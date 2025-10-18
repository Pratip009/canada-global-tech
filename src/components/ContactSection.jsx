"use client";
import { useState } from "react";
import { Upload } from "lucide-react";
import Image from "next/image";

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
        <div className="bg-white/95 py-16 px-8 sm:px-10 md:px-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-gray-900">
            Get in touch with our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-lime-500 to-teal-400 animate-text-gradient">
              Digital Experts
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
            Exploring career opportunities? Click{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Career with Global Tech
            </span>{" "}
            in the next section.
          </p>

          <form className="space-y-6">
            <div>
              <label className="text-gray-700 text-sm font-semibold tracking-wide">
                Name*
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm font-semibold tracking-wide">
                Email*
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1">
                <label className="text-gray-700 text-sm font-semibold tracking-wide">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder-gray-400"
                  placeholder="Your Company"
                />
              </div>
              <div className="col-span-2">
                <label className="text-gray-700 text-sm font-semibold tracking-wide">
                  Phone Number*
                </label>
                <div className="flex items-center mt-1 border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 transition">
                  <span className="bg-gray-100 px-3 py-3 text-sm text-gray-700">
                    🇺🇸 +1
                  </span>
                  <input
                    type="tel"
                    className="flex-1 px-4 py-3 focus:outline-none"
                    placeholder="123 456 7890"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-gray-700 text-sm font-semibold tracking-wide">
                Message*
              </label>
              <textarea
                rows={4}
                maxLength={750}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder-gray-400"
                placeholder="Write your message..."
              />
              <p className="text-right text-xs text-gray-500 mt-1">
                0/750 Characters
              </p>
            </div>

            <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition cursor-pointer bg-gray-50/50">
              <Upload className="mx-auto text-emerald-600 mb-3" />
              <p className="text-gray-700 text-sm font-semibold">
                Drag & Drop Files Here
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Or click to upload your file(s)
              </p>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="opacity-0 absolute inset-0 cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-3">{files.length} of 4</p>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1 accent-emerald-600" />
              <span>Tick to receive a newsletter by email.</span>
            </div>

            <p className="text-xs text-gray-500">
              By clicking “submit”, you agree to{" "}
              <a href="#" className="underline text-emerald-600 hover:text-emerald-700">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-emerald-600 hover:text-emerald-700">
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex items-center gap-3 mt-3">
              <label className="text-sm text-gray-700 font-semibold">
                Please answer this to continue
              </label>
              <input
                type="text"
                placeholder="2 + 4 ="
                className="w-20 text-center border border-gray-300 rounded-xl py-2 px-2 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-emerald-600 via-lime-500 to-emerald-600 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>

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
