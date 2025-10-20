"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How to develop a web app?",
    answer:
      "Developing a web app involves several key stages: planning and requirement analysis, choosing the right tech stack, designing the UI/UX, developing the frontend and backend, integrating APIs and databases, testing for performance and security, and finally deploying the app to a server or cloud platform. Using modern frameworks like Next.js, React, or Node.js can accelerate development and ensure scalability.",
  },
  {
    question: "Should a website be built using frameworks or pure code?",
    answer:
      "Building with frameworks is generally preferred because they provide pre-built structures, scalability, and faster development. Frameworks like Next.js, React, and Django help maintain clean, efficient, and secure code. Pure code (HTML, CSS, JS) may work for small, static websites but becomes inefficient for complex or large-scale projects.",
  },
  {
    question: "Should I outsource or hire in-house for web development?",
    answer:
      "Outsourcing is ideal for businesses that want access to skilled developers, faster delivery, and cost efficiency without managing a full-time team. In-house hiring works better for organizations with ongoing, long-term projects that require close collaboration and daily oversight. Many companies use a hybrid model for the best balance of control and cost.",
  },
  {
    question: "How long does it take to develop a web app?",
    answer:
      "The development timeline depends on the complexity and scope of the project. A basic web app may take 4–8 weeks, while complex enterprise or SaaS platforms can take 3–6 months or more. Factors like design revisions, integrations, and testing also affect the overall duration.",
  },
  {
    question: "How much does web app development cost?",
    answer:
      "Web app development costs vary based on features, design complexity, technology stack, and team location. A simple app may cost between $5,000–$15,000, while advanced or enterprise-level solutions can range from $30,000–$100,000 or more. It's best to discuss project requirements for an accurate estimate.",
  },
  {
    question: "How do you ensure web application security?",
    answer:
      "We implement robust security practices such as HTTPS/SSL encryption, regular code reviews, data validation, secure authentication (OAuth, JWT), input sanitization, and regular penetration testing. We also stay compliant with industry standards like GDPR and HIPAA where applicable to ensure user data protection.",
  },
  {
    question: "How do Progressive Web Apps (PWAs) work?",
    answer:
      "Progressive Web Apps (PWAs) combine the best of web and mobile experiences. They use modern web technologies like Service Workers and Web App Manifests to enable offline access, push notifications, and installability on devices. PWAs load quickly, work across browsers, and can be added to a user’s home screen without going through app stores.",
  },
  {
    question: "What types of web apps can you develop?",
    answer:
      "We develop a wide range of web applications, including custom enterprise platforms, eCommerce solutions, SaaS applications, Progressive Web Apps (PWAs), CRM and ERP systems, eLearning portals, healthcare platforms, booking and scheduling apps, and data analytics dashboards. Each solution is designed for high performance, security, and user engagement.",
  },
];

export default function WebFAQ() {
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
              {/* Question Row */}
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

              {/* Answer Section */}
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
