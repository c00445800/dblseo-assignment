import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abcplumbingservices.com'),
  title: "ABC Plumber - Austin's Trusted Residential Plumbing Services",
  description: "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing. 24/7 service available.",
  keywords: ["plumbing services Austin TX", "drain cleaning Austin", "leak detection Austin", "water heater repair Austin", "emergency plumbing Austin", "residential plumber Austin"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ABC Plumber - Austin's Trusted Residential Plumbing Services",
    description: "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing. 24/7 service available.",
    images: [
      {
        url: "/assets/abc_plumbing.webp",
        width: 1200,
        height: 630,
        alt: "ABC Plumber - Austin's Trusted Plumbing Services",
      },
    ],
    url: "https://www.abcplumbingservices.com",
    siteName: "ABC Plumber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Plumber - Austin's Trusted Residential Plumbing Services",
    description: "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.abcplumbingservices.com",
  },
  authors: [{ name: "ABC Plumber", url: "https://www.abcplumbingservices.com" }],
  creator: "ABC Plumber",
  publisher: "ABC Plumber",
  other: {
    "theme-color": "#1f2937",
    "msapplication-TileColor": "#1f2937",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ABC Plumber",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
