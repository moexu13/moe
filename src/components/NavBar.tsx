"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-1 right-2 z-50 flex flex-col items-end gap-1.5 w-12 h-12 p-3 rounded-md"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-full bg-white rounded-full transition-transform duration-300 ${isOpen ? 'translate-y-[5px] rotate-45' : ''}`}></span>
        <span className={`block h-0.5 w-full bg-white rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block h-0.5 w-full bg-white rounded-full transition-transform duration-300 ${isOpen ? 'translate-y-[-5px] -rotate-45' : ''}`}></span>
      </button>
      
      <div className={`fixed top-0 right-0 h-screen backdrop-blur-md w-64 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-20 px-6 shadow-lg`}>
        <div className="flex flex-col space-y-6">
          <Link href="/" className="text-white text-xl hover:text-white/70 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-white text-xl hover:text-white/70 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/blog" className="text-white text-xl hover:text-white/70 transition" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/portfolio" className="text-white text-xl hover:text-white/70 transition" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/contact" className="text-white text-xl hover:text-white/70 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav> 
  );
};

export default NavBar;