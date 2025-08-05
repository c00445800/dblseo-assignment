import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield,  Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Drain Cleaning Services - ABC Plumber Austin, TX",
  description: "Professional drain cleaning services in Austin, TX. Clogged drain repair, sewer line cleaning, hydro jetting, and more. Call (512) 555-0123.",
  keywords: "drain cleaning Austin TX, clogged drain Austin, sewer line cleaning Austin, hydro jetting Austin, drain repair Austin",
  openGraph: {
    title: "Drain Cleaning Services - ABC Plumber Austin, TX",
    description: "Professional drain cleaning services in Austin, TX. Clogged drain repair, sewer line cleaning, hydro jetting, and more.",
    url: "https://www.abcplumbingservices.com/services/drain-cleaning",
  },
  alternates: {
    canonical: "https://www.abcplumbingservices.com/services/drain-cleaning",
  },
};

export default function DrainCleaningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
            <Shield className="w-4 h-4 mr-2" />
            Drain Cleaning
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Drain
            <span className="block text-blue-600">Cleaning Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experiencing slow drains or clogs? Our professional drain cleaning services use advanced equipment 
            to clear even the toughest blockages in Austin homes and businesses.
          </p>
        </section>

        {/* Service Overview */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert Drain Cleaning Solutions
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Clogged drains can be more than just an inconvenience - they can lead to serious plumbing 
                  problems and costly repairs. Our professional drain cleaning services use state-of-the-art 
                  equipment to effectively clear blockages and restore proper drainage.
                </p>
                <p>
                  We offer comprehensive drain cleaning for all types of drains including kitchen sinks, 
                  bathroom drains, shower drains, and main sewer lines. Our experienced technicians can 
                  handle everything from simple clogs to complex blockages.
                </p>
                <p>
                  Using advanced techniques like hydro jetting and video inspection, we ensure your drains 
                  are thoroughly cleaned and functioning properly, preventing future clogs and maintaining 
                  your plumbing system&apos;s health.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Why Choose Our Drain Cleaning?</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Advanced Equipment</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Experienced Technicians</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Same-Day Service</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Guaranteed Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Drain Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive drain cleaning solutions for all your plumbing needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Kitchen Drain Cleaning</h3>
              <p className="text-gray-300 mb-4">
                Clear grease, food particles, and other debris from kitchen sinks and garbage disposals.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Grease removal
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Food particle clearing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Garbage disposal cleaning
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Bathroom Drain Cleaning</h3>
              <p className="text-gray-300 mb-4">
                Remove hair, soap scum, and other buildup from bathroom sinks, showers, and tubs.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Hair removal
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Soap scum clearing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Shower drain cleaning
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Sewer Line Cleaning</h3>
              <p className="text-gray-300 mb-4">
                Professional cleaning of main sewer lines and lateral pipes using hydro jetting technology.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Hydro jetting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Video inspection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Root removal
                </li>
              </ul>
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
              Need Professional Drain Cleaning?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Don&apos;t let clogged drains disrupt your daily routine. Contact us today for fast, reliable drain cleaning services.
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