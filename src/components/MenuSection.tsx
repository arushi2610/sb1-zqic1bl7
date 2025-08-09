import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import { MenuItem } from '../types';

const MenuSection: React.FC = () => {
  const pizzaCategories = ["Manager's Picks", "Signature Pizzas", "Classic Pizzas", "Build Your Own Pizza"];
  const [activeCategory, setActiveCategory] = useState("Manager's Picks");
  const [activePizzaCategory, setActivePizzaCategory] = useState(pizzaCategories[0]);
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


  // Define new main categories (tabs)
  const mainTabs = [
    'Pizzas',
    'Wings',
    'Starters & Sides',
    'Mac n’ Cheese',
    'Salads',
    'Subs & Sandwiches',
    'Desserts',
  ];

  // For each tab, filter items accordingly
  let tabSections: { section: string, items: MenuItem[] }[] = [];
  if (activeCategory === 'Pizzas') {
    tabSections = [
      {
        section: activePizzaCategory,
        items: menuData.filter(item => item.category === activePizzaCategory)
      }
    ];
  } else {
    // Map tab names to menuData category names for special cases
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
                  if (tab === 'Pizzas') setActivePizzaCategory(pizzaCategories[0]);
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
                  onClick={() => setActivePizzaCategory(cat)}
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
          {activeCategory === 'Salads' && (
            <div className="text-base font-semibold text-red-700 text-center mt-6 mb-2">
              INDIVIDUAL: $8.99, FAMILY: $15.99
            </div>
          )}
        </div>
        {/* Render sections for the active tab */}
        {tabSections.map(({ section, items }) => (
          <div key={section} className="mb-12">
            {activeCategory === 'Pizzas' && (
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-left md:text-center">{section}</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: MenuItem) => (
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
