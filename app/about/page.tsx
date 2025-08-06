import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Phone, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About ABC Plumber - Austin&apos;s Trusted Plumbing Company",
  description: "Learn about ABC Plumber, Austin&apos;s trusted plumbing company since 2010. Professional, licensed, and insured plumbing services in Austin, TX.",
  keywords: "about ABC Plumber Austin, plumbing company Austin, licensed plumber Austin, trusted plumber Austin",
  openGraph: {
    title: "About ABC Plumber - Austin&apos;s Trusted Plumbing Company",
    description: "Learn about ABC Plumber, Austin&apos;s trusted plumbing company since 2010. Professional, licensed, and insured plumbing services in Austin, TX.",
    url: "https://www.abcplumbingservices.com/about",
  },
  alternates: {
    canonical: "https://www.abcplumbingservices.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 px-4 via-gray-100 to-gray-50">
    <main className="container mx-auto px-4 py-20">
      {/* IMPROVED: Hero Section with a two-column layout for text and image */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
            <Shield className="w-4 h-4 mr-2" />
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Austin&apos;s Trusted
            <span className="block text-blue-600">Plumbing Experts</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl lg:max-w-none mx-auto">
            Since 2010, ABC Plumber has been serving Austin and surrounding areas with professional, reliable plumbing services. We're your local experts for all your residential plumbing needs.
          </p>
        </div>
        
        {/* IMPROVED: Team Photo Section */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-800 to-gray-700 p-2 rounded-2xl">
            {/* Optional: Add a subtle pipe-like border */}
            <div className="absolute inset-0 m-1 rounded-xl border border-gray-600"></div>
          </div>
          <Image
            src="/assets/plumbers.webp"
            alt="Team of Plumbers"
            className="relative z-10 w-full h-full object-cover rounded-xl"
            priority
            width={1200}
            height={800} // Adjust dimensions for a landscape team photo
            quality={90}
          />
        </div>
      </section>
      
        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010, ABC Plumber began as a small family-owned business with a simple mission: 
                  to provide honest, reliable plumbing services to the Austin community. What started as a 
                  two-person operation has grown into one of Austin&apos;s most trusted plumbing companies.
                </p>
                <p>
                  Over the past 14+ years, we&apos;ve served thousands of satisfied customers throughout Austin 
                  and the surrounding areas. Our commitment to quality workmanship, honest pricing, and 
                  exceptional customer service has remained unchanged since day one.
                </p>
                <p>
                  Today, &apos; proud to be Austin&apos;s go-to plumbing experts, offering comprehensive 
                  residential plumbing services with the same dedication and integrity that built our reputation.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="text-center text-white">
                <div className="text-4xl font-bold text-blue-400 mb-2">14+</div>
                <div className="text-lg mb-4">Years of Experience</div>
                <div className="text-4xl font-bold text-blue-400 mb-2">5000+</div>
                <div className="text-lg mb-4">Happy Customers</div>
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-lg">Emergency Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and ensure we provide the best service possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300">
                We believe in honest pricing, transparent communication, and doing what&apos;s right for our customers. 
                No hidden fees, no surprises - just honest, reliable service.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quality</h3>
              <p className="text-gray-300">
                We never compromise on quality. From the materials we use to the workmanship we provide, 
                we ensure every job meets our high standards of excellence.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-gray-300">
                As a local Austin business, &apos; committed to serving our community. We treat every customer 
                like a neighbor and every job like it&apos;s our own home.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our licensed and certified plumbers are experienced professionals dedicated to providing 
              the best service possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed Professionals</h3>
                <p className="text-gray-300 text-sm">
                  All our plumbers are state-licensed, bonded, and insured for your protection.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                <p className="text-gray-300 text-sm">
                  Combined experience of over 50 years in residential plumbing services.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Background Checked</h3>
                <p className="text-gray-300 text-sm">
                  Every team member undergoes thorough background checks for your peace of mind.
                </p>
              </div>
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
              Ready to Work with Austin&apos;s Trusted Plumbers?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Experience the difference that 14+ years of expertise makes. Contact us today for reliable, professional plumbing services.
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
                  View Our Services
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