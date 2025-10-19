"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const allProjects = [
  { id: 1, img: "/ui-ux/1.webp", title: "Retail Redefined", category: "Retail & E-Commerce" },
  { id: 2, img: "/ui-ux/2.webp", title: "Fintech Dashboard", category: "Finance & Banking" },
  { id: 3, img: "/ui-ux/3.webp", title: "E-Learning App", category: "Education" },
  { id: 4, img: "/ui-ux/4.webp", title: "Automotive Landing", category: "Automotive" },
  { id: 5, img: "/ui-ux/5.webp", title: "Real Estate Platform", category: "Construction & Real Estate" },
  { id: 6, img: "/ui-ux/6.webp", title: "Analytics SaaS UI", category: "SaaS & Digital Platforms" },
  { id: 7, img: "/ui-ux/7.webp", title: "Travel Booking App", category: "Travel & Hospitality" },
  { id: 8, img: "/ui-ux/8.webp", title: "Manufacturing ERP UI", category: "Manufacturing" },
  { id: 9, img: "/ui-ux/9.webp", title: "Education Dashboard", category: "Education" },
  { id: 10, img: "/ui-ux/10.webp", title: "Blockchain Exchange", category: "Finance & Banking" },
  { id: 11, img: "/ui-ux/11.webp", title: "Healthcare Portal", category: "Healthcare" },
  { id: 12, img: "/ui-ux/12.webp", title: "AI Assistant UI", category: "Speech & Translation" },
  { id: 13, img: "/ui-ux/13.webp", title: "E-Learning App", category: "Retail & E-Commerce" },
  { id: 14, img: "/ui-ux/14.jpg", title: "Streaming Dashboard", category: "Media & Entertainment" },
  { id: 15, img: "/ui-ux/15.webp", title: "Hotel Management App", category: "Travel & Hospitality" },
  { id: 16, img: "/ui-ux/16.webp", title: "Construction ERP", category: "Construction & Real Estate" },
];

export default function UIUXShowcase() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const loaderRef = useRef(null);

  const categories = [
    "All",
    "Automotive",
    "Retail & E-Commerce",
    "Education",
    "Finance & Banking",
    "Manufacturing",
    "Media & Entertainment",
    "Construction & Real Estate",
    "Travel & Hospitality",
    "SaaS & Digital Platforms",
    "Speech & Translation",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  // Lazy load on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && visibleCount < filteredProjects.length) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + 6);
            setLoading(false);
          }, 1200);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredProjects.length]);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden text-white py-24 px-6 md:px-12">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-bg w-full h-full"></div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <p className="text-gray-300 text-sm uppercase tracking-widest mb-3">
          Showcasing Our UI/UX Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-8">
          A repertoire of visually compelling{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400">
            masterpieces
          </span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition-all duration-300 backdrop-blur-md ${
                activeCategory === cat
                  ? "border-cyan-400 text-cyan-300 bg-cyan-400/10 shadow-md shadow-cyan-500/20"
                  : "border-gray-600 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-3xl bg-gray-900/60 backdrop-blur-md hover:bg-gray-800/70 shadow-lg transition-all group"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <h3 className="text-lg font-semibold tracking-wide">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Loader */}
      {visibleCount < filteredProjects.length && (
        <div ref={loaderRef} className="flex justify-center mt-14">
          {loading ? (
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/loader.svg"
                alt="Loading..."
                width={100}
                height={100}
                className="animate-pulse"
              />
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Scroll to load more</p>
          )}
        </div>
      )}

      {/* Aurora Animation */}
      <style jsx>{`
        .aurora-bg {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 20% 30%, rgba(0, 255, 200, 0.3), transparent 50%),
                      radial-gradient(circle at 70% 40%, rgba(0, 200, 255, 0.3), transparent 50%),
                      radial-gradient(circle at 50% 80%, rgba(255, 0, 150, 0.3), transparent 50%),
                      radial-gradient(circle at 90% 60%, rgba(200, 100, 255, 0.3), transparent 50%);
          filter: blur(120px);
          animation: auroraMove 25s ease-in-out infinite alternate;
          background-color: #050510;
        }

        @keyframes auroraMove {
          0% {
            transform: translate(0%, 0%) scale(1);
          }
          25% {
            transform: translate(-10%, 5%) scale(1.05);
          }
          50% {
            transform: translate(10%, -5%) scale(1.1);
          }
          75% {
            transform: translate(-5%, -10%) scale(0.95);
          }
          100% {
            transform: translate(0%, 0%) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
