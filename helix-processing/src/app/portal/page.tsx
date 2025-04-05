'use client';

import { useState } from "react";
import Link from "next/link";

export default function PatientPortalPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    // In a real implementation, you would handle login authentication here
  };
  
  return (
    <div className="min-h-screen pattern-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Patient Payment Portal</h1>
          <p className="text-xl text-gray-600">
            Access your account, view invoices, and make payments securely.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          {/* Login Form */}
          <div className="blur-card rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In to Pay Your Bill</h2>
            
            {formStatus === 'success' ? (
              <div className="rounded-lg bg-green-50 p-6 border border-green-200 text-center">
                <h3 className="text-lg font-medium text-green-800 mb-2">Login Successful!</h3>
                <p className="text-green-700">Redirecting you to your billing dashboard...</p>
                <button 
                  onClick={() => setFormStatus('')}
                  className="mt-4 px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors"
                >
                  Back to Login
                </button>
              </div>
            ) : (
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
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-3 px-4 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
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
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="py-3 px-4 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
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
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 nova-gradient text-white font-medium rounded-md button-hover pulse-on-hover"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            )}
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">New patient?</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/locations" className="font-medium text-blue-600 hover:text-blue-500">
                  Contact us to create an account
                </Link>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                <p className="mb-2">For billing questions or assistance:</p>
                <p className="font-medium">Call: (877) 700-9661</p>
                <p className="font-medium">Email: billing@novamedical.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}