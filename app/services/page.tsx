import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Plumbing Services - ABC Plumber Austin, TX",
  description: "Professional plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing services.",
  keywords: "plumbing services Austin TX, drain cleaning Austin, leak detection Austin, water heater repair Austin, emergency plumbing Austin",
  openGraph: {
    title: "Plumbing Services - ABC Plumber Austin, TX",
    description: "Professional plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing services.",
    url: "https://www.abcplumbingservices.com/services",
  },
  alternates: {
    canonical: "https://www.abcplumbingservices.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
            <Shield className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Plumbing
            <span className="block text-blue-600">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, we provide comprehensive plumbing services 
            throughout Austin and surrounding areas with expertise and reliability.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Drain Cleaning</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional drain cleaning services for clogged drains, sewer lines, and more. 
                We use advanced equipment to clear even the toughest blockages.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Kitchen & bathroom drains
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Sewer line cleaning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Hydro jetting services
                </li>
              </ul>
              <Link
                href="/services/drain-cleaning"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group"
              >
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Leak Detection</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced leak detection technology to find and repair hidden water leaks. 
                We use state-of-the-art equipment to locate leaks without damage.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Electronic leak detection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Infrared camera scanning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Non-invasive methods
                </li>
              </ul>
              <Link
                href="/services/leak-detection"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group"
              >
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Water Heater</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Water heater repair, installation, and maintenance services. 
                We work with all brands and types of water heaters.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Tank & tankless heaters
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Repair & replacement
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Maintenance services
                </li>
              </ul>
              <Link
                href="/services/water-heater"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group"
              >
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Emergency Plumbing</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                24/7 emergency plumbing services for urgent repairs and installations. 
                We're always ready when you need us most.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Burst pipe repairs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Overflowing fixtures
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Gas line emergencies
                </li>
              </ul>
              <Link
                href="/services/emergency-plumbing"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group"
              >
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-8 text-white border border-gray-600 shadow-2xl relative overflow-hidden">
            {/* Metallic pipe decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Plumbing Help?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Don't wait for small problems to become big emergencies. Contact us today for reliable, professional plumbing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 font-bold shadow-lg">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: (512) 555-0123
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white font-bold">
                <Link href="/contact" className="flex items-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 