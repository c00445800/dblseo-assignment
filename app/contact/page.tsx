'use client';
import { useState } from "react";  
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const validateForm = (formData: { firstName: string; lastName: string; email: string; phone: string; service?: string; message: string; }) => {

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      return 'All required fields must be filled.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address.';
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone)) {
      return 'Please enter a valid phone number.';
    }


    return null; 
  };

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setStatus('Sent'); 
    const form = event.currentTarget;

    
    const formData = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value, 
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value, 
    };


    const validationError = validateForm(formData);
    if (validationError) {
      setStatus(validationError); 
      return;
    }

    // Here the logic for the contact submision would be placed
  };

  return (
    <div className="px-4 min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold rounded-full mb-4 shadow-lg">
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
            <span className="block text-blue-600">Today</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to solve your plumbing problems? Contact us for professional, reliable plumbing services 
            in Austin and surrounding areas. We&apos;re here to help 24/7.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
              {/* Metallic pipe decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName" // Ensure 'name' attribute matches for form.elements.namedItem
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName" // Ensure 'name' attribute matches
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Ensure 'name' attribute matches
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone" // Ensure 'name' attribute matches
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(512) 555-0123"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service" // Ensure 'name' attribute matches
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="drain-cleaning">Drain Cleaning</option>
                    <option value="leak-detection">Leak Detection</option>
                    <option value="water-heater">Water Heater</option>
                    <option value="emergency">Emergency Plumbing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message" // Ensure 'name' attribute matches
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your plumbing issue..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold shadow-lg"
                  disabled={status === 'Sending...'} // Disable button while sending
                >
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </Button>
                
                {status && (
                  <p className={`mt-4 text-center ${status.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
                {/* Metallic pipe decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a href="tel:+15125550123" className="text-blue-400 hover:text-blue-300">
                        (512) 555-0123
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a href="mailto:info@abcplumbingservices.com" className="text-blue-400 hover:text-blue-300">
                        info@abcplumbingservices.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Service Area</div>
                      <div className="text-gray-300">Austin, TX & Surrounding Areas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Hours</div>
                      <div className="text-gray-300">24/7 Emergency Service</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-600 relative overflow-hidden">
                {/* Metallic pipe decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Us?</h3>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-white">Licensed & Insured</div>
                      <div className="text-sm">Full protection for your peace of mind</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-white">24/7 Emergency Service</div>
                      <div className="text-sm">Available around the clock for urgent repairs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-white">Local Austin Business</div>
                      <div className="text-sm">Serving our community since 2010</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-white">Honest Pricing</div>
                      <div className="text-sm">No hidden fees, transparent quotes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-8 text-white border border-gray-600 shadow-2xl relative overflow-hidden">
            {/* Metallic pipe decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Plumbing Emergency?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Don&apos;t wait! Call us immediately for 24/7 emergency plumbing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 font-bold shadow-lg">
                <Link href="tel:+15125550123" className="flex items-center">
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