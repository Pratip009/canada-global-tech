"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactSectionContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    captcha: "",
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0d1021] via-[#111633] to-[#1b1e3a] text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <p className="text-sm text-gray-400 mb-2">Home / Contact Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Let’s Bring Your{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Vision to Life
              </span>
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We offer no obligation consultation and feasibility analysis.
              Embark on a journey of digital transformation with us.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Software & Application Development",
                desc: "30-Day Risk-Free Pilot Program",
              },
              {
                title: "Website Design & Development",
                desc: "UX/UI Audit & Design Ideation on us.",
              },
              {
                title: "Dedicated Developer (Skill match Guarantee)",
                desc: "1 week trial (20 hours)",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-teal-400 w-6 h-6 mt-1" />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-4">
            * <a href="#" className="underline text-teal-400">Terms and conditions</a> apply
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-gray-900 rounded-3xl shadow-xl p-8 sm:p-10">
          <h3 className="text-2xl font-semibold mb-8">Talk to Our Experts</h3>
          <form className="space-y-6">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name*</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email*</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Company + Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                  placeholder="Company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number*</label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3 bg-gray-100 text-gray-600">🇮🇳 +91</span>
                  <input
                    type="tel"
                    className="w-full p-3 outline-none"
                    placeholder="9876543210"
                  />
                </div>
              </div>
            </div>

            {/* Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-2">
                What are you looking for?
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none">
                <option>Select a service</option>
                <option>Web App Development</option>
                <option>UI/UX Design</option>
                <option>Dedicated Developers</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message*</label>
              <textarea
                rows="4"
                maxLength="750"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                placeholder="Write your message..."
              ></textarea>
              <p className="text-right text-xs text-gray-400">0/750 Characters</p>
            </div>

            {/* File Upload (dummy) */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-sm text-gray-500">
              Drag & Drop Files Here
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 accent-teal-500" />
              <p>
                Tick to stay informed with newsletters. Read our{" "}
                <a href="#" className="underline text-teal-500">privacy policy</a>.
              </p>
            </div>

            {/* Captcha + Submit */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <p>Please answer to continue</p>
                <input
                  type="text"
                  placeholder="6+3="
                  className="w-16 border border-gray-300 rounded-lg p-2 text-center"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
