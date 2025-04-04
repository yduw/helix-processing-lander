"use client";

import TextScramble from "@/components/TextScramble";

export default function Footer() {
  return (
    <footer className="animated-gradient-bg footer-gradient relative overflow-hidden">
      {/* Footer content */}

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-t border-white/30 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white text-sm font-semibold">
            &copy; {new Date().getFullYear()} Helix Processing. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 text-sm text-white font-semibold">
            <div className="text-right">
              <div><TextScramble text="contact@helixprocessing.com" /></div>
              <div className="mt-1"><TextScramble text="Los Altos, California, USA" /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}