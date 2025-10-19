"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function ClienteleSlider() {
  const clients = [
    { name: "Suntria", logo: "/about/logo/ct.png" },
    { name: "Rubber King", logo: "/about/logo/detect.webp" },
    { name: "OpenReel", logo: "/about/logo/insurent.webp" },
    { name: "Ripik.AI", logo: "/about/logo/jhonson.webp" },
    { name: "Express Funeral Funding", logo: "/about/logo/mcgra.webp" },
    { name: "Insurent", logo: "/about/logo/NBCU.webp" },
    { name: "Sofy.tv", logo: "/about/logo/UNITED.webp" },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Animated background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-purple-900/20 to-black opacity-70 blur-3xl" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase mb-5 text-gray-400"
        >
          Our Clientele
        </motion.h3>

        {/* Gradient Heading with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-16 leading-snug bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 text-transparent bg-clip-text animate-gradient"
        >
          300+ valued global partners{" "}
          <br className="hidden md:block" />
          who trust our software development services
        </motion.h2>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center justify-center h-28 rounded-2xl border border-gray-800/60 backdrop-blur-md bg-gradient-to-b from-gray-900/40 to-gray-800/30 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-500"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
