import React, { useState } from 'react';
import Header from './Header';
import { Minus, Plus, ShoppingCart, X, Clock, User, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderForm } from '../types';

interface CartSectionProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const CartSection: React.FC<CartSectionProps> = ({ onSectionChange, activeSection }) => {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '',
    phone: '',
    pickupTime: '',
    paymentMethod: 'pickup'
  });

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  const generateTimeSlots = () => {
    const slots = [];
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Start from next 15-minute interval
    let startHour = currentHour;
    let startMinute = Math.ceil(currentMinute / 15) * 15;
    
    if (startMinute >= 60) {
      startHour += 1;
      startMinute = 0;
    }
    
    // Add 20 minutes prep time minimum
    startMinute += 20;
    if (startMinute >= 60) {
      startHour += 1;
      startMinute -= 60;
    }

    for (let i = 0; i < 12; i++) {
      const hour = (startHour + Math.floor((startMinute + i * 15) / 60)) % 24;
      const minute = (startMinute + i * 15) % 60;
      
      if (hour >= 11 && hour < 23) { // Restaurant hours
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = new Date(`2023-01-01T${timeString}`).toLocaleTimeString([], { 
          hour: 'numeric', 
          minute: '2-digit' 
        });
        slots.push({ value: timeString, display: displayTime });
      }
    }
    
    return slots;
  };


  if (orderPlaced) {
    return (
      <>
        <Header activeSection={activeSection} onSectionChange={onSectionChange} />
        <section className="py-20 bg-gray-50 min-h-screen flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Thank you {orderForm.name}! Your order has been received and will be ready for pickup at {orderForm.pickupTime}.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                We'll call you at {orderForm.phone} when your order is ready.
              </p>
              <button
                onClick={() => {
                  setOrderPlaced(false);
                  setShowCheckout(false);
                  setOrderForm({ name: '', phone: '', pickupTime: '', paymentMethod: 'pickup' });
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Place Another Order
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={onSectionChange} />
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Cart</h2>
            <p className="text-xl text-gray-600">Review your order and proceed to checkout</p>
          </div>

          {state.items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h3>
              <p className="text-gray-500 mb-8">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Cart Items */}
                <div className="p-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.menuItem.name}</h3>
                        {item.selectedSize && (
                          <p className="text-sm text-gray-600">Size: {item.selectedSize.name}</p>
                        )}
                        {item.selectedCrust && (
                          <p className="text-sm text-gray-600">Crust: {item.selectedCrust}</p>
                        )}
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        
                        <span className="font-semibold min-w-[2rem] text-center">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-red-600">${item.totalPrice.toFixed(2)}</div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Summary */}
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-red-600">${state.total.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-full text-lg font-semibold transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Checkout Modal */}
          {showCheckout && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Checkout</h3>
                    <button
                      onClick={() => setShowCheckout(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <form onSubmit={handleCheckout} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={orderForm.name}
                        onChange={(e) => setOrderForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="(206) 413-5548"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Pickup Time
                      </label>
                      <select
                        required
                        value={orderForm.pickupTime}
                        onChange={(e) => setOrderForm(prev => ({ ...prev, pickupTime: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select pickup time</option>
                        {generateTimeSlots().map(slot => (
                          <option key={slot.value} value={slot.display}>
                            {slot.display}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Payment Method</h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="payment"
                            value="pickup"
                            checked={orderForm.paymentMethod === 'pickup'}
                            onChange={(e) => setOrderForm(prev => ({ ...prev, paymentMethod: e.target.value as 'pickup' }))}
                            className="mr-2 text-red-600"
                          />
                          <span>Pay on Pickup (Cash/Card)</span>
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Online payment coming soon! For now, pay when you pick up your order.
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="text-xl font-bold text-red-600">${state.total.toFixed(2)}</span>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-full text-lg font-semibold transition-colors"
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartSection;