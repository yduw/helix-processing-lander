'use client';

import { useState } from 'react';

export default function TPASoftwarePage() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
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
            <div className="mt-10 max-w-3xl text-center">
              <p className="text-xl text-white/90 font-medium leading-relaxed text-shadow-sm">
                Automating third-party administration with advanced artificial intelligence and 24/7 AI customer support
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
      
        {/* Modern tabbed interface */}
        <div className="flex flex-wrap justify-center my-10 border-b border-violet-500/30">
          <button 
            onClick={() => handleTabChange('overview')}
            className={`px-6 py-3 text-lg font-bold transition-colors duration-200 relative ${
              activeTab === 'overview' 
                ? 'text-white' 
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            Overview
            {activeTab === 'overview' && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-violet-600"></span>
            )}
          </button>
          
          <button 
            onClick={() => handleTabChange('features')}
            className={`px-6 py-3 text-lg font-bold transition-colors duration-200 relative ${
              activeTab === 'features' 
                ? 'text-white' 
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            Features
            {activeTab === 'features' && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-violet-600"></span>
            )}
          </button>
          
          <button 
            onClick={() => handleTabChange('workflows')}
            className={`px-6 py-3 text-lg font-bold transition-colors duration-200 relative ${
              activeTab === 'workflows' 
                ? 'text-white' 
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            Workflows
            {activeTab === 'workflows' && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-violet-600"></span>
            )}
          </button>
        </div>
        
        {/* Overview Tab */}
        <div className={`transition-opacity duration-300 ${
          activeTab === 'overview' ? 'opacity-100' : 'opacity-0 hidden'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                <span className="text-violet-300">AI-Powered</span> Third-Party Administration
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Our cutting-edge AI technology transforms third-party administration processes, 
                reducing operational complexities and accelerating outcomes for healthcare providers.
              </p>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-violet-500/20 p-5 shadow-lg">
                <h3 className="font-bold text-white text-xl mb-3">Key Advantages</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated claim submission and tracking with 99.7% accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time claim status monitoring and issue detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Seamless integration with existing electronic health record systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-violet-200">24/7 AI-powered customer support</strong> for immediate assistance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl overflow-hidden border border-violet-500/20 shadow-xl h-[450px] relative group">
              <img 
                src="/images/tpa-service/tpa-dashboard.svg" 
                alt="TPA Dashboard Preview" 
                className="w-full h-full object-cover scale-[1.3] hover:scale-[1.35] transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-violet-900/90 to-transparent transform transition-all duration-500 translate-y-0 group-hover:translate-y-0">
                <p className="text-white text-lg font-semibold">TPA Dashboard Preview</p>
                <p className="text-white/90 text-sm">Comprehensive analytics and real-time processing dashboard</p>
              </div>
            </div>
          </div>
          
          {/* ROI section */}
          <div className="bg-gradient-to-r from-violet-900/30 to-violet-800/30 rounded-2xl p-8 border border-violet-500/20 shadow-lg mb-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Return on Investment</h3>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Helix TPA software delivers significant improvements in efficiency and cost savings
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-violet-500/10 text-center">
                <div className="text-3xl font-bold text-violet-300 mb-2">95%</div>
                <div className="text-white font-bold mb-1">Reduction</div>
                <div className="text-white/70 text-sm">in manual data entry</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-violet-500/10 text-center">
                <div className="text-3xl font-bold text-violet-300 mb-2">82%</div>
                <div className="text-white font-bold mb-1">Faster</div>
                <div className="text-white/70 text-sm">claim processing time</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-violet-500/10 text-center">
                <div className="text-3xl font-bold text-violet-300 mb-2">$2.1M</div>
                <div className="text-white font-bold mb-1">Average Savings</div>
                <div className="text-white/70 text-sm">per year for medium-sized providers</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Tab */}
        <div className={`transition-opacity duration-300 ${
          activeTab === 'features' ? 'opacity-100' : 'opacity-0 hidden'
        }`}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Cutting-Edge <span className="text-violet-300">Features</span>
          </h2>
          
          {/* Smart Form Recognition */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <div className="inline-flex items-center mb-4">
                  <div className="w-10 h-10 bg-violet-600/30 rounded-xl flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Smart Form Recognition</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Our advanced AI-powered form recognition system automatically processes insurance documents with unprecedented accuracy, reducing manual data entry by 95%.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Supports all major insurance forms and custom templates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Extracts data with 99.2% accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Continually improves through machine learning</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-xl overflow-hidden border border-violet-500/20 shadow-xl relative h-[380px] group">
                <img 
                  src="/images/tpa-service/form-recognition.png" 
                  alt="Form Recognition Visualization" 
                  className="w-full h-full object-cover scale-[1.3] hover:scale-[1.35] transition-transform duration-700" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-violet-900/90 to-transparent transform transition-all duration-500 translate-y-0 group-hover:translate-y-0">
                  <p className="text-white text-lg font-semibold">Form Recognition Technology</p>
                  <p className="text-white/90 text-sm">AI-powered document scanning and data extraction</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Real-time Processing & Analytics */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
              <div className="order-2 lg:order-1 bg-white/5 rounded-xl overflow-hidden border border-violet-500/20 shadow-xl relative h-[380px] group">
                <img 
                  src="/images/tpa-service/real-time-analytics.png" 
                  alt="Real-time Analytics Dashboard" 
                  className="w-full h-full object-cover scale-[1.3] hover:scale-[1.35] transition-transform duration-700" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-violet-900/90 to-transparent transform transition-all duration-500 translate-y-0 group-hover:translate-y-0">
                  <p className="text-white text-lg font-semibold">Real-time Analytics Dashboard</p>
                  <p className="text-white/90 text-sm">Live metrics and performance indicators</p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center mb-4">
                  <div className="w-10 h-10 bg-violet-600/30 rounded-xl flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Real-time Processing & Analytics</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Monitor your TPA operations with comprehensive real-time analytics and instant claim processing. Our dashboards provide actionable insights for optimization.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant validation with pre-submission error detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom reporting dashboards with flexible visualizations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Predictive analytics for forecasting claim outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* AI Customer Support */}
          <div className="mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center mb-4">
                  <div className="w-10 h-10 bg-violet-600/30 rounded-xl flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Customer Support</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Our 24/7 AI-powered support system provides immediate assistance for both patients and providers, with seamless escalation to human agents when needed.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Natural language understanding for complex inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contextual awareness of patient history and claims</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-channel support across web, mobile, and voice</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-xl overflow-hidden border border-violet-500/20 shadow-xl relative h-[380px] group">
                <img 
                  src="/images/tpa-service/ai-customer-support.png" 
                  alt="AI Customer Support Interface" 
                  className="w-full h-full object-cover scale-[1.3] hover:scale-[1.35] transition-transform duration-700" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-violet-900/90 to-transparent transform transition-all duration-500 translate-y-0 group-hover:translate-y-0">
                  <p className="text-white text-lg font-semibold">AI Support Interface</p>
                  <p className="text-white/90 text-sm">Intelligent conversation system with contextual awareness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Workflows Tab */}
        <div className={`transition-opacity duration-300 ${
          activeTab === 'workflows' ? 'opacity-100' : 'opacity-0 hidden'
        }`}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Optimized <span className="text-violet-300">Healthcare Workflows</span>
          </h2>
          
          <p className="text-white/80 text-lg text-center max-w-3xl mx-auto mb-12">
            Helix TPA software transforms three critical healthcare workflows, delivering unprecedented efficiency and accuracy in healthcare administration.
          </p>
          
          {/* Order Intake & Prescription Validation */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              <div className="lg:col-span-2 bg-gradient-to-br from-violet-900/40 to-violet-600/20 rounded-xl p-6 border border-violet-500/20 shadow-lg order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-violet-600/30 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Order Intake & Prescription Validation</h3>
                </div>
                <p className="text-white/90 mb-5 leading-relaxed">
                  Our AI-powered intake system processes and validates medical orders and prescriptions with advanced fraud detection and regulatory compliance checks.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated prescription validation against medical databases</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time verification of insurance eligibility</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comprehensive fraud detection with machine learning</span>
                  </li>
                </ul>
              </div>
              
              <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-violet-500/20 shadow-xl h-80 relative order-1 lg:order-2">
                {/* Placeholder for order intake workflow visualization */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900/30 to-violet-600/20">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto text-violet-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <p className="text-white/80 text-lg">Order Intake Workflow</p>
                    <p className="text-white/60 mt-2 text-sm">Visualization of the automated prescription validation process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Billing Workflow */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-violet-500/20 shadow-xl h-80 relative">
                {/* Placeholder for billing workflow visualization */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900/30 to-violet-600/20">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto text-violet-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                    </svg>
                    <p className="text-white/80 text-lg">Billing Workflow Visualization</p>
                    <p className="text-white/60 mt-2 text-sm">End-to-end claim generation and processing</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 bg-gradient-to-br from-violet-900/40 to-violet-600/20 rounded-xl p-6 border border-violet-500/20 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-violet-600/30 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Billing Workflow</h3>
                </div>
                <p className="text-white/90 mb-5 leading-relaxed">
                  Our comprehensive billing management system handles everything from claim preparation to payment reconciliation with intelligent coding assistance.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated CPT and ICD-10 coding with 98% accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Payer-specific rule enforcement to minimize rejections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated payment reconciliation and revenue cycle management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Customer Support Workflow */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              <div className="lg:col-span-2 bg-gradient-to-br from-violet-900/40 to-violet-600/20 rounded-xl p-6 border border-violet-500/20 shadow-lg order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-violet-600/30 rounded-lg flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Customer Support Workflow</h3>
                </div>
                <p className="text-white/90 mb-5 leading-relaxed">
                  Our 24/7 AI-powered support system provides immediate assistance with automated response systems and seamless human agent escalation.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Intelligent conversational interface with natural language understanding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized support based on customer history</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-violet-300 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Smart escalation to human agents for complex cases</span>
                  </li>
                </ul>
              </div>
              
              <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-violet-500/20 shadow-xl h-80 relative order-1 lg:order-2">
                {/* Placeholder for customer support workflow visualization */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900/30 to-violet-600/20">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto text-violet-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="text-white/80 text-lg">Support Workflow Visualization</p>
                    <p className="text-white/60 mt-2 text-sm">AI-powered customer interaction and resolution system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}