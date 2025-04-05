'use client';

import { useState } from 'react';
import USAMap from 'react-usa-map';

// List of 35 randomly selected states (placeholder data)
const coveredStates = [
  'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 
  'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'TX'
];

export default function USMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  
  // Get custom map configuration
  const mapConfig = () => {
    const config: {[key: string]: {fill: string}} = {};
    
    // Set colors for each state
    coveredStates.forEach(state => {
      config[state] = {
        fill: "#3b82f6" // Blue for covered states
      };
    });
    
    return config;
  };
  
  // Static data for tooltip display (placeholder)
  const getStateInfo = (stateCode: string) => {
    return {
      name: getStateName(stateCode),
      providers: Math.floor(Math.random() * 50) + 20,
      since: 2015 + Math.floor(Math.random() * 9)
    };
  };
  
  // Convert state code to full name
  const getStateName = (code: string) => {
    const stateNames: {[key: string]: string} = {
      'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
      'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
      'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
      'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
      'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
      'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
      'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
      'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
      'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
      'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
      'DC': 'District of Columbia'
    };
    return stateNames[code] || code;
  };
  
  // Handle state mouse events
  const handleMouseOver = (event: any) => {
    const stateCode = event.target.dataset.name;
    if (coveredStates.includes(stateCode)) {
      setHoveredState(stateCode);
    }
  };
  
  const handleMouseOut = () => {
    setHoveredState(null);
  };

  // Custom styles for the map
  const mapStyles = {
    width: '100%',
    height: 'auto'
  };
  
  // Add custom hover class to the USA Map state paths
  const customStateStyles = `
    .us-state {
      fill: #d1d5db;
      opacity: 0.7;
      stroke: white;
      stroke-width: 1px;
      transition: all 0.3s ease;
    }
    .us-state:hover {
      opacity: 1;
      transform: scale(1.05) translateY(-5px);
      transform-origin: center;
      filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.2));
      z-index: 10;
      position: relative;
    }
  `;

  return (
    <div className="relative">
      <style jsx>{customStateStyles}</style>
      
      {/* Map Component */}
      <div 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <USAMap 
          customize={mapConfig()} 
          width="100%"
          height="100%"
          title="Nova Medical Insurance Coverage Map"
          defaultFill="#d1d5db"
        />
      </div>
      
      {/* Tooltip */}
      {hoveredState && (
        <div 
          className="absolute pointer-events-none bg-white rounded-md shadow-lg p-3 text-sm border border-gray-200 transition-opacity duration-300"
          style={{
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <div className="font-bold text-gray-900">{getStateInfo(hoveredState).name}</div>
          <div className="text-gray-600">
            <div>Network Providers: {getStateInfo(hoveredState).providers}</div>
            <div>Coverage Since: {getStateInfo(hoveredState).since}</div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45"></div>
        </div>
      )}
      
      {/* Legend */}
      <div className="absolute bottom-0 right-0 bg-white bg-opacity-90 rounded-tl-md p-2 text-xs border border-gray-200">
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 bg-blue-500 mr-1 rounded-sm opacity-70"></div>
          <span>Coverage Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-300 mr-1 rounded-sm"></div>
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
}