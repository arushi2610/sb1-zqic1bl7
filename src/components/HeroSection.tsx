import React, { useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

const HERO_IMG_OPTIMIZED = '/mpbgimg.jpeg';
const HERO_IMG_FALLBACK = '/mpbgimg.jpeg';

const HeroSection: React.FC = () => {
  const handleOrderNow = () => {
    // Track order button click in Google Analytics
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'click', {
        event_category: 'Order',
        event_label: 'Hero Section Order Now',
        value: 1
      });
    }
    window.location.href = 'https://managerspizza.hungerrush.com/Order/OrderType';
  };

  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load the large hero image during idle time to avoid blocking first paint.
    const loadHero = () => {
      const img = new Image();
      img.src = HERO_IMG_OPTIMIZED;
      img.onload = () => {
        if (bgRef.current) {
          bgRef.current.style.backgroundImage = `url('${HERO_IMG_OPTIMIZED}')`;
        }
      };
      img.onerror = () => {
        const img2 = new Image();
        img2.src = HERO_IMG_FALLBACK;
        img2.onload = () => {
          if (bgRef.current) bgRef.current.style.backgroundImage = `url('${HERO_IMG_FALLBACK}')`;
        };
      };
    };

    // Immediate load of optimized hero to improve LCP — optimized WebP is much smaller.
    loadHero();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder (gradient) — replaced with real image after it's loaded */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(20,20,20,0.85), rgba(10,10,10,0.7))',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <img
            src="/MP-main-pizza-logo.png"
            alt="Manager's Pizza - Authentic Indian & Classic Pizzas Restaurant Logo"
            className="h-52 md:h-72 w-auto"
            width={288}
            height={288}
            decoding="async"
            fetchPriority="high"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Manager's Pizza — University District
        </h1>        
        <h2 className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
          Passion and Flavor for all in Seattle's University District
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleOrderNow}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Order Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-600 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <a 
              href="https://maps.app.goo.gl/EAPuDhmpYLoHBa7a8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors underline cursor-pointer"
            >
              4741 12th Ave, NE Seattle, 98105
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-600 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <a 
              href="tel:+12064135548"
              className="text-gray-200 hover:text-white transition-colors underline"
            >
              (206) 413-5548
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      */}
    </section>
  );
};

export default HeroSection;