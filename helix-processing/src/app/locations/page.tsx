'use client';

// Imports will be added when needed
import { useEffect } from "react";

export default function LocationsPage() {
  useEffect(() => {
    // Ensure video plays
    const video = document.querySelector('video');
    if (video) {
      video.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);
  
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Semi-transparent overlay for better text readability */}
        <div className="w-full h-full bg-indigo-900/60 absolute inset-0 z-10" />
        
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
      
      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden py-20 z-20">
        {/* Content container */}
      
        <div className="max-w-2xl mx-auto text-center mb-12 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 fade-in-1">Contact Us</h1>
          <p className="text-xl text-gray-200 fade-in-2">
            Have questions about our services? Reach out to us directly.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-indigo-900/40 backdrop-blur-md rounded-xl shadow-lg p-8 border border-white/20 relative z-10 fade-in-3">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-white">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="py-3 px-4 block w-full rounded-md bg-white/20 border-indigo-300/30 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-white/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-white">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="py-3 px-4 block w-full rounded-md bg-white/20 border-indigo-300/30 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-white/50"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="py-3 px-4 block w-full rounded-md bg-white/20 border-indigo-300/30 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-white/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white">
                Subject
              </label>
              <div className="mt-1">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="py-3 px-4 block w-full rounded-md bg-white/20 border-indigo-300/30 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-white/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full rounded-md bg-white/20 border-indigo-300/30 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-white/50"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}