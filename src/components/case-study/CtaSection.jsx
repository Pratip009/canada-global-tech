"use client";

export default function CtaSection() {
  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center text-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#14532d_0%,_#0f766e_25%,_#0a0a0a_70%)] opacity-70 animate-gradientMove"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6 leading-[1.15]">
          Ready to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 animate-gradient">
            transform
          </span>{" "}
          your business?
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Schedule a free consulting session with our experts
        </p>

        <button className="px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg transition-all duration-300 hover:opacity-90"
          style={{
            backgroundImage: "linear-gradient(to right, #0891b2, #65a30d)",
          }}
        >
          Get in Touch <span className="ml-1">→</span>
        </button>
      </div>

      {/* Gradient Animation Styles */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
