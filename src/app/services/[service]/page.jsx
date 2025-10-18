"use client";
import { useParams } from "next/navigation";
import servicesData from "../servicesData";

export default function ServicePage() {
  const { service } = useParams();
  const serviceData = servicesData[service];

  if (!serviceData) {
    return (
      <div className="max-w-5xl mx-auto text-center py-24">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <p className="text-gray-500 mt-2">
          We couldn’t find any information for “{service}”.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        {serviceData.header.title}
      </h1>
      <p className="text-lg text-gray-600 mb-8">{serviceData.header.subtitle}</p>

      <h2 className="text-2xl font-semibold mb-3">Overview</h2>
      <p className="text-gray-700 mb-10">{serviceData.overview}</p>

      {/* Subservice list */}
      {serviceData.subservices && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Subservices</h2>
          <ul className="space-y-3">
            {Object.keys(serviceData.subservices).map((key) => (
              <li key={key} className="border p-4 rounded-md hover:bg-gray-50">
                <a
                  href={`/services/${service}/${key}`}
                  className="text-blue-600 font-medium"
                >
                  {serviceData.subservices[key].title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
