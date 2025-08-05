import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "ABC Plumber - Austin&apos;s Trusted Residential Plumbing Services",
  description: "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing. 24/7 service available.",
  keywords: "plumbing services Austin TX, drain cleaning Austin, leak detection Austin, water heater repair Austin, emergency plumbing Austin",
  openGraph: {
    title: "ABC Plumber - Austin&apos;s Trusted Residential Plumbing Services",
    description: "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing.",
    url: "https://www.abcplumbingservices.com",
    siteName: "ABC Plumber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Plumber - Austin&apos;s Trusted Residential Plumbing Services",
    description: "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing.",
  },
  alternates: {
    canonical: "https://www.abcplumbingservices.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/assets/plumbering_hero.webp"
              alt="Professional plumbing services in Austin, TX"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Metallic texture overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(59,130,246,0.1) 10px,
                  rgba(59,130,246,0.1) 20px
                )`
              }}></div>
            </div>
            {/* Gradient Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 backdrop-blur-sm text-white text-sm font-bold rounded-full mb-6 shadow-lg border border-blue-300/30">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Emergency Service Available
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Austin&apos;s Trusted
                <span className="block text-blue-400">Plumbing Experts</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Professional residential plumbing services in Austin, TX. From drain cleaning to emergency repairs, 
                &apos; your reliable local plumbers with over 14 years of experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 text-lg shadow-lg border border-blue-400/30">
                  <Link href="/contact" className="flex items-center">
                    Contact Us Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg backdrop-blur-sm">
                  <Link href="/services" className="flex items-center">
                    Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Licensed & Insured</div>
                    <div className="text-sm text-gray-300">Full protection</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Emergency</div>
                    <div className="text-sm text-gray-300">Always available</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Local Austin</div>
                    <div className="text-sm text-gray-300">Same-day service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Metallic background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(59,130,246,0.1) 10px,
                rgba(59,130,246,0.1) 20px
              )`
            }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg">
                  <Shield className="w-4 h-4 mr-2" />
                  Trusted Since 2010
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Your Trusted Local Plumber in 
                  <span className="block text-blue-400">Austin, Texas</span>
                </h2>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  ABC Plumber is a trusted residential plumbing services company in Austin, TX. We offer a wide range of plumbing services including drain cleaning, leak detection, water heater repair, and emergency plumbing. With over 14 years of experience serving the Austin community, we pride ourselves on quality workmanship, honest pricing, and exceptional customer service.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Licensed & Insured</h4>
                      <p className="text-sm text-gray-300">Full protection for your peace of mind</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">24/7 Emergency</h4>
                      <p className="text-sm text-gray-300">Always available when you need us</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Local Austin</h4>
                      <p className="text-sm text-gray-300">Same-day service available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Quick Response</h4>
                      <p className="text-sm text-gray-300">Fast, reliable service every time</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg">
                    <Link href="/about" className="flex items-center">
                      Learn More About Us
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Image Side */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-600">
                  <Image
                    src="/assets/plumber.webp"
                    alt="Professional plumber working in Austin, TX"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Metallic overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-2xl p-4 border border-gray-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">14+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>
                
                {/* Floating service card */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl shadow-2xl p-4 border border-blue-300/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 relative overflow-hidden">
          {/* Metallic texture overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 20px,
                rgba(59,130,246,0.1) 20px,
                rgba(59,130,246,0.1) 40px
              )`
            }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
                <ArrowRight className="w-4 h-4 mr-2" />
                Professional Services
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Professional Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From routine maintenance to emergency repairs, we handle all your residential plumbing needs with expertise and care
              </p>
            </div>
            
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
                  Professional drain cleaning services for clogged drains, sewer lines, and more. We use advanced equipment to clear even the toughest blockages.
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
                  Advanced leak detection technology to find and repair hidden water leaks. We use state-of-the-art equipment to locate leaks without damage.
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
                  Water heater repair, installation, and maintenance services. We work with all brands and types of water heaters.
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
                  24/7 emergency plumbing services for urgent repairs and installations. &apos; always ready when you need us most.
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
          </div>
        </section>

        {/* Features Section */} 
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Metallic background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(59,130,246,0.1) 10px,
                rgba(59,130,246,0.1) 20px
              )`
            }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
                <Shield className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Choose ABC Plumber?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                &apos; not just plumbers - &apos; your trusted partners in maintaining your home&apos;s plumbing system
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
                {/* Metallic pipe decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Licensed & Insured</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  All our plumbers are licensed, bonded, and insured for your protection. We carry comprehensive liability insurance and worker&apos;s compensation coverage.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    State-licensed professionals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    Full liability coverage
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    Bonded for your peace of mind
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
                {/* Metallic pipe decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Emergency Service</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Plumbing emergencies Don&apos;t wait for business hours. &apos; available around the clock for emergency plumbing issues and urgent repairs.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    Same-day emergency response
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    Rapid response times
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    Weekend and holiday service
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
                {/* Metallic pipe decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Local Austin Business</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Serving Austin and surrounding areas with local expertise. We understand the unique plumbing challenges of Central Texas homes.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    Local knowledge & expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    Community-focused service
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                    Same-day service available
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Additional Trust Indicators with Metallic Styling */}
            <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 shadow-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">14+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 shadow-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">5000+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 shadow-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Emergency Service</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 shadow-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */} 
        <section className="py-20 px-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 relative overflow-hidden">
          {/* Metallic texture overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 20px,
                rgba(59,130,246,0.1) 20px,
                rgba(59,130,246,0.1) 40px
              )`
            }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Latest Insights
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Real Plumbing, Real Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Read our latest plumbing tips, maintenance guides, and real stories from the field
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600">
                  {/* Metallic pipe decoration */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-200 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Maintenance
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <time dateTime="2024-01-15">January 15, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link href="/blog/prevent-drain-clogs" className="hover:text-blue-400 transition-colors">
                      5 Ways to Prevent Drain Clogs This Winter
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Learn the essential tips to keep your drains flowing smoothly during the cold winter months and avoid costly plumbing emergencies.
                  </p>
                  <Link
                    href="/blog/prevent-drain-clogs"
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group"
                    aria-label="Read full article about preventing drain clogs"
                  >
                    Read More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>

              <article className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600">
                  {/* Metallic pipe decoration */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-200 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Tips
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <time dateTime="2024-01-10">January 10, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link href="/blog/water-heater-maintenance" className="hover:text-blue-400 transition-colors">
                      Water Heater Maintenance: A Complete Guide
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Discover the essential maintenance tasks to keep your water heater running efficiently and extend its lifespan for years to come.
                  </p>
                  <Link
                    href="/blog/water-heater-maintenance"
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group"
                    aria-label="Read full article about water heater maintenance"
                  >
                    Read More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>

              <article className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600">
                  {/* Metallic pipe decoration */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 shadow-inner"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-200 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Emergency
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <time dateTime="2024-01-05">January 5, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link href="/blog/emergency-plumbing-checklist" className="hover:text-blue-400 transition-colors">
                      Emergency Plumbing: What to Do Before We Arrive
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    When plumbing emergencies strike, knowing what to do can prevent further damage. Here&apos;s your essential emergency checklist.
                  </p>
                  <Link
                    href="/blog/emergency-plumbing-checklist"
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group"
                    aria-label="Read full article about emergency plumbing checklist"
                  >
                    Read More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </div>
            
            {/* CTA Section with Metallic Styling */}
            <div className="mt-16 text-center">
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
                  Don&apos;t wait for small problems to become big emergencies. Contact us today for reliable, professional plumbing services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 font-bold shadow-lg">
                    <Link href="/contact" className="flex items-center">
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now: (512) 555-0123
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white font-bold">
                    <Link href="/services" className="flex items-center">
                      View All Services
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}