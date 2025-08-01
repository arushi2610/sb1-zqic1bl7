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

        {/* Delivery Platforms */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {deliveryPlatforms.map((platform) => (
            <div key={platform.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-semibold text-gray-900">{platform.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Delivery Time</div>
                    <div className="font-semibold text-gray-900">{platform.deliveryTime}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Truck className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Delivery Fee</div>
                    <div className="font-semibold text-gray-900">{platform.deliveryFee}</div>
                  </div>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full ${platform.color} text-white py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <span>Order on {platform.name}</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Order CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-2xl mx-auto">
          <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <img 
              src="/PHOTO-2025-06-13-09-00-06 (1).jpg" 
              alt="Manager's Pizza Logo" 
              className="h-8 w-auto"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Direct & Save</h3>
          <p className="text-gray-600 mb-6">
            Skip the delivery fees and order directly through our website for pickup. 
            Fresh, hot pizza ready when you are!
          </p>
          <button
            onClick={() => {
              const menuSection = document.getElementById('menu');
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Order for Pickup
          </button>
        </div>

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