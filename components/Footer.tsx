
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-32 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-32">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <div className="w-4 h-[2px] bg-black rotate-[-45deg] translate-y-[-1px]" />
                <div className="w-4 h-[2px] bg-black rotate-[45deg] translate-y-[1px]" />
              </div>
              <span className="text-xl font-semibold tight-tracking">Paper</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Paper is the minimalist workspace for modern creators to schedule, analyze, and scale their social distribution.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-12">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © 2024 Paper Technologies Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-full border border-gray-800">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Status: All Systems Nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
