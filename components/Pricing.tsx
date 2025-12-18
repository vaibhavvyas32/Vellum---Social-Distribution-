
import React, { useState } from 'react';
import { PricingTier } from '../types';
import { PRICING_FEATURES } from '../constants';

const Pricing: React.FC = () => {
  const [activeTier, setActiveTier] = useState<PricingTier>(PricingTier.PRO);

  const tierPrices = {
    [PricingTier.PERSONAL]: 0,
    [PricingTier.PRO]: 29,
    [PricingTier.ENTERPRISE]: 99
  };

  return (
    <section id="pricing" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium tight-tracking mb-4">Simple, transparent pricing.</h2>
        <p className="text-gray-500">Pick a plan that scales with your growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-[#F9F9F9] border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        {/* Left: Features */}
        <div className="md:col-span-8 p-10 md:p-16 bg-white">
          <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-10">What's included</h3>
          <div className="space-y-8">
            {PRICING_FEATURES.map((feature) => (
              <div key={feature.id} className="flex items-start justify-between group">
                <div className="max-w-md">
                  <h4 className="text-lg font-semibold mb-1 group-hover:text-black transition-colors">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-1">
                  {feature.available[activeTier] ? (
                    <div className="w-6 h-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Tier Switcher */}
        <div className="md:col-span-4 p-10 md:p-16 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-10">Select Plan</h3>
            <div className="p-1.5 bg-gray-100 rounded-xl flex flex-col gap-1">
              {Object.values(PricingTier).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setActiveTier(tier)}
                  className={`px-6 py-4 rounded-lg text-sm font-semibold transition-all duration-200 text-left flex items-center justify-between ${
                    activeTier === tier 
                      ? 'bg-white text-black shadow-sm' 
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {tier}
                  {activeTier === tier && <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-medium tracking-tighter">
                ${tierPrices[activeTier]}
              </span>
              <span className="text-gray-400 font-medium">/month</span>
            </div>
            <button className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all text-lg shadow-xl shadow-gray-200">
              Get Started with {activeTier}
            </button>
            <p className="mt-4 text-center text-[11px] text-gray-400 uppercase tracking-widest font-bold">
              30-day money back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
