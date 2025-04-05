"use client";

import TextScramble from "@/components/TextScramble";

export default function Footer() {
  return (
    <footer className="blur-background relative overflow-hidden border-t border-gray-200">
      {/* Footer content */}

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm font-semibold">
            &copy; {new Date().getFullYear()} Nova Medical. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 text-sm text-gray-700 font-semibold">
            <div className="text-right">
              <div className="text-blue-600">contact@novamedical.com</div>
              <div className="mt-1">Los Altos, California, USA</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}