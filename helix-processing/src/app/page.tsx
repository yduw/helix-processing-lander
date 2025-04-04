'use client';

// Imports will be added when needed
import Link from "next/link";
import PatientCounter from "@/components/PatientCounter";

export default function Home() {
  // No animation useEffect
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Semi-transparent overlay for better text readability - reduced opacity */}
          <div className="w-full h-full bg-indigo-900/25 absolute inset-0 z-10" />
          
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 text-shadow-lg fade-in-1">
            Helix Processing
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white mb-8 max-w-3xl mx-auto text-shadow-md fade-in-2">
            Streamlining Care, Empowering Lives.
          </p>
          
          {/* Patient Counter */}
          <div className="mb-10 fade-in-3">
            <p className="text-white font-extrabold text-shadow-md">
              <span className="font-mono text-white text-xl">
                <PatientCounter startValue={215782} />
              </span> patients served
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="fade-in-4">
            <Link 
              href="#services" 
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-base font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  const yOffset = -40; // Add negative offset to prevent scrolling too far
                  const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({top: y, behavior: 'smooth'});
                }
              }}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
        
      </section>
      
      {/* Color transition element - even subtler gradient */}
      <div className="h-16 bg-gradient-to-b from-indigo-900/30 to-indigo-900/90 relative z-20 -mt-16"></div>
      
      {/* Summary Section */}
      <section id="services" className="py-20 service-section-bg relative overflow-hidden -mt-1">
        {/* Content container with proper spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-center mb-16 animate-fade-in-up">
            <span className="text-white">California&apos;s leader in </span>
            <span className="shimmer-text font-bold">Healthcare Innovation</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* FDA-compliant imported medical goods */}
            <div className="card-medical-bg rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/service-card-pictures/fda-goods.jpg" 
                  alt="FDA-approved imported medical products" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">FDA-Compliant Imported Medical Goods</h3>
              </div>
              <p className="text-white/90 mb-6 font-medium flex-grow text-left">
                Access quality imported medical products that meet all FDA regulatory standards, ensuring safety and effectiveness for patients.
              </p>
              <Link href="/services/fda-medical-products" className="text-white font-bold hover:text-blue-200 bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-lg inline-flex items-center transition-all duration-200 mt-auto self-start">
                Learn more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Durable Medical Equipment (DME) */}
            <div className="card-dme-bg rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/service-card-pictures/dme.jpg" 
                  alt="Durable medical equipment" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Durable Medical Equipment (DME)</h3>
              </div>
              <p className="text-white/90 mb-6 font-medium flex-grow text-left">
                Reliable, high-quality medical equipment designed for long-term use, enhancing patient care and improving quality of life.
              </p>
              <Link href="/services/dme" className="text-white font-bold hover:text-pink-200 bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded-lg inline-flex items-center transition-all duration-200 mt-auto self-start">
                Learn more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* AI-Powered ERP System */}
            <div className="card-ai-bg rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/service-card-pictures/erp-system.jpg" 
                  alt="Third-Party Administration software" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">AI Third-Party Administration (TPA) Software</h3>
              </div>
              <p className="text-white/90 mb-6 font-medium flex-grow text-left">
                Streamline your healthcare practice with our cutting-edge AI TPA software that automates third-party administration and claims processing workflows.
              </p>
              <Link href="/services/tpa-software" className="text-white font-bold hover:text-violet-200 bg-violet-700 hover:bg-violet-800 px-4 py-2 rounded-lg inline-flex items-center transition-all duration-200 mt-auto self-start">
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