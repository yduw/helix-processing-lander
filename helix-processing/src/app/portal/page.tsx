"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PortalPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log("Login attempt with:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Semi-transparent overlay for better text readability */}
        <div className="w-full h-full bg-indigo-900/60 absolute inset-0 z-10" />
        
        {/* Video element */}
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/ocean-serene.mp4"
        >
          <source src="/videos/ocean-serene.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 relative z-20">
        {/* Login Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/20 card-hover-effect">
          <div className="pt-8 px-8 pb-6 bg-indigo-600">
            <h2 className="text-2xl font-bold text-white">Patient Login</h2>
            <p className="mt-2 text-indigo-100">
              Access your secure patient dashboard
            </p>
          </div>
          
          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-all duration-200">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* New Patient Section */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 border border-white/20 secondary-card-hover">
          <h3 className="text-lg font-medium text-gray-900 mb-3">New Patient?</h3>
          <p className="text-gray-700 mb-4">
            If you don't have an account yet, please contact your healthcare provider to get set up with patient portal access.
          </p>
          <a 
            href="#" 
            className="text-indigo-600 font-bold hover:text-indigo-800 inline-flex items-center transition-all duration-200"
          >
            Contact Support
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}