"use client";

import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // ✅ new import
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50`}>
        <TopHeader />
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* ✅ Scroll-to-top button globally available */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
