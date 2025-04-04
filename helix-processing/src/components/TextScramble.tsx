'use client';

import React, { useEffect, useState, useRef } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}—=+*^?#________';

interface TextScrambleProps {
  text: string;
  className?: string;
}

export default function TextScramble({ text, className = '' }: TextScrambleProps) {
  const [output, setOutput] = useState(text);
  const frameRef = useRef<number | null>(null);
  const previousText = useRef(text);
  
  const randomChar = () => CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));

  useEffect(() => {
    // Check if text has changed
    const textChanged = previousText.current !== text;
    // Update previousText ref
    previousText.current = text;
    
    // If text hasn't changed, no need to re-scramble
    if (!textChanged) {
      return;
    }
    
    // Initialize with current text for a brief moment
    setOutput(text);
    
    // Do a single scramble animation
    const startScramble = () => {
        // Create an array of objects for each character
        const chars = text.split('').map((char) => ({
          char,                                      // target character
          currentChar: randomChar(),                 // current displayed character
          randomize: true,                           // whether to randomize this character
          startDelay: Math.floor(Math.random() * 10), // random start delay (shorter)
          endDelay: Math.floor(Math.random() * 20) + 20 // random end delay (shorter)
        }));
        
        let frameCount = 0;
        
        // Animation function
        const animate = () => {
          frameCount++;
          
          // Calculate output text by processing each character
          const outputText = chars.map((charInfo) => {
            // If we've passed the start delay for this character
            if (frameCount > charInfo.startDelay) {
              // If we've passed the end delay for this character
              if (frameCount > charInfo.startDelay + charInfo.endDelay) {
                charInfo.randomize = false;
                return charInfo.char; // Show final character
              }
              
              // Still in randomization phase
              if (charInfo.randomize) {
                charInfo.currentChar = randomChar();
                return charInfo.currentChar;
              }
            }
            
            // Before start delay
            return charInfo.currentChar;
          }).join('');
          
          // Update display
          setOutput(outputText);
          
          // Check if animation is complete
          const allDone = chars.every((charInfo) => 
            frameCount > charInfo.startDelay + charInfo.endDelay
          );
          
          if (allDone) {
            return;
          }
          
          // Continue animation
          frameRef.current = requestAnimationFrame(animate);
        };
        
        // Start animation
        frameRef.current = requestAnimationFrame(animate);
    };
    
    // Start the scramble animation
    startScramble();
    
    // Cleanup function
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text]); // Only re-run if text changes
  
  // Initialize with empty string on first render
  useEffect(() => {
    if (output === '') {
      setOutput(text);
    }
  }, [output, text]);
  
  return (
    <span className={className}>
      {output}
    </span>
  );
}