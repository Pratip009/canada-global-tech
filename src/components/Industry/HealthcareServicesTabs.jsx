"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HealthcareServicesTabs() {
  const [activeTab, setActiveTab] = useState(
    "Remote Patient Monitoring (RPM) Software"
  );

  const services = [
    {
      title: "Electronic Health Records (EHR/EMR) Software",
      heading:
        "Build a seamless, integrated patient record system to enhance clinical care and patient engagement.",
      description:
        "Empower your practice with a custom-built Electronic Health Record (EHR) or Electronic Medical Record (EMR) system designed to streamline workflows and improve patient outcomes. Our solutions go beyond digital charting to deliver a seamless patient experience.",
      image: "/industry/healthphone.jpg",
    },
    {
      title: "Medical Software & SaMD Development",
      heading:
        "Build a seamless, integrated patient record system to enhance clinical care and patient engagement.",
      description:
        "We design and develop Software as a Medical Device (SaMD) solutions that comply with FDA and EU MDR standards, enhancing patient outcomes and safety.",
      image: "/industry/healthphone.jpg",
    },
    {
      title: "Telemedicine Software Solutions",
      heading:
        "Build a seamless, integrated patient record system to enhance clinical care and patient engagement.",
      description:
        "Enable remote consultations, real-time communication, and virtual clinics with our advanced telemedicine platforms.",
      image: "/industry/healthphone.jpg",
    },
    {
      title: "Healthcare SaaS & Product Development",
      heading:
        "Build a seamless, integrated patient record system to enhance clinical care and patient engagement.",
      description:
        "From MVPs to full-scale SaaS products, we build scalable healthcare platforms that integrate seamlessly with medical systems and devices.",
      image: "/industry/healthphone.jpg",
    },
    {
      title: "Remote Patient Monitoring (RPM) Software",
      heading:
        "Build a seamless, integrated patient record system to enhance clinical care and patient engagement.",
      description:
        "Gain continuous health insights and enable proactive care with advanced remote monitoring. Our custom RPM platforms connect directly to patients, leveraging wearable data and IoT-driven medical equipment.",
      image: "/industry/healthphone.jpg",
    },
    {
      title: "mHealth App Development",
      heading:
        "Build a seamless, integrated patient record system to enhance clinical care and patient engagement.",
      description:
        "Empower patients and clinicians with secure, feature-rich mobile health apps for wellness tracking, appointment scheduling, and real-time care coordination.",
      image: "/industry/healthphone.jpg",
    },
    {
      title: "HL7 & FHIR Integration",
      heading:
        "Build a seamless, integrated patient record system to enhance clinical care and patient engagement.",
      description:
        "We ensure secure, compliant data interoperability with HL7 and FHIR standards, enabling real-time exchange across healthcare systems.",
      image: "/industry/healthphone.jpg",
    },
  ];

  const activeService = services.find((s) => s.title === activeTab);

  return (
    <section className="bg-gray-50 text-gray-900 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-mono text-gray-500 mb-2">Our Offerings</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Healthcare Software
            </span>{" "}
            Services
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_1.5fr_1.5fr] gap-10 items-start">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={activeService.image}
              alt={activeService.title}
              width={500}
              height={500}
              className="object-cover w-full h-[400px]"
            />
          </div>

          {/* Middle Tabs */}
          <div className="border-r border-gray-200 pr-6 flex flex-col justify-between">
            <div className="space-y-4">
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setActiveTab(service.title)}
                  className={`block text-left w-full font-semibold text-xl md:text-2xl mb-4 transition-colors ${
                    activeTab === service.title
                      ? "text-teal-700 font-semibold"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {activeTab === service.title ? (
                    <span className="text-teal-700 font-semibold">
                      {service.title}
                    </span>
                  ) : (
                    service.title
                  )}
                </button>
              ))}
            </div>

            {/* Chevron Icon at Bottom */}
            <div className="flex justify-center mt-6 text-gray-400">
              <ChevronDown size={20} />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-5 pl-2">
            <h3 className="text-3xl font-semibold leading-snug">
              {activeService.heading}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {activeService.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
