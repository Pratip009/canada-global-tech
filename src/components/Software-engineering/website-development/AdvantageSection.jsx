"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Lightbulb, Shield, Users, Headphones } from "lucide-react";

export default function AdvantageSection() {
  const title = "The Canada Global Tech Advantage";
  const description =
    "At Canada Global Tech, we understand that your business seeks a reliable and committed web development partner.";

  const image = "/software/website/custom.webp";

  const advantages = [
    {
      title: "Agile Process",
      description:
        "Our agile website development process helps us deliver high quality, sustainable and risk-free solutions. Integrating DevOps helps us meet timelines, adhere to industry standards, and build transparent client communication channels.",
      icon: <Rocket size={40} />,
    },
    {
      title: "Proactive Consulting",
      description:
        "We’re dedicated to excellence. Our specialized website development consultancy ensures maximum ROI by optimizing digital gains, allowing us to consistently deliver top-quality web development services.",
      icon: <Lightbulb size={40} />,
    },
    {
      title: "Security",
      description:
        "As a premier web development company, security is indispensable to what we do. Whether it’s customer security, app security, or data security, maintaining the integrity of your website is a non-negotiable commitment.",
      icon: <Shield size={40} />,
    },
    {
      title: "Seamless CX",
      description:
        "Memorable experiences translate into return visits. From conceptualization to launch, our web development services integrate measures to deliver exceptional customer experiences with compelling aesthetics and seamless functionalities.",
      icon: <Users size={40} />,
    },
    {
      title: "Post Development Support",
      description:
        "As a pioneering web development company, we ensure your digital solutions remain efficient and effective. We provide ongoing maintenance, timely updates, and prompt issue resolution to maximize performance and extend your investment lifespan.",
      icon: <Headphones size={40} />,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="uppercase text-gray-400 tracking-wide mb-4 text-sm sm:text-base">
              {title}
            </h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-8">
              {description}
            </p>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt="Canada Global Tech Advantage"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-gray-700 pt-6"
            >
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="text-purple-400 mt-1 shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
