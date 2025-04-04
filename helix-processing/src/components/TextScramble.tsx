'use client';

import React, { useEffect, useState, useRef } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}—=+*^?#________';

interface TextScrambleProps {
  text: string;
  className?: string;
}

export default function TextScramble({ text, className = '' }: TextScrambleProps) {
  const [output, setOutput] = useState(text);
  const frameRequest = useRef<number | null>(null);
  const frame = useRef(0);
  const queue = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  
  const randomChar = () => {
    return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  };

  // Counter to slow down the frame rate
  const frameSkipCounter = useRef(0);
  const FRAME_SKIP = 2; // Skip frames to slow down by ~2.5x
  
  const update = () => {
    let complete = 0;
    let outputText = '';
    
    // Only update characters every few frames
    frameSkipCounter.current = (frameSkipCounter.current + 1) % FRAME_SKIP;
    const shouldUpdateChars = frameSkipCounter.current === 0;
    
    for (let i = 0, n = text.length; i < n; i++) {
      const current = text[i];
      
      // If the current character is already correct, keep it and mark as complete
      if (i >= queue.current.length || queue.current[i].end <= frame.current) {
        complete++;
        outputText += current;
        continue;
      }
      
      // For characters still animating, show either the intermediate or random character
      const { to, start, end, char } = queue.current[i];
      const progress = Math.max(0, Math.min(1, (frame.current - start) / (end - start)));
      
      if (progress < 1) {
        // Show a random character in place of the target character
        outputText += char || randomChar();
        // Update the random character less frequently
        if (shouldUpdateChars) {
          queue.current[i].char = randomChar();
        }
      } else {
        // Animation complete for this character, show final character
        outputText += to;
        complete++;
      }
    }
    
    setOutput(outputText);
    
    if (complete < text.length) {
      frame.current++;
      frameRequest.current = requestAnimationFrame(update);
    }
  };

  useEffect(() => {
    // Define scramble function inside useEffect to avoid dependency issues
    const scramble = () => {
      frame.current = 0;
      
      // Reset the queue
      queue.current = [];
      
      // Create a queue item for each character - 2.5x slower
      for (let i = 0, n = text.length; i < n; i++) {
        const from = output[i] || '';
        const to = text[i];
        const start = Math.floor(Math.random() * 30); // 2.5x slower (was 30)
        const end = start + Math.floor(Math.random() * 75) + 20; // 2.5x slower (was 60+20)
        queue.current.push({ from, to, start, end });
      }
      
      // Cancel any existing animation
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
      
      // Start the animation
      frameRequest.current = requestAnimationFrame(update);
    };

    // Start the animation on mount or when text changes
    scramble();
    
    // Set up periodic re-scrambling
    const interval = setInterval(() => {
      scramble();
    }, 17500); // 2.5x slower (was 7000)
    
    return () => {
      clearInterval(interval);
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
    };
  }, [text, output]);

  return (
    <span className={className}>
      {output}
    </span>
  );
}