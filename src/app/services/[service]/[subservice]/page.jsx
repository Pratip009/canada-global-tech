"use client";
import { useParams } from "next/navigation";
import servicesData from "../../servicesData";

export default function SubServicePage() {
  const { service, subservice } = useParams();

  const serviceData = servicesData[service];
  const subData = serviceData?.subservices?.[subservice];

  if (!serviceData || !subData) {
    return (
      <div className="max-w-4xl mx-auto text-center py-24">
        <h1 className="text-3xl font-bold text-gray-800">Service not found</h1>
        <p className="text-gray-500 mt-3">
          We couldn’t find any information for “{subservice}”.
        </p>
      </div>
    );
  }

  const { header, services, faqs, callToAction } = subData;

  return (
    <div className="flex flex-col gap-16">
      {/* 🟩 Header */}
      <section
        className="relative text-white py-24 px-6 text-center"
        style={{
          backgroundImage: `url(${header.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{header.title}</h1>
          <p className="text-lg text-gray-200">{header.subtitle}</p>
        </div>
      </section>

      {/* 🟦 Overview & Features */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">
          {services.overview}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {services.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟨 FAQs */}
      {faqs && (
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {faqs.title}
          </h2>
          <div className="space-y-4">
            {faqs.questions.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 🟧 Call to Action */}
      {callToAction && (
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-3xl font-bold mb-4">{callToAction.title}</h2>
          <p className="text-lg mb-8">{callToAction.description}</p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </section>
      )}
    </div>
  );
}
