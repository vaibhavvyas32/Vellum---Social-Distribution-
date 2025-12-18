
import React from 'react';
import { LOGOS } from '../constants';

const IntegrationRibbon: React.FC = () => {
  // Triple the logos to ensure seamless scrolling
  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="py-24 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="flex items-center gap-24 animate-[marquee_40s_linear_infinite] w-max whitespace-nowrap px-12">
        {marqueeLogos.map((logo, idx) => (
          <div 
            key={`${logo.name}-${idx}`} 
            className="flex items-center gap-3 transition-all duration-300 grayscale hover:grayscale-0 cursor-default opacity-40 hover:opacity-100"
          >
            <img 
              src={logo.url} 
              alt={logo.name} 
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-medium text-gray-900">{logo.name}</span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default IntegrationRibbon;
