"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const elearningSolutions = [
  {
    title: "Seamless Platform Integration",
    description:
      "Connect Learning Management Systems (LMS), HR software, and content repositories effortlessly through robust APIs and integration frameworks. Ensure consistent learning experiences and unified reporting across your digital learning ecosystem.",
    points: [
      "LMS & HRMS Integration",
      "API & Plugin Development",
      "Single Sign-On (SSO) Implementation",
      "Data Synchronization & Migration",
    ],
    image: "/industry/el1.webp",
  },
  {
    title: "Data Security and Compliance",
    description:
      "Safeguard learner data and maintain compliance with global standards like GDPR, FERPA, and SCORM. Our solutions ensure end-to-end data protection, access control, and system reliability for secure online learning environments.",
    points: [
      "GDPR & FERPA Compliance",
      "Data Encryption & Secure Storage",
      "Role-Based Access Control",
      "Regular Security Audits & Vulnerability Testing",
    ],
    image: "/industry/el2.png",
  },
  {
    title: "Engaging Learner Experience",
    description:
      "Boost learner motivation and retention with interactive and user-friendly digital learning tools. From gamification to social learning, we create immersive experiences that make learning personal and rewarding.",
    points: [
      "Gamified Learning Modules",
      "Interactive Assessments & Simulations",
      "Personalized Learning Paths",
      "Social & Collaborative Learning Features",
    ],
    image: "/industry/el3.webp",
  },
  {
    title: "AI-Powered Learning & Analytics",
    description:
      "Harness artificial intelligence to deliver adaptive learning, personalized content recommendations, and actionable insights. AI-driven analytics help organizations track progress, measure performance, and optimize learning outcomes.",
    points: [
      "Adaptive Learning Algorithms",
      "Predictive Performance Analytics",
      "Automated Content Recommendations",
      "Learning Behavior Insights Dashboards",
    ],
    image: "/industry/el4.webp",
  },
  {
    title: "Workflow Automation for Education",
    description:
      "Simplify administrative tasks and streamline learning operations through intelligent automation. From enrollment to certification, we help institutions and organizations save time and focus on improving learning outcomes.",
    points: [
      "Automated Enrollment & Certification",
      "Instructor & Resource Management",
      "Smart Notification & Scheduling Systems",
      "Real-Time Progress Tracking & Reporting",
    ],
    image: "/industry/el5.png",
  },
];

export default function ElearningSolutionsSlider() {
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
        {elearningSolutions.map((item, index) => (
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
