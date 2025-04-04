// No imports needed currently

export const metadata = {
  title: "Services & Products - Helix Processing",
  description: "Explore our range of FDA-compliant medical goods, durable medical equipment, and AI TPA software services.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Services & Products</h1>
          <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to streamline operations and enhance patient care.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {/* FDA-Compliant Imported Medical Goods */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center mb-8 lg:mb-0">
              <p className="text-gray-600 font-medium">[Image: Medical products with FDA approval logos]</p>
            </div>
            <div>
              <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                Quality Assured
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">FDA-Compliant Imported Medical Goods</h2>
              <p className="text-gray-700 mb-6 font-medium">
                We source and distribute a comprehensive range of FDA-approved imported medical products, ensuring quality, safety, and regulatory compliance at every step.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Rigorous quality control and verification processes</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Complete documentation and product traceability</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Streamlined import logistics and customs clearance support</p>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center px-5 py-2 border border-transparent rounded-full text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                >
                  Request Product Catalog
                  <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Durable Medical Equipment (DME) */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                Long-lasting Quality
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Durable Medical Equipment (DME)</h2>
              <p className="text-gray-700 mb-6 font-medium">
                Our DME solutions are designed to provide reliable, high-quality medical equipment for long-term use, enhancing patient care and improving quality of life.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-pink-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Comprehensive range of mobility aids, hospital beds, and respiratory equipment</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-pink-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Maintenance and repair services to ensure equipment longevity</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-pink-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Insurance coverage navigation and billing support</p>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center px-5 py-2 border border-transparent rounded-full text-base font-bold text-white bg-pink-600 hover:bg-pink-700 shadow-sm"
                >
                  Browse Equipment
                  <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center mb-8 lg:mb-0 order-1 lg:order-2">
              <p className="text-gray-600 font-medium">[Image: Various durable medical equipment items]</p>
            </div>
          </div>

          {/* AI-Powered Insurance Claims Processing */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="h-80 rounded-xl overflow-hidden mb-8 lg:mb-0">
              <img 
                src="/images/tpa-service/tpa.jpg" 
                alt="Third-Party Administration software" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <div className="inline-block bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                Next-Gen Technology
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Third-Party Administration (TPA) Software</h2>
              <p className="text-gray-700 mb-6 font-medium">
                Our cutting-edge AI technology streamlines the claims process, reducing administrative burden and accelerating reimbursement for healthcare providers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-violet-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Automated claim submission and tracking with 99.7% accuracy</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-violet-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Real-time claim status monitoring and issue detection</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-violet-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">Integration with existing electronic health record systems</p>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center px-5 py-2 border border-transparent rounded-full text-base font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-sm"
                >
                  Schedule a Demo
                  <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Resources & Downloads</h2>
            <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto">
              Access comprehensive information about our products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Product Catalog</h3>
              <p className="text-gray-700 font-medium mb-4">Comprehensive catalog of all our medical products with detailed specifications.</p>
              <a href="#" className="text-indigo-600 font-bold hover:text-indigo-800 inline-flex items-center transition-colors">
                Download PDF
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Insurance Coverage Guide</h3>
              <p className="text-gray-700 font-medium mb-4">Details on insurance coverage for our medical equipment and services.</p>
              <a href="#" className="text-pink-600 font-bold hover:text-pink-800 inline-flex items-center transition-colors">
                Download PDF
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Services Demo</h3>
              <p className="text-gray-700 font-medium mb-4">Watch our video demonstration of our AI TPA software.</p>
              <a href="#" className="text-violet-600 font-bold hover:text-violet-800 inline-flex items-center transition-colors">
                Watch Video
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}