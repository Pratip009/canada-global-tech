"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const healthcareSolutions = [
  {
    title: "Interoperability and Integration",
    description:
      "Ensure seamless data exchange between disparate systems like EMR, LMS, pharmacy, and billing software using standards like HL7, FHIR, and DICOM for a unified health record.",
    points: [
      "HL7/FHIR Integration",
      "API Development",
      "Legacy System Modernization",
      "Data Migration Services",
    ],
    image: "/industry/slider1.png",
  },
  {
    title: "Data Security and Compliance",
    description:
      "Implement robust security protocols and ensure adherence to international healthcare regulations to protect sensitive patient health information (PHI).",
    points: [
      "HIPAA & GDPR Compliance",
      "End-to-End Data Encryption",
      "Multi-Factor Authentication",
      "Regular Security Audits & Penetration Testing",
    ],
    image: "/industry/slider3.png",
  },
  {
    title: "Patient Engagement Tools",
    description:
      "Empower patients to take an active role in their healthcare journey with intuitive portals and communication tools that foster better engagement and outcomes.",
    points: [
      "Patient Portals",
      "Appointment Scheduling",
      "Secure Messaging",
      "Health Education Libraries",
    ],
    image: "/industry/slider2.png",
  },
  {
    title: "AI-Powered Diagnostics & Predictive Analytics",
    description:
      "Leverage artificial intelligence and machine learning to enhance diagnostic accuracy and predict health risks before they escalate. Our AI-driven healthcare tools transform clinical data into actionable insights for faster, data-backed decisions.",
    points: [
      "Predictive Analytics for Early Diagnosis",
      "AI-Based Medical Imaging Analysis",
      "Personalized Treatment Recommendations",
      "Clinical Decision Support Systems",
    ],
    image: "/industry/slider4.webp",
  },
  {
    title: "Healthcare Workflow Automation",
    description:
      "Optimize hospital operations and administrative efficiency with intelligent workflow automation. Our automation platforms reduce manual errors, improve patient throughput, and streamline repetitive healthcare processes.",
    points: [
      "Automated Billing & Claims Processing",
      "Intelligent Appointment Scheduling",
      "Resource & Staff Management",
      "Real-Time Reporting Dashboards",
    ],
    image: "/industry/slider5.webp",
  },
];

export default function HealthcareSolutionsSlider() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-teal-400 font-mono tracking-wide mb-2">
          Our Industry Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Some Advanced{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Solutions & Features
          </span>{" "}
          we have delivered
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16"
      >
        {healthcareSolutions.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group bg-white/5 rounded-3xl overflow-hidden shadow-xl backdrop-blur-md flex flex-col h-full">
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="bg-white text-gray-800 rounded-3xl shadow-xl mx-5 mt-[-2.5rem] p-6 relative z-10 flex flex-col justify-between min-h-[340px]">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                </div>
                <ul className="text-sm text-gray-700 space-y-1 mt-auto">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-teal-500">★</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}
        <div className="custom-swiper-pagination mt-10 flex justify-center gap-3"></div>
      </Swiper>

      {/* Pagination Styling */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #14b8a6, #3b82f6);
          transform: scale(1.4);
          box-shadow: 0 0 12px rgba(20, 184, 166, 0.8);
        }
      `}</style>
    </section>
  );
}
