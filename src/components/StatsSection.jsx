"use client";

export default function StatsSection() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "250+", label: "In-House Talent" },
    { value: "300+", label: "Global Clients" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0d1021] via-[#111633] to-[#1b1e3a] text-center py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-10">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-md">
              {stat.value}
            </h3>
            <p className="text-gray-300 mt-2 text-base sm:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
