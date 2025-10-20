"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ReusableFAQSection({
  title = "Frequently Asked Questions",
  subtitle = "(FAQs)",
  faqs = [],
  containerClass = "",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`bg-white py-24 px-6 md:px-12 lg:px-24 ${containerClass}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 leading-tight">
          {title}{" "}
          <span className="text-gray-400 font-light text-3xl">{subtitle}</span>
        </h2>

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
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
