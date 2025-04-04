'use client';

import { useState } from 'react';

export default function DmePage() {
  // State to track which category is expanded
  const [expandedCategory, setExpandedCategory] = useState(null);
  
  // Toggle category expansion
  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };
  return (
    <div className="min-h-screen service-bg-dme relative">
      <div className="service-bg-overlay"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 pt-28 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-10 h-10 bg-pink-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-lg">
                Nova Durable Medical Equipment <span className="text-pink-200">(DME)</span>
              </h1>
            </div>
            <div className="mt-10 max-w-3xl text-center">
              <p className="text-xl text-white/90 font-medium leading-relaxed text-shadow-sm">
                Reliable, high-quality medical equipment designed for long-term use
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 pb-20">
        {/* Section 1: Overview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/10 shadow-xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 lg:gap-0">
            <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center mb-4">
                <div className="w-8 h-8 bg-pink-600/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-pink-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Enhancing Patient Quality of Life</h2>
              </div>
              <p className="text-white/90 mb-8 leading-relaxed">
                Our DME solutions are designed to provide reliable, high-quality medical equipment for long-term use, 
                enhancing patient care and improving quality of life.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-pink-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive range of mobility aids, hospital beds, and respiratory equipment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-pink-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maintenance and repair services to ensure equipment longevity</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-pink-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Insurance coverage navigation and billing support</span>
                </li>
              </ul>
            </div>
            <div className="h-80 lg:h-auto order-1 lg:order-2">
              <img 
                src="/images/service-card-pictures/dme.jpg" 
                alt="Durable Medical Equipment" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        
        {/* Section 2: Equipment Categories - Interactive Expandable Categories */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Our Equipment Catalog</h2>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto mb-10">
              Click on any category to explore our comprehensive selection of high-quality durable medical equipment
            </p>
          </div>
          
          {/* Expandable Equipment Categories */}
          <div className="space-y-5 max-w-5xl mx-auto">
            {/* Mobility Assistance Category */}
            <div className="bg-gradient-to-r from-pink-600/20 to-pink-800/10 rounded-2xl border border-pink-500/20 overflow-hidden shadow-lg">
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleCategory('mobility')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-600/30 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mobility Assistance</h3>
                </div>
                <div className="flex-shrink-0">
                  <svg 
                    className={`h-6 w-6 text-pink-300 transition-transform duration-300 ${expandedCategory === 'mobility' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Expandable Content */}
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  expandedCategory === 'mobility' 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Canes</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Crutches</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Walkers</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Rollators</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Wheelchairs</h4>
                      <p className="text-white/80 text-sm">Custom, Power and Manual</p>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Wheelchair Accessories</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Mobility Accessories</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Home Therapy Equipment Category */}
            <div className="bg-gradient-to-r from-pink-700/20 to-pink-900/10 rounded-2xl border border-pink-500/20 overflow-hidden shadow-lg">
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleCategory('therapy')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-600/30 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Home Therapy Equipment</h3>
                </div>
                <div className="flex-shrink-0">
                  <svg 
                    className={`h-6 w-6 text-pink-300 transition-transform duration-300 ${expandedCategory === 'therapy' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Expandable Content */}
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  expandedCategory === 'therapy' 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Lymphedema Pumps</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Negative Pressure Wound Therapy</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Continuous Passive Motion (CPM)</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Tens Unit</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Orthotics & Prosthetic Category */}
            <div className="bg-gradient-to-r from-pink-600/20 to-pink-800/10 rounded-2xl border border-pink-500/20 overflow-hidden shadow-lg">
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleCategory('orthotics')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-600/30 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Orthotics & Prosthetic</h3>
                </div>
                <div className="flex-shrink-0">
                  <svg 
                    className={`h-6 w-6 text-pink-300 transition-transform duration-300 ${expandedCategory === 'orthotics' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Expandable Content */}
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  expandedCategory === 'orthotics' 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Braces</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Cervical Traction Sets</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Slings</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Miscellaneous Category */}
            <div className="bg-gradient-to-r from-pink-700/20 to-pink-900/10 rounded-2xl border border-pink-500/20 overflow-hidden shadow-lg">
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleCategory('misc')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-600/30 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Miscellaneous</h3>
                </div>
                <div className="flex-shrink-0">
                  <svg 
                    className={`h-6 w-6 text-pink-300 transition-transform duration-300 ${expandedCategory === 'misc' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Expandable Content */}
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  expandedCategory === 'misc' 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Breast Pumps</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Bili Blankets</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Diabetic Shoes</h4>
                    </div>
                    <div className="bg-pink-900/20 rounded-lg p-3 hover:bg-pink-900/30 transition-colors">
                      <h4 className="font-bold text-white">Immobilization Equipment</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section 3: Resources */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/10 shadow-xl p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-pink-600/20 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-5 w-5 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Resources</h2>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Access comprehensive information about our durable medical equipment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-3xl">
            <a href="#" className="group">
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Equipment Catalog</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Browse our complete catalog of durable medical equipment options with specifications.</p>
                <div className="text-pink-300 group-hover:text-pink-200 font-medium inline-flex items-center transition-all">
                  Download PDF
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="#" className="group">
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Insurance Coverage Guide</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Details on insurance coverage for our medical equipment and services.</p>
                <div className="text-pink-300 group-hover:text-pink-200 font-medium inline-flex items-center transition-all">
                  Download PDF
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}