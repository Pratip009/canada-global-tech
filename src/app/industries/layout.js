export const metadata = {
  title: "Industries | Canada Global Tech",
  description:
    "Explore how Canada Global Tech delivers tailored digital solutions across diverse industries — from healthcare and finance to education and logistics.",
  keywords: [
    "Industries",
    "Healthcare IT solutions",
    "Finance software development",
    "Education technology",
    "Logistics automation",
    "Canada Global Tech",
  ],
  openGraph: {
    title: "Industries | Canada Global Tech",
    description:
      "Discover how we empower businesses across sectors with innovative, scalable digital solutions.",
    url: "https://www.gts-ca.com/industries",
    siteName: "Canada Global Tech",
    images: [
      {
        url: "/og-industries.jpg",
        width: 1200,
        height: 630,
        alt: "Canada Global Tech Industries",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function IndustriesLayout({ children }) {
  return <>{children}</>;
}
