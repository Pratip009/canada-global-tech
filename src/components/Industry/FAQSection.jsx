"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What is the typical cost range for developing custom healthcare software?" },
  { question: "How much time does medical app implementation take?" },
  { question: "Do you develop and implement healthcare software products not mentioned on this page?" },
  { question: "What types of custom healthcare software development solutions are available?" },
  { question: "Can medical software development services customize software solutions after they are deployed?" },
  { question: "Why should I invest in custom healthcare software development solutions?" },
  { question: "Can your healthcare software solutions integrate with existing systems or third-party applications?" },
  { question: "Can you ensure our healthcare software is HIPAA compliant?" },
  { question: "What technology stack do you recommend for healthcare applications?" },
  { question: "How long does it take to develop a custom healthcare software solution?" },
  { question: "What is the difference between EMR and EHR?" },
  { question: "What are the Benefits of LLMs in healthcare research?" },
  { question: "How is Generative AI for hospitals transforming healthcare delivery?" },
  { question: "Why is AI for medical documentation important for healthcare providers?" },
  { question: "What is the role of predictive analytics in healthcare with AI?" },
  { question: "How does healthcare digital transformation with AI benefit organizations?" },
  { question: "What is the impact of AI in patient monitoring systems?" },
  { question: "What are HIPAA-compliant AI tools?" },
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
                  openIndex === index ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  We provide tailored solutions based on your healthcare business needs. 
                  Contact our team for detailed estimates and implementation timelines.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
