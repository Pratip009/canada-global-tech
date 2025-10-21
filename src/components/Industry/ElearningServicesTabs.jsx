"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ElearningServicesTabs() {
  const [activeTab, setActiveTab] = useState(
    "Remote Patient Monitoring (RPM) Software"
  );

  const services = [
    {
      title: "Education Software Consulting",
      heading: "eLearning consulting to simplify eLearning app development",
      description:
        "Our process begins with a thorough evaluation of your needs, goals, and competitor research. These inputs will help us formulate a strategic plan and roadmap for your eLearning software development. Integrating large language models in education platforms helps align your business goals with the expectations of your target audience. Whether you need cohort learning platforms, corporate training systems, gamification software, or an LMS for a University and its students",
      image: "/industry/services.webp",
    },
    {
      title: "Learning Management System LMS",
      heading:
        "Develop dynamic LMS platforms to streamline education and boost engagement",
      description:
        "Augment your educational offerings with an AI-based LMS development that streamlines course management and delivery. Leverage our custom eLearning app development services to integrate specialized features like personalized learning paths, virtual classrooms, and real-time assessments.These tools simplify administration, enhance the learner experience, and improve retention rates and outcomes. Integrating modern technologies like AI-powered microlearning platforms and language learning software will further future-proof your business and drive growth.",
      image: "/industry/services.webp",
    },
    {
      title: "Corporate Learning Management Systems",
      heading:
        "Create a custom Enterprise LMS to support your growing institutional needs",
      description:
        "Empower your organization’s learning and development programs with AI-driven corporate eLearning solutions capable of meeting its diverse needs. From training modules to certification courses, our eLearning development software grows with your business. We integrate our corporate eLearning solutions with AI, ensuring they continuously adapt to evolving workforce needs",
      image: "/industry/services.webp",
    },
    {
      title: "eLearning App Development",
      heading:
        "Build responsive and engaging eLearning apps for impactful learning and training",
      description:
        "Accessibility and engagement drive the success of eLearning app development.  Whether you’re targeting students, employees, or professionals, our apps deliver high-quality content for deep learning and skill development. Our designs are responsive, accessible via keyboards and voiceover or talkback, and user-friendly, making eLearning fun and flexible.",
      image: "/industry/services.webp",
    },
    {
      title: "Remote Patient Monitoring (RPM) Software",
      heading:
        "Build a seamless, integrated patient record system to enhance clinical care and patient engagement.",
      description:
        "Gain continuous health insights and enable proactive care with advanced remote monitoring. Our custom RPM platforms connect directly to patients, leveraging wearable data and IoT-driven medical equipment.",
      image: "/industry/services.webp",
    },
    {
      title: "Custom eLearning Portals",
      heading:
        "Develop secure portals with multilingual support and personalized learning paths",
      description:
        "From providing highly structured storage for learning materials to intuitive course creation tools, our eLearning portal development caters to the varying needs of your niche audience.Furthermore, our solutions, such as learning experience platforms (LXPs), enable the efficient building and management of content, thereby driving motivation and engagement. We improve your user experience with an intuitive UI and simple navigation.",
      image: "/industry/services.webp",
    },
    {
      title: "eLearning Software Modernization",
      heading:
        "Modernize your eLearning platform to enhance its performance and functionality",
      description:
        "Upgrade to the next-gen Edtech AI solutions and stay relevant in the rapidly evolving landscape of AI eLearning solutions in USA, IMEA and elsewhere. Leverage our expertise to integrate futuristic digital learning trends like massive open online courses (MOOCs) and outcome-based education software. Our services also include integrating the latest technologies to help migrate your legacy apps and upgrade outdated systems. ",
      image: "/industry/services.webp",
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
