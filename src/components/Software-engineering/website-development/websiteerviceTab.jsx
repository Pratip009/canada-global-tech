"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function WebsiteServicesTab() {
  const [activeTab, setActiveTab] = useState(
    "Website Revamp & Redesign"
  );

  const services = [
    {
      title: "Website Revamp & Redesign",
      heading:
        "Transform your website’s graphics, usability, performance, and credibility with our website revamp and website redesign services",
      description:
        "Many companies face this challenge – How can we ensure longer visitor sessions and improve conversion rates? We answer this by helping you reimagine, refresh and revamp your website, whether you’re a startup, an MSME or an Enterprise. We create personalized content, customizable landing pages with a focus on search engine optimization. Partner with us to learn how we elevate dated poor websites and turn them into exceptional performers.",
      image: "/software/website/web.webp",
    },
    {
      title: "Website Migration",
      heading:
        "Effortlessly move your entire web presence (domain, hosting, or platform) with no downtime and zero traffic loss",
      description:
        "We plan and carry out your website migration (from DNS and redirects to content, SSL, and analytics) making sure your SEO stays intact and your users enjoy a seamless experience. Our zero-downtime approach keeps everything running smoothly, while we handle the tricky technical stuff so you can focus on growing your business without interruptions. We handle all technical complexities so you can focus entirely on your business growth.",
      image: "/software/website/web.webp",
    },
    {
      title: "Website Maintenance and Optimization",
      heading:
        "Maximize your site’s performance with our proactive maintenance and optimization solutions",
      description:
        "We monitor, update, and enhance your website’s functionality, speed, and security to keep it performing at its peak. From technical audits to content refreshes, we ensure your digital platform stays reliable, relevant, and fully optimized to support evolving business goals and deliver measurable results.By partnering with us, you can focus on your core business activities while we ensure your website operates at its best, adapting to the ever-changing digital landscape.",
      image: "/software/website/web.webp",
    },
    {
      title: "Web 3.0",
      heading:
        "Give your users control over their data and ensure safe transactions with our Web 3.0 development services",
      description:
        "We weave the elements of decentralization, ubiquity, and connectivity into our solutions while delivering our industry-leading expertise in Web 3.0 development. As a Web 3.0 development company, we foster trust using the latest technologies like blockchain, cryptography, AI/ML, and IoT to ensure transparency, efficiency, and democratization.",

      image: "/software/website/web.webp",
    },
    {
      title: "eCommerce Website Development",
      heading:
        "Build a seamless, integrated eCommerce platform to enhance online shopping experiences.",
      description:
        "We create custom eCommerce solutions designed to meet your target audience’s needs and expectations, transforming satisfied users into loyal customers. By thoroughly researching your business requirements, we integrate robust and secure architectural workflows that adhere to industry standards for customer experience and security. Our eCommerce web solutions strike the perfect balance between aesthetics and functionality, offering an ideal fit for your unique needs.",
      image: "/software/website/web.webp",
    },
    {
      title: "Content Management Solutions",
      heading:
        "Every backend web development project is unique, and we create custom solutions to fit your business needs",
      description:
        "What is backend development? It refers to a process of building robust, functionality-rich, and scalable development architectures that powers the core functionality of a website.Banking on technical prowess, agile practices, and handpicked talent, we design, build, test, and deploy solutions that help scale performance and exploit opportunities at market speed. ",
      image: "/software/website/web.webp",
    },
    {
      title: "Frontend & Backend Development",
      heading:
        "Create pixel-perfect web solutions with Canada Global Tech, one of the top web development agencies",
      description:
        "Backed by exceptional technical expertise and ingenuity, our front-end developers craft captivating, responsive front-end website development solutions that boost engagement and facilitate conversions.Our front-end developers are highly specialized and strive to create world-class solutions that help you carve a market niche. We don’t stop working until your front-end web development projects are exceptionally stunning, responsive, and functional.",
      image: "/software/website/web.webp",
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
              Bespoke Healthcare Software
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
