"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl sticky top-0 z-50 border-b border-gray-600" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Image
              src="/assets/abc_plumbing.webp"
              alt="ABC Plumber Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
            <span className="text-xl md:text-2xl font-bold text-blue-400 hidden sm:block">
              ABC Plumber
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-blue-400 transition-colors">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600 shadow-2xl">
                    <li>
                      <Link href="/services/drain-cleaning" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-600/20 hover:text-blue-400 focus:bg-blue-600/20 focus:text-blue-400 text-white">
                        <div className="text-sm font-medium leading-none">Drain Cleaning</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                          Professional drain cleaning services
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/leak-detection" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-600/20 hover:text-blue-400 focus:bg-blue-600/20 focus:text-blue-400 text-white">
                        <div className="text-sm font-medium leading-none">Leak Detection</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                          Advanced leak detection technology
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/about" className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg border border-blue-400/30">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-blue-600/20 hover:text-blue-400">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-gray-900 to-gray-800 border-l border-gray-600">
              <div className="flex flex-col space-y-4 mt-8">
                <Link 
                  href="/" 
                  className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-white">Services</h3>
                  <div className="pl-4 space-y-2">
                    <Link 
                      href="/services/drain-cleaning" 
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMenu}
                    >
                      Drain Cleaning
                    </Link>
                    <Link 
                      href="/services/leak-detection" 
                      className="block text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={closeMenu}
                    >
                      Leak Detection
                    </Link>
                  </div>
                </div>
                
                <Link 
                  href="/about" 
                  className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
                  onClick={closeMenu}
                >
                  About
                </Link>
                
                <Link 
                  href="/contact" 
                  className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                
                <div className="pt-4">
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg">
                    <Link href="/contact" onClick={closeMenu}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 