"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 right-0 z-50" ref={navbarRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 right-2 md:top-4 md:right-6 z-50 flex flex-col items-end gap-1 md:gap-1.5 w-10 md:w-12 h-10 md:h-12 p-2 md:p-3 rounded-md cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-full bg-white rounded-full transition-transform duration-300 ${isOpen ? "translate-y-[4px] md:translate-y-[5px] rotate-45" : ""}`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-white rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-white rounded-full transition-transform duration-300 ${isOpen ? "translate-y-[-4px] md:translate-y-[-5px] -rotate-45" : ""}`}
        ></span>
      </button>

      <div
        className={`fixed top-0 right-0 h-screen w-[200px] sm:w-[250px] md:w-64 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } pt-16 md:pt-20 px-4 md:px-6 bg-(--color-primary)`}
      >
        <div className="flex flex-col space-y-5 md:space-y-6">
          <Link
            href="/"
            className="text-white text-lg md:text-xl hover:text-(--color-tertiary) transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-white text-lg md:text-xl hover:text-(--color-tertiary) transition"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#portfolio"
            className="text-white text-lg md:text-xl hover:text-(--color-tertiary) transition"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="text-white text-lg md:text-xl hover:text-(--color-tertiary) transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
