import React from 'react';
import { Pizza, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-red-600 p-2 rounded-full">
                <Pizza className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Manager's</h3>
                <p className="text-sm text-red-400 -mt-1">PIZZA</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Fresh dough, bold flavors, and student-friendly fusion pizzas in Seattle's University District.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">4512 University Way NE, Seattle, WA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">(206) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">hello@managerspizza.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hours</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-red-400" />
                <span>Mon-Thu: 11am-10pm</span>
              </div>
              <div className="ml-6">Fri-Sat: 11am-11pm</div>
              <div className="ml-6">Sunday: 12pm-10pm</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Manager's Pizza. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>in Seattle</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;