"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle, // <--- Import SheetTitle
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const baseLinkClass = "text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkClass = "text-blue-400 bg-blue-600/20";
  const baseSheetLinkClass = "text-lg font-medium text-white hover:text-blue-400 transition-colors py-2 px-3 rounded-md";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl sticky top-0 z-50 border-b border-gray-600" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center h-full space-x-2" onClick={closeMenu}>
            <Image
              src="/assets/abc_plumbing.webp"
              alt="ABC Plumber Logo"
              width={200}
              height={200}
              className="h-full md:h-15 w-auto"
              priority
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={`${baseLinkClass} ${isLinkActive("/") ? activeLinkClass : ""}`}>
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`bg-transparent text-white transition-colors ${
                    isLinkActive("/services") ? activeLinkClass : ""
                  }`}
                >
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
                <Link href="/about" className={`${baseLinkClass} ${isLinkActive("/about") ? activeLinkClass : ""}`}>
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" className={`${baseLinkClass} ${isLinkActive("/contact") ? activeLinkClass : ""}`}>
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-gray-900 to-gray-800 border-l px-4 border-gray-600">
              <SheetTitle className="sr-only">Main Navigation</SheetTitle>
              
              <div className="flex flex-col space-y-4 mt-8">
                <SheetClose asChild>
                  <Link 
                    href="/" 
                    className={`${baseSheetLinkClass} ${isLinkActive("/") ? activeLinkClass : ""}`}
                  >
                    Home
                  </Link>
                </SheetClose>
                
                <div className="space-y-2">
                  <h3 
                    className={`${baseSheetLinkClass} ${
                      isLinkActive("/services") ? activeLinkClass : ""
                    }`}
                  >
                    Services
                  </h3>
                  <div className="pl-4 space-y-2">
                    <SheetClose asChild>
                      <Link 
                        href="/services/drain-cleaning" 
                        className={`block text-gray-300 hover:text-blue-400 transition-colors py-1 px-3 rounded-md ${
                          isLinkActive("/services/drain-cleaning") ? "text-blue-400" : ""
                        }`}
                      >
                        Drain Cleaning
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="/services/leak-detection" 
                        className={`block text-gray-300 hover:text-blue-400 transition-colors py-1 px-3 rounded-md ${
                          isLinkActive("/services/leak-detection") ? "text-blue-400" : ""
                        }`}
                      >
                        Leak Detection
                      </Link>
                    </SheetClose>
                  </div>
                </div>
                
                <SheetClose asChild>
                  <Link 
                    href="/about" 
                    className={`${baseSheetLinkClass} ${isLinkActive("/about") ? activeLinkClass : ""}`}
                  >
                    About
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link 
                    href="/contact" 
                    className={`${baseSheetLinkClass} ${isLinkActive("/contact") ? activeLinkClass : ""}`}
                  >
                    Contact
                  </Link>
                </SheetClose>
                
                <div className="pt-4">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg">
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}