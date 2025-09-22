import React from 'react';

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
          <p className="text-sm text-gray-600 mt-1">Save today with our move-in special and pizza bundle offer. Offer expires Oct 16.</p>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border rounded-lg p-3 shadow-sm min-w-0">
              <div className="text-sm font-semibold text-gray-700">Students move-in special</div>
              <div className="text-2xl md:text-3xl font-bold text-red-600">20% OFF</div>
              <div className="text-xs text-gray-500 mt-1">Show your Student ID to get the discount!</div>
            </div>

            <div className="bg-white border rounded-lg p-3 shadow-sm min-w-0">
              <div className="text-sm font-semibold text-gray-700">Buy 2 large specialty pizzas</div>
                <div className="text-lg md:text-xl font-bold text-red-600">Get ANY Large Pizza FREE</div>
              <div className="text-xs text-gray-500 mt-1">Applied to the cheapest eligible large pizza in the cart.</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-24 text-left md:text-center text-sm text-gray-500 mt-3 md:mt-0">
          <div className="mb-1 md:mb-2">Ends</div>
          <div className="text-lg md:text-xl font-bold">Oct 15</div>
          <div className="text-xs">2025</div>
        </div>
      </div>
    </div>
  );
};

export default CouponSection;
