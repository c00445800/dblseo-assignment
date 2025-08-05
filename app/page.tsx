import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "ABC Plumber - Austin's Trusted Residential Plumbing Services",
  description: "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing. 24/7 service available.",
  keywords: "plumbing services Austin TX, drain cleaning Austin, leak detection Austin, water heater repair Austin, emergency plumbing Austin",
  openGraph: {
    title: "ABC Plumber - Austin's Trusted Residential Plumbing Services",
    description: "Professional residential plumbing services in Austin, TX. Drain cleaning, leak detection, water heater repair, and emergency plumbing.",
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
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Gradient Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Emergency Service Available
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Austin's Trusted
                <span className="block text-blue-400">Plumbing Experts</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Professional residential plumbing services in Austin, TX. From drain cleaning to emergency repairs, 
                we're your reliable local plumbers with over 14 years of experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  <Link href="/contact" className="flex items-center">
                    Contact Us Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-black hover:bg-gray-700 hover:text-white px-8 py-3 text-lg">
                  <Link href="/services" className="flex items-center">
                    Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <div className="text-left">
                    <div className="font-semibold">Licensed & Insured</div>
                    <div className="text-sm text-gray-300">Full protection</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <div className="text-left">
                    <div className="font-semibold">24/7 Emergency</div>
                    <div className="text-sm text-gray-300">Always available</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div className="text-left">
                    <div className="font-semibold">Local Austin</div>
                    <div className="text-sm text-gray-300">Same-day service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  <Shield className="w-4 h-4 mr-2" />
                  Trusted Since 2010
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Your Trusted Local Plumber in 
                  <span className="block text-blue-600">Austin, Texas</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  ABC Plumber is a trusted residential plumbing services company in Austin, TX. We offer a wide range of plumbing services including drain cleaning, leak detection, water heater repair, and emergency plumbing. With over 14 years of experience serving the Austin community, we pride ourselves on quality workmanship, honest pricing, and exceptional customer service.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                      <p className="text-sm text-gray-600">Full protection for your peace of mind</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Emergency</h4>
                      <p className="text-sm text-gray-600">Always available when you need us</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Austin</h4>
                      <p className="text-sm text-gray-600">Same-day service available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick Response</h4>
                      <p className="text-sm text-gray-600">Fast, reliable service every time</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/about" className="flex items-center">
                      Learn More About Us
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Image Side */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/plumber.webp"
                    alt="Professional plumber working in Austin, TX"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">14+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
                
                {/* Floating service card */}
                <div className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-xl shadow-lg p-4">
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
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
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
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Drain Cleaning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional drain cleaning services for clogged drains, sewer lines, and more. We use advanced equipment to clear even the toughest blockages.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Kitchen & bathroom drains
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Sewer line cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Hydro jetting services
                  </li>
                </ul>
                <Link
                  href="/services/drain-cleaning"
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leak Detection</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced leak detection technology to find and repair hidden water leaks. We use state-of-the-art equipment to locate leaks without damage.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Electronic leak detection
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Infrared camera scanning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Non-invasive methods
                  </li>
                </ul>
                <Link
                  href="/services/leak-detection"
                  className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Water Heater</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Water heater repair, installation, and maintenance services. We work with all brands and types of water heaters.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Tank & tankless heaters
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Repair & replacement
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Maintenance services
                  </li>
                </ul>
                <Link
                  href="/services/water-heater"
                  className="text-orange-600 hover:text-orange-800 font-semibold inline-flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Plumbing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 emergency plumbing services for urgent repairs and installations. We're always ready when you need us most.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Burst pipe repairs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Overflowing fixtures
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Gas line emergencies
                  </li>
                </ul>
                <Link
                  href="/services/emergency-plumbing"
                  className="text-red-600 hover:text-red-800 font-semibold inline-flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */} 
        <section className="py-20 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose ABC Plumber?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="font-semibold text-xl mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">All our plumbers are licensed, bonded, and insured for your protection.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">24/7 Emergency Service</h3>
                <p className="text-gray-600">Available around the clock for emergency plumbing issues.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">Local Austin Business</h3>
                <p className="text-gray-600">Serving Austin and surrounding areas with local expertise.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Section */} 
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real plumbing real stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read our latest plumbing tips and stories
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Blog Post Title</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href="/blog/blog-post-title"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}