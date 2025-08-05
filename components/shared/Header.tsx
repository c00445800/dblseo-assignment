"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-200 shadow-md sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Image
              src="/assets/abc_plumbing.webp"
              alt="ABC Plumber Logo"
              width={120}
              height={50}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <Link href="/services/drain-cleaning" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Drain Cleaning</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professional drain cleaning services
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/leak-detection" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Leak Detection</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced leak detection technology
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link 
                  href="/" 
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">Services</h3>
                  <div className="pl-4 space-y-2">
                    <Link 
                      href="/services/drain-cleaning" 
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={closeMenu}
                    >
                      Drain Cleaning
                    </Link>
                    <Link 
                      href="/services/leak-detection" 
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={closeMenu}
                    >
                      Leak Detection
                    </Link>
                  </div>
                </div>
                
                <Link 
                  href="/about" 
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  About
                </Link>
                
                <Link 
                  href="/contact" 
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                
                <div className="pt-4">
                  <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
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