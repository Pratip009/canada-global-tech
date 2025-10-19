"use client";

import Image from "next/image";

export default function CollaborationTools() {
  const tools = [
    { name: "GitHub", logo: "/process/github.webp" },
    { name: "Asana", logo: "/process/asana.webp" },
    { name: "InVision", logo: "/process/axure.png" },
    { name: "Axure", logo: "/process/jira.png" },
    { name: "Slack", logo: "/process/zoom.png" },
    { name: "Jira", logo: "/process/zeplin.png" },

    { name: "Skype", logo: "/process/skype.png" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Fixed Title */}
        <div className="shrink-0 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-500 via-green-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-sm">
            Collaboration Tools
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden flex-1">
          <div className="flex gap-12 animate-marques">
            {tools.concat(tools).map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[130px] opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={130}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
