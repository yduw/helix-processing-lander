'use client';

import { useState, useEffect, useRef } from 'react';

interface PatientCounterProps {
  startValue: number;
}

export default function PatientCounter({ startValue }: PatientCounterProps) {
  const [count, setCount] = useState(startValue);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Generate a random increase between 1-5 every 2-3 seconds
    const startCounter = () => {
      intervalRef.current = setInterval(() => {
        const increase = Math.floor(Math.random() * 5) + 1;
        setCount(prevCount => prevCount + increase);
      }, 2000 + Math.random() * 1000);
    };
    
    startCounter();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  // Format the number with commas
  const formattedCount = count.toLocaleString();
  
  return <>{formattedCount}</>;
}