"use client";

import TechBox from "./TechBox";
import { useRef, useState, useEffect } from "react";

const TechBar = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll approximately 3 items (each ~140px wide + 64px margin)
      scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll approximately 3 items
      scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  // Check scroll position and update button states
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Check if at the beginning
      setIsLeftDisabled(container.scrollLeft <= 0);
      
      // Check if at the end (with small buffer for rounding errors)
      setIsRightDisabled(
        Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 2
      );
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    
    // Initial check
    checkScrollPosition();
    
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      
      // Clean up
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto mt-5 px-16">
      {/* Left Arrow */}
      <button 
        onClick={scrollLeft}
        disabled={isLeftDisabled}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${
          isLeftDisabled 
            ? 'bg-white/5 text-gray-400 cursor-not-allowed' 
            : 'bg-white/10 text-white hover:bg-white/20 cursor-pointer'
        }`}
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="current">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Container with fade effect */}
      <div className="relative overflow-hidden">
        {/* Left fade gradient - shorter fade */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(270deg, rgba(25,32,47,0) 0%, rgba(25,32,47,0.5) 40%, rgba(25,32,47,1) 80%)'
          }}
        ></div>
        
        {/* Right fade gradient - shorter fade */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(25,32,47,0) 0%, rgba(25,32,47,0.5) 40%, rgba(25,32,47,1) 80%)'
          }}
        ></div>
        
        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center overflow-x-auto hide-scrollbar py-4"
        >
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/html5.svg" label="HTML" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/css.svg" label="CSS" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/typescript.svg" label="TypeScript" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/javascript.svg" label="JavaScript" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/react.svg" label="React" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/nextdotjs.svg" label="Next.js" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/nodedotjs.svg" label="Node.js" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/tailwindcss.svg" label="Tailwind CSS" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/prisma.svg" label="Prisma" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/postgresql.svg" label="PostgreSQL" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/mongodb.svg" label="MongoDB" /></div>
          <div className="flex-shrink-0 mr-16"><TechBox icon="/icons/mysql.svg" label="MySQL" /></div>
          <div className="flex-shrink-0"><TechBox icon="/icons/vitest.svg" label="Vitest" /></div>
        </div>
      </div>

      {/* Right Arrow - fixed position */}
      <button 
        onClick={scrollRight}
        disabled={isRightDisabled}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${
          isRightDisabled 
            ? 'bg-white/5 text-gray-400 cursor-not-allowed' 
            : 'bg-white/10 text-white hover:bg-white/20 cursor-pointer'
        }`}
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="current">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default TechBar;
