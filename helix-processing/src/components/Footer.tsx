"use client";

export default function Footer() {
  return (
    <footer className="blur-background relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="text-xs text-gray-700 order-2 sm:order-1">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-blue-600 font-semibold">contact@novamedical.com</span> | 
                <span className="ml-1 font-semibold">(877) 700-9661</span>
              </div>
              <div>4000 Medical Plaza, Los Altos, CA 94022</div>
            </div>
          </div>
          <p className="text-gray-700 text-xs order-1 sm:order-2 sm:ml-auto">
            &copy; {new Date().getFullYear()} Nova Medical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}