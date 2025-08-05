import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Leak Detection Services - ABC Plumber Austin, TX",
  description: "Professional leak detection services in Austin, TX. Advanced technology to find hidden water leaks without damage. Call (512) 555-0123.",
  keywords: "leak detection Austin TX, water leak detection Austin, hidden leak detection Austin, plumbing leak Austin, leak repair Austin",
  openGraph: {
    title: "Leak Detection Services - ABC Plumber Austin, TX",
    description: "Professional leak detection services in Austin, TX. Advanced technology to find hidden water leaks without damage.",
    url: "https://www.abcplumbingservices.com/services/leak-detection",
  },
  alternates: {
    canonical: "https://www.abcplumbingservices.com/services/leak-detection",
  },
};

export default function LeakDetectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
            <Shield className="w-4 h-4 mr-2" />
            Leak Detection
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Advanced Leak
            <span className="block text-blue-600">Detection Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Suspect a water leak but can&apos;t find it? Our advanced leak detection technology can locate 
            hidden leaks without causing damage to your property in Austin.
          </p>
        </section>

        {/* Service Overview */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Leak Detection Solutions
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Water leaks can cause significant damage to your home and lead to costly repairs if not 
                  detected early. Our professional leak detection services use state-of-the-art technology 
                  to locate hidden leaks quickly and accurately.
                </p>
                <p>
                  We use advanced equipment including electronic leak detection devices, infrared cameras, 
                  and acoustic listening devices to pinpoint the exact location of leaks without invasive 
                  procedures or unnecessary damage to your property.
                </p>
                <p>
                  Our experienced technicians can detect leaks in walls, floors, ceilings, underground pipes, 
                  and other hard-to-reach areas. Early detection saves you money and prevents extensive 
                  water damage to your home.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Why Choose Our Leak Detection?</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Advanced Technology</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Non-Invasive Methods</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Accurate Results</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Same-Day Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Methods */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leak Detection Methods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use multiple advanced techniques to ensure accurate leak detection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Electronic Leak Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced electronic devices that can detect the sound of water escaping from pipes.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Acoustic listening
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Frequency analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Precise location pinpointing
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Infrared Camera Scanning</h3>
              <p className="text-gray-300 mb-4">
                Thermal imaging cameras that detect temperature differences caused by water leaks.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Thermal imaging
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Hidden leak detection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Visual confirmation
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Video Pipe Inspection</h3>
              <p className="text-gray-300 mb-4">
                Miniature cameras that provide visual inspection of pipes and drainage systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Visual pipe inspection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Crack identification
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Blockage detection
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Leak Types */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Leaks We Detect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We can detect and locate various types of water leaks in your home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Hidden Pipe Leaks</h3>
              <p className="text-gray-300 mb-4">
                Leaks in walls, floors, and ceilings that are not immediately visible.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Wall pipe leaks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Underground pipe leaks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Ceiling pipe leaks
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Fixture Leaks</h3>
              <p className="text-gray-300 mb-4">
                Leaks from plumbing fixtures and appliances throughout your home.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Faucet leaks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Toilet leaks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                  Water heater leaks
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
              Suspect a Water Leak?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Don &apos;t wait for water damage to become severe. Contact us today for professional leak detection services.
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