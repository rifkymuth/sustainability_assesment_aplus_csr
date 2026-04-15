import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A+ CSR — ESG Sustainability Self-Assessment",
  description:
    "Take a fast, sector-aware ESG self-assessment unified across GRI, SASB, MSCI, S&P and Sustainalytics. Get scored, benchmarked and report-ready in minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream font-sans antialiased">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
