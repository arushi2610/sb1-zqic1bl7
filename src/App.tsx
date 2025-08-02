import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import CartSection from './components/CartSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import OrderOnlineSection from './components/OrderOnlineSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'cart') {
      setActiveSection('cart');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleOrderNow = () => {
    scrollToSection('menu');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header 
          activeSection={activeSection} 
          onSectionChange={scrollToSection} 
        />
        
        {activeSection === 'cart' ? (
          <div className="pt-16">
            <CartSection onSectionChange={scrollToSection} activeSection={activeSection} />
          </div>
        ) : (
          <>
            <section id="home">
              <HeroSection onOrderNow={handleOrderNow} />
            </section>
            
            <section id="menu">
              <MenuSection />
            </section>
            
            <section id="about">
              <AboutSection />
            </section>
            
            <section id="contact">
              <ContactSection />
            </section>
            
            <section id="order-online">
              <OrderOnlineSection />
            </section>
          </>
        )}
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;