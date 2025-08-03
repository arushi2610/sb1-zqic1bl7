import React, { useState } from 'react';
import { MenuItem } from '../types';

interface BuildYourOwnPizzaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (menuItem: MenuItem, size: { name: string; price: number }, crust: string, sauce: string, toppings: string[]) => void;
  item: MenuItem;
}

const SAUCES = ['Red', 'Garlic', 'Sweet Chili', 'BBQ', 'Pesto'];
const CRUSTS = ['Regular', 'Skinny'];
const TOPPINGS = [
  'Pepperoni', 'Sausage', 'Bacon', 'Chicken', 'Ham', 'Beef', // meats
  'Mushrooms', 'Onions', 'Peppers', 'Olives', 'Spinach', 'Tomatoes', 'Jalapenos', // veggies
  'Mozzarella', 'Cheddar', 'Parmesan', 'Feta', 'Goat Cheese' // cheese
];
const SIZES = [
  { name: 'Small (10")', price: 18.99 },
  { name: 'Medium (12")', price: 22.99 },
  { name: 'Large (14")', price: 28.99 },
  { name: 'XL (16")', price: 34.99 }
];

const BuildYourOwnPizzaModal: React.FC<BuildYourOwnPizzaModalProps> = ({ isOpen, onClose, onAddToCart, item }) => {
  const [selectedSauce, setSelectedSauce] = useState(SAUCES[0]);
  const [selectedCrust, setSelectedCrust] = useState(CRUSTS[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);

  if (!isOpen) return null;

  const handleToppingChange = (topping: string) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((t) => t !== topping)
        : [...prev, topping]
    );
  };

  const handleAdd = () => {
    onAddToCart(item, selectedSize, selectedCrust, selectedSauce, selectedToppings);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-4">Build Your Own Pizza</h2>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Size</label>
          <select className="w-full border rounded p-2" value={selectedSize.name} onChange={e => setSelectedSize(SIZES.find(s => s.name === e.target.value) || SIZES[0])}>
            {SIZES.map(size => (
              <option key={size.name} value={size.name}>{size.name} - ${size.price.toFixed(2)}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Crust</label>
          <select className="w-full border rounded p-2" value={selectedCrust} onChange={e => setSelectedCrust(e.target.value)}>
            {CRUSTS.map(crust => (
              <option key={crust} value={crust}>{crust}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Sauce</label>
          <select className="w-full border rounded p-2" value={selectedSauce} onChange={e => setSelectedSauce(e.target.value)}>
            {SAUCES.map(sauce => (
              <option key={sauce} value={sauce}>{sauce}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Toppings</label>
          <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
            {TOPPINGS.map(topping => (
              <label key={topping} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedToppings.includes(topping)}
                  onChange={() => handleToppingChange(topping)}
                  className="mr-2"
                />
                {topping}
              </label>
            ))}
          </div>
        </div>
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl mt-4 text-lg"
          onClick={handleAdd}
        >
          Add to Cart (${selectedSize.price.toFixed(2)})
        </button>
      </div>
    </div>
  );
};

export default BuildYourOwnPizzaModal;
