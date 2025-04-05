'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PatientCounter from "@/components/PatientCounter";
import USMapWrapper from "@/components/USMapWrapper";

// Slideshow images array
const slideshowImages = [
  {
    src: "/images/slideshow/slideshow-1.jpg",
    alt: "Medical equipment for patient care"
  },
  {
    src: "/images/slideshow/slideshow-2.jpg",
    alt: "Healthcare professional with equipment"
  },
  {
    src: "/images/slideshow/slideshow-3.jpg",
    alt: "Modern medical facility"
  },
  {
    src: "/images/slideshow/slideshow-4.jpg",
    alt: "Patient receiving care with medical equipment"
  }
];

export default function Home() {
  // State for current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // State to track if a transition is in progress
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Auto-advance slideshow
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 2000); // Wait for transition to complete (2 seconds)
        }, 100); // Small delay before starting transition
      }
    }, 8000); // Longer interval to account for extended transition duration
    
    return () => clearInterval(slideInterval);
  }, [isTransitioning]);
  
  return (
    <>
      {/* Hero Slideshow Section */}
      <section className="relative pt-16">
        {/* Slideshow container */}
        <div className="relative h-[600px] md:h-[650px] overflow-hidden">
          {/* Slides */}
          {slideshowImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-2000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide || (currentSlide === 0 && index === slideshowImages.length - 1)
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              {/* Image with gradient background - right aligned */}
              <div className="relative h-full w-full flex">
                {/* Left gradient background */}
                <div className="w-1/2 h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"></div>
                
                {/* Right image container */}
                <div className="w-1/2 h-full relative">
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center left' }}
                    priority={index === 0}
                  />
                </div>
                
                {/* Subtle overlay connecting gradient and image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400/40 to-transparent"></div>
              </div>
            </div>
          ))}
          
          {/* Content container - positioned on left side */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 sm:px-10 lg:px-16">
              <div className="max-w-xl ml-0 md:ml-8 lg:ml-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-4">
                  Enhancing Patient Care Through Innovation
                </h1>
                <p className="text-xl md:text-2xl text-white/90 drop-shadow-sm mb-8 max-w-xl font-bold">
                  Empowering healthcare providers with exceptional medical equipment solutions.
                </p>
                
                {/* Patient Counter */}
                <div className="mb-8 bg-white/90 backdrop-blur-sm py-4 px-6 rounded-lg inline-flex items-center shadow-md">
                  <div className="text-blue-600 font-bold mr-2 text-2xl md:text-3xl">
                    <PatientCounter startValue={215782} />
                  </div>
                  <span className="text-gray-700 font-medium text-lg md:text-xl">patients served nationwide</span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/services/dme" 
                    className="px-6 py-3 bg-white text-blue-600 font-bold rounded-md button-hover pulse-on-hover shadow-md"
                  >
                    Our DME Products
                  </Link>
                  <Link 
                    href="/locations" 
                    className="px-6 py-3 border-2 border-white text-white font-bold rounded-md button-hover"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slideshow navigation dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slideshowImages.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Statement Section - styled like StanceHealthSolutions */}
      <section className="py-20 pattern-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Our Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            We enable patients to live comfortably at home by providing FDA-compliant medical equipment for every stage and every age.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="blur-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 nova-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Patient-Centric Care</h3>
              <p className="text-gray-600 text-sm">
                We prioritize patient comfort and wellbeing in everything we do
              </p>
            </div>
            
            <div className="blur-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 nova-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovative Solutions</h3>
              <p className="text-gray-600 text-sm">
                We continuously improve our offerings to deliver the best possible care
              </p>
            </div>
            
            <div className="blur-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 nova-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FDA Compliance</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards of regulatory compliance and quality
              </p>
            </div>
          </div>
          
          {/* U.S. Map Component - States with Nova Medical Insurance Coverage */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
              Nova Medical insurance coverage across <span className="text-blue-600">35 states</span> and growing
            </h3>
            <div className="blur-card rounded-xl p-6 md:p-10 shadow-md">
              <USMapWrapper />
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              Hover over highlighted states to see our insurance coverage details
            </p>
          </div>
        </div>
      </section>
      
      {/* Main content section with blur background */}
      <section className="py-20 blur-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DME Solutions Designed for <span className="text-blue-600">Patient Care</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FDA-compliant, high-quality medical equipment that improves patient outcomes and enhances quality of life
            </p>
          </div>
          
          {/* Product highlight */}
          <div className="flex flex-col lg:flex-row gap-12 items-center blur-card rounded-xl overflow-hidden shadow-md">
            <div className="lg:w-1/2">
              <div className="relative h-80 lg:h-full w-full">
                <Image 
                  src="/images/service-card-pictures/dme.jpg"
                  alt="Nova Medical Equipment" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nova Durable Medical Equipment (DME)
              </h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive FDA-compliant DME solutions include mobility aids, hospital beds, orthopedic supports, and more. Each product is designed with patient comfort, safety, and care in mind, helping healthcare providers deliver the best possible outcomes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Comprehensive product range for diverse patient needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Reliable equipment backed by maintenance services</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Expert insurance coverage navigation and support</span>
                </li>
              </ul>
              <Link 
                href="/services/dme" 
                className="inline-flex items-center px-5 py-2.5 nova-gradient text-white font-medium rounded-md button-hover"
              >
                Explore Our DME Products
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}