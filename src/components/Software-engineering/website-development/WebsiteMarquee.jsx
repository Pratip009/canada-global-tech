"use client";

import {
  Car,
  Plane,
  Tv,
  MonitorSmartphone,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";

export default function WebsiteMarquee() {
  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: `We engineer digital ecosystems that drive automotive innovation — 
from real-time vehicle monitoring and predictive maintenance 
to seamless dealer management and customer engagement 
platforms that accelerate brand loyalty and efficiency.`,
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: `Delivering smooth digital experiences for global travelers — 
from intuitive booking engines and immersive virtual tours 
to personalized guest management systems that redefine 
convenience, engagement, and satisfaction.`,
    },
    {
      icon: Tv,
      title: "Media & Entertainment",
      description: `Crafting immersive digital spaces that captivate audiences — 
empowering creators and media houses with dynamic streaming 
platforms, real-time analytics, and engaging interfaces 
built for global scalability.`,
    },
    {
      icon: MonitorSmartphone,
      title: "SaaS & Digital Platforms",
      description: `Building next-gen SaaS platforms for growth and reliability — 
integrating cloud-native architecture, multi-tenant security, 
and intuitive UX for seamless onboarding, scalability, 
and long-term business impact.`,
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: `Empowering providers with secure, compliant digital systems — 
from telehealth apps and remote patient monitoring to 
HIPAA-aligned data management ensuring accuracy, 
efficiency, and trust.`,
    },
    {
      icon: GraduationCap,
      title: "eLearning",
      description: `Creating engaging adaptive eLearning ecosystems — featuring 
personalized content delivery, gamified experiences, 
analytics dashboards, and mobile-first design to 
enhance learner engagement and retention.`,
    },
    {
      icon: ShoppingCart,
      title: "eCommerce",
      description: `Building high-performance digital storefronts that convert 
visitors into loyal customers — integrating intelligent 
product recommendations, advanced analytics, and 
frictionless checkout experiences.`,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0017] to-black text-white py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,0,255,0.15),transparent)]"></div>

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <h3 className="text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase text-gray-400">
          Industries We Serve
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
          Providing custom web development excellence <br className="hidden sm:block" />
          across diverse industries
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6 md:gap-10 animate-marquee whitespace-nowrap">
          {[...industries, ...industries].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative group w-[260px] sm:w-[300px] md:w-[360px] h-[320px] sm:h-[340px] md:h-[380px] flex-shrink-0 bg-gradient-to-b from-[#121212] via-[#090909] to-[#000] border border-gray-800/50 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 touch-manipulation"
              >
                {/* Icon */}
                <div className="mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110">
                  <Icon
                    size={28} // smaller base size
                    className="sm:size-[36px] md:size-[50px] text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-center text-white">
                  {item.title}
                </h4>

                {/* Description on Hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 flex items-center justify-center text-center px-2 sm:px-4 md:px-4 py-2 rounded-2xl opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out overflow-y-auto max-h-full"
                >
                  <p className="text-sm sm:text-xs md:text-sm leading-relaxed text-white/95 max-w-[95%] whitespace-pre-line px-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}
