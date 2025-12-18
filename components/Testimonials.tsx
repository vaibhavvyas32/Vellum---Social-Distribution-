
import React, { useRef, useState } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section 
      className="relative -mx-6 md:-mx-12 lg:-mx-20 py-20 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsDragging(false);
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Global Feedback</span>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-20 px-6 md:px-12 lg:px-20 cursor-none no-scrollbar overflow-x-auto whitespace-nowrap active:cursor-grabbing select-none"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="min-w-[400px] md:min-w-[600px] whitespace-normal group">
            <p className="text-3xl md:text-5xl font-medium tight-tracking leading-tight text-gray-900 group-hover:text-black transition-colors mb-12">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-gray-400">Verified User</p>
              </div>
            </div>
          </div>
        ))}
        {/* Extra spacer for horizontal padding */}
        <div className="min-w-[100px]" />
      </div>

      {/* Custom Cursor */}
      {isHovering && (
        <div 
          className="fixed pointer-events-none z-[9999] px-6 py-2 bg-black text-white text-xs font-bold rounded-full tracking-wider uppercase transform -translate-x-1/2 -translate-y-1/2 shadow-xl"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          {isDragging ? 'Dragging' : 'Drag to explore'}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
