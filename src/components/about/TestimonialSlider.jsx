"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "William Lively",
      position: "CEO",
      company: "EXtrance",
      text: "Canada Global Tech transformed my idea into a thriving SaaS product with precision and creativity. Their innovation and professionalism are unmatched!",
      rating: 5,
    },
    {
      name: "Mark Weithorn",
      position: "CEO",
      company: "DPI",
      text: "An exceptional tech partner! Their leadership and commitment have been instrumental in scaling our business globally with cutting-edge solutions.",
      rating: 5,
    },
    {
      name: "Sophie Raymond",
      position: "CTO",
      company: "NorthEdge AI",
      text: "A perfect blend of creativity and technology! The Canada Global Tech team truly understands business needs and delivers excellence every time.",
      rating: 5,
    },
    {
      name: "Daniel Hughes",
      position: "Director of Product",
      company: "NovaSoft",
      text: "Incredible experience from start to finish. Their technical expertise and proactive approach saved us months of development time!",
      rating: 5,
    },
    {
      name: "Emily Carter",
      position: "Project Manager",
      company: "BrightMind Labs",
      text: "The team was responsive, innovative, and detail-oriented. They delivered a flawless digital platform that exceeded all expectations.",
      rating: 5,
    },
    {
      name: "James Anderson",
      position: "Founder",
      company: "FinPro Solutions",
      text: "Working with Canada Global Tech was seamless. They brought our fintech vision to life with a perfect balance of strategy and execution.",
      rating: 5,
    },
    {
      name: "Laura Kim",
      position: "Head of Operations",
      company: "SkyVision Health",
      text: "Their ability to deliver secure, scalable software for the healthcare industry is second to none. Truly a reliable technology partner!",
      rating: 5,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-[0.25em] uppercase mb-3 text-gray-500"
        >
          Testimonials
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-500 via-green-500 to-emerald-500 bg-clip-text text-transparent"
        >
          What Our Clients Say
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} inline-block w-3 h-3 rounded-full bg-gray-400/50 mx-1 transition-all duration-300"></span>`,
          }}
          loop={true}
          className="pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-slate-900 text-gray-100 border border-slate-800 rounded-3xl p-8 text-left shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(6,182,212,0.25)] transition-all duration-500"
              >
                {/* Floating Quote Icon */}
                <div className="absolute -top-5 left-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 text-5xl opacity-80">
                  <FaQuoteLeft />
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mt-6 mb-8 leading-relaxed">
                  “{item.text}”
                </p>

                {/* Reviewer Info */}
                <div className="border-t border-slate-700 pt-5">
                  <h4 className="text-lg font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {item.position}, {item.company}
                  </p>
                  <div className="flex mt-3 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="mr-1" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Customization */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: -25px !important;
          }
          .swiper-pagination-bullet-active {
            background: linear-gradient(90deg, #06b6d4, #22c55e) !important;
            box-shadow: 0 0 12px rgba(34, 197, 94, 0.6);
            transform: scale(1.3);
          }
        `}</style>
      </div>
    </section>
  );
}
