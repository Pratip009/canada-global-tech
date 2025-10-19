"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BlogCard({ image, title, author, date, readTime }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 flex flex-col">
      {/* Image with subtle overlay */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white p-8 flex flex-col justify-between h-72">
        <div>
          <span className="inline-block mb-4 text-sm font-semibold text-teal-300 border border-teal-400 px-3 py-1 rounded-full tracking-wide">
            Blog
          </span>
          <h3 className="text-2xl font-semibold leading-snug mb-3 hover:text-teal-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white font-bold text-base">
              {author?.charAt(0)}
            </div>
            <div className="text-sm text-gray-300 leading-tight">
              <p className="font-medium text-gray-100">{author}</p>
              <p className="text-xs text-gray-400">
                {date} • {readTime}
              </p>
            </div>
          </div>

          <div className="bg-white text-gray-900 p-3 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
