"use client";

import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: true,
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-50`}>
        <TopHeader />
        <Navbar />
        <main className={isHome ? "" : ""}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
