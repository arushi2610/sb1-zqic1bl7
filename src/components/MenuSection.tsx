import React, { useState } from 'react';
import { menuData, categories as mainTabs } from '../data/menuData';
import { MenuItem } from '../types';
import { trackMenuInteraction } from '../utils/analytics';

const MenuSection: React.FC = () => {
  const pizzaCategories = ["Manager's Picks", "Signature Pizzas", "Classic Pizzas", "Build Your Own Pizza"];
  const [activeCategory, setActiveCategory] = useState<string>(mainTabs[0] || 'Pizzas');
  // Sub-tab for pizzas
  const [activePizzaCategory, setActivePizzaCategory] = useState<string>(pizzaCategories[0]);
  // Sub-tab for beverages
  const beverageCategories = ['Cans', '20oz', '2 Liters'];
  const [activeBeverageCategory, setActiveBeverageCategory] = useState<string>(beverageCategories[0]);
  const [showBuildInfo, setShowBuildInfo] = useState(false);
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
    }
  }
  let tabSections: { section: string, items: MenuItem[] }[] = [];
  if (activeCategory === 'Pizzas') {
    tabSections = [
      {
        section: activePizzaCategory,
        items: menuData.filter((item) => item.category === activePizzaCategory),
      },
    ];
  } else if (activeCategory === 'Beverages') {
    tabSections = [
      {
        section: activeBeverageCategory,
        items: menuData.filter(item => item.category === activeBeverageCategory)
      }
    ];
  } else {
    const categoryMap: Record<string, string> = {
      'Starters and Sides': 'Starters & Sides',
      "Mac n' Cheese": 'Mac n’ Cheese',
      'Subs and Sandwiches': 'Subs & Sandwiches',
    };
    const mappedCategory = categoryMap[activeCategory] || activeCategory;
    tabSections = [
      {
        section: activeCategory,
        items: menuData.filter(item => item.category === mappedCategory)
      }
    ];
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
            {mainTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveCategory(tab);
                  trackMenuInteraction('category_select', tab);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === tab
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Pizza sub-tabs */}
          {activeCategory === 'Pizzas' && (
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6">
              {pizzaCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActivePizzaCategory(cat);
                    trackMenuInteraction('pizza_subcategory_select', cat);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activePizzaCategory === cat
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
          {/* Beverage sub-tabs */}
          {activeCategory === 'Beverages' && (
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6">
              {beverageCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveBeverageCategory(cat);
                    trackMenuInteraction('beverage_subcategory_select', cat);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeBeverageCategory === cat
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                  }`}
                >
                  {cat === 'Cans' && 'Cans ($2.50)'}
                  {cat === '20oz' && '20oz Bottles ($4.50)'}
                  {cat === '2 Liters' && '2 Liters ($5.50)'}
                </button>
              ))}
            </div>
          )}
          {activeCategory === 'Salads' && (
            <div className="text-base font-semibold text-red-700 text-center mt-6 mb-2">
              INDIVIDUAL: $8.99, FAMILY: $15.99
            </div>
          )}
        </div>
  {saladSizesLine}
        {/* Render sections for the active tab */}
        {tabSections.map(({ section, items }) => (
          <div key={section} className="mb-12">
            {activeCategory === 'Pizzas' && (
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-left md:text-center">{section}</h3>
            )}
            {activeCategory === 'Beverages' && (
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-left md:text-center">
                {section === 'Cans' && 'Cans ($2.50)'}
                {section === '20oz' && '20oz Bottles ($4.50)'}
                {section === '2 Liters' && '2 Liters ($5.50)'}
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: MenuItem) => (
                activeCategory === 'Beverages' ? (
                  <div key={item.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    {item.image && (
                      <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: '#ffffff' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-40 object-contain object-center"
                          loading="lazy"
                          decoding="async"
                          width={200}
                          height={120}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      </div>
                      {/* Description and price intentionally omitted for beverages */}
                    </div>
                  </div>
                ) : (
                  <div key={item.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover object-center"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={240}
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
                            className="ml-2 px-4 py-2 text-sm font-bold border-2 rounded-full shadow-lg transition-all duration-200 relative z-30 focus:outline-none focus:ring-2"
                            style={{
                              position: 'relative',
                              borderColor: '#f59e42', // orange-400
                              color: '#f59e42', // orange-400
                              background: '#fff',
                            }}
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
                )
              ))}
            </div>
          </div>
        ))}
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
