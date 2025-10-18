"use client";

export default function Banner({
  title,
  gradientText,
  gradientColors = ["#34d399", "#3b82f6", "#a855f7"], // default 3-color gradient
  subtitle,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0a0f1f] via-[#0d1b2a] to-[#062e24] text-white py-28 md:py-36">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.15),transparent_70%)] animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-6 animate-fadeIn">
          Home / <span className="text-white font-medium">Case Studies</span>
        </p>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-slideUp">
          {title}{" "}
          <span
            className="bg-clip-text text-transparent font-extrabold drop-shadow-lg animate-gradient"
            style={{
              backgroundImage: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
            }}
          >
            {gradientText}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-200">
          {subtitle}
        </p>

        {/* Decorative line */}
        <div className="mt-10 w-32 h-[3px] mx-auto bg-gradient-to-r from-[#34d399] via-[#3b82f6] to-[#a855f7] rounded-full animate-pulse" />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 6s linear infinite;
        }
        .animate-slideUp {
          animation: slideUp 1s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
