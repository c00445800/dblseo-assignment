import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, X, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About ABC Plumber</h3>
            <div className="flex items-center mb-4">
              <Image
                src="/assets/abc_plumbing.webp"
                alt="ABC Plumber Logo"
                width={80}
                height={30}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serving Austin and surrounding areas since 2010. We provide professional 
              residential plumbing services with integrity, quality, and reliability. 
              Your trusted local plumber for all your plumbing needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2" role="navigation" aria-label="Footer navigation">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Services
              </Link>
              <Link 
                href="/services/drain-cleaning" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Drain Cleaning
              </Link>
              <Link 
                href="/services/leak-detection" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Leak Detection
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info + Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Austin, TX</p>
                  <p className="text-gray-400 text-xs">Serving Austin & surrounding areas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+15125550123" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Call us at (512) 555-0123"
                >
                  (512) 555-0123
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@abcplumbingservices.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Email us at info@abcplumbingservices.com"
                >
                  info@abcplumbingservices.com
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our X (Twitter) page"
                  >
                    <X className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram page"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Column 4: Google Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Location</h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220446.605692895!2d-97.7535988!3d30.3074623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599ab0ba0b7%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ABC Plumber location in Austin, TX"
                aria-label="Map showing ABC Plumber location in Austin, Texas"
              ></iframe>
            </div>
            <div className="mt-3 text-sm text-gray-300">
              <p>Serving Austin and surrounding areas</p>
              <p className="text-gray-400 text-xs mt-1">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 ABC Plumber. All rights reserved.</p>
            </div>
            <nav className="flex space-x-6 mt-4 md:mt-0" role="navigation" aria-label="Legal navigation">
              <Link 
                href="/privacy" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 