import React from 'react';
import { trackCouponView } from '../utils/analytics';

const CouponSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-4">
      <div className="bg-gradient-to-r from-red-50 to-white border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-shrink-0 bg-red-600 text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12L12 3L21 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12V21H3V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">Limited-time promotions</h3>
          <p className="text-sm text-gray-600 mt-1">Save today with our lunch special, move-in special and pizza bundle offer.</p>
          {/* Promo image moved below the coupon cards (kept hidden on small screens) */}

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div 
              className="bg-white border rounded-lg p-3 shadow-sm min-w-0 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => trackCouponView('LUNCH_SPECIAL')}
            >
              <div className="text-sm font-semibold text-gray-700">Lunch Special</div>
              <div className="text-2xl md:text-3xl font-bold text-red-600">$14.99<span className="text-sm font-normal">+tax</span></div>
              <div className="text-xs text-gray-500 mt-1">Any small pizza with drink from 11am-2:30pm <strong>Monday to Friday</strong></div>
            </div>

            <div
              className="bg-white border rounded-lg p-3 shadow-sm min-w-0 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => trackCouponView('GROUP_OFFER')}
            >
              <div className="text-sm font-semibold text-gray-700">Group Catering Packages</div>
              <div className="mt-2 text-sm text-gray-900 font-bold">For 30 people <span className="text-red-600">($185 + tax)</span></div>
              <ul className="list-disc pl-5 text-xs text-gray-700 mt-2">
                <li>8 Large Pizzas</li>
              </ul>

              <div className="mt-3 text-sm text-gray-900 font-bold">For 40 people <span className="text-red-600">($250 + tax)</span></div>
              <ul className="list-disc pl-5 text-xs text-gray-700 mt-2">
                <li>8 Large Pizzas</li>
                <li>Pan of Chicken Wings</li>
                <li>3 Sodas</li>
              </ul>
            </div>

            <div 
              className="bg-white border rounded-lg p-3 shadow-sm min-w-0 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => trackCouponView('B2G1LARGE')}
            >
              <div className="text-sm font-semibold text-gray-700">Buy 2 large specialty pizzas</div>
              <div className="text-2xl md:text-xl font-bold text-red-600">Get ANY Large Pizza FREE</div>
              <div className="text-xs text-gray-500 mt-1">Applied to the cheapest eligible large pizza in the cart.</div>
            </div>
          </div>
        </div>

      
      </div>
      {/* Promo image placed below the coupons */}
      <div className="mt-6 flex justify-center">
        <img
          src="/halloweenoffer.jpg"
          alt="Spooky Good Deals"
          className="hidden md:block md:w-80 lg:w-96 h-auto rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default CouponSection;
