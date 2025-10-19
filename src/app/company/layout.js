export const metadata = {
  title: "Company | Canada Global Tech",
  description:
    "Learn about Canada Global Tech — our mission, values, and process behind building cutting-edge digital solutions for global businesses.",
  keywords: [
    "Company",
    "About Canada Global Tech",
    "Our Process",
    "Digital innovation team",
    "Technology company Canada",
    "Software development company",
  ],
  openGraph: {
    title: "Company | Canada Global Tech",
    description:
      "Discover the story, mission, and core values driving Canada Global Tech to deliver innovative and scalable technology solutions worldwide.",
    url: "https://www.gts-ca.com/company",
    siteName: "Canada Global Tech",
    images: [
      {
        url: "/og-company.jpg",
        width: 1200,
        height: 630,
        alt: "Canada Global Tech Company Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company | Canada Global Tech",
    description:
      "Learn more about Canada Global Tech’s vision and the process that powers our digital success stories.",
    images: ["/og-company.jpg"],
  },
};

export default function CompanyLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
