import React from 'react';
import { MenuItem } from '../types';
import { generateMenuItemSchema } from '../utils/seo';

interface MenuSEOProps {
  items: MenuItem[];
}

const MenuSEO: React.FC<MenuSEOProps> = ({ items }) => {
  // Generate structured data for featured menu items
  const featuredItems = items.slice(0, 5); // Show structured data for first 5 items
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Manager's Pizza Menu",
    "description": "Authentic Indian-spiced pizzas and classic favorites",
    "hasMenuSection": featuredItems.map(item => generateMenuItemSchema(item))
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default MenuSEO;