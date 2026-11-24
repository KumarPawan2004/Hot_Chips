'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BadgeBar from '../components/BadgeBar';
import ProductCatalog from '../components/ProductCatalog';
import CartDrawer from '../components/CartDrawer';
import ReviewsSection from '../components/ReviewsSection';
import AboutSection from '../components/AboutSection';
import StoreInfoSection from '../components/StoreInfoSection';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('hotchips_tray');
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('hotchips_tray', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(i => i.id === item.id);
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += item.quantity;
        return copy;
      }
      return [...prev, item];
    });
  };

  const handleUpdateQuantity = (itemId, newQty) => {
    setCartItems(prev =>
      prev.map(item => item.id === itemId ? { ...item, quantity: newQty } : item)
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#231C16]">
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        <Hero
          onExploreMenu={() => {
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <BadgeBar />

        <ProductCatalog
          onAddToCart={handleAddToCart}
        />

        <AboutSection />

        <ReviewsSection />

        <StoreInfoSection />
      </main>

      <Footer />

      <FloatingActions
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
