"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "Can you assist with integrating third-party tools in your eLearning platform?",
  },
  {
    question:
      "Can you provide a cost estimate for developing a customized eLearning software platform?",
  },
  {
    question: "What are the platforms used for building eLearning software?",
  },
  {
    question:
      "How long does it typically take to develop a custom eLearning software solution?",
  },
  {
    question: "What is the role of AI in eLearning software development?",
  },
  {
    question:
      "Can you integrate AI into an existing Learning Management System (LMS)?",
  },
  {
    question: "What technologies are used to build AI-based EdTech platforms?",
  },
  {
    question: "What is the future of AI in eLearning?",
  },
  {
    question:
      "Our Resources — Explore our digital insights to empower eLearning innovation.",
  },
];

export default function ElearningFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 leading-tight">
          Frequently Asked Questions{" "}
          <span className="text-gray-400 font-light text-3xl">(FAQs)</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="cursor-pointer bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-8"
            >
              {/* Question */}
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug max-w-3xl">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <Minus className="w-7 h-7 text-gray-500" />
                  ) : (
                    <Plus className="w-7 h-7 text-gray-500" />
                  )}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  We specialize in building and enhancing eLearning platforms
                  with modern technologies, AI capabilities, and seamless
                  integrations. Contact our experts to explore cost estimates
                  and tailored development timelines.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
