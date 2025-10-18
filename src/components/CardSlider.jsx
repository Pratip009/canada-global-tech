"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaStar className="text-yellow-400 text-4xl sm:text-5xl" />,
    title: "Improved End-user Satisfaction Rates",
    desc1: "Create meaningful experiences that are built to boost conversions.",
    desc2:
      "Our client-centricity makes us the best partner for your digital transformation journey, turning skeptics into loyal customers.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-400 text-4xl sm:text-5xl" />,
    title: "Top-Tier Security & 24/7 Support",
    desc1:
      "Ensure continuity and resilience of your business software solutions.",
    desc2:
      "Collaborate with us and capitalize on our robust incident prevention, 24/7 support, and quick response capabilities.",
  },
  {
    icon: <FaRocket className="text-yellow-400 text-4xl sm:text-5xl" />,
    title: "Accelerated Time-to-Market",
    desc1:
      "Empower your business with agile methodologies and faster product releases.",
    desc2:
      "We streamline development pipelines for efficient product delivery and innovation.",
  },
  {
    icon: <FaLightbulb className="text-yellow-400 text-4xl sm:text-5xl" />,
    title: "Innovation-Driven Design",
    desc1:
      "Transform your brand with intuitive, modern, and human-centered design thinking.",
    desc2:
      "We merge creativity with analytics to build memorable digital experiences.",
  },
  {
    icon: <FaUsers className="text-yellow-400 text-4xl sm:text-5xl" />,
    title: "Collaborative Team Culture",
    desc1:
      "Work with cross-functional teams that thrive on creativity and shared success.",
    desc2:
      "We build strong partnerships with transparent communication and a shared growth mindset.",
  },
  {
    icon: <FaCogs className="text-yellow-400 text-4xl sm:text-5xl" />,
    title: "Automation & Scalability",
    desc1:
      "Future-proof your operations with scalable and automated solutions.",
    desc2:
      "Our engineering excellence ensures your systems evolve effortlessly with your growth.",
  },
  {
    icon: <FaChartLine className="text-yellow-400 text-4xl sm:text-5xl" />,
    title: "Data-Driven Insights",
    desc1: "Leverage real-time analytics to make smarter business decisions.",
    desc2:
      "We turn data into actionable insights that enhance performance and profitability.",
  },
];

export default function CardSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth * 0.9
        : scrollLeft + clientWidth * 0.9;
    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  return (
    <section className="relative py-14 sm:py-20 bg-white w-full overflow-hidden group px-3 sm:px-6 md:px-10 lg:px-16">
      {/* Cards Wrapper */}
      <div
        ref={scrollRef}
        className="flex gap-6 sm:gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 sm:pb-10 no-scrollbar"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[280px] sm:min-w-[360px] md:min-w-[440px] bg-[#54707b] text-white shadow-lg p-8 sm:p-10 md:p-12 snap-start flex flex-col justify-between hover:shadow-2xl transition-all duration-300 rounded-card"
          >
            <div className="mb-5 sm:mb-6">{card.icon}</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 leading-snug">
              {card.title}
            </h3>
            <p className="text-gray-100 mb-3 sm:mb-4 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
              {card.desc1}
            </p>
            <p className="text-gray-100 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
              {card.desc2}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Arrows */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
        <button
          onClick={() => scroll("left")}
          className="p-3 sm:p-4 rounded-full border border-gray-300 bg-white text-gray-800 shadow-md hover:bg-yellow-400 hover:text-white hover:shadow-lg transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 sm:p-4 rounded-full border border-gray-300 bg-white text-gray-800 shadow-md hover:bg-yellow-400 hover:text-white hover:shadow-lg transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .rounded-card {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 25%;
          border-top-right-radius: 25%;
          border-bottom-right-radius: 20px;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
