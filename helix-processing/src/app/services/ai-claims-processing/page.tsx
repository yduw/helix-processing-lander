'use client';

export default function AiClaimsProcessingPage() {
  return (
    <div className="min-h-screen service-bg-ai relative">
      <div className="service-bg-overlay"></div>
      <div className="service-content relative z-10 pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-shadow-lg">
              AI-Powered Claims Processing
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-3xl mx-auto text-shadow-sm">
              Streamlining healthcare administration with cutting-edge artificial intelligence
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white/90 backdrop-blur-sm py-16 relative z-10 rounded-t-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-20">
            <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center mb-8 lg:mb-0">
              <p className="text-gray-600 font-medium">[Image: AI technology processing insurance claims]</p>
            </div>
            <div>
              <div className="inline-block bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                Next-Gen Technology
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Revolutionizing Claims Processing</h2>
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
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Form Recognition</h3>
                <p className="text-gray-700 font-medium">AI-powered recognition of insurance forms and automatic data extraction with high accuracy.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Processing</h3>
                <p className="text-gray-700 font-medium">Instant validation and error checking before submission to ensure first-pass success.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Detailed Analytics</h3>
                <p className="text-gray-700 font-medium">Comprehensive reporting and insights on claims processing efficiency and financial performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-sm py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-violet-900 mb-4">Resources & Downloads</h2>
            <p className="text-xl font-semibold text-violet-800 max-w-3xl mx-auto">
              Access comprehensive information about our products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Services Demo</h3>
              <p className="text-gray-700 font-medium mb-4">Watch our video demonstration of our AI-powered claims processing system.</p>
              <a href="#" className="text-violet-600 font-bold hover:text-violet-800 inline-flex items-center transition-colors">
                Watch Video
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Whitepaper</h3>
              <p className="text-gray-700 font-medium mb-4">Detailed technical overview of our AI claims processing technology and integration options.</p>
              <a href="#" className="text-violet-600 font-bold hover:text-violet-800 inline-flex items-center transition-colors">
                Download PDF
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ROI Calculator</h3>
              <p className="text-gray-700 font-medium mb-4">Calculate your potential return on investment when implementing our AI claims system.</p>
              <a href="#" className="text-violet-600 font-bold hover:text-violet-800 inline-flex items-center transition-colors">
                Access Calculator
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}