import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import { MenuItem } from '../types';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Manager's Picks");
  const [showBuildInfo, setShowBuildInfo] = useState(false);
  const [showWingsFlavors, setShowWingsFlavors] = useState(false);

  // For Salads, extract all unique sizes/prices from items (for the active category only)
  let saladSizesLine = null;
  if (activeCategory === 'Salads') {
    const saladItems = menuData.filter((item: MenuItem) => item.category === 'Salads' && item.sizes && item.sizes.length > 0);
    const allSizes = saladItems.flatMap((item: MenuItem) => item.sizes || []);
    const uniqueSizes = Array.from(new Map(allSizes.map((size) => [size.name + size.price, size])).values());
    if (uniqueSizes.length > 1) {
      saladSizesLine = (
        <div className="text-sm font-semibold text-red-600 mb-4 text-center">
          Sizes: {uniqueSizes.map((size) => `${size.name} ($${size.price.toFixed(2)})`).join(' | ')}
        </div>
      );
    } else if (uniqueSizes.length === 1) {
      saladSizesLine = (
        <div className="text-sm font-semibold text-red-600 mb-4 text-center">
          Price: ${uniqueSizes[0].price.toFixed(2)}
        </div>
      );
    }
  }


  // Get all unique categories from menuData
  const categories = Array.from(new Set(menuData.map(item => item.category)));

  // Filter and dedupe menu items for the selected category
  let filteredMenuItems = menuData.filter((item: MenuItem) => {
    if (item.name === 'Build Your Own Pizza') {
      return item.category === 'Build Your Own Pizza' && activeCategory === 'Build Your Own Pizza';
    }
    return item.category === activeCategory && item.name !== 'Build Your Own Pizza';
  });
  // Deduplicate salads by name, keeping only the first with a price, and remove those without a price
  if (activeCategory === 'Salads') {
    const seen = new Set();
    filteredMenuItems = filteredMenuItems.filter(item => {
      if (item.category !== 'Salads') return true;
      // Check for price
      let hasPrice = false;
      if (item.sizes && item.sizes.length > 0) {
        hasPrice = item.sizes.some(size => typeof size.price === 'number');
      } else if (typeof item.price === 'number') {
        hasPrice = true;
      }
      if (!hasPrice) return false;
      if (seen.has(item.name)) return false;
      seen.add(item.name);
      return true;
    });
  }
  if (activeCategory === 'Build Your Own Pizza') {
    const seen = new Set();
    filteredMenuItems = filteredMenuItems.filter(item => {
      if (item.name === 'Build Your Own Pizza') {
        if (seen.has(item.name)) return false;
        seen.add(item.name);
      }
      return true;
    });
  }

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From Indian-inspired fusion pizzas to classic favorites, discover flavors that bring people together
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Show a single See All Flavors button above the wings grid if category is Wings */}
        {activeCategory === 'Wings' && (
          <div className="flex justify-center mb-6">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              onClick={() => setShowWingsFlavors(true)}
            >
              See All Flavors
            </button>
          </div>
        )}

        {/* Salad sizes/prices line at the top of the salads grid */}
        {activeCategory === 'Salads' && saladSizesLine}

        {/* Menu Items Grid for the selected category only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenuItems.map((item: MenuItem) => (
            <div key={item.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                {/* Only show price for non-salad or single-size salad items */}
                {item.category === 'Salads' && item.sizes && item.sizes.length > 1 ? null : (
                  <div className="text-2xl font-bold text-red-600">
                    {item.sizes && item.sizes.length === 1
                      ? `$${item.sizes[0].price.toFixed(2)}`
                      : (typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : '')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Wings Flavors Modal */}
        {showWingsFlavors && activeCategory === 'Wings' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowWingsFlavors(false)}>&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Wings Flavors</h2>
              <ul className="list-disc pl-6 text-gray-800">
                {Array.from(new Set(menuData.filter(i => i.category === 'Wings' && i.flavors).flatMap(i => i.flavors!))).map((flavor) => (
                  <li key={flavor} className="mb-1">{flavor}</li>
                ))}
              </ul>
              <div className="text-gray-500 text-sm mt-4">Choose any flavor for your wings order!</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MenuSection;
