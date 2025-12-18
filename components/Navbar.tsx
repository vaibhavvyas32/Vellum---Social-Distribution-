
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
            <div className="w-4 h-[2px] bg-white rotate-[-45deg] translate-y-[-1px]" />
            <div className="w-4 h-[2px] bg-white rotate-[45deg] translate-y-[1px]" />
          </div>
          <span className="text-xl font-semibold tight-tracking">Paper</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Product', 'Features', 'Changelog', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors px-4 py-2">
            Log in
          </button>
          <button className="text-sm font-medium bg-[#0A0A0A] text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all group flex items-center gap-1.5">
            Sign up
            <svg 
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
