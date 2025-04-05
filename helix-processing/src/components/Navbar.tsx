"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  
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
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 blur-header shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/favicon.ico" 
                alt="Nova Medical Logo" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <div className="text-2xl font-extrabold text-blue-600">
                Nova Medical
              </div>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/services/dme" className="text-gray-700 hover:text-blue-600 font-bold transition-colors nav-link">
              Durable Medical Equipment
            </Link>
            
            <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-bold transition-colors nav-link">
              Contact
            </Link>
            
            <Link 
              href="/portal" 
              className="px-4 py-2 nova-gradient text-white font-bold rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-1"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Pay My Bill
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
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
        <div className="pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          <Link href="/services/dme" className="block px-3 py-2 text-base font-bold text-gray-700 hover:text-blue-600 hover:pl-4 transition-all duration-200">
            Durable Medical Equipment
          </Link>
          
          <Link href="/locations" className="block px-3 py-2 text-base font-bold text-gray-700 hover:text-blue-600 hover:pl-4 transition-all duration-200 border-t border-gray-100">
            Contact
          </Link>
          
          <Link href="/portal" className="block px-3 py-3 mt-2 mx-3 nova-gradient text-white font-bold rounded-md transition-all duration-200 text-center shadow-md border-t border-gray-100 flex items-center justify-center gap-1">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Pay My Bill
          </Link>
        </div>
      </div>
    </nav>
  );
}