export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary?: string[];
  sizes?: { name: string; price: number }[];
  crusts?: string[];
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedSize?: { name: string; price: number };
  selectedCrust?: string;
  totalPrice: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface OrderForm {
  name: string;
  phone: string;
  pickupTime: string;
  paymentMethod: 'pickup' | 'online';
}