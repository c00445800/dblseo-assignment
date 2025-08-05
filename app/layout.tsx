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
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PlumbingService",
              "name": "ABC Plumber",
              "description": "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing.",
              "url": "https://www.abcplumbingservices.com",
              "logo": "https://www.abcplumbingservices.com/assets/abc_plumbing.webp",
              "image": "https://www.abcplumbingservices.com/assets/abc_plumbing.webp",
              "telephone": "+1-512-555-0123",
              "email": "info@abcplumbingservices.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.2672",
                "longitude": "-97.7431"
              },
              "areaServed": {
                "@type": "City",
                "name": "Austin"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "30.2672",
                  "longitude": "-97.7431"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Plumbing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Drain Cleaning",
                      "description": "Professional drain cleaning services for clogged drains and sewer lines"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Leak Detection",
                      "description": "Advanced leak detection technology to find and repair hidden water leaks"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Plumbing",
                      "description": "24/7 emergency plumbing services for urgent repairs"
                    }
                  }
                ]
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Check"],
              "currenciesAccepted": "USD",
              "foundingDate": "2010",
              "sameAs": [
                "https://www.facebook.com/abcplumber",
                "https://www.instagram.com/abcplumber",
                "https://twitter.com/abcplumber"
              ]
            })
          }}
        />
      </head>
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
