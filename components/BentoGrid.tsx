
import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section id="features">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-medium tight-tracking mb-6">Built for speed. <br />Focused on utility.</h2>
          <p className="text-lg text-gray-500">Every feature is designed to reduce the friction between your idea and its distribution.</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Documentation</button>
           <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition-colors">Start Building</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
        {/* Large Cell: Unified Inbox */}
        <div className="md:col-span-8 md:row-span-2 group bg-[#F9F9F9] border border-gray-200 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-black/10 hover:shadow-xl hover:shadow-gray-100">
           <div className="relative z-10 max-w-sm">
             <h3 className="text-2xl font-semibold mb-4">Unified Inbox</h3>
             <p className="text-gray-500 leading-relaxed">View and respond to comments from 12+ platforms in a single, high-fidelity interface. No more tab switching.</p>
           </div>
           
           {/* Abstract Animated Element */}
           <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div 
                    key={i} 
                    className="w-96 h-20 bg-white rounded-2xl border border-gray-100 shadow-sm translate-x-12 animate-[float_4s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * 0.5}s`, transform: `translateX(${i * 20}px)` }}
                  />
                ))}
              </div>
           </div>
        </div>

        {/* Medium Cell: Smart Scheduling */}
        <div className="md:col-span-4 group bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-black/10 hover:shadow-xl hover:shadow-gray-100">
          <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
          <p className="text-sm text-gray-500">AI-optimized posting times based on your audience's unique activity patterns.</p>
          
          <div className="mt-8 flex items-center justify-center">
            <div className="relative w-32 h-32 border-4 border-gray-100 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-12 bg-gray-900 rounded-full origin-bottom animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 border border-dashed border-gray-200 rounded-full" />
              <div className="absolute top-0 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-200" />
            </div>
          </div>
        </div>

        {/* Small Cell: Media Library */}
        <div className="md:col-span-4 group bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-black/10 hover:shadow-xl hover:shadow-gray-100">
          <h3 className="text-xl font-semibold mb-3">Global Media Library</h3>
          <p className="text-sm text-gray-500">A centralized stack for all your creative assets. Drag, drop, distribute.</p>
          
          <div className="mt-6 space-y-2">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className="h-10 w-full bg-[#F9F9F9] border border-gray-100 rounded-lg flex items-center px-4 gap-3 transform group-hover:translate-x-2 transition-transform"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-4 h-4 rounded bg-gray-200" />
                <div className="h-2 w-24 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Wide Cell: Omni-Post Canvas */}
        <div className="md:col-span-12 group bg-[#0A0A0A] border border-gray-800 rounded-2xl p-10 relative overflow-hidden transition-all duration-500">
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-3xl font-semibold text-white mb-6">The Omni-Post Canvas</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">
                 One central text box that ripples out into various platform-specific preview windows. See how your message lands everywhere, simultaneously.
               </p>
               <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
                 Try the Canvas
               </button>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="aspect-square bg-gray-900/50 border border-gray-800 rounded-xl p-4 flex flex-col justify-between group-hover:border-gray-700 transition-colors">
                   <div className="w-8 h-8 rounded-full bg-gray-800" />
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-800 rounded-full" />
                      <div className="h-2 w-2/3 bg-gray-800 rounded-full" />
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="absolute inset-0 opacity-10 pointer-events-none dot-grid" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)' }} />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(12px, 0); }
          50% { transform: translate(12px, -20px); }
        }
      `}</style>
    </section>
  );
};

export default BentoGrid;
