'use client';

export default function TPASoftwarePage() {
  return (
    <div className="min-h-screen service-bg-ai relative">
      <div className="service-bg-overlay"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 pt-28 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-10 h-10 bg-violet-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-lg">
                AI Third-Party Administration <span className="text-violet-200">(TPA)</span> Software
              </h1>
            </div>
            <div className="mt-6 max-w-3xl text-center">
              <p className="text-xl text-white/90 font-medium leading-relaxed text-shadow-sm">
                Automating third-party administration with advanced artificial intelligence and 24/7 AI customer support
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
                src="/images/tpa-service/tpa.jpg" 
                alt="Third-Party Administration software" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center mb-4">
                <div className="w-8 h-8 bg-violet-600/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-violet-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Revolutionizing Healthcare Administration</h2>
              </div>
              <p className="text-white/90 mb-8 leading-relaxed">
                Our cutting-edge AI technology streamlines third-party administration processes, 
                reducing operational complexities and accelerating outcomes for healthcare providers.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated claim submission and tracking with 99.7% accuracy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time claim status monitoring and issue detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integration with existing electronic health record systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-violet-100">24/7 AI-powered customer support</strong> for immediate assistance with claims and coverage inquiries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Section 2: Features */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Key Features</h2>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto mb-12">
            Our TPA software provides industry-leading features designed to streamline operations and maximize efficiency
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Smart Form Recognition</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                AI-powered recognition of insurance forms and automatic data extraction with high accuracy, reducing manual entry by 95%.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Real-time Processing</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Instant validation and error checking before submission to ensure first-pass success and minimize claim rejections.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Detailed Analytics</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Comprehensive reporting and insights on TPA operations efficiency and financial performance with intuitive dashboards.
              </p>
            </div>
            
            <div className="bg-violet-600/30 backdrop-blur-md rounded-2xl p-8 border border-violet-400/30 hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-violet-400/20 to-transparent w-32 h-32 -mr-6 -mt-6 rounded-full"></div>
              <div className="flex items-start mb-4 relative z-10">
                <div className="w-10 h-10 bg-violet-500/40 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="h-6 w-6 text-violet-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">AI Customer Support</h3>
              </div>
              <p className="text-white/90 leading-relaxed relative z-10 font-medium">
                <strong className="text-violet-100">24/7 intelligent support</strong> with our advanced AI assistance that handles customer inquiries, explains benefits, and resolves claims issues automatically.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section 3: Resources */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/10 shadow-xl p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-violet-600/20 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-5 w-5 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Resources</h2>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Access comprehensive information about our TPA software solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#" className="group">
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Product Demo</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Watch our video demonstration of our AI TPA software in action.</p>
                <div className="text-violet-300 group-hover:text-violet-200 font-medium inline-flex items-center transition-all">
                  Watch Video
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="#" className="group">
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Technical Whitepaper</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Detailed overview of our AI technology and integration options.</p>
                <div className="text-violet-300 group-hover:text-violet-200 font-medium inline-flex items-center transition-all">
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
                  <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">ROI Calculator</h3>
                </div>
                <p className="text-white/80 mb-4 flex-grow">Calculate your potential return on investment with our AI TPA software.</p>
                <div className="text-violet-300 group-hover:text-violet-200 font-medium inline-flex items-center transition-all">
                  Access Calculator
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