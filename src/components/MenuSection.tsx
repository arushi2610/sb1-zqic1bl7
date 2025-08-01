import React, { useState } from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { menuData, categories } from '../data/menuData';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import AddToCartModal from './AddToCartModal';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Team Starters');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const { dispatch } = useCart();

  const handleAddToCart = (menuItem: MenuItem, size?: { name: string; price: number }, crust?: string) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { menuItem, size, crust }
    });
    setSelectedItem(null);
  };

  const handleQuickAdd = (item: MenuItem) => {
    if (item.sizes && item.sizes.length > 0) {
      setSelectedItem(item);
    } else {
      handleAddToCart(item);
    }
  };

  const getDietaryBadge = (dietary: string) => {
    const badges = {
      'V': { label: 'Vegetarian', color: 'bg-green-100 text-green-800' },
      'VE': { label: 'Vegan', color: 'bg-green-100 text-green-800' },
      'GF': { label: 'Gluten Free', color: 'bg-blue-100 text-blue-800' },
      'Halal': { label: 'Halal', color: 'bg-purple-100 text-purple-800' }
    };
    
    return badges[dietary as keyof typeof badges] || { label: dietary, color: 'bg-gray-100 text-gray-800' };
  };

  const filteredItems = menuData.filter(item => item.category === activeCategory);

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

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  {item.dietary?.map((diet) => {
                    const badge = getDietaryBadge(diet);
                    return (
                      <span
                        key={diet}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${badge.color}`}
                      >
                        {badge.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-red-600">
                    ${item.sizes ? `${item.sizes[0].price}` : item.price.toFixed(2)}
                    {item.sizes && <span className="text-sm text-gray-500 ml-1">+</span>}
                  </div>
                  
                  <button
                    onClick={() => handleQuickAdd(item)}
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Coming Soon!</h3>
            <p className="text-gray-500">We're working on adding items to this category.</p>
          </div>
        )}
      </div>

      {/* Add To Cart Modal */}
      {selectedItem && (
        <AddToCartModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default MenuSection;