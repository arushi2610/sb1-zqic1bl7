import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { trackContactInteraction } from '../utils/analytics';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'order-online', label: 'Order Online' }
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[9999] shadow-lg bg-[#EEEEEE]"
        style={{ height: '64px' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => onSectionChange('home')}
              style={{ minWidth: 64 }}
            >
              <img
              src="/PHOTO-2025-06-13-09-00-06.jpg"
              alt="Manager's Pizza Logo"
              className="h-16 w-32 object-contain"
              width={64}
              height={64}
              loading="eager"
              decoding="async"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.onerror = null;
                t.src = '/images/placeholder.png';
              }}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.id === 'order-online' ? (
                  <a
                    key={item.id}
                    href="https://managerspizza.hungerrush.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            {/* Quick Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:+12064135548"
                  onClick={() => trackContactInteraction('phone')}
                  className="hover:text-red-600 transition-colors"
                >
                  (206) 413-5548
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Open 10am - 11pm EVERY DAY</span>
              </div>
            </div>

            {/* Mobile Menu only (cart icon removed) */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.id === 'order-online' ? (
                  <a
                    key={item.id}
                    href="https://managerspizza.hungerrush.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-left text-sm font-medium transition-colors duration-200 pl-[10px] ${
                        activeSection === item.id
                          ? 'text-red-600'
                          : 'text-gray-700 hover:text-red-600'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSectionChange(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left text-sm font-medium transition-colors duration-200 pl-[10px] ${
                        activeSection === item.id
                          ? 'text-red-600'
                          : 'text-gray-700 hover:text-red-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </nav>
              
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a 
                    href="tel:+12064135548"
                    onClick={() => trackContactInteraction('phone')}
                    className="hover:text-red-600 transition-colors"
                  >
                    (206) 413-5548
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>4741 12th Ave, NE Seattle, 98105</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Open 10am - 11pm EVERY DAY</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Add padding to main content so it is not hidden behind the fixed header */}
      <div style={{ paddingTop: '64px' }} />

    </>
  );
};

export default Header;