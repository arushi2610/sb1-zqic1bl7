import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // ⭐ Manager’s Picks
  {
    id: 'tandoori-chicken-pizza',
    name: 'Tandoori Chicken Pizza',
    description: 'Marinated chicken, bell peppers, onions, tomatoes, jalapeños, green onions, and cilantro. Indian-inspired fusion pizza with homemade sauces and authentic spices.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular']
  },
  {
    id: 'paneer-tandoori-pizza',
    name: 'Paneer Tandoori Pizza',
    description: 'Marinated paneer with the same bold blend of veggies and spice.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular'],
    dietary: ['V']
  },
  {
    id: 'butter-chicken-pizza',
    name: 'Butter Chicken Pizza',
    description: 'Buttery, creamy, and loaded with mushrooms, red onions, tomatoes, and herbs.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular']
  },
  {
    id: 'chicken-tikka-masala-pizza',
    name: 'Chicken Tikka Masala Pizza',
    description: 'A twist on the classic dish with garlic, ginger, veggies, and bold masala.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular']
  },
  {
    id: 'paneer-tikka-masala-pizza',
    name: 'Paneer Tikka Masala Pizza',
    description: 'Indian-inspired fusion pizza with marinated paneer, masala sauce, and veggies.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular'],
    dietary: ['V']
  },
  {
    id: 'achari-chicken-pizza',
    name: 'Achari Chicken Pizza',
    description: 'Pickle Pop! Marinated chicken with tangy Indian pickle spices, peppers, and onions.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular']
  },
  {
    id: 'achari-gobi-pizza',
    name: 'Achari Gobi Pizza',
    description: 'Pickle Pop! Marinated cauliflower with tangy Indian pickle spices, peppers, and onions.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular'],
    dietary: ['V']
  },
  {
    id: 'curry-chicken-pizza',
    name: 'Curry Chicken Pizza',
    description: 'Indian curry sauce, marinated chicken, veggies, and herbs.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular']
  },
  {
    id: 'curry-veggie-pizza',
    name: 'Curry Veggie Pizza',
    description: 'Indian curry sauce, assorted veggies, and herbs.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular'],
    dietary: ['V']
  },
  {
    id: 'chili-paneer-pizza',
    name: 'Chili Paneer Pizza',
    description: 'A spicy Indo-Chinese flavor bomb with paneer, peppers, onions, and chili sauce.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular'],
    dietary: ['V']
  },
  {
    id: 'masala-supreme-feast',
    name: 'Masala Supreme Feast',
    description: 'A mix of Tandoori, Tikka, Butter, and BBQ chicken, topped with peppers and onions.',
    category: "Manager's Picks",
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular']
  },

  // 🍕 Signature Pizzas
  { id: 'veggie-supreme', name: 'Veggie Supreme', description: 'A loaded veggie pizza with all your favorites.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'supreme-feast', name: 'Supreme Feast', description: 'A classic supreme with pepperoni, sausage, veggies, and cheese.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'white-delight', name: 'White Delight', description: 'Creamy white sauce, mozzarella, and garlic.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'garlic-ranch-feast', name: 'Garlic Ranch Feast', description: 'Garlic ranch base, chicken, and veggies.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'the-hamazon', name: 'The Hamazon', description: 'Ham, pineapple, and more.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'ham-it-up', name: 'Ham It Up', description: 'Ham, cheese, and classic toppings.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'meaty-union', name: 'Meaty Union', description: 'A meat lover’s dream.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'pizza-margherita', name: 'Pizza Margherita', description: 'Classic margherita with tomato, mozzarella, and basil.', category: 'Signature Pizzas', dietary: ['V'], price: 18.99, image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'garlic-rooster', name: 'Garlic Rooster', description: 'Garlic, chicken, and veggies.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'tangy-bbq', name: 'Tangy BBQ', description: 'BBQ sauce, chicken, and onions.', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'mediterranean', name: 'Mediterranean', description: 'Mediterranean veggies, feta, and olives.', category: 'Signature Pizzas', dietary: ['V'], price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🍕 Classic Pizzas
  { id: 'classic-pepperoni', name: 'Classic Pepperoni', description: 'Pepperoni and cheese.', category: 'Classic Pizzas', price: 15.99, image: 'https://images.pexels.com/photos/3762034/pexels-photo-3762034.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'classic-cheese', name: 'Classic Cheese', description: 'Cheese and tomato sauce.', category: 'Classic Pizzas', dietary: ['V'], price: 13.99, image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // Build Your Own Pizza (not a menu item, but for info)
  { id: 'build-your-own', name: 'Build Your Own Pizza', description: 'Choose your sauce, crust, toppings, and size. Sauces: Red, Garlic, Sweet Chili, BBQ, Pesto. Crust: Skinny or Regular. Toppings: Full range of meats, veggies & cheese. Sizes: Small (10") to XL (16") — from $18.99 to $34.99', category: 'Build Your Own Pizza', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🍗 Wings
  { id: 'classic-wings-10', name: 'Classic Wings (10 pcs)', description: 'Choose your flavor: Buffalo, BBQ, Mango Habanero, Sweet Chili, Teriyaki, Lemon Pepper, Garlic Parmesan, Tangy Tandoori, Pickle Pop.', price: 12.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wings' },
  { id: 'classic-wings-20', name: 'Classic Wings (20 pcs)', description: 'Choose your flavor: Buffalo, BBQ, Mango Habanero, Sweet Chili, Teriyaki, Lemon Pepper, Garlic Parmesan, Tangy Tandoori, Pickle Pop.', price: 22.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wings' },
  { id: 'boneless-wings-half', name: 'Boneless Wings (½ lb)', description: 'Choose your flavor: Buffalo, BBQ, Mango Habanero, Sweet Chili, Teriyaki, Lemon Pepper, Garlic Parmesan, Tangy Tandoori, Pickle Pop.', price: 10.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wings' },
  { id: 'boneless-wings-1lb', name: 'Boneless Wings (1 lb)', description: 'Choose your flavor: Buffalo, BBQ, Mango Habanero, Sweet Chili, Teriyaki, Lemon Pepper, Garlic Parmesan, Tangy Tandoori, Pickle Pop.', price: 16.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wings' },

  // 🍟 Starters & Sides
  { id: 'garlic-bread-cheese', name: 'Garlic Bread with Cheese', description: 'Cheesy garlic bread.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'garlic-sticks', name: 'Garlic Sticks', description: 'Classic garlic sticks.', category: 'Starters & Sides', dietary: ['V'], price: 6.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'pesto-sticks', name: 'Pesto Sticks', description: 'Pesto-flavored breadsticks.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'masala-breadsticks', name: 'Masala Breadsticks', description: 'Indian-spiced breadsticks.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'mozzarella-sticks', name: 'Mozzarella Sticks (8 pcs)', description: 'Breaded mozzarella sticks.', category: 'Starters & Sides', dietary: ['V'], price: 9.99, image: 'https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'jalapeno-poppers', name: 'Jalapeño Poppers (8 pcs)', description: 'Stuffed jalapeños.', category: 'Starters & Sides', dietary: ['V'], price: 8.99, image: 'https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cauliflower-crisps', name: 'Cauliflower Crisps', description: 'Crispy cauliflower bites.', category: 'Starters & Sides', dietary: ['V'], price: 8.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'vegan-nuggets', name: 'Vegan Nuggets', description: 'Plant-based nuggets.', category: 'Starters & Sides', dietary: ['VE'], price: 8.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'fries-regular', name: 'Fries (Regular)', description: 'Classic fries.', category: 'Starters & Sides', dietary: ['V'], price: 5.99, image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'fries-garlic', name: 'Fries (Garlic)', description: 'Garlic fries.', category: 'Starters & Sides', dietary: ['V'], price: 6.99, image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'fries-bacon', name: 'Fries (Bacon-Loaded)', description: 'Fries loaded with bacon.', category: 'Starters & Sides', price: 8.99, image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'fries-truffle', name: 'Fries (Truffle Parmesan)', description: 'Truffle parmesan fries.', category: 'Starters & Sides', price: 8.99, image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cheese-knots', name: 'Cheese Knots', description: 'Cheese garlic knots.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cheese-knots-jalapeno', name: 'Cheese Knots (Jalapeño)', description: 'Jalapeño cheese knots.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cheese-knots-bacon', name: 'Cheese Knots (Bacon-Loaded)', description: 'Bacon-loaded cheese knots.', category: 'Starters & Sides', price: 8.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🧀 Mac n’ Cheese
  { id: 'mac-classic', name: 'Mac n’ Cheese (Classic)', description: 'Classic mac n’ cheese.', price: 8.99, category: 'Mac n’ Cheese', dietary: ['V'], image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'mac-buffalo-chicken', name: 'Mac n’ Cheese (Buffalo Chicken)', description: 'Buffalo chicken mac n’ cheese.', price: 10.99, category: 'Mac n’ Cheese', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🥗 Salads
  { id: 'salad-garden', name: 'Garden Salad', description: 'Fresh, crunchy, and loaded with toppings.', price: 8.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-garden-family', name: 'Garden Salad (Family)', description: 'Family size garden salad.', price: 15.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-greek', name: 'Greek Salad', description: 'Greek salad with feta and olives.', price: 8.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-greek-family', name: 'Greek Salad (Family)', description: 'Family size Greek salad.', price: 15.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-caesar', name: 'Caesar Salad', description: 'Classic Caesar salad.', price: 8.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-caesar-family', name: 'Caesar Salad (Family)', description: 'Family size Caesar salad.', price: 15.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-chicken-caesar', name: 'Chicken Caesar Salad', description: 'Caesar salad with chicken.', price: 11.99, category: 'Salads', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-high-protein', name: 'High Protein Salad', description: 'With paneer or chicken.', price: 11.99, category: 'Salads', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-antipasto', name: 'Antipasto Salad', description: 'Classic antipasto salad.', price: 11.99, category: 'Salads', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🥪 Subs & Sandwiches
  { id: 'sub-spicy-chicken', name: 'Spicy Chicken Sub', description: 'Hot, toasted, and filled with spicy chicken.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-buffalo-chicken', name: 'Buffalo Chicken Sub', description: 'Buffalo chicken sub.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-crispy-chicken', name: 'Crispy Chicken Sub', description: 'Crispy chicken sub.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-bbq-chicken', name: 'BBQ Chicken Sub', description: 'BBQ chicken sub.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-chicken-parmesan', name: 'Chicken Parmesan Sub', description: 'Chicken parmesan sandwich.', category: 'Subs & Sandwiches', price: 12.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-teriyaki-chicken', name: 'Teriyaki Chicken Sub', description: 'Teriyaki chicken sandwich.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-tandoori-chicken', name: 'Tandoori Chicken Sandwich', description: 'Tandoori chicken sandwich.', category: 'Subs & Sandwiches', price: 12.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-butter-chicken', name: 'Butter Chicken Sandwich', description: 'Butter chicken sandwich.', category: 'Subs & Sandwiches', price: 12.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-paneer-tandoori', name: 'Paneer Tandoori Sandwich', description: 'Tandoori paneer sandwich.', category: 'Subs & Sandwiches', dietary: ['V'], price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-paneer-butter', name: 'Paneer Butter Sandwich', description: 'Butter paneer sandwich.', category: 'Subs & Sandwiches', dietary: ['V'], price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🍰 Desserts
  { id: 'mini-churros', name: 'Mini Churros', description: 'Mini churros with dipping sauce.', category: 'Desserts', dietary: ['V'], price: 6.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'nutella-pizza', name: 'Nutella Pizza (10")', description: 'Nutella dessert pizza.', category: 'Desserts', dietary: ['V'], price: 10.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cinnamon-dessert-pizza', name: 'Cinnamon Dessert Pizza (10")', description: 'Cinnamon dessert pizza.', category: 'Desserts', dietary: ['V'], price: 9.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'tiramisu', name: 'Tiramisu', description: 'Classic tiramisu.', category: 'Desserts', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cheesecake-slice', name: 'Cheesecake Slice', description: 'Slice of cheesecake.', category: 'Desserts', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cookie-pizza', name: 'Cookie Pizza', description: 'Cookie dough dessert pizza.', category: 'Desserts', dietary: ['V'], price: 8.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export const categories = [
  "Manager's Picks",
  'Signature Pizzas',
  'Classic Pizzas',
  'Build Your Own Pizza',
  'Wings',
  'Starters & Sides',
  'Mac n’ Cheese',
  'Salads',
  'Subs & Sandwiches',
  'Desserts'
];