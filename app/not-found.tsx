import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found - ABC Plumber Austin, TX",
  description: "The page you're looking for doesn't exist. Return to ABC Plumber's homepage for professional plumbing services in Austin, TX.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.abcplumbingservices.com/404",
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center shadow-2xl border border-gray-600">
              <Wrench className="w-16 h-16 text-blue-400" />
            </div>
          </div>

          {/* Error Number */}
          <div className="mb-6">
            <h1 className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">4</span>
              <span className="text-gray-400">0</span>
              <span className="text-blue-600">4</span>
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Don't worry though - our plumbing services are still available!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 text-lg shadow-lg border border-blue-400/30">
              <Link href="/" className="flex items-center">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg">
              <Link href="/services" className="flex items-center">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Our Services
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl border border-gray-600">
            <h3 className="text-xl font-semibold text-white mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/services/drain-cleaning" 
                className="block p-3 bg-gray-700/50 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-blue-600/20 transition-colors"
              >
                Drain Cleaning
              </Link>
              <Link 
                href="/services/leak-detection" 
                className="block p-3 bg-gray-700/50 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-blue-600/20 transition-colors"
              >
                Leak Detection
              </Link>
              <Link 
                href="/contact" 
                className="block p-3 bg-gray-700/50 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-blue-600/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* SEO-friendly content */}
          <div className="mt-12 text-sm text-gray-500">
            <p>
              ABC Plumber - Professional plumbing services in Austin, TX. 
              Emergency plumbing, drain cleaning, leak detection, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 