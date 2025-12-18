
import React, { useEffect, useState } from 'react';

const FeatureFocus: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('feature-focus');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleRange = windowHeight + rect.height;
        const currentPos = windowHeight - rect.top;
        const progress = Math.min(Math.max(currentPos / visibleRange, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const icons = Array.from({ length: 12 });

  return (
    <section id="feature-focus" className="py-20">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-medium tight-tracking mb-8">Post anywhere. <br />From nowhere.</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Your content deserves to be everywhere. Paper makes that distance zero.</p>
      </div>

      <div className="relative h-[400px] flex items-center justify-center">
        {/* Central Core Button */}
        <div className="relative z-10 w-32 h-32 bg-black rounded-full flex items-center justify-center text-white font-bold shadow-2xl hover:scale-110 transition-transform cursor-pointer">
          Schedule
        </div>

        {/* Orbiting Icons */}
        {icons.map((_, i) => {
          const angle = (i * (360 / icons.length) + (scrollProgress * 360)) % 360;
          const radian = (angle * Math.PI) / 180;
          const radius = 160 + (scrollProgress * 40);
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <div 
              key={i}
              className="absolute w-12 h-12 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center transform transition-opacity duration-300"
              style={{ 
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
                opacity: 0.2 + (scrollProgress * 0.8),
                scale: 0.8 + (scrollProgress * 0.2)
              }}
            >
              <div className="w-6 h-6 bg-gray-100 rounded-md" />
            </div>
          );
        })}

        {/* Connector Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
           {icons.map((_, i) => {
              const angle = (i * (360 / icons.length) + (scrollProgress * 360)) % 360;
              const radian = (angle * Math.PI) / 180;
              const radius = 160 + (scrollProgress * 40);
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;
              return (
                <line 
                  key={i} 
                  x1="50%" 
                  y1="50%" 
                  x2={`calc(50% + ${x}px)`} 
                  y2={`calc(50% + ${y}px)`} 
                  stroke="black" 
                  strokeWidth="1.5" 
                />
              );
           })}
        </svg>
      </div>
    </section>
  );
};

export default FeatureFocus;
