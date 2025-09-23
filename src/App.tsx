import React, { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
import CouponSection from './components/CouponSection';
import HeroSection from './components/HeroSection';
const MenuSection = React.lazy(() => import('./components/MenuSection'));
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import OrderOnlineSection from './components/OrderOnlineSection';
import Footer from './components/Footer';
import { trackSectionView } from './utils/analytics';
import { sectionSEO, updatePageTitle, updateMetaDescription } from './utils/seo';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Throttle scroll updates with rAF and use a passive listener to avoid blocking scrolling.
    let ticking = false;
    const sections = ['home', 'menu', 'about', 'contact'];

    const update = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            
            // Update SEO data based on active section
            const seoData = sectionSEO[section as keyof typeof sectionSEO];
            if (seoData) {
              updatePageTitle(seoData.title);
              updateMetaDescription(seoData.description);
            }
            break;
          }
        }
      }
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    // Track section navigation
    trackSectionView(sectionId);
    
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    // Track section navigation
    trackSectionView(sectionId);
    
    // Update SEO data for the section
    const seoData = sectionSEO[sectionId as keyof typeof sectionSEO];
    if (seoData) {
      updatePageTitle(seoData.title);
      updateMetaDescription(seoData.description);
    }
    
    if (sectionId !== 'cart') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
      <section id="home">
        <HeroSection />
        <CouponSection />
      </section>
      <section id="menu">
        <Suspense fallback={<div className="py-20 text-center">Loading menu…</div>}>
          <MenuSection />
        </Suspense>
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
      <Footer />
    </div>
  );
}

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
      <section id="home">
        <HeroSection />
        <CouponSection />
      </section>
      <section id="menu">
        <Suspense fallback={<div className="py-20">Loading menu…</div>}>
          <MenuSection />
        </Suspense>
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
      <Footer />
    </div>
  );
}