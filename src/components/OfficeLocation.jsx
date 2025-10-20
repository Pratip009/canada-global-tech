"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

export default function OfficeLocation() {
  const [activeCity, setActiveCity] = useState("Canada");

  const locations = {
    Canada: {
      address:
        "3465 Platinum Dr Unit  93 Unit 93 , Mississauga , ON L5M 7N4 , Canada",
      phone: "5513441485",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.3593345136483!2d-79.72973492434924!3d43.53828385985662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b426d34dc55fd%3A0x9375aef5034ecaa4!2s3465%20Platinum%20Dr%2093%2093%2C%20Mississauga%2C%20ON%20L5M%202S1%2C%20Canada!5e1!3m2!1sen!2sin!4v1760987406063!5m2!1sen!2sin",
    },
  };

  return (
    <section className="relative bg-black text-white py-20 px-6 sm:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Content Wrapper with larger bottom padding */}
      <div className="relative z-10 flex flex-col items-center justify-center pb-48 sm:pb-60">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Our Office{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            Locations
          </span>
        </h2>

        {/* City Buttons */}
        <div className="flex flex-wrap gap-6 mb-12">
          {Object.keys(locations).map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-10 py-3 rounded-full border transition-all text-lg font-semibold ${
                activeCity === city
                  ? "border-yellow-400 bg-gradient-to-r from-yellow-400 to-cyan-400 text-black"
                  : "border-gray-400 hover:border-yellow-400"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Address Info */}
        <div className="text-center">
          <p className="text-xl mb-6">{locations[activeCity].address}</p>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center text-lg">
            <div className="flex items-center gap-2">
              <Phone className="text-yellow-400" size={20} />
              <span>{locations[activeCity].phone}</span>
            </div>
            <span className="hidden sm:block text-gray-500">|</span>
            <a
              href={locations[activeCity].map}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
            >
              Get direction
            </a>
          </div>
        </div>
      </div>

      {/* Skyline Image - stays at bottom */}
      <img
        src="/software/web/newyork.svg"
        alt="USA Skyline"
        className="absolute bottom-0 left-0 w-full opacity-90 pointer-events-none select-none"
      />
    </section>
  );
}
