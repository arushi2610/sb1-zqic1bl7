import React from 'react';
import { ExternalLink, Clock, Star, Truck } from 'lucide-react';

const OrderOnlineSection: React.FC = () => {
  const deliveryPlatforms = [
    {
      name: 'DoorDash',
      logo: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400',
      url: '#',
      deliveryTime: '25-40 min',
      deliveryFee: '$2.99',
      rating: '4.8',
      description: 'Fast delivery with real-time tracking',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'Uber Eats',
      logo: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400',
      url: '#',
      deliveryTime: '20-35 min',
      deliveryFee: '$1.99',
      rating: '4.7',
      description: 'Quick and reliable food delivery',
      color: 'bg-black hover:bg-gray-800'
    }
  ];

  return (
    <section id="order-online" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Order Online</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get Manager's Pizza delivered straight to your door through our trusted delivery partners
          </p>
        </div>

        {/* Single Order Online Button */}
        <div className="flex justify-center mb-16">
          <a
            href="https://managerspizza.hungerrush.com/Order/OrderType"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Order Online
          </a>
        </div>

        {/* Direct Order CTA removed as requested */}

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-gray-600">Average delivery time of 25-35 minutes to your door</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Top Rated</h4>
            <p className="text-gray-600">Consistently rated 4.7+ stars across all platforms</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Truck className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h4>
            <p className="text-gray-600">Track your order from kitchen to your doorstep</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderOnlineSection;