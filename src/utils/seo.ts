// SEO utility functions for Manager's Pizza

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Default SEO data
export const defaultSEO: SEOData = {
  title: "Manager's Pizza - Authentic Indian & Classic Pizzas | Order Online",
  description: "Experience the best of both worlds at Manager's Pizza! Authentic Indian-spiced pizzas like Tandoori Chicken & Butter Chicken, plus classic favorites. Fresh ingredients, bold flavors. Order online for delivery & pickup.",
  keywords: [
    "pizza restaurant",
    "Indian pizza", 
    "tandoori chicken pizza",
    "butter chicken pizza",
    "classic pizza",
    "pizza delivery",
    "pizza pickup",
    "fresh pizza",
    "authentic flavors",
    "Manager's Pizza"
  ],
  ogImage: "/Manager_sPizza_Hero.jpg",
  canonicalUrl: "https://managerspizza.com"
};

// SEO data for different sections
export const sectionSEO = {
  menu: {
    title: "Menu - Manager's Pizza | Indian & Classic Pizzas",
    description: "Explore our diverse menu featuring authentic Indian-spiced pizzas, classic favorites, wings, salads, and more. Fresh ingredients, bold flavors, unbeatable taste.",
    keywords: [
      "pizza menu",
      "Indian pizza menu",
      "tandoori pizza",
      "butter chicken pizza",
      "pizza varieties",
      "restaurant menu"
    ]
  },
  about: {
    title: "About Us - Manager's Pizza | Authentic Pizza Experience",
    description: "Learn about Manager's Pizza - where authentic Indian flavors meet classic pizza traditions. Our story of bringing unique, flavorful pizzas to food lovers.",
    keywords: [
      "about Manager's Pizza",
      "pizza restaurant story",
      "authentic Indian pizza",
      "pizza tradition"
    ]
  },
  contact: {
    title: "Contact & Location - Manager's Pizza | Order Online",
    description: "Get in touch with Manager's Pizza for orders, inquiries, or feedback. Find our location, phone number, and ordering information.",
    keywords: [
      "contact Manager's Pizza",
      "pizza restaurant contact",
      "order pizza",
      "pizza delivery contact"
    ]
  }
};

// Generate structured data for menu items
export const generateMenuItemSchema = (item: any) => ({
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": item.name,
  "description": item.description,
  "image": item.image,
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": item.price.toString()
  },
  "menuAddOn": item.sizes ? item.sizes.map((size: any) => ({
    "@type": "MenuSection",
    "name": size.name,
    "offers": {
      "@type": "Offer", 
      "priceCurrency": "USD",
      "price": size.price.toString()
    }
  })) : undefined,
  "suitableForDiet": item.dietary?.includes('V') ? "VegetarianDiet" : 
                    item.dietary?.includes('VE') ? "VeganDiet" : undefined
});

// Update page title dynamically
export const updatePageTitle = (title: string) => {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
};

// Update meta description dynamically
export const updateMetaDescription = (description: string) => {
  if (typeof document !== 'undefined') {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }
};

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// SEO-friendly URL slugs
export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Local business schema for restaurant
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Manager's Pizza",
  "image": "https://managerspizza.com/Manager_sPizza_Hero.jpg",
  "description": defaultSEO.description,
  "url": "https://managerspizza.com",
  "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
  "priceRange": "$",
  "servesCuisine": ["Pizza", "Indian", "American"],
  "hasMenu": "https://managerspizza.com/#menu",
  "acceptsReservations": false,
  "takeAway": true,
  "delivery": true,
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "USD"
};