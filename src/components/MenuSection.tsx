import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import { MenuItem } from '../types';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Manager's Picks");
  const [showBuildInfo, setShowBuildInfo] = useState(false);
  const buildInfoText = `Crust: Skinny, Regular.\nSauce: Red Sauce, Creamy Garlic Sauce, Sweet & Chili Sauce, BBQ Sauce, Pesto sauce.\nCheese: 100% Whole Milk Mozzarella Cheese.\nMeats: Ham, Pepperoni, Salami, Italian Sausage, Ground Beef, Bacon, Chicken (Grilled, BBQ, Marinated).\nVeggies: Spinach, Mushroom, Red Onion, Bell Pepper, Tomato, Garlic, Jalapeño, Olive, Pineapple, Artichoke Hearts, Green Onion, Cilantro, Basil, Sun-Dried Tomato, Fresh tomato, Green Chili, Marinated Paneer.`;
  const [showWingsFlavors, setShowWingsFlavors] = useState<{ open: boolean; itemName: string | null }>({ open: false, itemName: null });

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
    if (activeCategory === 'Build Your Own Pizza') {
      // Only show Build Your Own Pizza in its own section
      return item.name === 'Build Your Own Pizza';
    }
    // For all other categories, exclude Build Your Own Pizza
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
          {activeCategory === 'Salads' && (
            <div className="text-base font-semibold text-red-700 text-center mt-6 mb-2">
              INDIVIDUAL: $8.99, FAMILY: $15.99
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenuItems.map((item: MenuItem) => (
            <div key={item.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  {item.name === 'Build Your Own Pizza' && (
                    <button
                      className="ml-2 px-4 py-2 text-sm font-bold border-2 border-red-600 text-red-600 bg-transparent rounded-full shadow-sm hover:bg-red-50 hover:text-red-700 hover:border-red-700 hover:scale-105 transition-all duration-200 relative z-30 focus:outline-none focus:ring-2 focus:ring-red-300"
                      style={{ position: 'relative' }}
                      onClick={() => setShowBuildInfo(true)}
                      aria-label="Show Build Your Own Pizza Info"
                    >
                      Info
                    </button>
                  )}
                  {item.category === 'Wings' && item.flavors && item.flavors.length > 0 && (
                    <button
                      className="ml-2 px-4 py-2 text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-lg border border-yellow-500 hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transition-all duration-200 relative z-30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      style={{ position: 'relative' }}
                      onClick={() => setShowWingsFlavors({ open: true, itemName: item.name })}
                      aria-label={`Show flavors for ${item.name}`}
                    >
                      Flavors
                    </button>
                  )}
                </div>
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
        {/* Build Your Own Pizza Info Modal */}
        {showBuildInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowBuildInfo(false)}>&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Build Your Own Pizza Info</h2>
              <div className="text-gray-800 text-sm whitespace-pre-wrap">
                <strong>Crust:</strong> Skinny, Regular<br/>
                <strong>Sauce:</strong> Red Sauce, Creamy Garlic Sauce, Sweet & Chili Sauce, BBQ Sauce, Pesto sauce<br/>
                <strong>Cheese:</strong> 100% Whole Milk Mozzarella Cheese<br/>
                <strong>Meats:</strong> Ham, Pepperoni, Salami, Italian Sausage, Ground Beef, Bacon, Chicken (Grilled, BBQ, Marinated)<br/>
                <strong>Veggies:</strong> Spinach, Mushroom, Red Onion, Bell Pepper, Tomato, Garlic, Jalapeño, Olive, Pineapple, Artichoke Hearts, Green Onion, Cilantro, Basil, Sun-Dried Tomato, Fresh tomato, Green Chili, Marinated Paneer
              </div>
            </div>
          </div>
        )}
        </div>

        {/* Wings Flavors Modal (per item) */}
        {showWingsFlavors.open && showWingsFlavors.itemName && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowWingsFlavors({ open: false, itemName: null })}>&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{showWingsFlavors.itemName} Flavors</h2>
              <ul className="list-disc pl-6 text-gray-800">
                {menuData.find(i => i.name === showWingsFlavors.itemName)?.flavors?.map((flavor) => (
                  <li key={flavor} className="mb-1">{flavor}</li>
                ))}
              </ul>
              <div className="text-gray-500 text-sm mt-4">Choose any flavor for your wings order!</div>
            </div>
          </div>
        )}
    </section>
  );
}
export default MenuSection;
