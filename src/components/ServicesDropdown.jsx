"use client";
import { useRouter } from "next/navigation";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function ServicesDropdown({ isOpen, onClose }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const scrollRef = useRef(null);

  const servicesLinks = [
    {
      name: "Software Engineering",
      color: "from-blue-400 via-blue-500 to-indigo-500",
      subItems: [
        "Website Development",
        "Web App Development",
        "Mobile App Development",
        "Application Modernization",
        "Blockchain Development",
        "Custom Software Development",
        "SaaS Development",
        "E-commerce Development",
        "Testing & Quality Assurance",
      ],
    },
    {
      name: "Design & Digital Experience",
      color: "from-pink-400 via-rose-500 to-fuchsia-500",
      subItems: [
        "User Research",
        "Web Design",
        "UI/UX Design",
        "IA and UX Design",
      ],
    },
    {
      name: "Cloud Engineering",
      color: "from-cyan-400 via-sky-500 to-blue-500",
      subItems: [
        "Cloud Migration",
        "DevOps",
        "Cybersecurity",
        "24/7 Support & Maintenance",
      ],
    },
    {
      name: "Data & Analytics",
      color: "from-amber-400 via-orange-500 to-red-500",
      subItems: [
        "Data Engineering",
        "Analytics & Visualization",
        "AI & Machine Learning",
      ],
    },
    {
      name: "Digital Strategy",
      color: "from-purple-400 via-violet-500 to-indigo-500",
      subItems: ["Digital Marketing", "SEO Marketing Services"],
    },
    {
      name: "Emerging Technologies",
      color: "from-teal-400 via-cyan-500 to-sky-500",
      subItems: [
        "IoT Solutions",
        "AR/VR Development",
        "Edge Computing",
        "Quantum Readiness",
      ],
    },
  ];

  const formatSlug = (str) =>
    str
      ?.toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-");

  const handleNav = (url) => {
    onClose?.();
    setTimeout(() => router.push(url), 150);
  };

  const handleMouseEnter = (index) => {
    if (timeoutId) clearTimeout(timeoutId);
    setHovered(index);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setHovered(null), 300);
    setTimeoutId(id);
  };

  const toggleSubmenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setHovered(activeIndex === index ? null : index);
  };

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    setCanScrollUp(scrollTop > 10);
    setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const scrollSmooth = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      top: dir === "up" ? -150 : 150,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed left-0 top-0 z-[9999] w-full h-full md:left-1/2 md:-translate-x-1/2 md:top-[100px] md:w-[90vw] md:max-w-6xl md:max-h-[80vh] md:mt-6 md:rounded-3xl border border-white/10 bg-gradient-to-br from-gray-950/95 via-gray-900/90 to-gray-950/95 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Glow Shadow (Desktop Only) */}
          <motion.div
            className={`absolute inset-0 pointer-events-none transition-all duration-700 md:block hidden ${
              hovered !== null
                ? `bg-gradient-to-br ${servicesLinks[hovered]?.color}`
                : "bg-transparent"
            }`}
            animate={{
              opacity: hovered !== null ? 0.15 : 0,
              scale: hovered !== null ? 1.05 : 1,
            }}
          />

          {/* Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 relative z-10">
            <h2 className="text-xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
              Explore Our Services
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Content */}
          <div
            className="flex flex-col md:flex-row h-[calc(100%-80px)] md:max-h-[calc(80vh-80px)] relative z-10"
            onMouseLeave={handleMouseLeave}
          >
            {/* Mobile Layout (Accordion) */}
            <div className="md:hidden px-6 py-5 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]">
              {servicesLinks.map((service, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-full flex justify-between items-center py-2 text-base font-semibold text-left text-gray-300 hover:text-yellow-400"
                  >
                    {service.name}
                    {activeIndex === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate= {{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-black/30 rounded-xl border border-white/10 p-3 ml-2 space-y-2"
                      >
                        {service.subItems.map((item, i) => (
                          <li key={i}>
                            <button
                              onClick={() =>
                                handleNav(
                                  `/services/${formatSlug(service.name)}/${formatSlug(item)}`
                                )
                              }
                              className="group flex justify-between items-center text-sm text-gray-300 hover:text-white transition-all w-full text-left"
                            >
                              <span>{item}</span>
                              <FiArrowUpRight className="text-yellow-400 opacity-0 group-hover:opacity-100 transition" />
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex w-1/3 border-r border-white/10 p-8 flex-col relative overflow-hidden">
              <div
                ref={scrollRef}
                className="overflow-y-auto scrollbar-hide flex flex-col space-y-4 max-h-full"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {servicesLinks.map((item, index) => (
                  <motion.button
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() =>
                      handleNav(`/services/${formatSlug(item.name)}`)
                    }
                    whileHover={{ scale: 1.03, x: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`relative text-left text-lg font-semibold py-3 px-4 rounded-xl transition-all duration-300 tracking-wide ${
                      activeIndex === index
                        ? `bg-gradient-to-r ${item.color} text-white shadow-[0_0_25px_rgba(255,255,255,0.1)]`
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Scroll Arrows (Desktop Only) */}
              {canScrollUp && (
                <button
                  onClick={() => scrollSmooth("up")}
                  className="absolute top-2 left-1/2 -translate-x-1/2 p-2 rounded-full bg-gray-800/70 text-white/70 hover:text-white shadow-md transition"
                >
                  <ChevronUp size={18} />
                </button>
              )}
              {canScrollDown && (
                <button
                  onClick={() => scrollSmooth("down")}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 rounded-full bg-gray-800/70 text-white/70 hover:text-white shadow-md transition"
                >
                  <ChevronDown size={18} />
                </button>
              )}
            </div>

            {/* Right Column (Desktop Only) */}
            <div className="hidden md:flex flex-1 p-8 flex-col justify-start items-start overflow-y-auto max-h-full">
              <AnimatePresence mode="wait">
                {hovered !== null ? (
                  <motion.div
                    key={hovered}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <h3
                      className={`text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${servicesLinks[hovered].color}`}
                    >
                      {servicesLinks[hovered].name}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {servicesLinks[hovered].subItems.map((sub, idx) => (
                        <motion.li key={idx} whileHover={{ x: 5 }}>
                          <button
                            onClick={() =>
                              handleNav(
                                `/services/${formatSlug(
                                  servicesLinks[hovered].name
                                )}/${formatSlug(sub)}`
                              )
                            }
                            className="group flex items-center justify-between text-gray-300 hover:text-white text-left transition-all duration-200 font-medium"
                          >
                            <span>{sub}</span>
                            <FiArrowUpRight className="opacity-0 group-hover:opacity-100 text-teal-400 transform group-hover:translate-x-1 transition-all duration-300" />
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-500 text-lg italic mt-10"
                  >
                    Hover over a category to explore its services 
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}