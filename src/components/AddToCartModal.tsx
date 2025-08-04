// This component is no longer used and can be deleted.
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { MenuItem } from '../types';

interface AddToCartModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, size?: { name: string; price: number }, crust?: string) => void;
}


const AddToCartModal: React.FC<AddToCartModalProps> = ({ item, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(item.sizes?.[0] || null);
  const [selectedCrust, setSelectedCrust] = useState(item.crusts?.[0] || '');
  const [selectedFlavor, setSelectedFlavor] = useState(item.flavors?.[0] || '');

  if (!isOpen) return null;

  const handleAddToCart = () => {
    // Pass selectedFlavor as crust if it's a wings item, otherwise as normal
    if (item.flavors && item.flavors.length > 0) {
      // For wings, pass flavor as 'crust' argument (or extend CartItem if needed)
      onAddToCart(item, selectedSize || undefined, selectedFlavor || undefined);
    } else {
      onAddToCart(item, selectedSize || undefined, selectedCrust || undefined);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" style={{ zIndex: 50 }}>
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-6">{item.description}</p>

          {/* Size Selection */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Choose Size</h4>
              <div className="space-y-2">
                {item.sizes.map((size) => (
                  <label
                    key={size.name}
                    className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-red-300 transition-colors"
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="size"
                        value={size.name}
                        checked={selectedSize?.name === size.name}
                        onChange={() => setSelectedSize(size)}
                        className="mr-3 text-red-600"
                      />
                      <span className="font-medium">{size.name}</span>
                    </div>
                    <span className="font-bold text-red-600">${size.price.toFixed(2)}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Crust or Flavor Selection */}
          {item.flavors && item.flavors.length > 0 ? (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Choose Flavor</h4>
              <div className="grid grid-cols-1 gap-2">
                {item.flavors.map((flavor) => (
                  <label
                    key={flavor}
                    className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-red-300 transition-colors"
                  >
                    <input
                      type="radio"
                      name="flavor"
                      value={flavor}
                      checked={selectedFlavor === flavor}
                      onChange={() => setSelectedFlavor(flavor)}
                      className="mr-3 text-red-600"
                    />
                    <span className="font-medium">{flavor}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            item.crusts && item.crusts.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Choose Crust</h4>
                <div className="grid grid-cols-1 gap-2">
                  {item.crusts.map((crust) => (
                    <label
                      key={crust}
                      className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-red-300 transition-colors"
                    >
                      <input
                        type="radio"
                        name="crust"
                        value={crust}
                        checked={selectedCrust === crust}
                        onChange={() => setSelectedCrust(crust)}
                        className="mr-3 text-red-600"
                      />
                      <span className="font-medium">{crust}</span>
                    </label>
                  ))}
                </div>
              </div>
            )
          )}

          {/* Dietary Information */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {item.dietary.map((diet) => (
                  <span
                    key={diet}
                    className="text-xs px-3 py-1 rounded-full font-medium bg-green-100 text-green-800"
                  >
                    {diet === 'V' ? 'Vegetarian' : diet === 'VE' ? 'Vegan' : diet === 'GF' ? 'Gluten Free' : diet}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Price and Add Button */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="text-2xl font-bold text-red-600">
              ${selectedSize ? selectedSize.price.toFixed(2) : item.price.toFixed(2)}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;