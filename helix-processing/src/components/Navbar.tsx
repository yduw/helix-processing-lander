"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/50 backdrop-blur-md shadow-md' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/favicon-for-public/web-app-manifest-192x192.png" 
                alt="Helix Processing Logo" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <div className="text-2xl font-extrabold text-white">
                Helix Processing
              </div>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/about" className="text-white hover:text-indigo-200 font-bold transition-colors nav-link">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-indigo-200 font-bold transition-colors nav-link">
              Services
            </Link>
            <Link href="/locations" className="text-white hover:text-indigo-200 font-bold transition-colors nav-link">
              Locations
            </Link>
            <Link href="/portal" className="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105 hover:shadow-md">
              Patient Portal
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-sm">
          <Link href="/about" className="block px-3 py-2 text-base font-bold text-white hover:text-indigo-200 hover:pl-4 transition-all duration-200">
            About Us
          </Link>
          <Link href="/services" className="block px-3 py-2 text-base font-bold text-white hover:text-indigo-200 hover:pl-4 transition-all duration-200">
            Services
          </Link>
          <Link href="/locations" className="block px-3 py-2 text-base font-bold text-white hover:text-indigo-200 hover:pl-4 transition-all duration-200">
            Locations
          </Link>
          <Link href="/portal" className="block mx-3 my-2 px-3 py-2 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full text-center transition-all duration-200 hover:shadow-md">
            Patient Portal
          </Link>
        </div>
      </div>
    </nav>
  );
}