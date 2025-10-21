"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What types of services fall under web development?" },
  { question: "Should I outsource or hire in-house for web development?" },
  {
    question:
      "Why should I choose Canada Global Tech over other web development agencies?",
  },
  { question: "How is the web development team structured?" },
  {
    question:
      "How can I benefit from using your ecommerce web development services?",
  },
  { question: "How much does it cost to develop a website?" },
  { question: "How can I calculate website development costs?" },
  { question: "What is the average cost of designing a website?" },
  { question: "What is the typical cost for a website revamp?" },
  {
    question:
      "What key steps should be followed to ensure a successful website revamp project?",
  },
  {
    question:
      "When is the Right Time for a Website Redesign, and How Often Should it Be Done?",
  },
  { question: "How long does a website revamp take?" },
  { question: "Do you provide SEO optimization as part of web development?" },
  {
    question:
      "What are the advantages of investing in a custom website development solution for my business?",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 leading-tight">
          Frequently Asked Questions{" "}
          <span className="text-gray-400 font-light text-3xl">(FAQs)</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="cursor-pointer bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-8"
            >
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

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  We provide tailored web development solutions aligned with
                  your business goals. Contact our team for detailed project
                  estimates and implementation timelines.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
