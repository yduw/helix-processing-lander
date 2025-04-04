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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/50 backdrop-blur-md shadow-md' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/favicon.ico" 
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
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-indigo-200 font-bold transition-colors nav-link flex items-center"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
              >
                Services
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-indigo-900/90 backdrop-blur-md border border-indigo-700/50 overflow-hidden z-50 transition-opacity duration-150 ${isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => {
                  // Add a delay before closing the dropdown
                  setTimeout(() => {
                    if (!document.querySelector('.services-dropdown:hover')) {
                      setIsServicesDropdownOpen(false);
                    }
                  }, 300);
                }}
              >
                <div className="py-1 services-dropdown">
                  <Link 
                    href="/services/fda-medical-products" 
                    className="block px-4 py-3 text-base font-bold text-white hover:bg-indigo-800/70 hover:pl-5 transition-all duration-200"
                  >
                    FDA-Compliant Medical Products
                  </Link>
                  <Link 
                    href="/services/dme" 
                    className="block px-4 py-3 text-base font-bold text-white hover:bg-indigo-800/70 hover:pl-5 transition-all duration-200"
                  >
                    Durable Medical Equipment
                  </Link>
                  <Link 
                    href="/services/ai-claims-processing" 
                    className="block px-4 py-3 text-base font-bold text-white hover:bg-indigo-800/70 hover:pl-5 transition-all duration-200"
                  >
                    AI-Powered Claims Processing
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/locations" className="text-white hover:text-indigo-200 font-bold transition-colors nav-link">
              Contact
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
          
          {/* Services Section */}
          <div className="py-1 border-t border-white/20">
            <div className="px-3 py-2 text-base font-bold text-white">
              Services
            </div>
            <Link href="/services/fda-medical-products" className="block px-5 py-2 text-base font-bold text-white hover:text-indigo-200 hover:pl-6 transition-all duration-200">
              FDA-Compliant Medical Products
            </Link>
            <Link href="/services/dme" className="block px-5 py-2 text-base font-bold text-white hover:text-indigo-200 hover:pl-6 transition-all duration-200">
              Durable Medical Equipment
            </Link>
            <Link href="/services/ai-claims-processing" className="block px-5 py-2 text-base font-bold text-white hover:text-indigo-200 hover:pl-6 transition-all duration-200">
              AI-Powered Claims Processing
            </Link>
          </div>
          
          <Link href="/locations" className="block px-3 py-2 text-base font-bold text-white hover:text-indigo-200 hover:pl-4 transition-all duration-200 border-t border-white/10">
            Contact
          </Link>
          <Link href="/portal" className="block mx-3 my-2 px-3 py-2 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full text-center transition-all duration-200 hover:shadow-md">
            Patient Portal
          </Link>
        </div>
      </div>
    </nav>
  );
}