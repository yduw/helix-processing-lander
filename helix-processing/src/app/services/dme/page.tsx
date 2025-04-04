'use client';

export default function DmePage() {
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
                Durable Medical Equipment <span className="text-pink-200">(DME)</span>
              </h1>
            </div>
            <div className="mt-6 max-w-3xl text-center">
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
        
        {/* Section 2: Equipment Categories */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Equipment Categories</h2>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto mb-12">
            We offer a comprehensive range of durable medical equipment across multiple categories
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Mobility Aids</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Wheelchairs, walkers, and mobility scooters designed for comfort and independence in daily activities.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Respiratory Equipment</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Oxygen concentrators, CPAP machines, and respiratory therapy devices for improved breathing and comfort.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Home Care & Hospital Beds</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Adjustable beds, patient lifts, and other home care equipment designed for comfort, safety, and recovery.
              </p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            
            <a href="#" className="group">
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Maintenance Schedule</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Recommended maintenance schedules to keep your equipment in optimal condition.</p>
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