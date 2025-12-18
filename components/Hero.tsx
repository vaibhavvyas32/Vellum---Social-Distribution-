
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-20 overflow-hidden">
      {/* Background Animated SVG Element (Pseudo-Lottie) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <path fill="currentColor" d="M40.1,-67.2C51.2,-60.1,58.9,-47.5,66.4,-34.7C73.9,-21.9,81.1,-8.8,79.8,4.1C78.4,17,68.4,29.7,58.6,40.7C48.8,51.7,39.3,61,27.8,66.2C16.3,71.4,2.9,72.4,-10.1,70.1C-23,67.7,-35.6,62,-46.1,53.4C-56.6,44.9,-65.1,33.5,-70.5,20.8C-75.9,8.1,-78.2,-5.9,-75.4,-19.1C-72.6,-32.3,-64.7,-44.6,-53.6,-51.7C-42.5,-58.8,-28.1,-60.7,-14.2,-64.4C-0.3,-68.2,12.9,-73.8,26.5,-74.3C40.1,-74.8,54,-70.2,40.1,-67.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="inline-block animate-[fade-in-up_0.8s_ease-out_forwards]">
          <span className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-gray-500 bg-gray-100 rounded-full mb-8 inline-block">
            Beta 2.0 Now Live
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tight-tracking leading-[1.05] mb-8 max-w-4xl mx-auto">
            Social distribution, <br /><span className="text-gray-400">flattened.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            One interface. Every platform. Paper is the minimalist workspace for modern creators to schedule, analyze, and scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0A0A0A] text-white rounded-xl font-medium hover:bg-gray-800 transition-all text-lg shadow-sm">
              Get Started for Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-all text-lg">
              Book a demo
            </button>
          </div>
        </div>

        {/* Product Reveal */}
        <div className="mt-32 relative mx-auto max-w-6xl animate-[fade-in-up_1s_ease-out_0.2s_forwards] opacity-0">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl shadow-gray-200/50">
             {/* Browser Header */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              </div>
              <div className="ml-4 h-6 w-full bg-gray-50 rounded-md border border-gray-100" />
            </div>
            {/* Dashboard Content Mockup */}
            <div className="grid grid-cols-12 gap-4 h-[400px] md:h-[600px] bg-white">
              <div className="col-span-3 border-r border-gray-100 pr-4 space-y-4 pt-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`h-8 w-full rounded-lg ${i === 1 ? 'bg-gray-100' : 'bg-transparent'} border border-transparent`} />
                ))}
              </div>
              <div className="col-span-9 p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="h-10 w-48 bg-gray-100 rounded-xl" />
                  <div className="h-10 w-24 bg-gray-100 rounded-xl" />
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="h-32 bg-gray-50 border border-gray-100 rounded-xl" />
                  <div className="h-32 bg-gray-50 border border-gray-100 rounded-xl" />
                  <div className="h-32 bg-gray-50 border border-gray-100 rounded-xl" />
                </div>
                <div className="h-full bg-gray-50 border border-gray-100 rounded-xl" />
              </div>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute -right-8 top-1/4 w-64 bg-white border border-gray-200 rounded-xl p-4 shadow-xl hidden lg:block transform translate-x-4 hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">X</div>
              <div className="flex-1">
                <div className="h-2 w-16 bg-gray-200 rounded-full mb-1" />
                <div className="h-2 w-10 bg-gray-100 rounded-full" />
              </div>
              <div className="h-5 w-12 bg-green-50 rounded-full border border-green-100 flex items-center justify-center">
                <span className="text-[9px] text-green-600 font-bold">LIVE</span>
              </div>
            </div>
            <div className="h-12 w-full bg-gray-50 rounded-lg" />
          </div>

          <div className="absolute -left-12 bottom-1/4 w-48 bg-white border border-gray-200 rounded-xl p-4 shadow-xl hidden lg:block transform -translate-x-4 hover:translate-y-2 transition-transform duration-500">
            <div className="flex items-center justify-between mb-4">
               <span className="text-[10px] font-bold text-gray-400">ENGAGEMENT</span>
               <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <div className="flex items-end gap-1.5 h-12">
              {[60, 40, 80, 50, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 bg-gray-100 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
