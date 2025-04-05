'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import USMap from './USMap';

// Dynamically import the USMap component to handle the client-side only dependency
const USMapComponent = dynamic(
  () => import('./USMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-80 w-full">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-48 h-36 bg-blue-100 rounded"></div>
          <div className="mt-4 text-gray-500">Loading US Map...</div>
        </div>
      </div>
    )
  }
);

export default function USMapWrapper() {
  return <USMapComponent />;
}