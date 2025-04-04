'use client';

// Imports will be added when needed
import Link from "next/link";
import TextScramble from "@/components/TextScramble";
import PatientCounter from "@/components/PatientCounter";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add a class to body to indicate JavaScript is enabled
    document.body.classList.remove('no-js');
    
    // Particles removed
    
    // Make all cards visible immediately on first load
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, index * 300);
    });
    
    // Create Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          // Get all the cards in the section
          const cards = entry.target.querySelectorAll('.service-card');
          
          // Add animation classes with appropriate delays
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 300); // 300ms delay between each card
          });
        } else {
          // When scrolling away, remove animation classes to reset
          const cards = entry.target.querySelectorAll('.service-card');
          cards.forEach(card => {
            card.classList.remove('animate');
          });
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible
    
    // Observe the service cards container
    const serviceSection = document.querySelector('.service-cards-container');
    if (serviceSection) {
      observer.observe(serviceSection);
    }
    
    // Cleanup observer on component unmount
    return () => {
      if (serviceSection) {
        observer.unobserve(serviceSection);
      }
    };
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Semi-transparent overlay for better text readability */}
          <div className="w-full h-full bg-indigo-900/40 absolute inset-0 z-10" />
          
          {/* Video element */}
          <video 
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/healthcare-bg.mp4"
          >
            <source src="/videos/healthcare-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 text-shadow-lg">
            <TextScramble text="Helix Processing" />
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white mb-8 max-w-3xl mx-auto text-shadow-md">
            <TextScramble text="Streamlining Care, Empowering Lives." />
          </p>
          
          {/* Patient Counter */}
          <div className="mb-10">
            <p className="text-white font-extrabold text-shadow-md">
              <span className="font-mono text-white text-xl">
                <PatientCounter startValue={432819} />
              </span> patients served
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-base font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Color transition element - subtler gradient */}
      <div className="h-20 bg-gradient-to-b from-indigo-900/60 to-indigo-900/100 relative z-20 -mt-20"></div>
      
      {/* Summary Section */}
      <section className="py-20 animated-gradient-bg relative overflow-hidden -mt-1">
        {/* Content container with proper spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-center mb-16 animate-fade-in-up">
            <span className="text-white">California&apos;s leader in </span>
            <span className="shimmer-text font-bold">Healthcare Innovation</span>
            <span className="text-white">.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 service-cards-container">
            {/* FDA-compliant imported medical goods */}
            <div className="bg-gradient-to-b from-indigo-800/80 to-indigo-900/90 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full service-card card-hover-effect opacity-100 md:opacity-0">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">FDA-Compliant Imported Medical Goods</h3>
              <p className="text-gray-200 mb-6 font-medium flex-grow">
                Access quality imported medical products that meet all FDA regulatory standards, ensuring safety and effectiveness for patients.
              </p>
              <Link href="/services" className="text-indigo-300 font-bold hover:text-indigo-100 inline-flex items-center transition-colors mt-auto">
                Learn more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Durable Medical Equipment (DME) */}
            <div className="bg-gradient-to-b from-pink-800/70 to-indigo-900/80 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full service-card card-hover-effect opacity-100 md:opacity-0">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Durable Medical Equipment (DME)</h3>
              <p className="text-gray-200 mb-6 font-medium flex-grow">
                Reliable, high-quality medical equipment designed for long-term use, enhancing patient care and improving quality of life.
              </p>
              <Link href="/services" className="text-pink-300 font-bold hover:text-pink-100 inline-flex items-center transition-colors mt-auto">
                Learn more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* AI-Powered Insurance Claims Processing */}
            <div className="bg-gradient-to-b from-violet-800/70 to-indigo-900/80 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full service-card card-hover-effect opacity-100 md:opacity-0">
              <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Claims Processing</h3>
              <p className="text-gray-200 mb-6 font-medium flex-grow">
                Streamline your healthcare practice with our cutting-edge AI technology that expedites insurance claims and reduces administrative burden.
              </p>
              <Link href="/services" className="text-violet-300 font-bold hover:text-violet-100 inline-flex items-center transition-colors mt-auto">
                Learn more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* No additional sections should be added here to ensure seamless transition to footer */}
    </>
  );
}