export const metadata = {
  title: "Resources | Canada Global Tech",
  description:
    "Stay informed with the latest insights, blogs, and guides from Canada Global Tech. Explore expert perspectives on technology, innovation, and digital transformation.",
  keywords: [
    "Resources",
    "Technology blogs",
    "Digital transformation insights",
    "Software development articles",
    "Canada Global Tech resources",
    "Tech news and guides",
  ],
  openGraph: {
    title: "Resources | Canada Global Tech",
    description:
      "Explore expert articles and insights from Canada Global Tech on innovation, design, and scalable digital solutions.",
    url: "https://www.gts-ca.com/resources",
    siteName: "Canada Global Tech",
    images: [
      {
        url: "/og-resources.jpg",
        width: 1200,
        height: 630,
        alt: "Canada Global Tech Resources",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ResourcesLayout({ children }) {
  return <>{children}</>;
}
