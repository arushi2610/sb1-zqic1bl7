import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // Team Starters
  {
    id: 'garlic-bread',
    name: 'Garlic Bread',
    description: 'Fresh baked bread with garlic butter, herbs, and marinara dipping sauce',
    price: 7.99,
    image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Team Starters'
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    description: 'Golden breaded mozzarella sticks served with marinara sauce (8 pieces)',
    price: 9.99,
    image: 'https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Team Starters',
    dietary: ['V']
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    description: 'Crispy chicken wings tossed in buffalo sauce with celery and ranch (10 pieces)',
    price: 12.99,
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Team Starters'
  },
  {
    id: 'jalapeno-poppers',
    name: 'Jalapeño Poppers',
    description: 'Fresh jalapeños stuffed with cream cheese, breaded and fried (8 pieces)',
    price: 8.99,
    image: 'https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Team Starters',
    dietary: ['V']
  },

  // Fries
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with melted cheese, bacon bits, and green onions',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fries'
  },
  {
    id: 'seasoned-fries',
    name: 'Seasoned Fries',
    description: 'Golden fries seasoned with our special spice blend',
    price: 5.99,
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fries',
    dietary: ['V']
  },
  {
    id: 'cheese-fries',
    name: 'Cheese Fries',
    description: 'Crispy fries smothered in melted cheddar cheese',
    price: 7.49,
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fries',
    dietary: ['V']
  },

  // Mac n' Cheese
  {
    id: 'classic-mac',
    name: 'Classic Mac & Cheese',
    description: 'Creamy three-cheese mac and cheese with golden breadcrumb topping',
    price: 10.99,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mac n\' Cheese',
    dietary: ['V']
  },
  {
    id: 'bacon-mac',
    name: 'Bacon Mac & Cheese',
    description: 'Our classic mac and cheese topped with crispy bacon pieces',
    price: 12.99,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mac n\' Cheese'
  },
  {
    id: 'buffalo-chicken-mac',
    name: 'Buffalo Chicken Mac',
    description: 'Mac and cheese with buffalo chicken and a drizzle of ranch',
    price: 13.99,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mac n\' Cheese'
  },

  // Salads
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan cheese, croutons, and caesar dressing',
    price: 9.99,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salads',
    dietary: ['V']
  },
  {
    id: 'garden-salad',
    name: 'Garden Salad',
    description: 'Mixed greens, tomatoes, cucumbers, red onions, and your choice of dressing',
    price: 8.99,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salads',
    dietary: ['V']
  },
  {
    id: 'chicken-caesar',
    name: 'Chicken Caesar Salad',
    description: 'Caesar salad topped with grilled chicken breast',
    price: 12.99,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salads'
  },

  // Subs
  {
    id: 'italian-sub',
    name: 'Italian Sub',
    description: 'Salami, pepperoni, ham, provolone, lettuce, tomato, onions, and Italian dressing',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Subs'
  },
  {
    id: 'chicken-parm-sub',
    name: 'Chicken Parmesan Sub',
    description: 'Breaded chicken breast, marinara sauce, and melted mozzarella cheese',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Subs'
  },
  {
    id: 'meatball-sub',
    name: 'Meatball Sub',
    description: 'Homemade meatballs, marinara sauce, and melted mozzarella cheese',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Subs'
  },
  {
    id: 'veggie-sub',
    name: 'Veggie Sub',
    description: 'Fresh vegetables, provolone cheese, lettuce, tomato, and Italian dressing',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Subs',
    dietary: ['V']
  },

  // Signature Pizzas
  {
    id: 'meat-lovers',
    name: 'Meat Lovers',
    description: 'Pepperoni, sausage, ham, bacon, and ground beef with mozzarella cheese',
    price: 18.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Signature Pizzas',
    sizes: [
      { name: 'Medium', price: 18.99 },
      { name: 'Large', price: 21.99 },
      { name: 'Extra Large', price: 24.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'veggie-supreme',
    name: 'Veggie Supreme',
    description: 'Mushrooms, bell peppers, onions, black olives, tomatoes, and mozzarella',
    price: 16.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Signature Pizzas',
    dietary: ['V'],
    sizes: [
      { name: 'Medium', price: 16.99 },
      { name: 'Large', price: 19.99 },
      { name: 'Extra Large', price: 22.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken',
    description: 'Grilled chicken, red onions, cilantro, and BBQ sauce with mozzarella',
    price: 17.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Signature Pizzas',
    sizes: [
      { name: 'Medium', price: 17.99 },
      { name: 'Large', price: 20.99 },
      { name: 'Extra Large', price: 23.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'hawaiian',
    name: 'Hawaiian',
    description: 'Ham, pineapple, and mozzarella cheese with tomato sauce',
    price: 16.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Signature Pizzas',
    sizes: [
      { name: 'Medium', price: 16.99 },
      { name: 'Large', price: 19.99 },
      { name: 'Extra Large', price: 22.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },

  // Manager's Picks
  {
    id: 'managers-special',
    name: 'Manager\'s Special',
    description: 'Pepperoni, sausage, mushrooms, bell peppers, onions, and black olives',
    price: 19.99,
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Manager\'s Picks',
    sizes: [
      { name: 'Medium', price: 19.99 },
      { name: 'Large', price: 22.99 },
      { name: 'Extra Large', price: 25.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'white-pizza',
    name: 'White Pizza',
    description: 'Ricotta, mozzarella, parmesan, garlic, and fresh herbs (no tomato sauce)',
    price: 17.99,
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Manager\'s Picks',
    dietary: ['V'],
    sizes: [
      { name: 'Medium', price: 17.99 },
      { name: 'Large', price: 20.99 },
      { name: 'Extra Large', price: 23.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'buffalo-chicken-pizza',
    name: 'Buffalo Chicken Pizza',
    description: 'Buffalo chicken, red onions, mozzarella, and ranch drizzle',
    price: 18.99,
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Manager\'s Picks',
    sizes: [
      { name: 'Medium', price: 18.99 },
      { name: 'Large', price: 21.99 },
      { name: 'Extra Large', price: 24.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },

  // Classic Pizzas
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Fresh tomato sauce, mozzarella cheese, and fresh basil',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Classic Pizzas',
    dietary: ['V'],
    sizes: [
      { name: 'Medium', price: 14.99 },
      { name: 'Large', price: 17.99 },
      { name: 'Extra Large', price: 20.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    description: 'Classic pepperoni with mozzarella cheese and tomato sauce',
    price: 15.99,
    image: 'https://images.pexels.com/photos/3762034/pexels-photo-3762034.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Classic Pizzas',
    sizes: [
      { name: 'Medium', price: 15.99 },
      { name: 'Large', price: 18.99 },
      { name: 'Extra Large', price: 21.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },
  {
    id: 'cheese',
    name: 'Cheese',
    description: 'Simple and delicious - mozzarella cheese with tomato sauce',
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
    id: 'sausage',
    name: 'Sausage',
    description: 'Italian sausage with mozzarella cheese and tomato sauce',
    price: 15.99,
    image: 'https://images.pexels.com/photos/3762034/pexels-photo-3762034.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Classic Pizzas',
    sizes: [
      { name: 'Medium', price: 15.99 },
      { name: 'Large', price: 18.99 },
      { name: 'Extra Large', price: 21.99 }
    ],
    crusts: ['Thin Crust', 'Hand-tossed', 'Thick Crust']
  },

  // Desserts
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Brownie',
    description: 'Warm chocolate brownie served with vanilla ice cream',
    price: 6.99,
    image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Desserts',
    dietary: ['V']
  },
  {
    id: 'cinnamon-sticks',
    name: 'Cinnamon Sticks',
    description: 'Fresh baked dough sticks with cinnamon sugar and icing (8 pieces)',
    price: 5.99,
    image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Desserts',
    dietary: ['V']
  },
  {
    id: 'cheesecake',
    name: 'New York Cheesecake',
    description: 'Rich and creamy cheesecake with graham cracker crust',
    price: 7.99,
    image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Desserts',
    dietary: ['V']
  },
  {
    id: 'chocolate-chip-cookies',
    name: 'Chocolate Chip Cookies',
    description: 'Fresh baked chocolate chip cookies (4 pieces)',
    price: 4.99,
    image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Desserts',
    dietary: ['V']
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