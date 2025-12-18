import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntegrationRibbon from './components/IntegrationRibbon';
import BentoGrid from './components/BentoGrid';
import FeatureFocus from './components/FeatureFocus';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen dot-grid selection:bg-gray-900 selection:text-white">
      {/* Visual Overlays */}
      <div className="grain-overlay" />
      
      {/* Performance Progress Loader */}
      {loading && <Preloader />}

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        <main>
          <Hero />
          <IntegrationRibbon />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 space-y-32 py-32">
            <BentoGrid />
            <FeatureFocus />
            <Testimonials />
            <Pricing />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;