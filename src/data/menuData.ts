import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // ⭐ Manager’s Picks
  {
    id: 'tandoori-chicken-pizza',
    name: 'Tandoori Chicken Pizza',
    description: 'Marinated chicken, red onions, Bell peppers, tomatoes, Jalapeños, Fresh green onions, and Cilantro on Homemade sauce',
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
    name: 'Tandoori Paneer Pizza',
    description: 'Marinated paneer, red onions, tomatoes, Bell peppers, jalapeños, fresh green onions, and cilantro on homemade sauce.',
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
    description: 'Marinated chicken, Mushrooms, red onions, diced tomatoes, fresh green onions, and cilantro with homemade sauce.',
    category: "Manager's Picks",
    image: '/ButterChickenPizza.jpg',
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
    description: 'Marinated chicken, red onions, bell peppers, Ginger, Garlic, tomatoes, fresh green onions, and Cilantro on homemade sauce.',
    category: "Manager's Picks",
    image: '/Manager_sPizza_ChickenTikkaMasalaPizza.jpg',
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
    description: 'Marinated paneer, red onions, bell peppers, ginger, garlic, tomatoes, fresh green onions, and cilantro on homemade sauce. ',
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
    description: 'Marinated chicken, garlic, red onions, bell peppers, tomatoes, and cilantro on creamy garlic sauce.',
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
    description: 'Marinated Gobi (cauliflower), garlic, Bell peppers, Red onions, tomatoes and cilantro on Creamy garlic sauce. ',
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
    description: 'Marinated chicken, garlic, red onions, bell peppers, tomatoes, fresh green onions, and cilantro on homemade sauce. ',
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
    description: 'Mushrooms, bell peppers, red onions, Olives, tomatoes, fresh green onions, and Cilantro on homemade sauce. ',
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
    description: 'Marinated paneer, red onions, bell pepper, tomatoes, green chili, jalapeños, fresh green onions, and cilantro on homemade sauce. ',
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
    description: 'Tandoori Chicken, Chicken Tikka, Butter Chicken, BBQ Chicken, Onions, and Bell Peppers on Red Sauce. ',
    category: "Manager's Picks",
    image: '/Manager_sPizza_MasalaSupremeFeastPizza.jpg',
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
  { id: 'veggie-supreme', name: 'Veggie Supreme', description: 'Mushrooms, black olives, bell peppers, red onions, and fresh sliced tomatoes on red sauce. ', category: 'Signature Pizzas', price: 18.99, image: '/Manager_sPizza_VeggieSupremePizza.jpg' },
  { id: 'supreme-feast', name: 'Supreme Feast', description: 'Salami, pepperoni, sausage, ground beef, mushrooms, black olives, bell pepper, and red onions on red sauce. ', category: 'Signature Pizzas', price: 18.99, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'white-delight', name: 'White Delight', description: 'Spinach, Mushrooms, Tomatoes , red onions, Artichoke hearts and fresh green onions on creamy garlic sauce. ', category: 'Signature Pizzas', price: 18.99, image: '/Manager_sPizza_WhiteDelightPizza.jpg' },
  { id: 'garlic-ranch-feast', name: 'Garlic Ranch Feast', description: 'Pepperoni, sausage, mushrooms, tomatoes, black olives, and fresh green onions on creamy garlic sauce. ', category: 'Signature Pizzas', price: 18.99, image: '/Manager_sPizza_GarlicRanchFeastPizza.jpg' },
  {
    id: 'custom-pizza',
    name: 'Build Your Own Pizza',
    description: 'Choose your sauce, crust, toppings, and cheese to create your perfect pizza!',
    image: '/MP-redlogo.jpg',
    category: 'Build Your Own Pizza',
    sizes: [
      { name: 'Small (10")', price: 18.99 },
      { name: 'Medium (12")', price: 22.99 },
      { name: 'Large (14")', price: 28.99 },
      { name: 'XL (16")', price: 34.99 }
    ],
    crusts: ['Regular', 'Skinny'],
    sauces: ['Red', 'Creamy Garlic', 'Sweet Chili', 'BBQ', 'Pesto'],
    toppings: [
      'Pepperoni', 'Italian Sausage', 'Bacon', 'Chicken(Grilled/BBQ/Marinated)', 'Ham', 'Beef', 'Salami',
      'Mushrooms', 'Red Onion', 'Bell Peppers', 'Olives', 'Spinach', 'Tomato', 'Garlic', 'Jalapenos', 'Pineapple', 'Artichoke Hearts', 'Green Onions', 'Cilantro', 'Basil', 'Sun-dried Tomatoes', 'Green Chili', 'Marinated Paneer',
    ],
    price: 18.99,
    dietary: [],
  },
  { id: 'the-hamazon', name: 'The Hamazon', description: 'Ham, pineapple, tomatoes, red onions, bacon, and fresh green onions on our sweet & Spicy Sauce .', category: 'Signature Pizzas', price: 18.99, image: '/Manager_sPizza_TheHamazonPizza.jpg' },
  { id: 'ham-it-up', name: 'Ham It Up', description: 'Ham and Pineapple on Red Sauce.', category: 'Signature Pizzas', price: 18.99, image: '/Manager_sPizza_HamItUpPizza.jpg' },
  { id: 'meaty-union', name: 'Meaty Union', description: 'Ham, Salami, Pepperoni, sausage, and ground beef on Red Sauce. ', category: 'Signature Pizzas', price: 18.99, image: '/Manager_sPizza_MeatyUnionPizza.jpg' },
  { id: 'pizza-margherita', name: 'Pizza Margherita', description: 'Baby tomatoes and fresh basil leaves on Red Sauce. ', category: 'Signature Pizzas', dietary: ['V'], price: 18.99, image: '/Manager_sPizza_MargheritaPizza.jpg' },
  { id: 'garlic-rooster', name: 'Garlic Rooster', description: 'Grilled Chicken, Mushrooms, Tomatoes, Red onions and fresh green onions on creamy garlic sauce.', category: 'Signature Pizzas', price: 18.99, image: '/Manager_sPizza_GarlicRoosterPizza.jpg' },
  { id: 'tangy-bbq', name: 'Tangy BBQ', description: 'BBQ chicken, bacon, and pineapple on tangy BBQ sauce.', category: 'Signature Pizzas', price: 18.99, image: '/Manager_sPizza_TangyBBQPizza.jpg' },
  { id: 'mediterranean', name: 'Mediterranean', description: 'Chicken, artichoke hearts, olives, and sundried tomatoes, and feta cheese on pesto sauce. ', category: 'Signature Pizzas', dietary: ['V'], price: 18.99, image: '/Manager_sPizza_MediterraneanPizza.jpg' },

  // 🍕 Classic Pizzas
  { id: 'classic-pepperoni', name: 'Classic Pepperoni', description: 'Our hand-tossed crust topped with rich tomato sauce, whole milk-mozzarella and crispy pepperoni. ', category: 'Classic Pizzas', price: 15.99, image: '/Manager_sPizza_PepperoniPizza.jpg' },
  { id: 'classic-cheese', name: 'Classic Cheese', description: 'Our hand-tossed crust topped with rich tomato sauce and whole milk-mozzarella.', category: 'Classic Pizzas', dietary: ['V'], price: 13.99, image: '/Manager_sPizza_CheesePizza.jpg' },

  // Build Your Own Pizza (removed duplicate)

  // 🍗 Wings
  { id: 'classic-wings-10', name: 'Classic Wings (10 pcs)', description: 'Choose your flavor!', price: 12.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wings', flavors: ['Buffalo', 'BBQ', 'Mango Habanero', 'Sweet Chili', 'Teriyaki', 'Lemon Pepper', 'Garlic Parmesan', 'Tangy Tandoori', 'Pickle Pop'] },
  { id: 'classic-wings-20', name: 'Classic Wings (20 pcs)', description: 'Choose your flavor!', price: 22.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wings', flavors: ['Buffalo', 'BBQ', 'Mango Habanero', 'Sweet Chili', 'Teriyaki', 'Lemon Pepper', 'Garlic Parmesan', 'Tangy Tandoori', 'Pickle Pop'] },
  { id: 'boneless-wings-half', name: 'Boneless Wings (½ lb)', description: 'Choose your flavor!', price: 10.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wings', flavors: ['Buffalo', 'BBQ', 'Mango Habanero', 'Sweet Chili', 'Teriyaki', 'Lemon Pepper', 'Garlic Parmesan', 'Tangy Tandoori', 'Pickle Pop'] },
  { id: 'boneless-wings-1lb', name: 'Boneless Wings (1 lb)', description: 'Choose your flavor!', price: 16.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wings', flavors: ['Buffalo', 'BBQ', 'Mango Habanero', 'Sweet Chili', 'Teriyaki', 'Lemon Pepper', 'Garlic Parmesan', 'Tangy Tandoori', 'Pickle Pop'] },

  // 🍟 Starters & Sides
  { id: 'garlic-bread-cheese', name: 'Garlic Bread with Cheese', description: 'Toasted bread topped with garlic butter and melted mozzarella cheese.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'garlic-sticks', name: 'Garlic Sticks with Cheese', description: 'Soft breadsticks brushed with garlic butter and topped with mozzarella cheese.', category: 'Starters & Sides', dietary: ['V'], price: 6.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'pesto-sticks', name: 'Pesto Sticks', description: 'Soft breadsticks topped with aromatic pesto sauce and mozzarella cheese.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'masala-breadsticks', name: 'Masala Breadsticks', description: 'Crispy breadsticks seasoned with a flavorful blend of Indian spices.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'mozzarella-sticks', name: 'Mozzarella Sticks (8 pcs)', description: 'Crispy golden sticks filled with melted mozzarella cheese with the choice of dipping ranch or marinara.', category: 'Starters & Sides', dietary: ['V'], price: 9.99, image: '/Manager_sPizza_MozzerallaSticks.jpg' },
  { id: 'jalapeno-poppers', name: 'Jalapeño Poppers (8 pcs)', description: 'Crispy fried jalapeños stuffed with creamy cheese with the choice of dipping ranch or blue cheese.', category: 'Starters & Sides', dietary: ['V'], price: 8.99, image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cauliflower-crisps', name: 'Cauliflower Crisps', description: 'Light and crunchy bites made from seasoned cauliflower.A tasty wholesome snack.', category: 'Starters & Sides', dietary: ['V'], price: 8.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'vegan-nuggets', name: 'Vegan Nuggets', description: 'Crispy,golden nuggets made from plant-based ingredients. Totally meat free.', category: 'Starters & Sides', dietary: ['VE'], price: 8.99, image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'fries-regular', name: 'Fries (Regular)', description: 'Classic golden fries, lightly salted and perfect for any meal .', category: 'Starters & Sides', dietary: ['V'], price: 5.99, image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'fries-garlic', name: 'Fries (Garlic)', description: 'Crispy fries tossed in garlic butter.', category: 'Starters & Sides', dietary: ['V'], price: 6.99, image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'fries-bacon', name: 'Fries (Bacon-Loaded)', description: 'Golden fries topped with crispy bacon bits, fresh green onions and lots of cheese on the top.', category: 'Starters & Sides', price: 8.99, image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'fries-truffle', name: 'Fries (Truffle Parmesan)', description: 'Crispy fries tossed in truffle oil and sprinkled with parmesan cheese.', category: 'Starters & Sides', price: 8.99, image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cheese-knots', name: 'Cheese Knots', description: 'Rich and buttery rolls made with white garlic sauce, whole milk mozzarella, and minced garlic. Served with your favorite dipping sauce.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cheese-knots-jalapeno', name: 'Cheese Knots (Jalapeño)', description: 'Rich and buttery rolls made with white garlic sauce, whole milk mozzarella, and diced pepperoni. Served with your favorite dipping sauce.', category: 'Starters & Sides', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cheese-knots-bacon', name: 'Cheese Knots (Bacon-Loaded)', description: 'Rich and buttery rolls made with white garlic sauce, whole milk mozzarella, and smoked bacon. Served with your favorite dipping sauce. ', category: 'Starters & Sides', price: 8.99, image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🧀 Mac n’ Cheese
  { id: 'mac-classic', name: 'Mac n’ Cheese (Classic)', description: 'Creamy, cheesy, and comforting—our classic mac and cheese is made with tender elbow pasta smothered in a rich blend of melted cheeses. A timeless favorite!', price: 8.99, category: 'Mac n’ Cheese', dietary: ['V'], image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'mac-buffalo-chicken', name: 'Mac n’ Cheese (Buffalo Chicken)', description: 'Our creamy mac and cheese gets a bold twist! Topped with spicy buffalo chicken, drizzled with ranch, and finished with a hint of heat. Comfort food with a kick.', price: 10.99, category: 'Mac n’ Cheese', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🥗 Salads
  { id: 'salad-garden', name: 'Garden Salad', description: 'Fresh iceberg lettuce, cucumbers, olives, cherry tomatoes, carrots, and mozzarella cheese with your choice of dressing. ', price: 8.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-greek', name: 'Greek Salad', description: 'Spring mix, green olives, feta cheese, cherry tomatoes, cucumber with the Italian dressing.', price: 8.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-caesar', name: 'Caesar Salad', description: 'Fresh romaine lettuce, croutons, and Parmesan cheese with Caesar dressing.', price: 8.99, category: 'Salads', dietary: ['V'], image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-chicken-caesar', name: 'Chicken Caesar Salad + $3', description: 'Romaine lettuce, grilled chicken, parmesan cheese, croutons with caesar dressing. ', price: 11.99, category: 'Salads', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-high-protein', name: 'High Protein Salad', description: 'Spring mix,Garbanzo beans,broccoli,marinated paneer/chicken, sunflower seeds with side of blue cheese. ', price: 11.99, category: 'Salads', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'salad-antipasto', name: 'Antipasto Salad', description: 'Fresh iceberg lettuce, salami, ham, mozzarella cheese, cherry tomatoes, cucumbers, and red onions with balsamic vinaigrette.', price: 11.99, category: 'Salads', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🥪 Subs & Sandwiches
  { id: 'sub-spicy-chicken', name: 'Spicy Chicken Sub', description: '- A juicy,spicy crispy chicken breast served on a fresh sandwich roll with lettuce, onions,tomato,pickles and special sauce.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-buffalo-chicken', name: 'Buffalo Chicken Sub', description: 'Sandwich-A juicy, crispy buffalo chicken breast served on a fresh sandwich roll with lettuce, onions, tomato,pickles and special sauce.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-crispy-chicken', name: 'Crispy Chicken Sub', description: 'A juicy, crispy chicken breast served on a fresh sandwich roll with lettuce, onions, tomato, pickles and special sauce.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-bbq-chicken', name: 'BBQ Chicken Sub', description: 'A juicy, grilled BBQ chicken served on a fresh sandwich roll with lettuce, onion, tomato, pickles and special sauce. ', category: 'Subs & Sandwiches', price: 11.99, image: '/BBQChickenSandwich.jpg' },
  { id: 'sub-chicken-parmesan', name: 'Chicken Parmesan Sub', description: 'A crispy fried chicken breast topped with marinara sauce and melted mozzarella served on a fresh sandwich roll.', category: 'Subs & Sandwiches', price: 12.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-teriyaki-chicken', name: 'Teriyaki Chicken Sub', description: 'A juicy grilled teriyaki chicken served on a fresh sandwich roll with lettuce, onion, tomatoes and pickles.', category: 'Subs & Sandwiches', price: 11.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-tandoori-chicken', name: 'Tandoori Paneer/Chicken Sandwich', description: 'A flavorful tandoori-spiced based sandwich with your choice of chicken or paneer ,served on a fresh sandwich roll with lettuce, onions, tomato and pickles.', category: 'Subs & Sandwiches', price: 12.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'sub-butter-chicken', name: 'Butter Paneer/Chicken Sandwich', description: 'A flavorful Buttery-spiced based sandwich with your choice of chicken or paneer, served on a fresh sandwich roll with lettuce, onions, tomato and pickles.', category: 'Subs & Sandwiches', price: 12.99, image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800' },

  // 🍰 Desserts
  { id: 'mini-churros', name: 'Mini Churros', description: '16 mini churros coated in Cinnamon sugar.', category: 'Desserts', dietary: ['V'], price: 6.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'nutella-pizza', name: 'Nutella Pizza (10")', description: 'Golden-baked dough layered with warm Nutella, and topped with a sprinkle of powdered sugar.', category: 'Desserts', dietary: ['V'], price: 10.99, image: '/Manager_sPizza_NutellaPizza.jpg' },
  { id: 'cinnamon-dessert-pizza', name: 'Cinnamon Dessert Pizza (10")', description: 'A warm, soft pizza crust topped with buttery cinnamon sugar.', category: 'Desserts', dietary: ['V'], price: 9.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'tiramisu', name: 'Tiramisu', description: 'A rich creamy Italian dessert with coffee, cream and cocoa.', category: 'Desserts', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cheesecake-slice', name: 'Cheesecake Slice', description: 'Rich and velvety cheesecake slice with a buttery base.', category: 'Desserts', dietary: ['V'], price: 7.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'cookie-pizza', name: 'Cookie Pizza', description: 'A decadent 8-inch, soft and chewy chocolate chip cookie baked until golden brown. Made with semi-sweet chocolate chips', category: 'Desserts', dietary: ['V'], price: 8.99, image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800' },
  // --- Beverages: Cans ($2.50) ---
  { id: 'can-cocacola', name: 'Coca-Cola', description: 'Classic Coca-Cola in a 12oz can', category: 'Cans', price: 2.50, image: '/coke-can.png' },
  { id: 'can-fanta', name: 'Fanta', description: 'Orange Fanta in a 12oz can', category: 'Cans', price: 2.50, image: '/fanta-can.jpg' },
  { id: 'can-fanta-pineapple', name: 'Fanta Pineapple', description: 'Pineapple Fanta in a 12oz can', category: 'Cans', price: 2.50, image: '/fanta-pa-can.jpg' },
  { id: 'can-sprite', name: 'Sprite', description: 'Lemon-lime Sprite in a 12oz can', category: 'Cans', price: 2.50, image: '/sprite-can.jpg' },
  { id: 'can-sprite-zero', name: 'Sprite Zero Sugar', description: 'Zero sugar Sprite in a 12oz can', category: 'Cans', price: 2.50, image: '/sprite-zero-sugar-can.png' },
  { id: 'can-coke-zero', name: 'Coke Zero', description: 'Zero sugar Coca-Cola in a 12oz can', category: 'Cans', price: 2.50, image: '/coke-zero-can.png' },
  { id: 'can-diet-coke', name: 'Diet Coke', description: 'Diet Coca-Cola in a 12oz can', category: 'Cans', price: 2.50, image: '/diet-coke-can.png' },
  { id: 'can-root-beer', name: 'Root Beer', description: 'Classic root beer in a 12oz can', category: 'Cans', price: 2.50, image: '/rootbeer-can.jpg' },
  // --- Beverages: 20oz ($4.50) ---
  { id: '20oz-cocacola', name: 'Coca-Cola', description: 'Classic Coca-Cola in a 20oz bottle', category: '20oz', price: 4.50, image: '/coke-20oz.png' },
  { id: '20oz-diet-coke', name: 'Diet Coke', description: 'Diet Coca-Cola in a 20oz bottle', category: '20oz', price: 4.50, image: '/diet-coke-20.png' },
  { id: '20oz-fanta', name: 'Fanta', description: 'Orange Fanta in a 20oz bottle', category: '20oz', price: 4.50, image: '/fanta-20oz.png' },
  { id: '20oz-dasani-water', name: 'Dasani Water', description: 'Purified Dasani water in a 20oz bottle', category: '20oz', price: 4.50, image: '/dasani-water-20oz.png' },
  { id: '20oz-pure-leaf-sweet', name: 'Pure Leaf Tea (Sweetened)', description: 'Sweetened iced tea in a 20oz bottle', category: '20oz', price: 4.50, image: '/tea-sweet.png' },
  { id: '20oz-pure-leaf-unsweet', name: 'Pure Leaf Tea (Unsweetened)', description: 'Unsweetened iced tea in a 20oz bottle', category: '20oz', price: 4.50, image: '/tea-unsweet.png' },
  // --- Beverages: 2 Liters ($5.50) ---
  { id: '2ltr-coke', name: 'Coke', description: 'Classic Coca-Cola in a 2 liter bottle', category: '2 Liters', price: 5.50, image: '/coke-2ltr.png' },
  { id: '2ltr-diet-coke', name: 'Diet Coke', description: 'Diet Coca-Cola in a 2 liter bottle', category: '2 Liters', price: 5.50, image: '/dietcoke-2ltr.png' },
  { id: '2ltr-fanta', name: 'Fanta', description: 'Orange Fanta in a 2 liter bottle', category: '2 Liters', price: 5.50, image: '/fanta-2ltr.png' },
  { id: '2ltr-sprite', name: 'Sprite', description: 'Lemon-lime Sprite in a 2 liter bottle', category: '2 Liters', price: 5.50, image: '/sprite-2ltr.png' },
];


export const categories = [
  'Pizzas',
  'Wings',
  'Starters & Sides',
  'Mac n’ Cheese',
  'Salads',
  'Subs & Sandwiches',
  'Desserts',
  'Beverages'
];