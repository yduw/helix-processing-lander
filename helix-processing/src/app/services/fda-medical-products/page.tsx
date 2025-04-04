'use client';

export default function FdaMedicalProductsPage() {
  return (
    <div className="min-h-screen service-bg-medical relative">
      <div className="service-bg-overlay"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 pt-28 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-lg">
                FDA-Compliant Medical Products
              </h1>
            </div>
            <div className="mt-10 max-w-3xl text-center">
              <p className="text-xl text-white/90 font-medium leading-relaxed text-shadow-sm">
                Quality imported medical products that meet all FDA regulatory standards
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
            <div className="h-80 lg:h-auto">
              <img 
                src="/images/service-card-pictures/fda-goods.jpg" 
                alt="FDA-compliant medical products" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-indigo-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Why Choose Our Medical Products</h2>
              </div>
              <p className="text-white/90 mb-8 leading-relaxed">
                We source and distribute a comprehensive range of FDA-approved imported medical products, 
                ensuring quality, safety, and regulatory compliance at every step.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rigorous quality control and verification processes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete documentation and product traceability</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Streamlined import logistics and customs clearance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Section 2: Product Categories */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Product Categories</h2>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto mb-12">
            We offer a comprehensive range of FDA-compliant medical products across multiple categories
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Diagnostic Equipment</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Advanced diagnostic tools for accurate patient assessment and monitoring, including imaging and laboratory equipment.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Surgical Instruments</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                High-quality surgical tools designed for precision and reliability in operating rooms and clinical settings.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Medical Supplies</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Essential supplies for everyday healthcare delivery and patient care, including disposables and consumables.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section 3: Resources */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/10 shadow-xl p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Resources</h2>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Access comprehensive information about our FDA-compliant medical products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#" className="group">
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Product Catalog</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Comprehensive catalog of all our medical products with detailed specifications.</p>
                <div className="text-indigo-300 group-hover:text-indigo-200 font-medium inline-flex items-center transition-all">
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
                  <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">FDA Compliance Guide</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Essential information on FDA compliance requirements for medical products.</p>
                <div className="text-indigo-300 group-hover:text-indigo-200 font-medium inline-flex items-center transition-all">
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
                  <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Service & Support</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Contact our support team for product information and technical assistance.</p>
                <div className="text-indigo-300 group-hover:text-indigo-200 font-medium inline-flex items-center transition-all">
                  Contact Support
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
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