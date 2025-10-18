"use client";

import { useParams } from "next/navigation";

export default function TechnologyPage() {
  const { tech } = useParams();

  // Convert URL slug to readable name
  const formatName = (str) =>
    str
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");

  const techName = formatName(tech);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{techName}</h1>
      <p className="text-gray-700">
        This is the placeholder page for <strong>{techName}</strong>.
      </p>
    </div>
  );
}
