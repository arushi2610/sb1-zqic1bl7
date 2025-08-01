import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // Team Starters
  {
    id: 'garlic-bread',
    name: 'Garlic Bread',
    description: 'Fresh baked bread with garlic butter and herbs',
    price: 7.99,
    image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Team Starters'
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    description: 'Crispy breaded mozzarella served with marinara sauce',
    price: 9.99,
    image: 'https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Team Starters',
    dietary: ['V']
  },
  {
    id: 'wings',
    name: 'Buffalo Wings',
    description: 'Spicy buffalo wings with celery and ranch dressing',
    price: 12.99,
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Team Starters'
  },

  // Fries
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese, bacon, and green onions',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fries'
  },
  {
    id: 'masala-fries',
    name: 'Masala Fries',
    description: 'Indian-spiced fries with chat masala and mint chutney',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fries',
    dietary: ['V', 'Halal']
  },

  // Mac n' Cheese
  {
    id: 'classic-mac',
    name: 'Classic Mac & Cheese',
    description: 'Creamy three-cheese mac and cheese with breadcrumb topping',
    price: 10.99,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mac n\' Cheese',
    dietary: ['V']
  },
  {
    id: 'curry-mac',
    name: 'Curry Mac & Cheese',
    description: 'Mac and cheese with Indian curry spices and paneer',
    price: 12.99,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mac n\' Cheese',
    dietary: ['V', 'Halal']
  },

  // Salads
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    description: 'Crisp romaine, parmesan, croutons, and caesar dressing',
    price: 9.99,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salads',
    dietary: ['V']
  },
  {
    id: 'tandoori-chicken-salad',
    name: 'Tandoori Chicken Salad',
    description: 'Mixed greens with tandoori chicken, naan croutons, and mint yogurt dressing',
    price: 13.99,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salads',
    dietary: ['Halal']
  },

  // Subs
  {
    id: 'chicken-tikka-sub',
    name: 'Chicken Tikka Sub',
    description: 'Grilled chicken tikka with peppers, onions, and mint chutney',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Subs',
    dietary: ['Halal']
  },
  {
    id: 'italian-sub',
    name: 'Italian Sub',
    description: 'Salami, pepperoni, ham, provolone, lettuce, tomato, and Italian dressing',
    price: 10.99,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Subs'
  },

  // Signature Pizzas
  {
    id: 'butter-chicken-pizza',
    name: 'Butter Chicken Pizza',
    description: 'Creamy butter chicken sauce, tender chicken, red onions, and cilantro',
    price: 16.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Signature Pizzas',
    dietary: ['Halal'],
    sizes: [
      { name: 'Medium', price: 16.99 },
      { name: 'Large', price: 19.99 },
      { name: 'Extra Large', price: 22.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'paneer-tikka-pizza',
    name: 'Paneer Tikka Pizza',
    description: 'Tandoori sauce, marinated paneer, bell peppers, red onions, and mint chutney drizzle',
    price: 15.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Signature Pizzas',
    dietary: ['V', 'Halal'],
    sizes: [
      { name: 'Medium', price: 15.99 },
      { name: 'Large', price: 18.99 },
      { name: 'Extra Large', price: 21.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },

  // Manager's Picks
  {
    id: 'managers-special',
    name: 'Manager\'s Special',
    description: 'Pepperoni, sausage, mushrooms, bell peppers, onions, and olives',
    price: 17.99,
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Manager\'s Picks',
    sizes: [
      { name: 'Medium', price: 17.99 },
      { name: 'Large', price: 20.99 },
      { name: 'Extra Large', price: 23.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'fusion-feast',
    name: 'Fusion Feast',
    description: 'Half butter chicken, half pepperoni - the best of both worlds',
    price: 19.99,
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Manager\'s Picks',
    dietary: ['Halal'],
    sizes: [
      { name: 'Medium', price: 19.99 },
      { name: 'Large', price: 22.99 },
      { name: 'Extra Large', price: 25.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },

  // Classic Pizzas
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Fresh tomato sauce, mozzarella, and fresh basil',
    price: 13.99,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Classic Pizzas',
    dietary: ['V'],
    sizes: [
      { name: 'Medium', price: 13.99 },
      { name: 'Large', price: 16.99 },
      { name: 'Extra Large', price: 19.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    description: 'Classic pepperoni with mozzarella cheese',
    price: 14.99,
    image: 'https://images.pexels.com/photos/3762034/pexels-photo-3762034.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Classic Pizzas',
    sizes: [
      { name: 'Medium', price: 14.99 },
      { name: 'Large', price: 17.99 },
      { name: 'Extra Large', price: 20.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },

  // Desserts
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Brownie',
    description: 'Warm chocolate brownie with vanilla ice cream',
    price: 6.99,
    image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Desserts',
    dietary: ['V']
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Traditional Indian sweet dumplings in rose syrup (2 pieces)',
    price: 5.99,
    image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Desserts',
    dietary: ['V', 'Halal']
  }
];

export const categories = [
  'Team Starters',
  'Fries',
  'Mac n\' Cheese',
  'Salads',
  'Subs',
  'Signature Pizzas',
  'Manager\'s Picks',
  'Classic Pizzas',
  'Build Your Own Pizza',
  'Desserts'
];